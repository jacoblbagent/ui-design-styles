// What the LIVE site actually renders, in a cold cache context.
const { chromium } = require('playwright');
const URL_LIVE = 'https://jacoblbagent.github.io/ui-design-styles/';

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 950 } }); // fresh context = no warm cache
  const page = await ctx.newPage();
  await page.goto(URL_LIVE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const out = await page.evaluate(() => ({
    hasDialog: !!document.querySelector('#detail'),
    entries: document.querySelectorAll('.entry').length,
    cardsWithTraits: document.querySelectorAll('.entry .traits').length,
    cardsWithCopyBtn: document.querySelectorAll('.entry [data-copy]').length,
    viewDetailBtns: document.querySelectorAll('.entry [data-detail]').length,
    firstCardText: (document.querySelector('.entry') || {}).innerText,
  }));
  await page.locator('.entry [data-detail]').first().click();
  await page.waitForTimeout(400);
  out.modalOpened = await page.evaluate(() => !!document.querySelector('#detail[open]'));
  await page.screenshot({ path: 'tools/shots/live-modal.png' });
  console.log(JSON.stringify(out, null, 2));
  await b.close();
})().catch((e) => { console.error('FAILED', e); process.exit(1); });
