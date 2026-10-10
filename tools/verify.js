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
  // no explanatory blocks: the page states its numbers in the section heads and
  // keeps its prose in the detail dialog
  report.noProseBlocks = await page.evaluate(() => ({
    mastheadSub: document.querySelectorAll('.masthead__sub').length,
    filterHint: document.querySelectorAll('.filterhint').length,
    sectionNotes: document.querySelectorAll('.section__note').length,
    entryBlurbs: document.querySelectorAll('.entry__blurb').length,
    footNotes: document.querySelectorAll('.foot__note').length,
    /* what is left is functional micro-copy: the corner captions, the matrix
       legend, the readout hint and the gallery notes */
    keptMicroCopy: {
      axisCaptions: document.querySelectorAll('.atlas__axis').length,
      legendItems: document.querySelectorAll('.matrix__legend span').length,
      readoutHint: document.querySelectorAll('.matrix__ro-hint').length,
      /* the four corners name the four half-planes, one word each and none
         twice, so the plot carries no axis captions of its own */
      quadrantCaptions: document.querySelectorAll('.atlas__quad').length,
      quadrantWords: [...document.querySelectorAll('.atlas__quad')].map((el) => el.textContent),
      quadrantCorners: [...document.querySelectorAll('.atlas__quad')]
        .map((el) => el.className.replace('atlas__quad ', ''))
    }
  }));

  // the masthead tally is not shown any more: the section heads carry the counts
  report.mastheadCount = await page.evaluate(() => {
    const el = document.getElementById('count-line');
    const r = el.getBoundingClientRect();
    return {
      present: !!el,
      text: el.textContent,
      visuallyHidden: r.width <= 2 && r.height <= 2 && el.classList.contains('sr-only'),
      stillALiveRegion: el.getAttribute('role') === 'status',
      /* the atlas head is gone: no title, no count, no rule above the plot */
      atlasHead: document.querySelectorAll('#sec-atlas .section__head').length,
      sectionCounts: {
        matrix: document.querySelector('#sec-matrix .section__head .n').textContent,
        entries: document.querySelector('#sec-all .section__head .n').textContent
      }
    };
  });
  report.hOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

  /* the masthead is one line — name, search, filters, theme — and stays one
     line when a filter is pressed, so the sticky bar cannot grow under the
     pointer. The chip row scrolls sideways instead of wrapping. */
  report.mastheadOneLine = await page.evaluate(async () => {
    const parts = () => Array.from(document.querySelectorAll('.masthead__row > *, #chips'));
    /* one line means every part's box overlaps every other's vertically */
    const lines = () => {
      const boxes = parts().map((e) => e.getBoundingClientRect());
      return boxes.every((a) => boxes.every((b) => Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 0)) ? 1 : 2;
    };
    const row = document.getElementById('chips');
    const idle = { height: document.querySelector('.masthead').offsetHeight, lines: lines() };
    document.querySelector('.matrix__colbtn[data-facet="soft-shadow"]').click();
    await new Promise((r) => setTimeout(r, 220));
    const chip = document.querySelector('.chip[data-facet="soft-shadow"]');
    const cr = row.getBoundingClientRect(), pr = chip.getBoundingClientRect();
    const pressed = {
      height: document.querySelector('.masthead').offsetHeight,
      lines: lines(),
      pressedChipInsideRow: pr.left >= cr.left - 1 && pr.right <= cr.right + 1
    };
    chip.click();
    await new Promise((r) => setTimeout(r, 220));
    return {
      idle, pressed,
      chipRowWrap: getComputedStyle(row).flexWrap,
      chipRowScrolls: getComputedStyle(row).overflowX
    };
  });

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
  // --- kind: not everything here is a style ---
  report.kinds = await page.evaluate(() => {
    const F = window.FACETS, declared = F.styles, ids = F.kinds.map((k) => k.id);
    const counts = {};
    Object.values(declared).forEach((f) => { counts[f.k] = (counts[f.k] || 0) + 1; });
    return {
      vocabulary: ids,
      counts,
      everyEntryHasOneKind: Object.values(declared).every((f) => ids.indexOf(f.k) !== -1),
      everyKindDocumented: F.kinds.every((k) => !!k.note && !!k.one && !!k.label),
      total: Object.keys(declared).length
    };
  });
  report.kindChips = await page.$$eval('.chip[data-kind]', (bs) => bs.map((b) => b.textContent.trim()));
  report.kindBadgesOnCards = await page.locator('.entry .tag--kind').count();
  const kindProbe = {};
  for (const k of ['style', 'pattern', 'practice']) {
    await page.locator('.chip[data-kind="' + k + '"]').click();
    await page.waitForTimeout(220);
    kindProbe[k] = {
      entries: await page.locator('.entry').count(),
      matrixRows: await page.locator('.matrix tbody tr').count(),
      pointsKept: await page.locator('.atlas__name').count(),
      pointsDimmed: await page.locator('.atlas__name.is-dim').count(),
      badges: await page.$$eval('.entry .tag--kind', (bs) => [...new Set(bs.map((b) => b.textContent.trim()))]),
      line: await page.locator('#count-line').textContent()
    };
    /* the chips toggle, so the probe unpresses before the next one */
    await page.locator('.chip[data-kind="' + k + '"]').click();
    await page.waitForTimeout(200);
  }
  report.kindProbeResetsToAll = await page.locator('.chip[data-kind][aria-pressed="true"]').count();
  report.kindProbeEntriesBack = await page.locator('.entry').count();
  report.kindFilter = kindProbe;
  // a kind composes with a trait, and one Clear control clears both
  await page.locator('.chip[data-kind="practice"]').click();
  await page.waitForTimeout(200);
  await page.locator('.matrix__colbtn[data-facet="flat"]').click();
  await page.waitForTimeout(220);
  report.kindPlusTrait = { entries: await page.locator('.entry').count(), line: await page.locator('#count-line').textContent() };
  await page.locator('.chip[data-clear-facets]').click();
  await page.waitForTimeout(220);
  report.clearResetsBoth = { entries: await page.locator('.entry').count(), pressedKind: await page.locator('.chip[data-kind="practice"][aria-pressed="true"]').count() };
  // the detail states the kind, and a practice says plainly that it is not a look
  await page.locator('.entry#accessibility-first').click();
  await page.waitForTimeout(260);
  report.practiceDetail = {
    /* the kind is not restated in the detail head: the badge lives on the card only */
    kindInHead: await page.locator('#detail .modal__kind, #detail .tag--kind').count(),
    madeOf: await page.locator('#detail .traitlist:not(.traitlist--all)').textContent()
  };
  // the detail head is kept to essentials: the title and one blurb line — no meta, no badge
  report.detailHead = await page.evaluate(() => ({
    metaLines: document.querySelectorAll('#detail .modal__meta').length,
    blurbWords: document.querySelector('#detail .modal__blurb').textContent.split(/\s+/).filter(Boolean).length,
    kindBadge: document.querySelectorAll('#detail .modal__kind, #detail .tag--kind').length,
    blockheadHints: document.querySelectorAll('#detail .blockhead__hint').length
  }));
  await page.locator('#detail [data-close]').click();
  await page.waitForTimeout(200);

  report.atlasPoints = await page.locator('.atlas__name').count();
  report.atlasNamesOnly = await page.evaluate(() => ({
    names: document.querySelectorAll('.atlas__name').length,
    /* every wrapper the atlas used to have is gone: the name is the mark and
       the name is the control */
    wrapperElements: ['.atlas__pt', '.atlas__label', '.atlas__dot', '.atlas__stem']
      .map((sel) => document.querySelectorAll(sel).length).reduce((a, b) => a + b, 0),
    everyNameIsAButton: [...document.querySelectorAll('.atlas__name')].every((n) => n.tagName === 'BUTTON')
  }));
  // the name is the mark: it is placed at its two authored values, and where a
  // collision forces it aside it simply stands there — no leader line is drawn
  // back to the spot, so the plot carries names alone
  report.atlasNamePlacement = await page.evaluate(() => {
    const space = document.querySelector('.atlas__space').getBoundingClientRect();
    const offValues = [];
    let leadElements = 0, hasLeadClasses = 0;
    [...document.querySelectorAll('.atlas__name')].forEach((n) => {
      const x = space.left + (parseFloat(n.dataset.x) / 100) * space.width;
      const y = space.bottom - (parseFloat(n.dataset.y) / 100) * space.height;
      const box = n.getBoundingClientRect();
      const cx = (box.left + box.right) / 2, cy = (box.top + box.bottom) / 2;
      if (Math.abs(cx - x) > 1.5 || Math.abs(cy - y) > 1.5) offValues.push(n.dataset.id);
      leadElements += n.querySelectorAll('.atlas__lead').length;
      if (n.classList.contains('has-lead')) hasLeadClasses++;
    });
    return {
      namesOffValues: offValues,
      leadElements,
      hasLeadClasses,
      anyLeadInDocument: document.querySelectorAll('.atlas__lead').length
    };
  });

  report.atlasLabelOverlaps = await page.evaluate(() => {
    const L = [...document.querySelectorAll('.atlas__name')].map((l) => ({ id: l.getAttribute('data-id'), r: l.getBoundingClientRect() }));
    const out = [];
    for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) {
      const a = L[i].r, c = L[j].r;
      if (Math.min(a.right, c.right) - Math.max(a.left, c.left) > 2 && Math.min(a.bottom, c.bottom) - Math.max(a.top, c.top) > 2) out.push(L[i].id + '~' + L[j].id);
    }
    return out;
  });
  report.atlasLabelsOutside = await page.evaluate(() => {
    const space = document.querySelector('.atlas__space').getBoundingClientRect();
    return [...document.querySelectorAll('.atlas__name')]
      .filter((l) => { const q = l.getBoundingClientRect(); return q.left < space.left - 1 || q.right > space.right + 1 || q.top < space.top - 1 || q.bottom > space.bottom + 1; })
      .map((l) => l.getAttribute('data-id'));
  });
  report.matrixRows = await page.locator('.matrix tbody tr').count();
  report.matrixStyleRows = await page.locator('.matrix tbody tr').count();
  report.matrixRepeatRows = await page.locator('.matrix__repeat, .matrix__col--repeat').count();
  /* the column header row is pinned below the masthead while the table scrolls,
     so no mark is ever far from the name of its column */
  report.matrixHeaderPinned = await page.evaluate(async () => {
    document.getElementById('sec-matrix').scrollIntoView({ block: 'start' });
    window.scrollBy(0, 620);
    await new Promise((r) => setTimeout(r, 240));
    const th = document.querySelector('table.matrix thead th.matrix__col');
    const corner = document.querySelector('table.matrix thead .matrix__corner');
    const mastheadH = document.querySelector('.masthead').offsetHeight;
    const r = th.getBoundingClientRect();
    const label = th.querySelector('.matrix__collabel').getBoundingClientRect();
    const cornerTop = Math.round(corner.getBoundingClientRect().top);
    window.scrollTo(0, 0);
    return {
      position: getComputedStyle(th).position,
      top: Math.round(r.top), mastheadH,
      pinned: Math.abs(r.top - mastheadH) <= 1,
      cornerPinned: Math.abs(cornerTop - mastheadH) <= 1,
      labelsInsideStickyRow: label.top >= r.top - 1 && label.bottom <= r.bottom + 1,
      opaque: getComputedStyle(th).backgroundColor,
      wrapperOverflowY: getComputedStyle(document.querySelector('.matrix__scroll')).overflowY
    };
  });
  report.matrixCols = await page.locator('thead .matrix__col').count();
  report.matrixCells = await page.locator('.matrix__cell').count();
  report.matrixSignature = await page.locator('.matrix__cell[data-level="2"]').count();
  report.matrixSupporting = await page.locator('.matrix__cell[data-level="1"]').count();
  report.matrixMatchesData = await page.evaluate(() => {
    const declared = window.FACETS.styles;
    let sig = 0, sup = 0, want = 0;
    Object.keys(declared).forEach((id) => Object.values(declared[id].t).forEach((lv) => { if (lv === 2) sig++; if (lv === 1) sup++; }));
    document.querySelectorAll('.matrix__cell').forEach((c) => { want++; });
    const styleRows = document.querySelectorAll('.matrix tbody tr').length;
    return { sig, sup, cells: want, rowsTimesCols: styleRows * window.FACETS.columns.length,
      everyRowHasNeighbour: [...document.querySelectorAll('.matrix__near')].every((td) => td.textContent.trim().length > 0) };
  });

  // --- the reading aids: group boundaries, the crosshair, the readout, no tails ---
  report.matrixGroupBoundaries = await page.evaluate(() => {
    const form = document.querySelector('.matrix__cell[data-group="Form"]');
    const material = document.querySelector('.matrix__cell[data-group="Material"]');
    return {
      formBorder: getComputedStyle(form).borderLeftWidth,
      materialBorder: getComputedStyle(material).borderLeftWidth,
      groups: [...new Set([...document.querySelectorAll('.matrix__col[data-group]')].map((c) => c.getAttribute('data-group')))]
    };
  });
  // hover a mark in the middle of the table and read what the crosshair says
  const midCell = page.locator('.matrix tbody tr').nth(19).locator('.matrix__cell').nth(14);
  /* put the section at the top of the viewport, so the table still runs past the
     fold and the sticky bar below it has to pin rather than sit in view */
  await page.evaluate(() => document.getElementById('sec-matrix').scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(140);
  await midCell.scrollIntoViewIfNeeded();
  await midCell.hover();
  report.crosshairBarPinned = await page.evaluate(() => {
    const bar = document.querySelector('.matrix__bar').getBoundingClientRect();
    return bar.top > 0 && Math.round(window.innerHeight - bar.bottom) <= 14;
  });
  await page.waitForTimeout(220);
  report.crosshair = {
    readout: await page.locator('#matrix-readout').textContent(),
    hotRows: await page.locator('.matrix tbody tr.is-hotrow').count(),
    hotCells: await page.locator('.matrix__cell.is-hotcol').count(),
    hotHeader: await page.locator('.matrix__col.is-hotcol .matrix__collabel').first().textContent(),
    readoutInStickyBar: await page.evaluate(() => !!document.querySelector('.matrix__bar #matrix-readout'))
  };
  await page.screenshot({ path: path.join(OUT, 'matrix-crosshair.png') });
  await page.mouse.move(4, 4);
  await page.waitForTimeout(200);
  report.crosshairCleared = await page.locator('.is-hotcol, .is-hotrow').count();
  report.crosshairKeyboard = await page.evaluate(() => {
    const btn = document.querySelectorAll('.matrix tbody tr .matrix__cell button')[100];
    btn.focus();
    return { hot: document.querySelectorAll('.matrix__cell.is-hotcol').length, readout: document.getElementById('matrix-readout').textContent };
  });
  // the way out of a filter lives in the matrix section, beside the filters
  report.matrixClear = { idle: await page.locator('[data-clear-filters]').count() };
  /* unfiltered, the table runs past the fold, so the bar should be pinned to the
     bottom of the viewport rather than scrolled out of sight */
  report.matrixClear.barPinnedWhileUnfiltered = await page.evaluate(() => {
    document.getElementById('sec-matrix').scrollIntoView({ block: 'start' });
    const bar = document.querySelector('.matrix__bar').getBoundingClientRect();
    return bar.top > 0 && Math.round(window.innerHeight - bar.bottom) <= 14;
  });
  await page.locator('.matrix__colbtn[data-facet="blur-glass"]').click();
  await page.waitForTimeout(240);
  report.matrixClear.afterOneTrait = {
    buttons: await page.locator('[data-clear-filters]').count(),
    mastheadClear: await page.locator('.chip[data-clear-facets]').count(),
    entries: await page.locator('.entry').count(),
    inStickyBar: await page.evaluate(() => !!document.querySelector('.matrix__bar [data-clear-filters]')),
    barInViewport: await page.evaluate(() => {
      const bar = document.querySelector('.matrix__bar').getBoundingClientRect();
      return bar.top >= 0 && bar.bottom <= window.innerHeight + 1;
    })
  };
  await page.screenshot({ path: path.join(OUT, 'matrix-clear.png') });
  await page.locator('[data-clear-filters]').click();
  await page.waitForTimeout(240);
  report.matrixClear.afterClear = {
    buttons: await page.locator('[data-clear-filters]').count(),
    entries: await page.locator('.entry').count(),
    pressedChips: await page.locator('.chip[aria-pressed="true"][data-facet], .chip[aria-pressed="true"][data-kind]').count()
  };
  // it clears a kind and a trait together, in one click
  await page.locator('.chip[data-kind="pattern"]').click();
  await page.waitForTimeout(200);
  await page.locator('.matrix__colbtn[data-facet="round"]').click();
  await page.waitForTimeout(240);
  report.matrixClear.beforeBothCleared = { entries: await page.locator('.entry').count(), line: await page.locator('#count-line').textContent() };
  await page.locator('[data-clear-filters]').click();
  await page.waitForTimeout(240);
  report.matrixClear.afterBothCleared = { entries: await page.locator('.entry').count(), line: await page.locator('#count-line').textContent() };

  report.atlasLeads = await page.evaluate(() => {
    const names = [...document.querySelectorAll('.atlas__name')];
    const nudges = names.map((n) => Math.abs(parseFloat(n.style.getPropertyValue('--lnudge')) || 0)).sort((a, b) => a - b);
    return {
      namesOnTheirValue: nudges.filter((v) => v < 12).length,
      medianNudge: nudges[Math.floor(nudges.length / 2)],
      sides: names.reduce((a, n) => (a[n.dataset.side] = (a[n.dataset.side] || 0) + 1, a), {}),
      /* no tails of any kind: no lead element, no has-lead class, no --lead var */
      leadElements: document.querySelectorAll('.atlas__lead').length,
      hasLeadClasses: names.filter((n) => n.classList.contains('has-lead')).length,
      leadVars: names.filter((n) => n.style.getPropertyValue('--lead')).length
    };
  });

  await page.locator('.matrix__colbtn[data-facet="blur-glass"]').click();
  await page.waitForTimeout(220);
  report.facetFilter = {
    entries: await page.locator('.entry').count(),
    points: await page.locator('.atlas__name').count(),
    dimmed: await page.locator('.atlas__name.is-dim').count(),
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
  await page.locator('.atlas__name[data-id="neumorphism"]').click();
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
  /* there is no All chip: pressing the gallery chip again is the way back */
  await page.locator('.chip[data-view="gallery"]').click();
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
  /* the Everything chip is retired with them: nothing pressed means every kind */
  report.everythingChipRetired = await page.locator('.chip[data-kind="all"]').count();
  report.noKindPressed = await page.locator('.chip[data-kind][aria-pressed="true"]').count();

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
  report.mobileAtlas = await m.evaluate(() => ({
    plot: getComputedStyle(document.querySelector('.atlas__plot')).display,
    cornerCaptions: [...document.querySelectorAll('.atlas__quad')]
      .filter((c) => c.getBoundingClientRect().height > 0).length,
    legendRows: document.querySelectorAll('.atlas__legend li').length,
    namesOnPlane: [...document.querySelectorAll('.atlas__name')].filter((n) => n.getBoundingClientRect().height > 0).length
  }));
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
