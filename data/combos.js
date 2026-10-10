/* Combos: three entries that work together — one style, one pattern, one
   practice — a live sample UI built from the three at once, and one line saying
   why the three hold up as a set.

   The sample is drawn the same way a specimen is: real markup and real CSS
   values, every selector scoped under `.spec--combo-<id>` so nothing leaks into
   another sample or into the entries. The three names each open their own
   entry, so the sample never has to explain what its members are; the line only
   carries the reason the three belong together.

   A combo is not a category: it claims nothing about the rest of the catalog,
   and the atlas and the matrix remain the only classification. Every id below
   must exist in the catalog and carry the kind its slot names, which is what
   tools/verify.js checks (nothing is drawn for a combo whose members do not
   resolve). */
window.COMBOS = [

  {
    id: "swiss-landing",
    style: "swiss",
    pattern: "hero-landing",
    practice: "content-design",
    why: "A landing page with the grid doing the ornament and the copy doing the selling; nothing else is needed.",
    html: `<div class="sw-hero">
      <p class="sw-rule"></p>
      <h3 class="sw-h">Schrift als<br />Raster</h3>
      <p class="sw-lede">One face, one scale, a measure of 42 characters. The grid is the layout.</p>
      <span class="sw-cta">Read the specimen</span>
    </div>`,
    css: `.spec--combo-swiss-landing .sw-hero { width: 100%; max-width: 290px; padding: 20px; background: var(--panel); border: 1px solid var(--hair); border-radius: 10px; font-family: "Instrument Sans", sans-serif; color: var(--ink); }
.spec--combo-swiss-landing .sw-rule { height: 6px; margin: 0 0 16px; background: var(--ink); }
.spec--combo-swiss-landing .sw-h { margin: 0; font: 700 34px/.95 "Instrument Sans", sans-serif; letter-spacing: -.03em; }
.spec--combo-swiss-landing .sw-lede { margin: 12px 0 0; max-width: 32ch; font-size: 13px; line-height: 1.5; color: var(--ink-2); }
.spec--combo-swiss-landing .sw-cta { display: inline-block; margin-top: 16px; padding-top: 6px; border-top: 2px solid var(--ink); font: 600 13px/1.6 "Instrument Sans", sans-serif; }`
  },

  {
    id: "brutal-states",
    style: "neo-brutalism",
    pattern: "card-ui",
    practice: "error-resilience",
    why: "Hard borders and sticker shadows make states unmistakable, which is exactly what an error or empty card has to be.",
    html: `<div class="bs-card">
      <p class="bs-flag">Couldn't save</p>
      <p class="bs-line">Your draft is still here. Nothing was lost.</p>
      <span class="bs-retry">Retry</span>
    </div>`,
    css: `.spec--combo-brutal-states .bs-card { width: 100%; max-width: 280px; padding: 18px; background: #fff; border: 2px solid #000; border-radius: 0; box-shadow: 7px 7px 0 #000; font-family: "Instrument Sans", sans-serif; }
.spec--combo-brutal-states .bs-flag { display: inline-block; margin: 0; padding: 4px 8px; background: #ffe14d; border: 2px solid #000; font: 700 11px/1 "Instrument Sans", sans-serif; letter-spacing: .04em; text-transform: uppercase; }
.spec--combo-brutal-states .bs-line { margin: 14px 0 0; font-size: 13px; line-height: 1.45; color: #14171c; }
.spec--combo-brutal-states .bs-retry { display: inline-block; margin-top: 16px; padding: 9px 16px; background: #ff3d54; border: 2px solid #000; box-shadow: 4px 4px 0 #000; font: 700 13px/1 "Instrument Sans", sans-serif; color: #14171c; }`
  },

  {
    id: "glass-overlay",
    style: "glassmorphism",
    pattern: "overlay-layer",
    practice: "motion-micro",
    why: "Blur reads as glass only when content sits behind it, so the pane belongs in an overlay — and it should arrive in about 200ms.",
    html: `<div class="gl-ground">
      <span class="gl-behind"><i></i><i></i><i></i><i></i></span>
      <span class="gl-pane"><b>Filters</b><i></i><i></i></span>
    </div>`,
    css: `.spec--combo-glass-overlay .gl-ground { position: relative; width: 100%; max-width: 300px; height: 174px; border-radius: 14px; overflow: hidden; background: radial-gradient(circle at 24% 22%, #ff8a5b, #7a4de0 52%, #1b2a6b); font-family: "Instrument Sans", sans-serif; }
.spec--combo-glass-overlay .gl-behind { position: absolute; inset: 14px; display: grid; gap: 8px; align-content: start; }
.spec--combo-glass-overlay .gl-behind i { height: 12px; border-radius: 6px; background: rgba(255,255,255,.28); }
.spec--combo-glass-overlay .gl-behind i:nth-child(2) { width: 72%; }
.spec--combo-glass-overlay .gl-behind i:nth-child(3) { width: 84%; }
.spec--combo-glass-overlay .gl-behind i:nth-child(4) { width: 46%; }
.spec--combo-glass-overlay .gl-pane { position: absolute; left: 26px; right: 26px; bottom: 22px; display: grid; gap: 8px; padding: 14px; border-radius: 14px; background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.45); backdrop-filter: blur(14px) saturate(180%); transition: transform 200ms cubic-bezier(.16,1,.3,1); }
.spec--combo-glass-overlay .gl-pane b { font: 600 13px/1 "Instrument Sans", sans-serif; color: #fff; }
.spec--combo-glass-overlay .gl-pane i { height: 8px; border-radius: 4px; background: rgba(255,255,255,.5); }
.spec--combo-glass-overlay .gl-pane i:nth-of-type(2) { width: 62%; }`
  },

  {
    id: "terminal-palette",
    style: "terminal-cli",
    pattern: "command-palette",
    practice: "performance-first",
    why: "Monospace and a keyboard palette are cheap to paint; the practice keeps the interface text-only, so it is legible before the page has finished loading.",
    html: `<div class="tp-term">
      <p class="tp-bar">jump to <b>deploy</b></p>
      <p class="tp-row on"><b>deploy prod</b><span>main · 42s</span></p>
      <p class="tp-row"><b>deploy preview</b><span>branch</span></p>
      <p class="tp-foot">no images · 3.1kB</p>
    </div>`,
    css: `.spec--combo-terminal-palette .tp-term { width: 100%; max-width: 300px; padding: 12px; background: #0b0d10; border: 1px solid #2a3038; border-radius: 4px; font-family: "IBM Plex Mono", monospace; }
.spec--combo-terminal-palette .tp-bar { margin: 0 0 10px; padding: 8px 10px; border: 1px solid #2a3038; color: #8de08d; font-size: 12px; }
.spec--combo-terminal-palette .tp-bar b { color: #fff; font-weight: 500; }
.spec--combo-terminal-palette .tp-row { display: flex; justify-content: space-between; gap: 12px; margin: 0; padding: 7px 8px; font-size: 12px; color: #cfe0e8; }
.spec--combo-terminal-palette .tp-row.on { background: #16202a; border-left: 2px solid #8de08d; }
.spec--combo-terminal-palette .tp-row b { font-weight: 500; color: #fff; }
.spec--combo-terminal-palette .tp-row span { color: #6f7c88; }
.spec--combo-terminal-palette .tp-foot { margin: 10px 0 0; font-size: 11px; color: #566370; }`
  },

  {
    id: "material-shell",
    style: "material-2",
    pattern: "navigation-shell",
    practice: "elevation-hierarchy",
    why: "In Material, depth is the hierarchy, so the shell, its menus and its dialogs each take one step up a fixed scale.",
    html: `<div class="ms-app">
      <p class="ms-top">Inbox</p>
      <div class="ms-body">
        <span class="ms-card">12 unread</span>
        <span class="ms-card">3 drafts</span>
      </div>
      <div class="ms-nav"><i></i><i class="on"></i><i></i></div>
    </div>`,
    css: `.spec--combo-material-shell .ms-app { position: relative; width: 100%; max-width: 300px; height: 178px; padding: 0 0 46px; background: #f2eef8; border-radius: 8px; overflow: hidden; font-family: "Instrument Sans", sans-serif; }
.spec--combo-material-shell .ms-top { position: absolute; left: 0; right: 0; top: 0; height: 46px; padding: 0 14px; display: flex; align-items: center; font: 600 14px/1 "Instrument Sans", sans-serif; color: #241b3a; background: #fff; box-shadow: 0 2px 4px rgba(40,24,80,.18), 0 6px 12px rgba(40,24,80,.10); }
.spec--combo-material-shell .ms-body { display: grid; gap: 10px; padding: 62px 14px 0; }
.spec--combo-material-shell .ms-card { padding: 12px; border-radius: 4px; background: #fff; font: 500 12px/1 "Instrument Sans", sans-serif; color: #4b3f6b; box-shadow: 0 1px 2px rgba(40,24,80,.14), 0 1px 3px rgba(40,24,80,.08); }
.spec--combo-material-shell .ms-nav { position: absolute; left: 0; right: 0; bottom: 0; height: 46px; display: flex; align-items: center; justify-content: space-around; background: #fff; box-shadow: 0 -2px 4px rgba(40,24,80,.14); }
.spec--combo-material-shell .ms-nav i { width: 26px; height: 8px; border-radius: 4px; background: #cfc4e6; }
.spec--combo-material-shell .ms-nav i.on { background: #5b3df5; }`
  },

  {
    id: "fluent-bento",
    style: "fluent-design",
    pattern: "bento-grid",
    practice: "design-system",
    why: "A bento tray is a design system in miniature: one radius, one gutter, one blur, repeated.",
    html: `<div class="fb-tray">
      <span class="fb-tile big"><b>Design</b><i>18 files</i></span>
      <span class="fb-tile"><b>3</b><i>queued</i></span>
      <span class="fb-tile wide"><b>Ship Friday</b></span>
    </div>`,
    css: `.spec--combo-fluent-bento .fb-tray { width: 100%; max-width: 300px; padding: 10px; border-radius: 8px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 62px 44px; gap: 8px; background: linear-gradient(140deg, #d8e6ff, #f1e4ff 60%, #ffe9f0); font-family: "Instrument Sans", sans-serif; }
.spec--combo-fluent-bento .fb-tile { display: flex; flex-direction: column; justify-content: center; gap: 3px; padding: 0 12px; border-radius: 8px; background: rgba(255,255,255,.62); border: 1px solid rgba(255,255,255,.8); backdrop-filter: blur(10px); }
.spec--combo-fluent-bento .fb-tile.big { grid-row: span 2; }
.spec--combo-fluent-bento .fb-tile.wide { grid-column: span 2; flex-direction: row; align-items: center; }
.spec--combo-fluent-bento .fb-tile b { font: 600 13px/1.2 "Instrument Sans", sans-serif; color: #1d2430; }
.spec--combo-fluent-bento .fb-tile i { font: 400 11px/1 "Instrument Sans", sans-serif; font-style: normal; color: #5b6572; }`
  },

  {
    id: "hud-telemetry",
    style: "cyberpunk-hud",
    pattern: "data-dashboard",
    practice: "progressive-disclosure",
    why: "Neon on near-black is the HUD tradition for dense telemetry; disclosure keeps the second layer of numbers off the first screen.",
    html: `<div class="ht-hud">
      <p class="ht-t">lat 47.37 · lon 8.54</p>
      <p class="ht-read"><b>1,284</b> req/s</p>
      <span class="ht-bar"><i></i></span>
      <p class="ht-more">+ 6 more rows</p>
    </div>`,
    css: `.spec--combo-hud-telemetry .ht-hud { width: 100%; max-width: 300px; padding: 16px; background: #07080d; border: 1px solid #1f2b3a; border-radius: 2px; font-family: "IBM Plex Mono", monospace; }
.spec--combo-hud-telemetry .ht-t { margin: 0; font-size: 10px; letter-spacing: .16em; color: #5de0c8; }
.spec--combo-hud-telemetry .ht-read { margin: 12px 0 0; font-size: 12px; color: #9fb3c8; }
.spec--combo-hud-telemetry .ht-read b { font-size: 26px; font-weight: 500; color: #7dfbe0; text-shadow: 0 0 14px rgba(125,251,224,.6); font-variant-numeric: tabular-nums; }
.spec--combo-hud-telemetry .ht-bar { display: block; height: 6px; margin-top: 12px; background: #131b26; }
.spec--combo-hud-telemetry .ht-bar i { display: block; width: 68%; height: 100%; background: linear-gradient(90deg, #31b6ff, #7dfbe0); box-shadow: 0 0 12px rgba(49,182,255,.7); }
.spec--combo-hud-telemetry .ht-more { margin: 14px 0 0; padding-top: 10px; border-top: 1px solid #1f2b3a; font-size: 11px; color: #ff5f9e; }`
  },

  {
    id: "minimal-empty",
    style: "minimalism",
    pattern: "empty-state",
    practice: "research-driven",
    why: "With nothing to decorate, the empty state's single sentence is the design — which is why it is the screen worth testing first.",
    html: `<div class="me-empty">
      <p class="me-h">No projects yet</p>
      <p class="me-s">Create one and it will appear here.</p>
      <span class="me-cta">New project</span>
    </div>`,
    css: `.spec--combo-minimal-empty .me-empty { width: 100%; max-width: 280px; padding: 24px 20px; background: var(--panel); border: 1px solid var(--hair); border-radius: 10px; font-family: "Instrument Sans", sans-serif; color: var(--ink); }
.spec--combo-minimal-empty .me-h { margin: 0; font: 500 17px/1.3 "Instrument Sans", sans-serif; }
.spec--combo-minimal-empty .me-s { margin: 6px 0 0; font-size: 13px; line-height: 1.5; color: var(--muted); }
.spec--combo-minimal-empty .me-cta { display: inline-block; margin-top: 18px; padding: 10px 15px; border: 1px solid var(--ink); border-radius: 2px; font: 500 12px/1 "Instrument Sans", sans-serif; }`
  },

  {
    id: "depth-panes",
    style: "spatial-vision",
    pattern: "overlay-layer",
    practice: "spatial-interaction",
    why: "Depth UI is panes floating over content, and the practice supplies what the look cannot: comfort rules for reaching them.",
    html: `<div class="dp-room">
      <span class="dp-pane back">Library</span>
      <span class="dp-pane front">Now playing<i>revealed</i></span>
    </div>`,
    css: `.spec--combo-depth-panes .dp-room { position: relative; width: 100%; max-width: 300px; height: 178px; border-radius: 14px; overflow: hidden; background: radial-gradient(circle at 68% 30%, #2d3346, #101319 70%); font-family: "Instrument Sans", sans-serif; }
.spec--combo-depth-panes .dp-pane { position: absolute; padding: 10px 14px; border-radius: 12px; background: rgba(226,235,255,.14); border: 1px solid rgba(226,235,255,.4); backdrop-filter: blur(8px); color: #eef2ff; font: 500 12px/1.3 "Instrument Sans", sans-serif; }
.spec--combo-depth-panes .dp-pane.back { left: 26px; top: 30px; transform: scale(.86); opacity: .7; }
.spec--combo-depth-panes .dp-pane.front { right: 26px; bottom: 30px; box-shadow: 0 0 0 8px rgba(143,208,255,.12); }
.spec--combo-depth-panes .dp-pane i { display: block; margin-top: 6px; font-style: normal; font-size: 11px; color: #9fd0ff; }`
  },

  {
    id: "isometric-wizard",
    style: "isometric",
    pattern: "onboarding-wizard",
    practice: "motion-micro",
    why: "An isometric scene turns each step of a wizard into a place rather than a page, and one authored movement marks the transition.",
    html: `<div class="iw-scene">
      <span class="iw-steps"><i class="on">1</i><i>2</i><i>3</i></span>
      <p class="iw-plate">Name your workspace</p>
    </div>`,
    css: `.spec--combo-isometric-wizard .iw-scene { position: relative; width: 100%; max-width: 300px; height: 176px; border-radius: 12px; overflow: hidden; background: linear-gradient(180deg, #eaeef6, #dfe6f2); font-family: "Instrument Sans", sans-serif; }
.spec--combo-isometric-wizard .iw-scene::after { content: ""; position: absolute; left: -20%; right: -20%; bottom: -30px; height: 150px; background: repeating-linear-gradient(60deg, rgba(255,255,255,.9) 0 1px, transparent 1px 34px), repeating-linear-gradient(-60deg, rgba(255,255,255,.9) 0 1px, transparent 1px 34px); transform: skewY(-6deg); }
.spec--combo-isometric-wizard .iw-steps { position: absolute; left: 18px; top: 18px; display: flex; gap: 6px; z-index: 2; }
.spec--combo-isometric-wizard .iw-steps i { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 50%; border: 1px solid #9aa6bd; background: #fff; font: 500 11px/1 "Instrument Sans", sans-serif; font-style: normal; color: #5b6572; }
.spec--combo-isometric-wizard .iw-steps i.on { background: #1f4fd8; border-color: #1f4fd8; color: #fff; transition: background 160ms cubic-bezier(.16,1,.3,1); }
.spec--combo-isometric-wizard .iw-plate { position: absolute; left: 34px; top: 78px; z-index: 2; margin: 0; padding: 16px 20px; background: #fff; border: 1px solid #c3ccdd; border-radius: 10px; box-shadow: 10px 12px 0 rgba(31,79,216,.16); transform: rotate(-1.5deg); font: 600 14px/1.2 "Instrument Sans", sans-serif; color: #14171c; }`
  },

  {
    id: "drawn-forms",
    style: "organic-handdrawn",
    pattern: "form-validation",
    practice: "accessibility-first",
    why: "Warmth works best on the screens people dread: hand-drawn forms and errors, with contrast, labels and focus still measured.",
    html: `<div class="dr-form">
      <label class="dr-l" for="dr-email">Email</label>
      <input class="dr-i" id="dr-email" value="ada@" />
      <p class="dr-err">Needs a domain — try ada@studio.co</p>
      <span class="dr-btn">Save</span>
    </div>`,
    css: `.spec--combo-drawn-forms .dr-form { width: 100%; max-width: 274px; padding: 18px; background: var(--panel); border: 1px solid var(--hair); border-radius: 10px; font-family: "Instrument Sans", sans-serif; }
.spec--combo-drawn-forms .dr-l { display: block; margin-bottom: 6px; font: 600 13px/1 "Instrument Sans", sans-serif; color: var(--ink); }
.spec--combo-drawn-forms .dr-i { width: 100%; padding: 11px 12px; font: 400 14px/1 "Instrument Sans", sans-serif; color: var(--ink); background: var(--panel-2); border: 2px solid var(--ink); border-radius: 14px 10px 12px 9px; }
.spec--combo-drawn-forms .dr-i:focus-visible { outline: 2px solid #1f4fd8; outline-offset: 2px; }
.spec--combo-drawn-forms .dr-err { margin: 7px 0 0; font-size: 12px; line-height: 1.45; color: var(--accent); }
.spec--combo-drawn-forms .dr-err::before { content: ""; display: inline-block; width: 12px; height: 12px; margin-right: 6px; border-radius: 50%; background: var(--accent); vertical-align: -1px; }
.spec--combo-drawn-forms .dr-btn { display: inline-block; margin-top: 16px; padding: 11px 18px; background: var(--ink); color: var(--bg); border-radius: 16px 12px 15px 11px; font: 600 13px/1 "Instrument Sans", sans-serif; }`
  },

  {
    id: "oled-feed",
    style: "dark-oled",
    pattern: "feed-timeline",
    practice: "attention-first",
    why: "A media feed on true black: the only light on screen is the content, and the hook sits inside the first frame.",
    html: `<div class="of-tile">
      <span class="of-media"></span>
      <p class="of-hook">Wait for the last one</p>
      <span class="of-bar"><i></i></span>
    </div>`,
    css: `.spec--combo-oled-feed .of-tile { position: relative; width: 100%; max-width: 172px; aspect-ratio: 9/15; border: 1px solid #23262b; border-radius: 12px; overflow: hidden; background: #000; font-family: "Instrument Sans", sans-serif; }
.spec--combo-oled-feed .of-media { position: absolute; inset: 0; background: radial-gradient(circle at 58% 26%, #e35d2f, #7a1436 52%, #05060a 88%); }
.spec--combo-oled-feed .of-hook { position: absolute; left: 12px; right: 12px; bottom: 22px; margin: 0; font: 700 14px/1.25 "Instrument Sans", sans-serif; color: #fff; }
.spec--combo-oled-feed .of-bar { position: absolute; left: 12px; right: 12px; bottom: 11px; height: 2px; background: rgba(255,255,255,.24); }
.spec--combo-oled-feed .of-bar i { display: block; width: 38%; height: 100%; background: #fff; }`
  },

  {
    id: "render-hero",
    style: "render-3d",
    pattern: "hero-landing",
    practice: "conversion-optimised",
    why: "One rendered hero explains what a paragraph would, which leaves a single button to press.",
    html: `<div class="rh-hero">
      <span class="rh-orb"></span>
      <p class="rh-h">A watch, rendered</p>
      <span class="rh-cta">Buy — $249</span>
      <p class="rh-proof">4.8 from 2,140 owners</p>
    </div>`,
    css: `.spec--combo-render-hero .rh-hero { width: 100%; max-width: 280px; padding: 22px 20px; background: var(--panel); border: 1px solid var(--hair); border-radius: 10px; text-align: center; font-family: "Instrument Sans", sans-serif; }
.spec--combo-render-hero .rh-orb { display: block; width: 96px; height: 96px; margin: 0 auto; border-radius: 50%; background: radial-gradient(circle at 34% 28%, #fff5e8, #d9a05b 46%, #4a2a12 88%); box-shadow: inset -10px -12px 22px rgba(0,0,0,.45), 0 18px 26px rgba(74,42,18,.35); }
.spec--combo-render-hero .rh-h { margin: 16px 0 0; font: 600 18px/1.25 "Instrument Sans", sans-serif; color: var(--ink); }
.spec--combo-render-hero .rh-cta { display: block; margin: 14px auto 0; max-width: 200px; padding: 13px 0; border-radius: 8px; background: #d0441f; color: #fff; font: 700 15px/1 "Instrument Sans", sans-serif; }
.spec--combo-render-hero .rh-proof { margin: 10px 0 0; font-size: 12px; color: var(--muted); }`
  },

  {
    id: "y2k-brand",
    style: "y2k-frutiger",
    pattern: "hero-landing",
    practice: "brand-expression-first",
    why: "The era's gloss only works when the brand commits to it everywhere, gradient and all.",
    html: `<div class="yb-hero">
      <span class="yb-mark">AQUA</span>
      <p class="yb-h">Liquid<br />everything</p>
      <span class="yb-cta">Get the beta</span>
    </div>`,
    css: `.spec--combo-y2k-brand .yb-hero { position: relative; width: 100%; max-width: 290px; padding: 20px; border-radius: 22px; overflow: hidden; background: linear-gradient(160deg, #7fe3ff, #4aa8f0 42%, #b6f36a 88%); font-family: "Instrument Sans", sans-serif; color: #06314a; }
.spec--combo-y2k-brand .yb-hero::after { content: ""; position: absolute; left: -30%; top: -60%; width: 120%; height: 120%; background: linear-gradient(72deg, rgba(255,255,255,.68) 0 12%, rgba(255,255,255,0) 34%); }
.spec--combo-y2k-brand .yb-mark { position: relative; display: inline-block; font: 700 11px/1 "Instrument Sans", sans-serif; letter-spacing: .3em; }
.spec--combo-y2k-brand .yb-h { position: relative; margin: 16px 0 0; font: 700 32px/.95 "Instrument Sans", sans-serif; letter-spacing: -.02em; text-shadow: 0 1px 0 rgba(255,255,255,.7); }
.spec--combo-y2k-brand .yb-cta { position: relative; display: inline-block; margin-top: 18px; padding: 12px 20px; border-radius: 999px; background: #06314a; color: #d8faff; font: 700 13px/1 "Instrument Sans", sans-serif; box-shadow: inset 0 2px 0 rgba(255,255,255,.35), 0 8px 16px rgba(6,49,74,.3); }`
  },

  {
    id: "memphis-reward",
    style: "memphis",
    pattern: "gamified",
    practice: "joy-first",
    why: "If progress is meant to feel like a reward, the reward is allowed to be loud.",
    html: `<div class="mr-card">
      <span class="mr-confetti"><i></i><i></i><i></i></span>
      <p class="mr-h">Level 4</p>
      <span class="mr-bar"><i></i></span>
      <p class="mr-s">2 tasks to the next badge</p>
    </div>`,
    css: `.spec--combo-memphis-reward .mr-card { position: relative; width: 100%; max-width: 272px; padding: 20px; border: 2px solid #111; border-radius: 4px; background: #fff8e7; box-shadow: 6px 6px 0 #111; font-family: "Instrument Sans", sans-serif; }
.spec--combo-memphis-reward .mr-confetti { position: absolute; right: 12px; top: 12px; display: flex; gap: 5px; }
.spec--combo-memphis-reward .mr-confetti i { width: 9px; height: 9px; border-radius: 50%; background: #ff4d6d; }
.spec--combo-memphis-reward .mr-confetti i:nth-child(2) { border-radius: 0; background: #23c4c4; transform: rotate(18deg); }
.spec--combo-memphis-reward .mr-confetti i:nth-child(3) { background: #ffc043; }
.spec--combo-memphis-reward .mr-h { margin: 0; font: 800 20px/1.1 "Instrument Sans", sans-serif; color: #111; }
.spec--combo-memphis-reward .mr-bar { display: block; height: 14px; margin-top: 12px; border: 2px solid #111; background: #fff; }
.spec--combo-memphis-reward .mr-bar i { display: block; width: 62%; height: 100%; background: repeating-linear-gradient(45deg, #23c4c4 0 6px, #7fe3ff 6px 12px); }
.spec--combo-memphis-reward .mr-s { margin: 10px 0 0; font-size: 12px; color: #4b4b4b; }`
  },

  {
    id: "pixel-arcade",
    style: "pixel-art",
    pattern: "gamified",
    practice: "sound-haptics",
    why: "A game interface answers every press with a chip and a blip; the two extra channels are the genre's contract.",
    html: `<div class="pa-panel">
      <p class="pa-h">Stage 3</p>
      <span class="pa-bar"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>
      <span class="pa-blip">blip · 660Hz · 90ms</span>
    </div>`,
    css: `.spec--combo-pixel-arcade .pa-panel { width: 100%; max-width: 268px; padding: 18px; background: #1a1c2c; border: 4px solid #41a6f6; border-radius: 0; box-shadow: 0 6px 0 #0f1018; font-family: "IBM Plex Mono", monospace; }
.spec--combo-pixel-arcade .pa-h { margin: 0; font-size: 14px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; color: #ffcd75; }
.spec--combo-pixel-arcade .pa-bar { display: flex; gap: 3px; margin-top: 14px; }
.spec--combo-pixel-arcade .pa-bar i { width: 14px; height: 16px; background: #29366f; }
.spec--combo-pixel-arcade .pa-bar i:nth-child(-n+5) { background: #38b764; }
.spec--combo-pixel-arcade .pa-blip { display: block; margin-top: 16px; padding-top: 10px; border-top: 2px solid #29366f; font-size: 11px; color: #94b0c2; }`
  },

  {
    id: "luxury-stills",
    style: "luxury-premium",
    pattern: "card-ui",
    practice: "cinematic-media-first",
    why: "Serif restraint and product cards shot like stills: luxury is a pacing decision before it is a palette.",
    html: `<div class="lx-frame">
      <span class="lx-still"></span>
      <p class="lx-cap">No. 04 — Amber, 50ml</p>
      <span class="lx-ctl">Sound on</span>
    </div>`,
    css: `.spec--combo-luxury-stills .lx-frame { position: relative; width: 100%; max-width: 292px; aspect-ratio: 21/9; border-radius: 2px; overflow: hidden; background: #0d0b09; font-family: "Instrument Sans", sans-serif; }
.spec--combo-luxury-stills .lx-still { position: absolute; inset: 0; background: radial-gradient(110% 120% at 74% 24%, #c69a52, #4a3418 58%, #0d0b09 100%); }
.spec--combo-luxury-stills .lx-frame::after { content: ""; position: absolute; inset: 0; border-top: 7px solid #0d0b09; border-bottom: 7px solid #0d0b09; }
.spec--combo-luxury-stills .lx-cap { position: absolute; left: 14px; bottom: 15px; margin: 0; font: 400 11px/1.4 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #f1e6d4; }
.spec--combo-luxury-stills .lx-ctl { position: absolute; right: 12px; bottom: 13px; padding: 4px 9px; border: 1px solid rgba(241,230,212,.55); border-radius: 999px; color: #f1e6d4; font: 500 10px/1 "Instrument Sans", sans-serif; letter-spacing: .06em; }`
  },

  {
    id: "hig-thumb",
    style: "ios-human-interface",
    pattern: "navigation-shell",
    practice: "responsive-mobile-first",
    why: "Thumb-first navigation is the whole point of the HIG, and the shell is where it is spent.",
    html: `<div class="hg-app">
      <span class="hg-row"><b>Inbox</b><i>4</i></span>
      <span class="hg-row"><b>Today</b><i>2</i></span>
      <div class="hg-tabs"><i class="on"></i><i></i><i></i><i></i></div>
    </div>`,
    css: `.spec--combo-hig-thumb .hg-app { position: relative; width: 100%; max-width: 244px; height: 178px; border-radius: 18px; overflow: hidden; background: linear-gradient(180deg, #f7f8fa, #eef1f6); font-family: "Instrument Sans", sans-serif; box-shadow: inset 0 0 0 1px rgba(20,23,28,.08); }
.spec--combo-hig-thumb .hg-row { display: flex; align-items: center; justify-content: space-between; height: 46px; margin: 12px 14px 0; padding: 0 14px; border-radius: 12px; background: #fff; box-shadow: 0 1px 2px rgba(20,23,28,.08); }
.spec--combo-hig-thumb .hg-row b { font: 600 14px/1 "Instrument Sans", sans-serif; color: #14171c; }
.spec--combo-hig-thumb .hg-row i { font: 500 12px/1 "Instrument Sans", sans-serif; font-style: normal; color: #6b7280; }
.spec--combo-hig-thumb .hg-tabs { position: absolute; left: 0; right: 0; bottom: 0; height: 52px; padding-bottom: 6px; display: flex; align-items: center; justify-content: space-around; background: rgba(255,255,255,.72); backdrop-filter: blur(12px) saturate(160%); border-top: 1px solid rgba(20,23,28,.1); }
.spec--combo-hig-thumb .hg-tabs i { width: 22px; height: 22px; border-radius: 7px; background: #c8ced8; }
.spec--combo-hig-thumb .hg-tabs i.on { background: #0a72f0; }`
  },

  {
    id: "vaporwave-scroll",
    style: "vaporwave",
    pattern: "hero-landing",
    practice: "scroll-narrative",
    why: "A sunset palette and a scroll-driven story make the same argument: keep going.",
    html: `<div class="vw-scene">
      <span class="vw-sun"></span>
      <span class="vw-floor"></span>
      <p class="vw-ch">03 / 06</p>
      <p class="vw-h">Continue</p>
      <span class="vw-rail"><i></i></span>
    </div>`,
    css: `.spec--combo-vaporwave-scroll .vw-scene { position: relative; width: 100%; max-width: 300px; height: 178px; border-radius: 8px; overflow: hidden; background: linear-gradient(180deg, #1b0b3b, #7a2b8f 52%, #ff5f8d); font-family: "Instrument Sans", sans-serif; }
.spec--combo-vaporwave-scroll .vw-sun { position: absolute; left: 50%; top: 34%; width: 72px; height: 72px; margin-left: -36px; border-radius: 50%; background: linear-gradient(180deg, #ffe14d, #ff5f8d); box-shadow: 0 0 34px rgba(255,120,180,.7); }
.spec--combo-vaporwave-scroll .vw-floor { position: absolute; left: -20%; right: -20%; bottom: 0; height: 58px; background: repeating-linear-gradient(90deg, rgba(255,255,255,.5) 0 1px, transparent 1px 22px), repeating-linear-gradient(0deg, rgba(255,255,255,.5) 0 1px, transparent 1px 16px); transform: perspective(120px) rotateX(52deg); }
.spec--combo-vaporwave-scroll .vw-ch { position: absolute; left: 14px; top: 14px; margin: 0; font: 600 10px/1 "Instrument Sans", sans-serif; letter-spacing: .18em; color: #ffd7ef; }
.spec--combo-vaporwave-scroll .vw-h { position: absolute; left: 14px; bottom: 20px; margin: 0; font: 700 24px/1 "Instrument Sans", sans-serif; color: #fff; text-shadow: 0 0 18px rgba(255,95,141,.9); }
.spec--combo-vaporwave-scroll .vw-rail { position: absolute; right: 14px; top: 14px; bottom: 14px; width: 2px; background: rgba(255,255,255,.3); }
.spec--combo-vaporwave-scroll .vw-rail i { position: absolute; top: 40%; left: -3px; width: 8px; height: 8px; border-radius: 50%; background: #fff; box-shadow: 0 0 12px #fff; }`
  },

  {
    id: "brutal-forms",
    style: "brutalist-web",
    pattern: "form-validation",
    practice: "accessibility-first",
    why: "Hard borders and square inputs are already focus-ring friendly; brutalism only fails when it skips the labels.",
    html: `<div class="bf-form">
      <label class="bf-l" for="bf-email">Work email</label>
      <input class="bf-i" id="bf-email" value="ada@studio.co" />
      <span class="bf-sub">Save</span>
    </div>`,
    css: `.spec--combo-brutal-forms .bf-form { width: 100%; max-width: 272px; padding: 18px; background: var(--panel); border: 1px solid var(--hair); border-radius: 10px; font-family: "Instrument Sans", sans-serif; }
.spec--combo-brutal-forms .bf-l { display: block; margin-bottom: 6px; font: 700 12px/1 "Instrument Sans", sans-serif; letter-spacing: .04em; text-transform: uppercase; color: var(--ink); }
.spec--combo-brutal-forms .bf-i { width: 100%; padding: 11px 12px; font: 400 14px/1 "Instrument Sans", sans-serif; color: var(--ink); background: var(--panel-2); border: 2px solid var(--ink); border-radius: 0; }
.spec--combo-brutal-forms .bf-i:focus-visible { outline: 3px solid #ffd400; outline-offset: 2px; }
.spec--combo-brutal-forms .bf-sub { display: inline-block; margin-top: 16px; padding: 12px 20px; background: var(--ink); border: 2px solid var(--ink); box-shadow: 5px 5px 0 #ffd400; color: var(--bg); font: 700 13px/1 "Instrument Sans", sans-serif; }`
  }

];