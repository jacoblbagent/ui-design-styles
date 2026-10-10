/* Patterns: structural and interaction styles, where layout carries the idea. */
(window.CATALOG = window.CATALOG || []).push(

{
  id: "bento-grid",
  name: "Bento grid",
  era: "2022–",
  origin: "Apple marketing pages and dashboards: one grid of tiles at mixed spans, each tile one idea.",
  blurb: "A modular tray of tiles where each cell states one thing. Span variation replaces hierarchy-by-size, and the tight, uniform gutter is what makes the odd sizes read as one object.",
  traits: [
    "12-column base with 2x/3x span variation; one clear hero tile per grid.",
    "Uniform gutter (12–16px) with matching outer padding so tiles align to the tray edge.",
    "One radius for every tile (16–20px) — mixed radii destroy the tray read.",
    "Each tile holds exactly one idea: label plus value or illustration, nothing more.",
    "Tile background varies by tonal step rather than by hue or shadow.",
    "Text sized to tile span; a 2x2 tile may carry a 25–31px headline, a 1x1 stays at 14px."
  ],
  avoid: [
    "Every tile the same size — that is a card grid, and the bento idea disappears.",
    "More than one hero tile: the eye needs one entry point into the tray."
  ],
  html: `<div class="bg-tray">
    <div class="bg-tile hero"><p class="bg-h">Workspace</p><p class="bg-s">4 projects active</p></div>
    <div class="bg-tile"><p class="bg-v">18</p><p class="bg-l">Builds</p></div>
    <div class="bg-tile"><p class="bg-v">2m</p><p class="bg-l">Median</p></div>
    <div class="bg-tile wide"><p class="bg-s2">Deploys this week</p><span class="bg-bars"><i></i><i></i><i></i><i></i><i></i><i></i></span></div>
    <div class="bg-tile"><p class="bg-s2">Status</p><p class="bg-ok">All clear</p></div>
  </div>`,
  css: `.spec--bento-grid .bg-tray {
  display: grid; gap: 10px; width: 100%; max-width: 320px; padding: 12px; background: #101216;
  grid-template-columns: repeat(4, 1fr); border-radius: 22px;
}
.spec--bento-grid .bg-tile {
  background: #1b1f26; border-radius: 16px; padding: 12px; color: #e8ecf2;
  font-family: "Instrument Sans", sans-serif; display: flex; flex-direction: column; justify-content: space-between;
}
.spec--bento-grid .hero { grid-column: span 2; grid-row: span 2; background: #23303c; }
.spec--bento-grid .wide { grid-column: span 2; }
.spec--bento-grid .bg-h { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
.spec--bento-grid .bg-s { margin: 0; font-size: 13px; color: #9fadbd; }
.spec--bento-grid .bg-v { margin: 0; font: 600 25px/1 "Instrument Sans", sans-serif; font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
.spec--bento-grid .bg-l { margin: 2px 0 0; font-size: 12px; color: #9fadbd; }
.spec--bento-grid .bg-s2 { margin: 0; font-size: 12px; color: #9fadbd; }
.spec--bento-grid .bg-ok { margin: 4px 0 0; font-size: 14px; font-weight: 600; color: #7ee0a8; }
.spec--bento-grid .bg-bars { display: flex; align-items: flex-end; gap: 3px; height: 26px; }
.spec--bento-grid .bg-bars i { flex: 1; background: #4d7fa8; border-radius: 2px; }
.spec--bento-grid .bg-bars i:nth-child(1) { height: 40%; }
.spec--bento-grid .bg-bars i:nth-child(2) { height: 70%; }
.spec--bento-grid .bg-bars i:nth-child(3) { height: 52%; }
.spec--bento-grid .bg-bars i:nth-child(4) { height: 88%; }
.spec--bento-grid .bg-bars i:nth-child(5) { height: 64%; }
.spec--bento-grid .bg-bars i:nth-child(6) { height: 96%; background: #7ee0a8; }`,
  prompt: "Design a bento grid: a 12-column base with 2x and 3x span variation, exactly one hero tile, a uniform 12–16px gutter with matching outer padding, a single 16–20px radius across all tiles, one idea per tile (label plus value), tonal background variation instead of shadows or hue, and type sized to the tile span.",
  sources: []
},

{
  id: "card-ui",
  name: "Card-based UI",
  era: "2013–",
  origin: "The default collection pattern: one object, one card, repeated in a responsive grid.",
  blurb: "Each thing in the collection gets its own bordered or elevated container so it can be scanned, compared and acted on as a unit. Consistency across cards is the whole mechanism.",
  traits: [
    "Card = 1px hairline border or one soft elevation shadow, never both.",
    "Fixed internal anatomy: media, title, one metadata line, one action, in the same order everywhere.",
    "12–16px radius, 12–16px internal padding, 16–24px grid gap.",
    "Whole card is a target but only one affordance is a button; hover raises the border or background, not the scale.",
    "Title truncated to two lines, metadata to one, so the grid never goes ragged.",
    "Row action stays ghost; the filled primary belongs to the page's one batch action."
  ],
  avoid: [
    "Cards inside cards — the false depth hides the real grouping.",
    "Same card used for a stat, a chart and a list item; one container cannot be three objects."
  ],
  html: `<div class="cd-grid">
    <article class="cd-card"><span class="cd-media m1"></span><h5>Ridge trail</h5><p class="cd-meta">12 km &middot; moderate</p><button class="cd-act" type="button">Open</button></article>
    <article class="cd-card"><span class="cd-media m2"></span><h5>Valley loop</h5><p class="cd-meta">7 km &middot; easy</p><button class="cd-act" type="button">Open</button></article>
  </div>`,
  css: `.spec--card-ui .cd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; max-width: 320px; }
.spec--card-ui .cd-card {
  border: 1px solid #e1e4e8; border-radius: 14px; background: #fff; padding: 10px;
  display: flex; flex-direction: column; gap: 6px; font-family: "Instrument Sans", sans-serif;
}
.spec--card-ui .cd-card:hover { border-color: #b9bfc7; }
.spec--card-ui .cd-media { display: block; height: 56px; border-radius: 9px; }
.spec--card-ui .m1 { background: linear-gradient(140deg, #9fb3a8, #6d8377); }
.spec--card-ui .m2 { background: linear-gradient(140deg, #b3a79b, #8b7f72); }
.spec--card-ui .cd-card h5 { margin: 4px 0 0; font-size: 14px; font-weight: 600; color: #16181d; }
.spec--card-ui .cd-meta { margin: 0; font-size: 12px; color: #6b7280; }
.spec--card-ui .cd-act {
  margin-top: 4px; align-self: flex-start; border: 1px solid #c9ced6; background: transparent;
  color: #16181d; border-radius: 999px; padding: 6px 12px; cursor: pointer; font: 500 12px/1 "Instrument Sans", sans-serif;
}
.spec--card-ui .cd-act:hover { opacity: .8; }`,
  prompt: "Design a card-based collection: one container per object with either a hairline border or a soft elevation (never both), fixed internal anatomy — media, title, one metadata line, one ghost action — 12–16px radii and padding with a 16–24px grid gap, hover raising only the border colour, truncated titles so the grid stays even.",
  sources: []
},

{
  id: "data-dashboard",
  name: "Data dashboard",
  era: "2015–",
  origin: "Operations tooling: maximum signal per pixel, read at speed, often at night.",
  blurb: "Built for scanning, not for reading. Dense rows, right-aligned tabular numerals, one colour per status, and every chart sized to the space its data actually needs.",
  traits: [
    "Tabular numerals everywhere: <code>font-variant-numeric: tabular-nums</code>; numbers right-aligned in columns.",
    "Row height 32–40px with hairline dividers instead of card borders per row.",
    "Status carried by one named colour plus a word — never colour alone.",
    "Sparklines at 24–32px tall, no axes, inline with the row they describe.",
    "Monospace only for measurements, IDs and timestamps, not for prose.",
    "Dark surface as the default at 8–14% tonal steps; no drop shadows inside the table."
  ],
  avoid: [
    "A row of four same-size stat cards above the table; if a number does not change a decision, it belongs in a line of text.",
    "Sparklines or rings standing in for content you could just print."
  ],
  html: `<div class="dd-panel">
    <div class="dd-head"><span>Service</span><span>p95</span><span>Trend</span><span>State</span></div>
    <div class="dd-row"><span>api</span><b>124 ms</b><svg class="dd-spark" viewBox="0 0 60 20" aria-hidden="true"><path d="M1 16 L10 12 L19 14 L28 7 L37 9 L46 4 L59 6" fill="none" stroke="#6fd6a4" stroke-width="1.6"/></svg><em class="ok">healthy</em></div>
    <div class="dd-row"><span>worker</span><b>310 ms</b><svg class="dd-spark" viewBox="0 0 60 20" aria-hidden="true"><path d="M1 14 L10 15 L19 9 L28 12 L37 6 L46 11 L59 3" fill="none" stroke="#e0a35c" stroke-width="1.6"/></svg><em class="warn">degraded</em></div>
    <div class="dd-row"><span>queue</span><b>18 ms</b><svg class="dd-spark" viewBox="0 0 60 20" aria-hidden="true"><path d="M1 12 L10 11 L19 13 L28 10 L37 12 L46 9 L59 10" fill="none" stroke="#6fd6a4" stroke-width="1.6"/></svg><em class="ok">healthy</em></div>
  </div>`,
  css: `.spec--data-dashboard .dd-panel {
  width: 100%; max-width: 330px; background: #12151a; border: 1px solid #242a33; border-radius: 8px;
  font-family: "Instrument Sans", sans-serif; padding: 6px 12px 10px;
}
.spec--data-dashboard .dd-head, .spec--data-dashboard .dd-row {
  display: grid; grid-template-columns: 1.2fr .8fr 1fr .9fr; align-items: center; gap: 8px;
}
.spec--data-dashboard .dd-head {
  font-size: 11px; color: #7d8899; padding: 8px 0 6px; border-bottom: 1px solid #242a33;
}
.spec--data-dashboard .dd-head span:nth-child(2), .spec--data-dashboard .dd-row b { text-align: right; }
.spec--data-dashboard .dd-row { height: 40px; border-bottom: 1px solid #1c2129; font-size: 13px; color: #d6dbe3; }
.spec--data-dashboard .dd-row b { font: 500 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--data-dashboard .dd-spark { width: 60px; height: 20px; }
.spec--data-dashboard .dd-row em { font-style: normal; font-size: 12px; }
.spec--data-dashboard .dd-row em.ok { color: #6fd6a4; }
.spec--data-dashboard .dd-row em.warn { color: #e0a35c; }`,
  prompt: "Design an operations dashboard: 32–40px rows separated by hairlines rather than per-row cards, tabular numerals right-aligned in columns, status as one colour plus a word, 24–32px axis-free sparklines inline with their row, monospace reserved for measurements and IDs, dark surfaces at 8–14% tonal steps with no shadows inside the table.",
  sources: []
},

{
  id: "terminal-cli",
  name: "Terminal / CLI",
  era: "1970s–",
  origin: "The character grid, kept as a deliberate interface aesthetic on the web.",
  blurb: "Everything on a monospace character grid. Alignment is achieved with spaces and columns, hierarchy with weight and reverse-video blocks, and the prompt is the only ornament.",
  traits: [
    "One monospace face at one size; grid alignment comes from characters, not from flexbox.",
    "Prompt glyph plus command on the same line, output indented two spaces and never aligned to the prompt.",
    "Reverse video (<code>background: fg; color: bg</code>) for the current line or selection.",
    "16 colours maximum, ANSI-like: 8 muted for text, 4 saturated for state.",
    "Box drawing with real dashes and pipes or with CSS borders, never ASCII art of letters.",
    "A caret that blinks only when the field is genuinely focused."
  ],
  avoid: [
    "Monospace as a costume for non-terminal content; it belongs to code, logs and measurements.",
    "Text as ASCII-art letterforms — it fails on every screen reader and any wrap."
  ],
  html: `<div class="tm-win">
    <div class="tm-bar"><span></span><span></span><span></span><b>build — zsh</b></div>
    <pre class="tm-body"><span class="tm-p">$</span> build --release
  <span class="tm-mut">18 warnings</span>
<span class="tm-p">$</span> test
  <span class="tm-ok">214 passed</span>  <span class="tm-bad">2 failed</span>
<span class="tm-cur">$ <i></i></span></pre>
  </div>`,
  css: `.spec--terminal-cli .tm-win {
  width: 100%; max-width: 330px; background: #0b0e0c; border: 1px solid #23282a; border-radius: 8px;
  overflow: hidden; font-family: "IBM Plex Mono", monospace;
}
.spec--terminal-cli .tm-bar {
  display: flex; align-items: center; gap: 6px; padding: 8px 10px; background: #161a19;
  border-bottom: 1px solid #23282a; font-size: 11px; color: #7e8a85;
}
.spec--terminal-cli .tm-bar span { width: 9px; height: 9px; border-radius: 50%; background: #39413d; }
.spec--terminal-cli .tm-bar b { margin-left: 6px; font-weight: 400; }
.spec--terminal-cli .tm-body { margin: 0; padding: 12px; font-size: 12px; line-height: 1.75; color: #cfe0d8; }
.spec--terminal-cli .tm-p { color: #6fd6a4; }
.spec--terminal-cli .tm-mut { color: #7e8a85; }
.spec--terminal-cli .tm-ok { color: #6fd6a4; }
.spec--terminal-cli .tm-bad { color: #ef7a6a; }
.spec--terminal-cli .tm-cur { background: #cfe0d8; color: #0b0e0c; display: inline-block; padding: 0 4px; }
.spec--terminal-cli .tm-cur i { display: inline-block; width: 7px; height: 13px; background: #0b0e0c;
  vertical-align: -2px; animation: tm-blink 1.1s steps(1) infinite; }
@keyframes tm-blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .spec--terminal-cli .tm-cur i { animation: none; } }`,
  prompt: "Design a terminal-style interface: one monospace face on a character grid, a prompt followed by the command with output indented two spaces, reverse-video treatment for the current line, at most sixteen ANSI-like colours with four saturated state colours, box drawing from real rules rather than letterform ASCII art, and a caret that blinks only while focused.",
  sources: []
},

{
  id: "spatial-vision",
  name: "Spatial / depth UI",
  era: "2023–",
  origin: "Headset interfaces: windows arranged in space, sized in degrees, lit by the room.",
  blurb: "Windows sit at depths rather than on a canvas. Every surface is translucent, edges catch the ambient light, and size and position are chosen for the field of view rather than for a grid.",
  traits: [
    "Depth as layering: background, mid-ground windows, near layers — three planes, each with its own blur and shadow strength.",
    "Translucent surfaces at 30–60% with a pronounced edge highlight; background shows through everywhere.",
    "Large radii (24–32px) and generous inner padding, since the eye reads the shape at a distance.",
    "Slight tilt or offset per window so planes do not read as one flat sheet.",
    "Hover or gaze target shown by an outline brightening, not by a scale change.",
    "Controls sized for imprecise input: 48px+ targets with visible spacing between them."
  ],
  avoid: [
    "Depth stacking that flattens at small sizes; below about 320px the planes collapse into mud.",
    "Motion sickness: no strong parallax on scroll, only gentle depth in response to direct input."
  ],
  html: `<div class="sp-scene">
    <span class="sp-room"></span>
    <div class="sp-win back"><p class="sp-t">Library</p><span class="sp-thumb"></span><span class="sp-thumb"></span></div>
    <div class="sp-win front"><p class="sp-t">Player</p><div class="sp-ctl"><span></span><span></span><span></span></div></div>
  </div>`,
  css: `.spec--spatial-vision .sp-scene {
  position: relative; width: 100%; max-width: 330px; height: 195px; overflow: hidden; border-radius: 16px;
  background: linear-gradient(160deg, #2c3444, #171c26);
}
.spec--spatial-vision .sp-room {
  position: absolute; inset: 0;
  background: radial-gradient(120px 90px at 20% 25%, rgba(190,215,255,.24), transparent 70%),
              radial-gradient(160px 120px at 80% 80%, rgba(255,190,150,.18), transparent 70%);
}
.spec--spatial-vision .sp-win {
  position: absolute; border-radius: 22px; padding: 14px;
  background: rgba(240,245,255,.24);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255,255,255,.35);
}
.spec--spatial-vision .back {
  left: 16px; top: 18px; width: 168px;
  box-shadow: 0 10px 26px rgba(0,0,0,.35);
  transform: perspective(600px) rotateY(6deg);
  opacity: .92;
}
.spec--spatial-vision .front {
  right: 14px; bottom: 16px; width: 186px;
  background: rgba(255,255,255,.34);
  box-shadow: 0 22px 44px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.7);
  transform: perspective(600px) rotateY(-5deg);
}
.spec--spatial-vision .sp-t { margin: 0 0 9px; font: 600 13px/1 "Instrument Sans", sans-serif; color: #fff; }
.spec--spatial-vision .sp-thumb { display: block; height: 24px; border-radius: 8px; background: rgba(255,255,255,.3); margin-bottom: 6px; }
.spec--spatial-vision .sp-ctl { display: flex; gap: 8px; }
.spec--spatial-vision .sp-ctl span { width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,.45);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8); }
.spec--spatial-vision .sp-ctl span:first-child { outline: 2px solid rgba(255,255,255,.85); outline-offset: 2px; }`,
  prompt: "Design a spatial interface: three depth planes each with its own blur and shadow strength, translucent surfaces at 30–60% with pronounced edge highlights, 24–32px radii and generous padding, a slight tilt per window so planes read separately, hover shown by a brightening outline rather than scaling, and 48px+ targets with visible spacing for imprecise input.",
  sources: ["https://developer.apple.com/design/human-interface-guidelines/spatial-layout"]
},

{
  id: "conversational",
  name: "Conversational UI",
  era: "2016–",
  origin: "Messaging as an interface grammar: turns, bubbles and a persistent composer.",
  blurb: "The transcript is the screen. State lives in the sequence of turns, the composer stays pinned, and structured answers arrive as cards inside a bubble rather than as a separate page.",
  traits: [
    "Two bubble styles only: the counterpart left-aligned with the tail below, the user right-aligned and tinted.",
    "Max bubble width around 76% of the transcript; long content becomes a card, not a wall of text.",
    "Timestamps in a separate, smaller line under the group, not inside every bubble.",
    "Composer pinned to the bottom with a 44px+ send target and the field focused on open.",
    "Optimistic send: the turn appears immediately with a pending state, then settles.",
    "Quick replies as real buttons above the composer, not as instructions in the copy."
  ],
  avoid: [
    "Pretending to be human: state plainly what the system did and keep a visible undo.",
    "Streaming text with no stop control and no indication of when the turn has actually ended."
  ],
  html: `<div class="cv-thread">
    <div class="cv-turn them"><p>Which window is free on Thursday?</p></div>
    <div class="cv-turn me"><p>09:00 or 14:30.</p></div>
    <div class="cv-turn them"><p>Book the morning.</p></div>
    <div class="cv-composer"><span class="cv-field">Message</span><button class="cv-send" type="button">Send</button></div>
  </div>`,
  css: `.spec--conversational .cv-thread {
  width: 100%; max-width: 320px; background: #f7f8fa; border: 1px solid #e3e6ea; border-radius: 14px;
  padding: 12px; font-family: "Instrument Sans", sans-serif; display: flex; flex-direction: column; gap: 8px;
}
.spec--conversational .cv-turn { max-width: 76%; border-radius: 14px; padding: 9px 12px; font-size: 13px; line-height: 1.45; }
.spec--conversational .cv-turn p { margin: 0; }
.spec--conversational .them { background: #fff; border: 1px solid #e3e6ea; color: #1b1e23; align-self: flex-start; border-bottom-left-radius: 4px; }
.spec--conversational .me { background: #1f6f6b; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
.spec--conversational .cv-composer {
  display: flex; align-items: center; gap: 8px; margin-top: 4px; padding-top: 10px; border-top: 1px solid #e3e6ea;
}
.spec--conversational .cv-field {
  flex: 1; font-size: 13px; color: #8b9099; background: #fff; border: 1px solid #e3e6ea;
  border-radius: 999px; padding: 11px 14px;
}
.spec--conversational .cv-send {
  border: 0; border-radius: 999px; background: #1f6f6b; color: #fff; cursor: pointer;
  font: 600 13px/1 "Instrument Sans", sans-serif; padding: 12px 16px; min-height: 44px;
}`,
  prompt: "Design a conversational interface: exactly two bubble styles with tails on the inner corner, bubbles capped at about 76% width with structured content as cards, timestamps grouped beneath rather than per bubble, a pinned composer with a 44px send target, optimistic send with a pending state, and quick replies as real buttons.",
  sources: []
},

{
  id: "skeleton-loading",
  name: "Skeleton loading",
  era: "2013–",
  origin: "Progressive content apps: placeholder geometry that matches the layout about to arrive.",
  blurb: "The layout appears before its data. Placeholder blocks trace the exact shape and position of the incoming content, so nothing shifts when the real values land.",
  traits: [
    "Placeholders mirror real geometry: same block count, same column widths, same text baselines.",
    "Blocks at 8–12% contrast against the surface — visible as structure, not as colour.",
    "One shimmer sweep across the whole region, not a separate animation per block.",
    "Motion is a transform-based gradient sweep, disabled under <code>prefers-reduced-motion</code>.",
    "Container marked <code>aria-busy=\"true\"</code> with a live label so the wait is announced.",
    "Reserve exact height so the swap causes zero layout shift; skeletons replace spinners above ~300ms."
  ],
  avoid: [
    "Skeletons that differ in shape from the content — the shift when data lands is worse than no skeleton.",
    "Skeletons for waits under about 300ms; the flicker reads as broken."
  ],
  html: `<div class="sl-panel" aria-busy="true" aria-live="polite">
    <div class="sl-row">
      <span class="sl-av"></span>
      <span class="sl-lines"><i class="w1"></i><i class="w2"></i></span>
    </div>
    <div class="sl-row">
      <span class="sl-av"></span>
      <span class="sl-lines"><i class="w1"></i><i class="w3"></i></span>
    </div>
    <p class="sl-status">Loading 2 of 8</p>
  </div>`,
  css: `.spec--skeleton-loading .sl-panel {
  width: 100%; max-width: 300px; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px;
  padding: 14px; font-family: "Instrument Sans", sans-serif;
}
.spec--skeleton-loading .sl-row { display: flex; gap: 12px; align-items: center; margin-bottom: 14px; }
.spec--skeleton-loading .sl-av { width: 40px; height: 40px; border-radius: 50%; flex: none;
  background: #e9ebee; position: relative; overflow: hidden; }
.spec--skeleton-loading .sl-lines { flex: 1; display: grid; gap: 7px; }
.spec--skeleton-loading .sl-lines i { display: block; height: 11px; border-radius: 4px; background: #e9ebee; position: relative; overflow: hidden; }
.spec--skeleton-loading .sl-lines .w1 { width: 78%; }
.spec--skeleton-loading .sl-lines .w2 { width: 52%; }
.spec--skeleton-loading .sl-lines .w3 { width: 64%; }
.spec--skeleton-loading .sl-av::after, .spec--skeleton-loading .sl-lines i::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.85), transparent);
  transform: translateX(-100%);
  animation: sl-sweep 1.6s cubic-bezier(.16,1,.3,1) infinite;
}
@keyframes sl-sweep { 100% { transform: translateX(100%); } }
.spec--skeleton-loading .sl-status { margin: 0; font-size: 12px; color: #6b7280; font-variant-numeric: tabular-nums; }
@media (prefers-reduced-motion: reduce) {
  .spec--skeleton-loading .sl-av::after, .spec--skeleton-loading .sl-lines i::after { animation: none; opacity: .0; }
}`,
  prompt: "Design a skeleton loading state: placeholder blocks that mirror the exact geometry of the incoming content (same block count, column widths and baselines), 8–12% contrast against the surface, a single transform-based shimmer sweep across the whole region, aria-busy with a live label, reserved height so the swap causes no layout shift, and reduced-motion support.",
  sources: []
},

{
  id: "progressive-disclosure",
  name: "Progressive disclosure",
  era: "1990s–",
  origin: "The usability principle of showing only what the current task needs, then revealing depth on demand.",
  blurb: "The common case is visible; the rest is one deliberate step away. A summary row states the current setting so nothing is hidden, and advanced options open in place without leaving the page.",
  traits: [
    "Summary row always states the current value — collapsed never means unknown.",
    "Reveal in place with a real disclosure triangle or chevron, and the row itself as the trigger.",
    "Revealed region indented one step with a hairline to show ownership.",
    "Only one extra level: a second nested disclosure is a sign the page needs splitting.",
    "Focus moves to the first revealed control; state persists for the session.",
    "Defaults are real: an untouched advanced panel still submits correct values."
  ],
  avoid: [
    "Hiding the only path to a necessary task behind a disclosure.",
    "Collapsed sections that lose the user's edits when reopened."
  ],
  html: `<div class="pd-panel">
    <div class="pd-row">
      <span>Notifications</span><b>Weekly digest</b>
      <svg class="pd-chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </div>
    <div class="pd-sub">
      <span class="pd-chip">Daily</span><span class="pd-chip on">Weekly</span><span class="pd-chip">Never</span>
      <p class="pd-note">Applies to every workspace you own.</p>
    </div>
  </div>`,
  css: `.spec--progressive-disclosure .pd-panel {
  width: 100%; max-width: 300px; background: #fff; border: 1px solid #e4e6ea; border-radius: 12px;
  font-family: "Instrument Sans", sans-serif; overflow: hidden;
}
.spec--progressive-disclosure .pd-row {
  display: grid; grid-template-columns: 1fr auto 22px; align-items: center; gap: 10px;
  padding: 14px; font-size: 14px; color: #191c21; cursor: pointer;
}
.spec--progressive-disclosure .pd-row b { font-size: 13px; font-weight: 500; color: #6b7280; }
.spec--progressive-disclosure .pd-chev { width: 12px; justify-self: end; color: #6b7280; transform: rotate(180deg); }
.spec--progressive-disclosure .pd-sub { padding: 0 14px 16px 26px; border-left: 1px solid #e4e6ea; margin-left: 14px; }
.spec--progressive-disclosure .pd-chip {
  display: inline-block; border: 1px solid #cfd4db; border-radius: 999px; padding: 6px 11px;
  font-size: 12px; color: #3d444e; margin-right: 5px;
}
.spec--progressive-disclosure .pd-chip.on { background: #191c21; border-color: #191c21; color: #fff; }
.spec--progressive-disclosure .pd-note { margin: 12px 0 0; font-size: 12px; color: #6b7280; }`,
  prompt: "Design progressive disclosure: a summary row that always states the current value, the row itself acting as the disclosure trigger with a real chevron, the revealed region indented one step behind a hairline, focus moved to the first revealed control, state persisted, working defaults, and never more than one level of nesting.",
  sources: ["https://www.nngroup.com/articles/progressive-disclosure/"]
},

{
  id: "empty-state",
  name: "Empty state",
  era: "2012–",
  origin: "Apps learned that the first-run screen decides whether the product is understood.",
  blurb: "The screen with nothing in it is a designed state, not a missing one. It states what belongs here, why it is empty, and offers exactly one way to fill it.",
  traits: [
    "One sentence naming what goes here, in the product's own nouns.",
    "Why it is empty stated when that is not obvious (filter, permission, first run).",
    "Exactly one primary action; a secondary link only for the alternative path.",
    "Drawn geometry or nothing — an empty region with a faint outline of the shape to come.",
    "Search or filter empty states carry a one-tap way to clear the filter.",
    "Never blames the user and never shows an error icon for an ordinary empty list."
  ],
  avoid: [
    "Large illustrative art that pushes the one action below the fold.",
    "A dead end with no action, which sends the user back to the browser chrome."
  ],
  html: `<div class="es-panel">
    <svg class="es-draw" viewBox="0 0 120 74" aria-hidden="true">
      <rect x="10" y="14" width="46" height="46" rx="5" fill="none" stroke="#b8bfc8"/>
      <rect x="64" y="14" width="46" height="46" rx="5" fill="none" stroke="#d3d8de"/>
      <path d="M22 60h22" stroke="#b8bfc8"/>
    </svg>
    <p class="es-t">No saved routes yet</p>
    <p class="es-b">Routes you save from the map appear here.</p>
    <button class="es-btn" type="button">Open the map</button>
  </div>`,
  css: `.spec--empty-state .es-panel {
  width: 100%; max-width: 300px; padding: 26px 22px; background: #fbfbfc; border: 1px dashed #d6dae0;
  border-radius: 12px; text-align: center; font-family: "Instrument Sans", sans-serif;
}
.spec--empty-state .es-draw { width: 120px; height: 74px; margin-bottom: 6px; }
.spec--empty-state .es-t { margin: 0; font-size: 15px; font-weight: 600; color: #1b1e23; }
.spec--empty-state .es-b { margin: 6px 0 16px; font-size: 13px; line-height: 1.5; color: #6b7280; }
.spec--empty-state .es-btn {
  border: 0; border-radius: 8px; background: #1b1e23; color: #fff; cursor: pointer;
  font: 600 13px/1 "Instrument Sans", sans-serif; padding: 11px 18px; min-height: 44px;
}`,
  prompt: "Design an empty state: one sentence naming what belongs here in the product's own nouns, a reason when emptiness is not obvious, exactly one primary action with an optional secondary link, light drawn geometry of the shape to come or nothing at all, a clear-filter shortcut for filter empties, and no error styling or blame.",
  sources: []
},

{
  id: "gamified",
  name: "Gamified UI",
  era: "2010–",
  origin: "Progress mechanics borrowed from games: levels, streaks, badges and a visible next step.",
  blurb: "Progress is always on screen and always one action away from moving. Bars fill, streaks count, and each reward is tied to something the user actually did.",
  traits: [
    "Progress bars animate with <code>transform: scaleX()</code> and <code>transform-origin: left</code>, never width.",
    "The next milestone is stated as a number of remaining units, not as a percentage alone.",
    "Badges only for non-default achievements; unearned badges stay in a quiet locked state.",
    "One reward animation per accomplishment, 300–500ms, exponential ease-out, reduced-motion aware.",
    "Streaks warn before breaking rather than shaming after — the warning is the useful part.",
    "Numbers always tabular so counters do not jitter as they count."
  ],
  avoid: [
    "Badges on every row marking the ordinary default state.",
    "Pulsing reward loops with no user action, which train people to ignore the animation."
  ],
  html: `<div class="gm-panel">
    <div class="gm-top"><span class="gm-streak">7 day streak</span><span class="gm-lvl">Level 4</span></div>
    <div class="gm-bar"><span></span></div>
    <p class="gm-next">3 more to level 5</p>
    <div class="gm-badges">
      <span class="gm-badge got">First ride</span><span class="gm-badge">10 rides</span><span class="gm-badge">Night owl</span>
    </div>
  </div>`,
  css: `.spec--gamified .gm-panel {
  width: 100%; max-width: 300px; padding: 18px; background: #fff; border: 1px solid #e6e8ec;
  border-radius: 14px; font-family: "Instrument Sans", sans-serif;
}
.spec--gamified .gm-top { display: flex; justify-content: space-between; align-items: baseline; font-size: 13px; color: #4b525c; }
.spec--gamified .gm-streak { font-weight: 600; color: #c2410c; font-variant-numeric: tabular-nums; }
.spec--gamified .gm-lvl { font-variant-numeric: tabular-nums; }
.spec--gamified .gm-bar {
  height: 12px; border-radius: 999px; background: #eef0f3; overflow: hidden; margin: 12px 0 8px;
}
.spec--gamified .gm-bar span {
  display: block; height: 100%; width: 100%; border-radius: 999px;
  background: linear-gradient(90deg, #f0a415, #e2601b);
  transform: scaleX(.72); transform-origin: left;
}
.spec--gamified .gm-next { margin: 0 0 14px; font-size: 12px; color: #6b7280; font-variant-numeric: tabular-nums; }
.spec--gamified .gm-badges { display: flex; flex-wrap: wrap; gap: 6px; }
.spec--gamified .gm-badge {
  font-size: 11px; font-weight: 500; border-radius: 999px; padding: 6px 10px;
  border: 1px dashed #d2d6db; color: #9aa1ab;
}
.spec--gamified .gm-badge.got { border: 1px solid #c2410c; background: #fdece2; color: #a33a08; }`,
  prompt: "Design a gamified progress panel: progress animated with transform scaleX from a left origin, the next milestone stated in remaining units, badges only for real achievements with unearned ones in a quiet locked state, one 300–500ms reward motion per accomplishment with reduced-motion support, a warning before a streak breaks, and tabular numerals on all counters.",
  sources: []
},

{
  id: "accessibility-first",
  name: "Accessibility-first",
  era: "2018–",
  origin: "WCAG and inclusive design practice: contrast, targets, focus and preference respected as defaults.",
  blurb: "The constraints come first and the styling is fitted around them: every text pair measured, every target 44px, focus always visible, and every animation obeying the reduced-motion preference.",
  traits: [
    "Body text at 4.5:1 minimum, large text at 3:1, checked against the real background not the mock.",
    "44x44px minimum target with 8px spacing between neighbouring controls.",
    "Focus visible on every interactive element with a 2px ring and 2px offset, never removed.",
    "Motion disabled under <code>prefers-reduced-motion</code>; nothing critical conveyed by motion alone.",
    "State never carried by colour alone — pair it with a word, icon or shape.",
    "Semantic order matches visual order; one h1; real labels bound to inputs.",
    "Supports forced-colors and 200% zoom without clipping."
  ],
  avoid: [
    "Placeholder-only inputs, which fail as labels the moment typing starts.",
    "Icon-only buttons without an accessible name.",
    "Focus styles suppressed with <code>outline: none</code>."
  ],
  html: `<div class="ax-panel">
    <label class="ax-label" for="ax-name">Trail name</label>
    <input class="ax-input" id="ax-name" type="text" value="Ridge trail" />
    <div class="ax-actions">
      <button class="ax-btn" type="button">Save</button>
      <button class="ax-btn ax-focus" type="button">Cancel</button>
    </div>
    <p class="ax-hint">Focus ring is always drawn. Targets are 44px with 8px between them.</p>
  </div>`,
  css: `.spec--accessibility-first .ax-panel {
  width: 100%; max-width: 300px; padding: 18px; background: #fff; border: 1px solid #c9ced6;
  border-radius: 10px; font-family: "Instrument Sans", sans-serif; color: #14171c;
}
.spec--accessibility-first .ax-label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
.spec--accessibility-first .ax-input {
  width: 100%; font: 400 14px/1 "Instrument Sans", sans-serif; color: #14171c;
  border: 2px solid #6b7280; border-radius: 8px; padding: 12px;
}
.spec--accessibility-first .ax-actions { display: flex; gap: 8px; margin-top: 14px; }
.spec--accessibility-first .ax-btn {
  flex: 1; min-height: 44px; border-radius: 8px; cursor: pointer;
  border: 2px solid #14171c; background: #14171c; color: #fff;
  font: 600 14px/1 "Instrument Sans", sans-serif;
}
.spec--accessibility-first .ax-focus { background: #fff; color: #14171c; }
.spec--accessibility-first .ax-focus:focus-visible,
.spec--accessibility-first .ax-focus { outline: 2px solid #1f4fd8; outline-offset: 2px; }
.spec--accessibility-first .ax-hint { margin: 14px 0 0; font-size: 12px; line-height: 1.5; color: #4b525c; }`,
  prompt: "Design an accessibility-first component set: body text measured at 4.5:1 and large text at 3:1 against the real background, 44x44px targets with 8px spacing, a 2px focus ring at 2px offset on every control and never suppressed, motion disabled under prefers-reduced-motion, state carried by word or shape as well as colour, real labels bound to inputs, and support for forced-colors and 200% zoom.",
  sources: ["https://www.w3.org/TR/WCAG22/", "https://www.microsoft.com/design/inclusive/"]
},

{
  id: "motion-micro",
  name: "Motion-led micro-interaction",
  era: "2016–",
  origin: "The school of one authored moment: a control that responds in a way you can feel.",
  blurb: "A single control carries the whole design in how it responds. The press compresses, the state morphs in place, and the timing curve is what makes it feel physical rather than switched.",
  traits: [
    "Exponential ease-out — <code>cubic-bezier(.16,1,.3,1)</code> — for anything appearing or settling; no bounce.",
    "120–200ms for state changes, 300–500ms only for a full element transformation.",
    "Only <code>transform</code> and <code>opacity</code> animate; never width, height, padding or margin.",
    "The element stays on the same baseline; nothing reflows around the animation.",
    "One authored moment per view; a second animation is a second competing signal.",
    "Reduced-motion cuts to the end state rather than removing the change."
  ],
  avoid: [
    "Elastic or bounce easing, which reads as dated and tacky.",
    "Animating a layout property, which forces reflow and drops frames on mid-range hardware."
  ],
  html: `<div class="mm-stage">
    <button class="mm-btn" type="button">
      <span class="mm-face">Deploy</span>
      <span class="mm-check">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.6l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </button>
    <p class="mm-note">Press: the face lifts out, the tick settles in. 220ms, transform only.</p>
  </div>`,
  css: `.spec--motion-micro .mm-stage { width: 100%; max-width: 290px; font-family: "Instrument Sans", sans-serif; }
.spec--motion-micro .mm-btn {
  position: relative; width: 100%; height: 54px; border: 0; border-radius: 12px;
  background: #1f6f6b; color: #fff; cursor: pointer; overflow: hidden;
  font: 600 15px/1 "Instrument Sans", sans-serif;
}
.spec--motion-micro .mm-face {
  position: absolute; inset: 0; display: grid; place-items: center;
  transition: transform 220ms cubic-bezier(.16,1,.3,1), opacity 160ms cubic-bezier(.16,1,.3,1);
}
.spec--motion-micro .mm-check {
  position: absolute; inset: 0; display: grid; place-items: center;
  transform: translateY(120%); opacity: 0;
  transition: transform 220ms cubic-bezier(.16,1,.3,1), opacity 160ms cubic-bezier(.16,1,.3,1);
}
.spec--motion-micro .mm-check svg { width: 26px; height: 26px; color: #bff3e4; }
.spec--motion-micro .mm-btn.is-done .mm-face { transform: translateY(-120%); opacity: 0; }
.spec--motion-micro .mm-btn.is-done .mm-check { transform: translateY(0); opacity: 1; }
.spec--motion-micro .mm-btn:active { transform: scale(.985); }
.spec--motion-micro .mm-note { margin: 14px 0 0; font-size: 12px; line-height: 1.55; color: #6b7280; }`,
  prompt: "Design a motion-led micro-interaction: exponential ease-out cubic-bezier(.16,1,.3,1), 120–200ms state changes and 300–500ms for full transformations, only transform and opacity animated so nothing reflows, the element staying on its baseline, exactly one authored moment per view, and reduced-motion jumping straight to the end state.",
  sources: []
},

{
  id: "agentic-adaptive",
  name: "Agentic / adaptive UI",
  era: "2024–",
  origin: "Assistants that act on your behalf: the interface proposes, states its reason, and stays undoable.",
  blurb: "The interface proposes actions instead of waiting for commands. Suggestions arrive as ordinary controls, each one states why it was offered and what it will touch, and every result keeps a visible undo.",
  traits: [
    "Intent phrased in the user's words, with the system's interpretation shown back before acting.",
    "Provenance line on every suggestion: what it read and what it will change.",
    "Suggestions rendered as the same controls as everything else, so they are keyboard-reachable and testable.",
    "Autonomy is graduated and explicit: suggest, confirm, or act-then-report — stated per capability, not globally.",
    "Every state-changing action is reversible and the undo stays visible for the whole session.",
    "Streamed output has a stop control and an explicit end state; pending work is labelled as pending."
  ],
  avoid: [
    "Confidence styling that looks like fact; label generated values honestly and mark estimates.",
    "Silent background changes with no report of what was touched."
  ],
  html: `<div class="ag-panel">
    <p class="ag-intent">Reads as: reschedule the two morning calls</p>
    <div class="ag-sugs">
      <button class="ag-sug" type="button"><b>Move both to 14:30</b><span>Reads your calendar. Changes 2 events.</span></button>
      <button class="ag-sug" type="button"><b>Ask attendees first</b><span>Reads your calendar. Sends 2 messages.</span></button>
    </div>
    <p class="ag-undo">Nothing changes until you pick. Every change stays undoable.</p>
  </div>`,
  css: `.spec--agentic-adaptive .ag-panel {
  width: 100%; max-width: 320px; padding: 16px; background: #fff; border: 1px solid #e3e6ea;
  border-radius: 12px; font-family: "Instrument Sans", sans-serif;
}
.spec--agentic-adaptive .ag-intent { margin: 0 0 12px; font-size: 13px; color: #4b525c; }
.spec--agentic-adaptive .ag-sugs { display: grid; gap: 8px; }
.spec--agentic-adaptive .ag-sug {
  text-align: left; cursor: pointer; background: #fbfbfc; border: 1px solid #dfe3e8;
  border-radius: 10px; padding: 12px 14px; min-height: 44px;
  font-family: "Instrument Sans", sans-serif;
}
.spec--agentic-adaptive .ag-sug:hover { border-color: #9aa1ab; }
.spec--agentic-adaptive .ag-sug b { display: block; font-size: 14px; font-weight: 600; color: #14171c; }
.spec--agentic-adaptive .ag-sug span { display: block; margin-top: 5px; font-size: 12px; line-height: 1.5; color: #6b7280; }
.spec--agentic-adaptive .ag-undo { margin: 12px 0 0; font-size: 12px; color: #6b7280; }`,
  prompt: "Design an agentic interface: restate the user's intent in their own words before acting, every suggestion carrying a provenance line naming what it reads and what it changes, suggestions rendered as ordinary keyboard-reachable controls, autonomy graduated per capability (suggest / confirm / act-then-report), every change reversible with a persistent undo, generated values labelled as estimates, and streamed output with a stop control and explicit end state.",
  sources: ["https://www.nngroup.com/articles/ai-ux/"]
},

{
  id: "zero-ui",
  name: "Zero-UI / ambient",
  era: "2017–",
  origin: "Voice assistants and sensors: interaction without a screen in the loop.",
  blurb: "The primary interaction needs no screen at all. State is announced in words or shown as one ambient signal, and the app's job is to make the invisible state legible at a glance.",
  traits: [
    "One ambient signal for system state — a soft light, a word or a single line — never a dashboard.",
    "Every change announced in plain language, with the reason, at the moment it happens.",
    "Confirmations kept to a short acknowledgement; no menus, no dialogs, no forms.",
    "A visible list of connected devices and their permissions, since nothing is on screen by default.",
    "One-tap escape hatch for anything the system started on its own.",
    "Input methods are optional and equivalent — voice, tap, keyboard — with the same result."
  ],
  avoid: [
    "Ambient signalling with no confirmation, which leaves the user unsure whether anything happened.",
    "A screen-first interface labelled voice-enabled; zero-UI means the screen is an accessory."
  ],
  html: `<div class="zu-panel">
    <span class="zu-orb"><i></i></span>
    <p class="zu-line">Listening for “goodnight”</p>
    <div class="zu-devices"><span>Lights</span><span>Thermostat</span><span>Lock</span></div>
    <button class="zu-stop" type="button">Stop</button>
  </div>`,
  css: `.spec--zero-ui .zu-panel {
  width: 100%; max-width: 290px; padding: 26px 22px; background: #0f1115; border: 1px solid #232830;
  border-radius: 16px; text-align: center; font-family: "Instrument Sans", sans-serif;
}
.spec--zero-ui .zu-orb {
  display: inline-grid; place-items: center; width: 86px; height: 86px; border-radius: 50%;
  background: radial-gradient(circle at 34% 30%, #3c4a5e, #141922 70%);
  box-shadow: inset 0 0 24px rgba(120,190,255,.25), 0 0 30px rgba(90,150,230,.14);
}
.spec--zero-ui .zu-orb i { display: block; width: 30px; height: 30px; border-radius: 50%;
  background: radial-gradient(circle at 36% 32%, #dff0ff, #5aa0e0 62%, #2b6ba8);
  box-shadow: 0 0 18px rgba(120,190,255,.6); }
.spec--zero-ui .zu-line { margin: 16px 0 14px; font-size: 14px; color: #e6ebf2; }
.spec--zero-ui .zu-devices { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
.spec--zero-ui .zu-devices span {
  font-size: 11px; color: #9aa6b6; border: 1px solid #2b323c; border-radius: 999px; padding: 5px 10px;
}
.spec--zero-ui .zu-stop {
  margin-top: 16px; min-height: 44px; cursor: pointer; border: 1px solid #57606e;
  background: transparent; color: #e6ebf2; border-radius: 999px; padding: 11px 20px;
  font: 500 13px/1 "Instrument Sans", sans-serif;
}`,
  prompt: "Design a zero-UI/ambient interaction: one ambient signal for system state instead of a dashboard, every change announced in plain language with its reason at the moment it happens, short acknowledgements rather than menus or forms, a visible list of connected devices and permissions, a one-tap escape hatch for anything the system started, and equivalent voice, tap and keyboard inputs.",
  sources: []
},

{
  id: "enterprise-b2b",
  name: "Enterprise / B2B",
  era: "2010–",
  origin: "Operational software for trained daily users: density, keyboard paths and auditability over delight.",
  blurb: "Dense, keyboard-driven and predictable. Rows and fields are compact, every destructive action is confirmed once, and the same table pattern is reused everywhere so training transfers.",
  traits: [
    "Compact density: 28–36px rows, 32px inputs, 4px radii, hairline dividers.",
    "Keyboard-first: <code>/</code> to search, arrow keys within a grid, Enter to open, Esc to leave, shortcuts shown on long-press.",
    "Bulk selection with a sticky action bar that names the count and the object.",
    "Filters as visible chips so the current query is readable, always with a clear-all.",
    "Destructive actions confirmed once, with the object named in the confirm.",
    "Audit fields (who, when) in the row detail, never in the table by default.",
    "Empty columns removed rather than filled with dashes."
  ],
  avoid: [
    "Big rounded cards for a table of records; density is the feature.",
    "Row-level filled buttons — repeated primaries across thirty rows flatten the hierarchy."
  ],
  html: `<div class="eb-panel">
    <div class="eb-bar"><span class="eb-search">Search invoices</span><span class="eb-kbd">/</span></div>
    <div class="eb-chips"><span class="eb-chip">Overdue &times;</span><button class="eb-clear" type="button">Clear all</button></div>
    <table class="eb-table">
      <thead><tr><th>Invoice</th><th>Client</th><th class="num">Amount</th></tr></thead>
      <tbody>
        <tr><td>INV-1042</td><td>Northwind</td><td class="num">4,210.00</td></tr>
        <tr><td>INV-1041</td><td>Contoso</td><td class="num">980.50</td></tr>
      </tbody>
    </table>
    <div class="eb-bulk"><span>2 selected</span><button class="eb-act" type="button">Send reminder</button></div>
  </div>`,
  css: `.spec--enterprise-b2b .eb-panel {
  width: 100%; max-width: 340px; background: #fff; border: 1px solid #dfe2e6; border-radius: 4px;
  font-family: "Instrument Sans", sans-serif; overflow: hidden;
}
.spec--enterprise-b2b .eb-bar { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-bottom: 1px solid #dfe2e6; }
.spec--enterprise-b2b .eb-search { flex: 1; font-size: 13px; height: 32px; display: flex; align-items: center;
  color: #8b9099; border: 1px solid #cfd4db; border-radius: 4px; padding: 0 10px; }
.spec--enterprise-b2b .eb-kbd { font: 500 11px/1 "IBM Plex Mono", monospace; color: #6b7280;
  border: 1px solid #cfd4db; border-radius: 3px; padding: 4px 6px; }
.spec--enterprise-b2b .eb-chips { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-bottom: 1px solid #eceff2; }
.spec--enterprise-b2b .eb-chip { font-size: 12px; background: #eef1f4; border-radius: 3px; padding: 4px 7px; color: #3d444e; }
.spec--enterprise-b2b .eb-clear { font-size: 12px; background: none; border: 0; color: #1f5f9f; text-decoration: underline;
  cursor: pointer; padding: 4px 0; }
.spec--enterprise-b2b .eb-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
.spec--enterprise-b2b .eb-table th {
  text-align: left; font-weight: 600; font-size: 11px; color: #6b7280; padding: 8px 12px;
  border-bottom: 1px solid #dfe2e6; background: #f8f9fa;
}
.spec--enterprise-b2b .eb-table td { padding: 0 12px; height: 34px; border-bottom: 1px solid #eceff2; color: #1b1e23; }
.spec--enterprise-b2b .eb-table .num { text-align: right; font-variant-numeric: tabular-nums; }
.spec--enterprise-b2b .eb-bulk {
  display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px;
  background: #f4f7fa; border-top: 1px solid #dfe2e6; font-size: 12.5px; color: #3d444e;
}
.spec--enterprise-b2b .eb-act { min-height: 32px; cursor: pointer; border: 1px solid #1b1e23; background: #1b1e23;
  color: #fff; border-radius: 4px; padding: 0 12px; font: 600 12.5px/1 "Instrument Sans", sans-serif; }`,
  prompt: "Design an enterprise B2B table screen: 28–36px rows and 32px inputs with 4px radii and hairline dividers, keyboard paths that are shown and documented, bulk selection with a sticky bar naming the count and object, filters as readable chips with clear-all, one confirmation on destructive actions naming the object, audit fields in row detail only, and empty columns removed.",
  sources: []
},

{
  id: "dark-oled",
  name: "Dark-first / OLED",
  era: "2018–",
  origin: "Dark interfaces made deliberate rather than inverted — built dark, then adapted to light.",
  blurb: "Designed dark from the start. True black where it saves power, elevation shown by lighter borders and surfaces rather than shadows, and colour desaturated so nothing vibrates against the ground.",
  traits: [
    "True black <code>#000</code> for OLED panels, or <code>#0b0c0e</code> where banding shows; never mid-grey.",
    "Elevation as a border plus one tonal step, not as a shadow — shadows are invisible on black.",
    "Colour desaturated by roughly 10–20% and lightened; saturated hues bleed on dark grounds.",
    "Text at <code>#e8eaed</code> or softer, never pure white, which haloes on dark.",
    "Primary buttons inverted: light fill, dark label — a saturated fill loses its edge on black.",
    "Images and logos on transparent PNGs replaced with a bordered tile so they do not float."
  ],
  avoid: [
    "Pure white body text at large sizes, which glares and smears on OLED.",
    "Reusing light-mode shadows; elevation on dark must be tonal or bordered.",
    "A dark theme chosen by category rather than from the use scene — decide from where it is used."
  ],
  html: `<div class="dk-panel">
    <div class="dk-card">
      <p class="dk-t">Battery detail</p>
      <p class="dk-b">Elevation here is a lighter border, not a shadow.</p>
    </div>
    <button class="dk-primary" type="button">Inverted primary</button>
    <button class="dk-ghost" type="button">Secondary</button>
  </div>`,
  css: `.spec--dark-oled .dk-panel {
  width: 100%; max-width: 290px; padding: 18px; background: #000; border-radius: 12px;
  font-family: "Instrument Sans", sans-serif; display: grid; gap: 10px;
}
.spec--dark-oled .dk-card { background: #121316; border: 1px solid #2a2d33; border-radius: 10px; padding: 14px; }
.spec--dark-oled .dk-t { margin: 0; font-size: 14px; font-weight: 600; color: #e8eaed; }
.spec--dark-oled .dk-b { margin: 6px 0 0; font-size: 12.5px; line-height: 1.5; color: #a8adb6; }
.spec--dark-oled .dk-primary {
  min-height: 42px; cursor: pointer; border: 1px solid #e8eaed; background: #e8eaed; color: #0b0c0e;
  border-radius: 8px; font: 600 13.5px/1 "Instrument Sans", sans-serif;
}
.spec--dark-oled .dk-ghost {
  min-height: 42px; cursor: pointer; border: 1px solid #3a3f47; background: transparent; color: #e8eaed;
  border-radius: 8px; font: 500 13.5px/1 "Instrument Sans", sans-serif;
}`,
  prompt: "Design a dark-first interface: true black or near-black ground, elevation expressed as a lighter border plus one tonal step rather than a shadow, colours desaturated 10–20% and lightened, text at #e8eaed rather than pure white, primaries inverted to a light fill with a dark label, and transparent logos placed on bordered tiles.",
  sources: []
},

{
  id: "hero-landing",
  name: "Marketing / hero landing",
  era: "2010s–",
  origin: "The product landing page: one promise stated above the fold, then proof.",
  blurb: "The most common screen on the web, and a structure more than a look: an eyebrow, one headline carrying the value in plain words, one supporting line, a single primary action, and a trust row directly beneath — all inside one screen of the fold.",
  traits: [
    "One promise, stated once: eyebrow, one headline, one supporting line — no second headline.",
    "A single primary action; the secondary action is demoted to a ghost or a text link.",
    "A trust row (logos, one metric) immediately under the action, not scattered down the page.",
    "The headline names the value, not the product: the product name belongs in the lockup.",
    "Left-aligned or centred as a deliberate choice, with the action in the first viewport at every width.",
    "One supporting image or product surface, never a carousel of promises."
  ],
  avoid: [
    "Two equal-weight buttons, which is no call to action.",
    "A rotating hero — three promises shown in sequence are three promises half-seen.",
    "Stock imagery doing the work the headline should."
  ],
  html: `<div class="hp-hero">
    <p class="hp-eyebrow">Now in beta</p>
    <h4 class="hp-head">Ship the whole page</h4>
    <p class="hp-sub">One component, every screen. No second codebase to keep in step.</p>
    <div class="hp-cta"><span class="hp-p">Start free</span><span class="hp-s">Book a demo</span></div>
    <div class="hp-logos"><i>&#9670;</i><i>&#9650;</i><i>&#9679;</i><i>&#9632;</i></div>
  </div>`,
  css: `.spec--hero-landing .hp-hero {
  width: 100%; max-width: 340px; padding: 30px 22px 22px; text-align: center; border-radius: 14px;
  background: #0f1117; color: #f4f5f7; font-family: "Instrument Sans", sans-serif;
}
.spec--hero-landing .hp-eyebrow { margin: 0; font: 600 11px/1 "Instrument Sans", sans-serif; letter-spacing: .16em; text-transform: uppercase; color: #8b93a7; }
.spec--hero-landing .hp-head { margin: 12px 0 0; font-size: clamp(26px, 7vw, 36px); line-height: 1.02; letter-spacing: -0.025em; font-weight: 700; }
.spec--hero-landing .hp-sub { margin: 10px auto 0; max-width: 24em; font-size: 13.5px; line-height: 1.5; color: #a9b0c0; }
.spec--hero-landing .hp-cta { display: flex; gap: 9px; justify-content: center; margin-top: 18px; }
.spec--hero-landing .hp-p { padding: 11px 18px; border-radius: 9px; background: #4f7cff; font: 600 13px/1 "Instrument Sans", sans-serif; }
.spec--hero-landing .hp-s { padding: 11px 18px; border-radius: 9px; box-shadow: inset 0 0 0 1px #343b4d; font: 600 13px/1 "Instrument Sans", sans-serif; color: #cfd4e0; }
.spec--hero-landing .hp-logos { display: flex; gap: 18px; justify-content: center; margin-top: 22px; color: #5a6273; font-size: 15px; }`,
  prompt: "Design a product hero: an eyebrow label, one headline that states the value in plain words, one supporting line, a single primary action with the secondary demoted to a ghost, a trust row of logos or one metric directly beneath, one product surface as the only image, and the headline plus action inside the first viewport at every width. No second promise, no carousel.",
  sources: []
},

{
  id: "onboarding-wizard",
  name: "Onboarding / wizard",
  era: "1990s–",
  origin: "Setup flows and installers: the shortest honest path through a decision set.",
  blurb: "A decision set broken into single-question screens with a visible position. One decision per step, a stated place in the sequence, Back always reachable, and defaults good enough that a person can finish without answering everything.",
  traits: [
    "One decision per step, with its position stated (" + "\"Step 2 of 3\"" + ") and progress shown as a rail of steps.",
    "The longest step sets the frame, so the layout does not jump between steps.",
    "Back is always available except after a committed action; Continue is the single primary.",
    "Defaults that let a person finish without answering every question.",
    "A short plain-language hint under the question that sets expectations (" + "\"you can change this later\"" + ").",
    "Progress is honest — no filler steps added to look thorough."
  ],
  avoid: [
    "Collecting data the first run does not use.",
    "A step that cannot be skipped or gone back from.",
    "A progress bar that jumps backwards when the person goes Back."
  ],
  html: `<div class="ow-card">
    <div class="ow-steps"><i class="done"></i><i class="now"></i><i></i></div>
    <p class="ow-step">Step 2 of 3</p>
    <h4 class="ow-q">Where do you ship?</h4>
    <p class="ow-hint">You can change this later.</p>
    <div class="ow-actions"><span class="ow-back">Back</span><span class="ow-next">Continue</span></div>
  </div>`,
  css: `.spec--onboarding-wizard .ow-card {
  width: 100%; max-width: 300px; padding: 20px; background: #fff; border-radius: 14px;
  border: 1px solid #e6e8ec; font-family: "Instrument Sans", sans-serif;
}
.spec--onboarding-wizard .ow-steps { display: flex; gap: 6px; }
.spec--onboarding-wizard .ow-steps i { width: 22px; height: 4px; border-radius: 999px; background: #e0e3e9; }
.spec--onboarding-wizard .ow-steps i.done { background: #1f7a4d; }
.spec--onboarding-wizard .ow-steps i.now { background: #1f7a4d; width: 34px; }
.spec--onboarding-wizard .ow-step { margin: 12px 0 0; font: 500 11px/1 "Instrument Sans", sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #8a8f99; }
.spec--onboarding-wizard .ow-q { margin: 8px 0 0; font-size: 19px; font-weight: 600; color: #16181d; }
.spec--onboarding-wizard .ow-hint { margin: 6px 0 0; font-size: 12.5px; color: #7d838f; }
.spec--onboarding-wizard .ow-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
.spec--onboarding-wizard .ow-back { font: 500 13px/1 "Instrument Sans", sans-serif; color: #7d838f; }
.spec--onboarding-wizard .ow-next { padding: 10px 16px; border-radius: 9px; background: #16181d; color: #fff; font: 600 13px/1 "Instrument Sans", sans-serif; }`,
  prompt: "Design a setup wizard: one decision per screen, a step rail that states position, the longest step setting the frame so nothing jumps, Back always available with a single primary Continue, sensible defaults so the flow can be finished without answering everything, a short hint under each question, and honest progress.",
  sources: []
},

{
  id: "feed-timeline",
  name: "Feed / infinite scroll",
  era: "2006–",
  origin: "Social timelines and content streams: an unbounded list of same-shaped units in reverse time.",
  blurb: "One unit, repeated. Every item has the same shape and states author, time and content, the reader learns it once and reads fifty, and continuation is explicit — a cursor, a loader, or an end marker — never a silent stop.",
  traits: [
    "Same-shaped units in reverse-chronological order, so one card teaches the whole feed.",
    "Each unit states its author, its time and one piece of content; nothing is inferred.",
    "Continuation is explicit — " + "\"loading older\"" + ", a cursor, or an end marker.",
    "Live arrivals are announced and do not silently prepend above the reader's place.",
    "The reader's position is preserved when more loads, and a way back exists.",
    "Media in a unit reserves its space so the list does not shift as it streams in."
  ],
  avoid: [
    "Infinite scroll with no end state and no way back to a position.",
    "Mixing unit shapes in one feed, which breaks the rhythm the whole pattern depends on.",
    "Autoplay media that hijacks the scroll."
  ],
  html: `<div class="ft-feed">
    <article class="ft-post"><span class="ft-av"></span><div><p class="ft-meta">Ana &middot; 2h</p><p class="ft-body">Shipped the new map layer.</p></div></article>
    <article class="ft-post"><span class="ft-av b"></span><div><p class="ft-meta">Sam &middot; 5h</p><p class="ft-body">Two routes added today.</p></div></article>
    <div class="ft-more"><i></i>Loading older</div>
  </div>`,
  css: `.spec--feed-timeline .ft-feed { width: 100%; max-width: 310px; background: #fff; border: 1px solid #e8eaee; border-radius: 12px; overflow: hidden; font-family: "Instrument Sans", sans-serif; }
.spec--feed-timeline .ft-post { display: flex; gap: 10px; padding: 12px 14px; box-shadow: inset 0 -1px 0 #eef0f3; }
.spec--feed-timeline .ft-av { width: 32px; height: 32px; border-radius: 50%; background: #cdd6e6; flex: none; }
.spec--feed-timeline .ft-av.b { background: #e2d3c4; }
.spec--feed-timeline .ft-meta { margin: 0; font: 600 11.5px/1.4 "Instrument Sans", sans-serif; color: #6b7280; }
.spec--feed-timeline .ft-body { margin: 2px 0 0; font-size: 13.5px; line-height: 1.45; color: #191b20; }
.spec--feed-timeline .ft-more { display: flex; align-items: center; gap: 8px; padding: 13px 14px; font: 500 12px/1 "Instrument Sans", sans-serif; color: #9aa0ab; }
.spec--feed-timeline .ft-more i { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #d3d7de; border-top-color: #6b7280; }`,
  prompt: "Design a feed: one repeated unit shape in reverse-chronological order carrying author, time and one piece of content, explicit continuation (loading-older row, cursor or end marker), live arrivals announced rather than silently prepended, position preserved when more loads, and media that reserves its space so nothing shifts.",
  sources: []
},

{
  id: "command-palette",
  name: "Command palette",
  era: "2012–",
  origin: "Editor and app launchers: one keystroke, then fuzzy search over everything you can do.",
  blurb: "An intent-first surface. One keystroke opens a single search over the product's verbs and objects, fuzzy-matched with the top hit pre-selected, every result showing its object and its consequence, and the whole thing runnable without the pointer.",
  traits: [
    "One entry point (<code>&#8984;K</code> / <code>Ctrl-K</code>) that is the same everywhere in the product.",
    "Fuzzy match over verbs, objects and recently used items, with the top hit pre-selected.",
    "Grouped results, each row naming its object and its consequence.",
    "Keyboard-first: arrows move, Enter runs, Escape closes; the pointer is optional.",
    "Reachable actions only — nothing listed that cannot be run from here.",
    "Recents and context shorten the list, so the palette learns the person rather than the manual."
  ],
  avoid: [
    "Fifty items in a different order each call, which is a menu wearing a palette.",
    "A palette that cannot be opened, or moved, from the keyboard.",
    "Listing settings as commands; a palette is for actions with a consequence."
  ],
  html: `<div class="cp-pal">
    <div class="cp-input"><span class="cp-caret"></span>open<kbd>&#8984;K</kbd></div>
    <ul class="cp-list">
      <li class="sel"><b>Open project</b><span>Jump to a workspace</span><kbd>&#9166;</kbd></li>
      <li><b>New file</b><span>Create in current folder</span></li>
      <li><b>Toggle theme</b></li>
    </ul>
  </div>`,
  css: `.spec--command-palette .cp-pal { width: 100%; max-width: 320px; border-radius: 12px; overflow: hidden; background: rgba(24,26,32,.86); backdrop-filter: blur(16px) saturate(140%); border: 1px solid rgba(255,255,255,.1); box-shadow: 0 18px 40px rgba(0,0,0,.45); font-family: "Instrument Sans", sans-serif; color: #e7e9ee; }
.spec--command-palette .cp-input { display: flex; align-items: center; gap: 8px; padding: 12px 14px; font-size: 14px; box-shadow: inset 0 -1px 0 rgba(255,255,255,.08); }
.spec--command-palette .cp-caret { width: 1.5px; height: 16px; background: #4f7cff; }
.spec--command-palette .cp-input kbd { margin-left: auto; font: 500 11px/1 "IBM Plex Mono", monospace; color: #9aa0ab; border: 1px solid rgba(255,255,255,.14); border-radius: 5px; padding: 3px 6px; }
.spec--command-palette .cp-list { list-style: none; margin: 0; padding: 6px; }
.spec--command-palette .cp-list li { display: flex; align-items: center; gap: 8px; padding: 9px 10px; border-radius: 8px; }
.spec--command-palette .cp-list li.sel { background: rgba(79,124,255,.18); box-shadow: inset 0 0 0 1px rgba(79,124,255,.4); }
.spec--command-palette .cp-list b { font: 600 13px/1 "Instrument Sans", sans-serif; }
.spec--command-palette .cp-list span { font-size: 11.5px; color: #9aa0ab; }
.spec--command-palette .cp-list kbd { margin-left: auto; font: 500 11px/1 "IBM Plex Mono", monospace; color: #9aa0ab; }`,
  prompt: "Design a command palette: one keyboard entry point (Cmd/Ctrl-K) available everywhere, a fuzzy search over verbs, objects and recents with the top hit pre-selected, grouped rows each naming the object and its consequence, full keyboard operation (arrows, Enter, Escape), and only actions that can actually be run from here. Never a re-ordered menu.",
  sources: []
},

{
  id: "navigation-shell",
  name: "App navigation shell",
  era: "2010s–",
  origin: "Native app frames and web apps: persistent chrome that owns the layout and never moves for content.",
  blurb: "The frame the product lives in. A persistent rail or bottom bar for top-level moves, a bar for the current context, and a body for content — the shell owns the layout, the screen fills the body, and the way back is always on screen.",
  traits: [
    "Three zones: a persistent rail (or bottom bar) for top-level moves, a bar for the current context, a body for content.",
    "The shell owns the layout; screens fill the body and never move the chrome.",
    "One level of hierarchy visible at a time; deeper structure is revealed in place.",
    "The current location is marked in both the rail and the contextual bar.",
    "Chrome collapses with intent (rail shrinks, bar merges) rather than disappearing.",
    "The primary action for the current screen sits in the contextual bar, not floating loose."
  ],
  avoid: [
    "Two navigation systems of equal weight, which makes the path ambiguous.",
    "A shell that scrolls away, so the way back is not always on screen.",
    "Hiding the primary move behind a gesture with no visible affordance."
  ],
  html: `<div class="ns-app">
    <aside class="ns-rail"><span class="act">&#9636;</span><span>&#9635;</span><span>&#9733;</span></aside>
    <div class="ns-main">
      <div class="ns-top"><span class="ns-title">Inbox</span><span class="ns-act">&#9998;</span></div>
      <div class="ns-body"><span class="ns-line"></span><span class="ns-line s"></span></div>
    </div>
  </div>`,
  css: `.spec--navigation-shell .ns-app { display: grid; grid-template-columns: 50px 1fr; width: 100%; max-width: 320px; height: 170px; border: 1px solid #e6e8ec; border-radius: 12px; overflow: hidden; background: #fff; font-family: "Instrument Sans", sans-serif; }
.spec--navigation-shell .ns-rail { background: #14161c; display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 14px 0; color: #6d7482; font-size: 16px; }
.spec--navigation-shell .ns-rail .act { color: #fff; }
.spec--navigation-shell .ns-top { display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; box-shadow: inset 0 -1px 0 #eef0f3; }
.spec--navigation-shell .ns-title { font: 600 15px/1 "Instrument Sans", sans-serif; color: #16181d; }
.spec--navigation-shell .ns-act { color: #8a8f99; }
.spec--navigation-shell .ns-body { padding: 16px 14px; display: grid; gap: 10px; align-content: start; }
.spec--navigation-shell .ns-line { height: 12px; border-radius: 4px; background: #eef0f3; }
.spec--navigation-shell .ns-line.s { width: 60%; }`,
  prompt: "Design an app navigation shell: a persistent rail or bottom bar for top-level moves, a contextual bar for the current screen carrying its primary action, and a body that screens fill without moving the chrome. Mark the current location in both zones, collapse chrome with intent rather than hiding it, and keep one visible level of hierarchy with deeper structure revealed in place.",
  sources: []
},

{
  id: "overlay-layer",
  name: "Overlay layer (modal / drawer / sheet)",
  era: "2010s–",
  origin: "The layered web: content on top of content, with a scrim to say how much it blocks.",
  blurb: "Interruption with a weight that matches its cost. A modal blocks and traps; a sheet and a popover do not. One scrim for the modal, none for the rest, and every layer closes on Escape, on its own control, and — if modal — on the backdrop.",
  traits: [
    "Weight matches blocking power: one scrim for a full modal, none for a sheet or popover.",
    "A modal traps focus and blocks the page; a sheet and a popover leave the page reachable.",
    "Every layer closes on Escape, on its own control, and (if modal) on a backdrop click.",
    "Dismiss returns focus to the element that opened it.",
    "The topmost layer owns the stack; nothing opens beneath it, and the stack has one depth.",
    "The sheet is anchored to its edge with an affordance (a grab handle), and scrolls inside itself."
  ],
  avoid: [
    "An overlay for a task that could live in the page — layering is for interruptions, not navigation.",
    "A sheet taller than the screen with no internal scroll, or a modal that cannot be closed from the keyboard.",
    "Stacking overlays on overlays."
  ],
  html: `<div class="ol-stage">
    <div class="ol-scrim"></div>
    <div class="ol-sheet">
      <span class="ol-grab"></span>
      <p class="ol-title">Move to folder</p>
      <p class="ol-row">Invoices</p>
      <p class="ol-row">Archive</p>
    </div>
  </div>`,
  css: `.spec--overlay-layer .ol-stage { position: relative; width: 100%; max-width: 320px; height: 172px; border-radius: 12px; overflow: hidden; background: linear-gradient(160deg,#dfe6f2,#c7d3e6); }
.spec--overlay-layer .ol-scrim { position: absolute; inset: 0; background: rgba(16,20,30,.42); backdrop-filter: blur(2px); }
.spec--overlay-layer .ol-sheet { position: absolute; left: 0; right: 0; bottom: 0; background: #fff; border-radius: 16px 16px 0 0; padding: 10px 16px 16px; box-shadow: 0 -12px 30px rgba(0,0,0,.22); font-family: "Instrument Sans", sans-serif; }
.spec--overlay-layer .ol-grab { display: block; width: 36px; height: 4px; border-radius: 999px; background: #d3d7de; margin: 0 auto 12px; }
.spec--overlay-layer .ol-title { margin: 0 0 10px; font: 600 15px/1 "Instrument Sans", sans-serif; color: #16181d; }
.spec--overlay-layer .ol-row { margin: 0; padding: 10px 0; font-size: 13.5px; color: #2c3138; box-shadow: inset 0 -1px 0 #eef0f3; }`,
  prompt: "Design an overlay system: a modal for blocking interruptions with a scrim and focus trap, a sheet or popover with no scrim for non-blocking ones, a grab handle and internal scroll on sheets, closing paths on Escape, on the layer's own control and on the backdrop for modals, and focus returned to the opener on dismiss. One depth of stack, nothing opened beneath.",
  sources: []
},

{
  id: "form-validation",
  name: "Form and validation",
  era: "1990s–",
  origin: "The data-entry screen: getting a person through a set of fields with as little friction and as much clarity as possible.",
  blurb: "The most-used and most-neglected screen. Labels above fields that stay visible, validation on blur and submit rather than every keystroke, and errors that sit with their field, name the problem in a sentence and state the fix.",
  traits: [
    "Label above the field, always visible — a placeholder is not a label.",
    "Validate on blur and on submit, never on every keystroke of a field still being typed.",
    "The error sits with its field, in a sentence that names the problem and the fix.",
    "One message per field; the first failure scrolls into view and takes focus.",
    "Required vs optional stated once for the whole form, not starred on every field.",
    "Success is quiet — the field returns to rest, no celebration."
  ],
  avoid: [
    "Red-lining a field before the person has finished entering it.",
    "A summary at the top with no anchor to the offending field.",
    "Clearing entered values when a submit fails."
  ],
  html: `<div class="fv-form">
    <label class="fv-field bad"><span>Email</span><input value="ana@site" readonly></label>
    <p class="fv-err">Include an @ and a domain, like ana@site.com.</p>
    <label class="fv-field"><span>Name</span><input value="Ana Rivera" readonly></label>
  </div>`,
  css: `.spec--form-validation .fv-form { width: 100%; max-width: 300px; padding: 18px; border: 1px solid #e6e8ec; border-radius: 12px; background: #fff; font-family: "Instrument Sans", sans-serif; }
.spec--form-validation .fv-field { display: block; margin-bottom: 6px; }
.spec--form-validation .fv-field span { display: block; font: 600 11.5px/1 "Instrument Sans", sans-serif; color: #4b5159; margin-bottom: 6px; }
.spec--form-validation .fv-field input { width: 100%; padding: 10px 12px; font: 400 13.5px/1 "Instrument Sans", sans-serif; color: #16181d; border: 1px solid #cfd4dc; border-radius: 8px; background: #fff; }
.spec--form-validation .fv-field.bad input { border-color: #c62d2d; box-shadow: 0 0 0 3px rgba(198,45,45,.14); }
.spec--form-validation .fv-err { margin: 0 0 14px; font-size: 12px; line-height: 1.4; color: #c62d2d; }`,
  prompt: "Design a form: labels above fields and always visible, help text where it belongs, validation on blur and submit rather than per-keystroke, per-field error messages in a sentence naming the problem and the fix, the first failure focused and scrolled into view, required/optional stated once, and no value cleared on a failed submit.",
  sources: []
},

{
  id: "responsive-mobile-first",
  name: "Responsive / mobile-first",
  era: "2010–",
  origin: "The multi-device web: design the narrowest case first, then add as space allows.",
  blurb: "A way of working more than a look. Base styles are the phone, media queries only ever add, layout is fluid from <code>clamp()</code> and <code>minmax()</code>, targets are touch-sized, and a component reflows on its own width rather than the viewport's.",
  traits: [
    "Narrowest case first: base styles are the phone, media queries enhance and only use <code>min-width</code>.",
    "A single-column source order that reflows into multiple columns as width allows.",
    "Fluid values — <code>clamp()</code> type ramps and <code>minmax()</code> grids — instead of fixed pixel widths.",
    "Touch first: 44px targets, <code>touch-action: manipulation</code>, and 16px minimum inputs so iOS does not zoom.",
    "Content outranks breakpoints — a component responds to its own container, not the viewport.",
    "Tested between the breakpoints, not only at them."
  ],
  avoid: [
    "Desktop-down: starting wide and hiding pieces with <code>display: none</code>, which strands the phone with the leftovers.",
    "Device-named breakpoints (a specific phone) instead of content-driven ones.",
    "Fixed pixel containers that only look right at one width."
  ],
  html: `<div class="rm-wrap">
    <div class="rm-bar"></div>
    <div class="rm-grid"><span>1</span><span>2</span><span>3</span></div>
  </div>`,
  css: `.spec--responsive-mobile-first .rm-wrap { width: 100%; max-width: 320px; padding: 14px; background: #fff; border: 1px solid #e6e8ec; border-radius: 12px; font-family: "Instrument Sans", sans-serif; }
.spec--responsive-mobile-first .rm-bar { height: 34px; border-radius: 8px; background: #14161c; margin-bottom: 12px; }
.spec--responsive-mobile-first .rm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(72px, 1fr)); gap: 10px; }
.spec--responsive-mobile-first .rm-grid span { height: 64px; border-radius: 8px; background: #eef0f3; display: flex; align-items: center; justify-content: center; font: 600 13px/1 "Instrument Sans", sans-serif; color: #8a8f99; }`,
  prompt: "Work mobile-first: base styles target the narrowest width, all media queries use min-width and only add, one-column source order reflows into multiple columns, type and space use clamp() and grids use minmax(), targets are at least 44px with 16px inputs and touch-action manipulation, and components respond to their own container width. Never start wide and hide pieces with display:none.",
  sources: []
},

{
  id: "content-design",
  name: "Content design / UX writing",
  era: "2010s–",
  origin: "The product-content discipline: the interface is its words, so the words are designed first.",
  blurb: "A practice with no look of its own — its material is language. Every label, error, empty state and button is a sentence with an owner, written in plain words that name what the person controls, under one voice that shifts tone by state and never blames the reader.",
  traits: [
    "The interface is written before it is drawn: every label, error, empty state and button is a sentence with an owner.",
    "Plain language over system language — " + "\"Couldn't save your draft\"" + " beats " + "\"Error 409\"" + ".",
    "Labels name what the person controls, not how the system is built — " + "\"Notifications\"" + ", not " + "\"Alert config\"" + ".",
    "Errors state what happened, what it means and the next step, in that order, without blame.",
    "One voice, tone shifting by state: calm in success, direct in error, brief in urgency.",
    "No lorem and no placeholder strings; the longest and shortest plausible content is written and tested."
  ],
  avoid: [
    "Writing the copy last, as the final step before ship, when the layout has already fixed the words.",
    "Tone that jokes in an error or apologises without saying what to do.",
    "System words leaked into the interface (codes, table names, developer shorthand)."
  ],
  html: `<div class="cd-panel">
    <p class="cd-label">Card number</p>
    <p class="cd-input">4242 4242 4242 424</p>
    <p class="cd-msg">That card number is one digit short — it should be 16 digits.</p>
    <p class="cd-help">We only use this to take the payment. You can change it any time.</p>
    <span class="cd-cta">Save and finish later</span>
  </div>`,
  css: `.spec--content-design .cd-panel { width: 100%; max-width: 300px; padding: 18px; border: 1px solid #e6e8ec; border-radius: 12px; background: #fff; font-family: "Instrument Sans", sans-serif; }
.spec--content-design .cd-label { margin: 0; font: 600 11.5px/1 "Instrument Sans", sans-serif; color: #4b5159; }
.spec--content-design .cd-input { margin: 6px 0 0; padding: 10px 12px; border: 1px solid #c62d2d; border-radius: 8px; font-size: 13.5px; color: #16181d; letter-spacing: .04em; }
.spec--content-design .cd-msg { margin: 8px 0 0; font-size: 12.5px; line-height: 1.45; color: #c62d2d; }
.spec--content-design .cd-help { margin: 12px 0 0; font-size: 12.5px; line-height: 1.45; color: #6b7280; }
.spec--content-design .cd-cta { display: inline-block; margin-top: 14px; font: 600 13px/1 "Instrument Sans", sans-serif; color: #16181d; border-bottom: 1.5px solid #16181d; }`,
  prompt: "Write the interface before drawing it: every label, error, empty state and button is a sentence with an owner, in plain language, naming what the person controls. Errors state what happened, what it means and the next step, without blame. One voice with tone shifting by state. No lorem, no system words — codes, table names and developer shorthand stay out of the interface.",
  sources: []
},

{
  id: "research-driven",
  name: "Research-driven design",
  era: "1990s–",
  origin: "Usability engineering and design research: decisions that cite what people actually did.",
  blurb: "A practice whose material is evidence. Every decision points at a finding, a quote or a task result rather than a preference, each finding carries its source, and the smallest change that tests the assumption ships before the next round of observation.",
  traits: [
    "Decisions cite evidence — a finding, a quote, a task result or a metric — never " + "\"best practice\"" + " alone.",
    "Recruit for behaviour, not demographics: five to eight participants per round beats one large survey.",
    "Ask about the past and the task, never the future preference (" + "\"would you use\u2026\"" + ").",
    "Separate what people did from what they said; observed friction outranks stated preference.",
    "Every finding carries its source: participant count, task and the observation.",
    "Ship the smallest change that tests the assumption, then observe again."
  ],
  avoid: [
    "Leading questions and confirmation interviews that produce the answer the team already wanted.",
    "Treating one loud customer as a finding.",
    "Research that ends in a report nobody can act on — every finding needs an owner and a next step."
  ],
  html: `<div class="rd-card">
    <p class="rd-k">Finding 03</p>
    <p class="rd-q">&ldquo;I didn't know it had saved.&rdquo;</p>
    <p class="rd-meta">4 of 6 participants &middot; task 2 &middot; observed</p>
  </div>`,
  css: `.spec--research-driven .rd-card { width: 100%; max-width: 300px; padding: 18px; border-radius: 12px; background: #14161c; color: #e7e9ee; font-family: "Instrument Sans", sans-serif; }
.spec--research-driven .rd-k { margin: 0; font: 600 10.5px/1 "IBM Plex Mono", monospace; letter-spacing: .16em; text-transform: uppercase; color: #7f8798; }
.spec--research-driven .rd-q { margin: 12px 0 0; font-size: 17px; line-height: 1.35; font-style: italic; }
.spec--research-driven .rd-meta { margin: 12px 0 0; padding-top: 10px; border-top: 1px solid #2a2e38; font: 500 11.5px/1 "Instrument Sans", sans-serif; color: #9aa0ab; }`,
  prompt: "Work research-driven: every decision cites a finding, quote, task result or metric rather than a preference; recruit five to eight behaviourally; ask about past tasks not future preferences; treat observed friction as stronger than stated preference; label each finding with its participant count, task and observation; and ship the smallest change that tests the assumption before observing again.",
  sources: []
},

{
  id: "design-system",
  name: "Design system / atomic composition",
  era: "2013–",
  origin: "Atomic design and component-driven development: the interface assembled from levels, with the system as a governed product.",
  blurb: "A practice about composition and governance. Work is assembled from primitives into components into patterns, one component serves one purpose with variants as tokens, every part is named, the state matrix is complete, and drift is treated as a bug with an owner.",
  traits: [
    "Three composition levels — primitive, component (atom then molecule), and pattern — and nothing skips a level.",
    "One component per purpose, with variants expressed as tokens or props rather than near-duplicate components.",
    "Anatomy documented: every part named (container, label, icon, state layer) so it can be referenced.",
    "State matrix complete: default, hover, focus-visible, active, disabled, loading and error.",
    "Governance is part of the system: a contribution path, a versioning rule and a deprecation policy.",
    "The system is a product with consumers; usage is measured and drift is treated as a bug."
  ],
  avoid: [
    "A component library with no documented states or governance — that is a folder, not a system.",
    "Forking a component for one screen; that is how a system becomes a set of screenshots.",
    "Shipping components before the tokens they are built from."
  ],
  html: `<div class="ds-tree">
    <div class="ds-row p"><b>#1c1f23</b><span>primitive</span></div>
    <div class="ds-row t"><b>--surface-raised</b><span>semantic token</span></div>
    <div class="ds-row c"><span class="ds-chip">Button / primary</span><span>component</span></div>
  </div>`,
  css: `.spec--design-system .ds-tree { width: 100%; max-width: 300px; display: grid; gap: 8px; font-family: "Instrument Sans", sans-serif; }
.spec--design-system .ds-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 11px 13px; border-radius: 10px; background: #fff; border: 1px solid #e6e8ec; }
.spec--design-system .ds-row b { font: 600 12.5px/1 "IBM Plex Mono", monospace; color: #16181d; font-weight: 600; }
.spec--design-system .ds-row span { font-size: 11px; color: #8a8f99; }
.spec--design-system .ds-row.p { border-left: 3px solid #4f7cff; }
.spec--design-system .ds-row.t { border-left: 3px solid #b06a2c; }
.spec--design-system .ds-row.c { border-left: 3px solid #1f7a4d; }
.spec--design-system .ds-chip { padding: 5px 9px; border-radius: 6px; background: #16181d; color: #fff !important; font: 600 11.5px/1 "Instrument Sans", sans-serif; }`,
  prompt: "Run the interface as a design system: compose in three levels (primitive, component, pattern) with nothing skipping a level; one component per purpose with variants as tokens or props; documented anatomy with every part named; a complete state matrix (default, hover, focus-visible, active, disabled, loading, error); and governance — contribution path, versioning, deprecation — treating the system as a product whose drift is a bug.",
  sources: []
},

{
  id: "dark-patterns",
  name: "Dark patterns / deceptive design",
  era: "2010–",
  origin: "Growth-hacked consent and checkout flows: the anti-practice, documented so it is recognised and removed.",
  blurb: "A practice recorded as a warning. Each of these techniques raises a metric and takes value from the person: false urgency, confirmshaming, pre-selected consent, a roach-motel cancel, misdirection and forced action. It carries no look of its own — it is a set of moves to recognise and take out.",
  traits: [
    "False urgency: a countdown or " + "\"only 2 left\"" + " that resets and is not tied to real stock.",
    "Confirmshaming: the decline is worded to insult the choice (" + "\"No thanks, I hate saving\"" + ").",
    "Pre-selected consent: an opt-in already ticked, or a default that must be actively undone.",
    "Roach motel: trivial to subscribe, deliberately hard to cancel or delete.",
    "Misdirection: the desired action styled prominently, the escape route demoted to a faint link.",
    "Obstruction: a task interrupted by an unrelated upsell with no visible skip."
  ],
  avoid: [
    "Shipping any of these — the entry exists so they are recognised; the fix is to remove them, not to theme them.",
    "A/B testing a dark pattern for conversion: it works on the metric and fails the person.",
    "Calling a dark pattern " + "\"best practice\"" + " because a larger product ships it."
  ],
  html: `<div class="dp-modal">
    <p class="dp-t">Wait! Don't miss out</p>
    <p class="dp-s">Your 40% discount will be gone forever if you leave now.</p>
    <span class="dp-yes">Yes, keep my discount</span>
    <span class="dp-no">no thanks, I hate saving money</span>
    <label class="dp-check"><i></i>Email me daily</label>
  </div>`,
  css: `.spec--dark-patterns .dp-modal { width: 100%; max-width: 300px; padding: 20px; border-radius: 14px; background: #fff; border: 1px solid #e6e8ec; text-align: center; font-family: "Instrument Sans", sans-serif; }
.spec--dark-patterns .dp-t { margin: 0; font-size: 17px; font-weight: 700; color: #16181d; }
.spec--dark-patterns .dp-s { margin: 8px 0 16px; font-size: 12.5px; line-height: 1.5; color: #6b7280; }
.spec--dark-patterns .dp-yes { display: block; padding: 12px; border-radius: 9px; background: #1f7a4d; color: #fff; font: 600 13.5px/1 "Instrument Sans", sans-serif; }
.spec--dark-patterns .dp-no { display: block; margin-top: 10px; font: 400 10.5px/1.4 "Instrument Sans", sans-serif; color: #b3b7bf; text-decoration: underline; }
.spec--dark-patterns .dp-check { display: flex; align-items: center; gap: 7px; justify-content: center; margin-top: 14px; font-size: 11.5px; color: #8a8f99; }
.spec--dark-patterns .dp-check i { position: relative; width: 13px; height: 13px; border-radius: 3px; background: #1f7a4d; }
.spec--dark-patterns .dp-check i::after { content: ""; position: absolute; left: 4px; top: 1.5px; width: 4px; height: 7px; border: solid #fff; border-width: 0 1.5px 1.5px 0; transform: rotate(45deg); }`,
  prompt: "Recognise and remove dark patterns: false urgency (resetting countdowns, fake stock), confirmshaming (an insulting decline), pre-selected consent, roach-motel cancels, misdirection that demotes the escape route, and obstruction with no visible skip. Each raises a metric and takes value from the person — the correct action is to delete it, never to theme it or A/B test it.",
  sources: ["https://www.deceptive.design/", "https://en.wikipedia.org/wiki/Dark_pattern"]
},

{
  id: "localization-rtl",
  name: "Localization / RTL",
  era: "2000s–",
  origin: "The multilingual product: one layout serving scripts that read in different directions and different lengths.",
  blurb: "A practice about survival across scripts. Layout uses logical properties so it mirrors for free, direction-aware glyphs flip while media never does, type stacks cover the script, no words are baked into images, and nothing is truncated to fit an English-sized slot.",
  traits: [
    "Logical properties only — <code>margin-inline-start</code>, <code>padding-inline</code>, <code>inset-inline</code> — never <code>left</code> or <code>right</code>.",
    "Direction-aware glyphs: chevrons, arrows and progress mirror in RTL; logos, maps and media do not.",
    "<code>dir</code> on the root, <code>lang</code> per run, and a per-script font stack so CJK and Arabic shape correctly.",
    "No text baked into images and no fixed-width labels — German runs roughly 30% longer than English.",
    "Plural, gender and date/number formats via <code>Intl</code>, never string concatenation.",
    "Layouts that survive the mirror; a mirrored chevron on an unmirrored row is the classic tell."
  ],
  avoid: [
    "Centring everything to dodge the mirror problem; RTL is a mirror, not a centre.",
    "Truncating a translation to fit an English-sized slot — let the text size the control.",
    "Forcing a Latin webfont over a script it does not cover."
  ],
  html: `<div class="lz-pair">
    <div class="lz-row" dir="ltr"><span class="lz-ic">?</span><span>Help centre</span><span class="lz-chev">&rsaquo;</span></div>
    <div class="lz-row" dir="rtl"><span class="lz-ic">?</span><span>مركز المساعدة</span><span class="lz-chev">&lsaquo;</span></div>
  </div>`,
  css: `.spec--localization-rtl .lz-pair { width: 100%; max-width: 300px; display: grid; gap: 10px; font-family: "Instrument Sans", "Noto Sans Arabic", "Noto Sans", sans-serif; }
.spec--localization-rtl .lz-row { display: flex; align-items: center; gap: 10px; padding-inline: 14px 12px; padding-block: 12px; border: 1px solid #e6e8ec; border-radius: 10px; background: #fff; font-size: 13.5px; color: #16181d; }
.spec--localization-rtl .lz-ic { flex: none; width: 22px; height: 22px; border-radius: 50%; background: #eef0f3; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #6b7280; }
.spec--localization-rtl .lz-chev { margin-inline-start: auto; color: #b3b7bf; }`,
  prompt: "Localize with logical properties only (margin-inline-start, padding-inline, inset-inline) so the layout mirrors for free; mirror direction-aware glyphs but never logos or media; set dir on the root and lang per run with a per-script font stack; keep text out of images and out of fixed-width labels; format plurals, dates and numbers with Intl; and let translations size their own controls instead of truncating to English.",
  sources: []
},

{
  id: "performance-first",
  name: "Performance-first / perceived performance",
  era: "2010s–",
  origin: "The slow-network web: weight and time treated as design constraints, not engineering afterthoughts.",
  blurb: "A practice where speed is part of the design. A budget is declared up front, weight is a design decision, the critical path ships first, media reserves its space, and the wait — where there is one — is made legible rather than hidden behind a spinner.",
  traits: [
    "A budget declared up front (for example <code>&lt; 150KB JS</code>, LCP <code>&lt; 2.5s</code>) and treated as a constraint on the design.",
    "Perceived speed over raw speed: skeleton or optimistic states that make the wait legible.",
    "Weight is a design decision — fewer, subsetted webfonts; no hero video without a reason.",
    "Critical path first: above-the-fold HTML and CSS inlined, the rest deferred.",
    "Space reserved for media (<code>width</code>/<code>height</code> or <code>aspect-ratio</code>) so nothing shifts.",
    "Measured on a mid-range device on a slow connection, not a desktop on fibre."
  ],
  avoid: [
    "Adding a spinner instead of reducing the payload — the best perceived-performance fix is less to wait for.",
    "Deferring the thing the person came for; deferring the hero is worse than shipping it.",
    "Layout shift from late-arriving media, which reads as jank even when the bytes were fast."
  ],
  html: `<div class="pf-wrap">
    <div class="pf-paint">above the fold</div>
    <div class="pf-bars">
      <i style="width:34%"></i><i style="width:58%"></i><i style="width:22%"></i>
    </div>
  </div>`,
  css: `.spec--performance-first .pf-wrap { width: 100%; max-width: 300px; font-family: "Instrument Sans", sans-serif; }
.spec--performance-first .pf-paint { height: 78px; border-radius: 10px; border: 1px solid #e6e8ec; background: repeating-linear-gradient(135deg,#f2f4f7 0 8px,#e8ebf0 8px 16px); display: flex; align-items: center; justify-content: center; font: 600 12px/1 "Instrument Sans", sans-serif; color: #8a8f99; }
.spec--performance-first .pf-bars { display: grid; gap: 6px; margin-top: 12px; }
.spec--performance-first .pf-bars i { height: 8px; border-radius: 4px; background: #4f7cff; }`,
  prompt: "Design performance-first: declare a budget up front (JS weight, LCP) as a design constraint, prefer perceived speed with skeletons or optimistic states over hidden waits, treat font and media weight as design decisions, inline the critical path and defer the rest, reserve space for media to avoid shifts, and measure on a mid-range device on a slow connection. Reduce the payload before adding a spinner.",
  sources: []
},

{
  id: "error-resilience",
  name: "Error resilience / recovery",
  era: "2010s–",
  origin: "Resilient systems thinking: the error is a designed state, and the person's work is protected through it.",
  blurb: "A practice that treats failure as a first-class state. Every screen has an error design with type, tone and next step; the person's work is preserved; and the message says what happened, what it means and the one action that recovers.",
  traits: [
    "The error is a designed state, not a fallback: every screen has one, with type, tone and next step defined.",
    "Say what happened, what it means and one primary recovery action — in that order.",
    "Preserve the person's work: keep local state and never clear a form on failure.",
    "Two tiers: inline for a field, a page or section banner for a whole failure, a toast only for the transient.",
    "Separate the recoverable (retry) from the fatal (contact support, or work continues elsewhere).",
    "Log the error where engineers will see it, and never surface a raw code without a plain sentence."
  ],
  avoid: [
    "One generic " + "\"Something went wrong\"" + " with no path forward — that is a dead end, not an error state.",
    "Clearing input when a submit fails, which punishes the person for the system's fault.",
    "A toast for a failure that needs a decision; it disappears before it is read."
  ],
  html: `<div class="er-banner">
    <span class="er-ic">!</span>
    <div>
      <p class="er-t">Couldn't load your drafts</p>
      <p class="er-s">Your work is saved on this device.</p>
    </div>
    <span class="er-retry">Retry</span>
  </div>`,
  css: `.spec--error-resilience .er-banner { display: flex; align-items: flex-start; gap: 10px; width: 100%; max-width: 300px; padding: 13px 14px; border-radius: 10px; background: #fff4f2; border: 1px solid #f0cec6; font-family: "Instrument Sans", sans-serif; }
.spec--error-resilience .er-ic { flex: none; width: 20px; height: 20px; border-radius: 50%; background: #c62d2d; color: #fff; display: flex; align-items: center; justify-content: center; font: 700 12px/1 "Instrument Sans", sans-serif; }
.spec--error-resilience .er-t { margin: 0; font: 600 13px/1.3 "Instrument Sans", sans-serif; color: #7a1f1f; }
.spec--error-resilience .er-s { margin: 3px 0 0; font-size: 12px; line-height: 1.4; color: #9a5a52; }
.spec--error-resilience .er-retry { flex: none; align-self: center; margin-inline-start: auto; font: 600 12px/1 "Instrument Sans", sans-serif; color: #7a1f1f; text-decoration: underline; }`,
  prompt: "Design for error resilience: treat every screen's error as a designed state with defined type, tone and next step; state what happened, what it means and one primary recovery action in that order; preserve the person's work and never clear a form on failure; use inline errors for fields and a banner for whole failures with a toast only for the transient; separate recoverable from fatal; and log errors while never surfacing a raw code without a plain sentence.",
  sources: []
},

{
  id: "attention-first",
  name: "Attention-first",
  era: "2016–",
  origin: "Short-form video feeds: the first frame decides whether the second is ever seen.",
  blurb: "A policy written for the thumb. The hook is inside the first frame, media runs full-bleed and vertical, sound is on with an obvious way out, and every screen is built to end in one gesture.",
  traits: [
    "The hook inside the first frame: the payoff is visible before a word is read.",
    "Full-bleed vertical media as the ground; the interface is a scrim, one caption and a thumb strip.",
    "Sound on by default with a visible mute, and captions burned in for the muted case.",
    "One gesture per screen — swipe, tap, hold. Nothing on the path opens a nested menu.",
    "Progress and position always visible, so the cost of one more is known before it is paid.",
    "Autoplay budget: preload the first frame only, and stop playback the moment the tile leaves the viewport."
  ],
  avoid: [
    "A text-first intro on a feed surface; the frame is gone before the sentence ends.",
    "Autoplay with sound and no mute control — a hostile default, and the reason browsers block it."
  ],
  html: `<div class="at-tile">
    <span class="at-media"></span>
    <span class="at-mute">Sound on</span>
    <p class="at-hook">Wait for the last one</p>
    <span class="at-bar"><i></i></span>
  </div>`,
  css: `.spec--attention-first .at-tile {
  position: relative; width: 168px; aspect-ratio: 9/16; border-radius: 14px; overflow: hidden;
  background: radial-gradient(circle at 62% 28%, #ff6a3d, #b31d5a 55%, #1b0b2b);
  font-family: "Instrument Sans", sans-serif;
}
.spec--attention-first .at-media { position: absolute; inset: 0; background: linear-gradient(200deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.74)); }
.spec--attention-first .at-mute {
  position: absolute; top: 10px; right: 10px; padding: 5px 9px; border-radius: 999px;
  background: rgba(0,0,0,.55); color: #fff; font: 600 10px/1 "Instrument Sans", sans-serif;
}
.spec--attention-first .at-hook {
  position: absolute; left: 12px; right: 12px; bottom: 22px; margin: 0;
  font: 700 16px/1.2 "Instrument Sans", sans-serif; color: #fff; text-shadow: 0 1px 12px rgba(0,0,0,.5);
}
.spec--attention-first .at-bar { position: absolute; left: 12px; right: 12px; bottom: 10px; height: 3px; border-radius: 2px; background: rgba(255,255,255,.28); }
.spec--attention-first .at-bar i { display: block; width: 42%; height: 100%; border-radius: 2px; background: #fff; }`,
  prompt: "Design attention-first for a feed: put the hook inside the first frame so the payoff lands before any text, run the media full-bleed and vertical with the interface reduced to a scrim, one caption and a thumb strip, default the sound on with a visible mute and burn in captions for the muted case, keep one gesture per screen with no nested menus on the path, show progress and position at all times, and preload only the first frame while stopping playback when the tile leaves the viewport.",
  sources: []
},

{
  id: "brand-expression-first",
  name: "Brand-expression-first",
  era: "2015–",
  origin: "Brand-led product teams: the identity is decided first and the design system is fitted to it.",
  blurb: "A policy that hands the identity the wheel. One palette, one display face, one accent and one motion signature are locked before the first screen is drawn, and the product's own tokens are the defaults the brand may overrule.",
  traits: [
    "A locked brand set — palette, display face, accent hue, corner radius — that the system tokens defer to.",
    "One loud accent per screen, spent on the single action the brand wants remembered.",
    "A motion signature (an ease curve, a wipe, a type reveal) applied everywhere the brand speaks.",
    "Art direction authored with the layout: the brand's own imagery rules, not a stock default.",
    "Display type at brand scale, with the working interface set in the brand's secondary face.",
    "Consistency measured across surfaces — app, site, email — rather than inside one screen."
  ],
  avoid: [
    "A brand accent at full chroma behind body text: it fails contrast and reads as an ad.",
    "Every screen shouting at once. The identity is the ground; the accent is the event."
  ],
  html: `<div class="bx-card">
    <span class="bx-mark">ACME</span>
    <p class="bx-h">MOVE<br />FASTER</p>
    <p class="bx-s">One palette, one display face, one accent — locked before the first screen.</p>
    <span class="bx-cta">Start free</span>
  </div>`,
  css: `.spec--brand-expression-first .bx-card {
  width: 100%; max-width: 300px; padding: 20px; border-radius: 4px;
  background: linear-gradient(150deg, #ff4d2e, #ff8a3d 62%, #ffc043);
  font-family: "Instrument Sans", sans-serif; color: #1b0d05;
}
.spec--brand-expression-first .bx-mark { display: block; font: 800 11px/1 "Instrument Sans", sans-serif; letter-spacing: .22em; }
.spec--brand-expression-first .bx-h { margin: 18px 0 0; font: 800 38px/.92 "Instrument Sans", sans-serif; letter-spacing: -.02em; }
.spec--brand-expression-first .bx-s { margin: 10px 0 0; max-width: 24ch; font-size: 12px; line-height: 1.5; color: #4a2110; }
.spec--brand-expression-first .bx-cta {
  display: inline-block; margin-top: 18px; padding: 11px 18px; border-radius: 4px;
  background: #1b0d05; color: #ffe9d6; font: 700 13px/1 "Instrument Sans", sans-serif;
}`,
  prompt: "Design brand-expression-first: lock the brand palette, display face, accent hue and corner radius before any screen, let the product's design tokens defer to them, spend one loud accent per screen on the single action the brand wants remembered, define a motion signature (ease curve, wipe or type reveal) used everywhere the brand speaks, author the art direction as part of the layout instead of taking imagery defaults, set display type at brand scale with the working UI in the secondary face, and measure consistency across app, site and email rather than inside one screen. Keep the accent off body text, where it breaks contrast.",
  sources: []
},

{
  id: "cinematic-media-first",
  name: "Cinematic / media-first",
  era: "2018–",
  origin: "Film-led brand sites and product keynotes: the footage carries the page and the interface steps back.",
  blurb: "The page is shot rather than laid out. Full-bleed footage holds the frame, the interface is cut to a caption and one action, and the pacing — hold the shot, cut on the beat — is itself a design decision.",
  traits: [
    "Full-bleed video or a rich still sequence as the ground, at 21:9 or taller, letterboxed where it helps.",
    "Interface cut to a caption, a timestamp and one action; everything else moves to the end of the frame.",
    "A poster frame and a reserved aspect ratio, so the page does not shift when the media lands.",
    "Muted autoplay with an obvious sound toggle, and captions burned in or one press away.",
    "A held shot long enough to read and cuts aligned to a beat rather than to scroll.",
    "A static hero as the honest fallback under reduced motion or on a slow connection."
  ],
  avoid: [
    "A 30MB hero film: cinematic means directed, not heavy.",
    "Caption text over the busiest part of the frame — the ground has to hold the words."
  ],
  html: `<div class="cm-frame">
    <span class="cm-media"></span>
    <span class="cm-bars"></span>
    <p class="cm-cap">Shot 04 · 02:14 — the first descent</p>
    <span class="cm-ctl">Sound on</span>
  </div>`,
  css: `.spec--cinematic-media-first .cm-frame {
  position: relative; width: 100%; max-width: 320px; aspect-ratio: 21/9; border-radius: 6px; overflow: hidden;
  background: linear-gradient(118deg, #10131a, #2a3346 46%, #6a5a4a);
  font-family: "Instrument Sans", sans-serif;
}
.spec--cinematic-media-first .cm-media { position: absolute; inset: 0; background: radial-gradient(120% 90% at 70% 18%, rgba(255,196,120,.42), rgba(10,12,18,0) 62%); }
.spec--cinematic-media-first .cm-bars { position: absolute; inset: 0; border-top: 8px solid #0a0c12; border-bottom: 8px solid #0a0c12; }
.spec--cinematic-media-first .cm-cap {
  position: absolute; left: 14px; bottom: 16px; margin: 0;
  font: 600 11px/1.4 "Instrument Sans", sans-serif; letter-spacing: .06em; color: #f2f4f8;
}
.spec--cinematic-media-first .cm-ctl {
  position: absolute; right: 12px; bottom: 14px; padding: 5px 10px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,.42); color: #f2f4f8; font: 600 10px/1 "Instrument Sans", sans-serif;
}`,
  prompt: "Design a cinematic, media-first page: hold the frame with full-bleed video or a rich still sequence at 21:9 or taller and letterbox it where that helps, cut the interface down to a caption, a timestamp and one action, ship a poster frame with a reserved aspect ratio so nothing shifts when the media lands, default to muted autoplay with an obvious sound toggle and captions, hold each shot long enough to read and cut on a beat rather than on scroll, and fall back to a static hero under reduced motion or on a slow connection. Keep the payload directed rather than heavy, and keep text off the busiest part of the frame.",
  sources: []
},

{
  id: "conversion-optimised",
  name: "Conversion-optimised",
  era: "2000s–",
  origin: "Direct-response and growth practice: the page is a funnel and everything on it is measured against one action.",
  blurb: "A policy that designs each screen around a single measurable action: one primary control, the value stated in the person's own terms, proof placed beside the ask, and every competing link demoted.",
  traits: [
    "One primary action per screen, phrased as an outcome; secondary routes demoted to plain text links.",
    "The value proposition above the fold, in the person's words, at 30px or larger, with the offer in the same view.",
    "Proof at the point of decision — a count, a rating or a logo row sitting directly beside the button.",
    "Urgency that is true: a real deadline or a real count. Invented scarcity is deception, not conversion.",
    "Friction removed from the critical path: no account wall, no step that is not the action itself.",
    "Variants measured against the one metric, and the losing version deleted rather than kept for taste."
  ],
  avoid: [
    "A second equally loud call to action: two primaries halve both.",
    "Confirmshaming and countdowns that reset on reload — those are dark patterns wearing a growth label."
  ],
  html: `<div class="cx-panel">
    <p class="cx-flag">12 seats left at this price</p>
    <p class="cx-h">Ship your site this week</p>
    <span class="cx-proof">4.8 from 4,812 builders</span>
    <span class="cx-cta">Start for $9/mo</span>
    <p class="cx-alt">No card required · Cancel in one click</p>
  </div>`,
  css: `.spec--conversion-optimised .cx-panel {
  width: 100%; max-width: 300px; padding: 20px; border: 2px solid #14171c; border-radius: 8px;
  background: #fff; text-align: center; font-family: "Instrument Sans", sans-serif;
}
.spec--conversion-optimised .cx-flag {
  margin: 0 0 12px; font: 700 11px/1 "Instrument Sans", sans-serif;
  letter-spacing: .08em; text-transform: uppercase; color: #b3231a;
}
.spec--conversion-optimised .cx-h { margin: 0; font: 700 24px/1.15 "Instrument Sans", sans-serif; color: #14171c; }
.spec--conversion-optimised .cx-proof { display: block; margin-top: 8px; font-size: 12px; color: #4b525c; }
.spec--conversion-optimised .cx-cta {
  display: grid; place-items: center; margin-top: 16px; min-height: 48px; border-radius: 8px;
  background: #d53a1f; color: #fff; font: 700 15px/1 "Instrument Sans", sans-serif;
}
.spec--conversion-optimised .cx-alt { margin: 10px 0 0; font-size: 11px; color: #6b7280; }`,
  prompt: "Design a conversion-optimised screen: one primary action phrased as an outcome with every competing route demoted to plain text, the value proposition above the fold in the person's own words at 30px or larger with the offer in the same view, proof — a count, rating or logo row — sitting directly beside the button, urgency that is real rather than invented, no account wall or off-path step on the critical path, and variants measured against the single metric with the loser deleted. Keep the honesty line: confirmshaming and resetting countdowns are dark patterns, not growth.",
  sources: []
},

{
  id: "elevation-hierarchy",
  name: "Elevation as hierarchy",
  era: "2014–",
  origin: "Material Design's elevation scale, adopted as a general policy: depth states rank.",
  blurb: "Depth is the hierarchy signal. A small fixed set of elevations is defined once, each step belongs to a role, and a shadow that is not on the scale is a bug rather than a flourish.",
  traits: [
    "A fixed elevation scale — four or five steps, declared once as tokens (<code>0 / 1 / 2 / 6 / 12dp</code>).",
    "One elevation per role: page 0, card 1, menu 2, modal 6, toast 12 — stated in the token names.",
    "Shadow paired with a single light source, so every surface on the page agrees on where the light is.",
    "Nothing raised for looks: if it carries a shadow it ranks above something specific.",
    "Interaction moves one step at most — hover lifts, press settles, release returns.",
    "Depth never the only signal: the role is also stated in the markup and the label, for the person who cannot see the shadow."
  ],
  avoid: [
    "Decorative shadows on a flat plane, which spend the signal and leave the ranking reading as noise.",
    "A heavy border and elevation on the same element — pick one hierarchy signal."
  ],
  html: `<div class="el-stack">
    <span class="el-layer l0">Page · 0</span>
    <span class="el-layer l1">Card · 1</span>
    <span class="el-layer l2">Menu · 2</span>
    <span class="el-layer l3">Modal · 6</span>
  </div>`,
  css: `.spec--elevation-hierarchy .el-stack { position: relative; width: 100%; max-width: 300px; height: 190px; font-family: "Instrument Sans", sans-serif; }
.spec--elevation-hierarchy .el-layer {
  position: absolute; display: grid; align-items: start; padding: 7px 12px 0; border-radius: 8px;
  font: 600 11px/1 "Instrument Sans", sans-serif;
}
.spec--elevation-hierarchy .l0 { left: 0; top: 22px; width: 240px; height: 124px; background: #eef0f4; color: #6b7280; }
.spec--elevation-hierarchy .l1 { left: 14px; top: 44px; width: 200px; height: 84px; background: #fff; color: #14171c; box-shadow: 0 1px 2px rgba(16,24,40,.12), 0 1px 3px rgba(16,24,40,.08); }
.spec--elevation-hierarchy .l2 { left: 28px; top: 62px; width: 168px; height: 40px; background: #fff; color: #14171c; box-shadow: 0 2px 6px rgba(16,24,40,.16), 0 8px 16px rgba(16,24,40,.10); }
.spec--elevation-hierarchy .l3 { left: 42px; top: 112px; width: 168px; height: 46px; background: #fff; color: #14171c; box-shadow: 0 12px 28px rgba(16,24,40,.24), 0 4px 8px rgba(16,24,40,.12); }`,
  prompt: "Design hierarchy through elevation: declare a fixed scale of four or five steps as tokens (0/1/2/6/12dp), bind one elevation to each role — page, card, menu, modal, toast — with the token names saying which, keep a single light source so all shadows agree, never raise anything without a rank to explain it, lift at most one step on interaction, and state the role in the markup and the label as well so depth is not the only signal.",
  sources: ["https://m3.material.io/styles/elevation/overview"]
},

{
  id: "immersive-3d-first",
  name: "Immersive / 3D-first",
  era: "2019–",
  origin: "WebGL configurators and studio award sites: the rendered scene is the product surface.",
  blurb: "The primary surface is a rendered scene and the interface is an overlay on it. Everything the person has to decide is still an ordinary control, and a downgraded path exists for the hardware that cannot hold the frame rate.",
  traits: [
    "One lead scene; the interface is an overlay layer with its own legible ground, never painted into the render.",
    "A frame budget stated up front (16ms) with device pixel ratio capped and geometry budgeted per device.",
    "Loading staged: a poster, then the first render, then detail — never a blank canvas.",
    "Controls stay ordinary: sliders, presets and keyboard equivalents for rotation, rather than drag-only.",
    "A declared fallback — poster still or static render — under reduced motion, low-power mode or a lost context.",
    "Camera motion under the same rules as any motion: nothing involuntary, nothing that triggers vestibular discomfort."
  ],
  avoid: [
    "A scene that takes the whole screen before anything is readable.",
    "Drag-only interaction with no keyboard or preset equivalent, which locks out the people who need it."
  ],
  html: `<div class="im-stage">
    <span class="im-cube"><i></i><i></i><i></i></span>
    <div class="im-hud">
      <span class="im-tag">Scene · 16ms budget</span>
      <span class="im-tag">Presets</span>
    </div>
  </div>`,
  css: `.spec--immersive-3d-first .im-stage {
  position: relative; width: 100%; max-width: 300px; height: 180px; border-radius: 12px; overflow: hidden;
  background: radial-gradient(circle at 50% 30%, #1d2a44, #0a0d15 72%); font-family: "Instrument Sans", sans-serif;
}
.spec--immersive-3d-first .im-cube {
  position: absolute; left: 50%; top: 44%; width: 74px; height: 74px; margin: -37px 0 0 -37px;
  transform-style: preserve-3d; transform: rotateX(-22deg) rotateY(34deg);
}
.spec--immersive-3d-first .im-cube i {
  position: absolute; inset: 0; border: 1px solid rgba(150,205,255,.5);
  background: linear-gradient(140deg, rgba(90,160,240,.45), rgba(40,80,150,.25));
}
.spec--immersive-3d-first .im-cube i:nth-child(1) { transform: translateZ(37px); }
.spec--immersive-3d-first .im-cube i:nth-child(2) { transform: rotateY(90deg) translateZ(37px); }
.spec--immersive-3d-first .im-cube i:nth-child(3) { transform: rotateX(90deg) translateZ(37px); background: linear-gradient(140deg, rgba(190,120,240,.4), rgba(70,40,120,.25)); }
.spec--immersive-3d-first .im-hud { position: absolute; left: 10px; right: 10px; bottom: 10px; display: flex; gap: 6px; }
.spec--immersive-3d-first .im-tag {
  padding: 6px 10px; border-radius: 8px; background: rgba(8,10,16,.74);
  border: 1px solid rgba(150,205,255,.25); color: #cfe3ff; font: 600 10px/1 "Instrument Sans", sans-serif;
}`,
  prompt: "Design a 3D-first surface: one lead scene with the interface as an overlay that carries its own legible ground rather than being painted into the render, a stated 16ms frame budget with capped pixel ratio and per-device geometry budgets, staged loading (poster, first render, then detail) so there is never a blank canvas, ordinary controls — sliders, presets and keyboard equivalents for rotation, not drag-only, a declared fallback still for reduced motion, low-power mode or a lost WebGL context, and camera motion that is never involuntary.",
  sources: ["https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"]
},

{
  id: "joy-first",
  name: "Joy-first",
  era: "2014–",
  origin: "Consumer products that treat delight as a requirement rather than a garnish.",
  blurb: "A policy that funds delight the way it funds performance: a written personality, illustration as a real material, celebration for genuine progress, and copy written to be read rather than to be safe.",
  traits: [
    "A personality written down: what the product jokes about, what it never jokes about, and the words it uses.",
    "Illustration or a mascot as a first-class material, drawn for the product rather than bought as a spot.",
    "A celebration state for real progress — a motion, a sound, a drawn reward — with reduced motion taken to the same end state.",
    "Empty and error states written in the same voice, since those are the screens people read most closely.",
    "Copy at a plain reading level, with exclamation marks earned rather than sprayed.",
    "A recorded delight budget: how much of a screen celebration may occupy, and where it is not allowed."
  ],
  avoid: [
    "Confetti on every action: a reward that fires for nothing stops meaning anything.",
    "Jokes in a failure path, or a mascot on top of somebody's money."
  ],
  html: `<div class="jf-card">
    <span class="jf-blob"><i></i><i></i></span>
    <p class="jf-h">7 day streak</p>
    <p class="jf-s">Your longest yet — one more day keeps it alive.</p>
    <span class="jf-cta">Keep going</span>
  </div>`,
  css: `.spec--joy-first .jf-card {
  width: 100%; max-width: 280px; padding: 22px 20px; border-radius: 18px; text-align: center;
  background: radial-gradient(circle at 18% 10%, #fff2c9, #ffe9f2 58%, #ece9ff);
  border: 2px solid #2b2240; box-shadow: 6px 6px 0 #2b2240; font-family: "Instrument Sans", sans-serif;
}
.spec--joy-first .jf-blob {
  position: relative; display: inline-block; width: 62px; height: 62px;
  border-radius: 46% 54% 52% 48%; background: linear-gradient(160deg, #7bd88f, #34a06a);
}
.spec--joy-first .jf-blob i { position: absolute; top: 22px; width: 8px; height: 8px; border-radius: 50%; background: #14301f; }
.spec--joy-first .jf-blob i:first-child { left: 17px; }
.spec--joy-first .jf-blob i:last-child { right: 17px; }
.spec--joy-first .jf-h { margin: 14px 0 0; font: 800 22px/1.1 "Instrument Sans", sans-serif; color: #2b2240; }
.spec--joy-first .jf-s { margin: 6px 0 0; font-size: 12px; line-height: 1.5; color: #5a5470; }
.spec--joy-first .jf-cta {
  display: grid; place-items: center; margin-top: 14px; min-height: 44px; border-radius: 999px;
  background: #5b43d6; color: #fff; font: 700 14px/1 "Instrument Sans", sans-serif; box-shadow: 0 4px 0 #3b2a99;
}`,
  prompt: "Design joy-first: write the product's personality down — what it jokes about, what it never jokes about, and the words it uses — treat illustration or a mascot as a first-class material drawn for the product, define a celebration state for genuine progress with a reduced-motion path to the same end state, write empty and error states in the same voice, keep copy at a plain reading level with exclamation marks earned, and cap how much of a screen a celebration may occupy. Celebrate real achievement only, and never joke in a failure path.",
  sources: []
},

{
  id: "scroll-narrative",
  name: "Scroll-driven narrative",
  era: "2013–",
  origin: "Newspaper feature pages and agency studios: scroll as the transport through one continuous story.",
  blurb: "The page is one timeline. Scroll position drives the scene — panels pin, chapters cross-fade, the rail says where you are — and the narrative still reads end to end when the motion never runs.",
  traits: [
    "Scroll position is the timeline: sticky scenes, pinned panels and scrubbed transforms read from it directly.",
    "One idea per chapter, with the chapter's media never competing with the next chapter's.",
    "A persistent progress rail or chapter index, so the length of the story is visible before it starts.",
    "Scroll-linked motion done with <code>position: sticky</code> and a scroll-driven timeline, never a hijacked scroll.",
    "Every chapter readable with motion off: a pinned scene degrades to a plain stacked panel.",
    "Sections reachable by keyboard and by deep link; the wheel stays the browser's."
  ],
  avoid: [
    "Hijacking the wheel to take away scroll speed — the fastest way to lose the reader.",
    "A payoff that exists only while animating; the text has to stand on its own."
  ],
  html: `<div class="sn-page">
    <span class="sn-rail"><i></i></span>
    <div class="sn-scene">
      <p class="sn-ch">03 / 06</p>
      <p class="sn-h">The route turns west here</p>
      <p class="sn-s">Pinned scene: the chapter changes with scroll position, and reads as a plain panel without it.</p>
    </div>
  </div>`,
  css: `.spec--scroll-narrative .sn-page { position: relative; width: 100%; max-width: 300px; height: 190px; padding-left: 22px; font-family: "Instrument Sans", sans-serif; }
.spec--scroll-narrative .sn-rail { position: absolute; left: 5px; top: 0; bottom: 0; width: 2px; border-radius: 2px; background: #d5d9e0; }
.spec--scroll-narrative .sn-rail i { position: absolute; top: 44px; left: -3px; width: 8px; height: 8px; border-radius: 50%; background: #1f4fd8; }
.spec--scroll-narrative .sn-scene {
  height: 100%; padding: 18px; border-radius: 12px; border: 1px solid #d5d9e0;
  background: linear-gradient(180deg, #e8eefc, #f7f3ea); display: flex; flex-direction: column; justify-content: flex-end;
}
.spec--scroll-narrative .sn-ch { margin: 0; font: 700 11px/1 "Instrument Sans", sans-serif; letter-spacing: .12em; color: #6b7280; }
.spec--scroll-narrative .sn-h { margin: 10px 0 0; font: 700 20px/1.2 "Instrument Sans", sans-serif; color: #14171c; }
.spec--scroll-narrative .sn-s { margin: 6px 0 0; font-size: 12px; line-height: 1.5; color: #4b525c; }`,
  prompt: "Design a scroll-driven narrative: let scroll position be the timeline through sticky scenes, pinned panels and scrubbed transforms read directly from it, keep one idea per chapter, show a persistent progress rail or chapter index so the length is known, implement the scroll link with position: sticky and a scroll-driven timeline rather than hijacking the wheel, degrade each pinned scene to a plain stacked panel when motion is off, and keep every section keyboard-reachable and deep-linkable.",
  sources: ["https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations"]
},

{
  id: "sound-haptics",
  name: "Sound and haptic feedback",
  era: "2015–",
  origin: "Wearables and console interfaces: state carried on the channel that need not be looked at.",
  blurb: "Every action answers in a second channel. Confirmation, error and progress each have one defined sound and one defined haptic pattern, the pair stays short, mute is respected, and no meaning lives in the extra channel alone.",
  traits: [
    "One sound and one haptic pattern per state — success, error, progress — used the same way everywhere.",
    "Under 150ms and never looped; anything longer is noise, and noise gets muted.",
    "Haptics respect the system setting and are never the only signal: the screen states it too.",
    "Sound off by default on the web, opt-in, remembered, and one obvious toggle.",
    "Sonified progress carries its change in pitch or rhythm while the numbers stay tabular on screen.",
    "The sound design is specified as values — frequency, duration, amplitude — rather than as taste."
  ],
  avoid: [
    "A chime on every tap, which trains people to mute the whole app.",
    "Audio-only or haptic-only confirmation, which excludes anyone with the phone face down in a meeting."
  ],
  html: `<div class="sh-row">
    <span class="sh-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <div class="sh-meta">
      <p class="sh-t">Confirm · 90ms · 660Hz</p>
      <p class="sh-s">Screen states it too; the haptic never carries it alone.</p>
    </div>
  </div>`,
  css: `.spec--sound-haptics .sh-row {
  display: flex; align-items: center; gap: 14px; width: 100%; max-width: 320px; padding: 16px;
  border-radius: 12px; background: #101319; border: 1px solid #242a35; font-family: "Instrument Sans", sans-serif;
}
.spec--sound-haptics .sh-wave { display: flex; align-items: center; gap: 3px; height: 44px; }
.spec--sound-haptics .sh-wave i { width: 3px; border-radius: 2px; background: #6cd3a0; }
.spec--sound-haptics .sh-wave i:nth-child(1) { height: 10px; }
.spec--sound-haptics .sh-wave i:nth-child(2) { height: 22px; }
.spec--sound-haptics .sh-wave i:nth-child(3) { height: 36px; }
.spec--sound-haptics .sh-wave i:nth-child(4) { height: 44px; }
.spec--sound-haptics .sh-wave i:nth-child(5) { height: 26px; }
.spec--sound-haptics .sh-wave i:nth-child(6) { height: 15px; }
.spec--sound-haptics .sh-wave i:nth-child(7) { height: 7px; }
.spec--sound-haptics .sh-t { margin: 0; font: 600 12px/1.3 "Instrument Sans", sans-serif; color: #dbe3ef; }
.spec--sound-haptics .sh-s { margin: 4px 0 0; font-size: 11px; line-height: 1.45; color: #8b95a6; }`,
  prompt: "Design sound and haptics as a state channel: define exactly one sound and one haptic pattern for success, error and progress and use each the same way everywhere, keep every cue under 150ms and never loop it, respect the system haptic setting and never let the extra channel carry meaning alone, keep sound opt-in on the web with one remembered toggle, sonify progress through pitch or rhythm while the on-screen numbers stay tabular, and specify the cues as values (frequency, duration, amplitude) rather than as taste.",
  sources: ["https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API"]
},

{
  id: "spatial-interaction",
  name: "Spatial interaction",
  era: "2022–",
  origin: "Headset and spatial-computing platforms: input by gaze and hands, output placed in the room.",
  blurb: "Interaction leaves the flat panel. The person looks and reaches, the interface is placed in space, targets carry a minimum angular size, dwell and pinch both count as input, and no panel sits in the field of view without a way out of it.",
  traits: [
    "Targets sized in degrees rather than pixels, with a stated minimum angular size at the intended distance.",
    "Dwell and pinch are equivalent inputs: anything a reach can do, a look-and-hold can do as well.",
    "Panels anchored to a place rather than to the head; nothing follows the gaze unless it must.",
    "Comfort rules written down: no forced head turn, nothing nearer than the near limit, no rapid vergence swings.",
    "A visible exit from every panel, plus one gesture that returns to the room.",
    "Content reflows into the space available instead of assuming a fixed screen."
  ],
  avoid: [
    "A desktop layout placed in the air at desktop text sizes.",
    "Depth used as decoration: in space, a wrong distance is a physical discomfort rather than a style."
  ],
  html: `<div class="sp-room">
    <span class="sp-plane p1">Library</span>
    <span class="sp-plane p2">Now playing</span>
    <span class="sp-plane p3">Timer 12:40</span>
  </div>`,
  css: `.spec--spatial-interaction .sp-room {
  position: relative; width: 100%; max-width: 300px; height: 180px; border-radius: 12px; overflow: hidden;
  background: radial-gradient(circle at 62% 34%, #2c3346, #10131b 72%); font-family: "Instrument Sans", sans-serif;
}
.spec--spatial-interaction .sp-plane {
  position: absolute; padding: 9px 12px; border-radius: 10px; backdrop-filter: blur(6px);
  background: rgba(240,244,252,.12); border: 1px solid rgba(240,244,252,.36);
  color: #eef2f9; font: 600 11px/1 "Instrument Sans", sans-serif;
}
.spec--spatial-interaction .p1 { left: 16px; top: 26px; }
.spec--spatial-interaction .p2 { left: 80px; top: 88px; border-color: #8fd0ff; box-shadow: 0 0 0 8px rgba(143,208,255,.14); }
.spec--spatial-interaction .p3 { right: 18px; top: 44px; opacity: .78; }
.spec--spatial-interaction .p1, .spec--spatial-interaction .p3 { color: #c6cede; }`,
  prompt: "Design for spatial interaction: size targets in degrees with a stated minimum at the intended distance, treat dwell and pinch as equivalent inputs so anything a reach can do a look-and-hold can do too, anchor panels to a place instead of the head, write down the comfort rules (no forced head turn, nothing nearer than the near limit, no rapid vergence swings), give every panel a visible exit plus one gesture back to the room, and reflow content into the space available rather than assuming a fixed screen.",
  sources: ["https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API"]
}

);
