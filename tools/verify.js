// Headless verification of the catalog over HTTP.
// Usage: node tools/verify.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.env.BASE_URL || 'http://localhost:8791/';
const OUT = path.join(__dirname, 'shots');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 950 }, deviceScaleFactor: 1 });
  await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: new URL(BASE).origin });
  const page = await ctx.newPage();

  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => errors.push('requestfailed: ' + r.url() + ' ' + (r.failure() || {}).errorText));

  await page.goto(BASE, { waitUntil: 'networkidle' });

  const report = {};

  // --- structure ---
  report.entries = await page.locator('.entry').count();
  report.sections = await page.locator('.section').count();
  report.specimens = await page.locator('.spec').count();
  report.specimensWithChild = await page.evaluate(() =>
    [...document.querySelectorAll('.spec')].filter((s) => s.children.length > 0).length);
  report.copyButtons = await page.locator('[data-copy]').count();
  report.cssRules = await page.evaluate(() =>
    [...document.styleSheets].reduce((n, s) => { try { return n + s.cssRules.length; } catch (e) { return n; } }, 0));
  report.countLine = await page.locator('#count-line').textContent();
  report.pageHeight = await page.evaluate(() => document.body.scrollHeight);
  report.hOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

  // --- classification layer: the atlas and the trait matrix ---
  // There are no categories any more. Every style is on the atlas, and the
  // matrix names the techniques. Both are generated from data/facets.js.
  report.sectionIds = await page.$$eval('.section', (ss) => ss.map((s) => s.id));
  report.facetCounts = await page.evaluate(() => {
    const declared = window.FACETS.styles;
    const cols = window.FACETS.columns.map((c) => c.id);
    return {
      styles: Object.keys(declared).length,
      columns: cols.length,
      catalogueIds: window.CATALOG.length,
      everyStyleClassified: window.CATALOG.every((e) => !!declared[e.id]),
      everyTagInVocabulary: Object.values(declared).every((f) => Object.keys(f.t).every((k) => cols.indexOf(k) !== -1)),
      everyStylePlaced: Object.values(declared).every((f) => typeof f.v === 'number' && typeof f.d === 'number' &&
        f.v >= 0 && f.v <= 100 && f.d >= 0 && f.d <= 100)
    };
  });
  report.atlasPoints = await page.locator('.atlas__pt').count();
  report.atlasDots = await page.locator('.atlas__dot').count();
  // a dot must sit where its two authored values put it (allow the sub-1% spread)
  report.atlasDotError = await page.evaluate(() => {
    const space = document.querySelector('.atlas__space').getBoundingClientRect();
    return [...document.querySelectorAll('.atlas__pt')].map((p) => {
      const d = p.querySelector('.atlas__dot').getBoundingClientRect();
      const f = window.FACETS.styles[p.getAttribute('data-id')] || {};
      const x = ((d.left + d.right) / 2 - space.left) / space.width * 100;
      const y = (space.bottom - (d.top + d.bottom) / 2) / space.height * 100;
      return { id: p.getAttribute('data-id'), dx: +(x - f.v).toFixed(2), dy: +(y - f.d).toFixed(2) };
    }).filter((o) => Math.abs(o.dx) > 1.05 || Math.abs(o.dy) > 1.05);
  });
  report.atlasLabelOverlaps = await page.evaluate(() => {
    const L = [...document.querySelectorAll('.atlas__label')].map((l) => ({ id: l.parentElement.getAttribute('data-id'), r: l.getBoundingClientRect() }));
    const out = [];
    for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) {
      const a = L[i].r, c = L[j].r;
      if (Math.min(a.right, c.right) - Math.max(a.left, c.left) > 2 && Math.min(a.bottom, c.bottom) - Math.max(a.top, c.top) > 2) out.push(L[i].id + '~' + L[j].id);
    }
    return out;
  });
  report.atlasLabelsOutside = await page.evaluate(() => {
    const space = document.querySelector('.atlas__space').getBoundingClientRect();
    return [...document.querySelectorAll('.atlas__label')]
      .filter((l) => { const q = l.getBoundingClientRect(); return q.left < space.left - 1 || q.right > space.right + 1 || q.top < space.top - 1 || q.bottom > space.bottom + 1; })
      .map((l) => l.parentElement.getAttribute('data-id'));
  });
  report.matrixRows = await page.locator('.matrix tbody tr').count();
  report.matrixCols = await page.locator('.matrix__col').count();
  report.matrixCells = await page.locator('.matrix__cell').count();
  report.matrixSignature = await page.locator('.matrix__cell[data-level="2"]').count();
  report.matrixSupporting = await page.locator('.matrix__cell[data-level="1"]').count();
  report.matrixMatchesData = await page.evaluate(() => {
    const declared = window.FACETS.styles;
    let sig = 0, sup = 0, want = 0;
    Object.keys(declared).forEach((id) => Object.values(declared[id].t).forEach((lv) => { if (lv === 2) sig++; if (lv === 1) sup++; }));
    document.querySelectorAll('.matrix__cell').forEach((c) => { want++; });
    return { sig, sup, cells: want, rowsTimesCols: document.querySelectorAll('.matrix tbody tr').length * window.FACETS.columns.length,
      everyRowHasNeighbour: [...document.querySelectorAll('.matrix__near')].every((td) => td.textContent.trim().length > 0) };
  });

  await page.locator('.matrix__colbtn[data-facet="blur-glass"]').click();
  await page.waitForTimeout(220);
  report.facetFilter = {
    entries: await page.locator('.entry').count(),
    points: await page.locator('.atlas__pt').count(),
    dimmed: await page.locator('.atlas__pt.is-dim').count(),
    line: await page.locator('#count-line').textContent(),
    listed: await page.locator('.filterline').textContent()
  };
  await page.locator('.matrix__colbtn[data-facet="loud-color"]').click();
  await page.waitForTimeout(220);
  report.facetIntersection = {
    entries: await page.locator('.entry').count(),
    line: await page.locator('#count-line').textContent()
  };
  await page.screenshot({ path: path.join(OUT, 'facet-filtered.png') });
  await page.locator('#clear-facets').click();
  await page.waitForTimeout(220);
  report.facetCleared = await page.locator('.entry').count();
  await page.locator('.atlas__pt[data-id="neumorphism"]').click();
  await page.waitForTimeout(220);
  report.atlasOpensDetail = await page.locator('#detail .modal__title').textContent();
  report.detailPlacement = await page.locator('#detail .placement__axes').textContent();
  report.detailMadeOf = await page.$$eval('#detail .traitlist button', (bs) => bs.map((b) => b.textContent.trim()));
  report.detailRelated = await page.$$eval('#detail .related button', (bs) => bs.map((b) => b.textContent.trim()));
  report.detailFacetList = await page.locator('#detail .traitlist--all li').count();
  await page.locator('#detail [data-goto]').first().click();
  await page.waitForTimeout(220);
  report.detailGoto = await page.locator('#detail .modal__title').textContent();
  await page.locator('#detail [data-close]').click();
  await page.waitForTimeout(200);
  await page.evaluate(() => window.scrollTo(0, 0));

  // --- hidden specimens (a scroll container that clips to nothing is a bug) ---
  report.clippedSpecimens = await page.evaluate(() =>
    [...document.querySelectorAll('.spec')].filter((s) => {
      const kid = s.firstElementChild;
      if (!kid) return true;
      const r = kid.getBoundingClientRect();
      return r.width < 8 || r.height < 8;
    }).map((s) => s.className.replace('spec ', '')));

  // --- light screenshots: three viewport slices + a couple of specimens ---
  await page.screenshot({ path: path.join(OUT, 'light-top.png') });
  await page.evaluate(() => window.scrollTo(0, 1400));
  await page.screenshot({ path: path.join(OUT, 'light-mid.png') });
  await page.evaluate(() => window.scrollTo(0, 3600));
  await page.screenshot({ path: path.join(OUT, 'light-low.png') });

  const shots = ['glassmorphism', 'neo-brutalism', 'material-2', 'token-system', 'data-dashboard', 'memphis'];
  for (const id of shots) {
    const el = page.locator('.entry#' + id);
    await el.scrollIntoViewIfNeeded();
    await el.screenshot({ path: path.join(OUT, 'spec-' + id + '.png') });
  }

  // --- real-world examples ---
  await page.evaluate(async () => {
    // walk the page so lazy images and the gallery section all resolve
    for (let y = 0; y < document.body.scrollHeight; y += 800) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2500);
  report.gallerySites = await page.locator('.site').count();
  report.galleryImgs = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('.site__shot img')];
    return { total: imgs.length, loaded: imgs.filter((i) => i.complete && i.naturalWidth > 50).length,
             broken: imgs.filter((i) => i.complete && i.naturalWidth <= 50).map((i) => i.getAttribute('src')) };
  });
  report.deadTagLinks = await page.evaluate(() =>
    [...document.querySelectorAll('.site__tags a')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => !document.querySelector(h)).slice(0, 10));
  report.embedButtons = await page.locator('[data-embed]').count();
  report.frameNotes = await page.evaluate(() => {
    const notes = [...document.querySelectorAll('.site__note')].map((n) => n.textContent);
    return { allows: notes.filter((t) => /Allows framing/.test(t)).length, refuses: notes.filter((t) => /Refuses framing/.test(t)).length };
  });

  const ge = page.locator('.entry#craigslist, .site#site-craigslist');
  await ge.first().scrollIntoViewIfNeeded();
  await page.locator('.site#site-craigslist').screenshot({ path: path.join(OUT, 'site-craigslist.png') }).catch(() => {});
  await page.locator('.site#site-gumroad').scrollIntoViewIfNeeded();
  await page.locator('.site#site-gumroad').screenshot({ path: path.join(OUT, 'site-gumroad.png') }).catch(() => {});
  await page.screenshot({ path: path.join(OUT, 'gallery-top.png') });

  // --- live embed actually loads a document ---
  await page.locator('.site#site-cargo [data-embed]').scrollIntoViewIfNeeded();
  await page.locator('.site#site-cargo [data-embed]').click();
  await page.waitForTimeout(6000);
  report.embedIframe = await page.evaluate(() => {
    const f = document.querySelector('.site#site-cargo .site__shot iframe');
    if (!f) return 'no iframe inserted';
    const r = f.getBoundingClientRect();
    return { present: true, w: Math.round(r.width), h: Math.round(r.height), src: f.getAttribute('src') };
  });
  await page.locator('.site#site-cargo').screenshot({ path: path.join(OUT, 'site-cargo-embedded.png') }).catch(() => {});

  // --- gallery filter chip ---
  await page.locator('.chip[data-view="gallery"]').click();
  report.galleryFilterStyles = await page.locator('.entry').count();
  report.galleryFilterSites = await page.locator('.site').count();
  report.galleryFilterLine = await page.locator('#count-line').textContent();
  await page.locator('.chip[data-view="all"]').click();
  await page.evaluate(() => window.scrollTo(0, 0));

  // --- theme toggle ---
  await page.locator('#theme-toggle').click();
  report.theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  report.toggleLabel = await page.locator('#theme-label').textContent();
  await page.screenshot({ path: path.join(OUT, 'dark-top.png') });
  await page.locator('#theme-toggle').click();

  // --- the facet chips carry the active state; the matrix columns are the controls ---
  report.chipFacetsWhenIdle = await page.locator('.chip[data-facet]').count();
  await page.locator('.matrix__colbtn[data-facet="soft-shadow"]').click();
  await page.waitForTimeout(220);
  report.chipFacetActive = await page.locator('.chip[data-facet="soft-shadow"][aria-pressed="true"]').count();
  report.softShadowFiltered = await page.locator('.entry').count();
  report.softShadowCountLine = await page.locator('#count-line').textContent();
  await page.screenshot({ path: path.join(OUT, 'filter-soft-shadow.png') });
  await page.locator('.chip[data-facet="soft-shadow"]').click();
  await page.waitForTimeout(220);
  report.softShadowCleared = await page.locator('.entry').count();
  report.chipCleared = await page.locator('.chip[data-facet]').count();
  report.categoryChipsRetired = await page.locator('.chip[data-view="foundations"], .chip[data-view="surfaces"], .chip[data-view="expressive"], .chip[data-view="patterns"]').count();
  await page.locator('.chip[data-view="all"]').click();

  // --- search ---
  await page.fill('#q', 'glass');
  await page.waitForTimeout(220);
  report.searchGlass = await page.locator('.entry').count();
  report.searchCountLine = await page.locator('#count-line').textContent();
  await page.fill('#q', 'terminal');
  await page.waitForTimeout(220);
  report.searchTerminal = await page.locator('.entry').count();
  await page.fill('#q', 'zzzz');
  await page.waitForTimeout(220);
  report.searchNoMatch = await page.locator('.entry').count();
  report.noMatchText = await page.locator('#sec-all .section__note').last().textContent();
  await page.fill('#q', '');
  await page.waitForTimeout(220);
  report.afterClear = await page.locator('.entry').count();

  // --- copy buttons actually write to the clipboard (they live in the detail modal) ---
  await page.locator('.entry#glassmorphism').click();
  await page.waitForTimeout(200);
  report.modalOpen = await page.evaluate(() => !!document.querySelector('#detail[open]'));
  report.modalTitle = await page.locator('#detail .modal__title').textContent();
  report.gridDetailHidden = await page.evaluate(() => !document.querySelector('.entry#glassmorphism .traits'));
  await page.screenshot({ path: path.join(OUT, 'detail-modal.png') });
  await page.locator('#detail [data-copy="css"]').click();
  await page.waitForTimeout(150);
  report.clipCss = await page.evaluate(() => navigator.clipboard.readText());
  await page.locator('#detail [data-copy="traits"]').click();
  await page.waitForTimeout(150);
  report.clipTraits = await page.evaluate(() => navigator.clipboard.readText());
  await page.locator('#detail [data-copy="prompt"]').click();
  await page.waitForTimeout(150);
  report.clipPrompt = await page.evaluate(() => navigator.clipboard.readText());
  report.toastText = await page.locator('.toast').textContent();
  await page.locator('#detail [data-close]').click();
  await page.waitForTimeout(200);
  report.modalClosed = await page.evaluate(() => !document.querySelector('#detail[open]'));

  // --- mobile ---
  const m = await ctx.newPage();
  await m.setViewportSize({ width: 390, height: 780 });
  await m.goto(BASE, { waitUntil: 'networkidle' });
  report.mobileHOverflow = await m.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  report.mobileInputFont = await m.evaluate(() => getComputedStyle(document.getElementById('q')).fontSize);
  await m.screenshot({ path: path.join(OUT, 'mobile-top.png') });
  await m.evaluate(() => window.scrollTo(0, 900));
  await m.screenshot({ path: path.join(OUT, 'mobile-mid.png') });

  // --- reduced motion still shows content ---
  const r = await ctx.newPage();
  await r.emulateMedia({ reducedMotion: 'reduce' });
  await r.goto(BASE, { waitUntil: 'networkidle' });
  report.reducedMotionEntries = await r.locator('.entry').count();
  report.reducedMotionVisible = await r.evaluate(() =>
    [...document.querySelectorAll('.entry')].filter((e) => e.getBoundingClientRect().height > 100).length);

  report.errors = errors;
  console.log(JSON.stringify(report, null, 2));

  await browser.close();
})().catch((e) => { console.error('HARNESS FAILED', e); process.exit(1); });
