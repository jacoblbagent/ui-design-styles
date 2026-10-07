# UI design styles — a catalog with live specimens

A single-page reference for UI/UX design styles. Every entry:

- renders a **live specimen** built with the real technique the style is made of (no screenshots, no stock images),
- lists the **specific traits** that define it, with the exact values (`backdrop-filter: blur(18px) saturate(160%)`, `box-shadow: 6px 6px 0 #000`, radii, type ramps),
- carries a **copy button** for the traits, for the CSS, and for a ready-to-paste **prompt** describing the style,
- notes what breaks the style, so the copy does not get misused.

43 entries across four sections: Foundations, Surfaces & depth, Expressive & era-bound, Structure & interaction.

## Files

```
index.html          page shell, fonts, controls
styles.css          catalog chrome (tokens, light + dark, responsive)
app.js              renders entries, search, category filters, copy buttons, theme toggle
data/foundations.js  9 entries
data/surfaces.js     6 entries
data/expressive.js   12 entries
data/patterns.js     16 entries
tools/verify.js     headless verification (Playwright): counts, filter/search, clipboard, mobile, dark
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

The harness asserts: 43 entries and 43 non-empty specimens, zero console/page errors, no horizontal overflow at 1440px or 390px, category counts, search result counts (including the no-match state), clipboard contents for all three copy buttons, dark-mode toggle, and that reduced-motion still shows every entry.

## Deploy

Static, no build step. `.nojekyll` plus GitHub Pages serving the `main` branch root:

```bash
gh api -X POST repos/<user>/ui-design-styles/pages -f 'source[branch]=main' -f 'source[path]=/'
```

## Sources

Style names describe visual conventions in broad use; each entry lists the public write-ups that informed it where one exists (Wikipedia entries, `m3.material.io`, Apple's human interface guidelines, `neumorphism.io`, `glassmorphism.com`, `neobrutalism.dev`, WCAG 2.2).
