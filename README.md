# UI design styles — a catalog with live specimens

Live: https://jacoblbagent.github.io/ui-design-styles/

A single-page reference for UI/UX design styles. Every entry:

- renders a **live specimen** built with the real technique the style is made of (no screenshots, no stock images),
- lists the **specific traits** that define it, with the exact values (`backdrop-filter: blur(18px) saturate(160%)`, `box-shadow: 6px 6px 0 #000`, radii, type ramps),
- carries a **copy button** for the traits, for the CSS, and for a ready-to-paste **prompt** describing the style,
- notes what breaks the style, so the copy does not get misused.

43 style entries across four sections: Foundations, Surfaces & depth, Expressive & era-bound, Structure & interaction — plus a fifth section of 46 real-world sites showing those styles in the wild, each captured from the live page and tagged back to the style entries it demonstrates.

## Files

```
index.html          page shell, fonts, controls
styles.css          catalog chrome (tokens, light + dark, responsive)
app.js              renders entries + real sites, search, filters, copy, embeds, theme toggle
data/foundations.js  9 style entries
data/surfaces.js     6 style entries
data/expressive.js   12 style entries
data/patterns.js     16 style entries
data/gallery.js      46 real sites: name, link, style tags, observations, framing permission
images/examples/     46 screenshots, captured from the live pages (720x450)
tools/capture.js     headless capture of real sites -> tools/raw + capture-report.json
tools/reshoot.js     re-captures specific sites with consent dialogs dismissed
tools/build-shots.py downscales captures and builds review contact sheets
tools/build-gallery.py  merges the capture report + annotations into data/gallery.js
tools/verify.js      headless verification: counts, filter/search, clipboard, embeds, mobile, dark
```

## Real-world examples

The gallery is a record of what 46 live sites looked like on the capture date, not a mirror of them. Rules it follows:

- Screenshots are captured headlessly from the real page (1440x900 viewport, viewport slice, stored at 720x450) by `tools/capture.js`; nothing is drawn or invented.
- Each card states what to look at, observed from the capture, and links to the style entries it demonstrates.
- Where the site's headers permit framing, the card offers `Load live view`, which swaps the screenshot for the real page in an iframe. Where the site sends `X-Frame-Options: DENY/SAMEORIGIN` or a `frame-ancestors` allow-list, the card says so and opens the site in a new tab instead. That distinction is read from response headers at capture time, not guessed.
- Consent dialogs are dismissed or hidden before the shot (`tools/reshoot.js`) only when they cover the page; promo popups are dismissed by their own controls, never silently hidden.
- Sneaky cases are dropped rather than faked: sites that return 403 to headless clients, block on HTTP/2, or never leave a boot screen are not in the gallery.

Re-capturing after a while:

```bash
NODE_PATH=<playwright> node tools/capture.js     # refresh every capture
python3 tools/build-shots.py                     # jpgs + contact sheets for review
python3 tools/build-gallery.py                   # rebuild data/gallery.js
```

## Adding an entry

Append an object to one of the `data/*.js` files:

```js
{
  id: "my-style",           // used as the anchor and the specimen class
  name: "My style",
  cat: "surfaces",          // foundations | surfaces | expressive | patterns
  era: "2026–",
  origin: "One line on where it came from.",
  blurb: "One or two sentences on the idea.",
  traits: ["Specific, copyable trait with real values.", "…"],
  avoid: ["How it goes wrong.", "…"],
  html: `<div class="ms-card">…</div>`,
  css: `.spec--my-style .ms-card { … }`,   // every selector scoped under .spec--<id>
  prompt: "A paste-ready prompt describing the style.",
  sources: ["https://…"]
}
```

The renderer injects `css` into one shared sheet and puts `html` inside `<div class="spec spec--my-style">`, so scoping the selectors under `.spec--<id>` keeps entries from leaking into each other. Entries are sorted by name at load.

## Design intent

The catalog chrome keeps to one neutral type ramp, hairline-only surfaces, a single accent, themed browser surfaces (selection, focus ring, scrollbar) and one authored interaction. The entries inside it deliberately break those rules — a hard offset shadow, a blurred pane, banded scanlines — because breaking them *is* the entry. That is the difference between a specimen case and a template.

## Verify

```bash
python3 -m http.server 8791
NODE_PATH=$(dirname $(dirname $(readlink -f $(which npx))))/lib/node_modules node tools/verify.js
```

The harness asserts: 43 entries and 43 non-empty specimens, 46 real-site cards with 46 loaded screenshots, zero dead style links from the gallery tags, 16 live-embed buttons against 30 framing refusals, an embed that actually loads a document, zero console/page errors, no horizontal overflow at 1440px or 390px, category counts, the gallery filter, search result counts (including the no-match state), clipboard contents for all three copy buttons, dark-mode toggle, and that reduced-motion still shows every entry.

## Deploy

Static, no build step. `.nojekyll` plus GitHub Pages serving the `main` branch root:

```bash
gh api -X POST repos/<user>/ui-design-styles/pages -f 'source[branch]=main' -f 'source[path]=/'
```

## Sources

Style names describe visual conventions in broad use; each entry lists the public write-ups that informed it where one exists (Wikipedia entries, `m3.material.io`, Apple's human interface guidelines, `neumorphism.io`, `glassmorphism.com`, `neobrutalism.dev`, WCAG 2.2).
