# UI design styles — a catalog with live specimens

Live: https://jacoblbagent.github.io/ui-design-styles/

A single-page reference for UI/UX design styles. Every entry renders a **live specimen** built with the real technique the style is made of (no screenshots, no stock images), lists the **specific traits** that define it with the exact values (`backdrop-filter: blur(18px) saturate(160%)`, `box-shadow: 6px 6px 0 #000`, radii, type ramps), and carries a **copy button** for the traits, for the CSS and for a ready-to-paste **prompt**. It also notes what breaks the style, so the copy does not get misused.

## How it is organised

There are no categories. Two styles sharing a trait almost never share a bucket, so a bucket hides exactly the relationship worth seeing — Glassmorphism, Liquid glass and Aurora mesh all work through blur while sitting in different families, and Neo-brutalism borrows from Brutalist web while being filed elsewhere. The page replaces the buckets with two views that make overlap visible:

- **Atlas** — every style plotted on two independent values: restrained → loud (x) and flat → dimensional (y). **The names are the marks**: nothing is drawn but the style names, each starting on its own two values. A deterministic placement pass moves a name only to stop two of them touching — most never move at all — and a name that moves keeps a hairline running back to the exact spot, so nothing floats free. A filter dims the styles outside it rather than deleting them, so you can see what a trait sits next to.
- **Trait matrix** — 43 entries × 22 recurring techniques, grouped material, form, type, colour, behaviour. A solid mark is the trait the style is *made of*, a faint mark is one supporting it. Rows read as fingerprints: two styles with the same pattern are the same idea twice. **The matrix columns are the filters** — click a header or any mark to filter the atlas, the matrix and the grid together. The last column names each entry's closest neighbour by trait overlap.

Reading a mark means knowing both its row and its column, and across 43 rows of rotated headers that trace is long — so the matrix carries four aids: hairline boundaries where each technique group starts, the column labels repeated every fifteen rows, a crosshair that lights the hovered row and rings its column (hover or keyboard focus, both), and a readout bar pinned to the bottom of the viewport while the matrix is on screen, naming the pair: `Liquid glass · Display — not declared`. On the atlas, a label that the placement pass had to move gets a leader line back to its dot, so no name is ever floating free.

The vocabulary and the coordinates live in `data/facets.js`, authored the same way the traits are, and read from what each entry already declares. One new technique is one new column, not a reshuffle of the catalog.

Every entry then appears once in full, alphabetically, and clicking any card opens the detail: the specimen, the two axis values, the signature traits it is *made of*, the styles it shares traits with (as links), every declared trait with the ones it does not have, the traits list, the tokens and CSS, and the prompt. The modal closes on Escape, on the close button and on a backdrop click; a `#<style-id>` link (including the tags on the real-world example cards) opens the matching entry directly, and the entry's own links move between it and the styles it is closest to. The hash belongs to the open dialog: dismissing it — backdrop, Escape, the close button or a link out of it — puts the address back to the plain page via `replaceState`, so it stays out of the history and never leaves `/#glassmorphism` behind.

The masthead collapses as you scroll past the first screen, so the sticky bar keeps the controls without holding a third of the viewport.

Under about 640px the plane cannot hold 43 labels side by side, so the labels come off and the same styles are listed under the plot in axis order with their two values. Nothing is dropped, and the matrix scrolls with the style column pinned.

## Files

The stylesheet and every script are requested with a `?v=` build stamp in `index.html` — GitHub Pages caches assets for ten minutes, so bump that stamp on each deploy or returning visitors keep the old CSS/JS.

