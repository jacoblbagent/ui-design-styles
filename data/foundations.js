/* Foundations: the classic, systematised styles. */
(window.CATALOG = window.CATALOG || []).push(

{
  id: "skeuomorphism",
  name: "Skeuomorphism",
  era: "2007–2013",
  origin: "iOS 1–6 and early macOS: interfaces copied real materials so touch seemed less abstract.",
  blurb: "Controls pretend to be physical objects. Materials carry texture, bevels and specular highlights, and every affordance copies a real-world counterpart so the eye knows how it moves before touching it.",
  traits: [
    "Two-part shadows on every control: inset light from the top, inset dark from the bottom, plus a short outer drop.",
    "Multi-stop vertical gradients as surface material: <code>linear-gradient(#8fd455, #5cab25 48%, #428a17)</code>.",
    "1px darker border on the lit edge, 1px lighter inner highlight below it.",
    "Embossed text: <code>text-shadow: 0 -1px 0 rgba(0,0,0,.4)</code>, never a flat fill.",
    "Inset wells for recessed areas — <code>box-shadow: inset 0 2px 5px rgba(0,0,0,.7)</code>.",
    "One font per surface, always medium weight, never thin (thin type reads as flat)."
  ],
  avoid: [
    "Faking a material with a single radial gradient — the depth comes from the light pair, not the colour.",
    "Glow or blur as the depth cue; skeuomorphism is about edge light, not light emission."
  ],
  html: `<div class="sk-panel">
    <span class="sk-lcd">12:04</span>
    <button class="sk-btn" type="button">Launch</button>
    <div class="sk-slider"><span></span></div>
  </div>`,
  css: `.spec--skeuomorphism .sk-panel {
  width: 100%; max-width: 300px; padding: 16px; border-radius: 14px;
  border: 1px solid #949494; border-radius: 14px;
  background: linear-gradient(#f9f9f9, #dcdcdc 46%, #c3c3c3);
  box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #b0b0b0, 0 8px 18px rgba(0,0,0,.32);
}
.spec--skeuomorphism .sk-lcd {
  display: inline-block; padding: 6px 10px; border-radius: 5px;
  font: 500 13px/1 "IBM Plex Mono", monospace; letter-spacing: .08em; color: #c6f7b4;
  background: linear-gradient(#41503d, #1e2a1c);
  border: 1px solid #55613f;
  box-shadow: inset 0 2px 6px rgba(0,0,0,.75);
  text-shadow: 0 0 7px rgba(150,255,130,.8);
}
.spec--skeuomorphism .sk-btn {
  display: block; width: 100%; margin-top: 13px; padding: 12px;
  border-radius: 10px; border: 1px solid #40701f; cursor: pointer;
  font: 600 14px/1 "Instrument Sans", sans-serif; color: #fff;
  background: linear-gradient(#96d95c, #5cab25 48%, #3f8a15);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.75), inset 0 -3px 4px rgba(0,0,0,.22), 0 3px 7px rgba(0,0,0,.35);
  text-shadow: 0 -1px 0 rgba(0,0,0,.45);
}
.spec--skeuomorphism .sk-btn:active { box-shadow: inset 0 3px 6px rgba(0,0,0,.45); }
.spec--skeuomorphism .sk-slider {
  margin-top: 14px; height: 15px; border-radius: 9px; position: relative;
  background: linear-gradient(#b9b9b9, #e4e4e4);
  box-shadow: inset 0 2px 4px rgba(0,0,0,.45), inset 0 -1px 0 #fff;
}
.spec--skeuomorphism .sk-slider span {
  position: absolute; inset: 0 auto 0 0; width: 62%; border-radius: 9px;
  background: linear-gradient(#a9dcf7, #4a9fd8);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
}`,
  prompt: "Design a UI in the 2010-era skeuomorphic style: controls read as physical objects with brushed or glossy material gradients, 1px darker edges plus inner top highlights, embossed text with a downward dark shadow, recessed inset wells, and short soft drop shadows. Medium-weight type only. No flat fills, no blur, no neon glow.",
  sources: ["https://en.wikipedia.org/wiki/Skeuomorph"]
},

{
  id: "flat-design",
  name: "Flat design",
  era: "2013–2016",
  origin: "Metro and iOS 7 reacted against skeuomorphism by removing every material cue at once.",
  blurb: "Zero depth: no gradients, no shadows, no bevels. Meaning moves into solid colour blocks, oversized geometric shapes and type weight, with a small, saturated palette doing all the work.",
  traits: [
    "Solid fills only. If a value is not a flat colour or full transparency, it is not flat design.",
    "Small radii (0–4px) or true sharp corners; nothing pill-shaped.",
    "4–6 saturated hues at one saturation level, plus near-black text (<code>#263238</code>).",
    "Hierarchy from size and weight, never from shadow or gradient.",
    "Icon shapes built from a 24px grid with hard edges and no stroke variation.",
    "Sharp, immediate state changes — colour swap on hover, no easing on the colour itself."
  ],
  avoid: [
    "Flat UI with no focus or hover state reduces to an unclickable wireframe; the colour swap is the affordance.",
    "Long-press or drag targets need an outline hint, because flat removal kills the depth cue that suggested grab-ability."
  ],
  html: `<div class="fl-app">
    <header class="fl-bar">Library</header>
    <div class="fl-tiles">
      <span class="fl-tile t1"></span><span class="fl-tile t2"></span>
      <span class="fl-tile t3"></span><span class="fl-tile t4"></span>
    </div>
    <button class="fl-btn" type="button">Browse</button>
  </div>`,
  css: `.spec--flat-design .fl-app {
  width: 100%; max-width: 300px; overflow: hidden; border-radius: 3px; background: #fff;
}
.spec--flat-design .fl-bar {
  background: #1e88e5; color: #fff; font: 500 15px/1 "Instrument Sans", sans-serif;
  padding: 15px 16px;
}
.spec--flat-design .fl-tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; padding: 16px; }
.spec--flat-design .fl-tile { display: block; aspect-ratio: 1; border-radius: 3px; }
.spec--flat-design .t1 { background: #e53935; }
.spec--flat-design .t2 { background: #43a047; }
.spec--flat-design .t3 { background: #fb8c00; }
.spec--flat-design .t4 { background: #1e88e5; }
.spec--flat-design .fl-btn {
  display: block; width: calc(100% - 32px); margin: 0 16px 16px; padding: 12px;
  border: 0; border-radius: 3px; background: #e53935; color: #fff; cursor: pointer;
  font: 600 14px/1 "Instrument Sans", sans-serif;
}
.spec--flat-design .fl-btn:hover { background: #c62828; }`,
  prompt: "Design a flat UI: solid colour fills only, no gradients, no shadows, no borders, corners square to 4px, four to six saturated flat hues on a white or near-white surface, hierarchy carried by type size and weight, icons on a 24px grid with uniform stroke. State changes are instant colour swaps.",
  sources: ["https://en.wikipedia.org/wiki/Flat_design"]
},

{
  id: "material-2",
  name: "Material Design",
  era: "2014–2021",
  origin: "Google's Material Design: paper sheets of a fixed thickness resting on a lit surface.",
  blurb: "Flat colour on real paper. Sheets cast elevation shadows, ink ripples outward from the point of touch, and motion follows the sheet metaphor: things slide in from where they came from.",
  traits: [
    "Elevation as a named scale (1, 2, 4, 8, 16, 24dp); each level is a specific three-part shadow, not an arbitrary blur.",
    "4px corner radius on cards and text buttons; 16–28px on a floating action button.",
    "Ripple state layer anchored to the pointer, expanding as a clipped circle.",
    "Uppercase button labels with <code>letter-spacing: .089em</code> and 500/700 weight.",
    "Primary colour from the 500 swatch with darker 700 for pressed states.",
    "Motion uses standard easing (cubic-bezier .4,0,.2,1) and 200–300ms, so a sheet feels like it has mass."
  ],
  avoid: [
    "Same shadow on every layer — elevation only reads when the scale steps by roughly 2x.",
    "Ripples on non-interactive surfaces; the ink means 'this responded to you'."
  ],
  html: `<div class="md-shell">
    <div class="md-card">
      <p class="md-card__title">Weekly report</p>
      <p class="md-card__body">Three sheets added since Monday.</p>
    </div>
    <button class="md-fab" type="button" aria-label="Add">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="currentColor" stroke="none"/></svg>
    </button>
  </div>`,
  css: `.spec--material-2 .md-shell { position: relative; width: 100%; max-width: 300px; padding-bottom: 22px; font-family: Roboto, Arial, sans-serif; }
.spec--material-2 .md-card {
  background: #fff; border-radius: 4px; padding: 16px 18px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}
.spec--material-2 .md-card__title { margin: 0; font: 500 18px/1.4 Roboto, Arial, sans-serif; color: #212121; }
.spec--material-2 .md-card__body { margin: 6px 0 0; font-size: 14px; color: #616161; }
.spec--material-2 .md-fab {
  position: absolute; right: 4px; bottom: 0; width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  border: 0; border-radius: 16px; background: #3f51b5; color: #fff; cursor: pointer;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}
.spec--material-2 .md-fab:hover { background: #303f9f; }`,
  prompt: "Design a Material Design 2 interface: paper sheets with a named elevation scale where each level is a soft three-part shadow (key, ambient, penumbra), 4px radii on cards, 16px on the FAB, uppercase button labels with 0.089em tracking, ink ripple state layers anchored to the pointer, a 500/700 primary colour pair, and 200–300ms standard-easing motion.",
  sources: ["https://m2.material.io/design/", "https://en.wikipedia.org/wiki/Material_Design"]
},

{
  id: "material-you",
  name: "Material 3 (dynamic colour)",
  era: "2021–",
  origin: "Material You: the palette is generated from one seed colour and applied by role.",
  blurb: "One seed colour expands into five tonal palettes, and every surface is named by role (surface, surface-container-high, primary-container) rather than by hex. Large radii and tonal fills replace shadows as the depth cue.",
  traits: [
    "Roles, not hexes: <code>--md-sys-color-primary</code>, <code>--md-sys-color-surface-container-high</code>.",
    "Tonal elevation — a higher container is a step lighter/darker, not a bigger shadow.",
    "Large shape scale: 12px small, 16px medium, 28px large, full pill for chips and icon buttons.",
    "Filled, tonal and outlined variants of the same component share one size and one state-layer opacity (8% hover, 12% pressed).",
    "State layers are a flat colour overlay, never a gradient or glow.",
    "Type from a fixed ramp: display/headline/title/body/label, five sizes each with its own tracking."
  ],
  avoid: [
    "Hand-picked colours per component — the whole system collapses if components stop deriving from the seed.",
    "Shadows on regular surfaces; tonal steps already announce hierarchy."
  ],
  html: `<div class="my-card">
    <p class="my-title">Listening</p>
    <div class="my-chips">
      <span class="my-chip sel">Daily mix</span><span class="my-chip">Focus</span><span class="my-chip">Recent</span>
    </div>
    <div class="my-actions">
      <button class="my-filled" type="button">Play</button>
      <button class="my-tonal" type="button">Queue</button>
    </div>
  </div>`,
  css: `.spec--material-you .my-card {
  --seed-p: #006a6a; --seed-c: #9cf1f1; --seed-on-c: #002020; --surface: #f5fafa;
  width: 100%; max-width: 310px; padding: 18px; border-radius: 28px;
  background: var(--surface); border: 1px solid #d3e5e5;
}
.spec--material-you .my-title { margin: 0 0 12px; font: 600 17px/1.3 "Instrument Sans", sans-serif; color: #191c1c; }
.spec--material-you .my-chips { display: flex; flex-wrap: wrap; gap: 7px; }
.spec--material-you .my-chip {
  font: 500 13px/1 "Instrument Sans", sans-serif; color: #3f4949;
  border: 1px solid #bec9c9; border-radius: 999px; padding: 8px 13px;
}
.spec--material-you .my-chip.sel { background: var(--seed-c); border-color: transparent; color: var(--seed-on-c); }
.spec--material-you .my-actions { display: flex; gap: 9px; margin-top: 18px; }
.spec--material-you .my-filled, .spec--material-you .my-tonal {
  border: 0; border-radius: 999px; padding: 11px 20px; cursor: pointer;
  font: 500 13px/1 "Instrument Sans", sans-serif;
}
.spec--material-you .my-filled { background: var(--seed-p); color: #fff; }
.spec--material-you .my-filled:hover { box-shadow: inset 0 0 0 100px rgba(255,255,255,.08); }
.spec--material-you .my-tonal { background: var(--seed-c); color: var(--seed-on-c); }
.spec--material-you .my-tonal:hover { box-shadow: inset 0 0 0 100px rgba(0,0,0,.08); }`,
  prompt: "Design a Material 3 interface from a single seed colour: generate five tonal palettes (primary, secondary, tertiary, neutral, neutral-variant), reference colours by role token, use container tones for elevation instead of shadows, apply the large shape scale (12/16/28px, pill chips), and add flat 8%/12% state layers on hover and press. Type from the display/headline/title/body/label ramp.",
  sources: ["https://m3.material.io/"]
},

{
  id: "swiss",
  name: "Swiss / International Typographic Style",
  era: "1950s–",
  origin: "Zurich and Basel: grid, one neutral grotesque, objective photography, saturated flat colour.",
  blurb: "The grid is visible and obeyed. Type is flush left, ragged right, in one neutral grotesque at a small number of sizes, and a single saturated hue supplies all emphasis.",
  traits: [
    "Flush-left, ragged-right everything. Centring and justification are out.",
    "One grotesque (Helvetica or a close metric cousin) in regular plus bold only.",
    "Tight display leading: <code>line-height: .92</code>, tracking <code>-0.02em</code> to <code>-0.03em</code>.",
    "A literal column grid with visible alignment: everything starts from the same left edge.",
    "One saturated accent used as a field or a rule, not as decoration on text.",
    "Hairline rules and counters instead of boxes, cards or shadows."
  ],
  avoid: [
    "Two typefaces — Swiss layout loses its objectivity the moment a second voice appears.",
    "Centred or decorated headings; the grid supplies the structure."
  ],
  html: `<div class="ch-poster">
    <div class="ch-rule"></div>
    <h4 class="ch-head">Form<br>follows<br>grid</h4>
    <div class="ch-cols">
      <p>Flush left, ragged right. One grotesque, two weights, three sizes. Emphasis is a saturated field, never a shadow.</p>
      <p class="ch-num">12 / 8 / 4</p>
    </div>
  </div>`,
  css: `.spec--swiss .ch-poster {
  width: 100%; max-width: 300px; background: #f4f3ef; padding: 18px 16px;
  color: #111; font-family: Helvetica, Arial, sans-serif;
}
.spec--swiss .ch-rule { height: 6px; background: #e30613; margin-bottom: 14px; }
.spec--swiss .ch-head {
  margin: 0 0 14px; font-size: 40px; line-height: .92; font-weight: 700;
  letter-spacing: -0.03em; text-transform: uppercase;
}
.spec--swiss .ch-cols { display: grid; grid-template-columns: 2fr 1fr; gap: 12px; border-top: 1px solid #111; padding-top: 10px; }
.spec--swiss .ch-cols p { margin: 0; font-size: 11px; line-height: 1.5; }
.spec--swiss .ch-num { text-align: left; font-weight: 700; font-variant-numeric: tabular-nums; }`,
  prompt: "Design in the International Typographic Style: a strict visible column grid, one neutral grotesque in regular and bold, flush-left ragged-right type, tight display leading (-0.03em tracking at 0.92 line-height), one saturated accent colour used only as a field or rule, hairline rules for structure, no shadows, no cards, no icons as decoration.",
  sources: ["https://en.wikipedia.org/wiki/International_Typographic_Style"]
},

{
  id: "minimalism",
  name: "Minimalism",
  era: "2000s–",
  origin: "Editorial web design at its quietest: one column, a lot of air, almost no chrome.",
  blurb: "Nearly everything is removed and the remaining space becomes the design. Contrast comes from air and type weight, not from colour, borders or motion.",
  traits: [
    "Measure 60–70 characters with <code>line-height: 1.85</code> — the air is the composition.",
    "One text colour, one near-white surface, with a single hairline for separation.",
    "Two type sizes on the whole page; weight and space carry everything else.",
    "Underlined inline links only; no buttons unless the page truly has one action.",
    "Optical margins: structural space is roughly 2x the paragraph gap.",
    "No motion, or one 200ms opacity fade on the single interactive moment."
  ],
  avoid: [
    "Minimalism with hairline text — thin grey type at low contrast is not quiet, it is unreadable.",
    "Removing the focus ring; removing chrome is fine, removing keyboard feedback is not."
  ],
  html: `<div class="mn-doc">
    <nav class="mn-nav"><span>notes</span><span>index</span><span>about</span></nav>
    <p class="mn-lede">A quiet page keeps one column, one measure and one hairline, then spends everything else on space.</p>
    <div class="mn-hair"></div>
    <p class="mn-small">More on <a href="#minimalism">measure and leading</a>.</p>
  </div>`,
  css: `.spec--minimalism .mn-doc {
  width: 100%; max-width: 300px; background: #fcfcfa; padding: 22px 20px; color: #17181a;
  font-family: "Instrument Sans", sans-serif;
}
.spec--minimalism .mn-nav {
  display: flex; gap: 16px; font-size: 11px; letter-spacing: .08em;
  text-transform: lowercase; color: #8a8f95; margin-bottom: 30px;
}
.spec--minimalism .mn-lede { margin: 0; font-size: 14px; line-height: 1.9; font-weight: 400; }
.spec--minimalism .mn-hair { height: 1px; background: #e4e4e0; margin: 22px 0 14px; }
.spec--minimalism .mn-small { margin: 0; font-size: 12px; color: #6a6f75; }
.spec--minimalism a { color: #17181a; text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }`,
  prompt: "Design a minimal page: single column at a 65-character measure, 1.85 line-height, one near-white surface and one text colour, a single hairline for separation, two type sizes only, underlined inline links, no shadows or cards, generous optical margins, at most one 200ms fade.",
  sources: ["https://en.wikipedia.org/wiki/Minimalism_(computing)"]
},

{
  id: "editorial",
  name: "Editorial / magazine",
  era: "1990s–",
  origin: "Print magazine layout carried to screen: serif display, drop caps, bylines, column rules.",
  blurb: "Long-form reading treated like a printed feature: a serif display face, a drop cap, a stated deck, a byline in small caps and rules that behave like column dividers.",
  traits: [
    "Serif display face for the headline, sans for the UI labels; the pairing is the style.",
    "Drop cap via <code>::first-letter { float: left }</code> at about 2.8 lines, with optical margin correction.",
    "Deck or standfirst at 18–20px in a lighter tint than the headline.",
    "Byline in uppercase small caps with <code>letter-spacing: .12em</code> (a real caption role, not an eyebrow).",
    "Measure 62–68 characters, <code>line-height: 1.6</code>, hyphenation on for justified text.",
    "Hairline rule above the byline and under the deck."
  ],
  avoid: [
    "Justified text without hyphenation, which opens rivers of white down the column.",
    "Serif display set in italic as the hero — the received AI-startup look; set roman."
  ],
  html: `<article class="ed-piece">
    <p class="ed-kicker">Field notes</p>
    <h4 class="ed-head">The grid was never the point</h4>
    <p class="ed-deck">Structure is a reading aid. When it starts announcing itself, the reader leaves.</p>
    <div class="ed-byline">By A. Reader &middot; 8 min</div>
    <p class="ed-body">A drop cap is a promise about length. It tells the eye this is worth starting, because the page is going to hold still for a while.</p>
  </article>`,
  css: `.spec--editorial .ed-piece {
  width: 100%; max-width: 320px; background: #fffdf9; padding: 20px; color: #1b1a18;
  font-family: Georgia, "Times New Roman", serif;
}
.spec--editorial .ed-kicker {
  margin: 0; font: 600 10px/1 "Instrument Sans", sans-serif;
  text-transform: uppercase; letter-spacing: .14em; color: #9a5b2c;
}
.spec--editorial .ed-head { margin: 9px 0 0; font-size: 27px; line-height: 1.12; font-weight: 700; letter-spacing: -0.01em; }
.spec--editorial .ed-deck { margin: 10px 0 0; font-size: 15px; line-height: 1.5; color: #5c5750; }
.spec--editorial .ed-byline {
  margin: 14px 0 0; padding-top: 10px; border-top: 1px solid #ded7cb;
  font: 500 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .12em; color: #7c766c;
}
.spec--editorial .ed-body { margin: 12px 0 0; font-size: 14px; line-height: 1.62; }
.spec--editorial .ed-body::first-letter {
  float: left; font-size: 44px; line-height: .8; padding: 4px 7px 0 0;
  font-weight: 700; color: #9a5b2c;
}`,
  prompt: "Design an editorial article layout: serif display headline, deck at 18–20px in a lighter tint, byline in uppercase small caps with 0.12em tracking above a hairline, body serif at a 65-character measure and 1.6 leading with hyphenation, drop cap on the first paragraph, sans used only for UI labels.",
  sources: ["https://en.wikipedia.org/wiki/Page_layout"]
},

{
  id: "brutalist-web",
  name: "Brutalist web",
  era: "2014–",
  origin: "A reaction to styled templates: unstyled HTML markers kept deliberately visible.",
  blurb: "The browser's own defaults are treated as the design. System serif, unstyled links, visible table borders and default buttons, arranged with raw hierarchy and nothing concealed.",
  traits: [
    "Default document faces: Times or a system serif at 16px, no webfont at all.",
    "Link colours left at the platform values (<code>#0000ee</code>, visited <code>#551a8b</code>) and always underlined.",
    "Real <code>&lt;table border&gt;</code>-style borders, <code>&lt;ul&gt;</code> markers and <code>&lt;hr&gt;</code> rules instead of cards.",
    "Unstyled or minimally-restyled buttons and inputs; the browser's own affordances stay.",
    "Full-bleed layout with no max-width, or a hard 800px cap and visible columns.",
    "No images, no icons, no animation — content is the only ornament."
  ],
  avoid: [
    "Brutalism that loads a fancy display webfont and calls itself raw; the point is that nothing was sourced.",
    "Removing the underlines, which is the one styling brutalist pages must not do."
  ],
  html: `<div class="bw-doc">
  <h4>Field notes</h4>
  <p>Paragraph text with a <a href="#brutalist-web">hyperlink</a> left at browser defaults.</p>
  <ul><li>Item one</li><li>Item two</li></ul>
  <button type="button">Submit</button>
</div>`,
  css: `.spec--brutalist-web .bw-doc {
  width: 100%; max-width: 320px; background: #fff; padding: 14px 16px; color: #000;
  font: 400 16px/1.35 "Times New Roman", Times, serif;
}
.spec--brutalist-web h4 { margin: 0 0 8px; font-size: 19px; font-weight: 700; }
.spec--brutalist-web p { margin: 0 0 8px; }
.spec--brutalist-web a { color: #0000ee; text-decoration: underline; }
.spec--brutalist-web ul { margin: 0 0 10px; padding-left: 26px; list-style: disc; }
.spec--brutalist-web ul li { margin: 0; }
.spec--brutalist-web button {
  font: 400 13.3px/1 Arial, sans-serif; color: #000; padding: 2px 8px;
  background: #efefef; border: 2px outset #b3b3b3; cursor: pointer;
}`,
  prompt: "Design a brutalist web page: unstyled HTML defaults left in place — Times or system serif at 16px, browser-default underlined link colours, visible list markers and hr rules, default outset buttons, no webfonts, no images, no icons, no shadows, no animation, raw document hierarchy from heading levels.",
  sources: ["https://brutalistwebsites.com/"]
},

{
  id: "token-system",
  name: "Token-driven system UI",
  era: "2018–",
  origin: "Design systems made the token layer the interface: components only ever reference named values.",
  blurb: "No component owns a literal value. Colour, space, radius and type are declared once as tokens and every rule references a token, so a theme change is a change to ten lines.",
  traits: [
    "Three token tiers: primitive (<code>--stone-300</code>), semantic (<code>--surface-raised</code>), and component (<code>--card-pad</code>).",
    "A 4px space scale only: <code>--sp-1</code> 4px through <code>--sp-8</code> 32px.",
    "Named radii: 4px control, 8px input, 12px card, 999px pill.",
    "Colour referenced by role, never hex, inside components.",
    "One light block and one dark block under <code>prefers-color-scheme</code> swapping only primitives.",
    "Tokens printed on the page so the system is inspectable."
  ],
  avoid: [
    "Editing a component's hex directly; that is how a system stops being one.",
    "Token sprawl — three tiers with a 4px scale beats 200 named colours."
  ],
  html: `<div class="tk-sheet">
    <div class="tk-swatches">
      <span class="tk-sw" style="--c:#1c1f23"><i></i><b>ink</b><em>#1c1f23</em></span>
      <span class="tk-sw" style="--c:#5b6572"><i></i><b>ink-2</b><em>#5b6572</em></span>
      <span class="tk-sw" style="--c:#bc4a15"><i></i><b>accent</b><em>#bc4a15</em></span>
      <span class="tk-sw" style="--c:#dcdfe4"><i></i><b>hair</b><em>#dcdfe4</em></span>
    </div>
    <div class="tk-row"><span class="tk-label">space</span><span class="tk-bars"><i style="width:4px"></i><i style="width:8px"></i><i style="width:16px"></i><i style="width:32px"></i></span><em class="tk-val">4 8 16 32 px</em></div>
    <div class="tk-row"><span class="tk-label">ramp</span><span class="tk-ramp" style="font-size:12px"><i>12</i><i style="font-size:16px">16</i><i style="font-size:25px">25</i><i style="font-size:31px">31</i></span></div>
  </div>`,
  css: `.spec--token-system .tk-sheet {
  width: 100%; max-width: 320px; background: #fff; border: 1px solid #e2e4e8;
  border-radius: 12px; padding: 16px; font-family: "Instrument Sans", sans-serif;
}
.spec--token-system .tk-swatches { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.spec--token-system .tk-sw { display: grid; grid-template-columns: 18px 1fr; align-items: center; gap: 8px; }
.spec--token-system .tk-sw i { grid-row: span 2; width: 18px; height: 30px; border-radius: 4px; background: var(--c); border: 1px solid rgba(0,0,0,.12); }
.spec--token-system .tk-sw b { font-size: 12px; font-weight: 600; color: #1c1f23; }
.spec--token-system .tk-sw em { font: 400 11px/1 "IBM Plex Mono", monospace; font-style: normal; color: #6b7280; }
.spec--token-system .tk-row { display: flex; align-items: center; gap: 10px; margin-top: 14px; }
.spec--token-system .tk-label { font-size: 11px; color: #6b7280; width: 40px; }
.spec--token-system .tk-bars { display: flex; align-items: center; gap: 6px; height: 18px; }
.spec--token-system .tk-bars i { height: 16px; background: #1c1f23; border-radius: 2px; }
.spec--token-system .tk-val { font: 400 11px/1 "IBM Plex Mono", monospace; font-style: normal; color: #6b7280; margin-left: 4px; }
.spec--token-system .tk-ramp { display: flex; align-items: baseline; gap: 12px; color: #1c1f23; line-height: 1; }
.spec--token-system .tk-ramp i { font-style: normal; }`,
  prompt: "Structure the UI as a three-tier token system: primitive, semantic and component tokens; a 4px-only space scale; named radii for control/input/card/pill; no literal hex or px inside component rules; one light and one dark block that swap primitives only; and render a token sheet on the page so the system is inspectable.",
  sources: ["https://m3.material.io/foundations/design-tokens/overview", "https://www.w3.org/TR/design-tokens/"]
}

);
