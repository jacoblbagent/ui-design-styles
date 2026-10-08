/* Surfaces: styles where depth and material are the point. */
(window.CATALOG = window.CATALOG || []).push(

{
  id: "neumorphism",
  name: "Neumorphism",
  era: "2019–2021",
  origin: "Soft UI: elements extruded from one surface with a paired light and dark shadow.",
  blurb: "Everything sits on one flat colour and is pushed out of it, or pressed into it, by a light shadow on one side and a dark shadow on the other. No borders, no outlines, no second colour.",
  traits: [
    "One background colour for the page and for every control: <code>#e0e5ec</code> is the canonical value.",
    "Paired shadows offset by the same distance in opposite directions: <code>9px 9px 16px #a3b1c6</code> and <code>-9px -9px 16px #ffffff</code>.",
    "Pressed or selected state flips to <code>inset</code> with a small positive offset.",
    "Large radii, 16–30px, so the light wraps before it reads as an edge.",
    "Type and icons only ever in the neutral ramp two or three steps from the surface.",
    "Zero pure-black. The dark shadow is a tint of the surface hue, never grey or black."
  ],
  avoid: [
    "Contrast: text at low tint fails WCAG, and screen-inversion or high-contrast mode flattens the whole style to blank. Give each control a second, non-shadow signal.",
    "More than two shadow pairs on screen at once; the trick only survives when shapes are large and few."
  ],
  html: `<div class="nu-panel">
    <div class="nu-toggle">
      <span class="nu-opt on">Day</span><span class="nu-opt">Night</span>
    </div>
    <div class="nu-dial"><span></span></div>
    <div class="nu-well"><span class="nu-fill"></span></div>
  </div>`,
  css: `.spec--neumorphism .nu-panel {
  width: 100%; max-width: 290px; padding: 22px; border-radius: 26px; background: #e0e5ec;
  box-shadow: 9px 9px 18px #a3b1c6, -9px -9px 18px #ffffff;
  display: grid; gap: 18px; justify-items: center;
}
.spec--neumorphism .nu-toggle {
  display: flex; gap: 4px; padding: 6px; border-radius: 14px;
  box-shadow: inset 4px 4px 8px #b8c1d1, inset -4px -4px 8px #ffffff;
}
.spec--neumorphism .nu-opt {
  font: 500 12px/1 "Instrument Sans", sans-serif; color: #7b8794;
  padding: 9px 15px; border-radius: 10px;
}
.spec--neumorphism .nu-opt.on { color: #4a5568; box-shadow: 4px 4px 8px #b8c1d1, -4px -4px 8px #ffffff; }
.spec--neumorphism .nu-dial {
  width: 74px; height: 74px; border-radius: 50%;
  box-shadow: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff;
  display: grid; place-items: center;
}
.spec--neumorphism .nu-dial span {
  width: 34px; height: 34px; border-radius: 50%;
  box-shadow: inset 3px 3px 6px #b8c1d1, inset -3px -3px 6px #ffffff;
}
.spec--neumorphism .nu-well {
  width: 190px; height: 16px; border-radius: 8px;
  box-shadow: inset 4px 4px 8px #b8c1d1, inset -4px -4px 8px #ffffff;
  padding: 3px;
}
.spec--neumorphism .nu-fill {
  display: block; height: 100%; width: 58%; border-radius: 6px;
  box-shadow: 2px 2px 4px #b8c1d1, -2px -2px 4px #ffffff;
  background: linear-gradient(90deg, #cfd9e6, #eef2f7);
}`,
  prompt: "Design soft-UI neumorphism: a single background colour across page and controls, every element extruded with a paired shadow — a dark tint offset one way and a white highlight the other way at the same distance — inset shadows for pressed and recessed states, radii of 16–30px, no borders and no second colour, text only in the neutral ramp.",
  sources: ["https://neumorphism.io/"]
},

{
  id: "claymorphism",
  name: "Claymorphism",
  era: "2021–",
  origin: "Soft UI plus material: elements look like moulded clay with real thickness.",
  blurb: "Puffy, rounded, toy-like objects. Each one carries an inner dark ring at the bottom, an inner white highlight at the top and a soft outer drop, which reads as volume rather than a flat sticker.",
  traits: [
    "Two inner shadows plus one outer: <code>inset -8px -8px 14px rgba(0,0,0,.14), inset 8px 8px 14px rgba(255,255,255,.65), 0 14px 24px rgba(0,0,0,.12)</code>.",
    "Very large radii: 30–50px on containers, pill or 40px on buttons.",
    "Pastel, high-lightness hue set — lilac, sky, mint, peach — one per element family.",
    "Slight downward offset on every element so gravity feels consistent.",
    "Icons are chunky and rounded; type is heavy and rounded too.",
    "Third dimension from the light, never from a bevel or a gradient border."
  ],
  avoid: [
    "Clay plus glass in one screen; the puffy volume fights the transparency and both stop reading.",
    "Clay at small sizes — under about 28px the inner shadows merge into grey mush."
  ],
  html: `<div class="cl-scene">
    <div class="cl-avatar"></div>
    <button class="cl-btn" type="button">Start</button>
    <div class="cl-card"><span></span><span></span><span></span></div>
  </div>`,
  css: `.spec--claymorphism .cl-scene {
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;
  width: 100%; padding: 22px; border-radius: 34px; background: #eef0fb;
}
.spec--claymorphism .cl-scene > * {
  box-shadow: inset -8px -8px 14px rgba(0,0,0,.14), inset 8px 8px 14px rgba(255,255,255,.7), 0 14px 22px rgba(0,0,0,.12);
}
.spec--claymorphism .cl-avatar { width: 66px; height: 66px; border-radius: 26px; background: #c9b6f5; }
.spec--claymorphism .cl-btn {
  border: 0; cursor: pointer; padding: 17px 30px; border-radius: 40px; background: #9fd6f0;
  font: 700 15px/1 "Instrument Sans", sans-serif; color: #1e4a5f;
}
.spec--claymorphism .cl-btn:active { box-shadow: inset 6px 6px 12px rgba(0,0,0,.16); }
.spec--claymorphism .cl-card {
  display: grid; gap: 8px; padding: 18px 20px; border-radius: 30px; background: #ffd9c9;
}
.spec--claymorphism .cl-card span { display: block; height: 11px; border-radius: 6px; background: #f0b49c; }
.spec--claymorphism .cl-card span:nth-child(2) { width: 74%; }
.spec--claymorphism .cl-card span:nth-child(3) { width: 46%; }`,
  prompt: "Design a claymorphism UI: soft pastel surfaces in lilac/sky/mint/peach, very large radii (30–50px), every element carrying two inner shadows — dark from the bottom-right, white from the top-left — plus one soft outer drop shadow for volume, a consistent slight downward offset, chunky rounded icons and heavy rounded type.",
  sources: ["https://hype4.academy/articles/design/claymorphism-in-user-interfaces"]
},

{
  id: "glassmorphism",
  name: "Glassmorphism",
  era: "2020–",
  origin: "Frosted panes floating over saturated backgrounds, popularised through Big Sur-era desktop UI.",
  blurb: "Panels are translucent and blurred so the background keeps moving underneath them. A pale 1px edge catches the light and a soft drop separates the pane from the scene.",
  traits: [
    "Blur plus saturation together: <code>backdrop-filter: blur(18px) saturate(160%)</code>.",
    "Panel fill at low alpha, usually white at 12–20%, so the hue below survives.",
    "1px light border at 30–40% alpha to fake a glass edge, and a subtle top-edge highlight gradient.",
    "A saturated, high-contrast scene behind: two or three large colour blobs, or a photograph.",
    "16–24px radii; cards never touch, so the scene shows between them.",
    "Higher blur (24px+) for floating layers, lower (10–12px) for docked chrome."
  ],
  avoid: [
    "Glass over a flat or low-contrast background: with nothing behind it, the blur is invisible and the panel just looks washed out.",
    "Stacking three or more glass layers — the effective contrast collapse makes text unreadable.",
    "Body text directly on blur without a legibility scrim or a solid text colour."
  ],
  html: `<div class="gl-scene">
    <span class="gl-blob b1"></span><span class="gl-blob b2"></span><span class="gl-blob b3"></span>
    <div class="gl-card">
      <p class="gl-title">Signal</p>
      <p class="gl-body">Translucent panes over a saturated scene.</p>
      <button class="gl-btn" type="button">Open</button>
    </div>
  </div>`,
  css: `.spec--glassmorphism .gl-scene {
  position: relative; width: 100%; max-width: 320px; min-height: 180px; border-radius: 16px;
  overflow: hidden; display: grid; place-items: center; padding: 20px;
  background: linear-gradient(135deg, #1b2a4a, #3a1b4a);
}
.spec--glassmorphism .gl-blob { position: absolute; border-radius: 50%; filter: blur(22px); }
.spec--glassmorphism .b1 { width: 150px; height: 150px; background: #ff7a3d; top: -30px; left: -20px; }
.spec--glassmorphism .b2 { width: 130px; height: 130px; background: #3dd6ff; bottom: -34px; right: -14px; }
.spec--glassmorphism .b3 { width: 90px; height: 90px; background: #b06bff; bottom: 20px; left: 40px; opacity: .8; }
.spec--glassmorphism .gl-card {
  position: relative; width: 100%; padding: 18px; border-radius: 18px;
  background: rgba(255,255,255,.16);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255,255,255,.34);
  box-shadow: 0 12px 32px rgba(0,0,0,.28);
}
.spec--glassmorphism .gl-title { margin: 0; font: 600 17px/1.2 "Instrument Sans", sans-serif; color: #fff; }
.spec--glassmorphism .gl-body { margin: 6px 0 14px; font-size: 13px; color: rgba(255,255,255,.85); }
.spec--glassmorphism .gl-btn {
  border: 1px solid rgba(255,255,255,.45); background: rgba(255,255,255,.22); color: #fff;
  border-radius: 10px; padding: 9px 15px; cursor: pointer;
  font: 500 13px/1 "Instrument Sans", sans-serif;
}`,
  prompt: "Design glassmorphism: frosted translucent panels with backdrop-filter blur(18px) saturate(160%), white fill at 12–20% alpha, a 1px light border at ~35% alpha plus a top-edge highlight, 16–24px radii, panels floating over a saturated scene of two to three large blurred colour blobs, floating layers blurred more than docked chrome, body text solid white.",
  sources: ["https://glassmorphism.com/", "https://hype4.academy/tools/glassmorphism-generator"]
},

{
  id: "liquid-glass",
  name: "Liquid glass",
  era: "2025–",
  origin: "Apple's 2025 material: glass that refracts and reacts instead of merely blurring.",
  blurb: "A step past frosted blur: the pane bends and tints what is behind it, carries a specular highlight that moves with the light source, and thickens or thins its own opacity based on what it sits over.",
  traits: [
    "Refraction rather than flat blur: blur at 20–30px, saturation 180%+, plus an inner edge gradient that curves the light.",
    "A specular top-left highlight band (<code>inset 1px 1px 0 rgba(255,255,255,.65)</code>) and a dark bottom inset at the same time.",
    "Directional edge lighting: brighter border on the side facing the light, dimmer on the far side.",
    "Adaptive tint — the material samples its backdrop and shifts luminance so foreground text keeps contrast.",
    "Concentric radii: inner elements use the outer radius minus the padding.",
    "Motion follows touch: on press the surface flexes and the highlight widens."
  ],
  avoid: [
    "Plain blur with no specular edge — that is 2020 glassmorphism, and it reads flat beside this.",
    "Cheap refraction faked with a static gradient on text; the bend must come from the material, not letterforms."
  ],
  html: `<div class="lg-scene">
    <span class="lg-photo"></span>
    <div class="lg-bar">
      <span class="lg-dot"></span><span class="lg-dot"></span><span class="lg-dot"></span>
      <button class="lg-pill" type="button">Continue</button>
    </div>
  </div>`,
  css: `.spec--liquid-glass .lg-scene {
  position: relative; width: 100%; max-width: 320px; min-height: 180px; border-radius: 20px;
  overflow: hidden; display: grid; place-items: center; padding: 22px;
  background: linear-gradient(160deg, #0b1c33 0%, #1b4a63 42%, #c76a3e 100%);
}
.spec--liquid-glass .lg-photo {
  position: absolute; inset: -20px; border-radius: 40px;
  background: radial-gradient(circle at 24% 28%, rgba(120,220,255,.55), transparent 46%),
              radial-gradient(circle at 76% 74%, rgba(255,160,90,.6), transparent 50%);
  filter: blur(6px);
}
.spec--liquid-glass .lg-bar {
  position: relative; display: flex; align-items: center; gap: 9px;
  width: 100%; padding: 12px 14px; border-radius: 20px;
  background: rgba(255,255,255,.14);
  backdrop-filter: blur(26px) saturate(190%) brightness(1.08);
  -webkit-backdrop-filter: blur(26px) saturate(190%) brightness(1.08);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.6), inset -1px -3px 8px rgba(0,0,0,.28),
              inset 0 0 26px rgba(255,255,255,.12), 0 16px 30px rgba(0,0,0,.35);
}
.spec--liquid-glass .lg-dot { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.45); }
.spec--liquid-glass .lg-pill {
  margin-left: auto; border: 1px solid rgba(255,255,255,.5); cursor: pointer;
  background: linear-gradient(180deg, rgba(255,255,255,.34), rgba(255,255,255,.18));
  color: #fff; border-radius: 999px; padding: 9px 17px;
  font: 600 13px/1 "Instrument Sans", sans-serif;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 2px 6px rgba(0,0,0,.25);
}`,
  prompt: "Design a liquid-glass material: translucent panes that refract rather than simply blur (blur 20–30px, saturation 180%+, inner edge gradient), a specular highlight on the lit side and a dark inset on the far side, adaptive tint that shifts luminance to preserve text contrast, concentric corner radii, and a press state where the surface flexes and the highlight widens.",
  sources: ["https://developer.apple.com/design/human-interface-guidelines/materials"]
},

{
  id: "aurora-mesh",
  name: "Aurora / mesh gradient",
  era: "2020–",
  origin: "Soft multi-point colour fields behind a plain surface, the backdrop for otherwise minimal SaaS layout.",
  blurb: "Large blurred colour points blend into a continuous field, and the interface on top stays deliberately plain so the field reads as depth rather than decoration.",
  traits: [
    "Three to five radial gradients at different hues composited into one field, then softened with a blur pass.",
    "Points placed off-canvas so the visible area shows the blend, never a full circle.",
    "Dark and light variants of the same field, with the light one held under about 35% saturation.",
    "Foreground kept plain: one text colour, hairline borders, no gradients on any control.",
    "The field is fixed and does not parallax on scroll.",
    "Text over the field gets a legibility layer — a solid or 90% panel — not a text-shadow."
  ],
  avoid: [
    "Saturated-at-centre radial halos on a dark page: the most recognisable generated-UI background.",
    "Purple-to-cyan as the only palette; pick hues from the product's own world.",
    "Gradient text on top of a gradient field — nothing resolves."
  ],
  html: `<div class="au-scene">
    <span class="au-f a"></span><span class="au-f b"></span><span class="au-f c"></span>
    <div class="au-panel">
      <p class="au-t">Pipeline</p>
      <p class="au-b">Build 1284 passed in 4m 12s</p>
    </div>
  </div>`,
  css: `.spec--aurora-mesh .au-scene {
  position: relative; width: 100%; max-width: 320px; min-height: 180px; border-radius: 14px;
  overflow: hidden; display: grid; place-items: center; padding: 20px; background: #0b0f16;
}
.spec--aurora-mesh .au-f { position: absolute; border-radius: 50%; filter: blur(34px); opacity: .7; }
.spec--aurora-mesh .a { width: 190px; height: 190px; background: #1f6f6b; top: -70px; left: -50px; }
.spec--aurora-mesh .b { width: 170px; height: 170px; background: #6c3f7a; bottom: -70px; right: -40px; }
.spec--aurora-mesh .c { width: 140px; height: 140px; background: #8a5a1f; bottom: -60px; left: 30px; opacity: .55; }
.spec--aurora-mesh .au-panel {
  position: relative; width: 100%; padding: 16px; border-radius: 12px;
  background: rgba(11,15,22,.82); border: 1px solid #262c38;
}
.spec--aurora-mesh .au-t { margin: 0; color: #f2f5f9; font: 600 16px/1.2 "Instrument Sans", sans-serif; }
.spec--aurora-mesh .au-b { margin: 6px 0 0; color: #b6c0cd; font: 400 12px/1.5 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }`,
  prompt: "Design an aurora/mesh-gradient backdrop: three to five radial gradient points at different hues placed off-canvas, blurred 30px+ into one continuous field, lightness held so the field stays under ~35% saturation, foreground kept plain with one text colour and hairline borders, a 90%-opaque panel behind any text, and no parallax on the field.",
  sources: ["https://developer.apple.com/design/human-interface-guidelines/color"]
},

{
  id: "neo-brutalism",
  name: "Neo-brutalism",
  era: "2021–",
  origin: "A web-native reaction to soft UI: hard shadows, thick outlines, deliberately clashing colour.",
  blurb: "Absolutely no blur. Thick black outlines, an unblurred offset shadow that reads as a printed sticker, and a bright clash of hues on a raw, close-set grid.",
  traits: [
    "Hard offset shadow with zero blur: <code>box-shadow: 6px 6px 0 #000</code>, and the element moves to meet it on press.",
    "2–3px solid black borders on every element, including inputs and tables.",
    "Flat clashing fills: acid yellow, cyan, hot pink, lime — two or three per screen, no gradients.",
    "Radius 0, or one deliberate large radius used inconsistently to look hand-made.",
    "Chunky heavy type, often a grotesque at 700–900, some outlined or highlighted with a solid block.",
    "Rotation and stickers are allowed and expected, at 1–3 degrees."
  ],
  avoid: [
    "Soft shadows or blur anywhere; one blurred element destroys the read.",
    "Using the style as an excuse for unreadable contrast — the black border is what keeps it legible."
  ],
  html: `<div class="nb-scene">
    <div class="nb-card">
      <p class="nb-tag">v2.4</p>
      <p class="nb-title">Ship it raw</p>
      <p class="nb-body">Thick outlines, zero blur, hard offsets.</p>
      <button class="nb-btn" type="button">Publish</button>
    </div>
  </div>`,
  css: `.spec--neo-brutalism .nb-scene {
  width: 100%; max-width: 320px; padding: 18px; background: #f2ead9;
  display: grid; place-items: center;
}
.spec--neo-brutalism .nb-card {
  width: 100%; background: #fff; border: 3px solid #000; border-radius: 0;
  box-shadow: 7px 7px 0 #000; padding: 16px; transform: rotate(-1deg);
}
.spec--neo-brutalism .nb-tag {
  display: inline-block; margin: 0; background: #ffe500; border: 2px solid #000;
  font: 700 11px/1 "Instrument Sans", sans-serif; padding: 4px 7px; text-transform: uppercase;
}
.spec--neo-brutalism .nb-title { margin: 10px 0 0; font: 800 24px/1.05 "Instrument Sans", sans-serif; letter-spacing: -0.02em; }
.spec--neo-brutalism .nb-body { margin: 8px 0 14px; font: 500 13px/1.45 "Instrument Sans", sans-serif; }
.spec--neo-brutalism .nb-btn {
  border: 3px solid #000; background: #00e5ff; color: #000; cursor: pointer;
  font: 700 14px/1 "Instrument Sans", sans-serif; padding: 11px 16px;
  box-shadow: 4px 4px 0 #000;
}
.spec--neo-brutalism .nb-btn:active { box-shadow: 0 0 0 #000; transform: translate(4px, 4px); }`,
  prompt: "Design a neo-brutalist UI: 2–3px solid black borders on everything, hard zero-blur offset shadows of 5–8px, flat clashing fills in acid yellow/cyan/hot pink/lime, radius 0 or one inconsistent large radius, heavy grotesque type at 700–900, elements tilted 1–3 degrees, and press states that translate the element onto its shadow.",
  sources: ["https://www.neobrutalism.dev/", "https://neubrutalism.com/"]
}

);