```
index.html          page shell, fonts, controls
styles.css          catalog chrome, the atlas and the matrix (tokens, light + dark, responsive)
app.js              renders the atlas, the matrix and the entries; search, facet filters, copy, embeds, theme
data/foundations.js 9 style entries
data/surfaces.js     6 style entries
data/expressive.js   12 style entries
data/patterns.js     16 style entries
data/facets.js      the classification: 22 columns, and every style's two axis values + tags
data/gallery.js     46 real sites: name, link, style tags, observations, framing permission
images/examples/     46 screenshots, captured from the live pages (720x450)
tools/capture.js     headless capture of real sites -> tools/raw + capture-report.json
tools/reshoot.js     re-captures specific sites with consent dialogs dismissed
tools/build-shots.py downscales captures and builds review contact sheets
tools/build-gallery.py  merges the capture report + annotations into data/gallery.js
tools/verify.js      headless verification: counts, atlas placement, matrix, filters, search, clipboard, embeds, mobile, dark
tools/verify-modal.js  headless verification of the detail modal: open/close paths, focus return, deep link, dark + mobile
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

Append an object to one of the `data/*.js` files, then classify it in `data/facets.js`:

```js
// data/patterns.js
{
  id: "my-style",           // used as the anchor and the specimen class
  name: "My style",
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

// data/facets.js — the same pass that writes the traits
"my-style": { v: 40, d: 60, t: { "soft-shadow": 2, round: 1, texture: 1 } },
```

`v` is restraint (0) to loud (100), `d` is flat (0) to dimensional (100), and every tag in `t` must be a column id from the top of the same file — `2` for a trait the style is made of, `1` for one supporting it. The atlas, the matrix, the filters, the neighbours and the copyable summary all derive from that one line. The renderer injects `css` into one shared sheet and puts `html` inside `<div class="spec spec--my-style">`, so scoping the selectors under `.spec--<id>` keeps entries from leaking into each other. Entries are sorted by name at load.

The verify harness fails if a style has no facets, if a tag is not in the vocabulary, or if an axis value is out of range.

## Design intent

The catalog chrome keeps to one neutral type ramp, hairline-only surfaces, a single accent, themed browser surfaces (selection, focus ring, scrollbar) and one authored interaction. The atlas and the matrix are chrome too, so neither is allowed to look like a style. The entries inside deliberately break those rules — a hard offset shadow, a blurred pane, banded scanlines — because breaking them *is* the entry. That is the difference between a specimen case and a template.

## Verify

```bash
python3 -m http.server 8791
NODE_PATH=$(dirname $(dirname $(readlink -f $(which npx))))/lib/node_modules node tools/verify.js
NODE_PATH=… node tools/verify-modal.js
```

The harness asserts: 43 entries and 43 non-empty specimens; 43 atlas points with no dot elements at all, every point within one percent of its authored values, no overlapping names, none outside the plot, and a leader line on every name that had to move; a 43 × 22 matrix whose mark counts match the declared data exactly, where every row has a neighbour, where the two repeated header rows are decorative (no buttons, hidden from assistive tech), and where the group boundaries are real 1px rules; the crosshair naming both its row and its column, clearing on pointer-leave and working from the keyboard, with the readout pinned inside the viewport while a deep mark is hovered; every style classified and every tag inside the vocabulary; facet filters narrowing the atlas, the matrix and the grid together, including a two-facet intersection and the clear path; the retired category chips being gone; the detail's placement, made-of traits, neighbour links and full facet list; 46 real-site cards with 46 loaded screenshots; zero dead style links from the gallery tags; 16 live-embed buttons against 30 framing refusals; an embed that actually loads a document; zero console/page errors; no horizontal overflow at 1440px or 390px; search result counts including the no-match state; clipboard contents for all three copy buttons; dark-mode toggle; and that reduced-motion still shows every entry.

## Deploy

Static, no build step. `.nojekyll` plus GitHub Pages serving the `main` branch root:

```bash
gh api -X POST repos/<user>/ui-design-styles/pages -f 'source[branch]=main' -f 'source[path]=/'
```

## Sources

Style names describe visual conventions in broad use; each entry lists the public write-ups that informed it where one exists (Wikipedia entries, `m3.material.io`, Apple's human interface guidelines, `neumorphism.io`, `glassmorphism.com`, `neobrutalism.dev`, WCAG 2.2).
