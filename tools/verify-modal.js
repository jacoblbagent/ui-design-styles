// Extra checks: dark + mobile modal, backdrop click, Escape, deep link.
const { chromium } = require('playwright');
const path = require('path');
const OUT = path.join(__dirname, 'shots');
const BASE = process.env.BASE_URL || 'http://localhost:8791/';

(async () => {
  const b = await chromium.launch();
  const out = {};

  // dark theme modal
  const c1 = await b.newContext({ viewport: { width: 1440, height: 950 } });
  const p1 = await c1.newPage();
  const errs = [];
  p1.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  p1.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  await p1.goto(BASE, { waitUntil: 'networkidle' });
  await p1.locator('#theme-toggle').click();
  await p1.locator('.entry#neo-brutalism').click();
  await p1.waitForTimeout(250);
  await p1.screenshot({ path: path.join(OUT, 'dark-modal.png') });
  out.darkModalTheme = await p1.evaluate(() => document.documentElement.getAttribute('data-theme'));
  out.darkModalBg = await p1.evaluate(() => getComputedStyle(document.querySelector('#detail')).backgroundColor);
  out.bodyLocked = await p1.evaluate(() => getComputedStyle(document.body).overflow + '/' + (document.body.scrollHeight > window.innerHeight));

  // backdrop click closes
  await p1.mouse.click(40, 40);
  await p1.waitForTimeout(250);
  out.closedByBackdropClick = await p1.evaluate(() => !document.querySelector('#detail[open]'));
  out.focusRestored = await p1.evaluate(() => {
    const a = document.activeElement;
    return a ? a.tagName + (a.id ? '#' + a.id : '') : null;
  });

  // Escape closes
  await p1.locator('.entry#flat-design').click();
  await p1.waitForTimeout(200);
  await p1.keyboard.press('Escape');
  await p1.waitForTimeout(250);
  out.closedByEsc = await p1.evaluate(() => !document.querySelector('#detail[open]'));

  // click anywhere on the card body opens it
  await p1.locator('.entry#flat-design .entry__blurb').click();
  await p1.waitForTimeout(250);
  out.openedByCardClick = await p1.evaluate(() => {
    const d = document.querySelector('#detail[open]');
    return d ? d.querySelector('.modal__title').textContent : null;
  });
  await p1.keyboard.press('Escape');

  // deep link from a gallery tag
  await p1.goto(BASE + '#material-2', { waitUntil: 'networkidle' });
  await p1.waitForTimeout(300);
  out.deepLinkTitle = await p1.evaluate(() => {
    const d = document.querySelector('#detail[open]');
    return d ? d.querySelector('.modal__title').textContent : null;
  });
  await p1.keyboard.press('Escape');
  await p1.waitForTimeout(200);
  out.hashDoesNotReopen = await p1.evaluate(() => !document.querySelector('#detail[open]'));

  // mobile
  const c2 = await b.newContext({ viewport: { width: 390, height: 780 } });
  const p2 = await c2.newPage();
  await p2.goto(BASE, { waitUntil: 'networkidle' });
  await p2.locator('.entry#skeuomorphism').click();
  await p2.waitForTimeout(300);
  await p2.screenshot({ path: path.join(OUT, 'mobile-modal.png') });
  out.mobileHOverflow = await p2.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  out.mobileModal = await p2.evaluate(() => {
    const d = document.querySelector('#detail');
    const r = d.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), fitsW: r.width <= window.innerWidth, fitsH: r.height <= window.innerHeight, scrolls: d.scrollHeight > d.clientHeight };
  });
  out.dupeIds = await p2.evaluate(() => {
    const seen = {}, dupes = [];
    document.querySelectorAll('[id]').forEach((n) => { if (seen[n.id]) dupes.push(n.id); seen[n.id] = 1; });
    return dupes;
  });

  out.errors = errs;
  console.log(JSON.stringify(out, null, 2));
  await b.close();
})().catch((e) => { console.error('FAILED', e); process.exit(1); });
