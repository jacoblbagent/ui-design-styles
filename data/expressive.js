/* Expressive: high-volume, era-specific and brand-driven looks. */
(window.CATALOG = window.CATALOG || []).push(

{
  id: "maximalism",
  name: "Maximalism",
  era: "2018–",
  origin: "A deliberate rejection of whitespace: every surface carries type, colour and image at once.",
  blurb: "Nothing is held back. Many hues, many type sizes, overlapping layers and no quiet regions, with hierarchy created by stacking order and scale instead of by empty space.",
  traits: [
    "Four or more hues at full saturation, plus black and off-white as the only rests.",
    "Overlap as structure: elements sit on each other with real z-index, not inside tidy gutters.",
    "Three or more type sizes on one card, spanning roughly 12px to 40px.",
    "Contrast drawn with outlines, blocks and repeated marks rather than whitespace.",
    "Every region is populated; empty area is treated as a failure, not a rest.",
    "Rotation and mixed alignment keep the density from turning into a grid."
  ],
  avoid: [
    "Density without stacking order — the eye needs one dominant element per cluster.",
    "Maximal colour with minimal contrast: bright hues still need ink-dark text."
  ],
  html: `<div class="mx-collage">
    <span class="mx-block m1"></span>
    <span class="mx-strip"></span>
    <p class="mx-word">MORE</p>
    <p class="mx-small">denser, louder,<br>still ranked</p>
    <button class="mx-btn" type="button">Enter</button>
  </div>`,
  css: `.spec--maximalism .mx-collage {
  position: relative; width: 100%; max-width: 320px; height: 190px; overflow: hidden;
  background: #f6f0e4; border-radius: 6px;
}
.spec--maximalism .mx-block { position: absolute; }
.spec--maximalism .m1 { width: 150px; height: 150px; background: #ff5d3b; top: -14px; left: -18px; transform: rotate(8deg); }
.spec--maximalism .mx-strip { position: absolute; inset: 96px -10px auto -10px; height: 30px; background: #2b2bff; transform: rotate(-4deg); opacity: .92; }
.spec--maximalism .mx-word {
  position: absolute; top: 22px; left: 16px; margin: 0; z-index: 2;
  font: 900 52px/.85 "Instrument Sans", sans-serif; letter-spacing: -0.04em; color: #fff;
}
.spec--maximalism .mx-small {
  position: absolute; top: 108px; left: 24px; margin: 0; z-index: 3;
  font: 700 13px/1.3 "Instrument Sans", sans-serif; color: #fff; text-transform: uppercase; letter-spacing: .02em;
}
.spec--maximalism .mx-btn {
  position: absolute; right: 14px; bottom: 14px; z-index: 4;
  border: 3px solid #12131a; background: #ffe500; color: #12131a; cursor: pointer;
  font: 800 14px/1 "Instrument Sans", sans-serif; padding: 10px 16px; transform: rotate(-3deg);
}`,
  prompt: "Design a maximalist layout: four or more fully saturated hues, elements overlapping with real stacking order rather than gutters, three or more type sizes on one panel, contrast built from blocks, outlines and repeated marks instead of whitespace, every region populated, mixed alignment and rotation, one dominant element per cluster.",
  sources: []
},

{
  id: "memphis",
  name: "Memphis",
  era: "1981–1988, revived 2010s",
  origin: "The Memphis Group in Milan: cheap materials, primary colour, geometry used for play.",
  blurb: "Confetti geometry on a light ground: squiggles, zigzags, terrazzo dots and hard black outlines, in primary brights, applied as an all-over pattern rather than as layout structure.",
  traits: [
    "Palette of two or three brights (cyan, red, yellow) plus black outlines on off-white.",
    "All-over pattern: squiggles, zigzags, dots, semicircles at mixed small scales.",
    "2–3px black outline on shapes and type, independent of the fill colour.",
    "At least one hand-drawn-looking squiggle or wobble line.",
    "Shapes scattered, deliberately not aligned to a grid.",
    "Black-and-white hatching or terrazzo as the neutral between colour blocks."
  ],
  avoid: [
    "Memphis on a dark surface — the style needs the light ground to read as 80s print.",
    "One accent only: the style is defined by three colours competing."
  ],
  html: `<div class="me-panel">
    <svg class="me-squiggle" viewBox="0 0 124 42" aria-hidden="true"><path d="M2 21 Q14 3 26 21 T50 21 T74 21 T98 21 T122 21" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/></svg>
    <span class="me-zig"></span><span class="me-dot d1"></span><span class="me-dot d2"></span><span class="me-dot d3"></span>
    <span class="me-semi"></span>
    <button class="me-btn" type="button">Play</button>
  </div>`,
  css: `.spec--memphis .me-panel {
  position: relative; width: 100%; max-width: 320px; height: 190px; overflow: hidden;
  background: #faf7f0; border: 3px solid #111; border-radius: 2px;
}
.spec--memphis .me-squiggle { position: absolute; top: 14px; left: 16px; width: 118px; height: 40px; }
.spec--memphis .me-zig {
  position: absolute; top: 22px; right: 16px; width: 74px; height: 26px;
  background:
    linear-gradient(135deg, transparent 46%, #2ec4e6 47%, #2ec4e6 53%, transparent 54%),
    linear-gradient(45deg, transparent 46%, #2ec4e6 47%, #2ec4e6 53%, transparent 54%);
  background-size: 22px 26px;
}
.spec--memphis .me-dot { position: absolute; border-radius: 50%; border: 3px solid #111; }
.spec--memphis .d1 { width: 20px; height: 20px; background: #ffcf2e; left: 22px; top: 78px; }
.spec--memphis .d2 { width: 13px; height: 13px; background: #ff5a5a; left: 58px; top: 108px; }
.spec--memphis .d3 { width: 26px; height: 26px; background: #7ce38b; left: 96px; top: 70px; }
.spec--memphis .me-semi {
  position: absolute; right: 26px; bottom: 30px; width: 64px; height: 32px;
  background: #ff5a5a; border: 3px solid #111; border-bottom: 0;
  border-radius: 64px 64px 0 0;
}
.spec--memphis .me-btn {
  position: absolute; left: 20px; bottom: 20px; cursor: pointer;
  border: 3px solid #111; background: #fff; color: #111;
  font: 800 15px/1 "Instrument Sans", sans-serif; padding: 10px 20px;
  box-shadow: 4px 4px 0 #2ec4e6;
}`,
  prompt: "Design a Memphis-style screen: off-white ground with black-outlined geometry used as an all-over pattern — squiggles, zigzags, terrazzo dots, semicircles at mixed small scales — in two or three primary brights (cyan, red, yellow, mint), 3px black outlines on every shape and on type, shapes scattered off-grid, with black hatching or dots as the neutral between colour blocks.",
  sources: ["https://en.wikipedia.org/wiki/Memphis_Group"]
},

{
  id: "vaporwave",
  name: "Vaporwave / synthwave",
  era: "2011–",
  origin: "Internet revival of 80s mall culture and early computer graphics, polished into a neon palette.",
  blurb: "A neon dusk: magenta and cyan on near-black, chrome or outlined display type, a perspective grid running to a horizon and a banded sun behind it.",
  traits: [
    "Two-neon palette: magenta <code>#ff2ec4</code> and cyan <code>#2ef0ff</code> over <code>#12071f</code>.",
    "Display type with hard tracking (0.12em+) in caps, ideally with a chrome gradient fill.",
    "Perspective grid: an element rotated on X with a repeating linear gradient, vanishing at the horizon.",
    "Banded sun: a circle masked with horizontal stripes, offset behind the grid.",
    "Glow as a light source: same-hue blurred shadow at 24px+ on type and edges.",
    "Scanlines at 2–4px pitch over everything at low opacity."
  ],
  avoid: [
    "Vaporwave that loads real 1980s photography — the look is drawn, not photographed.",
    "Glow on body text: keep the neon glow on display type and edges only."
  ],
  html: `<div class="vp-scene">
    <span class="vp-sun"></span>
    <span class="vp-grid"></span>
    <p class="vp-title">NIGHT<br>DRIVE</p>
    <button class="vp-btn" type="button">Enter</button>
  </div>`,
  css: `.spec--vaporwave .vp-scene {
  position: relative; width: 100%; max-width: 320px; height: 200px; overflow: hidden;
  background: linear-gradient(#12071f, #2a0b3d 62%, #12071f); border-radius: 4px;
}
.spec--vaporwave .vp-sun {
  position: absolute; left: 50%; top: 26px; width: 108px; height: 108px; margin-left: -54px;
  border-radius: 50%; background: linear-gradient(#ffd75e, #ff5aa8 55%, #ff2ec4);
  -webkit-mask-image: repeating-linear-gradient(#000 0 6px, transparent 6px 9px);
  mask-image: repeating-linear-gradient(#000 0 6px, transparent 6px 9px);
  box-shadow: 0 0 40px rgba(255,46,196,.55);
}
.spec--vaporwave .vp-grid {
  position: absolute; inset: auto -40% -10px -40%; height: 96px;
  background: repeating-linear-gradient(90deg, #2ef0ff 0 1px, transparent 1px 26px),
              repeating-linear-gradient(#2ef0ff 0 1px, transparent 1px 20px);
  transform: perspective(160px) rotateX(58deg); opacity: .55;
}
.spec--vaporwave .vp-title {
  position: absolute; left: 20px; top: 34px; margin: 0;
  font: 800 30px/.95 "Instrument Sans", sans-serif; letter-spacing: .14em;
  background: linear-gradient(#ffffff, #cfe9ff 40%, #7aa6ff 60%, #ffffff);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  -webkit-text-stroke: .6px rgba(46,240,255,.5);
}
.spec--vaporwave .vp-btn {
  position: absolute; right: 20px; bottom: 18px; cursor: pointer;
  border: 1px solid #2ef0ff; background: rgba(46,240,255,.08); color: #d9fbff;
  font: 600 12px/1 "Instrument Sans", sans-serif; letter-spacing: .16em; text-transform: uppercase;
  padding: 10px 16px; box-shadow: 0 0 18px rgba(46,240,255,.45), inset 0 0 12px rgba(46,240,255,.25);
}
.spec--vaporwave .vp-scene::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: repeating-linear-gradient(transparent 0 2px, rgba(0,0,0,.22) 2px 3px);
}`,
  prompt: "Design a synthwave scene: near-black violet ground, magenta and cyan neon, caps display type with 0.12em+ tracking and a chrome gradient fill, a perspective floor grid rotated on X toward a horizon, a banded sun masked with horizontal stripes, same-hue blurred glow on display type and edges only, and a faint scanline overlay.",
  sources: ["https://en.wikipedia.org/wiki/Vaporwave"]
},

{
  id: "cyberpunk-hud",
  name: "Cyberpunk HUD",
  era: "1982–",
  origin: "Console-fiction interface design: dense readouts, angular frames, hostile-looking neon.",
  blurb: "Interface as instrumentation. Panels are clipped at the corners, readouts are monospaced and tabular, every frame has bracket marks and a status line, and the only light is emission.",
  traits: [
    "Corner-clipped panels via <code>clip-path: polygon()</code>, never plain rectangles.",
    "Monospace everything, uppercase, with wide tracking and tabular numerals on all values.",
    "Neon on near-black with glow shadows in the same hue, plus one warning accent (amber or red).",
    "Bracket and tick marks drawn as pseudo-elements at panel corners and edges.",
    "Density: two or three data values per row, hairline rules, no relaxed whitespace.",
    "Status line always present with a live-looking state word."
  ],
  avoid: [
    "Glitch effects on text the user must read — apply them to headings or decorative layers only.",
    "All-caps body copy: reserve caps for labels and readouts, set prose in sentence case."
  ],
  html: `<div class="cy-hud">
    <div class="cy-head"><span>Uplink</span><span class="cy-state">live</span></div>
    <div class="cy-rows">
      <div class="cy-row"><span>Latency</span><b>24 ms</b></div>
      <div class="cy-row"><span>Signal</span><b>88%</b></div>
      <div class="cy-row"><span>Node</span><b>07-KX</b></div>
    </div>
    <button class="cy-btn" type="button">Connect</button>
  </div>`,
  css: `.spec--cyberpunk-hud .cy-hud {
  width: 100%; max-width: 320px; padding: 16px 18px; background: #080d10;
  border: 1px solid #1de9b6; color: #ccf7ea; font-family: "IBM Plex Mono", monospace;
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
  box-shadow: inset 0 0 26px rgba(29,233,182,.12), 0 0 20px rgba(29,233,182,.14);
  position: relative;
}
.spec--cyberpunk-hud .cy-head {
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid rgba(29,233,182,.35); padding-bottom: 8px;
  font-size: 11px; letter-spacing: .22em; text-transform: uppercase;
}
.spec--cyberpunk-hud .cy-state { color: #ffb300; text-shadow: 0 0 10px rgba(255,179,0,.8); }
.spec--cyberpunk-hud .cy-rows { margin: 10px 0 14px; }
.spec--cyberpunk-hud .cy-row {
  display: flex; justify-content: space-between; font-size: 12px;
  padding: 6px 0; border-bottom: 1px dashed rgba(29,233,182,.22);
}
.spec--cyberpunk-hud .cy-row b { font-weight: 500; color: #fff; font-variant-numeric: tabular-nums; }
.spec--cyberpunk-hud .cy-btn {
  cursor: pointer; background: rgba(29,233,182,.14); color: #b9fff0;
  border: 1px solid #1de9b6; padding: 10px 18px;
  font: 500 12px/1 "IBM Plex Mono", monospace; letter-spacing: .18em; text-transform: uppercase;
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
  box-shadow: 0 0 16px rgba(29,233,182,.3);
}`,
  prompt: "Design a cyberpunk HUD: near-black panels clipped with polygon corners, monospace uppercase labels at 0.18–0.22em tracking, tabular numerals on all readouts, neon green emission with same-hue glow, one amber warning accent, bracket and tick marks as pseudo-elements, dense hairline rows, and a persistent status line reading live.",
  sources: ["https://en.wikipedia.org/wiki/Cyberpunk"]
},

{
  id: "y2k-frutiger",
  name: "Y2K / Frutiger Aero",
  era: "2004–2013",
  origin: "Techno-optimism: glossy aqua, bubbles, lens flares and sky gradients signalling a clean digital future.",
  blurb: "Wet gloss on everything. Aqua orbs with a hard specular highlight, glass-bevelled buttons, a bright sky gradient and translucent bubbles drifting behind the content.",
  traits: [
    "Gradient orbs: <code>radial-gradient(circle at 32% 26%, #fff, #bff0ff 32%, #4aa8e0 68%, #1c5f8f)</code> plus a small white specular blob.",
    "Glassy bevelled controls: top inner highlight, bottom inner shade, 1px light border, small drop shadow.",
    "Sky-and-water palette: white through cyan to deep blue, with one leaf-green accent for optimism.",
    "Bubbles: translucent circles at 6–20% alpha with a rim highlight, layered behind content.",
    "Slight pill or 8–12px radius, glossy type with a subtle top-lit gradient.",
    "Lens flares and soft bloom at low intensity, never as the main light."
  ],
  avoid: [
    "Gloss on top of a flat colour field; the sheen only exists where a gradient can catch it.",
    "Overusing bloom — everything glowing equally reads as a smudge rather than gloss."
  ],
  html: `<div class="y2-scene">
    <span class="y2-bub b1"></span><span class="y2-bub b2"></span><span class="y2-bub b3"></span>
    <span class="y2-orb"></span>
    <button class="y2-btn" type="button">Launch</button>
  </div>`,
  css: `.spec--y2k-frutiger .y2-scene {
  position: relative; width: 100%; max-width: 320px; height: 200px; overflow: hidden;
  border-radius: 10px; background: linear-gradient(#eafcff, #a9e4fb 46%, #2f8fd0 78%, #16558a);
  display: grid; place-items: center; gap: 0;
}
.spec--y2k-frutiger .y2-bub { position: absolute; border-radius: 50%; background: rgba(255,255,255,.22);
  box-shadow: inset -2px -3px 8px rgba(255,255,255,.7), 0 6px 14px rgba(20,80,130,.2); }
.spec--y2k-frutiger .b1 { width: 40px; height: 40px; top: 18px; left: 24px; }
.spec--y2k-frutiger .b2 { width: 22px; height: 22px; top: 62px; right: 40px; }
.spec--y2k-frutiger .b3 { width: 64px; height: 64px; bottom: 20px; right: -12px; opacity: .7; }
.spec--y2k-frutiger .y2-orb {
  position: absolute; top: 24px; left: 50%; margin-left: -46px; width: 92px; height: 92px; border-radius: 50%;
  background: radial-gradient(circle at 32% 26%, #ffffff, #bff0ff 30%, #4aa8e0 66%, #1c5f8f);
  box-shadow: inset -6px -10px 18px rgba(0,40,80,.35), inset 6px 8px 16px rgba(255,255,255,.8), 0 10px 22px rgba(10,60,110,.35);
}
.spec--y2k-frutiger .y2-orb::after {
  content: ""; position: absolute; top: 14px; left: 22px; width: 24px; height: 16px;
  border-radius: 50%; background: rgba(255,255,255,.85); filter: blur(1px); transform: rotate(-24deg);
}
.spec--y2k-frutiger .y2-btn {
  position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%); cursor: pointer;
  padding: 12px 28px; border-radius: 999px; border: 1px solid rgba(255,255,255,.85); color: #10456e;
  font: 700 14px/1 "Instrument Sans", sans-serif;
  background: linear-gradient(#ffffff, #d8f3ff 46%, #a4def5 54%, #ffffff);
  box-shadow: inset 0 1px 0 #fff, inset 0 -2px 4px rgba(0,60,110,.28), 0 6px 14px rgba(10,60,110,.32);
}`,
  prompt: "Design a Y2K/Frutiger Aero UI: sky-and-water gradient ground, glossy aqua orbs with a hard white specular blob and inner top highlight, glass-bevelled pill buttons with top glow and bottom shade, translucent rim-lit bubbles layered behind content, a leaf-green optimistic accent, soft bloom and lens flare at low intensity.",
  sources: ["https://en.wikipedia.org/wiki/Frutiger_Aero"]
},

{
  id: "retro-futurism",
  name: "Retro-futurism",
  era: "1968–1982, revived 2020s",
  origin: "Apollo-era control panels and 70s sci-fi print: warm amber readouts, rivets and engraved labels.",
  blurb: "The future as drawn in 1974. Warm metal and amber light, rounded rectangles, engraved uppercase labels, chunky toggle switches and gauge arcs instead of progress bars.",
  traits: [
    "Warm palette: cream, olive, amber and burnt orange; white light instead of blue.",
    "Amber emissive readouts with a soft bloom and a slight vignette.",
    "Engraved labels: <code>text-shadow: 0 1px 0 rgba(255,255,255,.45)</code> on a darker plate.",
    "Bracket-shaped gauge arcs and segmented bar meters rather than spans of solid fill.",
    "Chunky physical toggles with visible travel and a screw or rivet detail.",
    "Rounded 8–12px corners and dashed or dotted hairline rules."
  ],
  avoid: [
    "Cool blue LED accents — the whole register collapses back to modern dark UI.",
    "Flat vector icons; this style expects drawn, slightly over-engineered detail."
  ],
  html: `<div class="rf-panel">
    <span class="rf-rivet r1"></span><span class="rf-rivet r2"></span>
    <p class="rf-label">Reactor output</p>
    <div class="rf-meter"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="rf-row">
      <span class="rf-toggle"><b></b></span>
      <span class="rf-readout">072.4</span>
    </div>
  </div>`,
  css: `.spec--retro-futurism .rf-panel {
  position: relative; width: 100%; max-width: 300px; padding: 20px 18px; border-radius: 10px;
  background: linear-gradient(#6d6a52, #4f4d3b); border: 1px solid #38372a;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.25), inset 0 -4px 10px rgba(0,0,0,.4), 0 8px 18px rgba(0,0,0,.3);
}
.spec--retro-futurism .rf-rivet { position: absolute; width: 7px; height: 7px; border-radius: 50%;
  background: radial-gradient(circle at 34% 30%, #d8d5c2, #6f6c56); box-shadow: inset 0 -1px 1px rgba(0,0,0,.5); }
.spec--retro-futurism .r1 { top: 8px; right: 8px; }
.spec--retro-futurism .r2 { bottom: 8px; left: 8px; }
.spec--retro-futurism .rf-label {
  margin: 0 0 10px; font: 500 11px/1 "IBM Plex Mono", monospace; letter-spacing: .18em;
  text-transform: uppercase; color: #f2ecd6; text-shadow: 0 1px 0 rgba(0,0,0,.6);
}
.spec--retro-futurism .rf-meter { display: flex; gap: 5px; margin-bottom: 16px; }
.spec--retro-futurism .rf-meter i { flex: 1; height: 14px; border-radius: 2px; background: #3a392b;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.6); }
.spec--retro-futurism .rf-meter i:nth-child(-n+5) {
  background: linear-gradient(#ffcc66, #e08a1e);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.5), 0 0 10px rgba(240,160,40,.6);
}
.spec--retro-futurism .rf-row { display: flex; align-items: center; gap: 14px; }
.spec--retro-futurism .rf-toggle {
  width: 40px; height: 20px; border-radius: 10px; background: #2e2d22; padding: 3px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,.7);
}
.spec--retro-futurism .rf-toggle b {
  display: block; width: 14px; height: 14px; border-radius: 50%; margin-left: 20px;
  background: radial-gradient(circle at 34% 30%, #fff8e0, #b9b191);
  box-shadow: 0 1px 2px rgba(0,0,0,.6);
}
.spec--retro-futurism .rf-readout {
  font: 500 26px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #ffd27a; text-shadow: 0 0 14px rgba(255,170,50,.85);
  background: #241f14; border: 1px solid #6a5a2c; border-radius: 6px; padding: 5px 12px;
}`,
  prompt: "Design a retro-futurist control panel: warm metal plates with rivets, amber emissive readouts with soft bloom, engraved uppercase monospace labels, segmented bar meters with a glow at the active end, a chunky physical toggle with visible travel, rounded 8–12px corners, vignette, and zero cool-blue accents.",
  sources: []
},

{
  id: "comic-popart",
  name: "Comic / pop art",
  era: "1960s print, revived 2010s",
  origin: "Halftone comic printing and Warhol-era pop art: flat primaries behind heavy black outlines.",
  blurb: "Printed-page energy: heavy black outlines, flat primaries, halftone dot fields for shading and speech bubbles as the primary container for content.",
  traits: [
    "Outline width 3–4px on every shape and on type, always the same weight.",
    "Halftone shading: <code>radial-gradient(#111 1.6px, transparent 1.7px)</code> at a 6–8px pitch.",
    "Flat primaries with no gradient — but the shadow is always pure black.",
    "Speech bubbles with a real tail, used as the content container.",
    "Hand-lettered feel: heavy condensed caps, slight rotation per line.",
    "Ben-Day offsets: a misregistered colour block behind the outline at 3–5px."
  ],
  avoid: [
    "Halftone over body text; keep the dots in the background layer or on a solid panel edge.",
    "Soft drop shadows — printed comics have no blur."
  ],
  html: `<div class="cp-scene">
    <div class="cp-bubble">
      <p>Fast, loud, readable!</p>
      <span class="cp-tail"></span>
    </div>
    <button class="cp-btn" type="button">Zap</button>
  </div>`,
  css: `.spec--comic-popart .cp-scene {
  position: relative; width: 100%; max-width: 320px; height: 190px; overflow: hidden; border-radius: 4px;
  background: #ffd93b;
  background-image: radial-gradient(#e0ab00 1.6px, transparent 1.7px);
  background-size: 8px 8px;
  display: grid; place-items: center;
}
.spec--comic-popart .cp-bubble {
  position: relative; background: #fff; border: 4px solid #111; border-radius: 22px;
  padding: 16px 20px; transform: rotate(-2deg); box-shadow: 6px 6px 0 #111;
}
.spec--comic-popart .cp-bubble p {
  margin: 0; font: 800 17px/1.2 "Instrument Sans", sans-serif; color: #111;
  text-transform: uppercase; letter-spacing: .01em;
}
.spec--comic-popart .cp-tail {
  position: absolute; left: 26px; bottom: -22px; width: 0; height: 0;
  border-left: 10px solid transparent; border-right: 16px solid transparent;
  border-top: 22px solid #111;
}
.spec--comic-popart .cp-btn {
  position: absolute; right: 18px; bottom: 16px; cursor: pointer;
  border: 4px solid #111; background: #ff4d4d; color: #fff; border-radius: 999px;
  font: 800 16px/1 "Instrument Sans", sans-serif; padding: 12px 22px;
  text-transform: uppercase; box-shadow: 5px 5px 0 #111;
}
.spec--comic-popart .cp-btn:active { transform: translate(5px, 5px); box-shadow: none; }`,
  prompt: "Design a comic/pop-art screen: flat primary fills behind uniform 3–4px black outlines, halftone dot fields at a 6–8px pitch for shading, hard black offset shadows with no blur, speech bubbles with real tails as content containers, ben-day misregistration blocks behind outlines, heavy condensed caps set slightly rotated per line.",
  sources: []
},

{
  id: "organic-handdrawn",
  name: "Organic / hand-drawn",
  era: "2019–",
  origin: "A soft reaction to vector precision: hand-wobbled borders, muted earth tones, drawn marks.",
  blurb: "Nothing is perfectly straight. Borders wobble, arrows are drawn by hand, corners are lumpy, and the palette is pulled from clay, sage and paper rather than from a UI kit.",
  traits: [
    "Wobbly borders drawn as SVG paths with a gently irregular stroke, not CSS <code>border</code>.",
    "Muted earth palette: sage, clay, ochre, warm off-white; no pure black or pure white.",
    "Hand-drawn annotations: arrows, underlines and circles in a two-pass stroke look.",
    "Slight rotation (0.5–2 degrees) and uneven radius per element.",
    "Serif body face paired with a casual sans for labels.",
    "Texture as light grain at 3–6% rather than a flat fill."
  ],
  avoid: [
    "Faking hand-drawing with a rounded webfont alone; the wobble has to be in the geometry.",
    "Dropping below 4.5:1 because a muted palette felt friendlier — muted still needs contrast."
  ],
  html: `<div class="oh-frame">
    <svg class="oh-border" viewBox="0 0 300 170" preserveAspectRatio="none" aria-hidden="true">
      <path d="M8 12 C 74 4, 168 16, 292 8 C 297 46, 289 118, 294 160 C 210 168, 96 158, 9 164 C 3 118, 14 56, 8 12 Z"
            fill="none" stroke="#5c6b4a" stroke-width="2.4" stroke-linecap="round"/>
    </svg>
    <p class="oh-t">Field notebook</p>
    <p class="oh-b">Drawn marks over vector precision.</p>
    <svg class="oh-arrow" viewBox="0 0 90 34" aria-hidden="true">
      <path d="M4 26 C 26 8, 56 6, 82 14" fill="none" stroke="#b4703c" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M74 6 L 84 14 L 72 20" fill="none" stroke="#b4703c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>`,
  css: `.spec--organic-handdrawn .oh-frame {
  position: relative; width: 100%; max-width: 300px; height: 172px; padding: 34px 30px 30px;
  background: #f5f1e6; border-radius: 10px; transform: rotate(-.6deg);
}
.spec--organic-handdrawn .oh-border { position: absolute; inset: 0; width: 100%; height: 100%; }
.spec--organic-handdrawn .oh-t {
  margin: 0; font: 700 20px/1.2 Georgia, serif; color: #3f4636;
}
.spec--organic-handdrawn .oh-b {
  margin: 8px 0 0; font: 400 13px/1.6 "Instrument Sans", sans-serif; color: #5f6653; max-width: 24ch;
}
.spec--organic-handdrawn .oh-arrow { position: absolute; right: 22px; bottom: 20px; width: 84px; }`,
  prompt: "Design an organic hand-drawn layout: wobbly borders drawn as irregular SVG paths instead of CSS borders, muted earth palette of sage/clay/ochre/warm off-white with no pure black or white, hand-drawn arrows and circles in a two-pass stroke, elements rotated 0.5–2 degrees with uneven radii, serif body paired with a casual sans, light grain texture at ~4%.",
  sources: []
},

{
  id: "kinetic-typography",
  name: "Kinetic typography",
  era: "2016–",
  origin: "Scroll-linked motion design: type becomes the interface, sized past the grid and set moving.",
  blurb: "Words are the layout. Type is set far larger than the grid, stacked and overlapped, and revealed by masked motion as the page moves — with weight and tracking doing the job of imagery.",
  traits: [
    "Display type at 12vw+ with <code>clamp()</code> so it stays oversized but contained.",
    "Line-height at 0.85–0.92 and tracking to about -0.04em; letters nearly touch on purpose.",
    "Reveal by mask: <code>clip-path</code> or a transform inside <code>overflow: hidden</code>, never an opacity fade alone.",
    "One moving element per screen, scroll-linked rather than looping endlessly.",
    "Two weights only — a heavy display and a regular label — no third voice.",
    "Everything animates on <code>transform</code>, and stops under reduced-motion."
  ],
  avoid: [
    "Type crossing the baseline of its own line for decorative overlap; it costs readability for nothing.",
    "Auto-scrolling marquees, which demand attention without user intent and hide their content."
  ],
  html: `<div class="kt-stage">
    <p class="kt-line l1">MOVE</p>
    <p class="kt-line l2">THE<br>TYPE</p>
    <p class="kt-cap">Scroll-linked reveal, 0.9 leading</p>
  </div>`,
  css: `.spec--kinetic-typography .kt-stage {
  position: relative; width: 100%; max-width: 320px; height: 190px; overflow: hidden;
  background: #12100e; padding: 16px; border-radius: 6px;
}
.spec--kinetic-typography .kt-line {
  margin: 0; font: 900 44px/.88 "Instrument Sans", sans-serif; letter-spacing: -0.04em;
  color: #f6f2ea; text-transform: uppercase;
}
.spec--kinetic-typography .l2 { color: #8f8779; margin-top: 2px; }
.spec--kinetic-typography .kt-stage::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(100deg, transparent 42%, #12100e 46%, #12100e 62%, transparent 66%);
  animation: kt-wipe 4.4s cubic-bezier(.16,1,.3,1) infinite;
}
@keyframes kt-wipe { 0% { transform: translateX(-42%); } 60%, 100% { transform: translateX(46%); } }
.spec--kinetic-typography .kt-cap {
  position: absolute; left: 16px; bottom: 14px; margin: 0; z-index: 2;
  font: 400 11px/1 "IBM Plex Mono", monospace; color: #6f6a60; letter-spacing: .04em;
}
@media (prefers-reduced-motion: reduce) {
  .spec--kinetic-typography .kt-stage::after { display: none; }
}`,
  prompt: "Design a kinetic-typography page: display type at 12vw+ via clamp, 0.88 line-height and -0.04em tracking with letters nearly touching, masked reveals through clip-path or a transform inside overflow hidden rather than opacity fades, one scroll-linked moving element per screen, two weights only, all motion on transform and disabled under prefers-reduced-motion.",
  sources: []
},

{
  id: "luxury-premium",
  name: "Luxury / premium",
  era: "2010–",
  origin: "High-end retail and hospitality: near-black, thin gold rules and very restrained type.",
  blurb: "Restraint as a price signal. Near-black surfaces, a thin metallic accent, a high-contrast serif in wide letter-spaced caps, and margins large enough to imply that nothing is in a hurry.",
  traits: [
    "Near-black surfaces (<code>#0d0d0c</code>) with a metallic accent used only on rules and small marks.",
    "High-contrast serif display in caps with 0.24em+ tracking; one line per idea.",
    "1px metallic rules at roughly 30% opacity instead of boxes or dividers.",
    "Vertical rhythm at roughly 1.8x the usual spacing; wide margins, narrow measure.",
    "Outline buttons with the metallic hairline; no filled buttons until checkout.",
    "Almost no imagery on chrome; one hero image or none."
  ],
  avoid: [
    "Saturated or bright accents — the register only holds on near-mono surfaces.",
    "Small gold text on black: thin metallic type at low weight fails contrast."
  ],
  html: `<div class="lx-panel">
    <span class="lx-rule"></span>
    <p class="lx-mark">Since 1974</p>
    <h4 class="lx-title">Quiet<br>luxury</h4>
    <button class="lx-btn" type="button">Reserve</button>
  </div>`,
  css: `.spec--luxury-premium .lx-panel {
  width: 100%; max-width: 300px; padding: 26px 24px; background: #0d0d0c;
  border-radius: 2px; border: 1px solid #23231f;
}
.spec--luxury-premium .lx-rule { display: block; width: 40px; height: 1px; background: #b9974f; margin-bottom: 20px; }
.spec--luxury-premium .lx-mark {
  margin: 0; font: 400 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .28em; color: #9a958a;
}
.spec--luxury-premium .lx-title {
  margin: 16px 0 26px; font: 400 32px/.98 Georgia, serif; letter-spacing: .04em;
  text-transform: uppercase; color: #f2efe8;
}
.spec--luxury-premium .lx-btn {
  background: transparent; cursor: pointer; color: #d8c78f;
  border: 1px solid rgba(185,151,79,.55); border-radius: 0; padding: 13px 26px;
  font: 400 11px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .24em;
}
.spec--luxury-premium .lx-btn:hover { background: rgba(185,151,79,.1); }`,
  prompt: "Design a luxury interface: near-black surfaces with a single metallic accent used only on 1px rules and small marks, high-contrast serif display in wide-tracked caps (0.24em+), one idea per line, spacing at roughly 1.8x normal rhythm with wide margins and a narrow measure, outline buttons with metallic hairlines, minimal imagery.",
  sources: []
},

{
  id: "playful-chunky",
  name: "Playful chunky",
  era: "2018–",
  origin: "Consumer learning and fitness apps: toy-like controls that forgive imprecision and reward taps.",
  blurb: "Controls look pressable and physical in a friendly way. Buttons carry a thick solid bottom edge that compresses on tap, shapes are extreme pills and blobs, and one mascot-flavoured element keeps the tone warm.",
  traits: [
    "Buttons get a solid bottom edge: <code>box-shadow: 0 5px 0 #3f8f22</code>, and lose the offset when pressed.",
    "Extreme radii: <code>999px</code> on buttons, 24–32px on cards, no sharp corner anywhere.",
    "High-lightness saturated palette with one warm neutral for text (never pure black).",
    "Minimum 44px touch targets and generous hit padding around small icons.",
    "Reward motion on success: a short scale-and-settle, one authored moment, reduced-motion aware.",
    "Chunky icons at 2px+ stroke with round caps, matching the button weight."
  ],
  avoid: [
    "Chunky visuals on a dense data screen; the style implies low information density.",
    "Reward animations on every action — celebration only on real progress, or it becomes noise."
  ],
  html: `<div class="pl-card">
    <span class="pl-mascot"></span>
    <p class="pl-title">Nice streak</p>
    <p class="pl-sub">7 days in a row</p>
    <button class="pl-btn" type="button">Continue</button>
  </div>`,
  css: `.spec--playful-chunky .pl-card {
  width: 100%; max-width: 290px; padding: 22px; background: #fff;
  border: 2px solid #e6e3de; border-radius: 26px; text-align: center;
  box-shadow: 0 6px 0 #efede9;
}
.spec--playful-chunky .pl-mascot {
  display: inline-block; width: 62px; height: 62px; border-radius: 24px;
  background: radial-gradient(circle at 34% 28%, #ffe9a8, #ffc23c 62%, #f0a415);
  box-shadow: inset 0 -4px 0 rgba(0,0,0,.12);
}
.spec--playful-chunky .pl-title { margin: 12px 0 0; font: 800 21px/1.2 "Instrument Sans", sans-serif; color: #2f3a2b; }
.spec--playful-chunky .pl-sub { margin: 5px 0 18px; font: 600 13px/1.4 "Instrument Sans", sans-serif; color: #6f7a68; }
.spec--playful-chunky .pl-btn {
  display: block; width: 100%; cursor: pointer; border: 0; border-radius: 999px;
  padding: 15px; background: #58cc02; color: #fff;
  font: 800 15px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .08em;
  box-shadow: 0 5px 0 #3f8f22;
}
.spec--playful-chunky .pl-btn:active { transform: translateY(5px); box-shadow: 0 0 0 #3f8f22; }`,
  prompt: "Design a playful chunky interface: thick solid bottom edges on buttons that compress to nothing on press, extreme radii (pill buttons, 24–32px cards, no sharp corners), high-lightness saturated palette with a warm near-black text colour, 44px minimum targets with generous hit padding, chunky round-capped icons, and one authored reward animation on real progress.",
  sources: []
},

{
  id: "nordic",
  name: "Nordic / functional",
  era: "2014–",
  origin: "Scandinavian design tradition applied to services: muted warm neutrals, functional over decorative.",
  blurb: "Calm and unadorned. A muted warm-neutral palette, soft photography tones, quiet type and honest structure — the styling never competes with the content it is carrying.",
  traits: [
    "Warm neutral surfaces (<code>#f4f2ef</code>, <code>#e8e4de</code>) with ink at <code>#2c2a27</code>, not black.",
    "One muted accent (dusty blue, moss, terracotta) used at low frequency.",
    "Soft, low-contrast imagery in muted tones; no stock-photo saturation.",
    "Thin sans at 400 with 1.6–1.7 leading and no letterspacing except on small caps labels.",
    "Functional dividers and labels throughout — nothing ornamental, nothing hidden.",
    "Motion limited to 150ms colour and opacity changes; no decoration, no illustration."
  ],
  avoid: [
    "Muted to the point of low contrast; quiet is not the same as faint.",
    "Decorative flourishes; functionalism is the whole register."
  ],
  html: `<div class="nd-card">
    <span class="nd-photo"></span>
    <p class="nd-label">Opening hours</p>
    <p class="nd-t">Mon–Fri, 08:00–16:00</p>
    <p class="nd-b">Walk in, or book a slot if you need more time with an adviser.</p>
  </div>`,
  css: `.spec--nordic .nd-card {
  width: 100%; max-width: 300px; background: #f4f2ef; border: 1px solid #e0dcd5;
  border-radius: 8px; padding: 16px; font-family: "Instrument Sans", sans-serif;
}
.spec--nordic .nd-photo {
  display: block; height: 74px; border-radius: 5px; margin-bottom: 14px;
  background: linear-gradient(150deg, #cfd6d2, #e6e2da 55%, #b9c3be);
  filter: saturate(.6);
}
.spec--nordic .nd-label {
  margin: 0; font: 400 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .16em; color: #7b776f;
}
.spec--nordic .nd-t { margin: 8px 0 6px; font: 400 19px/1.3 "Instrument Sans", sans-serif; color: #2c2a27; }
.spec--nordic .nd-b { margin: 0; font: 400 13px/1.65 "Instrument Sans", sans-serif; color: #5d5a54; }`,
  prompt: "Design a Nordic-functional interface: warm neutral surfaces (#f4f2ef, #e8e4de) with #2c2a27 ink instead of black, one muted accent used sparingly, low-saturation soft imagery, thin sans at 400 with 1.6–1.7 leading, functional labels and dividers, no ornament and no illustration, motion limited to 150ms colour and opacity.",
  sources: []
},

{
  id: "isometric",
  name: "Isometric / axonometric",
  era: "2014–",
  origin: "Technical drawing's parallel projection, brought into product illustration and dashboards.",
  blurb: "Parallel projection at 30°, so nothing converges: an isometric grid, stacked slabs and props that keep their proportions front and back — a measured map of a space rather than a picture of one.",
  traits: [
    "Projection with no vanishing point: <code>transform: rotateX(54.736deg) rotateZ(45deg)</code> for true isometric, or a 2:1 pixel grid at 26.565°.",
    "Every edge stays parallel to one of three axes, so an object measures the same at its front and its back.",
    "Three-face shading from one fixed light: top lightest, one side mid, the opposite side darkest.",
    "A diamond or hex grid as the ground, with elements sitting on its intersections rather than between them.",
    "Depth built by stacking flat slabs a fixed 24–32px apart, never by a converging shadow.",
    "Hard edges and 0–4px radii; no depth-of-field and no perspective blur."
  ],
  avoid: [
    "Isometric and a real perspective camera in the same view — the two projections fight and the grid stops reading.",
    "Rotating the scene past about 35°: it stops looking isometric and starts looking broken.",
    "Isometric for dense data — the projection costs legibility and returns nothing."
  ],
  html: `<div class="iso-scene">
    <div class="iso-stage">
      <span class="iso-plate p1"></span>
      <span class="iso-plate p2"></span>
      <span class="iso-plate p3"></span>
    </div>
  </div>`,
  css: `.spec--isometric .iso-scene {
  width: 100%; max-width: 330px; min-height: 200px; border-radius: 10px; overflow: hidden;
  background: #eef1f6; display: grid; place-items: center;
}
.spec--isometric .iso-stage {
  position: relative; width: 132px; height: 132px;
  transform: rotateX(54.736deg) rotateZ(-45deg); transform-style: preserve-3d;
}
.spec--isometric .iso-plate { position: absolute; inset: 0; border-radius: 6px; transform-style: preserve-3d; }
.spec--isometric .p1 { background: #2f5fb8; transform: translateZ(0); box-shadow: 0 0 0 1px #23488f; }
.spec--isometric .p2 { background: #6f97d8; transform: translateZ(30px); box-shadow: 0 0 0 1px #587fc0; }
.spec--isometric .p3 { background: #b3c9ec; transform: translateZ(60px); box-shadow: 0 0 0 1px #97b0da; }`,
  prompt: "Design an isometric interface: parallel projection at 30° (transform: rotateX(54.736deg) rotateZ(45deg)), no vanishing point, every edge parallel to one of three axes, three-face shading from a single fixed light, a diamond or hex ground grid with elements on its intersections, depth from stacked slabs at a fixed spacing, hard edges and small radii, and no perspective or depth-of-field.",
  sources: ["https://en.wikipedia.org/wiki/Isometric_projection", "https://en.wikipedia.org/wiki/Axonometric_projection"]
}

);
