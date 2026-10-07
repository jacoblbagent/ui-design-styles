// Re-captures specific sites with consent dialogs dismissed and a longer settle.
// Usage: NODE_PATH=<playwright> node tools/reshoot.js id1 id2 ...
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const RAW = path.join(__dirname, 'raw');
const report = JSON.parse(fs.readFileSync(path.join(__dirname, 'capture-report.json'), 'utf8'));
const wanted = process.argv.slice(2);

const ACCEPT = [/^accept all/i, /accept all cookies/i, /^accept$/i, /accept & close/i, /accept and close/i,
  /i agree/i, /agree and continue/i, /^agree$/i, /^got it$/i, /allow all/i, /save and accept/i, /^okay$/i];
const DISMISS = [/^not now$/i, /no thanks/i, /^close$/i, /^dismiss$/i, /^maybe later$/i, /^skip$/i, /^no, thanks$/i];

async function dismiss(page) {
  for (const p of ACCEPT) {
    const btn = page.getByRole('button', { name: p }).first();
    if (await btn.count().catch(() => 0)) {
      if (await btn.isVisible().catch(() => false)) {
        await btn.click({ timeout: 2500 }).catch(() => {});
        await page.waitForTimeout(900);
        return 'clicked ' + p;
      }
    }
  }
  const link = page.locator('a', { hasText: /accept all|i agree|allow all/i }).first();
  if (await link.count().catch(() => 0) && await link.isVisible().catch(() => false)) {
    await link.click({ timeout: 2500 }).catch(() => {});
    await page.waitForTimeout(900);
    return 'clicked link';
  }
  return 'no button found';
}

// Conservative: only fixed-position overlays that identify themselves as consent chrome.
async function hideLeftovers(page) {
  return page.evaluate(() => {
    const hits = [];
    const look = /cookie|consent|privacy|gdpr|tracking/i;
    document.querySelectorAll('[class*="cookie" i],[id*="cookie" i],[class*="consent" i],[id*="consent" i],[class*="gdpr" i],[id*="gdpr" i],[aria-label*="cookie" i],[class*="cmp" i]').forEach((el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if ((cs.position === 'fixed' || cs.position === 'sticky') && r.height > 60 && r.width > 200) {
        el.style.setProperty('display', 'none', 'important');
        hits.push(el.className || el.id || el.tagName);
      }
    });
    // Generic pass: a fixed layer covering a quarter of the viewport that talks about consent.
    const vw = innerWidth, vh = innerHeight;
    document.querySelectorAll('body > *, body > * > *, [class*="modal" i],[class*="overlay" i],[class*="dialog" i],[role="dialog"]').forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.position !== 'fixed' && cs.position !== 'absolute') return;
      const r = el.getBoundingClientRect();
      if (r.width * r.height < 0.22 * vw * vh) return;
      const t = (el.innerText || '').slice(0, 400);
      if (!look.test(t) && !look.test(el.className + ' ' + el.id)) return;
      el.style.setProperty('display', 'none', 'important');
      hits.push((el.className || el.id || el.tagName) + ' [generic]');
    });
    document.querySelectorAll('iframe').forEach((f) => {
      const cs = getComputedStyle(f);
      if (cs.position !== 'fixed') return;
      const r = f.getBoundingClientRect();
      if (r.width * r.height > 0.12 * vw * vh) { f.style.setProperty('display', 'none', 'important'); hits.push('fixed iframe'); }
    });
    return hits.slice(0, 6);
  }).catch(() => []);
}

(async () => {
  const browser = await chromium.launch();
  for (const id of wanted) {
    const rec = report.find((r) => r.id === id);
    if (!rec) { console.log('unknown id', id); continue; }
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale: 'en-US',
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36'
    });
    const page = await ctx.newPage();
    page.on('dialog', (d) => d.dismiss().catch(() => {}));
    page.setDefaultTimeout(30000);
    try {
      await page.goto(rec.url, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(2500);
      const clicked = await dismiss(page);
      // promo popups (non-consent) are dismissed by their own wording, never hidden
      let closed = 'none';
      for (const p of DISMISS) {
        const b = page.getByRole('button', { name: p }).first();
        if (await b.count().catch(() => 0) && await b.isVisible().catch(() => false)) {
          await b.click({ timeout: 2500 }).catch(() => {});
          closed = 'clicked ' + p;
          await page.waitForTimeout(900);
          break;
        }
      }
      if (closed === 'none') { await page.keyboard.press('Escape').catch(() => {}); await page.waitForTimeout(400); }
      await page.waitForTimeout(1500);
      const hidden = await hideLeftovers(page);
      await page.waitForTimeout(5500); // long settle for JS-heavy pages
      await page.screenshot({ path: path.join(RAW, id + '.png') });
      rec.shot = true;
      rec.dismissed = clicked;
      rec.closed = closed;
      rec.hidden = hidden;
      rec.reshotAt = new Date().toISOString().slice(0, 10);
      console.log('RESHOT', id, '|', clicked, '| hidden:', hidden.join(', ') || 'none');
    } catch (e) {
      console.log('FAILED', id, String(e.message).slice(0, 90));
    }
    await ctx.close().catch(() => {});
  }
  fs.writeFileSync(path.join(__dirname, 'capture-report.json'), JSON.stringify(report, null, 2));
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
