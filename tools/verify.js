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
  await page.locator('.chip[data-cat="gallery"]').click();
  report.galleryFilterStyles = await page.locator('.entry').count();
  report.galleryFilterSites = await page.locator('.site').count();
  report.galleryFilterLine = await page.locator('#count-line').textContent();
  await page.locator('.chip[data-cat="all"]').click();
  await page.evaluate(() => window.scrollTo(0, 0));

  // --- theme toggle ---
  await page.locator('#theme-toggle').click();
  report.theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  report.toggleLabel = await page.locator('#theme-label').textContent();
  await page.screenshot({ path: path.join(OUT, 'dark-top.png') });
  await page.locator('#theme-toggle').click();

  // --- category filter ---
  await page.locator('.chip[data-cat="surfaces"]').click();
  report.surfacesFiltered = await page.locator('.entry').count();
  report.surfacesCountLine = await page.locator('#count-line').textContent();
  await page.screenshot({ path: path.join(OUT, 'filter-surfaces.png') });
  await page.locator('.chip[data-cat="all"]').click();

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
  report.noMatchText = await page.locator('.section__note').last().textContent();
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
