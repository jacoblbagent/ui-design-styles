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

  // --- theme toggle ---
  await page.evaluate(() => window.scrollTo(0, 0));
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

  // --- copy buttons actually write to the clipboard ---
  await page.locator('.entry#glassmorphism [data-copy="css"]').click();
  await page.waitForTimeout(150);
  report.clipCss = await page.evaluate(() => navigator.clipboard.readText());
  await page.locator('.entry#glassmorphism [data-copy="traits"]').click();
  await page.waitForTimeout(150);
  report.clipTraits = await page.evaluate(() => navigator.clipboard.readText());
  await page.locator('.entry#glassmorphism [data-copy="prompt"]').click();
  await page.waitForTimeout(150);
  report.clipPrompt = await page.evaluate(() => navigator.clipboard.readText());
  report.toastText = await page.locator('.toast').textContent();

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
