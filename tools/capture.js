// Captures real-world site screenshots for the gallery section.
// Usage: NODE_PATH=<playwright> node tools/capture.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const RAW = path.join(__dirname, 'raw');
fs.mkdirSync(RAW, { recursive: true });

const CANDIDATES = [
  { id: 'berkshire-hathaway', url: 'https://www.berkshirehathaway.com/', name: 'Berkshire Hathaway' },
  { id: 'craigslist', url: 'https://craigslist.org/', name: 'Craigslist' },
  { id: 'hacker-news', url: 'https://news.ycombinator.com/', name: 'Hacker News' },
  { id: 'brutalist-websites', url: 'https://brutalistwebsites.com/', name: 'Brutalist Websites' },
  { id: 'space-jam-1996', url: 'https://www.spacejam.com/1996/', name: 'Space Jam 1996' },
  { id: 'camerons-world', url: 'https://www.cameronsworld.net/', name: "Cameron's World" },
  { id: 'windows93', url: 'https://www.windows93.net/', name: 'Windows 93' },
  { id: 'neocities', url: 'https://neocities.org/', name: 'Neocities' },
  { id: 'poolsuite', url: 'https://poolsuite.net/', name: 'Poolsuite' },
  { id: 'cyberpunk-net', url: 'https://www.cyberpunk.net/', name: 'Cyberpunk 2077' },
  { id: 'linear', url: 'https://linear.app/', name: 'Linear' },
  { id: 'vercel', url: 'https://vercel.com/', name: 'Vercel' },
  { id: 'stripe', url: 'https://stripe.com/', name: 'Stripe' },
  { id: 'apple', url: 'https://www.apple.com/', name: 'Apple' },
  { id: 'apple-vision-pro', url: 'https://www.apple.com/apple-vision-pro/', name: 'Apple Vision Pro' },
  { id: 'notion', url: 'https://www.notion.com/', name: 'Notion' },
  { id: 'rauno', url: 'https://rauno.me/', name: 'Rauno Freiberg' },
  { id: 'teenage-engineering', url: 'https://teenage.engineering/', name: 'Teenage Engineering' },
  { id: 'muji', url: 'https://www.muji.com/', name: 'MUJI' },
  { id: 'kinfolk', url: 'https://www.kinfolk.com/', name: 'Kinfolk' },
  { id: 'aesop', url: 'https://www.aesop.com/', name: 'Aesop' },
  { id: 'bang-olufsen', url: 'https://www.bang-olufsen.com/', name: 'Bang & Olufsen' },
  { id: 'rolex', url: 'https://www.rolex.com/', name: 'Rolex' },
  { id: 'pentagram', url: 'https://www.pentagram.com/', name: 'Pentagram' },
  { id: 'grilli-type', url: 'https://www.grillitype.com/', name: 'Grilli Type' },
  { id: 'fonts-in-use', url: 'https://fontsinuse.com/', name: 'Fonts In Use' },
  { id: 'stripe-press', url: 'https://press.stripe.com/', name: 'Stripe Press' },
  { id: 'nytimes', url: 'https://www.nytimes.com/', name: 'The New York Times' },
  { id: 'the-verge', url: 'https://www.theverge.com/', name: 'The Verge' },
  { id: 'its-nice-that', url: 'https://www.itsnicethat.com/', name: "It's Nice That" },
  { id: 'awwwards', url: 'https://www.awwwards.com/', name: 'Awwwards' },
  { id: 'gumroad', url: 'https://gumroad.com/', name: 'Gumroad' },
  { id: 'neobrutalism-dev', url: 'https://www.neobrutalism.dev/', name: 'Neobrutalism components' },
  { id: 'duolingo', url: 'https://www.duolingo.com/', name: 'Duolingo' },
  { id: 'headspace', url: 'https://www.headspace.com/', name: 'Headspace' },
  { id: 'mailchimp', url: 'https://mailchimp.com/', name: 'Mailchimp' },
  { id: 'mschf', url: 'https://mschf.com/', name: 'MSCHF' },
  { id: 'balenciaga', url: 'https://www.balenciaga.com/', name: 'Balenciaga' },
  { id: 'bun-sh', url: 'https://bun.sh/', name: 'Bun' },
  { id: 'charm-sh', url: 'https://charm.sh/', name: 'Charm' },
  { id: 'nushell', url: 'https://www.nushell.sh/', name: 'Nushell' },
  { id: 'grafana-play', url: 'https://play.grafana.org/', name: 'Grafana Play' },
  { id: 'our-world-in-data', url: 'https://ourworldindata.org/', name: 'Our World in Data' },
  { id: 'cloudflare-radar', url: 'https://radar.cloudflare.com/', name: 'Cloudflare Radar' },
  { id: 'github', url: 'https://github.com/', name: 'GitHub' },
  { id: 'openai', url: 'https://openai.com/', name: 'OpenAI' },
  { id: 'anthropic', url: 'https://www.anthropic.com/', name: 'Anthropic' },
  { id: 'are-na', url: 'https://www.are.na/', name: 'Are.na' },
  { id: 'ikea', url: 'https://www.ikea.com/', name: 'IKEA' },
  { id: 'figma', url: 'https://www.figma.com/', name: 'Figma' },
  { id: 'readymag', url: 'https://readymag.com/', name: 'Readymag' },
  { id: 'cargo', url: 'https://cargo.site/', name: 'Cargo' }
];

const BLOCK_HINTS = /just a moment|attention required|access denied|are you a robot|verify you are human|enable javascript and cookies|403 forbidden|not acceptable/i;

(async () => {
  const browser = await chromium.launch();
  const out = [];

  for (const c of CANDIDATES) {
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
      locale: 'en-US'
    });
    const page = await ctx.newPage();
    page.on('dialog', (d) => d.dismiss().catch(() => {}));
    page.setDefaultTimeout(30000);
    const rec = { id: c.id, name: c.name, url: c.url };
    try {
      const resp = await page.goto(c.url, { waitUntil: 'load', timeout: 30000 });
      rec.status = resp ? resp.status() : null;
      const h = resp ? resp.headers() : {};
      const xfo = h['x-frame-options'] || '';
      const csp = h['content-security-policy'] || '';
      const fa = /frame-ancestors([^;]*)/i.exec(csp);
      rec.frameAncestors = fa ? fa[1].trim() : null;
      rec.xFrameOptions = xfo || null;
      rec.frames = !(/deny|sameorigin/i.test(xfo) || (fa && !/\*/.test(fa[1])));
      await page.waitForTimeout(3000);
      rec.title = (await page.title()).slice(0, 120);
      rec.finalUrl = page.url();
      rec.blocked = BLOCK_HINTS.test(rec.title) || BLOCK_HINTS.test((await page.content()).slice(0, 4000));
      rec.h1 = await page.evaluate(() => {
        const el = document.querySelector('h1');
        return el ? el.innerText.trim().slice(0, 120).replace(/\s+/g, ' ') : null;
      }).catch(() => null);
      rec.bodyText = await page.evaluate(() => document.body ? document.body.innerText.slice(0, 400).replace(/\s+/g, ' ') : '').catch(() => '');
      rec.fonts = await page.evaluate(() => {
        const set = new Set();
        document.querySelectorAll('h1,h2,p,body,a,button').forEach((el) => {
          const f = getComputedStyle(el).fontFamily;
          if (f) f.split(',').forEach((s) => set.add(s.trim().replace(/["']/g, '')));
        });
        return [...set].slice(0, 8);
      }).catch(() => []);
      rec.bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor).catch(() => null);
      if (!rec.blocked && rec.status && rec.status < 400) {
        await page.screenshot({ path: path.join(RAW, c.id + '.png') });
        rec.shot = true;
      }
    } catch (e) {
      rec.error = String(e.message).slice(0, 140);
    }
    await ctx.close().catch(() => {});
    out.push(rec);
    process.stderr.write(`${rec.shot ? 'OK  ' : 'SKIP'} ${c.id} ${rec.status || rec.error || ''}\n`);
  }

  fs.writeFileSync(path.join(__dirname, 'capture-report.json'), JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ captured: out.filter((r) => r.shot).length, skipped: out.filter((r) => !r.shot).map((r) => r.id) }, null, 2));
  await browser.close();
})().catch((e) => { console.error('FAILED', e); process.exit(1); });
