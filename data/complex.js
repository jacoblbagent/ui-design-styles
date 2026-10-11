/* Complex specimens: for each style, the same style drawn as one whole small
   application screen — an app bar and three panes — instead of the single
   component its specimen shows. Keyed by entry id; only styles have one.

   Same discipline as a specimen: every rule is scoped to `.spec--<id>`, every
   variant paints its own ground so the theme cannot invert its ink, and nothing
   may overflow the stage it is drawn in. The markup reuses the entry's own
   specimen prefix with an `x` appended (sk- -> skx-), so the two states are
   visibly one style and their classes cannot collide.

   Draw them: `node tools/verify.js` reports report.complexSpecimens and
   report.complexToggle. */
window.COMPLEX = window.COMPLEX || {};

/* The composition is at least 250px tall and grows by the few pixels its own
   content needs: at a fixed 250px the last row of several screens was cut in
   half, which reads as a broken specimen rather than a screen that continues.
   The height was authored as 250px and is read here as a floor. */

window.COMPLEX["skeuomorphism"] = {
  html: `<div class="skx-app">
  <div class="skx-top">
    <span class="skx-mark">AUDIOTEK</span>
    <div class="skx-nav"><span class="skx-navitem on">Deck</span><span class="skx-navitem">Presets</span><span class="skx-navitem">Levels</span><span class="skx-navitem">Rec</span></div>
    <span class="skx-user">ON AIR</span>
  </div>
  <div class="skx-body">
  <div class="skx-side">
    <div class="skx-sidehead">Presets</div>
    <div class="skx-row on"><span class="skx-rl">Broadcast</span><span class="skx-rv">96.4</span></div>
    <div class="skx-row"><span class="skx-rl">Studio</span><span class="skx-rv">88.1</span></div>
    <div class="skx-row"><span class="skx-rl">Commuter</span><span class="skx-rv">101.2</span></div>
    <div class="skx-row"><span class="skx-rl">Night</span><span class="skx-rv">107.9</span></div>
  </div>
  <div class="skx-main">
    <div class="skx-title">Deck A</div>
    <div class="skx-stats">
    <div class="skx-stat"><span class="skx-sv">72%</span><span class="skx-sk">Gain</span></div>
    <div class="skx-stat"><span class="skx-sv">-3 dB</span><span class="skx-sk">Peak</span></div>
    <div class="skx-stat"><span class="skx-sv">38%</span><span class="skx-sk">Wet</span></div>
    </div>
    <div class="skx-table">
    <div class="skx-tr"><span class="skx-tn">Ch 1</span><span class="skx-tv">0.42</span><span class="skx-ts">Live</span></div>
    <div class="skx-tr"><span class="skx-tn">Ch 2</span><span class="skx-tv">0.31</span><span class="skx-ts">Live</span></div>
    <div class="skx-tr"><span class="skx-tn">Ch 3</span><span class="skx-tv">0.08</span><span class="skx-ts">Muted</span></div>
    </div>
  </div>
  <div class="skx-detail">
    <div class="skx-dhead">Channel</div>
    <div class="skx-meta">Source &middot; Tuner</div>
    <div class="skx-meta">Format &middot; 24 / 96k</div>
    <div class="skx-meta">Latency &middot; 12 ms</div>
    <div class="skx-actions">
      <button class="skx-primary" type="button">Engage</button>
      <button class="skx-ghost" type="button">Bypass</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--skeuomorphism .skx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #949494; border-radius: 14px; background: linear-gradient(#f9f9f9, #dcdcdc 46%, #c3c3c3); box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #b0b0b0, 0 8px 18px rgba(0,0,0,.32); font-family: "Instrument Sans", sans-serif; color: #2b2b2b; }
.spec--skeuomorphism .skx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 8px; height: 34px; padding: 0 12px; background: linear-gradient(#eeeeee, #cfcfcf); border-bottom: 1px solid #9a9a9a; box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 rgba(0,0,0,.12); }
.spec--skeuomorphism .skx-mark { font-size: 12px; font-weight: 700; letter-spacing: .06em; color: #3a3a3a; text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-nav { display: flex; gap: 3px; }
.spec--skeuomorphism .skx-navitem { font-size: 10px; padding: 4px 9px; border-radius: 7px; color: #4a4a4a; border: 1px solid #b3b3b3; background: linear-gradient(#f4f4f4, #d9d9d9); box-shadow: inset 0 1px 0 #fff, 0 1px 1px rgba(0,0,0,.18); text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-navitem.on { color: #fff; border-color: #40701f; background: linear-gradient(#96d95c, #5cab25 48%, #3f8a15); text-shadow: 0 -1px 0 rgba(0,0,0,.45); box-shadow: inset 0 1px 0 rgba(255,255,255,.75), 0 1px 1px rgba(0,0,0,.25); }
.spec--skeuomorphism .skx-user { margin-left: auto; font: 500 10px/1 "IBM Plex Mono", monospace; letter-spacing: .1em; color: #c6f7b4; padding: 4px 8px; border-radius: 4px; border: 1px solid #55613f; background: linear-gradient(#41503d, #1e2a1c); box-shadow: inset 0 2px 6px rgba(0,0,0,.75); text-shadow: 0 0 6px rgba(150,255,130,.75); }
.spec--skeuomorphism .skx-body { flex: 1 1 auto; display: flex; min-height: 0; gap: 8px; padding: 8px; }
.spec--skeuomorphism .skx-side { flex: 1 1 21%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 7px; border-radius: 9px; border: 1px solid #a5a5a5; background: linear-gradient(#f2f2f2, #d7d7d7); box-shadow: inset 0 1px 0 #fff, 0 2px 5px rgba(0,0,0,.22); }
.spec--skeuomorphism .skx-sidehead { font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #6a6a6a; text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 5px 7px; border-radius: 6px; border: 1px solid #b8b8b8; background: linear-gradient(#fbfbfb, #e6e6e6); box-shadow: inset 0 1px 0 #fff; }
.spec--skeuomorphism .skx-row.on { border-color: #40701f; background: linear-gradient(#96d95c, #5cab25 48%, #3f8a15); box-shadow: inset 0 1px 0 rgba(255,255,255,.7), inset 0 -2px 3px rgba(0,0,0,.2); }
.spec--skeuomorphism .skx-rl { font-size: 10px; color: #4a4a4a; text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-row.on .skx-rl { color: #fff; text-shadow: 0 -1px 0 rgba(0,0,0,.45); }
.spec--skeuomorphism .skx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; color: #3a3a3a; }
.spec--skeuomorphism .skx-row.on .skx-rv { color: #f2ffe9; text-shadow: 0 -1px 0 rgba(0,0,0,.45); }
.spec--skeuomorphism .skx-main { flex: 1 1 46%; min-width: 0; display: flex; flex-direction: column; gap: 7px; padding: 8px; border-radius: 9px; border: 1px solid #a5a5a5; background: linear-gradient(#fafafa, #dfdfdf); box-shadow: inset 0 1px 0 #fff, 0 2px 5px rgba(0,0,0,.22); }
.spec--skeuomorphism .skx-title { font-size: 12px; font-weight: 700; color: #363636; text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-stats { display: flex; gap: 6px; }
.spec--skeuomorphism .skx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 6px 7px; border-radius: 5px; border: 1px solid #7c8570; background: linear-gradient(#41503d, #1e2a1c); box-shadow: inset 0 2px 6px rgba(0,0,0,.75); }
.spec--skeuomorphism .skx-sv { font: 500 13px/1 "IBM Plex Mono", monospace; color: #c6f7b4; text-shadow: 0 0 6px rgba(150,255,130,.75); }
.spec--skeuomorphism .skx-sk { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: #8fae7c; }
.spec--skeuomorphism .skx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 3px; }
.spec--skeuomorphism .skx-tr { display: flex; align-items: center; gap: 6px; padding: 4px 7px; border-radius: 5px; border: 1px solid #c2c2c2; background: linear-gradient(#fdfdfd, #eaeaea); box-shadow: inset 0 1px 0 #fff; }
.spec--skeuomorphism .skx-tn { flex: 1 1 0; min-width: 0; font-size: 10px; color: #4a4a4a; text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; color: #3a3a3a; }
.spec--skeuomorphism .skx-ts { font-size: 9px; letter-spacing: .06em; text-transform: uppercase; color: #4f7a2c; }
.spec--skeuomorphism .skx-detail { flex: 1 1 33%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px; border-radius: 9px; border: 1px solid #a5a5a5; background: linear-gradient(#fafafa, #dedede); box-shadow: inset 0 1px 0 #fff, 0 2px 5px rgba(0,0,0,.22); }
.spec--skeuomorphism .skx-dhead { font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #6a6a6a; text-shadow: 0 1px 0 #fff; }
.spec--skeuomorphism .skx-meta { font-size: 10px; color: #4a4a4a; padding: 4px 7px; border-radius: 5px; background: linear-gradient(#c9c9c9, #e4e4e4); box-shadow: inset 0 2px 4px rgba(0,0,0,.4), inset 0 -1px 0 #fff; }
.spec--skeuomorphism .skx-actions { margin-top: auto; display: flex; flex-direction: column; gap: 5px; }
.spec--skeuomorphism .skx-primary { padding: 7px; border-radius: 7px; border: 1px solid #40701f; cursor: pointer; font: 600 11px/1 "Instrument Sans", sans-serif; color: #fff; background: linear-gradient(#96d95c, #5cab25 48%, #3f8a15); box-shadow: inset 0 1px 0 rgba(255,255,255,.75), inset 0 -3px 4px rgba(0,0,0,.22), 0 2px 5px rgba(0,0,0,.3); text-shadow: 0 -1px 0 rgba(0,0,0,.45); }
.spec--skeuomorphism .skx-ghost { padding: 7px; border-radius: 7px; border: 1px solid #a8a8a8; cursor: pointer; font: 600 11px/1 "Instrument Sans", sans-serif; color: #4a4a4a; background: linear-gradient(#f4f4f4, #d6d6d6); box-shadow: inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,.22); text-shadow: 0 1px 0 #fff; }`
};

window.COMPLEX["flat-design"] = {
  html: `<div class="flx-app">
  <div class="flx-top">
    <span class="flx-mark">FLATLIB</span>
    <div class="flx-nav"><span class="flx-navitem on">Library</span><span class="flx-navitem">Recent</span><span class="flx-navitem">Shared</span><span class="flx-navitem">Trash</span></div>
    <span class="flx-user">AR</span>
  </div>
  <div class="flx-body">
  <div class="flx-side">
    <div class="flx-sidehead">Shelves</div>
    <div class="flx-row on"><span class="flx-rl">Photography</span><span class="flx-rv">128</span></div>
    <div class="flx-row"><span class="flx-rl">Type</span><span class="flx-rv">64</span></div>
    <div class="flx-row"><span class="flx-rl">Sound</span><span class="flx-rv">212</span></div>
    <div class="flx-row"><span class="flx-rl">Motion</span><span class="flx-rv">37</span></div>
  </div>
  <div class="flx-main">
    <div class="flx-title">Library</div>
    <div class="flx-stats">
    <div class="flx-stat"><span class="flx-sv">128</span><span class="flx-sk">Tiles</span></div>
    <div class="flx-stat"><span class="flx-sv">12</span><span class="flx-sk">New</span></div>
    <div class="flx-stat"><span class="flx-sv">4</span><span class="flx-sk">Live</span></div>
    </div>
    <div class="flx-table">
    <div class="flx-tr"><span class="flx-tn">Posters</span><span class="flx-tv">64</span><span class="flx-ts">Ready</span></div>
    <div class="flx-tr"><span class="flx-tn">Grids</span><span class="flx-tv">28</span><span class="flx-ts">Draft</span></div>
    <div class="flx-tr"><span class="flx-tn">Icons</span><span class="flx-tv">36</span><span class="flx-ts">Ready</span></div>
    </div>
  </div>
  <div class="flx-detail">
    <div class="flx-dhead">Selection</div>
    <div class="flx-meta">Type &middot; Collection</div>
    <div class="flx-meta">Owner &middot; Studio</div>
    <div class="flx-meta">Items &middot; 64</div>
    <div class="flx-actions">
      <button class="flx-primary" type="button">Open</button>
      <button class="flx-ghost" type="button">Move</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--flat-design .flx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #cfd8dc; border-radius: 3px; background: #ffffff; font-family: "Instrument Sans", sans-serif; color: #263238; }
.spec--flat-design .flx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 12px; height: 38px; padding: 0 14px; background: #1e88e5; }
.spec--flat-design .flx-mark { font-size: 12px; font-weight: 700; letter-spacing: .05em; color: #ffffff; }
.spec--flat-design .flx-nav { display: flex; gap: 2px; }
.spec--flat-design .flx-navitem { font-size: 10px; font-weight: 500; padding: 5px 10px; border-radius: 3px; color: #bbdefb; }
.spec--flat-design .flx-navitem.on { color: #ffffff; background: #1565c0; }
.spec--flat-design .flx-user { margin-left: auto; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 3px; background: #43a047; color: #ffffff; font-size: 10px; font-weight: 700; }
.spec--flat-design .flx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--flat-design .flx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; padding: 12px; border-right: 1px solid #eceff1; background: #fafafa; }
.spec--flat-design .flx-sidehead { font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #90a4ae; margin-bottom: 8px; }
.spec--flat-design .flx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 7px 9px; border-radius: 3px; }
.spec--flat-design .flx-row.on { background: #e53935; }
.spec--flat-design .flx-rl { font-size: 10px; color: #455a64; }
.spec--flat-design .flx-row.on .flx-rl { color: #ffffff; font-weight: 600; }
.spec--flat-design .flx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #90a4ae; }
.spec--flat-design .flx-row.on .flx-rv { color: #ffcdd2; }
.spec--flat-design .flx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 10px; padding: 12px; }
.spec--flat-design .flx-title { font-size: 13px; font-weight: 700; color: #263238; }
.spec--flat-design .flx-stats { display: flex; gap: 8px; }
.spec--flat-design .flx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 9px 10px; border-radius: 3px; background: #f5f5f5; }
.spec--flat-design .flx-stat:nth-child(1) { background: #e53935; }
.spec--flat-design .flx-stat:nth-child(2) { background: #43a047; }
.spec--flat-design .flx-stat:nth-child(3) { background: #fb8c00; }
.spec--flat-design .flx-sv { font: 700 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #ffffff; }
.spec--flat-design .flx-sk { font-size: 9px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: rgba(255,255,255,.85); }
.spec--flat-design .flx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.spec--flat-design .flx-tr { display: flex; align-items: center; gap: 8px; padding: 7px 2px; border-bottom: 1px solid #eceff1; }
.spec--flat-design .flx-tn { flex: 1 1 0; min-width: 0; font-size: 10px; color: #455a64; }
.spec--flat-design .flx-tv { font: 600 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #263238; }
.spec--flat-design .flx-ts { font-size: 9px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #1e88e5; }
.spec--flat-design .flx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 12px; border-left: 1px solid #eceff1; background: #fafafa; }
.spec--flat-design .flx-dhead { font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #90a4ae; margin-bottom: 2px; }
.spec--flat-design .flx-meta { font-size: 10px; color: #546e7a; padding: 6px 8px; border-radius: 3px; background: #eceff1; }
.spec--flat-design .flx-actions { margin-top: auto; display: flex; gap: 7px; }
.spec--flat-design .flx-primary { flex: 1 1 0; padding: 9px 10px; border: 0; border-radius: 3px; cursor: pointer; background: #e53935; font: 600 11px/1 "Instrument Sans", sans-serif; color: #ffffff; }
.spec--flat-design .flx-ghost { flex: 1 1 0; padding: 9px 10px; border: 0; border-radius: 3px; cursor: pointer; background: #1e88e5; font: 600 11px/1 "Instrument Sans", sans-serif; color: #ffffff; }`
};

window.COMPLEX["material-2"] = {
  html: `<div class="mdx-app">
  <div class="mdx-top">
    <span class="mdx-mark">TALLY</span>
    <div class="mdx-nav"><span class="mdx-navitem on">Reports</span><span class="mdx-navitem">Boards</span><span class="mdx-navitem">Archive</span></div>
    <span class="mdx-user">AM</span>
  </div>
  <div class="mdx-body">
  <div class="mdx-side">
    <div class="mdx-sidehead">Sheets</div>
    <div class="mdx-row on"><span class="mdx-rl">Weekly report</span><span class="mdx-rv">12</span></div>
    <div class="mdx-row"><span class="mdx-rl">Costs</span><span class="mdx-rv">08</span></div>
    <div class="mdx-row"><span class="mdx-rl">Headcount</span><span class="mdx-rv">31</span></div>
    <div class="mdx-row"><span class="mdx-rl">Roadmap</span><span class="mdx-rv">24</span></div>
  </div>
  <div class="mdx-main">
    <div class="mdx-title">Weekly report</div>
    <div class="mdx-stats">
    <div class="mdx-stat"><span class="mdx-sv">12</span><span class="mdx-sk">Sheets</span></div>
    <div class="mdx-stat"><span class="mdx-sv">3</span><span class="mdx-sk">Added</span></div>
    <div class="mdx-stat"><span class="mdx-sv">91%</span><span class="mdx-sk">Synced</span></div>
    </div>
    <div class="mdx-table">
    <div class="mdx-tr"><span class="mdx-tn">Revenue</span><span class="mdx-tv">48.2k</span><span class="mdx-ts">Final</span></div>
    <div class="mdx-tr"><span class="mdx-tn">Churn</span><span class="mdx-tv">1.4%</span><span class="mdx-ts">Draft</span></div>
    <div class="mdx-tr"><span class="mdx-tn">Runway</span><span class="mdx-tv">18 mo</span><span class="mdx-ts">Final</span></div>
    </div>
  </div>
  <div class="mdx-detail">
    <div class="mdx-dhead">Sheet</div>
    <div class="mdx-meta">Author &middot; A. Mori</div>
    <div class="mdx-meta">Updated &middot; 08:40</div>
    <div class="mdx-meta">Rows &middot; 512</div>
    <div class="mdx-actions">
      <button class="mdx-primary" type="button">Share</button>
      <button class="mdx-ghost" type="button">Archive</button>
    </div>
  </div>
  </div>
  <button class="mdx-fab" type="button" aria-label="Add">
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="currentColor" stroke="none"/></svg>
  </button>
</div>`,
  css: `.spec--material-2 .mdx-app { position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e0e0e0; background: #fafafa; font-family: Roboto, Arial, "Instrument Sans", sans-serif; color: #212121; }
.spec--material-2 .mdx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 14px; height: 44px; padding: 0 16px; background: #3f51b5; box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12); }
.spec--material-2 .mdx-mark { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #ffffff; }
.spec--material-2 .mdx-nav { display: flex; gap: 4px; }
.spec--material-2 .mdx-navitem { font-size: 10px; font-weight: 500; letter-spacing: .089em; text-transform: uppercase; padding: 6px 11px; border-radius: 4px; color: #c5cae9; }
.spec--material-2 .mdx-navitem.on { color: #ffffff; background: rgba(255,255,255,.14); }
.spec--material-2 .mdx-user { margin-left: auto; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #ff4081; color: #ffffff; font-size: 10px; font-weight: 700; }
.spec--material-2 .mdx-body { flex: 1 1 auto; display: flex; min-height: 0; gap: 12px; padding: 12px; }
.spec--material-2 .mdx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 10px; border-radius: 4px; background: #ffffff; box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.14); }
.spec--material-2 .mdx-sidehead { font-size: 9px; font-weight: 500; letter-spacing: .089em; text-transform: uppercase; color: #9e9e9e; margin-bottom: 4px; }
.spec--material-2 .mdx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 6px 8px; border-radius: 4px; }
.spec--material-2 .mdx-row.on { background: #e8eaf6; }
.spec--material-2 .mdx-rl { font-size: 10px; color: #424242; }
.spec--material-2 .mdx-row.on .mdx-rl { color: #303f9f; font-weight: 500; }
.spec--material-2 .mdx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #757575; }
.spec--material-2 .mdx-main { flex: 1 1 46%; min-width: 0; display: flex; flex-direction: column; gap: 10px; padding: 12px; border-radius: 4px; background: #ffffff; box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12); }
.spec--material-2 .mdx-title { font-size: 13px; font-weight: 500; color: #212121; }
.spec--material-2 .mdx-stats { display: flex; gap: 8px; }
.spec--material-2 .mdx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 9px 10px; border-radius: 4px; background: #ffffff; border-bottom: 3px solid #3f51b5; box-shadow: 0 1px 3px 0 rgba(0,0,0,.12); }
.spec--material-2 .mdx-sv { font: 500 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #212121; }
.spec--material-2 .mdx-sk { font-size: 9px; font-weight: 500; letter-spacing: .089em; text-transform: uppercase; color: #9e9e9e; }
.spec--material-2 .mdx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.spec--material-2 .mdx-tr { display: flex; align-items: center; gap: 8px; padding: 7px 2px; border-bottom: 1px solid #eeeeee; }
.spec--material-2 .mdx-tn { flex: 1 1 0; min-width: 0; font-size: 10px; color: #424242; }
.spec--material-2 .mdx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #212121; }
.spec--material-2 .mdx-ts { font-size: 9px; font-weight: 500; letter-spacing: .089em; text-transform: uppercase; color: #303f9f; }
.spec--material-2 .mdx-detail { flex: 1 1 32%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 10px; border-radius: 4px; background: #ffffff; box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.14); }
.spec--material-2 .mdx-dhead { font-size: 9px; font-weight: 500; letter-spacing: .089em; text-transform: uppercase; color: #9e9e9e; margin-bottom: 4px; }
.spec--material-2 .mdx-meta { font-size: 10px; color: #616161; padding: 6px 8px; border-radius: 4px; background: #f5f5f5; }
.spec--material-2 .mdx-actions { margin-top: auto; display: flex; gap: 8px; justify-content: flex-start; padding-right: 46px; }
.spec--material-2 .mdx-primary { padding: 8px 14px; border: 0; border-radius: 4px; cursor: pointer; background: #3f51b5; font: 500 10px/1 "Instrument Sans", sans-serif; letter-spacing: .089em; text-transform: uppercase; color: #ffffff; box-shadow: 0 1px 3px 0 rgba(0,0,0,.12); }
.spec--material-2 .mdx-ghost { padding: 8px 14px; border: 0; border-radius: 4px; cursor: pointer; background: transparent; font: 500 10px/1 "Instrument Sans", sans-serif; letter-spacing: .089em; text-transform: uppercase; color: #3f51b5; }
.spec--material-2 .mdx-fab { position: absolute; right: 16px; bottom: 14px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border: 0; border-radius: 16px; cursor: pointer; background: #3f51b5; color: #ffffff; box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12); }`
};

window.COMPLEX["material-you"] = {
  html: `<div class="myx-app">
  <div class="myx-top">
    <span class="myx-mark">CADENCE</span>
    <div class="myx-nav"><span class="myx-navitem on">Home</span><span class="myx-navitem">Library</span><span class="myx-navitem">Stats</span></div>
    <span class="myx-user">JM</span>
  </div>
  <div class="myx-body">
  <div class="myx-side">
    <div class="myx-sidehead">Playlists</div>
    <div class="myx-row on"><span class="myx-rl">Daily mix</span><span class="myx-rv">24</span></div>
    <div class="myx-row"><span class="myx-rl">Focus</span><span class="myx-rv">18</span></div>
    <div class="myx-row"><span class="myx-rl">Recent</span><span class="myx-rv">40</span></div>
    <div class="myx-row"><span class="myx-rl">Late</span><span class="myx-rv">12</span></div>
  </div>
  <div class="myx-main">
    <div class="myx-title">Listening</div>
    <div class="myx-stats">
    <div class="myx-stat"><span class="myx-sv">40</span><span class="myx-sk">Tracks</span></div>
    <div class="myx-stat"><span class="myx-sv">6</span><span class="myx-sk">Hours</span></div>
    <div class="myx-stat"><span class="myx-sv">88%</span><span class="myx-sk">Saved</span></div>
    </div>
    <div class="myx-table">
    <div class="myx-tr"><span class="myx-tn">Ambient</span><span class="myx-tv">12</span><span class="myx-ts">Playing</span></div>
    <div class="myx-tr"><span class="myx-tn">Neo soul</span><span class="myx-tv">9</span><span class="myx-ts">Queued</span></div>
    <div class="myx-tr"><span class="myx-tn">Jazz</span><span class="myx-tv">19</span><span class="myx-ts">Saved</span></div>
    </div>
  </div>
  <div class="myx-detail">
    <div class="myx-dhead">Now playing</div>
    <div class="myx-meta">Artist &middot; Low Field</div>
    <div class="myx-meta">Album &middot; Slow Tide</div>
    <div class="myx-meta">Length &middot; 04:12</div>
    <div class="myx-actions">
      <button class="myx-primary" type="button">Play</button>
      <button class="myx-ghost" type="button">Queue</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--material-you .myx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; --seed-p: #006a6a; --seed-c: #9cf1f1; --seed-on-c: #002020; --surface: #f5fafa; border: 1px solid #d3e5e5; border-radius: 24px; background: var(--surface); font-family: "Instrument Sans", sans-serif; color: #191c1c; }
.spec--material-you .myx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 12px; height: 44px; padding: 0 18px; }
.spec--material-you .myx-mark { font-size: 13px; font-weight: 600; letter-spacing: .02em; color: #191c1c; }
.spec--material-you .myx-nav { display: flex; gap: 6px; }
.spec--material-you .myx-navitem { font-size: 10px; font-weight: 500; padding: 6px 12px; border-radius: 999px; color: #3f4949; }
.spec--material-you .myx-navitem.on { background: var(--seed-c); color: var(--seed-on-c); }
.spec--material-you .myx-user { margin-left: auto; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 999px; background: var(--seed-p); color: #ffffff; font-size: 10px; font-weight: 600; }
.spec--material-you .myx-body { flex: 1 1 auto; display: flex; min-height: 0; gap: 12px; padding: 0 18px 18px; }
.spec--material-you .myx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 12px; background: #eaf3f3; border-radius: 16px; }
.spec--material-you .myx-sidehead { font-size: 9px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: #3f4949; margin-bottom: 4px; }
.spec--material-you .myx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 7px 9px; border-radius: 999px; }
.spec--material-you .myx-row.on { background: var(--seed-c); }
.spec--material-you .myx-rl { font-size: 10px; color: #3f4949; }
.spec--material-you .myx-row.on .myx-rl { color: var(--seed-on-c); font-weight: 600; }
.spec--material-you .myx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #3f4949; }
.spec--material-you .myx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 10px; padding: 14px; background: #e2eeee; border-radius: 20px; }
.spec--material-you .myx-title { font-size: 13px; font-weight: 600; color: #191c1c; }
.spec--material-you .myx-stats { display: flex; gap: 8px; }
.spec--material-you .myx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 10px; background: var(--seed-c); border-radius: 14px; }
.spec--material-you .myx-sv { font: 600 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: var(--seed-on-c); }
.spec--material-you .myx-sk { font-size: 9px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: #2b4a4a; }
.spec--material-you .myx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 3px; }
.spec--material-you .myx-tr { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 999px; background: #f5fafa; }
.spec--material-you .myx-tn { flex: 1 1 0; min-width: 0; font-size: 10px; color: #3f4949; }
.spec--material-you .myx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #191c1c; }
.spec--material-you .myx-ts { font-size: 9px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #006a6a; }
.spec--material-you .myx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 12px; background: #eaf3f3; border-radius: 16px; }
.spec--material-you .myx-dhead { font-size: 9px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: #3f4949; margin-bottom: 4px; }
.spec--material-you .myx-meta { font-size: 10px; color: #3f4949; padding: 7px 10px; border-radius: 999px; background: #f5fafa; }
.spec--material-you .myx-actions { margin-top: auto; display: flex; gap: 8px; }
.spec--material-you .myx-primary { flex: 1 1 0; padding: 10px 12px; border: 0; border-radius: 999px; cursor: pointer; background: var(--seed-p); font: 500 11px/1 "Instrument Sans", sans-serif; color: #ffffff; }
.spec--material-you .myx-ghost { flex: 1 1 0; padding: 10px 12px; border: 0; border-radius: 999px; cursor: pointer; background: var(--seed-c); font: 500 11px/1 "Instrument Sans", sans-serif; color: var(--seed-on-c); }`
};

window.COMPLEX["swiss"] = {
  html: `<div class="chx-app">
  <div class="chx-top">
    <span class="chx-mark">GRID</span>
    <div class="chx-nav"><span class="chx-navitem on">Index</span><span class="chx-navitem">Specimen</span><span class="chx-navitem">Grid</span><span class="chx-navitem">Contact</span></div>
    <span class="chx-user">07 / 24</span>
  </div>
  <div class="chx-body">
  <div class="chx-side">
    <div class="chx-sidehead">Columns</div>
    <div class="chx-row on"><span class="chx-rl">Column 1</span><span class="chx-rv">12</span></div>
    <div class="chx-row"><span class="chx-rl">Column 2</span><span class="chx-rv">08</span></div>
    <div class="chx-row"><span class="chx-rl">Column 3</span><span class="chx-rv">04</span></div>
    <div class="chx-row"><span class="chx-rl">Margin</span><span class="chx-rv">16</span></div>
  </div>
  <div class="chx-main">
    <div class="chx-title">Timetable</div>
    <div class="chx-stats">
    <div class="chx-stat"><span class="chx-sv">48</span><span class="chx-sk">Lines</span></div>
    <div class="chx-stat"><span class="chx-sv">12</span><span class="chx-sk">Delays</span></div>
    <div class="chx-stat"><span class="chx-sv">96%</span><span class="chx-sk">On time</span></div>
    </div>
    <div class="chx-table">
    <div class="chx-tr"><span class="chx-tn">Line 01</span><span class="chx-tv">06:12</span><span class="chx-ts">On time</span></div>
    <div class="chx-tr"><span class="chx-tn">Line 02</span><span class="chx-tv">06:24</span><span class="chx-ts">Late</span></div>
    <div class="chx-tr"><span class="chx-tn">Line 03</span><span class="chx-tv">06:40</span><span class="chx-ts">On time</span></div>
    </div>
  </div>
  <div class="chx-detail">
    <div class="chx-dhead">Departure</div>
    <div class="chx-meta">Platform &middot; 4</div>
    <div class="chx-meta">Cars &middot; 8</div>
    <div class="chx-meta">Track &middot; B</div>
    <div class="chx-actions">
      <button class="chx-primary" type="button">Depart</button>
      <button class="chx-ghost" type="button">Hold</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--swiss .chx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #d8d6cf; background: #f4f3ef; font-family: Helvetica, Arial, "Instrument Sans", sans-serif; color: #111111; }
.spec--swiss .chx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 20px; height: 38px; padding: 0 16px; border-bottom: 6px solid #e30613; }
.spec--swiss .chx-mark { font-size: 13px; font-weight: 700; letter-spacing: -.02em; text-transform: uppercase; color: #111111; }
.spec--swiss .chx-nav { display: flex; gap: 16px; }
.spec--swiss .chx-navitem { font-size: 10px; letter-spacing: .02em; color: #111111; padding-bottom: 2px; }
.spec--swiss .chx-navitem.on { font-weight: 700; border-bottom: 3px solid #e30613; }
.spec--swiss .chx-user { margin-left: auto; font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; letter-spacing: .02em; color: #111111; }
.spec--swiss .chx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--swiss .chx-side { flex: 1 1 20%; min-width: 0; display: flex; flex-direction: column; padding: 10px 14px 10px 16px; border-right: 1px solid #111111; }
.spec--swiss .chx-sidehead { font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #111111; margin-bottom: 8px; }
.spec--swiss .chx-row { display: flex; align-items: baseline; justify-content: space-between; gap: 6px; padding: 5px 0; border-top: 1px solid #d4d2cb; }
.spec--swiss .chx-row.on { border-top: 2px solid #e30613; }
.spec--swiss .chx-rl { font-size: 10px; color: #111111; }
.spec--swiss .chx-row.on .chx-rl { font-weight: 700; }
.spec--swiss .chx-rv { font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111111; }
.spec--swiss .chx-main { flex: 1 1 50%; min-width: 0; display: flex; flex-direction: column; gap: 10px; padding: 10px 16px; }
.spec--swiss .chx-title { font-size: 13px; font-weight: 700; letter-spacing: -.02em; text-transform: uppercase; color: #111111; }
.spec--swiss .chx-stats { display: flex; gap: 10px; }
.spec--swiss .chx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; border-top: 1px solid #111111; padding-top: 6px; }
.spec--swiss .chx-stat:first-child { border-top: 6px solid #e30613; }
.spec--swiss .chx-sv { font: 700 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111111; }
.spec--swiss .chx-sk { font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: #555555; }
.spec--swiss .chx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.spec--swiss .chx-tr { display: flex; align-items: baseline; gap: 8px; padding: 6px 0; border-top: 1px solid #111111; }
.spec--swiss .chx-tn { flex: 1 1 0; min-width: 0; font-size: 10px; color: #111111; }
.spec--swiss .chx-tv { font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111111; }
.spec--swiss .chx-ts { font-size: 9px; letter-spacing: .06em; text-transform: uppercase; color: #111111; }
.spec--swiss .chx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 10px 16px 10px 14px; border-left: 1px solid #111111; }
.spec--swiss .chx-dhead { font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #111111; margin-bottom: 4px; }
.spec--swiss .chx-meta { font-size: 10px; color: #111111; padding: 5px 0; border-top: 1px solid #d4d2cb; }
.spec--swiss .chx-actions { margin-top: auto; display: flex; gap: 8px; }
.spec--swiss .chx-primary { flex: 1 1 0; padding: 9px 10px; border: 0; cursor: pointer; background: #e30613; font: 700 11px/1 Helvetica, Arial, "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .04em; color: #ffffff; }
.spec--swiss .chx-ghost { flex: 1 1 0; padding: 9px 10px; border: 1px solid #111111; cursor: pointer; background: transparent; font: 700 11px/1 Helvetica, Arial, "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .04em; color: #111111; }`
};

window.COMPLEX["minimalism"] = {
  html: `<div class="mnx-app">
  <div class="mnx-top">
    <span class="mnx-mark">note</span>
    <div class="mnx-nav"><span class="mnx-navitem on">notes</span><span class="mnx-navitem">index</span><span class="mnx-navitem">about</span><span class="mnx-navitem">search</span></div>
    <span class="mnx-user">oct 11</span>
  </div>
  <div class="mnx-body">
  <div class="mnx-side">
    <div class="mnx-sidehead">Notes</div>
    <div class="mnx-row on"><span class="mnx-rl">Measure</span><span class="mnx-rv">1.85</span></div>
    <div class="mnx-row"><span class="mnx-rl">Leading</span><span class="mnx-rv">62</span></div>
    <div class="mnx-row"><span class="mnx-rl">Hairline</span><span class="mnx-rv">01</span></div>
    <div class="mnx-row"><span class="mnx-rl">Archive</span><span class="mnx-rv">12</span></div>
  </div>
  <div class="mnx-main">
    <div class="mnx-title">Reading</div>
    <div class="mnx-stats">
    <div class="mnx-stat"><span class="mnx-sv">62</span><span class="mnx-sk">chars</span></div>
    <div class="mnx-stat"><span class="mnx-sv">1.85</span><span class="mnx-sk">leading</span></div>
    <div class="mnx-stat"><span class="mnx-sv">2</span><span class="mnx-sk">sizes</span></div>
    </div>
    <div class="mnx-table">
    <div class="mnx-tr"><span class="mnx-tn">Measure</span><span class="mnx-tv">62ch</span><span class="mnx-ts">set</span></div>
    <div class="mnx-tr"><span class="mnx-tn">Leading</span><span class="mnx-tv">1.85</span><span class="mnx-ts">set</span></div>
    <div class="mnx-tr"><span class="mnx-tn">Rule</span><span class="mnx-tv">1px</span><span class="mnx-ts">set</span></div>
    </div>
  </div>
  <div class="mnx-detail">
    <div class="mnx-dhead">Note</div>
    <div class="mnx-meta">Written &middot; today</div>
    <div class="mnx-meta">Words &middot; 412</div>
    <div class="mnx-meta">Read &middot; 3 min</div>
    <div class="mnx-actions">
      <button class="mnx-primary" type="button">Open</button>
      <button class="mnx-ghost" type="button">Archive</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--minimalism .mnx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e4e4e0; background: #fcfcfa; font-family: "Instrument Sans", sans-serif; color: #17181a; }
.spec--minimalism .mnx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 22px; height: 40px; padding: 0 22px; }
.spec--minimalism .mnx-mark { font-size: 12px; letter-spacing: .04em; text-transform: lowercase; color: #17181a; }
.spec--minimalism .mnx-nav { display: flex; gap: 18px; }
.spec--minimalism .mnx-navitem { font-size: 10px; letter-spacing: .08em; text-transform: lowercase; color: #8a8f95; }
.spec--minimalism .mnx-navitem.on { color: #17181a; border-bottom: 1px solid #17181a; padding-bottom: 2px; }
.spec--minimalism .mnx-user { margin-left: auto; font-size: 10px; letter-spacing: .08em; color: #b0b4b8; }
.spec--minimalism .mnx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--minimalism .mnx-side { flex: 1 1 24%; min-width: 0; display: flex; flex-direction: column; padding: 14px 22px 14px 22px; border-right: 1px solid #e4e4e0; }
.spec--minimalism .mnx-sidehead { font-size: 9px; letter-spacing: .12em; text-transform: lowercase; color: #b0b4b8; margin-bottom: 14px; }
.spec--minimalism .mnx-row { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; padding: 8px 0; border-top: 1px solid #e4e4e0; }
.spec--minimalism .mnx-row.on { border-top-color: #17181a; }
.spec--minimalism .mnx-rl { font-size: 11px; color: #6a6f75; }
.spec--minimalism .mnx-row.on .mnx-rl { color: #17181a; }
.spec--minimalism .mnx-rv { font: 400 11px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6a6f75; }
.spec--minimalism .mnx-main { flex: 1 1 46%; min-width: 0; display: flex; flex-direction: column; gap: 22px; padding: 14px 22px; }
.spec--minimalism .mnx-title { font-size: 13px; font-weight: 400; color: #17181a; }
.spec--minimalism .mnx-stats { display: flex; gap: 26px; }
.spec--minimalism .mnx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.spec--minimalism .mnx-sv { font: 400 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #17181a; }
.spec--minimalism .mnx-sk { font-size: 9px; letter-spacing: .1em; text-transform: lowercase; color: #b0b4b8; }
.spec--minimalism .mnx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.spec--minimalism .mnx-tr { display: flex; align-items: baseline; gap: 10px; padding: 8px 0; border-top: 1px solid #e4e4e0; }
.spec--minimalism .mnx-tn { flex: 1 1 0; min-width: 0; font-size: 11px; color: #6a6f75; }
.spec--minimalism .mnx-tv { font: 400 11px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #17181a; }
.spec--minimalism .mnx-ts { font-size: 9px; letter-spacing: .08em; text-transform: lowercase; color: #b0b4b8; }
.spec--minimalism .mnx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 8px; padding: 14px 22px 14px 8px; border-left: 1px solid #e4e4e0; }
.spec--minimalism .mnx-dhead { font-size: 9px; letter-spacing: .12em; text-transform: lowercase; color: #b0b4b8; margin-bottom: 6px; }
.spec--minimalism .mnx-meta { font-size: 11px; color: #8a8f95; padding: 6px 0; border-top: 1px solid #e4e4e0; }
.spec--minimalism .mnx-actions { margin-top: auto; display: flex; flex-direction: column; gap: 10px; }
.spec--minimalism .mnx-primary { padding: 0; border: 0; background: transparent; cursor: pointer; text-align: left; font: 400 12px/1 "Instrument Sans", sans-serif; color: #17181a; text-decoration: underline; text-underline-offset: 4px; }
.spec--minimalism .mnx-ghost { padding: 0; border: 0; background: transparent; cursor: pointer; text-align: left; font: 400 12px/1 "Instrument Sans", sans-serif; color: #b0b4b8; }`
};

window.COMPLEX["editorial"] = {
  html: `<div class="edx-app">
  <div class="edx-top">
    <span class="edx-mark">Ledger</span>
    <div class="edx-nav"><span class="edx-navitem on">Front</span><span class="edx-navitem">Desk</span><span class="edx-navitem">Archive</span><span class="edx-navitem">Notes</span></div>
    <span class="edx-user">No. 48</span>
  </div>
  <div class="edx-body">
  <div class="edx-side">
    <div class="edx-sidehead">Features</div>
    <div class="edx-row on"><span class="edx-rl">The grid</span><span class="edx-rv">18</span></div>
    <div class="edx-row"><span class="edx-rl">On measure</span><span class="edx-rv">12</span></div>
    <div class="edx-row"><span class="edx-rl">Type pair</span><span class="edx-rv">09</span></div>
    <div class="edx-row"><span class="edx-rl">Margins</span><span class="edx-rv">24</span></div>
  </div>
  <div class="edx-main">
    <div class="edx-title">The grid was never the point</div>
    <div class="edx-stats">
    <div class="edx-stat"><span class="edx-sv">48</span><span class="edx-sk">Pieces</span></div>
    <div class="edx-stat"><span class="edx-sv">8</span><span class="edx-sk">Desk</span></div>
    <div class="edx-stat"><span class="edx-sv">16</span><span class="edx-sk">Filed</span></div>
    </div>
    <div class="edx-table">
    <div class="edx-tr"><span class="edx-tn">Standfirst</span><span class="edx-tv">1.5</span><span class="edx-ts">Set</span></div>
    <div class="edx-tr"><span class="edx-tn">Byline</span><span class="edx-tv">Set</span><span class="edx-ts">In</span></div>
    <div class="edx-tr"><span class="edx-tn">Drop cap</span><span class="edx-tv">2.8</span><span class="edx-ts">Lines</span></div>
    </div>
  </div>
  <div class="edx-detail">
    <div class="edx-dhead">Feature</div>
    <div class="edx-meta">By A. Reader</div>
    <div class="edx-meta">Filed &middot; Desk</div>
    <div class="edx-meta">Read &middot; 8 min</div>
    <div class="edx-actions">
      <button class="edx-primary" type="button">Publish</button>
      <button class="edx-ghost" type="button">Hold</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--editorial .edx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #ded7cb; background: #fffdf9; font-family: Georgia, "Times New Roman", serif; color: #1b1a18; }
.spec--editorial .edx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 18px; height: 40px; padding: 0 20px; border-bottom: 2px solid #1b1a18; }
.spec--editorial .edx-mark { font-size: 13px; font-weight: 700; letter-spacing: -.01em; color: #1b1a18; }
.spec--editorial .edx-nav { display: flex; gap: 14px; }
.spec--editorial .edx-navitem { font: 500 9px/1 "Instrument Sans", sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #7c766c; padding-bottom: 2px; }
.spec--editorial .edx-navitem.on { color: #9a5b2c; border-bottom: 2px solid #9a5b2c; }
.spec--editorial .edx-user { margin-left: auto; font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #9a5b2c; }
.spec--editorial .edx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--editorial .edx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; padding: 12px 18px 12px 20px; border-right: 1px solid #ded7cb; }
.spec--editorial .edx-sidehead { font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #9a5b2c; margin-bottom: 10px; }
.spec--editorial .edx-row { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; padding: 7px 0; border-top: 1px solid #ded7cb; }
.spec--editorial .edx-row.on { border-top: 2px solid #9a5b2c; }
.spec--editorial .edx-rl { font-size: 12px; color: #5c5750; }
.spec--editorial .edx-row.on .edx-rl { color: #1b1a18; font-weight: 700; }
.spec--editorial .edx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #7c766c; }
.spec--editorial .edx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 10px; padding: 12px 18px; }
.spec--editorial .edx-title { font-size: 13px; font-weight: 700; line-height: 1.15; letter-spacing: -.01em; color: #1b1a18; }
.spec--editorial .edx-stats { display: flex; gap: 18px; padding-top: 8px; border-top: 1px solid #ded7cb; }
.spec--editorial .edx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.spec--editorial .edx-sv { font: 700 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #9a5b2c; }
.spec--editorial .edx-sk { font: 500 9px/1 "Instrument Sans", sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #7c766c; }
.spec--editorial .edx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.spec--editorial .edx-tr { display: flex; align-items: baseline; gap: 10px; padding: 7px 0; border-top: 1px solid #ded7cb; }
.spec--editorial .edx-tn { flex: 1 1 0; min-width: 0; font-size: 12px; color: #1b1a18; }
.spec--editorial .edx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #5c5750; }
.spec--editorial .edx-ts { font: 500 9px/1 "Instrument Sans", sans-serif; letter-spacing: .08em; text-transform: uppercase; color: #9a5b2c; }
.spec--editorial .edx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 7px; padding: 12px 20px 12px 18px; border-left: 1px solid #ded7cb; }
.spec--editorial .edx-dhead { font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #9a5b2c; margin-bottom: 6px; }
.spec--editorial .edx-meta { font: 500 9px/1 "Instrument Sans", sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #7c766c; padding: 6px 0; border-top: 1px solid #ded7cb; }
.spec--editorial .edx-actions { margin-top: auto; display: flex; gap: 8px; }
.spec--editorial .edx-primary { flex: 1 1 0; padding: 9px 10px; border: 1px solid #9a5b2c; cursor: pointer; background: #9a5b2c; font: 600 11px/1 "Instrument Sans", sans-serif; color: #fffdf9; }
.spec--editorial .edx-ghost { flex: 1 1 0; padding: 9px 10px; border: 1px solid #ded7cb; cursor: pointer; background: transparent; font: 600 11px/1 "Instrument Sans", sans-serif; color: #1b1a18; }`
};

window.COMPLEX["brutalist-web"] = {
  html: `<div class="bwx-app">
  <div class="bwx-top">
    <span class="bwx-mark">Records</span>
    <div class="bwx-nav"><span class="bwx-navitem on">Index</span><span class="bwx-navitem">People</span><span class="bwx-navitem">Files</span></div>
    <span class="bwx-user">raw</span>
  </div>
  <div class="bwx-body">
  <div class="bwx-side">
    <div class="bwx-sidehead">Shelves</div>
    <div class="bwx-row on"><span class="bwx-rl">Deeds</span><span class="bwx-rv">18</span></div>
    <div class="bwx-row"><span class="bwx-rl">Maps</span><span class="bwx-rv">9</span></div>
    <div class="bwx-row"><span class="bwx-rl">Ledgers</span><span class="bwx-rv">24</span></div>
    <div class="bwx-row"><span class="bwx-rl">Letters</span><span class="bwx-rv">6</span></div>
  </div>
  <div class="bwx-main">
    <div class="bwx-title">Register</div>
    <div class="bwx-stats">
    <div class="bwx-stat"><span class="bwx-sv">57</span><span class="bwx-sk">Entries</span></div>
    <div class="bwx-stat"><span class="bwx-sv">3</span><span class="bwx-sk">Open</span></div>
    <div class="bwx-stat"><span class="bwx-sv">2024</span><span class="bwx-sk">Year</span></div>
    </div>
    <div class="bwx-table">
    <div class="bwx-tr"><span class="bwx-tn">Deeds</span><span class="bwx-tv">18</span><span class="bwx-ts">Filed</span></div>
    <div class="bwx-tr"><span class="bwx-tn">Maps</span><span class="bwx-tv">9</span><span class="bwx-ts">Open</span></div>
    <div class="bwx-tr"><span class="bwx-tn">Ledgers</span><span class="bwx-tv">24</span><span class="bwx-ts">Filed</span></div>
    </div>
  </div>
  <div class="bwx-detail">
    <div class="bwx-dhead">Record</div>
    <div class="bwx-meta">Ref &middot; RG-118</div>
    <div class="bwx-meta">Held &middot; Vault 3</div>
    <div class="bwx-meta">Pages &middot; 42</div>
    <div class="bwx-actions">
      <button class="bwx-primary" type="button">Submit</button>
      <button class="bwx-ghost" type="button">Reset</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--brutalist-web .bwx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 2px solid #000000; background: #ffffff; color: #000000; font: 400 12px/1.3 "Times New Roman", Times, serif; }
.spec--brutalist-web .bwx-top { flex: 0 0 auto; display: flex; align-items: baseline; gap: 16px; height: 36px; padding: 0 12px; border-bottom: 1px solid #000000; }
.spec--brutalist-web .bwx-mark { font-size: 13px; font-weight: 700; color: #000000; }
.spec--brutalist-web .bwx-nav { display: flex; gap: 14px; }
.spec--brutalist-web .bwx-navitem { font-size: 11px; color: #0000ee; text-decoration: underline; }
.spec--brutalist-web .bwx-navitem.on { color: #551a8b; }
.spec--brutalist-web .bwx-user { margin-left: auto; font-size: 11px; color: #000000; }
.spec--brutalist-web .bwx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--brutalist-web .bwx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; padding: 8px 12px; border-right: 1px solid #000000; }
.spec--brutalist-web .bwx-sidehead { font-size: 11px; font-weight: 700; margin-bottom: 6px; color: #000000; }
.spec--brutalist-web .bwx-row { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; padding: 4px 0; border-bottom: 1px solid #000000; }
.spec--brutalist-web .bwx-row.on { background: #ffff99; }
.spec--brutalist-web .bwx-rl { font-size: 11px; color: #000000; }
.spec--brutalist-web .bwx-rv { font: 400 11px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #000000; }
.spec--brutalist-web .bwx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 8px; padding: 8px 12px; }
.spec--brutalist-web .bwx-title { font-size: 13px; font-weight: 700; color: #000000; }
.spec--brutalist-web .bwx-stats { display: flex; gap: 8px; }
.spec--brutalist-web .bwx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 5px 7px; border: 1px solid #000000; }
.spec--brutalist-web .bwx-sv { font: 700 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #000000; }
.spec--brutalist-web .bwx-sk { font-size: 10px; color: #000000; }
.spec--brutalist-web .bwx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; border: 1px solid #000000; }
.spec--brutalist-web .bwx-tr { display: flex; align-items: baseline; gap: 8px; padding: 4px 6px; border-bottom: 1px solid #000000; }
.spec--brutalist-web .bwx-tn { flex: 1 1 0; min-width: 0; font-size: 11px; color: #000000; }
.spec--brutalist-web .bwx-tv { font: 400 11px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #000000; }
.spec--brutalist-web .bwx-ts { font-size: 11px; color: #551a8b; }
.spec--brutalist-web .bwx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px 12px; border-left: 1px solid #000000; }
.spec--brutalist-web .bwx-dhead { font-size: 11px; font-weight: 700; margin-bottom: 4px; color: #000000; }
.spec--brutalist-web .bwx-meta { font-size: 11px; color: #000000; padding: 3px 0; border-bottom: 1px dotted #000000; }
.spec--brutalist-web .bwx-actions { margin-top: auto; display: flex; gap: 8px; }
.spec--brutalist-web .bwx-primary { flex: 1 1 0; padding: 3px 8px; cursor: pointer; background: #efefef; border: 2px outset #b3b3b3; font: 400 11px/1 Arial, "Instrument Sans", sans-serif; color: #000000; }
.spec--brutalist-web .bwx-ghost { flex: 1 1 0; padding: 3px 8px; cursor: pointer; background: #efefef; border: 2px outset #b3b3b3; font: 400 11px/1 Arial, "Instrument Sans", sans-serif; color: #000000; }`
};

window.COMPLEX["fluent-design"] = {
  html: `<div class="flx-app">
    <div class="flx-top">
      <span class="flx-mark">Nimbus</span>
      <span class="flx-nav"><i class="on">Builds</i><i>Pipeline</i><i>Library</i><i>Team</i></span>
      <span class="flx-user"><span class="flx-dot"></span>Live<span class="flx-badge">AK</span></span>
    </div>
    <div class="flx-body">
      <div class="flx-pane flx-side">
        <p class="flx-head">Artifacts</p>
        <div class="flx-row"><span>Web client</span><span class="v">v4.2</span></div>
        <div class="flx-row"><span>Service core</span><span class="v">v2.8</span></div>
        <div class="flx-row on"><span>Kernel SDK</span><span class="v">v3.1</span></div>
        <div class="flx-row"><span>Docs site</span><span class="v">v1.9</span></div>
      </div>
      <div class="flx-pane flx-main">
        <p class="flx-title">Build pipeline</p>
        <div class="flx-stats">
          <span class="flx-stat"><b>128</b><span>succeeded</span></span>
          <span class="flx-stat"><b>4</b><span>running</span></span>
          <span class="flx-stat"><b>2</b><span>failed</span></span>
        </div>
        <div class="flx-tr"><span class="n">web-client</span><span class="t">4m 12s</span><span class="s">passing</span></div>
        <div class="flx-tr"><span class="n">kernel-sdk</span><span class="t">7m 40s</span><span class="s run">running</span></div>
        <div class="flx-tr"><span class="n">docs-site</span><span class="t">—</span><span class="s wait">queued</span></div>
      </div>
      <div class="flx-pane flx-detail">
        <p class="flx-head">Selected build</p>
        <div class="flx-meta"><span>web-client #4182</span></div>
        <div class="flx-meta"><span>branch main</span></div>
        <div class="flx-meta"><span>triggered 2m ago</span></div>
        <div class="flx-btns">
          <button class="flx-btn" type="button">Open log</button>
          <button class="flx-btn2" type="button">Rerun</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--fluent-design .flx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  border-radius: 10px; color: #fff; font-family: "Instrument Sans", sans-serif;
  background: radial-gradient(250px 210px at 0% 0%, rgba(47,111,208,.52), transparent 72%), radial-gradient(260px 220px at 100% 110%, rgba(138,63,176,.44), transparent 72%), #1c2230;
  box-shadow: 0 16px 28px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.1);
}
.spec--fluent-design .flx-top {
  display: flex; align-items: center; gap: 10px; flex: none; height: 36px; padding: 0 12px;
  border-bottom: 1px solid rgba(255,255,255,.08);
  background: rgba(40,46,60,.55);
  backdrop-filter: blur(30px) saturate(125%); -webkit-backdrop-filter: blur(30px) saturate(125%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
}
.spec--fluent-design .flx-mark { font: 600 12px/1 "Instrument Sans", sans-serif; letter-spacing: .02em; color: #fff; }
.spec--fluent-design .flx-nav { display: flex; gap: 3px; margin-left: 4px; }
.spec--fluent-design .flx-nav i { font-style: normal; font-size: 11px; padding: 5px 9px; border-radius: 4px; color: #b9c1d0; }
.spec--fluent-design .flx-nav .on { background: #2f6fd0; color: #fff; box-shadow: inset 0 1px 0 rgba(255,255,255,.22); }
.spec--fluent-design .flx-user { margin-left: auto; display: flex; align-items: center; gap: 6px; font-size: 10px; color: #b9c1d0; }
.spec--fluent-design .flx-dot { width: 6px; height: 6px; border-radius: 50%; background: #3fbf6f; }
.spec--fluent-design .flx-badge { width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,.16); color: #fff; font: 600 10px/22px "Instrument Sans", sans-serif; text-align: center; }
.spec--fluent-design .flx-body { display: flex; flex: 1; min-height: 0; gap: 10px; padding: 10px; }
.spec--fluent-design .flx-pane {
  min-width: 0; display: flex; flex-direction: column; padding: 8px 10px; border-radius: 8px;
  background: rgba(40,46,60,.5); border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(30px) saturate(125%); -webkit-backdrop-filter: blur(30px) saturate(125%);
  box-shadow: 0 8px 16px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.1);
}
.spec--fluent-design .flx-side { flex: 0 0 26%; }
.spec--fluent-design .flx-main { flex: 1 1 auto; }
.spec--fluent-design .flx-detail { flex: 0 0 27%; }
.spec--fluent-design .flx-head { margin: 0 0 6px; font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #8f9bb0; }
.spec--fluent-design .flx-row { display: flex; align-items: center; gap: 6px; padding: 5px 6px; border-radius: 4px; font-size: 10px; color: #d4dae6; }
.spec--fluent-design .flx-row .v { margin-left: auto; font: 500 9.5px/1 "IBM Plex Mono", monospace; color: #9aa6bb; font-variant-numeric: tabular-nums; }
.spec--fluent-design .flx-row.on { background: rgba(47,111,208,.34); color: #fff; box-shadow: inset 0 1px 0 rgba(255,255,255,.14); }
.spec--fluent-design .flx-title { margin: 0; font: 600 13px/1 "Instrument Sans", sans-serif; color: #fff; }
.spec--fluent-design .flx-stats { display: flex; gap: 8px; margin: 9px 0; }
.spec--fluent-design .flx-stat { flex: 1; min-width: 0; padding: 6px 8px; border-radius: 8px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); }
.spec--fluent-design .flx-stat b { display: block; font: 600 14px/1.1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #7fb0ff; }
.spec--fluent-design .flx-stat span { font-size: 9px; color: #9aa6bb; }
.spec--fluent-design .flx-tr { display: flex; align-items: center; gap: 8px; padding: 5px 6px; border-top: 1px solid rgba(255,255,255,.07); font-size: 10px; color: #d4dae6; }
.spec--fluent-design .flx-tr .n { flex: 1; min-width: 0; }
.spec--fluent-design .flx-tr .t { font: 500 9.5px/1 "IBM Plex Mono", monospace; color: #9aa6bb; font-variant-numeric: tabular-nums; }
.spec--fluent-design .flx-tr .s { font-size: 9px; padding: 2px 6px; border-radius: 4px; background: rgba(63,191,111,.18); color: #7fe0a4; }
.spec--fluent-design .flx-tr .s.run { background: rgba(47,111,208,.28); color: #9cc3ff; }
.spec--fluent-design .flx-tr .s.wait { background: rgba(255,255,255,.1); color: #c0c8d6; }
.spec--fluent-design .flx-meta { padding: 4px 0; font-size: 10px; color: #c3cad8; border-bottom: 1px solid rgba(255,255,255,.07); }
.spec--fluent-design .flx-btns { margin-top: auto; display: flex; gap: 6px; }
.spec--fluent-design .flx-btn { flex: 1; cursor: pointer; border: 1px solid rgba(255,255,255,.18); border-radius: 4px; padding: 7px 8px; background: #2f6fd0; color: #fff; font: 600 10.5px/1 "Instrument Sans", sans-serif; box-shadow: inset 0 1px 0 rgba(255,255,255,.22); }
.spec--fluent-design .flx-btn2 { flex: 1; cursor: pointer; border: 1px solid rgba(255,255,255,.2); border-radius: 4px; padding: 7px 8px; background: rgba(255,255,255,.06); color: #d4dae6; font: 600 10.5px/1 "Instrument Sans", sans-serif; }`
};

window.COMPLEX["ios-human-interface"] = {
  html: `<div class="hix-app">
    <div class="hix-top">
      <span class="hix-mark">Daybook</span>
      <span class="hix-nav"><i class="on">Library</i><i>Shared</i><i>Trash</i></span>
      <span class="hix-user"><button class="hix-done" type="button">Edit</button></span>
    </div>
    <div class="hix-body">
      <div class="hix-pane hix-side">
        <p class="hix-head">Folders</p>
        <div class="hix-row"><span>Inbox</span><span class="hix-c">12</span></div>
        <div class="hix-row"><span>Drafts</span><span class="hix-c">4</span></div>
        <div class="hix-row on"><span>Teams</span><span class="hix-c">6</span></div>
        <div class="hix-row"><span>Archive</span><span class="hix-c">88</span></div>
      </div>
      <div class="hix-pane hix-main">
        <p class="hix-title">Files</p>
        <div class="hix-stats">
          <span class="hix-stat"><b>46</b><span>items</span></span>
          <span class="hix-stat"><b>8</b><span>shared</span></span>
          <span class="hix-stat"><b>1.2</b><span>gb used</span></span>
        </div>
        <div class="hix-tr"><span class="hix-n">Q3 report</span><span class="hix-v">2.4 MB</span><span class="hix-s">synced</span></div>
        <div class="hix-tr"><span class="hix-n">Team notes</span><span class="hix-v">18 KB</span><span class="hix-s">shared</span></div>
        <div class="hix-tr"><span class="hix-n">Invoice 118</span><span class="hix-v">640 KB</span><span class="hix-s off">local</span></div>
      </div>
      <div class="hix-pane hix-detail">
        <p class="hix-head">Details</p>
        <div class="hix-meta"><span>Modified today</span></div>
        <div class="hix-meta"><span>Owner: you</span></div>
        <div class="hix-meta"><span>Shared folder</span></div>
        <div class="hix-btns">
          <button class="hix-btn" type="button">Share</button>
          <button class="hix-btn2" type="button">Move</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--ios-human-interface .hix-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  border-radius: 18px; background: #f2f2f7; color: #1c1c1e;
  font-family: -apple-system, "Instrument Sans", sans-serif;
  box-shadow: inset 0 0 0 1px rgba(60,60,67,.14);
}
.spec--ios-human-interface .hix-top {
  display: flex; align-items: center; gap: 10px; flex: none; height: 44px; padding: 0 14px;
  border-bottom: 0.5px solid rgba(60,60,67,.29);
  background: rgba(242,242,247,.82); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);
}
.spec--ios-human-interface .hix-mark { font: 700 15px/1 -apple-system, "Instrument Sans", sans-serif; letter-spacing: -0.02em; color: #1c1c1e; }
.spec--ios-human-interface .hix-nav { display: flex; gap: 2px; margin-left: 4px; }
.spec--ios-human-interface .hix-nav i { font-style: normal; font-size: 13px; padding: 4px 9px; border-radius: 8px; color: #3c3c43; }
.spec--ios-human-interface .hix-nav .on { background: #e9e9eb; font-weight: 600; color: #1c1c1e; }
.spec--ios-human-interface .hix-user { margin-left: auto; }
.spec--ios-human-interface .hix-done { border: 0; background: none; font: 600 14px/1 inherit; color: #0a84ff; cursor: pointer; }
.spec--ios-human-interface .hix-body { display: flex; flex: 1; min-height: 0; gap: 10px; padding: 10px 12px; }
.spec--ios-human-interface .hix-pane { min-width: 0; display: flex; flex-direction: column; padding: 6px 10px; border-radius: 12px; background: #fff; }
.spec--ios-human-interface .hix-side { flex: 0 0 27%; }
.spec--ios-human-interface .hix-main { flex: 1 1 auto; }
.spec--ios-human-interface .hix-detail { flex: 0 0 28%; }
.spec--ios-human-interface .hix-head { margin: 0 0 2px; padding: 6px 0 4px; font: 400 13px/1 -apple-system, "Instrument Sans", sans-serif; color: #6c6c70; }
.spec--ios-human-interface .hix-row { display: flex; align-items: center; gap: 6px; padding: 6px 8px; border-radius: 8px; font-size: 12.5px; color: #1c1c1e; box-shadow: inset 0 -0.5px 0 rgba(60,60,67,.29); }
.spec--ios-human-interface .hix-row .hix-c { margin-left: auto; font: 400 12px/1 -apple-system, "Instrument Sans", sans-serif; color: #8e8e93; font-variant-numeric: tabular-nums; }
.spec--ios-human-interface .hix-row.on { background: #eef4ff; color: #0a84ff; box-shadow: none; }
.spec--ios-human-interface .hix-title { margin: 0; font: 700 13px/1 -apple-system, "Instrument Sans", sans-serif; letter-spacing: -0.01em; color: #1c1c1e; }
.spec--ios-human-interface .hix-stats { display: flex; gap: 8px; margin: 8px 0; }
.spec--ios-human-interface .hix-stat { flex: 1; min-width: 0; padding: 6px 8px; border-radius: 10px; background: #f2f2f7; }
.spec--ios-human-interface .hix-stat b { display: block; font: 600 14px/1.1 -apple-system, "Instrument Sans", sans-serif; font-variant-numeric: tabular-nums; color: #0a84ff; }
.spec--ios-human-interface .hix-stat span { font-size: 9.5px; color: #8e8e93; }
.spec--ios-human-interface .hix-tr { display: flex; align-items: center; gap: 8px; padding: 6px 4px; font-size: 12px; color: #1c1c1e; box-shadow: inset 0 0.5px 0 rgba(60,60,67,.29); }
.spec--ios-human-interface .hix-tr .hix-n { flex: 1; min-width: 0; }
.spec--ios-human-interface .hix-tr .hix-v { font: 400 11px/1 -apple-system, "Instrument Sans", sans-serif; color: #8e8e93; font-variant-numeric: tabular-nums; }
.spec--ios-human-interface .hix-tr .hix-s { font-size: 9.5px; padding: 2px 6px; border-radius: 6px; background: #e7f7ec; color: #248a3d; }
.spec--ios-human-interface .hix-tr .hix-s.off { background: #f2f2f7; color: #8e8e93; }
.spec--ios-human-interface .hix-meta { padding: 5px 0; font-size: 12px; color: #3c3c43; box-shadow: inset 0 -0.5px 0 rgba(60,60,67,.29); }
.spec--ios-human-interface .hix-btns { margin-top: auto; display: flex; gap: 6px; }
.spec--ios-human-interface .hix-btn { flex: 1; cursor: pointer; border: 0; border-radius: 999px; padding: 8px; background: #0a84ff; color: #fff; font: 600 11.5px/1 inherit; }
.spec--ios-human-interface .hix-btn2 { flex: 1; cursor: pointer; border: 0; border-radius: 999px; padding: 8px; background: #e9e9eb; color: #0a84ff; font: 600 11.5px/1 inherit; }`
};

window.COMPLEX["art-deco"] = {
  html: `<div class="adx-app">
    <span class="adx-ray"></span>
    <div class="adx-top">
      <span class="adx-mark">The Meridian</span>
      <span class="adx-nav"><i class="on">Rooms</i><i>Dining</i><i>Ballroom</i><i>Guests</i></span>
      <span class="adx-user">Concierge<b>Open</b></span>
    </div>
    <div class="adx-body">
      <div class="adx-pane adx-side">
        <p class="adx-head">Suites</p>
        <div class="adx-row"><span>Deluxe</span><span class="v">4 left</span></div>
        <div class="adx-row"><span>Grand</span><span class="v">2 left</span></div>
        <div class="adx-row on"><span>Regal</span><span class="v">1 left</span></div>
        <div class="adx-row"><span>Terrace</span><span class="v">6 left</span></div>
      </div>
      <div class="adx-pane adx-main">
        <p class="adx-title">Reservations</p>
        <div class="adx-stats">
          <span class="adx-stat"><b>24</b><span>arrivals</span></span>
          <span class="adx-stat"><b>18</b><span>turnover</span></span>
          <span class="adx-stat"><b>92%</b><span>occupancy</span></span>
        </div>
        <div class="adx-tr"><span class="n">Regal Suite</span><span class="m">N° 701</span><span class="s">confirmed</span></div>
        <div class="adx-tr"><span class="n">Grand Suite</span><span class="m">N° 512</span><span class="s wait">pending</span></div>
        <div class="adx-tr"><span class="n">Deluxe Room</span><span class="m">N° 208</span><span class="s">confirmed</span></div>
      </div>
      <div class="adx-pane adx-detail">
        <p class="adx-head">Tonight</p>
        <div class="adx-meta"><span>Suite N° 701</span></div>
        <div class="adx-meta"><span>Guest: A. Voss</span></div>
        <div class="adx-meta"><span>Dinner 20:00</span></div>
        <div class="adx-btns">
          <button class="adx-btn" type="button">Check in</button>
          <button class="adx-btn2" type="button">Ledger</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--art-deco .adx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #10151f; color: #e8c884; font-family: Georgia, "Times New Roman", serif;
  border: 1px solid #a8823c;
  box-shadow: inset 0 0 0 4px #10151f, inset 0 0 0 5px #7a5f28;
}
.spec--art-deco .adx-ray {
  position: absolute; left: 0; right: 0; top: -60%; height: 150%; pointer-events: none;
  background: repeating-conic-gradient(from 0deg at 50% 0%, rgba(232,200,132,.1) 0 4deg, transparent 4deg 12deg);
}
.spec--art-deco .adx-top {
  position: relative; display: flex; align-items: center; gap: 12px; flex: none; height: 38px; padding: 0 16px;
  border-bottom: 1px solid #7a5f28;
}
.spec--art-deco .adx-mark {
  font: 700 13px/1 Georgia, serif; letter-spacing: .28em; text-transform: uppercase;
  background: linear-gradient(#f6e3b0, #c39a45 55%, #8f6d25); -webkit-background-clip: text; background-clip: text; color: transparent;
}
.spec--art-deco .adx-nav { display: flex; gap: 10px; margin-left: 8px; }
.spec--art-deco .adx-nav i { font-style: normal; font: 600 10px/1 "Instrument Sans", sans-serif; letter-spacing: .22em; text-transform: uppercase; color: #9a8b6a; }
.spec--art-deco .adx-nav .on { color: #e8c884; }
.spec--art-deco .adx-user { margin-left: auto; display: flex; align-items: center; gap: 8px; font: 500 9.5px/1 "Instrument Sans", sans-serif; letter-spacing: .2em; text-transform: uppercase; color: #9a8b6a; }
.spec--art-deco .adx-user b { font: 700 9px/1 "Instrument Sans", sans-serif; letter-spacing: .2em; padding: 4px 7px; border: 1px solid #a8823c; color: #e8c884; }
.spec--art-deco .adx-body { position: relative; display: flex; flex: 1; min-height: 0; gap: 8px; padding: 10px 16px; }
.spec--art-deco .adx-pane { min-width: 0; display: flex; flex-direction: column; padding: 8px 10px; background: rgba(16,21,31,.62); border: 1px solid #7a5f28; box-shadow: inset 0 0 0 2px #10151f; }
.spec--art-deco .adx-side { flex: 0 0 25%; }
.spec--art-deco .adx-main { flex: 1 1 auto; }
.spec--art-deco .adx-detail { flex: 0 0 27%; }
.spec--art-deco .adx-head { margin: 0 0 6px; padding-bottom: 4px; border-bottom: 1px solid #7a5f28; font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .34em; text-transform: uppercase; color: #cbb072; }
.spec--art-deco .adx-row { display: flex; align-items: center; gap: 6px; padding: 5px 2px; font: 400 11px/1 "Instrument Sans", sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #b9a877; }
.spec--art-deco .adx-row .v { margin-left: auto; font: 500 9.5px/1 "IBM Plex Mono", monospace; letter-spacing: .06em; color: #9a8b6a; font-variant-numeric: tabular-nums; }
.spec--art-deco .adx-row.on { color: #e8c884; border-left: 2px solid #c39a45; padding-left: 6px; }
.spec--art-deco .adx-title { margin: 0; font: 700 13px/1 Georgia, serif; letter-spacing: .24em; text-transform: uppercase; color: #e8c884; }
.spec--art-deco .adx-stats { display: flex; gap: 6px; margin: 9px 0; }
.spec--art-deco .adx-stat { flex: 1; min-width: 0; padding: 6px 8px; text-align: center; border: 1px solid #7a5f28; box-shadow: inset 0 0 0 2px #10151f; }
.spec--art-deco .adx-stat b { display: block; font: 700 15px/1.1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; background: linear-gradient(#f6e3b0, #c39a45 55%, #8f6d25); -webkit-background-clip: text; background-clip: text; color: transparent; }
.spec--art-deco .adx-stat span { font: 500 8.5px/1 "Instrument Sans", sans-serif; letter-spacing: .22em; text-transform: uppercase; color: #9a8b6a; }
.spec--art-deco .adx-tr { display: flex; align-items: center; gap: 8px; padding: 5px 2px; border-top: 1px solid #3d3316; font: 400 11px/1 "Instrument Sans", sans-serif; letter-spacing: .08em; text-transform: uppercase; color: #cbb072; }
.spec--art-deco .adx-tr .n { flex: 1; min-width: 0; }
.spec--art-deco .adx-tr .m { font: 500 9.5px/1 "IBM Plex Mono", monospace; color: #9a8b6a; font-variant-numeric: tabular-nums; }
.spec--art-deco .adx-tr .s { font: 600 8.5px/1 "Instrument Sans", sans-serif; letter-spacing: .18em; padding: 3px 6px; border: 1px solid #8f6d25; color: #e8c884; }
.spec--art-deco .adx-tr .s.wait { border-color: #6b5b33; color: #9a8b6a; }
.spec--art-deco .adx-meta { padding: 5px 0; border-bottom: 1px solid #3d3316; font: 400 10px/1.3 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #b9a877; }
.spec--art-deco .adx-btns { margin-top: auto; display: flex; gap: 6px; }
.spec--art-deco .adx-btn { flex: 1; cursor: pointer; padding: 8px; border: 1px solid #c39a45; background: #10151f; font: 600 10px/1 "Instrument Sans", sans-serif; letter-spacing: .2em; text-transform: uppercase; background-image: linear-gradient(#f6e3b0, #c39a45 55%, #8f6d25); -webkit-background-clip: text; background-clip: text; color: transparent; }
.spec--art-deco .adx-btn2 { flex: 1; cursor: pointer; padding: 8px; border: 1px solid #7a5f28; background: none; color: #9a8b6a; font: 600 10px/1 "Instrument Sans", sans-serif; letter-spacing: .2em; text-transform: uppercase; }`
};

window.COMPLEX["grunge"] = {
  html: `<div class="grx-app">
    <span class="grx-grain"></span>
    <div class="grx-top">
      <span class="grx-mark">Riot Season</span>
      <span class="grx-nav"><i class="on">Dates</i><i>Press</i><i>Merch</i><i>Crew</i></span>
      <span class="grx-user">N° 07</span>
    </div>
    <div class="grx-body">
      <div class="grx-pane grx-side">
        <p class="grx-head">Stops</p>
        <div class="grx-row"><span>Baltimore</span><span class="v">06.11</span></div>
        <div class="grx-row"><span>Philly</span><span class="v">06.14</span></div>
        <div class="grx-row on"><span>Brooklyn</span><span class="v">06.22</span></div>
        <div class="grx-row"><span>Jersey</span><span class="v">06.18</span></div>
      </div>
      <div class="grx-pane grx-main">
        <p class="grx-title">Tonight</p>
        <div class="grx-stats">
          <span class="grx-stat"><b>20:00</b><span>doors</span></span>
          <span class="grx-stat"><b>1200</b><span>cap</span></span>
          <span class="grx-stat"><b>988</b><span>sold</span></span>
        </div>
        <div class="grx-tr"><span class="n">Brooklyn</span><span class="m">06.22</span><span class="s">sold out</span></div>
        <div class="grx-tr"><span class="n">Jersey</span><span class="m">06.18</span><span class="s live">on sale</span></div>
        <div class="grx-tr"><span class="n">Philly</span><span class="m">06.14</span><span class="s wait">hold</span></div>
      </div>
      <div class="grx-pane grx-detail">
        <p class="grx-head">Load in</p>
        <div class="grx-meta"><span>Warehouse 9</span></div>
        <div class="grx-meta"><span>Crew 14</span></div>
        <div class="grx-meta"><span>Doors 20:00</span></div>
        <div class="grx-btns">
          <button class="grx-btn" type="button">Print set</button>
          <button class="grx-btn2" type="button">Mark paid</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--grunge .grx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #1a1817; color: #ddd6cc; font-family: "Instrument Sans", sans-serif; border: 1px solid #2a2725;
}
.spec--grunge .grx-grain {
  position: absolute; inset: 0; opacity: .5; mix-blend-mode: overlay; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
}
.spec--grunge .grx-top {
  position: relative; display: flex; align-items: center; gap: 12px; flex: none; height: 36px; padding: 0 12px;
  border-bottom: 1px dashed #4a4642;
}
.spec--grunge .grx-mark { font: 800 13px/1 "Instrument Sans", sans-serif; letter-spacing: -0.02em; text-transform: uppercase; text-shadow: 2px 0 0 #b23a2e, -2px 0 0 #4a7d78; color: #ddd6cc; }
.spec--grunge .grx-nav { display: flex; gap: 5px; margin-left: 6px; }
.spec--grunge .grx-nav i { font-style: normal; font: 600 10px/1 "IBM Plex Mono", monospace; letter-spacing: .14em; text-transform: uppercase; padding: 4px 7px; color: #8f8880; }
.spec--grunge .grx-nav .on { color: #ddd6cc; border-bottom: 2px solid #b23a2e; }
.spec--grunge .grx-user { margin-left: auto; font: 700 10px/1 "IBM Plex Mono", monospace; letter-spacing: .3em; color: #b23a2e; }
.spec--grunge .grx-body { position: relative; display: flex; flex: 1; min-height: 0; gap: 8px; padding: 10px 12px; }
.spec--grunge .grx-pane { min-width: 0; display: flex; flex-direction: column; padding: 8px 10px; background: rgba(26,24,23,.72); border: 1px solid #2a2725; }
.spec--grunge .grx-side { flex: 0 0 25%; }
.spec--grunge .grx-main { flex: 1 1 auto; }
.spec--grunge .grx-detail { flex: 0 0 27%; }
.spec--grunge .grx-head { margin: 0 0 6px; padding-bottom: 4px; border-bottom: 1px dashed #4a4642; font: 700 9px/1 "IBM Plex Mono", monospace; letter-spacing: .3em; text-transform: uppercase; color: #8f8880; }
.spec--grunge .grx-row { display: flex; align-items: center; gap: 6px; padding: 5px 4px; font: 600 11px/1 "Instrument Sans", sans-serif; text-transform: uppercase; color: #b3aca2; }
.spec--grunge .grx-row .v { margin-left: auto; font: 500 9.5px/1 "IBM Plex Mono", monospace; letter-spacing: .08em; color: #8f8880; font-variant-numeric: tabular-nums; }
.spec--grunge .grx-row.on { background: #242120; color: #ddd6cc; text-shadow: 1px 0 0 #b23a2e; }
.spec--grunge .grx-title { margin: 0; font: 800 14px/1 "Instrument Sans", sans-serif; letter-spacing: -0.01em; text-transform: uppercase; text-shadow: 2px 0 0 #b23a2e, -2px 0 0 #4a7d78; color: #ddd6cc; }
.spec--grunge .grx-stats { display: flex; gap: 6px; margin: 9px 0; }
.spec--grunge .grx-stat { flex: 1; min-width: 0; padding: 6px 8px; background: #211e1d; border: 1px solid #2f2b29; }
.spec--grunge .grx-stat b { display: block; font: 600 14px/1.1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #c9c2b6; }
.spec--grunge .grx-stat span { font: 600 8.5px/1 "IBM Plex Mono", monospace; letter-spacing: .2em; text-transform: uppercase; color: #8f8880; }
.spec--grunge .grx-tr { display: flex; align-items: center; gap: 8px; padding: 5px 4px; border-top: 1px dashed #3b3735; font: 600 11px/1 "Instrument Sans", sans-serif; text-transform: uppercase; color: #b3aca2; }
.spec--grunge .grx-tr .n { flex: 1; min-width: 0; }
.spec--grunge .grx-tr .m { font: 500 9.5px/1 "IBM Plex Mono", monospace; color: #8f8880; font-variant-numeric: tabular-nums; }
.spec--grunge .grx-tr .s { font: 700 8.5px/1 "IBM Plex Mono", monospace; letter-spacing: .16em; padding: 3px 6px; border: 1px solid #4a4642; color: #ddd6cc; }
.spec--grunge .grx-tr .s.live { color: #b23a2e; border-color: #b23a2e; }
.spec--grunge .grx-tr .s.wait { color: #4a7d78; border-color: #4a7d78; }
.spec--grunge .grx-meta { padding: 5px 0; border-bottom: 1px dashed #3b3735; font: 500 10.5px/1.3 "IBM Plex Mono", monospace; color: #a49d93; }
.spec--grunge .grx-btns { margin-top: auto; display: flex; gap: 6px; }
.spec--grunge .grx-btn { flex: 1; cursor: pointer; padding: 8px; border: 1px solid #b23a2e; background: #b23a2e; color: #1a1817; font: 700 10px/1 "IBM Plex Mono", monospace; letter-spacing: .12em; text-transform: uppercase; }
.spec--grunge .grx-btn2 { flex: 1; cursor: pointer; padding: 8px; border: 1px dashed #4a4642; background: none; color: #ddd6cc; font: 700 10px/1 "IBM Plex Mono", monospace; letter-spacing: .12em; text-transform: uppercase; }`
};

window.COMPLEX["neumorphism"] = {
  html: `<div class="nux-app">
    <header class="nux-top">
      <span class="nux-mark">Softform</span>
      <nav class="nux-nav">
        <span class="nux-navitem on">Panel</span>
        <span class="nux-navitem">Dial</span>
        <span class="nux-navitem">Well</span>
      </nav>
      <span class="nux-user">AL</span>
    </header>
    <div class="nux-body">
      <aside class="nux-side">
        <div class="nux-head">Channels</div>
        <div class="nux-row on"><span>Dial</span><span class="nux-val">58%</span></div>
        <div class="nux-row"><span>Well</span><span class="nux-val">72%</span></div>
        <div class="nux-row"><span>Tint</span><span class="nux-val">12%</span></div>
        <div class="nux-row"><span>Depth</span><span class="nux-val">9px</span></div>
      </aside>
      <main class="nux-main">
        <div class="nux-title">Surface</div>
        <div class="nux-stats">
          <div class="nux-stat"><span class="nux-k">Raised</span><span class="nux-n">24</span></div>
          <div class="nux-stat"><span class="nux-k">Pressed</span><span class="nux-n">8</span></div>
          <div class="nux-stat"><span class="nux-k">Radius</span><span class="nux-n">26</span></div>
        </div>
        <div class="nux-table">
          <div class="nux-tr"><span>Dial</span><span>58%</span><span>Live</span></div>
          <div class="nux-tr"><span>Well</span><span>72%</span><span>Idle</span></div>
          <div class="nux-tr"><span>Track</span><span>34%</span><span>Held</span></div>
        </div>
      </main>
      <aside class="nux-detail">
        <div class="nux-head">Selection</div>
        <div class="nux-meta"><span>Radius</span><span>26px</span></div>
        <div class="nux-meta"><span>Offset</span><span>9px</span></div>
        <div class="nux-meta"><span>State</span><span>Raised</span></div>
        <div class="nux-btns">
          <button class="nux-btn p" type="button">Apply</button>
          <button class="nux-btn s" type="button">Revert</button>
        </div>
      </aside>
    </div>
  </div>`,
  css: `.spec--neumorphism .nux-app {
  box-sizing: border-box; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  gap: 10px; padding: 12px; overflow: hidden; background: #e0e5ec;
}
.spec--neumorphism .nux-app * {
  box-sizing: border-box;
}
.spec--neumorphism .nux-top {
  display: flex; align-items: center; gap: 10px; height: 36px; padding: 0 14px;
  border-radius: 14px; background: #e0e5ec;
  box-shadow: 5px 5px 10px #c3c9d6, -5px -5px 10px #ffffff;
}
.spec--neumorphism .nux-mark {
  font: 600 12px/1 "Instrument Sans", sans-serif; color: #4a5568;
}
.spec--neumorphism .nux-nav {
  display: flex; gap: 5px; margin-left: 4px;
}
.spec--neumorphism .nux-navitem {
  font: 500 10px/1 "Instrument Sans", sans-serif; color: #8b95a3;
  padding: 6px 11px; border-radius: 9px;
}
.spec--neumorphism .nux-navitem.on {
  color: #4a5568; box-shadow: inset 3px 3px 6px #c3c9d6, inset -3px -3px 6px #ffffff;
}
.spec--neumorphism .nux-user {
  margin-left: auto; width: 24px; height: 24px; border-radius: 8px;
  display: grid; place-items: center; background: #e0e5ec;
  font: 600 10px/1 "IBM Plex Mono", monospace; color: #6b7686;
  box-shadow: 3px 3px 6px #c3c9d6, -3px -3px 6px #ffffff;
}
.spec--neumorphism .nux-body {
  flex: 1 1 auto; min-height: 0; display: flex; gap: 10px;
}
.spec--neumorphism .nux-side {
  flex: 0 0 26%; min-width: 0; display: flex; flex-direction: column; gap: 6px;
  padding: 11px; border-radius: 16px; background: #e0e5ec;
  box-shadow: inset 4px 4px 8px #c3c9d6, inset -4px -4px 8px #ffffff;
}
.spec--neumorphism .nux-head {
  font: 600 9px/1 "Instrument Sans", sans-serif; color: #8b95a3;
}
.spec--neumorphism .nux-row {
  display: flex; justify-content: space-between; gap: 6px; padding: 6px 9px;
  border-radius: 9px; font: 500 10px/1.2 "Instrument Sans", sans-serif; color: #7f8a98;
}
.spec--neumorphism .nux-row.on {
  color: #4a5568; box-shadow: 3px 3px 6px #c3c9d6, -3px -3px 6px #ffffff;
}
.spec--neumorphism .nux-val {
  font: 500 10px/1.2 "IBM Plex Mono", monospace; color: #6b7686;
  font-variant-numeric: tabular-nums;
}
.spec--neumorphism .nux-main {
  flex: 1 1 44%; min-width: 0; display: flex; flex-direction: column; gap: 8px;
  padding: 11px; border-radius: 16px; background: #e0e5ec;
  box-shadow: 6px 6px 12px #c3c9d6, -6px -6px 12px #ffffff;
}
.spec--neumorphism .nux-title {
  font: 600 12px/1 "Instrument Sans", sans-serif; color: #4a5568;
}
.spec--neumorphism .nux-stats {
  display: flex; gap: 8px;
}
.spec--neumorphism .nux-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 5px;
  padding: 8px; border-radius: 12px; background: #e0e5ec;
  box-shadow: inset 3px 3px 6px #c3c9d6, inset -3px -3px 6px #ffffff;
}
.spec--neumorphism .nux-k {
  font: 500 9px/1 "Instrument Sans", sans-serif; color: #8b95a3;
}
.spec--neumorphism .nux-n {
  font: 600 14px/1 "IBM Plex Mono", monospace; color: #4a5568;
  font-variant-numeric: tabular-nums;
}
.spec--neumorphism .nux-table {
  display: flex; flex-direction: column; gap: 5px;
}
.spec--neumorphism .nux-tr {
  display: flex; justify-content: space-between; gap: 8px; padding: 6px 9px;
  border-radius: 9px; font: 500 10px/1.2 "Instrument Sans", sans-serif; color: #7f8a98;
}
.spec--neumorphism .nux-tr span:nth-child(2) {
  font-family: "IBM Plex Mono", monospace; color: #6b7686;
  font-variant-numeric: tabular-nums; text-align: right;
}
.spec--neumorphism .nux-tr span:nth-child(3) {
  color: #98a2b0;
}
.spec--neumorphism .nux-detail {
  flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 7px;
  padding: 11px; border-radius: 16px; background: #e0e5ec;
  box-shadow: 6px 6px 12px #c3c9d6, -6px -6px 12px #ffffff;
}
.spec--neumorphism .nux-meta {
  display: flex; justify-content: space-between; gap: 6px;
  font: 500 10px/1.2 "Instrument Sans", sans-serif; color: #8b95a3;
}
.spec--neumorphism .nux-meta span:last-child {
  font-family: "IBM Plex Mono", monospace; color: #6b7686;
  font-variant-numeric: tabular-nums;
}
.spec--neumorphism .nux-btns {
  margin-top: auto; display: flex; gap: 7px;
}
.spec--neumorphism .nux-btn {
  flex: 1 1 0; min-width: 0; border: 0; cursor: pointer; padding: 9px 6px;
  border-radius: 11px; background: #e0e5ec;
  font: 600 10px/1 "Instrument Sans", sans-serif;
}
.spec--neumorphism .nux-btn.p {
  color: #4a5568; box-shadow: inset 3px 3px 6px #b8c1d1, inset -3px -3px 6px #ffffff;
}
.spec--neumorphism .nux-btn.s {
  color: #8b95a3; box-shadow: 3px 3px 6px #c3c9d6, -3px -3px 6px #ffffff;
}`
};

window.COMPLEX["claymorphism"] = {
  html: `<div class="clx-app">
    <header class="clx-top">
      <span class="clx-mark">Puffworks</span>
      <nav class="clx-nav">
        <span class="clx-navitem on">Studio</span>
        <span class="clx-navitem">Grow</span>
        <span class="clx-navitem">Shop</span>
      </nav>
      <span class="clx-user">M</span>
    </header>
    <div class="clx-body">
      <aside class="clx-side">
        <div class="clx-head">Clay sets</div>
        <div class="clx-row on"><span>Blobs</span><span class="clx-val">12</span></div>
        <div class="clx-row"><span>Dials</span><span class="clx-val">8</span></div>
        <div class="clx-row"><span>Pills</span><span class="clx-val">6</span></div>
        <div class="clx-row"><span>Cards</span><span class="clx-val">9</span></div>
      </aside>
      <main class="clx-main">
        <div class="clx-title">Studio</div>
        <div class="clx-stats">
          <div class="clx-stat lilac"><span class="clx-k">Shapes</span><span class="clx-n">35</span></div>
          <div class="clx-stat sky"><span class="clx-k">Radius</span><span class="clx-n">40</span></div>
          <div class="clx-stat peach"><span class="clx-k">Depth</span><span class="clx-n">14</span></div>
        </div>
        <div class="clx-table">
          <div class="clx-tr"><span>Blob</span><span>66px</span><span>Ready</span></div>
          <div class="clx-tr"><span>Pill</span><span>40px</span><span>Ready</span></div>
          <div class="clx-tr"><span>Tile</span><span>30px</span><span>Draft</span></div>
        </div>
      </main>
      <aside class="clx-detail">
        <div class="clx-head">Selected</div>
        <div class="clx-meta"><span>Radius</span><span>40px</span></div>
        <div class="clx-meta"><span>Offset</span><span>14px</span></div>
        <div class="clx-meta"><span>Hue</span><span>Lilac</span></div>
        <div class="clx-btns">
          <button class="clx-btn p" type="button">Mould</button>
          <button class="clx-btn s" type="button">Reset</button>
        </div>
      </aside>
    </div>
  </div>`,
  css: `.spec--claymorphism .clx-app {
  box-sizing: border-box; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  gap: 10px; padding: 12px; overflow: hidden; background: #eef0fb;
}
.spec--claymorphism .clx-app * {
  box-sizing: border-box;
}
.spec--claymorphism .clx-top {
  display: flex; align-items: center; gap: 10px; height: 36px; padding: 0 14px;
  border-radius: 22px; background: #f3f0fe;
  box-shadow: inset -5px -5px 10px rgba(0,0,0,.10), inset 5px 5px 10px rgba(255,255,255,.9), 0 8px 16px rgba(0,0,0,.12);
}
.spec--claymorphism .clx-mark {
  font: 800 13px/1 "Instrument Sans", sans-serif; color: #1e4a5f;
}
.spec--claymorphism .clx-nav {
  display: flex; gap: 7px; margin-left: 6px;
}
.spec--claymorphism .clx-navitem {
  font: 700 10px/1 "Instrument Sans", sans-serif; color: #6b6f92;
  padding: 6px 12px; border-radius: 999px;
}
.spec--claymorphism .clx-navitem.on {
  color: #1e4a5f; background: #c9b6f5;
  box-shadow: inset -3px -3px 6px rgba(0,0,0,.16), inset 3px 3px 6px rgba(255,255,255,.6);
}
.spec--claymorphism .clx-user {
  margin-left: auto; width: 26px; height: 26px; border-radius: 10px; display: grid;
  place-items: center; background: #9fd6f0;
  font: 800 11px/1 "Instrument Sans", sans-serif; color: #1e4a5f;
  box-shadow: inset -3px -3px 6px rgba(0,0,0,.16), inset 3px 3px 6px rgba(255,255,255,.65), 0 4px 8px rgba(0,0,0,.12);
}
.spec--claymorphism .clx-body {
  flex: 1 1 auto; min-height: 0; display: flex; gap: 10px;
}
.spec--claymorphism .clx-side {
  flex: 0 0 26%; min-width: 0; display: flex; flex-direction: column; gap: 7px;
  padding: 11px; border-radius: 24px; background: #f5f1ff;
  box-shadow: inset -6px -6px 12px rgba(0,0,0,.10), inset 6px 6px 12px rgba(255,255,255,.85), 0 10px 18px rgba(0,0,0,.12);
}
.spec--claymorphism .clx-head {
  font: 800 9px/1 "Instrument Sans", sans-serif; color: #8f8fb5;
}
.spec--claymorphism .clx-row {
  display: flex; justify-content: space-between; gap: 6px; padding: 6px 10px;
  border-radius: 14px; background: #fbfaff;
  font: 700 10px/1.2 "Instrument Sans", sans-serif; color: #6b6f92;
}
.spec--claymorphism .clx-row.on {
  color: #1e4a5f; background: #c9b6f5;
  box-shadow: inset -3px -3px 6px rgba(0,0,0,.14), inset 3px 3px 6px rgba(255,255,255,.55), 0 4px 8px rgba(0,0,0,.10);
}
.spec--claymorphism .clx-val {
  font: 700 10px/1.2 "IBM Plex Mono", monospace; color: #1e4a5f;
  font-variant-numeric: tabular-nums;
}
.spec--claymorphism .clx-main {
  flex: 1 1 44%; min-width: 0; display: flex; flex-direction: column; gap: 9px;
  padding: 12px; border-radius: 26px; background: #f6f8ff;
  box-shadow: inset -6px -6px 12px rgba(0,0,0,.09), inset 6px 6px 12px rgba(255,255,255,.85), 0 10px 18px rgba(0,0,0,.12);
}
.spec--claymorphism .clx-title {
  font: 800 13px/1 "Instrument Sans", sans-serif; color: #1e4a5f;
}
.spec--claymorphism .clx-stats {
  display: flex; gap: 9px;
}
.spec--claymorphism .clx-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 5px;
  padding: 9px; border-radius: 20px;
  box-shadow: inset -4px -4px 8px rgba(0,0,0,.14), inset 4px 4px 8px rgba(255,255,255,.7), 0 6px 12px rgba(0,0,0,.12);
}
.spec--claymorphism .clx-stat.lilac { background: #c9b6f5; }
.spec--claymorphism .clx-stat.sky { background: #9fd6f0; }
.spec--claymorphism .clx-stat.peach { background: #ffd9c9; }
.spec--claymorphism .clx-k {
  font: 700 9px/1 "Instrument Sans", sans-serif; color: rgba(30,74,95,.72);
}
.spec--claymorphism .clx-n {
  font: 800 15px/1 "IBM Plex Mono", monospace; color: #1e4a5f;
  font-variant-numeric: tabular-nums;
}
.spec--claymorphism .clx-table {
  display: flex; flex-direction: column; gap: 6px;
}
.spec--claymorphism .clx-tr {
  display: flex; justify-content: space-between; gap: 8px; padding: 6px 10px;
  border-radius: 14px; background: #eef0fb;
  font: 700 10px/1.2 "Instrument Sans", sans-serif; color: #6b6f92;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.75);
}
.spec--claymorphism .clx-tr span:nth-child(2) {
  font-family: "IBM Plex Mono", monospace; color: #1e4a5f;
  font-variant-numeric: tabular-nums; text-align: right;
}
.spec--claymorphism .clx-tr span:nth-child(3) {
  color: #8f8fb5;
}
.spec--claymorphism .clx-detail {
  flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 8px;
  padding: 12px; border-radius: 26px; background: #fff4ee;
  box-shadow: inset -6px -6px 12px rgba(0,0,0,.09), inset 6px 6px 12px rgba(255,255,255,.85), 0 10px 18px rgba(0,0,0,.12);
}
.spec--claymorphism .clx-meta {
  display: flex; justify-content: space-between; gap: 6px;
  font: 700 10px/1.2 "Instrument Sans", sans-serif; color: #a0766a;
}
.spec--claymorphism .clx-meta span:last-child {
  font-family: "IBM Plex Mono", monospace; color: #1e4a5f;
  font-variant-numeric: tabular-nums;
}
.spec--claymorphism .clx-btns {
  margin-top: auto; display: flex; gap: 8px;
}
.spec--claymorphism .clx-btn {
  flex: 1 1 0; min-width: 0; border: 0; cursor: pointer; padding: 9px 6px;
  border-radius: 999px; font: 800 10px/1 "Instrument Sans", sans-serif;
}
.spec--claymorphism .clx-btn.p {
  background: #9fd6f0; color: #1e4a5f;
  box-shadow: inset -3px -3px 7px rgba(0,0,0,.16), inset 3px 3px 7px rgba(255,255,255,.6), 0 6px 12px rgba(0,0,0,.14);
}
.spec--claymorphism .clx-btn.s {
  background: #ffd9c9; color: #8a4a30;
  box-shadow: inset -3px -3px 7px rgba(0,0,0,.14), inset 3px 3px 7px rgba(255,255,255,.7), 0 6px 12px rgba(0,0,0,.12);
}`
};

window.COMPLEX["glassmorphism"] = {
  html: `<div class="glx-app">
    <div class="glx-scene"><span class="glx-blob b1"></span><span class="glx-blob b2"></span><span class="glx-blob b3"></span></div>
    <header class="glx-top">
      <span class="glx-mark">Signal</span>
      <nav class="glx-nav">
        <span class="glx-navitem on">Overview</span>
        <span class="glx-navitem">Feeds</span>
        <span class="glx-navitem">Alerts</span>
      </nav>
      <span class="glx-user">AR</span>
    </header>
    <div class="glx-body">
      <aside class="glx-side">
        <div class="glx-head">Streams</div>
        <div class="glx-row on"><span>Edge</span><span class="glx-val">42</span></div>
        <div class="glx-row"><span>Core</span><span class="glx-val">68</span></div>
        <div class="glx-row"><span>Relay</span><span class="glx-val">17</span></div>
        <div class="glx-row"><span>Cache</span><span class="glx-val">91</span></div>
      </aside>
      <main class="glx-main">
        <div class="glx-title">Overview</div>
        <div class="glx-stats">
          <div class="glx-stat"><span class="glx-k">Throughput</span><span class="glx-n">4.2k</span></div>
          <div class="glx-stat"><span class="glx-k">Latency</span><span class="glx-n">38ms</span></div>
          <div class="glx-stat"><span class="glx-k">Uptime</span><span class="glx-n">99.9%</span></div>
        </div>
        <div class="glx-table">
          <div class="glx-tr"><span>Edge</span><span>42k</span><span>Live</span></div>
          <div class="glx-tr"><span>Core</span><span>68k</span><span>Live</span></div>
          <div class="glx-tr"><span>Relay</span><span>17k</span><span>Idle</span></div>
        </div>
      </main>
      <aside class="glx-detail">
        <div class="glx-head">Stream</div>
        <div class="glx-meta"><span>Region</span><span>co-lon</span></div>
        <div class="glx-meta"><span>Rate</span><span>420/s</span></div>
        <div class="glx-meta"><span>State</span><span>Live</span></div>
        <div class="glx-btns">
          <button class="glx-btn p" type="button">Open</button>
          <button class="glx-btn s" type="button">Mute</button>
        </div>
      </aside>
    </div>
  </div>`,
  css: `.spec--glassmorphism .glx-app {
  position: relative; box-sizing: border-box; width: 100%; min-height: 250px;
  display: flex; flex-direction: column; gap: 10px; padding: 12px; overflow: hidden;
  background: linear-gradient(135deg, #1b2a4a, #3a1b4a);
}
.spec--glassmorphism .glx-app * {
  box-sizing: border-box;
}
.spec--glassmorphism .glx-scene {
  position: absolute; inset: 0; overflow: hidden; pointer-events: none;
}
.spec--glassmorphism .glx-blob {
  position: absolute; border-radius: 50%; filter: blur(26px);
}
.spec--glassmorphism .glx-blob.b1 {
  width: 220px; height: 220px; background: #ff7a3d; top: -74px; left: -40px; opacity: .85;
}
.spec--glassmorphism .glx-blob.b2 {
  width: 200px; height: 200px; background: #3dd6ff; bottom: -84px; right: -30px; opacity: .85;
}
.spec--glassmorphism .glx-blob.b3 {
  width: 150px; height: 150px; background: #b06bff; bottom: 6px; left: 250px; opacity: .8;
}
.spec--glassmorphism .glx-top {
  position: relative; display: flex; align-items: center; gap: 10px; height: 36px;
  padding: 0 14px; border-radius: 14px; background: rgba(255,255,255,.14);
  backdrop-filter: blur(12px) saturate(160%); -webkit-backdrop-filter: blur(12px) saturate(160%);
  border: 1px solid rgba(255,255,255,.32); box-shadow: 0 8px 20px rgba(0,0,0,.24);
}
.spec--glassmorphism .glx-mark {
  font: 600 12px/1 "Instrument Sans", sans-serif; color: #fff;
}
.spec--glassmorphism .glx-nav {
  display: flex; gap: 5px; margin-left: 4px;
}
.spec--glassmorphism .glx-navitem {
  font: 500 10px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.74);
  padding: 6px 10px; border-radius: 9px;
}
.spec--glassmorphism .glx-navitem.on {
  color: #fff; background: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.38);
}
.spec--glassmorphism .glx-user {
  margin-left: auto; padding: 6px 9px; border-radius: 9px;
  font: 600 10px/1 "IBM Plex Mono", monospace; color: #fff;
  background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.34);
}
.spec--glassmorphism .glx-body {
  position: relative; flex: 1 1 auto; min-height: 0; display: flex; gap: 10px;
}
.spec--glassmorphism .glx-side {
  flex: 0 0 26%; min-width: 0; display: flex; flex-direction: column; gap: 7px;
  padding: 11px; border-radius: 16px; background: rgba(255,255,255,.14);
  backdrop-filter: blur(18px) saturate(160%); -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255,255,255,.3); box-shadow: 0 12px 28px rgba(0,0,0,.26);
}
.spec--glassmorphism .glx-head {
  font: 600 9px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.62);
}
.spec--glassmorphism .glx-row {
  display: flex; justify-content: space-between; gap: 6px; padding: 6px 10px;
  border-radius: 10px; font: 500 10px/1.2 "Instrument Sans", sans-serif; color: rgba(255,255,255,.82);
}
.spec--glassmorphism .glx-row.on {
  color: #fff; background: rgba(255,255,255,.24); border: 1px solid rgba(255,255,255,.42);
}
.spec--glassmorphism .glx-val {
  font: 500 10px/1.2 "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums;
}
.spec--glassmorphism .glx-main {
  flex: 1 1 44%; min-width: 0; display: flex; flex-direction: column; gap: 9px;
  padding: 12px; border-radius: 18px; background: rgba(255,255,255,.16);
  backdrop-filter: blur(22px) saturate(165%); -webkit-backdrop-filter: blur(22px) saturate(165%);
  border: 1px solid rgba(255,255,255,.34); box-shadow: 0 14px 32px rgba(0,0,0,.3);
}
.spec--glassmorphism .glx-title {
  font: 600 13px/1 "Instrument Sans", sans-serif; color: #fff;
}
.spec--glassmorphism .glx-stats {
  display: flex; gap: 9px;
}
.spec--glassmorphism .glx-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 5px;
  padding: 9px; border-radius: 12px; background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.26);
}
.spec--glassmorphism .glx-k {
  font: 500 9px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.7);
}
.spec--glassmorphism .glx-n {
  font: 600 15px/1 "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums;
}
.spec--glassmorphism .glx-table {
  display: flex; flex-direction: column; gap: 6px;
}
.spec--glassmorphism .glx-tr {
  display: flex; justify-content: space-between; gap: 8px; padding: 6px 10px;
  border-radius: 10px; background: rgba(255,255,255,.1);
  font: 500 10px/1.2 "Instrument Sans", sans-serif; color: rgba(255,255,255,.84);
}
.spec--glassmorphism .glx-tr span:nth-child(2) {
  font-family: "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums; text-align: right;
}
.spec--glassmorphism .glx-tr span:nth-child(3) {
  color: rgba(255,255,255,.64);
}
.spec--glassmorphism .glx-detail {
  flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 8px;
  padding: 12px; border-radius: 16px; background: rgba(255,255,255,.14);
  backdrop-filter: blur(18px) saturate(160%); -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255,255,255,.3); box-shadow: 0 12px 28px rgba(0,0,0,.26);
}
.spec--glassmorphism .glx-meta {
  display: flex; justify-content: space-between; gap: 6px;
  font: 500 10px/1.2 "Instrument Sans", sans-serif; color: rgba(255,255,255,.72);
}
.spec--glassmorphism .glx-meta span:last-child {
  font-family: "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums;
}
.spec--glassmorphism .glx-btns {
  margin-top: auto; display: flex; gap: 7px;
}
.spec--glassmorphism .glx-btn {
  flex: 1 1 0; min-width: 0; cursor: pointer; padding: 9px 6px; border-radius: 10px;
  font: 500 10px/1 "Instrument Sans", sans-serif;
}
.spec--glassmorphism .glx-btn.p {
  border: 1px solid rgba(255,255,255,.5); background: rgba(255,255,255,.28); color: #fff;
}
.spec--glassmorphism .glx-btn.s {
  border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.1); color: rgba(255,255,255,.86);
}`
};

window.COMPLEX["liquid-glass"] = {
  html: `<div class="lgx-app">
    <div class="lgx-scene"><span class="lgx-photo"></span></div>
    <header class="lgx-top">
      <span class="lgx-mark">Prism</span>
      <nav class="lgx-nav">
        <span class="lgx-navitem on">Lens</span>
        <span class="lgx-navitem">Flow</span>
        <span class="lgx-navitem">Deck</span>
      </nav>
      <span class="lgx-user">KV</span>
    </header>
    <div class="lgx-body">
      <aside class="lgx-side">
        <div class="lgx-head">Panes</div>
        <div class="lgx-row on"><span>Refract</span><span class="lgx-val">24</span></div>
        <div class="lgx-row"><span>Specular</span><span class="lgx-val">61</span></div>
        <div class="lgx-row"><span>Inset</span><span class="lgx-val">35</span></div>
        <div class="lgx-row"><span>Tint</span><span class="lgx-val">18</span></div>
      </aside>
      <main class="lgx-main">
        <div class="lgx-title">Lens</div>
        <div class="lgx-stats">
          <div class="lgx-stat"><span class="lgx-k">Blur</span><span class="lgx-n">26px</span></div>
          <div class="lgx-stat"><span class="lgx-k">Sat</span><span class="lgx-n">190%</span></div>
          <div class="lgx-stat"><span class="lgx-k">Radius</span><span class="lgx-n">20px</span></div>
        </div>
        <div class="lgx-table">
          <div class="lgx-tr"><span>Refract</span><span>24</span><span>Active</span></div>
          <div class="lgx-tr"><span>Specular</span><span>61</span><span>Lit</span></div>
          <div class="lgx-tr"><span>Tint</span><span>18</span><span>Idle</span></div>
        </div>
      </main>
      <aside class="lgx-detail">
        <div class="lgx-head">Material</div>
        <div class="lgx-meta"><span>Blur</span><span>26px</span></div>
        <div class="lgx-meta"><span>Light</span><span>NW</span></div>
        <div class="lgx-meta"><span>State</span><span>Flexed</span></div>
        <div class="lgx-btns">
          <button class="lgx-btn p" type="button">Apply</button>
          <button class="lgx-btn s" type="button">Release</button>
        </div>
      </aside>
    </div>
  </div>`,
  css: `.spec--liquid-glass .lgx-app {
  position: relative; box-sizing: border-box; width: 100%; min-height: 250px;
  display: flex; flex-direction: column; gap: 10px; padding: 12px; overflow: hidden;
  background: linear-gradient(160deg, #0b1c33 0%, #1b4a63 42%, #c76a3e 100%);
}
.spec--liquid-glass .lgx-app * {
  box-sizing: border-box;
}
.spec--liquid-glass .lgx-scene {
  position: absolute; inset: 0; overflow: hidden; pointer-events: none;
}
.spec--liquid-glass .lgx-photo {
  position: absolute; inset: -24px; filter: blur(8px);
  background: radial-gradient(circle at 24% 28%, rgba(120,220,255,.55), transparent 46%),
              radial-gradient(circle at 76% 74%, rgba(255,160,90,.6), transparent 52%),
              radial-gradient(circle at 60% 12%, rgba(255,255,255,.22), transparent 40%);
}
.spec--liquid-glass .lgx-top {
  position: relative; display: flex; align-items: center; gap: 10px; height: 36px;
  padding: 0 14px; border-radius: 18px; background: rgba(255,255,255,.14);
  backdrop-filter: blur(24px) saturate(190%) brightness(1.06);
  -webkit-backdrop-filter: blur(24px) saturate(190%) brightness(1.06);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.6), inset -1px -3px 8px rgba(0,0,0,.28),
              inset 0 0 26px rgba(255,255,255,.1), 0 16px 30px rgba(0,0,0,.32);
}
.spec--liquid-glass .lgx-mark {
  font: 600 12px/1 "Instrument Sans", sans-serif; color: #fff;
}
.spec--liquid-glass .lgx-nav {
  display: flex; gap: 5px; margin-left: 4px;
}
.spec--liquid-glass .lgx-navitem {
  font: 500 10px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.76);
  padding: 6px 11px; border-radius: 999px;
}
.spec--liquid-glass .lgx-navitem.on {
  color: #fff; background: linear-gradient(180deg, rgba(255,255,255,.34), rgba(255,255,255,.14));
  border: 1px solid rgba(255,255,255,.5);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 2px 6px rgba(0,0,0,.22);
}
.spec--liquid-glass .lgx-user {
  margin-left: auto; padding: 6px 10px; border-radius: 999px;
  font: 600 10px/1 "IBM Plex Mono", monospace; color: #fff;
  background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.34);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.45), inset -1px -2px 6px rgba(0,0,0,.24);
}
.spec--liquid-glass .lgx-body {
  position: relative; flex: 1 1 auto; min-height: 0; display: flex; gap: 10px;
}
.spec--liquid-glass .lgx-side {
  flex: 0 0 26%; min-width: 0; display: flex; flex-direction: column; gap: 7px;
  padding: 11px; border-radius: 20px; background: rgba(255,255,255,.13);
  backdrop-filter: blur(26px) saturate(190%) brightness(1.06);
  -webkit-backdrop-filter: blur(26px) saturate(190%) brightness(1.06);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.55), inset -1px -3px 8px rgba(0,0,0,.26),
              inset 0 0 24px rgba(255,255,255,.1), 0 14px 28px rgba(0,0,0,.3);
}
.spec--liquid-glass .lgx-head {
  font: 600 9px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.66);
}
.spec--liquid-glass .lgx-row {
  display: flex; justify-content: space-between; gap: 6px; padding: 6px 10px;
  border-radius: 12px; font: 500 10px/1.2 "Instrument Sans", sans-serif; color: rgba(255,255,255,.84);
}
.spec--liquid-glass .lgx-row.on {
  color: #fff; background: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.42);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.55), inset -1px -2px 6px rgba(0,0,0,.22);
}
.spec--liquid-glass .lgx-val {
  font: 500 10px/1.2 "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums;
}
.spec--liquid-glass .lgx-main {
  flex: 1 1 44%; min-width: 0; display: flex; flex-direction: column; gap: 9px;
  padding: 12px; border-radius: 24px; background: rgba(255,255,255,.15);
  backdrop-filter: blur(28px) saturate(195%) brightness(1.08);
  -webkit-backdrop-filter: blur(28px) saturate(195%) brightness(1.08);
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.62), inset -1px -3px 9px rgba(0,0,0,.3),
              inset 0 0 30px rgba(255,255,255,.12), 0 18px 34px rgba(0,0,0,.34);
}
.spec--liquid-glass .lgx-title {
  font: 600 13px/1 "Instrument Sans", sans-serif; color: #fff;
}
.spec--liquid-glass .lgx-stats {
  display: flex; gap: 9px;
}
.spec--liquid-glass .lgx-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 5px;
  padding: 9px; border-radius: 14px; background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.2);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.4), inset -1px -2px 6px rgba(0,0,0,.18);
}
.spec--liquid-glass .lgx-k {
  font: 500 9px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.72);
}
.spec--liquid-glass .lgx-n {
  font: 600 15px/1 "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums;
}
.spec--liquid-glass .lgx-table {
  display: flex; flex-direction: column; gap: 6px;
}
.spec--liquid-glass .lgx-tr {
  display: flex; justify-content: space-between; gap: 8px; padding: 6px 10px;
  border-radius: 12px; background: rgba(255,255,255,.08);
  font: 500 10px/1.2 "Instrument Sans", sans-serif; color: rgba(255,255,255,.86);
}
.spec--liquid-glass .lgx-tr span:nth-child(2) {
  font-family: "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums; text-align: right;
}
.spec--liquid-glass .lgx-tr span:nth-child(3) {
  color: rgba(255,255,255,.66);
}
.spec--liquid-glass .lgx-detail {
  flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 8px;
  padding: 12px; border-radius: 20px; background: rgba(255,255,255,.13);
  backdrop-filter: blur(26px) saturate(190%) brightness(1.06);
  -webkit-backdrop-filter: blur(26px) saturate(190%) brightness(1.06);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.55), inset -1px -3px 8px rgba(0,0,0,.26),
              inset 0 0 24px rgba(255,255,255,.1), 0 14px 28px rgba(0,0,0,.3);
}
.spec--liquid-glass .lgx-meta {
  display: flex; justify-content: space-between; gap: 6px;
  font: 500 10px/1.2 "Instrument Sans", sans-serif; color: rgba(255,255,255,.74);
}
.spec--liquid-glass .lgx-meta span:last-child {
  font-family: "IBM Plex Mono", monospace; color: #fff;
  font-variant-numeric: tabular-nums;
}
.spec--liquid-glass .lgx-btns {
  margin-top: auto; display: flex; gap: 7px;
}
.spec--liquid-glass .lgx-btn {
  flex: 1 1 0; min-width: 0; cursor: pointer; padding: 9px 6px; border-radius: 999px;
  font: 600 10px/1 "Instrument Sans", sans-serif;
}
.spec--liquid-glass .lgx-btn.p {
  border: 1px solid rgba(255,255,255,.5); color: #fff;
  background: linear-gradient(180deg, rgba(255,255,255,.34), rgba(255,255,255,.16));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 3px 8px rgba(0,0,0,.24);
}
.spec--liquid-glass .lgx-btn.s {
  border: 1px solid rgba(255,255,255,.28); color: rgba(255,255,255,.86);
  background: rgba(255,255,255,.08);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.35), inset -1px -2px 6px rgba(0,0,0,.2);
}`
};

window.COMPLEX["aurora-mesh"] = {
  html: `<div class="aux-app">
    <div class="aux-field">
      <span class="aux-f aux-a"></span>
      <span class="aux-f aux-b"></span>
      <span class="aux-f aux-c"></span>
    </div>
    <div class="aux-top">
      <span class="aux-mark">Fieldwork</span>
      <span class="aux-nav">
        <span class="aux-n is-on">Pipelines</span>
        <span class="aux-n">Renders</span>
        <span class="aux-n">Nodes</span>
        <span class="aux-n">Queue</span>
      </span>
      <span class="aux-status">12 jobs</span>
    </div>
    <div class="aux-body">
      <div class="aux-side">
        <p class="aux-head">Pipelines</p>
        <div class="aux-row is-on"><span class="aux-lb">Mesh bake</span><span class="aux-vl">4m 12s</span></div>
        <div class="aux-row"><span class="aux-lb">Atlas pack</span><span class="aux-vl">1m 08s</span></div>
        <div class="aux-row"><span class="aux-lb">Light pass</span><span class="aux-vl">2m 40s</span></div>
        <div class="aux-row"><span class="aux-lb">Export</span><span class="aux-vl">0m 55s</span></div>
      </div>
      <div class="aux-main">
        <p class="aux-title">Mesh bake</p>
        <div class="aux-stats">
          <div class="aux-stat"><span class="aux-sv">1284</span><span class="aux-sl">frames</span></div>
          <div class="aux-stat"><span class="aux-sv">4m 12s</span><span class="aux-sl">elapsed</span></div>
          <div class="aux-stat"><span class="aux-sv">3</span><span class="aux-sl">nodes</span></div>
        </div>
        <div class="aux-table">
          <div class="aux-tr"><span class="aux-tn">layer-07</span><span class="aux-tv">842 MB</span><span class="aux-ts is-ok">done</span></div>
          <div class="aux-tr"><span class="aux-tn">layer-08</span><span class="aux-tv">1.2 GB</span><span class="aux-ts is-run">run</span></div>
          <div class="aux-tr"><span class="aux-tn">layer-09</span><span class="aux-tv">613 MB</span><span class="aux-ts">queued</span></div>
        </div>
      </div>
      <div class="aux-detail">
        <p class="aux-head">Node 03</p>
        <p class="aux-meta">Region east-2</p>
        <p class="aux-meta">GPU 88% load</p>
        <p class="aux-meta">Temp 61 C</p>
        <div class="aux-btns">
          <button class="aux-b1" type="button">Open log</button>
          <button class="aux-b2" type="button">Retry</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--aurora-mesh .aux-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  overflow: hidden; background: #0b0f16; border: 1px solid #262c38; border-radius: 12px;
  color: #f2f5f9; font-family: "Instrument Sans", sans-serif;
}
.spec--aurora-mesh .aux-field { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
.spec--aurora-mesh .aux-f { position: absolute; border-radius: 50%; filter: blur(46px); opacity: .72; }
.spec--aurora-mesh .aux-a { width: 320px; height: 320px; background: #1f6f6b; top: -150px; left: -90px; }
.spec--aurora-mesh .aux-b { width: 300px; height: 300px; background: #6c3f7a; bottom: -160px; right: -70px; }
.spec--aurora-mesh .aux-c { width: 240px; height: 240px; background: #8a5a1f; bottom: -140px; left: 120px; opacity: .55; }
.spec--aurora-mesh .aux-top {
  position: relative; z-index: 1; display: flex; align-items: center; gap: 14px;
  height: 34px; flex: 0 0 34px; padding: 0 12px;
  background: rgba(9,12,18,.66); border-bottom: 1px solid #262c38;
}
.spec--aurora-mesh .aux-mark { font-size: 12px; font-weight: 600; letter-spacing: .04em; color: #f2f5f9; }
.spec--aurora-mesh .aux-nav { display: flex; gap: 12px; margin-left: 6px; }
.spec--aurora-mesh .aux-n { font-size: 11px; color: #9aa6b5; }
.spec--aurora-mesh .aux-n.is-on { color: #f2f5f9; font-weight: 600; }
.spec--aurora-mesh .aux-status { margin-left: auto; font-family: "IBM Plex Mono", monospace; font-size: 10px; color: #b6c0cd; font-variant-numeric: tabular-nums; }
.spec--aurora-mesh .aux-body { position: relative; z-index: 1; display: flex; flex: 1; min-height: 0; gap: 8px; padding: 8px; }
.spec--aurora-mesh .aux-side { flex: 0 0 31%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 8px; border-radius: 9px; background: rgba(9,12,18,.5); border: 1px solid #262c38; }
.spec--aurora-mesh .aux-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px; border-radius: 9px; background: rgba(9,12,18,.5); border: 1px solid #262c38; }
.spec--aurora-mesh .aux-detail { flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 8px; border-radius: 9px; background: rgba(9,12,18,.5); border: 1px solid #262c38; }
.spec--aurora-mesh .aux-head { margin: 0 0 2px; font-size: 9px; text-transform: uppercase; letter-spacing: .08em; color: #8b97a6; }
.spec--aurora-mesh .aux-row { display: flex; justify-content: space-between; align-items: baseline; gap: 6px; padding: 4px 6px; border-radius: 6px; border: 1px solid transparent; }
.spec--aurora-mesh .aux-row.is-on { background: rgba(31,111,107,.30); border-color: #2f6f6b; }
.spec--aurora-mesh .aux-lb { font-size: 10px; color: #cfd7e1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--aurora-mesh .aux-vl { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #b6c0cd; font-variant-numeric: tabular-nums; }
.spec--aurora-mesh .aux-title { margin: 0; font-size: 13px; font-weight: 600; color: #f2f5f9; }
.spec--aurora-mesh .aux-stats { display: flex; gap: 6px; }
.spec--aurora-mesh .aux-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 1px; padding: 5px 7px; border-radius: 7px; background: rgba(255,255,255,.05); border: 1px solid #262c38; }
.spec--aurora-mesh .aux-sv { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 600; color: #f2f5f9; font-variant-numeric: tabular-nums; }
.spec--aurora-mesh .aux-sl { font-size: 9px; color: #8b97a6; }
.spec--aurora-mesh .aux-table { display: flex; flex-direction: column; gap: 3px; margin-top: 2px; }
.spec--aurora-mesh .aux-tr { display: grid; grid-template-columns: 1fr 1fr auto; gap: 6px; align-items: baseline; padding: 4px 6px; border-radius: 6px; background: rgba(255,255,255,.04); }
.spec--aurora-mesh .aux-tn { font-size: 10px; color: #cfd7e1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--aurora-mesh .aux-tv { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #b6c0cd; font-variant-numeric: tabular-nums; }
.spec--aurora-mesh .aux-ts { font-size: 9px; color: #8b97a6; }
.spec--aurora-mesh .aux-ts.is-ok { color: #7fd8c6; }
.spec--aurora-mesh .aux-ts.is-run { color: #f0b46a; }
.spec--aurora-mesh .aux-meta { margin: 0; font-size: 10px; color: #b6c0cd; }
.spec--aurora-mesh .aux-btns { margin-top: auto; display: flex; flex-direction: column; gap: 5px; }
.spec--aurora-mesh .aux-b1 { border: 1px solid #2f6f6b; background: rgba(31,111,107,.6); color: #eafaf6; font: 600 10px/1 "Instrument Sans", sans-serif; padding: 7px 8px; border-radius: 6px; cursor: pointer; }
.spec--aurora-mesh .aux-b2 { border: 1px solid #3a4250; background: rgba(255,255,255,.04); color: #cfd7e1; font: 500 10px/1 "Instrument Sans", sans-serif; padding: 7px 8px; border-radius: 6px; cursor: pointer; }`
};

window.COMPLEX["neo-brutalism"] = {
  html: `<div class="nbx-app">
    <div class="nbx-top">
      <span class="nbx-mark">RAWCO</span>
      <span class="nbx-nav">
        <span class="nbx-n is-on">Builds</span>
        <span class="nbx-n">Deploys</span>
        <span class="nbx-n">Alerts</span>
        <span class="nbx-n">Team</span>
      </span>
      <span class="nbx-user">rko</span>
    </div>
    <div class="nbx-body">
      <div class="nbx-side">
        <p class="nbx-head">Builds</p>
        <div class="nbx-row is-on"><span class="nbx-lb">api-core</span><span class="nbx-vl">#1284</span></div>
        <div class="nbx-row"><span class="nbx-lb">web-shell</span><span class="nbx-vl">#1283</span></div>
        <div class="nbx-row"><span class="nbx-lb">cli-kit</span><span class="nbx-vl">#1281</span></div>
        <div class="nbx-row"><span class="nbx-lb">docs</span><span class="nbx-vl">#1279</span></div>
      </div>
      <div class="nbx-main">
        <p class="nbx-title">api-core</p>
        <div class="nbx-stats">
          <div class="nbx-stat"><span class="nbx-sv">1284</span><span class="nbx-sl">build</span></div>
          <div class="nbx-stat"><span class="nbx-sv">92</span><span class="nbx-sl">tests</span></div>
          <div class="nbx-stat"><span class="nbx-sv">0</span><span class="nbx-sl">fails</span></div>
        </div>
        <div class="nbx-table">
          <div class="nbx-tr"><span class="nbx-tn">lint</span><span class="nbx-tv">4s</span><span class="nbx-ts is-ok">pass</span></div>
          <div class="nbx-tr"><span class="nbx-tn">unit</span><span class="nbx-tv">38s</span><span class="nbx-ts is-ok">pass</span></div>
          <div class="nbx-tr"><span class="nbx-tn">e2e</span><span class="nbx-tv">2m 10s</span><span class="nbx-ts is-run">run</span></div>
        </div>
      </div>
      <div class="nbx-detail">
        <p class="nbx-head">Deploy</p>
        <p class="nbx-meta">Target east-2</p>
        <p class="nbx-meta">Branch trunk</p>
        <p class="nbx-meta">By rko</p>
        <div class="nbx-btns">
          <button class="nbx-b1" type="button">Ship it</button>
          <button class="nbx-b2" type="button">Hold</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--neo-brutalism .nbx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  overflow: hidden; background: #f2ead9; border: 3px solid #000; border-radius: 0;
  color: #000; font-family: "Instrument Sans", sans-serif;
}
.spec--neo-brutalism .nbx-top { display: flex; align-items: center; gap: 12px; height: 34px; flex: 0 0 34px; padding: 0 10px; background: #ffe500; border-bottom: 3px solid #000; }
.spec--neo-brutalism .nbx-mark { font: 800 13px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: -0.02em; }
.spec--neo-brutalism .nbx-nav { display: flex; gap: 8px; margin-left: 4px; }
.spec--neo-brutalism .nbx-n { font: 700 11px/1 "Instrument Sans", sans-serif; padding: 3px 6px; }
.spec--neo-brutalism .nbx-n.is-on { background: #000; color: #ffe500; }
.spec--neo-brutalism .nbx-user { margin-left: auto; background: #00e5ff; border: 2px solid #000; font: 700 10px/1 "Instrument Sans", sans-serif; padding: 3px 7px; }
.spec--neo-brutalism .nbx-body { display: flex; flex: 1; min-height: 0; gap: 10px; padding: 10px 13px 13px 10px; }
.spec--neo-brutalism .nbx-side { flex: 0 0 30%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 8px; background: #fff; border: 3px solid #000; box-shadow: 4px 4px 0 #000; }
.spec--neo-brutalism .nbx-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px; background: #fff; border: 3px solid #000; box-shadow: 4px 4px 0 #000; }
.spec--neo-brutalism .nbx-detail { flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 8px; background: #fff; border: 3px solid #000; box-shadow: 4px 4px 0 #000; }
.spec--neo-brutalism .nbx-head { align-self: flex-start; margin: 0 0 2px; background: #000; color: #f2ead9; font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .04em; padding: 3px 5px; }
.spec--neo-brutalism .nbx-row { display: flex; justify-content: space-between; align-items: baseline; gap: 6px; padding: 4px 6px; background: #fff; border: 2px solid #000; }
.spec--neo-brutalism .nbx-row.is-on { background: #00e5ff; }
.spec--neo-brutalism .nbx-lb { font: 700 10px/1.2 "Instrument Sans", sans-serif; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--neo-brutalism .nbx-vl { font-family: "IBM Plex Mono", monospace; font-size: 9px; font-weight: 700; font-variant-numeric: tabular-nums; }
.spec--neo-brutalism .nbx-title { margin: 0; font: 800 15px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: -0.02em; }
.spec--neo-brutalism .nbx-stats { display: flex; gap: 6px; }
.spec--neo-brutalism .nbx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 1px; padding: 4px 6px; background: #fff; border: 2px solid #000; }
.spec--neo-brutalism .nbx-stat:nth-child(1) { background: #ffe500; }
.spec--neo-brutalism .nbx-stat:nth-child(2) { background: #ff5cc8; }
.spec--neo-brutalism .nbx-stat:nth-child(3) { background: #b9ff3d; }
.spec--neo-brutalism .nbx-sv { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 700; font-variant-numeric: tabular-nums; }
.spec--neo-brutalism .nbx-sl { font: 700 9px/1 "Instrument Sans", sans-serif; }
.spec--neo-brutalism .nbx-table { display: flex; flex-direction: column; gap: 3px; margin-top: 2px; }
.spec--neo-brutalism .nbx-tr { display: grid; grid-template-columns: 1fr 1fr auto; gap: 6px; align-items: center; padding: 3px 6px; background: #fff; border: 2px solid #000; }
.spec--neo-brutalism .nbx-tn { font: 700 10px/1.2 "Instrument Sans", sans-serif; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--neo-brutalism .nbx-tv { font-family: "IBM Plex Mono", monospace; font-size: 9px; font-weight: 700; font-variant-numeric: tabular-nums; }
.spec--neo-brutalism .nbx-ts { font: 700 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; padding: 2px 5px; border: 2px solid #000; }
.spec--neo-brutalism .nbx-ts.is-ok { background: #b9ff3d; }
.spec--neo-brutalism .nbx-ts.is-run { background: #ff5cc8; }
.spec--neo-brutalism .nbx-meta { margin: 0; font: 700 10px/1.2 "Instrument Sans", sans-serif; }
.spec--neo-brutalism .nbx-btns { margin-top: auto; display: flex; flex-direction: column; gap: 7px; }
.spec--neo-brutalism .nbx-b1 { border: 3px solid #000; background: #00e5ff; color: #000; box-shadow: 3px 3px 0 #000; font: 700 10px/1 "Instrument Sans", sans-serif; padding: 8px; cursor: pointer; }
.spec--neo-brutalism .nbx-b2 { border: 3px solid #000; background: #fff; color: #000; box-shadow: 3px 3px 0 #000; font: 700 10px/1 "Instrument Sans", sans-serif; padding: 8px; cursor: pointer; }`
};

window.COMPLEX["render-3d"] = {
  html: `<div class="r3x-app">
    <div class="r3x-stage">
      <span class="r3x-capsule"></span>
      <span class="r3x-sphere"></span>
    </div>
    <div class="r3x-top">
      <span class="r3x-mark">Studio Clay</span>
      <span class="r3x-nav">
        <span class="r3x-n is-on">Assets</span>
        <span class="r3x-n">Scenes</span>
        <span class="r3x-n">Lights</span>
        <span class="r3x-n">Publish</span>
      </span>
      <span class="r3x-user">kd</span>
    </div>
    <div class="r3x-body">
      <div class="r3x-side">
        <p class="r3x-head">Assets</p>
        <div class="r3x-row is-on"><span class="r3x-lb">clay-sphere</span><span class="r3x-vl">104 mm</span></div>
        <div class="r3x-row"><span class="r3x-lb">soft-capsule</span><span class="r3x-vl">98 mm</span></div>
        <div class="r3x-row"><span class="r3x-lb">mint-ring</span><span class="r3x-vl">62 mm</span></div>
        <div class="r3x-row"><span class="r3x-lb">tray-plate</span><span class="r3x-vl">180 mm</span></div>
      </div>
      <div class="r3x-main">
        <p class="r3x-title">clay-sphere</p>
        <div class="r3x-stats">
          <div class="r3x-stat"><span class="r3x-sv">104</span><span class="r3x-sl">mm</span></div>
          <div class="r3x-stat"><span class="r3x-sv">12k</span><span class="r3x-sl">tris</span></div>
          <div class="r3x-stat"><span class="r3x-sv">0.55</span><span class="r3x-sl">rough</span></div>
        </div>
        <div class="r3x-table">
          <div class="r3x-tr"><span class="r3x-tn">material</span><span class="r3x-tv">clay</span><span class="r3x-ts is-ok">set</span></div>
          <div class="r3x-tr"><span class="r3x-tn">finish</span><span class="r3x-tv">matte</span><span class="r3x-ts is-ok">set</span></div>
          <div class="r3x-tr"><span class="r3x-tn">uv pack</span><span class="r3x-tv">pending</span><span class="r3x-ts">wait</span></div>
        </div>
      </div>
      <div class="r3x-detail">
        <p class="r3x-head">Export</p>
        <p class="r3x-meta">Format GLB</p>
        <p class="r3x-meta">Scale 1.0</p>
        <p class="r3x-meta">Variant A</p>
        <div class="r3x-btns">
          <button class="r3x-b1" type="button">Export</button>
          <button class="r3x-b2" type="button">Preview</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--render-3d .r3x-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  overflow: hidden; background: linear-gradient(180deg, #f6f3f0, #e4e0dc);
  border: 1px solid #ddd7d1; border-radius: 12px; color: #2b2f3a;
  font-family: "Instrument Sans", sans-serif;
}
.spec--render-3d .r3x-stage { position: absolute; inset: 0; overflow: hidden; z-index: 2; pointer-events: none; }
.spec--render-3d .r3x-capsule { position: absolute; left: -18px; bottom: -22px; width: 62px; height: 104px; border-radius: 31px; background: linear-gradient(150deg, #ffe6cd 0 12%, #f7a86b 50%, #c96f31 100%); filter: drop-shadow(0 18px 20px rgba(140,75,28,.26)); }
.spec--render-3d .r3x-sphere { position: absolute; z-index: 2; right: -20px; bottom: -26px; width: 108px; height: 108px; border-radius: 50%; background: radial-gradient(circle at 34% 28%, #ffffff 0 6%, #d7ddff 20%, #7d8ce0 54%, #3d4890 100%); filter: drop-shadow(0 18px 22px rgba(35,40,85,.28)); }
.spec--render-3d .r3x-top { position: relative; z-index: 3; display: flex; align-items: center; gap: 13px; height: 34px; flex: 0 0 34px; padding: 0 12px; background: #ffffff; border-bottom: 1px solid #ddd7d1; }
.spec--render-3d .r3x-mark { font-size: 12px; font-weight: 600; letter-spacing: .01em; color: #2b2f3a; }
.spec--render-3d .r3x-nav { display: flex; gap: 12px; margin-left: 6px; }
.spec--render-3d .r3x-n { font-size: 11px; color: #7b8290; }
.spec--render-3d .r3x-n.is-on { color: #3d4890; font-weight: 600; }
.spec--render-3d .r3x-user { margin-left: auto; background: #eef1f8; border: 1px solid #d5dbe8; border-radius: 999px; font-size: 10px; font-weight: 600; color: #3d4890; padding: 3px 9px; }
.spec--render-3d .r3x-body { position: relative; z-index: 1; display: flex; flex: 1; min-height: 0; gap: 8px; padding: 8px; }
.spec--render-3d .r3x-side { flex: 0 0 31%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 8px; border-radius: 9px; background: #ffffff; border: 1px solid #e6e1dc; }
.spec--render-3d .r3x-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px; border-radius: 9px; background: #ffffff; border: 1px solid #e6e1dc; }
.spec--render-3d .r3x-detail { flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 8px; border-radius: 9px; background: #ffffff; border: 1px solid #e6e1dc; }
.spec--render-3d .r3x-head { margin: 0 0 2px; font-size: 9px; text-transform: uppercase; letter-spacing: .08em; color: #8b93a2; }
.spec--render-3d .r3x-row { display: flex; justify-content: space-between; align-items: baseline; gap: 6px; padding: 4px 6px; border-radius: 6px; }
.spec--render-3d .r3x-row.is-on { background: #eef1f8; box-shadow: inset 0 0 0 1px #d5dbe8; }
.spec--render-3d .r3x-lb { font-size: 10px; color: #414755; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--render-3d .r3x-vl { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #7b8290; font-variant-numeric: tabular-nums; }
.spec--render-3d .r3x-title { margin: 0; font-size: 13px; font-weight: 600; color: #2b2f3a; }
.spec--render-3d .r3x-stats { display: flex; gap: 6px; }
.spec--render-3d .r3x-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 1px; padding: 5px 7px; border-radius: 7px; background: #faf8f6; border: 1px solid #ece7e1; }
.spec--render-3d .r3x-sv { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 600; color: #2b2f3a; font-variant-numeric: tabular-nums; }
.spec--render-3d .r3x-sl { font-size: 9px; color: #8b93a2; }
.spec--render-3d .r3x-table { display: flex; flex-direction: column; gap: 3px; margin-top: 2px; }
.spec--render-3d .r3x-tr { display: grid; grid-template-columns: 1fr 1fr auto; gap: 6px; align-items: baseline; padding: 4px 6px; border-radius: 6px; background: #faf8f6; }
.spec--render-3d .r3x-tn { font-size: 10px; color: #7b8290; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--render-3d .r3x-tv { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #414755; font-variant-numeric: tabular-nums; }
.spec--render-3d .r3x-ts { font-size: 9px; color: #8b93a2; }
.spec--render-3d .r3x-ts.is-ok { color: #2f8f78; }
.spec--render-3d .r3x-meta { margin: 0; font-size: 10px; color: #5c6371; }
.spec--render-3d .r3x-btns { margin-top: auto; display: flex; flex-direction: column; gap: 5px; }
.spec--render-3d .r3x-b1 { border: 1px solid #3d4890; background: #3d4890; color: #ffffff; font: 600 10px/1 "Instrument Sans", sans-serif; padding: 7px 8px; border-radius: 6px; cursor: pointer; }
.spec--render-3d .r3x-b2 { border: 1px solid #d5dbe8; background: #ffffff; color: #3d4890; font: 500 10px/1 "Instrument Sans", sans-serif; padding: 7px 8px; border-radius: 6px; cursor: pointer; }`
};

window.COMPLEX["holographic"] = {
  html: `<div class="hox-app">
    <div class="hox-top">
      <span class="hox-mark">Prism</span>
      <span class="hox-nav">
        <span class="hox-n is-on">Library</span>
        <span class="hox-n">Releases</span>
        <span class="hox-n">Mixes</span>
        <span class="hox-n">Queue</span>
      </span>
      <span class="hox-user">vx</span>
    </div>
    <div class="hox-body">
      <div class="hox-side">
        <p class="hox-head">Library</p>
        <div class="hox-row is-on"><span class="hox-lb">Chrome Drift</span><span class="hox-vl">3:41</span></div>
        <div class="hox-row"><span class="hox-lb">Thin Film</span><span class="hox-vl">4:08</span></div>
        <div class="hox-row"><span class="hox-lb">Oil Slick</span><span class="hox-vl">2:56</span></div>
        <div class="hox-row"><span class="hox-lb">Pearl Gate</span><span class="hox-vl">5:12</span></div>
      </div>
      <div class="hox-main">
        <p class="hox-title">Chrome Drift</p>
        <div class="hox-stats">
          <div class="hox-stat"><span class="hox-sv">128</span><span class="hox-sl">bpm</span></div>
          <div class="hox-stat"><span class="hox-sv">44.1k</span><span class="hox-sl">rate</span></div>
          <div class="hox-stat"><span class="hox-sv">24</span><span class="hox-sl">bit</span></div>
        </div>
        <div class="hox-table">
          <div class="hox-tr"><span class="hox-tn">master</span><span class="hox-tv">-9.2 dB</span><span class="hox-ts is-ok">ok</span></div>
          <div class="hox-tr"><span class="hox-tn">stems</span><span class="hox-tv">6 files</span><span class="hox-ts is-ok">ok</span></div>
          <div class="hox-tr"><span class="hox-tn">artwork</span><span class="hox-tv">2048 px</span><span class="hox-ts">todo</span></div>
        </div>
      </div>
      <div class="hox-detail">
        <p class="hox-head">Release</p>
        <p class="hox-meta">Format WAV</p>
        <p class="hox-meta">Label Prism</p>
        <p class="hox-meta">Cut 2026-04</p>
        <div class="hox-btns">
          <button class="hox-b1" type="button">Publish</button>
          <button class="hox-b2" type="button">Preview</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--holographic .hox-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  overflow: hidden; background: #0e1013; border: 1px solid #000; border-radius: 4px;
  color: #c9d1d9; font-family: "Instrument Sans", sans-serif;
}
.spec--holographic .hox-top { display: flex; align-items: center; gap: 13px; height: 34px; flex: 0 0 34px; padding: 0 12px; background: #14171c; border-bottom: 1px solid #000; }
.spec--holographic .hox-mark {
  font: 800 12px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .06em;
  background: linear-gradient(100deg, #ffd6f6, #c8f6ff 30%, #fff3c4 55%, #d6c8ff 80%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-stroke: 1px rgba(0,0,0,.5);
}
.spec--holographic .hox-nav { display: flex; gap: 12px; margin-left: 6px; }
.spec--holographic .hox-n { font-size: 11px; color: #8b949e; }
.spec--holographic .hox-n.is-on { color: #e8eef5; font-weight: 600; }
.spec--holographic .hox-user { margin-left: auto; border: 1px solid transparent; border-image: linear-gradient(100deg, #ffd6f6, #c8f6ff 35%, #d6c8ff 70%) 1; background: #1a1e24; font: 700 10px/1 "Instrument Sans", sans-serif; color: #e8eef5; padding: 3px 8px; }
.spec--holographic .hox-body { display: flex; flex: 1; min-height: 0; gap: 8px; padding: 8px; }
.spec--holographic .hox-side { flex: 0 0 31%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 8px; background: #14171c; border: 1px solid transparent; border-image: linear-gradient(100deg, #ffd6f6, #c8f6ff 30%, #fff3c4 55%, #d6c8ff 80%) 1; }
.spec--holographic .hox-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px; background: #14171c; border: 1px solid transparent; border-image: linear-gradient(100deg, #ffd6f6, #c8f6ff 30%, #fff3c4 55%, #d6c8ff 80%) 1; }
.spec--holographic .hox-detail { flex: 0 0 24%; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 8px; background: #14171c; border: 1px solid transparent; border-image: linear-gradient(100deg, #ffd6f6, #c8f6ff 30%, #fff3c4 55%, #d6c8ff 80%) 1; }
.spec--holographic .hox-head {
  align-self: flex-start; margin: 0 0 2px; font: 700 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .08em;
  background: linear-gradient(100deg, #ffd6f6, #c8f6ff 40%, #d6c8ff 75%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-stroke: .4px rgba(0,0,0,.4);
}
.spec--holographic .hox-row { display: flex; justify-content: space-between; align-items: baseline; gap: 6px; padding: 4px 6px; background: #191d23; border: 1px solid #242a32; }
.spec--holographic .hox-row.is-on { background: linear-gradient(100deg, rgba(255,214,246,.22), rgba(200,246,255,.22) 45%, rgba(214,200,255,.22)); border-color: #4a5260; }
.spec--holographic .hox-lb { font-size: 10px; color: #c9d1d9; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--holographic .hox-vl { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #8b949e; font-variant-numeric: tabular-nums; }
.spec--holographic .hox-title {
  margin: 0; font: 800 13px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: -0.01em;
  background: linear-gradient(100deg, #ffd6f6, #c8f6ff 30%, #fff3c4 55%, #d6c8ff 80%);
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-stroke: 1px rgba(0,0,0,.55);
}
.spec--holographic .hox-stats { display: flex; gap: 6px; }
.spec--holographic .hox-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 1px; padding: 5px 7px; background: #191d23; border: 1px solid #242a32; border-top: 1px solid transparent; border-top-color: #2b323c; }
.spec--holographic .hox-sv { font-family: "IBM Plex Mono", monospace; font-size: 12px; font-weight: 600; color: #e8eef5; font-variant-numeric: tabular-nums; }
.spec--holographic .hox-sl { font-size: 9px; color: #8b949e; }
.spec--holographic .hox-table { display: flex; flex-direction: column; gap: 3px; margin-top: 2px; }
.spec--holographic .hox-tr { display: grid; grid-template-columns: 1fr 1fr auto; gap: 6px; align-items: baseline; padding: 4px 6px; background: #191d23; border: 1px solid #242a32; }
.spec--holographic .hox-tn { font-size: 10px; color: #8b949e; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.spec--holographic .hox-tv { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #c9d1d9; font-variant-numeric: tabular-nums; }
.spec--holographic .hox-ts { font-size: 9px; color: #8b949e; }
.spec--holographic .hox-ts.is-ok { color: #9ee8d8; }
.spec--holographic .hox-meta { margin: 0; font-size: 10px; color: #aab3bd; }
.spec--holographic .hox-btns { margin-top: auto; display: flex; flex-direction: column; gap: 5px; }
.spec--holographic .hox-b1 {
  border: 1px solid #000; font: 700 10px/1 "Instrument Sans", sans-serif; color: #0e1013; padding: 7px 8px; cursor: pointer;
  background: linear-gradient(100deg, #ffd6f6, #c8f6ff 30%, #fff3c4 55%, #d6c8ff 80%);
}
.spec--holographic .hox-b2 { border: 1px solid transparent; border-image: linear-gradient(100deg, #ffd6f6, #c8f6ff 35%, #d6c8ff 70%) 1; background: #191d23; font: 600 10px/1 "Instrument Sans", sans-serif; color: #e8eef5; padding: 7px 8px; cursor: pointer; }`
};

window.COMPLEX["maximalism"] = {
  html: `<div class="mxx-app">
    <div class="mxx-top">
      <span class="mxx-mark">MORE</span>
      <nav class="mxx-nav">
        <span class="mxx-n">Mix</span>
        <span class="mxx-n is-on">Boards</span>
        <span class="mxx-n">Type</span>
        <span class="mxx-n">Shop</span>
      </nav>
      <span class="mxx-user">R. KALO / LIVE</span>
    </div>
    <div class="mxx-body">
      <div class="mxx-side">
        <p class="mxx-head">Boards</p>
        <div class="mxx-row is-sel"><span class="mxx-lab">Signal</span><span class="mxx-val">04</span></div>
        <div class="mxx-row"><span class="mxx-lab">Loud</span><span class="mxx-val">11</span></div>
        <div class="mxx-row"><span class="mxx-lab">Ink</span><span class="mxx-val">02</span></div>
        <div class="mxx-row"><span class="mxx-lab">Archive</span><span class="mxx-val">37</span></div>
        <span class="mxx-fi"></span>
      </div>
      <div class="mxx-main">
        <p class="mxx-title">Signal Board</p>
        <div class="mxx-stats">
          <div class="mxx-stat s1"><span class="mxx-sv">4</span><span class="mxx-sk">Hues</span></div>
          <div class="mxx-stat s2"><span class="mxx-sv">12</span><span class="mxx-sk">Layers</span></div>
          <div class="mxx-stat s3"><span class="mxx-sv">88%</span><span class="mxx-sk">Fill</span></div>
        </div>
        <div class="mxx-table">
          <div class="mxx-tr is-th"><span class="mxx-td">Lane</span><span class="mxx-td">Value</span><span class="mxx-td">State</span></div>
          <div class="mxx-tr"><span class="mxx-td">Orange</span><span class="mxx-td n">FF5D3B</span><span class="mxx-td s">On</span></div>
          <div class="mxx-tr"><span class="mxx-td">Blue</span><span class="mxx-td n">2B2BFF</span><span class="mxx-td s">On</span></div>
          <div class="mxx-tr"><span class="mxx-td">Yellow</span><span class="mxx-td n">FFE500</span><span class="mxx-td s">On</span></div>
        </div>
      </div>
      <div class="mxx-detail">
        <p class="mxx-head">Board 04</p>
        <p class="mxx-meta">Owner / R. Kalo</p>
        <p class="mxx-meta">Updated / 09:12</p>
        <p class="mxx-meta">Stack / 12 layers</p>
        <div class="mxx-acts">
          <button class="mxx-btn" type="button">Publish</button>
          <button class="mxx-btn2" type="button">Duplicate</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--maximalism .mxx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #f6f0e4; border: 3px solid #12131a; color: #12131a;
  font-family: "Instrument Sans", sans-serif;
}
.spec--maximalism .mxx-top {
  flex: 0 0 36px; display: flex; align-items: center; gap: 9px; padding: 0 11px;
  background: #2b2bff; color: #fff; border-bottom: 3px solid #12131a;
}
.spec--maximalism .mxx-mark {
  font: 900 13px/1 "Instrument Sans", sans-serif; letter-spacing: -.02em;
  background: #ffe500; color: #12131a; padding: 4px 7px; border: 2px solid #12131a; transform: rotate(-2deg);
}
.spec--maximalism .mxx-nav { display: flex; gap: 7px; min-width: 0; }
.spec--maximalism .mxx-n {
  font: 700 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .06em; padding: 4px 6px;
}
.spec--maximalism .mxx-n.is-on { background: #ff5d3b; border: 2px solid #12131a; transform: rotate(2deg); }
.spec--maximalism .mxx-user { margin-left: auto; font: 700 9px/1 "IBM Plex Mono", monospace; letter-spacing: .06em; white-space: nowrap; }
.spec--maximalism .mxx-body { flex: 1 1 auto; display: flex; gap: 8px; padding: 8px; min-height: 0; }
.spec--maximalism .mxx-side {
  flex: 0 0 24%; min-width: 0; background: #ffe500; border: 3px solid #12131a;
  padding: 6px; display: flex; flex-direction: column; gap: 4px;
}
.spec--maximalism .mxx-head {
  margin: 0; font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .14em;
}
.spec--maximalism .mxx-detail .mxx-head { color: #ffe500; }
.spec--maximalism .mxx-row {
  flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 4px 6px; border: 2px solid #12131a; background: #f6f0e4;
  font: 700 10px/1.1 "Instrument Sans", sans-serif;
}
.spec--maximalism .mxx-row.is-sel { background: #2b2bff; color: #fff; transform: rotate(-1deg); }
.spec--maximalism .mxx-val { font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--maximalism .mxx-fi {
  flex: 1 1 auto; min-height: 12px; border: 2px solid #12131a;
  background: repeating-linear-gradient(45deg, #ff5d3b 0 9px, #2b2bff 9px 18px, #ffe500 18px 27px);
}
.spec--maximalism .mxx-main {
  flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px;
  padding: 7px; background: #f6f0e4; border: 3px solid #12131a;
}
.spec--maximalism .mxx-title {
  margin: 0; align-self: flex-start; background: #ff5d3b; color: #fff; padding: 4px 8px;
  border: 2px solid #12131a; transform: rotate(-1.5deg);
  font: 900 13px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: -.01em;
}
.spec--maximalism .mxx-stats { display: flex; gap: 6px; }
.spec--maximalism .mxx-stat {
  flex: 1 1 0; min-width: 0; border: 3px solid #12131a; padding: 4px 7px;
  display: flex; flex-direction: column; gap: 2px;
}
.spec--maximalism .mxx-stat.s1 { background: #ff5d3b; color: #fff; }
.spec--maximalism .mxx-stat.s2 { background: #ffe500; color: #12131a; }
.spec--maximalism .mxx-stat.s3 { background: #2b2bff; color: #fff; }
.spec--maximalism .mxx-sv { font: 900 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--maximalism .mxx-sk { font: 700 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .1em; }
.spec--maximalism .mxx-table { display: flex; flex-direction: column; gap: 3px; }
.spec--maximalism .mxx-tr {
  display: grid; grid-template-columns: 1.4fr 1fr .7fr; gap: 6px; padding: 3px 6px;
  border-bottom: 2px solid #12131a; font: 700 10px/1.1 "Instrument Sans", sans-serif;
}
.spec--maximalism .mxx-tr.is-th {
  background: #12131a; color: #f6f0e4; border-bottom: 0; font-size: 9px;
  text-transform: uppercase; letter-spacing: .1em;
}
.spec--maximalism .mxx-td { min-width: 0; overflow: hidden; }
.spec--maximalism .mxx-td.n { font-family: "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--maximalism .mxx-td.s { text-transform: uppercase; font-size: 9px; letter-spacing: .08em; }
.spec--maximalism .mxx-detail {
  flex: 0 0 22%; min-width: 0; background: #2b2bff; color: #fff; border: 3px solid #12131a;
  padding: 7px; display: flex; flex-direction: column; gap: 5px;
}
.spec--maximalism .mxx-meta {
  margin: 0; font: 700 10px/1.2 "Instrument Sans", sans-serif;
  border-bottom: 2px solid rgba(255,255,255,.4); padding-bottom: 3px;
}
.spec--maximalism .mxx-acts { margin-top: auto; display: flex; flex-direction: column; gap: 5px; }
.spec--maximalism .mxx-btn {
  border: 3px solid #12131a; background: #ffe500; color: #12131a; cursor: pointer;
  font: 800 11px/1 "Instrument Sans", sans-serif; padding: 7px 0; transform: rotate(-1deg);
}
.spec--maximalism .mxx-btn2 {
  border: 3px solid #fff; background: transparent; color: #fff; cursor: pointer;
  font: 800 10px/1 "Instrument Sans", sans-serif; padding: 6px 0;
}`
};

window.COMPLEX["memphis"] = {
  html: `<div class="mex-app">
    <div class="mex-top">
      <span class="mex-mark">POP!</span>
      <nav class="mex-nav">
        <span class="mex-n">Play</span>
        <span class="mex-n is-on">Levels</span>
        <span class="mex-n">Skins</span>
        <span class="mex-n">Rank</span>
      </nav>
      <span class="mex-user"><svg class="mex-squig" viewBox="0 0 60 14" aria-hidden="true"><path d="M1 7 Q8 1 15 7 T29 7 T43 7 T57 7" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/></svg>N. Rey</span>
    </div>
    <div class="mex-body">
      <div class="mex-side">
        <p class="mex-head">Levels</p>
        <div class="mex-row is-sel"><span class="mex-lab">Squiggle</span><span class="mex-val">04</span></div>
        <div class="mex-row"><span class="mex-lab">Zigzag</span><span class="mex-val">11</span></div>
        <div class="mex-row"><span class="mex-lab">Terrazzo</span><span class="mex-val">02</span></div>
        <div class="mex-row"><span class="mex-lab">Arcade</span><span class="mex-val">37</span></div>
        <span class="mex-fi"></span>
      </div>
      <div class="mex-main">
        <p class="mex-title">Party Round</p>
        <div class="mex-stats">
          <div class="mex-stat s1"><span class="mex-sv">3</span><span class="mex-sk">Colours</span></div>
          <div class="mex-stat s2"><span class="mex-sv">12</span><span class="mex-sk">Tiles</span></div>
          <div class="mex-stat s3"><span class="mex-sv">48%</span><span class="mex-sk">Cleared</span></div>
        </div>
        <div class="mex-table">
          <div class="mex-tr is-th"><span class="mex-td">Shape</span><span class="mex-td">Value</span><span class="mex-td">State</span></div>
          <div class="mex-tr"><span class="mex-td">Dot</span><span class="mex-td n">2EC4E6</span><span class="mex-td s">On</span></div>
          <div class="mex-tr"><span class="mex-td">Semi</span><span class="mex-td n">FF5A5A</span><span class="mex-td s">On</span></div>
          <div class="mex-tr"><span class="mex-td">Wobble</span><span class="mex-td n">FFCF2E</span><span class="mex-td s">Off</span></div>
        </div>
      </div>
      <div class="mex-detail">
        <p class="mex-head">Round 04</p>
        <p class="mex-meta">Host / N. Rey</p>
        <p class="mex-meta">Tiles / 12 out</p>
        <p class="mex-meta">Clock / 02:40</p>
        <div class="mex-acts">
          <button class="mex-btn" type="button">Play on</button>
          <button class="mex-btn2" type="button">Remix</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--memphis .mex-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #faf7f0; border: 3px solid #111; color: #111;
  font-family: "Instrument Sans", sans-serif;
}
.spec--memphis .mex-top {
  position: relative; flex: 0 0 36px; display: flex; align-items: center; gap: 9px; padding: 0 11px;
  background: #fff; border-bottom: 3px solid #111;
}
.spec--memphis .mex-top::after {
  content: ""; position: absolute; right: 108px; top: 6px; width: 11px; height: 11px;
  border: 3px solid #111; border-radius: 50%; background: #7ce38b;
}
.spec--memphis .mex-mark {
  font: 900 13px/1 "Instrument Sans", sans-serif; letter-spacing: -.02em;
  background: #ffcf2e; color: #111; padding: 4px 8px; border: 3px solid #111;
  border-radius: 3px; transform: rotate(-3deg);
}
.spec--memphis .mex-nav { display: flex; gap: 7px; min-width: 0; }
.spec--memphis .mex-n {
  font: 700 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .06em; padding: 4px 7px; border: 3px solid transparent;
}
.spec--memphis .mex-n.is-on { background: #2ec4e6; border-color: #111; border-radius: 3px; transform: rotate(2deg); }
.spec--memphis .mex-user {
  display: flex; align-items: center; gap: 5px; margin-left: auto;
  font: 700 10px/1 "Instrument Sans", sans-serif; white-space: nowrap;
}
.spec--memphis .mex-squig { width: 44px; height: 11px; display: block; flex: 0 0 auto; }
.spec--memphis .mex-body { flex: 1 1 auto; display: flex; gap: 8px; padding: 8px; min-height: 0; }
.spec--memphis .mex-side {
  position: relative; flex: 0 0 24%; min-width: 0; background: #ffcf2e;
  border: 3px solid #111; border-radius: 3px; padding: 6px;
  display: flex; flex-direction: column; gap: 4px;
}
.spec--memphis .mex-side::after {
  content: ""; position: absolute; right: 7px; bottom: 7px; width: 12px; height: 12px;
  border: 3px solid #111; border-radius: 50%; background: #ff5a5a;
}
.spec--memphis .mex-head {
  margin: 0; font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .14em;
}
.spec--memphis .mex-detail .mex-head { color: #111; }
.spec--memphis .mex-row {
  flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 4px 6px; border: 3px solid #111; border-radius: 3px; background: #fff;
  font: 700 10px/1.1 "Instrument Sans", sans-serif;
}
.spec--memphis .mex-row.is-sel { background: #fff; box-shadow: 3px 3px 0 #111; transform: rotate(-1deg); }
.spec--memphis .mex-val { font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--memphis .mex-fi {
  flex: 1 1 auto; min-height: 12px; border: 3px solid #111; border-radius: 3px;
  background: repeating-linear-gradient(45deg, #111 0 5px, #faf7f0 5px 11px);
}
.spec--memphis .mex-main {
  flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px;
  padding: 7px; background: #fff; border: 3px solid #111; border-radius: 3px;
  background-image: radial-gradient(#2ec4e6 1.5px, transparent 2px); background-size: 20px 20px;
}
.spec--memphis .mex-title {
  margin: 0; align-self: flex-start; background: #2ec4e6; color: #111; padding: 4px 9px;
  border: 3px solid #111; border-radius: 3px; transform: rotate(-1.5deg);
  font: 900 13px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: -.01em;
}
.spec--memphis .mex-stats { display: flex; gap: 6px; }
.spec--memphis .mex-stat {
  flex: 1 1 0; min-width: 0; border: 3px solid #111; border-radius: 3px; padding: 4px 7px;
  display: flex; flex-direction: column; gap: 2px; background: #faf7f0;
}
.spec--memphis .mex-stat.s1 { background: #7ce38b; }
.spec--memphis .mex-stat.s2 { background: #ff5a5a; }
.spec--memphis .mex-stat.s3 { background: #ffcf2e; }
.spec--memphis .mex-sv { font: 900 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--memphis .mex-sk { font: 700 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .1em; }
.spec--memphis .mex-table { display: flex; flex-direction: column; gap: 3px; }
.spec--memphis .mex-tr {
  display: grid; grid-template-columns: 1.4fr 1fr .7fr; gap: 6px; padding: 3px 6px;
  border: 3px solid #111; border-radius: 3px; background: #faf7f0;
  font: 700 10px/1.1 "Instrument Sans", sans-serif;
}
.spec--memphis .mex-tr.is-th { background: #111; color: #faf7f0; font-size: 9px; text-transform: uppercase; letter-spacing: .1em; }
.spec--memphis .mex-td { min-width: 0; overflow: hidden; }
.spec--memphis .mex-td.n { font-family: "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
.spec--memphis .mex-td.s { text-transform: uppercase; font-size: 9px; letter-spacing: .08em; }
.spec--memphis .mex-detail {
  flex: 0 0 22%; min-width: 0; background: #2ec4e6; color: #111; border: 3px solid #111;
  border-radius: 3px; padding: 7px; display: flex; flex-direction: column; gap: 5px;
}
.spec--memphis .mex-meta {
  margin: 0; font: 700 10px/1.2 "Instrument Sans", sans-serif;
  background: #faf7f0; border: 2px solid #111; border-radius: 3px; padding: 2px 4px;
}
.spec--memphis .mex-acts { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
.spec--memphis .mex-btn {
  border: 3px solid #111; background: #ffcf2e; color: #111; cursor: pointer; border-radius: 3px;
  font: 800 11px/1 "Instrument Sans", sans-serif; padding: 7px 0; box-shadow: 3px 3px 0 #111;
}
.spec--memphis .mex-btn2 {
  border: 3px solid #111; background: #fff; color: #111; cursor: pointer; border-radius: 3px;
  font: 800 10px/1 "Instrument Sans", sans-serif; padding: 6px 0;
}`
};

window.COMPLEX["vaporwave"] = {
  html: `<div class="vpx-app">
    <span class="vpx-sun" aria-hidden="true"></span>
    <span class="vpx-floor" aria-hidden="true"><span class="vpx-grid"></span></span>
    <header class="vpx-top">
      <p class="vpx-mark">NIGHTDRIVE</p>
      <nav class="vpx-nav"><i class="on">Stations</i><i>Library</i><i>Mixes</i><i>Archive</i></nav>
      <span class="vpx-stat">on air 03:14</span>
    </header>
    <div class="vpx-body">
      <section class="vpx-side">
        <p class="vpx-head">Tracks</p>
        <div class="vpx-row is-sel"><span>Sunset Run</span><b>4:12</b></div>
        <div class="vpx-row"><span>Chrome Coast</span><b>5:03</b></div>
        <div class="vpx-row"><span>Neon Rain</span><b>3:48</b></div>
        <div class="vpx-row"><span>Afterglow</span><b>6:20</b></div>
      </section>
      <section class="vpx-main">
        <p class="vpx-title">STATION 07</p>
        <div class="vpx-stats">
          <div class="vpx-cell"><b>128</b><i>listeners</i></div>
          <div class="vpx-cell"><b>96</b><i>kbps</i></div>
          <div class="vpx-cell"><b>4:12</b><i>cue left</i></div>
        </div>
        <div class="vpx-table">
          <div class="vpx-tr"><span>Deck A</span><b>Sunset Run</b><i class="ok">playing</i></div>
          <div class="vpx-tr"><span>Deck B</span><b>Chrome Coast</b><i>queued</i></div>
          <div class="vpx-tr"><span>Mix</span><b>Late Dusk</b><i>ready</i></div>
        </div>
      </section>
      <aside class="vpx-detail">
        <p class="vpx-head">Now Playing</p>
        <p class="vpx-meta"><span>Artist</span><b>Violet Coast</b></p>
        <p class="vpx-meta"><span>Album</span><b>Midnight Mall</b></p>
        <p class="vpx-meta"><span>Genre</span><b>Synthwave</b></p>
        <div class="vpx-acts">
          <button class="vpx-btn" type="button">Boost</button>
          <button class="vpx-btn2" type="button">Skip</button>
        </div>
      </aside>
    </div>
  </div>`,
  css: `.spec--vaporwave .vpx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  overflow: hidden; border-radius: 4px; font-family: "Instrument Sans", sans-serif;
  background: linear-gradient(#12071f, #2a0b3d 58%, #12071f);
  box-shadow: inset 0 0 0 1px rgba(46,240,255,.28);
}
.spec--vaporwave .vpx-app::after {
  content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 3;
  background: repeating-linear-gradient(transparent 0 2px, rgba(0,0,0,.22) 2px 3px);
}
.spec--vaporwave .vpx-sun {
  position: absolute; left: 11%; bottom: 6px; width: 82px; height: 82px; margin-left: -41px;
  border-radius: 50%; background: linear-gradient(#ffd75e, #ff5aa8 55%, #ff2ec4);
  -webkit-mask-image: repeating-linear-gradient(#000 0 6px, transparent 6px 9px);
  mask-image: repeating-linear-gradient(#000 0 6px, transparent 6px 9px);
  box-shadow: 0 0 30px rgba(255,46,196,.45); z-index: 0;
}
.spec--vaporwave .vpx-floor {
  position: absolute; inset: auto 0 26px 0; height: 78px; overflow: hidden; z-index: 0;
}
.spec--vaporwave .vpx-grid {
  position: absolute; inset: 0 -30% 0 -30%;
  background: repeating-linear-gradient(90deg, #2ef0ff 0 1px, transparent 1px 26px),
              repeating-linear-gradient(#2ef0ff 0 1px, transparent 1px 20px);
  transform: perspective(160px) rotateX(58deg); opacity: .38;
}
.spec--vaporwave .vpx-top {
  position: relative; z-index: 2; display: flex; align-items: center; gap: 18px;
  flex: 0 0 auto; height: 36px; padding: 0 14px;
  border-bottom: 1px solid rgba(46,240,255,.35);
  background: rgba(18,7,31,.72);
}
.spec--vaporwave .vpx-mark {
  margin: 0; font: 800 13px/1 "Instrument Sans", sans-serif; letter-spacing: .18em;
  background: linear-gradient(#ffffff, #cfe9ff 42%, #7aa6ff 62%, #ffffff);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  -webkit-text-stroke: .5px rgba(46,240,255,.55);
}
.spec--vaporwave .vpx-nav { display: flex; gap: 14px; }
.spec--vaporwave .vpx-nav i {
  font: 600 10px/1 "Instrument Sans", sans-serif; font-style: normal; letter-spacing: .14em;
  text-transform: uppercase; color: #b48ad6; padding-bottom: 2px;
}
.spec--vaporwave .vpx-nav i.on {
  color: #2ef0ff; box-shadow: inset 0 -2px 0 #2ef0ff; text-shadow: 0 0 10px rgba(46,240,255,.8);
}
.spec--vaporwave .vpx-stat {
  margin-left: auto; font: 500 10px/1 "IBM Plex Mono", monospace; letter-spacing: .1em;
  text-transform: uppercase; color: #ff8ad8; text-shadow: 0 0 10px rgba(255,46,196,.75);
  font-variant-numeric: tabular-nums;
}
.spec--vaporwave .vpx-body { position: relative; z-index: 2; display: flex; flex: 1 1 auto; min-height: 0; }
.spec--vaporwave .vpx-side {
  flex: 0 0 21%; min-width: 0; display: flex; flex-direction: column; padding: 8px 10px;
  border-right: 1px solid rgba(46,240,255,.22); background: rgba(18,7,31,.55);
}
.spec--vaporwave .vpx-head {
  margin: 0 0 6px; font: 700 9px/1 "Instrument Sans", sans-serif; letter-spacing: .2em;
  text-transform: uppercase; color: #9d7fd0;
}
.spec--vaporwave .vpx-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 6px;
  padding: 5px 6px; border-bottom: 1px solid rgba(46,240,255,.14);
}
.spec--vaporwave .vpx-row span {
  font-size: 11px; color: #e7d9ff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.spec--vaporwave .vpx-row b {
  font: 500 10px/1 "IBM Plex Mono", monospace; color: #9ad9e6; font-variant-numeric: tabular-nums;
}
.spec--vaporwave .vpx-row.is-sel {
  background: rgba(46,240,255,.12); box-shadow: inset 2px 0 0 #2ef0ff;
}
.spec--vaporwave .vpx-row.is-sel span { color: #2ef0ff; text-shadow: 0 0 8px rgba(46,240,255,.6); }
.spec--vaporwave .vpx-row.is-sel b { color: #8ff6ff; }
.spec--vaporwave .vpx-main {
  flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; padding: 8px 12px;
}
.spec--vaporwave .vpx-title {
  margin: 0 0 7px; font: 800 12px/1 "Instrument Sans", sans-serif; letter-spacing: .2em;
  text-transform: uppercase;
  background: linear-gradient(#ffffff, #cfe9ff 42%, #7aa6ff 62%, #ffffff);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  -webkit-text-stroke: .5px rgba(46,240,255,.55);
}
.spec--vaporwave .vpx-stats { display: flex; gap: 8px; margin-bottom: 8px; }
.spec--vaporwave .vpx-cell {
  flex: 1 1 0; min-width: 0; padding: 6px 8px; border: 1px solid rgba(46,240,255,.3);
  background: rgba(46,240,255,.06); box-shadow: inset 0 0 12px rgba(46,240,255,.12);
}
.spec--vaporwave .vpx-cell b {
  display: block; font: 500 16px/1.1 "IBM Plex Mono", monospace; color: #2ef0ff;
  text-shadow: 0 0 12px rgba(46,240,255,.7); font-variant-numeric: tabular-nums;
}
.spec--vaporwave .vpx-cell i {
  display: block; margin-top: 3px; font: 600 9px/1 "Instrument Sans", sans-serif;
  font-style: normal; letter-spacing: .16em; text-transform: uppercase; color: #a98ad6;
}
.spec--vaporwave .vpx-table { display: flex; flex-direction: column; flex: 1 1 auto; min-height: 0; }
.spec--vaporwave .vpx-tr {
  display: flex; align-items: center; gap: 8px; padding: 4px 0;
  border-top: 1px solid rgba(46,240,255,.16); font-size: 11px;
}
.spec--vaporwave .vpx-tr span { flex: 0 0 58px; color: #b48ad6; letter-spacing: .04em; }
.spec--vaporwave .vpx-tr b {
  flex: 1 1 auto; min-width: 0; font-weight: 500; color: #f0e6ff;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.spec--vaporwave .vpx-tr i {
  flex: 0 0 auto; font: 600 9px/1 "Instrument Sans", sans-serif; font-style: normal;
  letter-spacing: .14em; text-transform: uppercase; color: #ff8ad8;
}
.spec--vaporwave .vpx-tr i.ok { color: #2ef0ff; text-shadow: 0 0 8px rgba(46,240,255,.7); }
.spec--vaporwave .vpx-detail {
  flex: 0 0 25%; min-width: 0; display: flex; flex-direction: column; padding: 8px 10px;
  border-left: 1px solid rgba(46,240,255,.22); background: rgba(18,7,31,.6);
}
.spec--vaporwave .vpx-meta {
  display: flex; align-items: baseline; justify-content: space-between; gap: 6px;
  margin: 0; padding: 4px 0; border-bottom: 1px solid rgba(46,240,255,.14);
}
.spec--vaporwave .vpx-meta span {
  font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .16em; text-transform: uppercase;
  color: #9d7fd0;
}
.spec--vaporwave .vpx-meta b {
  font: 500 10px/1 "IBM Plex Mono", monospace; color: #e7d9ff;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.spec--vaporwave .vpx-acts { margin-top: auto; display: flex; gap: 6px; padding-top: 8px; }
.spec--vaporwave .vpx-btn {
  flex: 1 1 0; cursor: pointer; border: 1px solid #2ef0ff; background: rgba(46,240,255,.1);
  color: #d9fbff; font: 600 10px/1 "Instrument Sans", sans-serif; letter-spacing: .16em;
  text-transform: uppercase; padding: 7px 8px;
  box-shadow: 0 0 16px rgba(46,240,255,.45), inset 0 0 10px rgba(46,240,255,.22);
}
.spec--vaporwave .vpx-btn2 {
  flex: 1 1 0; cursor: pointer; border: 1px solid #ff2ec4; background: rgba(255,46,196,.08);
  color: #ffc9ec; font: 600 10px/1 "Instrument Sans", sans-serif; letter-spacing: .16em;
  text-transform: uppercase; padding: 7px 8px; box-shadow: 0 0 14px rgba(255,46,196,.35);
}`
};

window.COMPLEX["cyberpunk-hud"] = {
  html: `<div class="cyx-app">
    <header class="cyx-top">
      <p class="cyx-mark">GRIDWATCH</p>
      <nav class="cyx-nav"><i class="on">Uplink</i><i>Nodes</i><i>Trace</i><i>Log</i></nav>
      <span class="cyx-stat">live</span>
    </header>
    <div class="cyx-body">
      <section class="cyx-side">
        <p class="cyx-head">Node set</p>
        <div class="cyx-row is-sel"><span>07-KX</span><b>ok</b></div>
        <div class="cyx-row"><span>04-RL</span><b>ok</b></div>
        <div class="cyx-row"><span>11-VN</span><b>warn</b></div>
        <div class="cyx-row"><span>02-HD</span><b>idle</b></div>
      </section>
      <section class="cyx-main">
        <p class="cyx-title">Uplink Status</p>
        <div class="cyx-stats">
          <div class="cyx-cell"><b>24</b><i>ms latency</i></div>
          <div class="cyx-cell"><b>88</b><i>pct signal</i></div>
          <div class="cyx-cell"><b>1.2k</b><i>req per s</i></div>
        </div>
        <div class="cyx-table">
          <div class="cyx-tr"><span>Relay</span><b>07-KX / 04-RL</b><i class="ok">locked</i></div>
          <div class="cyx-tr"><span>Trace</span><b>11-VN / hop 3</b><i class="warn">hold</i></div>
          <div class="cyx-tr"><span>Buffer</span><b>62 pct used</b><i>stable</i></div>
        </div>
      </section>
      <aside class="cyx-detail">
        <p class="cyx-head">Channel</p>
        <p class="cyx-meta"><span>Cipher</span><b>AX-114</b></p>
        <p class="cyx-meta"><span>Key</span><b>rot 07</b></p>
        <p class="cyx-meta"><span>Window</span><b>90 s</b></p>
        <div class="cyx-acts">
          <button class="cyx-btn" type="button">Connect</button>
          <button class="cyx-btn2" type="button">Abort</button>
        </div>
      </aside>
    </div>
  </div>`,
  css: `.spec--cyberpunk-hud .cyx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column;
  overflow: hidden; font-family: "IBM Plex Mono", monospace; color: #ccf7ea;
  background: #080d10; box-shadow: inset 0 0 0 1px rgba(29,233,182,.45), inset 0 0 40px rgba(29,233,182,.08);
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
}
.spec--cyberpunk-hud .cyx-top {
  position: relative; display: flex; align-items: center; gap: 16px; flex: 0 0 auto; height: 34px;
  padding: 0 16px; background: #0a1218; border-bottom: 1px solid rgba(29,233,182,.4);
}
.spec--cyberpunk-hud .cyx-top::before {
  content: ""; position: absolute; left: 0; top: 6px; bottom: 6px; width: 3px; background: #1de9b6;
  box-shadow: 0 0 12px rgba(29,233,182,.9);
}
.spec--cyberpunk-hud .cyx-mark {
  margin: 0; font: 600 12px/1 "IBM Plex Mono", monospace; letter-spacing: .26em;
  text-transform: uppercase; color: #f2fffb; text-shadow: 0 0 12px rgba(29,233,182,.8);
}
.spec--cyberpunk-hud .cyx-nav { display: flex; gap: 14px; }
.spec--cyberpunk-hud .cyx-nav i {
  font: 500 10px/1 "IBM Plex Mono", monospace; font-style: normal; letter-spacing: .22em;
  text-transform: uppercase; color: #6d8f8a;
}
.spec--cyberpunk-hud .cyx-nav i.on {
  color: #1de9b6; text-shadow: 0 0 10px rgba(29,233,182,.8); box-shadow: inset 0 -2px 0 #1de9b6;
}
.spec--cyberpunk-hud .cyx-stat {
  margin-left: auto; padding: 3px 8px; border: 1px solid rgba(255,179,0,.7); color: #ffb300;
  font: 500 10px/1 "IBM Plex Mono", monospace; letter-spacing: .22em; text-transform: uppercase;
  text-shadow: 0 0 10px rgba(255,179,0,.8); background: rgba(255,179,0,.08);
}
.spec--cyberpunk-hud .cyx-body { display: flex; flex: 1 1 auto; min-height: 0; }
.spec--cyberpunk-hud .cyx-side {
  flex: 0 0 20%; min-width: 0; display: flex; flex-direction: column; padding: 8px 10px;
  background: #060a0d; border-right: 1px solid rgba(29,233,182,.28);
}
.spec--cyberpunk-hud .cyx-head {
  margin: 0 0 6px; font: 500 9px/1 "IBM Plex Mono", monospace; letter-spacing: .24em;
  text-transform: uppercase; color: #5de0c8;
}
.spec--cyberpunk-hud .cyx-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 6px;
  padding: 5px 6px; border-bottom: 1px dashed rgba(29,233,182,.3);
}
.spec--cyberpunk-hud .cyx-row span {
  font: 500 11px/1 "IBM Plex Mono", monospace; color: #9fb3c8; letter-spacing: .06em;
}
.spec--cyberpunk-hud .cyx-row b {
  font: 500 10px/1 "IBM Plex Mono", monospace; color: #1de9b6; letter-spacing: .1em;
  text-transform: uppercase;
}
.spec--cyberpunk-hud .cyx-row.is-sel { background: rgba(29,233,182,.1); box-shadow: inset 2px 0 0 #1de9b6; }
.spec--cyberpunk-hud .cyx-row.is-sel span { color: #f2fffb; }
.spec--cyberpunk-hud .cyx-row.is-sel b { color: #7dfbe0; text-shadow: 0 0 10px rgba(29,233,182,.8); }
.spec--cyberpunk-hud .cyx-main {
  flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; padding: 8px 12px;
}
.spec--cyberpunk-hud .cyx-title {
  margin: 0 0 7px; font: 600 11px/1 "IBM Plex Mono", monospace; letter-spacing: .24em;
  text-transform: uppercase; color: #f2fffb; text-shadow: 0 0 12px rgba(29,233,182,.7);
}
.spec--cyberpunk-hud .cyx-stats { display: flex; gap: 8px; margin-bottom: 8px; }
.spec--cyberpunk-hud .cyx-cell {
  flex: 1 1 0; min-width: 0; padding: 6px 8px; background: #0b141a;
  border: 1px solid rgba(29,233,182,.35);
  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
}
.spec--cyberpunk-hud .cyx-cell b {
  display: block; font: 500 16px/1.1 "IBM Plex Mono", monospace; color: #7dfbe0;
  text-shadow: 0 0 14px rgba(125,251,224,.55); font-variant-numeric: tabular-nums;
}
.spec--cyberpunk-hud .cyx-cell i {
  display: block; margin-top: 3px; font: 500 9px/1 "IBM Plex Mono", monospace; font-style: normal;
  letter-spacing: .18em; text-transform: uppercase; color: #6d8f8a;
}
.spec--cyberpunk-hud .cyx-table { display: flex; flex-direction: column; flex: 1 1 auto; min-height: 0; }
.spec--cyberpunk-hud .cyx-tr {
  display: flex; align-items: center; gap: 8px; padding: 4px 0;
  border-top: 1px solid rgba(29,233,182,.2); font-size: 11px;
}
.spec--cyberpunk-hud .cyx-tr span {
  flex: 0 0 56px; font: 500 9px/1 "IBM Plex Mono", monospace; letter-spacing: .2em;
  text-transform: uppercase; color: #5de0c8;
}
.spec--cyberpunk-hud .cyx-tr b {
  flex: 1 1 auto; min-width: 0; font: 500 11px/1 "IBM Plex Mono", monospace; color: #eafff9;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-variant-numeric: tabular-nums;
}
.spec--cyberpunk-hud .cyx-tr i {
  flex: 0 0 auto; font: 500 9px/1 "IBM Plex Mono", monospace; font-style: normal;
  letter-spacing: .16em; text-transform: uppercase; color: #6d8f8a;
}
.spec--cyberpunk-hud .cyx-tr i.ok { color: #1de9b6; text-shadow: 0 0 10px rgba(29,233,182,.8); }
.spec--cyberpunk-hud .cyx-tr i.warn { color: #ffb300; text-shadow: 0 0 10px rgba(255,179,0,.8); }
.spec--cyberpunk-hud .cyx-detail {
  flex: 0 0 25%; min-width: 0; display: flex; flex-direction: column; padding: 8px 10px;
  background: #060a0d; border-left: 1px solid rgba(29,233,182,.28);
}
.spec--cyberpunk-hud .cyx-meta {
  display: flex; align-items: baseline; justify-content: space-between; gap: 6px;
  margin: 0; padding: 4px 0; border-bottom: 1px dashed rgba(29,233,182,.3);
}
.spec--cyberpunk-hud .cyx-meta span {
  font: 500 9px/1 "IBM Plex Mono", monospace; letter-spacing: .2em; text-transform: uppercase;
  color: #5de0c8;
}
.spec--cyberpunk-hud .cyx-meta b {
  font: 500 10px/1 "IBM Plex Mono", monospace; color: #eafff9; letter-spacing: .08em;
  text-transform: uppercase; font-variant-numeric: tabular-nums;
}
.spec--cyberpunk-hud .cyx-acts { margin-top: auto; display: flex; gap: 6px; padding-top: 8px; }
.spec--cyberpunk-hud .cyx-btn {
  flex: 1 1 0; cursor: pointer; background: rgba(29,233,182,.14); color: #b9fff0;
  border: 1px solid #1de9b6; padding: 8px 6px;
  font: 500 10px/1 "IBM Plex Mono", monospace; letter-spacing: .2em; text-transform: uppercase;
  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
  box-shadow: 0 0 14px rgba(29,233,182,.3);
}
.spec--cyberpunk-hud .cyx-btn2 {
  flex: 1 1 0; cursor: pointer; background: rgba(255,179,0,.1); color: #ffd27a;
  border: 1px solid rgba(255,179,0,.8); padding: 8px 6px;
  font: 500 10px/1 "IBM Plex Mono", monospace; letter-spacing: .2em; text-transform: uppercase;
  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);
  box-shadow: 0 0 14px rgba(255,179,0,.24);
}`
};

window.COMPLEX["y2k-frutiger"] = {
  html: `<div class="y2x-app">
    <div class="y2x-bubs"><span class="y2x-bub b1"></span><span class="y2x-bub b2"></span><span class="y2x-bub b3"></span></div>
    <div class="y2x-top">
      <span class="y2x-mark"><i class="y2x-orb"></i>AquaDesk</span>
      <nav class="y2x-nav"><span>Home</span><span class="is-on">Media</span><span>Network</span><span>Settings</span></nav>
      <span class="y2x-user"><i class="y2x-dot"></i>Online</span>
    </div>
    <div class="y2x-body">
      <div class="y2x-side">
        <p class="y2x-h">Playlist</p>
        <div class="y2x-row"><span>Aqua Drift</span><b>4:12</b></div>
        <div class="y2x-row is-sel"><span>Skyline Loop</span><b>3:48</b></div>
        <div class="y2x-row"><span>Glass Tides</span><b>5:02</b></div>
        <div class="y2x-row"><span>Bloom Field</span><b>2:55</b></div>
      </div>
      <div class="y2x-main">
        <p class="y2x-title">Now Playing</p>
        <div class="y2x-stats">
          <div class="y2x-stat"><span>Track</span><b>04</b></div>
          <div class="y2x-stat"><span>Bitrate</span><b>320k</b></div>
          <div class="y2x-stat"><span>Level</span><b>68%</b></div>
        </div>
        <div class="y2x-tab">
          <div class="y2x-tr"><span>Skyline Loop</span><b>3:48</b><i class="ok">Ready</i></div>
          <div class="y2x-tr"><span>Bass Layer</span><b>1.2</b><i>Mix</i></div>
          <div class="y2x-tr"><span>Vocal Take</span><b>0.8</b><i>Mix</i></div>
        </div>
      </div>
      <div class="y2x-detail">
        <p class="y2x-h">Track</p>
        <p class="y2x-meta">Stereo &middot; 44.1kHz</p>
        <p class="y2x-meta">Ocean Records</p>
        <p class="y2x-meta">Added 2 days ago</p>
        <div class="y2x-btns"><span class="y2x-btn">Play</span><span class="y2x-btn2">Add</span></div>
      </div>
    </div>
  </div>`,
  css: `.spec--y2k-frutiger .y2x-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  box-sizing: border-box; border-radius: 12px; border: 1px solid rgba(255,255,255,.85);
  font-family: "Instrument Sans", sans-serif; color: #10456e;
  background: linear-gradient(#eafcff, #a9e4fb 46%, #2f8fd0 78%, #16558a);
  box-shadow: inset 0 1px 0 #fff, 0 8px 20px rgba(10,60,110,.25);
}
.spec--y2k-frutiger .y2x-bubs {
  position: absolute; inset: 0; overflow: hidden; pointer-events: none;
}
.spec--y2k-frutiger .y2x-bub {
  position: absolute; border-radius: 50%; background: rgba(255,255,255,.22);
  box-shadow: inset -2px -3px 8px rgba(255,255,255,.7), 0 6px 14px rgba(20,80,130,.2);
}
.spec--y2k-frutiger .y2x-bub.b1 { width: 44px; height: 44px; top: 16px; left: 22px; }
.spec--y2k-frutiger .y2x-bub.b2 { width: 20px; height: 20px; top: 120px; right: 34px; }
.spec--y2k-frutiger .y2x-bub.b3 { width: 70px; height: 70px; bottom: -18px; right: -12px; opacity: .7; }
.spec--y2k-frutiger .y2x-top {
  position: relative; z-index: 2; flex: none; display: flex; align-items: center; gap: 6px;
  padding: 6px 10px; border-bottom: 1px solid rgba(255,255,255,.75);
  background: linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.4));
}
.spec--y2k-frutiger .y2x-mark {
  display: flex; align-items: center; gap: 6px; font: 700 12px/1 "Instrument Sans", sans-serif; color: #10456e;
}
.spec--y2k-frutiger .y2x-orb {
  width: 16px; height: 16px; border-radius: 50%; display: inline-block;
  background: radial-gradient(circle at 32% 26%, #ffffff, #bff0ff 30%, #4aa8e0 66%, #1c5f8f);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.7);
}
.spec--y2k-frutiger .y2x-nav { display: flex; gap: 4px; margin-left: 8px; }
.spec--y2k-frutiger .y2x-nav span {
  padding: 3px 9px; border-radius: 999px; font-size: 10.5px; color: #10456e;
  background: linear-gradient(#ffffff, #d8f3ff 48%, #a4def5 52%, #ffffff);
  box-shadow: inset 0 1px 0 #fff, inset 0 -2px 3px rgba(0,60,110,.22);
}
.spec--y2k-frutiger .y2x-nav span.is-on {
  color: #fff; background: linear-gradient(#7ec8ee, #2f8fd0 55%, #16558a);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8), inset 0 -2px 4px rgba(0,40,80,.4), 0 2px 5px rgba(10,60,110,.3);
}
.spec--y2k-frutiger .y2x-user {
  margin-left: auto; display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: #16558a; font-weight: 600;
}
.spec--y2k-frutiger .y2x-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #6fdc8c; display: inline-block;
  box-shadow: 0 0 5px #6fdc8c, inset 0 1px 0 rgba(255,255,255,.8);
}
.spec--y2k-frutiger .y2x-body {
  position: relative; z-index: 2; flex: 1; min-height: 0; display: flex; gap: 8px; padding: 8px;
}
.spec--y2k-frutiger .y2x-side,
.spec--y2k-frutiger .y2x-main,
.spec--y2k-frutiger .y2x-detail {
  min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 7px 8px; border-radius: 10px;
  border: 1px solid rgba(255,255,255,.8); background: linear-gradient(rgba(255,255,255,.72), rgba(255,255,255,.5));
  box-shadow: inset 0 1px 0 #fff, 0 4px 12px rgba(10,60,110,.18);
}
.spec--y2k-frutiger .y2x-side { flex: 0 0 23%; }
.spec--y2k-frutiger .y2x-main { flex: 1 1 auto; }
.spec--y2k-frutiger .y2x-detail { flex: 0 0 22%; }
.spec--y2k-frutiger .y2x-h {
  margin: 0; font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #2f8fd0;
}
.spec--y2k-frutiger .y2x-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px; border-radius: 7px;
}
.spec--y2k-frutiger .y2x-row span { font-size: 10.5px; color: #16558a; }
.spec--y2k-frutiger .y2x-row b {
  font: 600 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #2f8fd0;
}
.spec--y2k-frutiger .y2x-row.is-sel {
  background: linear-gradient(#bfeaff, #7ec8ee 55%, #4aa8e0);
  box-shadow: inset 0 1px 0 #fff, inset 0 -2px 3px rgba(0,60,110,.28);
}
.spec--y2k-frutiger .y2x-row.is-sel span { color: #0c3b60; font-weight: 600; }
.spec--y2k-frutiger .y2x-row.is-sel b { color: #0c3b60; }
.spec--y2k-frutiger .y2x-title {
  margin: 0 0 1px; font: 700 12px/1.1 "Instrument Sans", sans-serif; color: #10456e;
  text-shadow: 0 1px 0 rgba(255,255,255,.8);
}
.spec--y2k-frutiger .y2x-stats { display: flex; gap: 6px; }
.spec--y2k-frutiger .y2x-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 2px; padding: 5px 7px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,.9); background: linear-gradient(#ffffff, #e6f7ff 52%, #c6ecfb);
  box-shadow: inset 0 1px 0 #fff;
}
.spec--y2k-frutiger .y2x-stat span { font-size: 8.5px; letter-spacing: .1em; text-transform: uppercase; color: #2f8fd0; }
.spec--y2k-frutiger .y2x-stat b { font: 700 12px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #16558a; }
.spec--y2k-frutiger .y2x-tab { display: flex; flex-direction: column; }
.spec--y2k-frutiger .y2x-tr {
  display: flex; align-items: center; gap: 6px; padding: 4px 2px; border-bottom: 1px solid rgba(47,143,208,.28);
}
.spec--y2k-frutiger .y2x-tr span { flex: 1 1 auto; min-width: 0; font-size: 10.5px; color: #16558a; }
.spec--y2k-frutiger .y2x-tr b { font: 600 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #2f8fd0; }
.spec--y2k-frutiger .y2x-tr i {
  font-style: normal; font-size: 9px; padding: 2px 6px; border-radius: 999px; color: #10456e;
  background: rgba(255,255,255,.85); box-shadow: inset 0 1px 0 #fff;
}
.spec--y2k-frutiger .y2x-tr i.ok { color: #0b6b34; background: linear-gradient(#d6f7e2, #8fe4ad); }
.spec--y2k-frutiger .y2x-meta { margin: 0; font-size: 10.5px; color: #16558a; }
.spec--y2k-frutiger .y2x-btns { margin-top: auto; display: flex; flex-direction: column; gap: 5px; }
.spec--y2k-frutiger .y2x-btn {
  text-align: center; padding: 7px 10px; border-radius: 999px; border: 1px solid rgba(255,255,255,.9); cursor: pointer;
  font: 700 11px/1 "Instrument Sans", sans-serif; color: #10456e;
  background: linear-gradient(#ffffff, #d8f3ff 46%, #a4def5 54%, #ffffff);
  box-shadow: inset 0 1px 0 #fff, inset 0 -2px 4px rgba(0,60,110,.28), 0 4px 10px rgba(10,60,110,.24);
}
.spec--y2k-frutiger .y2x-btn2 {
  text-align: center; padding: 6px 10px; border-radius: 999px; border: 1px solid rgba(255,255,255,.9);
  font: 600 10.5px/1 "Instrument Sans", sans-serif; color: #16558a; background: rgba(255,255,255,.7);
  box-shadow: inset 0 1px 0 #fff;
}`
};

window.COMPLEX["retro-futurism"] = {
  html: `<div class="rfx-app">
    <div class="rfx-top">
      <span class="rfx-mark">Orbital Works</span>
      <span class="rfx-nav"><span class="rfx-n on">Output</span><span class="rfx-n">Gauges</span><span class="rfx-n">Crew</span></span>
      <span class="rfx-status">Link 072.4</span>
    </div>
    <div class="rfx-body">
      <div class="rfx-side">
        <p class="rfx-head">Subsystems</p>
        <div class="rfx-row on"><span class="rfx-rl">Reactor A</span><span class="rfx-rv">072.4</span></div>
        <div class="rfx-row"><span class="rfx-rl">Coolant</span><span class="rfx-rv">018.2</span></div>
        <div class="rfx-row"><span class="rfx-rl">Intake</span><span class="rfx-rv">041.9</span></div>
        <div class="rfx-row"><span class="rfx-rl">Shield</span><span class="rfx-rv">096.0</span></div>
      </div>
      <div class="rfx-main">
        <p class="rfx-title">Reactor array</p>
        <div class="rfx-stats">
          <div class="rfx-stat"><span class="rfx-sl">Output</span><span class="rfx-sv">72.4</span></div>
          <div class="rfx-stat"><span class="rfx-sl">Temp</span><span class="rfx-sv">418</span></div>
          <div class="rfx-stat"><span class="rfx-sl">Flow</span><span class="rfx-sv">18.2</span></div>
        </div>
        <div class="rfx-table">
          <div class="rfx-tr"><span class="rfx-tn">Rod bank 1</span><span class="rfx-tv">72.4</span><span class="rfx-ts">Nominal</span></div>
          <div class="rfx-tr"><span class="rfx-tn">Rod bank 2</span><span class="rfx-tv">68.1</span><span class="rfx-ts">Nominal</span></div>
          <div class="rfx-tr"><span class="rfx-tn">Rod bank 3</span><span class="rfx-tv">44.7</span><span class="rfx-ts">Trim</span></div>
        </div>
      </div>
      <div class="rfx-detail">
        <p class="rfx-head">Readout</p>
        <p class="rfx-meta">Cycle 072 · shift 3</p>
        <p class="rfx-meta">Load 74 percent</p>
        <div class="rfx-btns">
          <button class="rfx-btn p" type="button">Engage</button>
          <button class="rfx-btn s" type="button">Vent</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--retro-futurism .rfx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  border-radius: 10px; border: 1px solid #38372a;
  background: linear-gradient(#6d6a52, #4f4d3b);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.28), inset 0 -5px 12px rgba(0,0,0,.42);
  font-family: "Instrument Sans", sans-serif; color: #f2ecd6;
}
.spec--retro-futurism .rfx-top {
  display: flex; align-items: center; gap: 10px; padding: 7px 12px; flex: 0 0 auto;
  border-bottom: 1px dashed #837f66;
}
.spec--retro-futurism .rfx-mark {
  font: 500 11px/1 "IBM Plex Mono", monospace; letter-spacing: .18em; text-transform: uppercase;
  color: #f8f3de; text-shadow: 0 1px 0 rgba(0,0,0,.6);
}
.spec--retro-futurism .rfx-nav {
  display: flex; gap: 6px;
}
.spec--retro-futurism .rfx-n {
  font: 500 9px/1 "IBM Plex Mono", monospace; letter-spacing: .14em; text-transform: uppercase;
  padding: 4px 8px; border-radius: 6px; color: #cfc7a6; background: #45432f;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.12);
}
.spec--retro-futurism .rfx-n.on {
  color: #241f14; background: linear-gradient(#ffcc66, #e08a1e);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.5), 0 0 10px rgba(240,160,40,.55);
}
.spec--retro-futurism .rfx-status {
  margin-left: auto; font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #ffd27a; text-shadow: 0 0 12px rgba(255,170,50,.8);
}
.spec--retro-futurism .rfx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 10px; gap: 10px;
}
.spec--retro-futurism .rfx-head {
  margin: 0 0 7px; font: 500 9px/1 "IBM Plex Mono", monospace; letter-spacing: .18em;
  text-transform: uppercase; color: #cfc7a6; text-shadow: 0 1px 0 rgba(0,0,0,.5);
}
.spec--retro-futurism .rfx-side {
  flex: 0 0 152px; min-width: 0; padding: 9px; border-radius: 8px; background: #46442f;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14), inset 0 -4px 9px rgba(0,0,0,.4);
}
.spec--retro-futurism .rfx-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 4px 6px; border-radius: 5px; margin-bottom: 3px;
  border-left: 3px solid transparent;
}
.spec--retro-futurism .rfx-row.on {
  background: #2b2921; border-left-color: #ffcc66;
}
.spec--retro-futurism .rfx-rl {
  font: 400 10px/1 "Instrument Sans", sans-serif; color: #e4dcc0; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--retro-futurism .rfx-rv {
  font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #ffd27a;
}
.spec--retro-futurism .rfx-main {
  flex: 1 1 auto; min-width: 0; padding: 9px; border-radius: 8px; background: #46442f;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14), inset 0 -4px 9px rgba(0,0,0,.4);
}
.spec--retro-futurism .rfx-title {
  margin: 0 0 8px; font: 500 12px/1 "IBM Plex Mono", monospace; letter-spacing: .16em;
  text-transform: uppercase; color: #f8f3de; text-shadow: 0 1px 0 rgba(0,0,0,.6);
}
.spec--retro-futurism .rfx-stats {
  display: flex; gap: 6px; margin-bottom: 8px;
}
.spec--retro-futurism .rfx-stat {
  flex: 1 1 0; min-width: 0; padding: 5px 7px; border-radius: 6px; background: #241f14;
  border: 1px solid #6a5a2c;
}
.spec--retro-futurism .rfx-sl {
  display: block; font: 400 9px/1 "Instrument Sans", sans-serif; letter-spacing: .12em;
  text-transform: uppercase; color: #b9a86f; margin-bottom: 3px;
}
.spec--retro-futurism .rfx-sv {
  display: block; font: 500 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #ffd27a; text-shadow: 0 0 12px rgba(255,170,50,.8);
}
.spec--retro-futurism .rfx-tr {
  display: flex; align-items: center; gap: 8px; padding: 4px 6px;
  border-bottom: 1px dotted #837f66;
}
.spec--retro-futurism .rfx-tn {
  flex: 1 1 auto; min-width: 0; font: 400 10px/1 "Instrument Sans", sans-serif; color: #e4dcc0;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--retro-futurism .rfx-tv {
  font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #f0e2b8;
}
.spec--retro-futurism .rfx-ts {
  flex: 0 0 52px; text-align: right; font: 500 9px/1 "IBM Plex Mono", monospace;
  letter-spacing: .1em; text-transform: uppercase; color: #ffcc66;
}
.spec--retro-futurism .rfx-detail {
  flex: 0 0 168px; min-width: 0; padding: 9px; border-radius: 8px; background: #46442f;
  display: flex; flex-direction: column;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14), inset 0 -4px 9px rgba(0,0,0,.4);
}
.spec--retro-futurism .rfx-meta {
  margin: 0 0 5px; font: 400 10px/1.3 "IBM Plex Mono", monospace; color: #ded5b4;
}
.spec--retro-futurism .rfx-btns {
  margin-top: auto; display: flex; gap: 6px;
}
.spec--retro-futurism .rfx-btn {
  flex: 1 1 0; cursor: pointer; border-radius: 6px; padding: 8px 6px;
  font: 500 10px/1 "Instrument Sans", sans-serif; letter-spacing: .1em; text-transform: uppercase;
}
.spec--retro-futurism .rfx-btn.p {
  border: 1px solid #6a5a2c; background: linear-gradient(#ffcc66, #e08a1e); color: #241f14;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.5), 0 0 10px rgba(240,160,40,.5);
}
.spec--retro-futurism .rfx-btn.s {
  border: 1px solid #7d7961; background: #3a392b; color: #e4dcc0;
}`
};

window.COMPLEX["comic-popart"] = {
  html: `<div class="cpx-app">
    <div class="cpx-top">
      <span class="cpx-mark">Pow Press</span>
      <span class="cpx-nav"><span class="cpx-n on">Latest</span><span class="cpx-n">Heroes</span><span class="cpx-n">Letters</span></span>
      <span class="cpx-status">Issue 12</span>
    </div>
    <div class="cpx-body">
      <div class="cpx-side">
        <p class="cpx-head">Stories</p>
        <div class="cpx-row on"><span class="cpx-rl">Night Shift</span><span class="cpx-rv">p12</span></div>
        <div class="cpx-row"><span class="cpx-rl">The Drop</span><span class="cpx-rv">p18</span></div>
        <div class="cpx-row"><span class="cpx-rl">Static Kid</span><span class="cpx-rv">p24</span></div>
        <div class="cpx-row"><span class="cpx-rl">Back Pages</span><span class="cpx-rv">p30</span></div>
      </div>
      <div class="cpx-main">
        <p class="cpx-title">Night Shift</p>
        <div class="cpx-stats">
          <div class="cpx-stat"><span class="cpx-sl">Pages</span><span class="cpx-sv">12</span></div>
          <div class="cpx-stat"><span class="cpx-sl">Panels</span><span class="cpx-sv">48</span></div>
          <div class="cpx-stat"><span class="cpx-sl">Ink</span><span class="cpx-sv">4</span></div>
        </div>
        <div class="cpx-table">
          <div class="cpx-tr"><span class="cpx-tn">Ink line</span><span class="cpx-tv">3.5</span><span class="cpx-ts">Final</span></div>
          <div class="cpx-tr"><span class="cpx-tn">Halftone</span><span class="cpx-tv">7</span><span class="cpx-ts">Final</span></div>
          <div class="cpx-tr"><span class="cpx-tn">Lettering</span><span class="cpx-tv">2.0</span><span class="cpx-ts">Check</span></div>
        </div>
      </div>
      <div class="cpx-detail">
        <p class="cpx-head">Panel 4</p>
        <p class="cpx-meta">Night Shift · 12 pages</p>
        <p class="cpx-meta">Ink 04 · Print 06</p>
        <div class="cpx-btns">
          <button class="cpx-btn p" type="button">Zap</button>
          <button class="cpx-btn s" type="button">Hold</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--comic-popart .cpx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  border: 4px solid #111; border-radius: 4px;
  background: #ffd93b;
  background-image: radial-gradient(#e0ab00 1.6px, transparent 1.7px);
  background-size: 8px 8px;
  font-family: "Instrument Sans", sans-serif; color: #111;
}
.spec--comic-popart .cpx-top {
  display: flex; align-items: center; gap: 8px; padding: 6px 10px; flex: 0 0 auto;
  background: #fff; border-bottom: 4px solid #111;
}
.spec--comic-popart .cpx-mark {
  font: 800 13px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .02em;
  color: #111;
}
.spec--comic-popart .cpx-nav {
  display: flex; gap: 5px;
}
.spec--comic-popart .cpx-n {
  font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; padding: 4px 8px;
  border: 2px solid #111; border-radius: 999px; background: #fff; color: #111;
}
.spec--comic-popart .cpx-n.on {
  background: #ff4d4d; color: #fff;
}
.spec--comic-popart .cpx-status {
  margin-left: auto; font: 800 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  color: #fff; background: #111; padding: 5px 9px; border-radius: 999px;
}
.spec--comic-popart .cpx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 9px; gap: 9px;
}
.spec--comic-popart .cpx-head {
  margin: 0 0 7px; font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .04em; color: #111;
}
.spec--comic-popart .cpx-side {
  flex: 0 0 150px; min-width: 0; padding: 8px; background: #fff; border: 3px solid #111;
  border-radius: 6px; box-shadow: 4px 4px 0 #111;
}
.spec--comic-popart .cpx-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 4px 6px; border-bottom: 2px solid #111;
}
.spec--comic-popart .cpx-row.on {
  background: #ff4d4d;
}
.spec--comic-popart .cpx-rl {
  font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; color: #111;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--comic-popart .cpx-row.on .cpx-rl {
  color: #fff;
}
.spec--comic-popart .cpx-rv {
  font: 700 9px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111;
}
.spec--comic-popart .cpx-row.on .cpx-rv {
  color: #fff;
}
.spec--comic-popart .cpx-main {
  flex: 1 1 auto; min-width: 0; padding: 8px; background: #fff; border: 3px solid #111;
  border-radius: 6px; box-shadow: 4px 4px 0 #111;
}
.spec--comic-popart .cpx-title {
  margin: 0 0 7px; font: 800 19px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .01em; color: #111; transform: rotate(-1deg);
}
.spec--comic-popart .cpx-stats {
  display: flex; gap: 6px; margin-bottom: 8px;
}
.spec--comic-popart .cpx-stat {
  flex: 1 1 0; min-width: 0; padding: 5px 7px; border: 2px solid #111; border-radius: 4px;
  background: #ffd93b;
  background-image: radial-gradient(#e0ab00 1.6px, transparent 1.7px);
  background-size: 7px 7px;
}
.spec--comic-popart .cpx-sl {
  display: block; font: 800 8px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .05em; color: #111; margin-bottom: 3px;
}
.spec--comic-popart .cpx-sv {
  display: block; font: 700 14px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #111;
}
.spec--comic-popart .cpx-table {
  border-top: 2px solid #111;
}
.spec--comic-popart .cpx-tr {
  display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 2px solid #111;
}
.spec--comic-popart .cpx-tn {
  flex: 1 1 auto; min-width: 0; font: 700 9px/1 "Instrument Sans", sans-serif; color: #111;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--comic-popart .cpx-tv {
  font: 700 9px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111;
}
.spec--comic-popart .cpx-ts {
  flex: 0 0 46px; text-align: right; font: 800 8px/1 "Instrument Sans", sans-serif;
  text-transform: uppercase; color: #fff; background: #ff4d4d; border: 2px solid #111;
  border-radius: 999px; padding: 2px 0;
}
.spec--comic-popart .cpx-detail {
  flex: 0 0 156px; min-width: 0; padding: 8px; background: #fff; border: 3px solid #111;
  border-radius: 6px; box-shadow: 4px 4px 0 #111; display: flex; flex-direction: column;
}
.spec--comic-popart .cpx-meta {
  margin: 0 0 5px; font: 700 9px/1.3 "Instrument Sans", sans-serif; color: #111;
}
.spec--comic-popart .cpx-btns {
  margin-top: auto; display: flex; gap: 7px;
}
.spec--comic-popart .cpx-btn {
  flex: 1 1 0; cursor: pointer; border: 3px solid #111; border-radius: 999px;
  padding: 8px 4px; font: 800 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  box-shadow: 3px 3px 0 #111;
}
.spec--comic-popart .cpx-btn.p {
  background: #ff4d4d; color: #fff;
}
.spec--comic-popart .cpx-btn.s {
  background: #fff; color: #111;
}`
};

window.COMPLEX["organic-handdrawn"] = {
  html: `<div class="ohx-app">
    <div class="ohx-top">
      <span class="ohx-mark">Sage &amp; Clay</span>
      <span class="ohx-nav"><span class="ohx-n on">Notes</span><span class="ohx-n">Plots</span><span class="ohx-n">Seed</span></span>
      <span class="ohx-status">Bed 6</span>
    </div>
    <div class="ohx-body">
      <div class="ohx-side">
        <p class="ohx-head">Beds</p>
        <div class="ohx-row on"><span class="ohx-rl">Bed 6 · kale</span><span class="ohx-rv">04</span></div>
        <div class="ohx-row"><span class="ohx-rl">Bed 7 · beans</span><span class="ohx-rv">12</span></div>
        <div class="ohx-row"><span class="ohx-rl">Bed 8 · mint</span><span class="ohx-rv">02</span></div>
        <div class="ohx-row"><span class="ohx-rl">Bed 9 · rye</span><span class="ohx-rv">09</span></div>
      </div>
      <div class="ohx-main">
        <p class="ohx-title">Bed 6</p>
        <div class="ohx-stats">
          <div class="ohx-stat"><span class="ohx-sl">Sown</span><span class="ohx-sv">18 May</span></div>
          <div class="ohx-stat"><span class="ohx-sl">Rows</span><span class="ohx-sv">04</span></div>
          <div class="ohx-stat"><span class="ohx-sl">Water</span><span class="ohx-sv">2.1 L</span></div>
        </div>
        <div class="ohx-table">
          <div class="ohx-tr"><span class="ohx-tn">Curly kale</span><span class="ohx-tv">04</span><span class="ohx-ts">Sprouted</span></div>
          <div class="ohx-tr"><span class="ohx-tn">Red kale</span><span class="ohx-tv">02</span><span class="ohx-ts">Sprouted</span></div>
          <div class="ohx-tr"><span class="ohx-tn">Cavolo</span><span class="ohx-tv">01</span><span class="ohx-ts">Slow</span></div>
        </div>
      </div>
      <div class="ohx-detail">
        <p class="ohx-head">Notebook</p>
        <p class="ohx-meta">Bed 6 · clay soil</p>
        <p class="ohx-meta">Leaves drawn twice</p>
        <div class="ohx-btns">
          <button class="ohx-btn p" type="button">Add note</button>
          <button class="ohx-btn s" type="button">Redraw</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--organic-handdrawn .ohx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #f5f1e6; border-radius: 12px 8px 14px 9px / 9px 13px 8px 12px;
  border: 2px solid #5c6b4a; transform: rotate(-.35deg);
  font-family: "Instrument Sans", sans-serif; color: #3f4636;
}
.spec--organic-handdrawn .ohx-top {
  display: flex; align-items: center; gap: 10px; padding: 7px 12px; flex: 0 0 auto;
  border-bottom: 2px dashed #a9b394;
}
.spec--organic-handdrawn .ohx-mark {
  font: 700 13px/1 Georgia, serif; color: #3f4636; letter-spacing: .01em;
}
.spec--organic-handdrawn .ohx-nav {
  display: flex; gap: 7px;
}
.spec--organic-handdrawn .ohx-n {
  font: 400 10px/1 "Instrument Sans", sans-serif; color: #5f6653; padding: 3px 8px;
  border-radius: 8px 5px 9px 6px / 6px 9px 5px 8px; border: 1.5px solid #c3c9ae;
}
.spec--organic-handdrawn .ohx-n.on {
  color: #f5f1e6; background: #5c6b4a; border-color: #45523a;
}
.spec--organic-handdrawn .ohx-status {
  margin-left: auto; font: 700 11px/1 Georgia, serif; color: #b4703c;
}
.spec--organic-handdrawn .ohx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 10px; gap: 10px;
}
.spec--organic-handdrawn .ohx-head {
  margin: 0 0 7px; font: 400 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .16em; color: #7d8468;
}
.spec--organic-handdrawn .ohx-side {
  flex: 0 0 152px; min-width: 0; padding: 9px; background: #efeada;
  border-radius: 11px 7px 12px 8px / 8px 12px 7px 11px; border: 1.5px solid #c3c9ae;
  transform: rotate(.4deg);
}
.spec--organic-handdrawn .ohx-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 5px 7px; margin-bottom: 3px;
  border-radius: 9px 6px 10px 7px / 7px 10px 6px 9px;
}
.spec--organic-handdrawn .ohx-row.on {
  background: #dde3cf; box-shadow: inset 0 0 0 1.5px #8d9a73;
}
.spec--organic-handdrawn .ohx-rl {
  font: 400 10px/1 "Instrument Sans", sans-serif; color: #4a5140; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--organic-handdrawn .ohx-rv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #b4703c;
}
.spec--organic-handdrawn .ohx-main {
  flex: 1 1 auto; min-width: 0; padding: 9px; background: #efeada;
  border-radius: 8px 13px 7px 12px / 12px 8px 13px 7px; border: 1.5px solid #c3c9ae;
}
.spec--organic-handdrawn .ohx-title {
  margin: 0 0 8px; font: 700 18px/1.1 Georgia, serif; color: #3f4636;
  text-decoration: underline; text-decoration-color: #b4703c; text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
.spec--organic-handdrawn .ohx-stats {
  display: flex; gap: 8px; margin-bottom: 8px;
}
.spec--organic-handdrawn .ohx-stat {
  flex: 1 1 0; min-width: 0; padding: 5px 7px;
  border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px; background: #e4dfcd;
  border: 1.5px dashed #b3bb9a;
}
.spec--organic-handdrawn .ohx-sl {
  display: block; font: 400 8px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .12em; color: #7d8468; margin-bottom: 3px;
}
.spec--organic-handdrawn .ohx-sv {
  display: block; font: 400 12px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #4a5140;
}
.spec--organic-handdrawn .ohx-tr {
  display: flex; align-items: center; gap: 8px; padding: 4px 5px;
  border-bottom: 1.5px dotted #b3bb9a;
}
.spec--organic-handdrawn .ohx-tn {
  flex: 1 1 auto; min-width: 0; font: 400 10px/1 "Instrument Sans", sans-serif; color: #4a5140;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--organic-handdrawn .ohx-tv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #5f6653;
}
.spec--organic-handdrawn .ohx-ts {
  flex: 0 0 56px; text-align: right; font: 700 9px/1 Georgia, serif; font-style: italic; color: #b4703c;
}
.spec--organic-handdrawn .ohx-detail {
  flex: 0 0 162px; min-width: 0; padding: 9px; background: #efeada;
  border-radius: 12px 8px 11px 7px / 8px 11px 7px 12px; border: 1.5px solid #c3c9ae;
  display: flex; flex-direction: column; transform: rotate(-.4deg);
}
.spec--organic-handdrawn .ohx-meta {
  margin: 0 0 5px; font: 400 10px/1.3 "Instrument Sans", sans-serif; color: #5f6653;
}
.spec--organic-handdrawn .ohx-btns {
  margin-top: auto; display: flex; gap: 7px;
}
.spec--organic-handdrawn .ohx-btn {
  flex: 1 1 0; cursor: pointer; padding: 8px 4px;
  font: 400 10px/1 "Instrument Sans", sans-serif;
  border-radius: 10px 6px 11px 7px / 7px 11px 6px 10px;
}
.spec--organic-handdrawn .ohx-btn.p {
  background: #5c6b4a; border: 1.5px solid #45523a; color: #f5f1e6;
}
.spec--organic-handdrawn .ohx-btn.s {
  background: transparent; border: 2px dashed #b4703c; color: #b4703c;
}`
};

window.COMPLEX["kinetic-typography"] = {
  html: `<div class="ktx-app">
    <div class="ktx-top">
      <span class="ktx-mark">MOVE TYPE</span>
      <span class="ktx-nav"><span class="ktx-n on">Score</span><span class="ktx-n">Cuts</span><span class="ktx-n">Reels</span></span>
      <span class="ktx-status">CUT 04</span>
    </div>
    <div class="ktx-body">
      <div class="ktx-side">
        <p class="ktx-head">Scenes</p>
        <div class="ktx-row on"><span class="ktx-rl">Reveal 01</span><span class="ktx-rv">0.9</span></div>
        <div class="ktx-row"><span class="ktx-rl">Slam 02</span><span class="ktx-rv">0.86</span></div>
        <div class="ktx-row"><span class="ktx-rl">Slide 03</span><span class="ktx-rv">1.0</span></div>
        <div class="ktx-row"><span class="ktx-rl">Hold 04</span><span class="ktx-rv">1.1</span></div>
      </div>
      <div class="ktx-main">
        <span class="ktx-wipe" aria-hidden="true"></span>
        <p class="ktx-title">MOVE<br>THE TYPE</p>
        <div class="ktx-stats">
          <div class="ktx-stat"><span class="ktx-sl">Weight</span><span class="ktx-sv">900</span></div>
          <div class="ktx-stat"><span class="ktx-sl">Leading</span><span class="ktx-sv">0.88</span></div>
          <div class="ktx-stat"><span class="ktx-sl">Track</span><span class="ktx-sv">-40</span></div>
        </div>
        <div class="ktx-table">
          <div class="ktx-tr"><span class="ktx-tn">Reveal 01</span><span class="ktx-tv">0.9</span><span class="ktx-ts">Locked</span></div>
          <div class="ktx-tr"><span class="ktx-tn">Slam 02</span><span class="ktx-tv">0.86</span><span class="ktx-ts">Locked</span></div>
          <div class="ktx-tr"><span class="ktx-tn">Hold 04</span><span class="ktx-tv">1.1</span><span class="ktx-ts">Draft</span></div>
        </div>
      </div>
      <div class="ktx-detail">
        <p class="ktx-head">Cut 04</p>
        <p class="ktx-meta">Two weights only</p>
        <p class="ktx-meta">Mask reveal · 0.9 lead</p>
        <div class="ktx-btns">
          <button class="ktx-btn p" type="button">Set cut</button>
          <button class="ktx-btn s" type="button">Rewind</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--kinetic-typography .ktx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #12100e; border-radius: 6px; border: 1px solid #2a2620;
  font-family: "Instrument Sans", sans-serif; color: #f6f2ea;
}
.spec--kinetic-typography .ktx-top {
  display: flex; align-items: center; gap: 10px; padding: 7px 12px; flex: 0 0 auto;
  border-bottom: 1px solid #2a2620;
}
.spec--kinetic-typography .ktx-mark {
  font: 900 13px/1 "Instrument Sans", sans-serif; letter-spacing: -0.03em; text-transform: uppercase;
  color: #f6f2ea;
}
.spec--kinetic-typography .ktx-nav {
  display: flex; gap: 9px;
}
.spec--kinetic-typography .ktx-n {
  font: 400 9px/1 "IBM Plex Mono", monospace; letter-spacing: .14em; text-transform: uppercase;
  color: #6f6a60;
}
.spec--kinetic-typography .ktx-n.on {
  color: #f6f2ea;
}
.spec--kinetic-typography .ktx-status {
  margin-left: auto; font: 400 10px/1 "IBM Plex Mono", monospace; letter-spacing: .12em; color: #8f8779;
}
.spec--kinetic-typography .ktx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 10px; gap: 10px;
}
.spec--kinetic-typography .ktx-head {
  margin: 0 0 7px; font: 400 9px/1 "IBM Plex Mono", monospace; letter-spacing: .18em;
  text-transform: uppercase; color: #6f6a60;
}
.spec--kinetic-typography .ktx-side {
  flex: 0 0 138px; min-width: 0; padding: 9px; background: #1a1714; border-radius: 4px;
}
.spec--kinetic-typography .ktx-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 6px;
  padding: 5px 0 5px 6px; border-left: 3px solid transparent;
}
.spec--kinetic-typography .ktx-row.on {
  border-left-color: #f6f2ea; background: #221e19;
}
.spec--kinetic-typography .ktx-rl {
  font: 400 10px/1 "Instrument Sans", sans-serif; color: #cfc7ba; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--kinetic-typography .ktx-rv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #8f8779;
}
.spec--kinetic-typography .ktx-main {
  position: relative; flex: 1 1 auto; min-width: 0; padding: 8px 10px; background: #1a1714;
  border-radius: 4px; overflow: hidden;
}
.spec--kinetic-typography .ktx-wipe {
  position: absolute; top: 0; bottom: 0; left: 46%; width: 34px; background: #12100e;
  border-left: 1px solid #2a2620;
}
.spec--kinetic-typography .ktx-title {
  position: relative; margin: 0 0 8px; font: 900 30px/.88 "Instrument Sans", sans-serif;
  letter-spacing: -0.04em; text-transform: uppercase; color: #f6f2ea;
}
.spec--kinetic-typography .ktx-stats {
  display: flex; gap: 8px; margin-bottom: 8px;
}
.spec--kinetic-typography .ktx-stat {
  flex: 1 1 0; min-width: 0; padding: 4px 6px; border-top: 1px solid #2a2620;
}
.spec--kinetic-typography .ktx-sl {
  display: block; font: 400 8px/1 "IBM Plex Mono", monospace; letter-spacing: .14em;
  text-transform: uppercase; color: #6f6a60; margin-bottom: 3px;
}
.spec--kinetic-typography .ktx-sv {
  display: block; font: 400 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #f6f2ea;
}
.spec--kinetic-typography .ktx-tr {
  display: flex; align-items: baseline; gap: 8px; padding: 4px 0;
  border-bottom: 1px solid #221e19;
}
.spec--kinetic-typography .ktx-tn {
  flex: 1 1 auto; min-width: 0; font: 400 10px/1 "Instrument Sans", sans-serif; color: #cfc7ba;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--kinetic-typography .ktx-tv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #8f8779;
}
.spec--kinetic-typography .ktx-ts {
  flex: 0 0 52px; text-align: right; font: 400 9px/1 "IBM Plex Mono", monospace;
  letter-spacing: .1em; text-transform: uppercase; color: #6f6a60;
}
.spec--kinetic-typography .ktx-detail {
  flex: 0 0 158px; min-width: 0; padding: 9px; background: #1a1714; border-radius: 4px;
  display: flex; flex-direction: column;
}
.spec--kinetic-typography .ktx-meta {
  margin: 0 0 5px; font: 400 10px/1.3 "IBM Plex Mono", monospace; color: #8f8779;
}
.spec--kinetic-typography .ktx-btns {
  margin-top: auto; display: flex; gap: 7px;
}
.spec--kinetic-typography .ktx-btn {
  flex: 1 1 0; cursor: pointer; border-radius: 2px; padding: 8px 4px;
  font: 400 9px/1 "IBM Plex Mono", monospace; letter-spacing: .1em; text-transform: uppercase;
}
.spec--kinetic-typography .ktx-btn.p {
  background: #f6f2ea; color: #12100e; border: 0;
}
.spec--kinetic-typography .ktx-btn.s {
  background: transparent; color: #8f8779; border: 1px solid #2a2620;
}`
};

window.COMPLEX["luxury-premium"] = {
  html: `<div class="lxx-app">
    <div class="lxx-top">
      <span class="lxx-mark">Aurelis</span>
      <span class="lxx-nav"><span class="lxx-n on">Suites</span><span class="lxx-n">Atelier</span><span class="lxx-n">Journal</span></span>
      <span class="lxx-status">Private</span>
    </div>
    <div class="lxx-body">
      <div class="lxx-side">
        <p class="lxx-head">Residences</p>
        <div class="lxx-row on"><span class="lxx-rl">Garden suite</span><span class="lxx-rv">04</span></div>
        <div class="lxx-row"><span class="lxx-rl">Terrace suite</span><span class="lxx-rv">07</span></div>
        <div class="lxx-row"><span class="lxx-rl">Attic suite</span><span class="lxx-rv">02</span></div>
        <div class="lxx-row"><span class="lxx-rl">Cottage</span><span class="lxx-rv">01</span></div>
      </div>
      <div class="lxx-main">
        <span class="lxx-rule"></span>
        <p class="lxx-title">QUIET<br>SUITES</p>
        <div class="lxx-stats">
          <div class="lxx-stat"><span class="lxx-sl">Suites</span><span class="lxx-sv">14</span></div>
          <div class="lxx-stat"><span class="lxx-sl">Arrival</span><span class="lxx-sv">18:00</span></div>
          <div class="lxx-stat"><span class="lxx-sl">Nights</span><span class="lxx-sv">03</span></div>
        </div>
        <div class="lxx-table">
          <div class="lxx-tr"><span class="lxx-tn">Garden suite</span><span class="lxx-tv">L 840</span><span class="lxx-ts">Open</span></div>
          <div class="lxx-tr"><span class="lxx-tn">Terrace suite</span><span class="lxx-tv">L 1200</span><span class="lxx-ts">Open</span></div>
          <div class="lxx-tr"><span class="lxx-tn">Attic suite</span><span class="lxx-tv">L 960</span><span class="lxx-ts">Held</span></div>
        </div>
      </div>
      <div class="lxx-detail">
        <p class="lxx-head">Arrangement</p>
        <p class="lxx-meta">Garden suite · 3 nights</p>
        <p class="lxx-meta">Sound · 18:00</p>
        <div class="lxx-btns">
          <button class="lxx-btn p" type="button">Reserve</button>
          <button class="lxx-btn s" type="button">Enquire</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--luxury-premium .lxx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #0d0d0c; border: 1px solid #23231f; border-radius: 2px;
  font-family: "Instrument Sans", sans-serif; color: #f2efe8;
}
.spec--luxury-premium .lxx-top {
  display: flex; align-items: center; gap: 18px; padding: 10px 20px; flex: 0 0 auto;
  border-bottom: 1px solid rgba(185,151,79,.3);
}
.spec--luxury-premium .lxx-mark {
  font: 400 11px/1 Georgia, serif; text-transform: uppercase; letter-spacing: .34em; color: #f2efe8;
}
.spec--luxury-premium .lxx-nav {
  display: flex; gap: 16px;
}
.spec--luxury-premium .lxx-n {
  font: 400 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .24em;
  color: #9a958a;
}
.spec--luxury-premium .lxx-n.on {
  color: #d8c78f;
  border-bottom: 1px solid rgba(185,151,79,.55); padding-bottom: 2px;
}
.spec--luxury-premium .lxx-status {
  margin-left: auto; font: 400 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .26em; color: #9a958a;
}
.spec--luxury-premium .lxx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 14px 20px; gap: 20px;
}
.spec--luxury-premium .lxx-head {
  margin: 0 0 10px; font: 400 8px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .3em; color: #9a958a;
}
.spec--luxury-premium .lxx-side {
  flex: 0 0 158px; min-width: 0;
}
.spec--luxury-premium .lxx-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 8px;
  padding: 6px 0; border-bottom: 1px solid rgba(185,151,79,.14);
}
.spec--luxury-premium .lxx-row.on .lxx-rl {
  color: #e4d9b4;
}
.spec--luxury-premium .lxx-row.on .lxx-rv {
  color: #d8c78f;
}
.spec--luxury-premium .lxx-rl {
  font: 400 10px/1.2 Georgia, serif; color: #cfcabd; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--luxury-premium .lxx-rv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #9a958a;
}
.spec--luxury-premium .lxx-main {
  flex: 1 1 auto; min-width: 0;
}
.spec--luxury-premium .lxx-rule {
  display: block; width: 40px; height: 1px; background: #b9974f; margin-bottom: 10px;
}
.spec--luxury-premium .lxx-title {
  margin: 0 0 12px; font: 400 26px/.98 Georgia, serif; letter-spacing: .14em;
  text-transform: uppercase; color: #f2efe8;
}
.spec--luxury-premium .lxx-stats {
  display: flex; gap: 16px; margin-bottom: 12px; padding-bottom: 10px;
  border-bottom: 1px solid rgba(185,151,79,.3);
}
.spec--luxury-premium .lxx-stat {
  flex: 1 1 0; min-width: 0;
}
.spec--luxury-premium .lxx-sl {
  display: block; font: 400 8px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .26em; color: #9a958a; margin-bottom: 5px;
}
.spec--luxury-premium .lxx-sv {
  display: block; font: 400 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #e4d9b4;
}
.spec--luxury-premium .lxx-tr {
  display: flex; align-items: baseline; gap: 12px; padding: 5px 0;
  border-bottom: 1px solid rgba(185,151,79,.14);
}
.spec--luxury-premium .lxx-tn {
  flex: 1 1 auto; min-width: 0; font: 400 10px/1.2 Georgia, serif; color: #cfcabd;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--luxury-premium .lxx-tv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #e4d9b4;
}
.spec--luxury-premium .lxx-ts {
  flex: 0 0 54px; text-align: right; font: 400 8px/1 "Instrument Sans", sans-serif;
  text-transform: uppercase; letter-spacing: .24em; color: #9a958a;
}
.spec--luxury-premium .lxx-detail {
  flex: 0 0 160px; min-width: 0; display: flex; flex-direction: column;
  padding-left: 20px; border-left: 1px solid rgba(185,151,79,.3);
}
.spec--luxury-premium .lxx-meta {
  margin: 0 0 8px; font: 400 10px/1.55 Georgia, serif; color: #cfcabd;
}
.spec--luxury-premium .lxx-btns {
  margin-top: auto; display: flex; flex-direction: column; gap: 8px;
}
.spec--luxury-premium .lxx-btn {
  cursor: pointer; border-radius: 0; padding: 10px 14px; background: transparent;
  font: 400 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .24em;
}
.spec--luxury-premium .lxx-btn.p {
  border: 1px solid rgba(185,151,79,.55); color: #d8c78f;
}
.spec--luxury-premium .lxx-btn.s {
  border: 1px solid #23231f; color: #9a958a;
}`
};

window.COMPLEX["playful-chunky"] = {
  html: `<div class="plx-app">
    <div class="plx-top">
      <span class="plx-mark">Blip</span>
      <span class="plx-nav"><span class="plx-n on">Today</span><span class="plx-n">Streak</span><span class="plx-n">Badges</span></span>
      <span class="plx-status">7 days</span>
    </div>
    <div class="plx-body">
      <div class="plx-side">
        <p class="plx-head">Chores</p>
        <div class="plx-row on"><span class="plx-rl">Water plants</span><span class="plx-rv">3</span></div>
        <div class="plx-row"><span class="plx-rl">Read pages</span><span class="plx-rv">12</span></div>
        <div class="plx-row"><span class="plx-rl">Tidy desk</span><span class="plx-rv">1</span></div>
        <div class="plx-row"><span class="plx-rl">Walk outside</span><span class="plx-rv">20</span></div>
      </div>
      <div class="plx-main">
        <p class="plx-title">Nice streak</p>
        <div class="plx-stats">
          <div class="plx-stat"><span class="plx-sl">Days</span><span class="plx-sv">7</span></div>
          <div class="plx-stat"><span class="plx-sl">Stars</span><span class="plx-sv">42</span></div>
          <div class="plx-stat"><span class="plx-sl">Goal</span><span class="plx-sv">10</span></div>
        </div>
        <div class="plx-table">
          <div class="plx-tr"><span class="plx-tn">Water plants</span><span class="plx-tv">3</span><span class="plx-ts">Done</span></div>
          <div class="plx-tr"><span class="plx-tn">Read pages</span><span class="plx-tv">12</span><span class="plx-ts">Done</span></div>
          <div class="plx-tr"><span class="plx-tn">Walk outside</span><span class="plx-tv">20</span><span class="plx-ts">Soon</span></div>
        </div>
      </div>
      <div class="plx-detail">
        <p class="plx-head">Today</p>
        <p class="plx-meta">7 days in a row</p>
        <p class="plx-meta">3 of 4 done</p>
        <div class="plx-btns">
          <button class="plx-btn p" type="button">Continue</button>
          <button class="plx-btn s" type="button">Later</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--playful-chunky .plx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #f6f4f0; border: 2px solid #e6e3de; border-radius: 26px;
  font-family: "Instrument Sans", sans-serif; color: #2f3a2b;
}
.spec--playful-chunky .plx-top {
  display: flex; align-items: center; gap: 10px; padding: 9px 16px; flex: 0 0 auto;
  background: #fff; border-bottom: 2px solid #e6e3de; border-radius: 24px 24px 0 0;
}
.spec--playful-chunky .plx-mark {
  font: 800 15px/1 "Instrument Sans", sans-serif; color: #2f3a2b;
}
.spec--playful-chunky .plx-nav {
  display: flex; gap: 7px;
}
.spec--playful-chunky .plx-n {
  font: 700 9px/1 "Instrument Sans", sans-serif; color: #6f7a68; padding: 6px 11px;
  border-radius: 999px; background: #f0eeea;
}
.spec--playful-chunky .plx-n.on {
  background: #58cc02; color: #fff; box-shadow: 0 3px 0 #3f8f22;
}
.spec--playful-chunky .plx-status {
  margin-left: auto; font: 800 10px/1 "Instrument Sans", sans-serif; color: #2f3a2b;
  background: #ffe08a; border-radius: 999px; padding: 7px 12px;
}
.spec--playful-chunky .plx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 10px; gap: 10px;
}
.spec--playful-chunky .plx-head {
  margin: 0 0 8px; font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .1em; color: #8a9481;
}
.spec--playful-chunky .plx-side {
  flex: 0 0 150px; min-width: 0; padding: 10px; background: #fff; border-radius: 20px;
  border: 2px solid #e6e3de;
}
.spec--playful-chunky .plx-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 6px 9px; border-radius: 999px; margin-bottom: 4px; background: #f6f4f0;
}
.spec--playful-chunky .plx-row.on {
  background: #d8f3bd; box-shadow: 0 3px 0 #c3e6a0;
}
.spec--playful-chunky .plx-rl {
  font: 700 10px/1 "Instrument Sans", sans-serif; color: #46513f; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--playful-chunky .plx-rv {
  font: 800 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #58cc02;
}
.spec--playful-chunky .plx-main {
  flex: 1 1 auto; min-width: 0; padding: 10px; background: #fff; border-radius: 20px;
  border: 2px solid #e6e3de;
}
.spec--playful-chunky .plx-title {
  margin: 0 0 9px; font: 800 19px/1.1 "Instrument Sans", sans-serif; color: #2f3a2b;
}
.spec--playful-chunky .plx-stats {
  display: flex; gap: 7px; margin-bottom: 9px;
}
.spec--playful-chunky .plx-stat {
  flex: 1 1 0; min-width: 0; padding: 7px 9px; background: #f6f4f0; border-radius: 14px;
}
.spec--playful-chunky .plx-sl {
  display: block; font: 700 8px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .08em; color: #8a9481; margin-bottom: 4px;
}
.spec--playful-chunky .plx-sv {
  display: block; font: 800 14px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #2f3a2b;
}
.spec--playful-chunky .plx-tr {
  display: flex; align-items: center; gap: 8px; padding: 5px 0 5px 10px; border-radius: 999px;
  border-left: 3px solid #e6e3de;
}
.spec--playful-chunky .plx-tn {
  flex: 1 1 auto; min-width: 0; font: 700 10px/1 "Instrument Sans", sans-serif; color: #46513f;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--playful-chunky .plx-tv {
  font: 800 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6f7a68;
}
.spec--playful-chunky .plx-ts {
  flex: 0 0 46px; text-align: center; font: 800 9px/1 "Instrument Sans", sans-serif;
  color: #fff; background: #58cc02; border-radius: 999px; padding: 5px 0;
  box-shadow: 0 3px 0 #3f8f22;
}
.spec--playful-chunky .plx-detail {
  flex: 0 0 156px; min-width: 0; padding: 10px; background: #fff; border-radius: 20px;
  border: 2px solid #e6e3de; display: flex; flex-direction: column;
}
.spec--playful-chunky .plx-meta {
  margin: 0 0 6px; font: 700 10px/1.4 "Instrument Sans", sans-serif; color: #6f7a68;
}
.spec--playful-chunky .plx-btns {
  margin-top: auto; display: flex; flex-direction: column; gap: 7px;
}
.spec--playful-chunky .plx-btn {
  cursor: pointer; border: 0; border-radius: 999px; padding: 10px 10px;
  font: 800 11px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .06em;
}
.spec--playful-chunky .plx-btn.p {
  background: #58cc02; color: #fff; box-shadow: 0 4px 0 #3f8f22;
}
.spec--playful-chunky .plx-btn.s {
  background: #f0eeea; color: #6f7a68; box-shadow: 0 4px 0 #dedbd5;
}`
};

window.COMPLEX["nordic"] = {
  html: `<div class="ndx-app">
    <div class="ndx-top">
      <span class="ndx-mark">Havet</span>
      <span class="ndx-nav"><span class="ndx-n on">Rooms</span><span class="ndx-n">Opening</span><span class="ndx-n">Adviser</span></span>
      <span class="ndx-status">Bergen</span>
    </div>
    <div class="ndx-body">
      <div class="ndx-side">
        <p class="ndx-head">Rooms</p>
        <div class="ndx-row on"><span class="ndx-rl">Reading room</span><span class="ndx-rv">08</span></div>
        <div class="ndx-row"><span class="ndx-rl">Quiet desk</span><span class="ndx-rv">14</span></div>
        <div class="ndx-row"><span class="ndx-rl">Meeting 2</span><span class="ndx-rv">06</span></div>
        <div class="ndx-row"><span class="ndx-rl">Studio</span><span class="ndx-rv">11</span></div>
      </div>
      <div class="ndx-main">
        <span class="ndx-photo"></span>
        <p class="ndx-title">Reading room</p>
        <div class="ndx-stats">
          <div class="ndx-stat"><span class="ndx-sl">Seats</span><span class="ndx-sv">08</span></div>
          <div class="ndx-stat"><span class="ndx-sl">Floor</span><span class="ndx-sv">2</span></div>
          <div class="ndx-stat"><span class="ndx-sl">Until</span><span class="ndx-sv">16:00</span></div>
        </div>
        <div class="ndx-table">
          <div class="ndx-tr"><span class="ndx-tn">Mon 08 May</span><span class="ndx-tv">08:00</span><span class="ndx-ts">Open</span></div>
          <div class="ndx-tr"><span class="ndx-tn">Tue 09 May</span><span class="ndx-tv">08:00</span><span class="ndx-ts">Open</span></div>
          <div class="ndx-tr"><span class="ndx-tn">Wed 10 May</span><span class="ndx-tv">10:00</span><span class="ndx-ts">Busy</span></div>
        </div>
      </div>
      <div class="ndx-detail">
        <p class="ndx-head">Room detail</p>
        <p class="ndx-meta">Floor 2 · west wing</p>
        <p class="ndx-meta">Adviser on site</p>
        <p class="ndx-meta">Walk in, or book</p>
        <div class="ndx-btns">
          <button class="ndx-btn p" type="button">Book slot</button>
          <button class="ndx-btn s" type="button">Details</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--nordic .ndx-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #f4f2ef; border: 1px solid #e0dcd5; border-radius: 8px;
  font-family: "Instrument Sans", sans-serif; color: #2c2a27;
}
.spec--nordic .ndx-top {
  display: flex; align-items: center; gap: 14px; padding: 8px 13px; flex: 0 0 auto;
  border-bottom: 1px solid #e0dcd5;
}
.spec--nordic .ndx-mark {
  font: 400 13px/1 "Instrument Sans", sans-serif; color: #2c2a27;
}
.spec--nordic .ndx-nav {
  display: flex; gap: 14px;
}
.spec--nordic .ndx-n {
  font: 400 10px/1 "Instrument Sans", sans-serif; color: #7b776f;
}
.spec--nordic .ndx-n.on {
  color: #2c2a27;
  border-bottom: 2px solid #6b7f86; padding-bottom: 3px;
}
.spec--nordic .ndx-status {
  margin-left: auto; font: 400 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .14em; color: #7b776f;
}
.spec--nordic .ndx-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 11px 13px; gap: 14px;
}
.spec--nordic .ndx-head {
  margin: 0 0 8px; font: 400 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .16em; color: #7b776f;
}
.spec--nordic .ndx-side {
  flex: 0 0 150px; min-width: 0;
}
.spec--nordic .ndx-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 8px;
  padding: 6px 0; border-bottom: 1px solid #e8e4de;
}
.spec--nordic .ndx-row.on .ndx-rl {
  color: #2c2a27;
}
.spec--nordic .ndx-rl {
  font: 400 10px/1.3 "Instrument Sans", sans-serif; color: #5d5a54; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--nordic .ndx-rv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #7b776f;
}
.spec--nordic .ndx-main {
  flex: 1 1 auto; min-width: 0;
}
.spec--nordic .ndx-photo {
  display: block; height: 40px; border-radius: 5px; margin-bottom: 9px;
  background: linear-gradient(150deg, #cfd6d2, #e6e2da 55%, #b9c3be);
  filter: saturate(.55);
}
.spec--nordic .ndx-title {
  margin: 0 0 8px; font: 400 16px/1.3 "Instrument Sans", sans-serif; color: #2c2a27;
}
.spec--nordic .ndx-stats {
  display: flex; gap: 12px; margin-bottom: 9px; padding-bottom: 8px;
  border-bottom: 1px solid #e8e4de;
}
.spec--nordic .ndx-stat {
  flex: 1 1 0; min-width: 0;
}
.spec--nordic .ndx-sl {
  display: block; font: 400 8px/1 "Instrument Sans", sans-serif; text-transform: uppercase;
  letter-spacing: .14em; color: #7b776f; margin-bottom: 3px;
}
.spec--nordic .ndx-sv {
  display: block; font: 400 12px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #2c2a27;
}
.spec--nordic .ndx-tr {
  display: flex; align-items: baseline; gap: 10px; padding: 5px 0;
  border-bottom: 1px solid #e8e4de;
}
.spec--nordic .ndx-tn {
  flex: 1 1 auto; min-width: 0; font: 400 10px/1.3 "Instrument Sans", sans-serif; color: #5d5a54;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--nordic .ndx-tv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #2c2a27;
}
.spec--nordic .ndx-ts {
  flex: 0 0 44px; text-align: right; font: 400 9px/1 "Instrument Sans", sans-serif;
  text-transform: uppercase; letter-spacing: .1em; color: #6b7f86;
}
.spec--nordic .ndx-detail {
  flex: 0 0 156px; min-width: 0; display: flex; flex-direction: column;
  padding-left: 14px; border-left: 1px solid #e0dcd5;
}
.spec--nordic .ndx-meta {
  margin: 0 0 6px; font: 400 10px/1.6 "Instrument Sans", sans-serif; color: #5d5a54;
}
.spec--nordic .ndx-btns {
  margin-top: auto; display: flex; flex-direction: column; gap: 7px;
}
.spec--nordic .ndx-btn {
  cursor: pointer; border-radius: 6px; padding: 9px 10px;
  font: 400 10px/1 "Instrument Sans", sans-serif;
}
.spec--nordic .ndx-btn.p {
  background: #6b7f86; color: #f4f2ef; border: 1px solid #5c6f75;
}
.spec--nordic .ndx-btn.s {
  background: transparent; color: #5d5a54; border: 1px solid #d5d1ca;
}`
};

window.COMPLEX["isometric"] = {
  html: `<div class="isox-app">
    <div class="isox-top">
      <span class="isox-mark">Axon Grid</span>
      <span class="isox-nav"><span class="isox-n on">Slabs</span><span class="isox-n">Grid</span><span class="isox-n">Lights</span></span>
      <span class="isox-status">Layer 3</span>
    </div>
    <div class="isox-body">
      <div class="isox-side">
        <p class="isox-head">Slabs</p>
        <div class="isox-row on"><span class="isox-rl">Slab 01</span><span class="isox-rv">0</span></div>
        <div class="isox-row"><span class="isox-rl">Slab 02</span><span class="isox-rv">30</span></div>
        <div class="isox-row"><span class="isox-rl">Slab 03</span><span class="isox-rv">60</span></div>
        <div class="isox-row"><span class="isox-rl">Slab 04</span><span class="isox-rv">90</span></div>
      </div>
      <div class="isox-main">
        <p class="isox-title">Site stack</p>
        <div class="isox-work">
          <div class="isox-stats">
            <div class="isox-stat"><span class="isox-sl">Slabs</span><span class="isox-sv">04</span></div>
            <div class="isox-stat"><span class="isox-sl">Pitch</span><span class="isox-sv">30</span></div>
            <div class="isox-stat"><span class="isox-sl">Angle</span><span class="isox-sv">30°</span></div>
          </div>
          <div class="isox-axon" aria-hidden="true">
            <span class="isox-plane z1"></span><span class="isox-plane z2"></span><span class="isox-plane z3"></span>
          </div>
        </div>
        <div class="isox-table">
          <div class="isox-tr"><span class="isox-tn">Slab 01</span><span class="isox-tv">132</span><span class="isox-ts">Base</span></div>
          <div class="isox-tr"><span class="isox-tn">Slab 02</span><span class="isox-tv">30</span><span class="isox-ts">Mid</span></div>
          <div class="isox-tr"><span class="isox-tn">Slab 03</span><span class="isox-tv">60</span><span class="isox-ts">Top</span></div>
        </div>
      </div>
      <div class="isox-detail">
        <p class="isox-head">Slab 03</p>
        <p class="isox-meta">Top face · light 01</p>
        <p class="isox-meta">Pitch 30 · no vanish</p>
        <div class="isox-btns">
          <button class="isox-btn p" type="button">Stack</button>
          <button class="isox-btn s" type="button">Unstack</button>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--isometric .isox-app {
  width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  background: #eef1f6;
  background-image: linear-gradient(45deg, #d3dbe8 1px, transparent 1px),
    linear-gradient(-45deg, #d3dbe8 1px, transparent 1px);
  background-size: 20px 20px;
  border: 1px solid #d3dae6; border-radius: 8px;
  font-family: "Instrument Sans", sans-serif; color: #1e2f52;
}
.spec--isometric .isox-top {
  display: flex; align-items: center; gap: 12px; padding: 8px 13px; flex: 0 0 auto;
  background: #ffffff; border-bottom: 1px solid #d3dae6;
  box-shadow: 0 3px 0 #d9dfe9;
}
.spec--isometric .isox-mark {
  font: 500 12px/1 "Instrument Sans", sans-serif; letter-spacing: .06em; text-transform: uppercase;
  color: #23488f;
}
.spec--isometric .isox-nav {
  display: flex; gap: 7px;
}
.spec--isometric .isox-n {
  font: 400 9px/1 "IBM Plex Mono", monospace; letter-spacing: .12em; text-transform: uppercase;
  color: #5b6f96; padding: 4px 8px; border-radius: 4px; background: #eef1f6;
  box-shadow: 0 2px 0 #d3dae6;
}
.spec--isometric .isox-n.on {
  background: #2f5fb8; color: #eef1f6; box-shadow: 0 2px 0 #23488f;
}
.spec--isometric .isox-status {
  margin-left: auto; font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #23488f;
}
.spec--isometric .isox-body {
  flex: 1 1 auto; min-height: 0; display: flex; padding: 11px 13px; gap: 12px;
}
.spec--isometric .isox-head {
  margin: 0 0 8px; font: 400 9px/1 "IBM Plex Mono", monospace; letter-spacing: .16em;
  text-transform: uppercase; color: #5b6f96;
}
.spec--isometric .isox-side {
  flex: 0 0 146px; min-width: 0; padding: 9px; background: #ffffff; border-radius: 4px;
  border: 1px solid #d3dae6; box-shadow: 4px 4px 0 #d9dfe9;
}
.spec--isometric .isox-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px;
  padding: 5px 7px; border-radius: 3px; margin-bottom: 3px; background: #f2f5fa;
  box-shadow: inset 0 -2px 0 #e0e6f0;
}
.spec--isometric .isox-row.on {
  background: #2f5fb8; box-shadow: inset 0 -2px 0 #23488f;
}
.spec--isometric .isox-rl {
  font: 400 10px/1 "Instrument Sans", sans-serif; color: #3a4c73; overflow: hidden;
  white-space: nowrap; text-overflow: ellipsis;
}
.spec--isometric .isox-row.on .isox-rl {
  color: #eef1f6;
}
.spec--isometric .isox-rv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6f97d8;
}
.spec--isometric .isox-row.on .isox-rv {
  color: #cfe0ff;
}
.spec--isometric .isox-main {
  flex: 1 1 auto; min-width: 0; padding: 9px; background: #ffffff; border-radius: 4px;
  border: 1px solid #d3dae6; box-shadow: 4px 4px 0 #d9dfe9;
}
.spec--isometric .isox-title {
  margin: 0 0 8px; font: 500 14px/1.1 "Instrument Sans", sans-serif; letter-spacing: .04em;
  text-transform: uppercase; color: #1e2f52;
}
.spec--isometric .isox-work {
  display: flex; align-items: flex-start; gap: 12px; margin-bottom: 9px;
}
.spec--isometric .isox-stats {
  flex: 1 1 auto; min-width: 0; display: flex; gap: 7px;
}
/* the signature device of the style: a parallel projection at 30 degrees, so
   the planes are stacked along a real z-axis and nothing converges */
.spec--isometric .isox-axon {
  flex: 0 0 118px; height: 118px; position: relative; transform-style: preserve-3d;
}
.spec--isometric .isox-plane {
  position: absolute; inset: 24px; border-radius: 5px; transform-style: preserve-3d;
  transform-origin: 50% 50%;
}
.spec--isometric .isox-plane.z1 {
  background: #b3c9ec; box-shadow: 0 0 0 1px #97b0da;
  transform: rotateX(54.736deg) rotateZ(-45deg) translateZ(0px);
}
.spec--isometric .isox-plane.z2 {
  background: #6f97d8; box-shadow: 0 0 0 1px #587fc0;
  transform: rotateX(54.736deg) rotateZ(-45deg) translateZ(15px);
}
.spec--isometric .isox-plane.z3 {
  background: #2f5fb8; box-shadow: 0 0 0 1px #23488f;
  transform: rotateX(54.736deg) rotateZ(-45deg) translateZ(30px);
}
.spec--isometric .isox-stat {
  flex: 1 1 0; min-width: 0; padding: 6px 8px; border-radius: 3px; background: #b3c9ec;
  box-shadow: 0 3px 0 #97b0da;
}
.spec--isometric .isox-sl {
  display: block; font: 400 8px/1 "IBM Plex Mono", monospace; letter-spacing: .12em;
  text-transform: uppercase; color: #2c4a86; margin-bottom: 3px;
}
.spec--isometric .isox-sv {
  display: block; font: 500 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums;
  color: #1e2f52;
}
.spec--isometric .isox-tr {
  display: flex; align-items: center; gap: 8px; padding: 4px 6px; border-radius: 3px;
  margin-bottom: 3px; background: #f2f5fa;
}
.spec--isometric .isox-tn {
  flex: 1 1 auto; min-width: 0; font: 400 10px/1 "Instrument Sans", sans-serif; color: #3a4c73;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}
.spec--isometric .isox-tv {
  font: 400 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #5b6f96;
}
.spec--isometric .isox-ts {
  flex: 0 0 44px; text-align: right; font: 500 9px/1 "IBM Plex Mono", monospace;
  letter-spacing: .1em; text-transform: uppercase; color: #2f5fb8;
}
.spec--isometric .isox-detail {
  flex: 0 0 156px; min-width: 0; padding: 9px; background: #ffffff; border-radius: 4px;
  border: 1px solid #d3dae6; box-shadow: 4px 4px 0 #d9dfe9; display: flex; flex-direction: column;
}
.spec--isometric .isox-meta {
  margin: 0 0 6px; font: 400 10px/1.4 "IBM Plex Mono", monospace; color: #5b6f96;
}
.spec--isometric .isox-btns {
  margin-top: auto; display: flex; flex-direction: column; gap: 7px;
}
.spec--isometric .isox-btn {
  cursor: pointer; border-radius: 3px; padding: 9px 10px;
  font: 400 10px/1 "IBM Plex Mono", monospace; letter-spacing: .08em; text-transform: uppercase;
}
.spec--isometric .isox-btn.p {
  background: #2f5fb8; color: #eef1f6; border: 0; box-shadow: 0 3px 0 #23488f;
}
.spec--isometric .isox-btn.s {
  background: #eef1f6; color: #3a4c73; border: 1px solid #d3dae6;
}`
};

window.COMPLEX["corporate-memphis"] = {
  html: `<div class="cmx-app">
    <div class="cmx-art">
      <div class="cmx-blob"></div>
      <div class="cmx-figure"><span class="cmx-head"></span><span class="cmx-body"></span><span class="cmx-arm"></span></div>
    </div>
    <div class="cmx-top">
      <span class="cmx-mark">Bloomteam</span>
      <nav class="cmx-nav"><span>Overview</span><span>Teams</span><span class="is-on">Plans</span><span>Support</span></nav>
      <span class="cmx-user">AB</span>
    </div>
    <div class="cmx-panes">
      <div class="cmx-side">
        <p class="cmx-h">Workspaces</p>
        <div class="cmx-row"><span>Marketing</span><b>12</b></div>
        <div class="cmx-row is-sel"><span>Product</span><b>08</b></div>
        <div class="cmx-row"><span>Support</span><b>05</b></div>
        <div class="cmx-row"><span>Design</span><b>03</b></div>
      </div>
      <div class="cmx-main">
        <p class="cmx-title">Team plan</p>
        <div class="cmx-stats">
          <div class="cmx-stat"><span>Members</span><b>128</b></div>
          <div class="cmx-stat"><span>Seats</span><b>150</b></div>
          <div class="cmx-stat"><span>Usage</span><b>76%</b></div>
        </div>
        <div class="cmx-tab">
          <div class="cmx-tr"><span>Collaborators</span><b>128</b><i class="ok">Active</i></div>
          <div class="cmx-tr"><span>Guest seats</span><b>22</b><i>Limited</i></div>
          <div class="cmx-tr"><span>Storage</span><b>0.8</b><i>Ok</i></div>
        </div>
      </div>
      <div class="cmx-detail">
        <p class="cmx-h">Billing</p>
        <p class="cmx-meta">Annual &middot; renews May</p>
        <p class="cmx-meta">Owner: A. Bergstrom</p>
        <p class="cmx-meta">Invoices: 12</p>
        <div class="cmx-btns"><span class="cmx-btn">Upgrade</span><span class="cmx-btn2">Invite</span></div>
      </div>
    </div>
  </div>`,
  css: `.spec--corporate-memphis .cmx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  box-sizing: border-box; border-radius: 16px; font-family: "Instrument Sans", sans-serif; color: #241f3d;
  background: #f4f0e8;
}
.spec--corporate-memphis .cmx-art { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.spec--corporate-memphis .cmx-blob {
  position: absolute; right: -40px; bottom: -50px; width: 210px; height: 210px;
  border-radius: 56% 44% 40% 60% / 52% 60% 40% 48%; background: #ff8a5c;
}
.spec--corporate-memphis .cmx-figure { position: absolute; left: 18px; bottom: 0; }
.spec--corporate-memphis .cmx-head {
  position: absolute; left: 10px; top: -28px; width: 30px; height: 30px; border-radius: 50%; background: #7b5cf0;
}
.spec--corporate-memphis .cmx-body { display: block; width: 50px; height: 104px; border-radius: 24px 24px 0 0; background: #2f4bd8; }
.spec--corporate-memphis .cmx-arm {
  position: absolute; left: 40px; top: 10px; width: 76px; height: 15px; border-radius: 999px;
  background: #2f4bd8; transform: rotate(-22deg); transform-origin: left center;
}
.spec--corporate-memphis .cmx-top {
  position: relative; z-index: 2; flex: none; display: flex; align-items: center; gap: 8px; padding: 8px 14px;
}
.spec--corporate-memphis .cmx-mark { font: 700 13px/1 "Instrument Sans", sans-serif; color: #241f3d; }
.spec--corporate-memphis .cmx-nav { display: flex; gap: 4px; margin-left: 10px; }
.spec--corporate-memphis .cmx-nav span { padding: 4px 11px; border-radius: 999px; font-size: 11px; color: #6b6780; }
.spec--corporate-memphis .cmx-nav span.is-on { background: #2f4bd8; color: #fff; font-weight: 600; }
.spec--corporate-memphis .cmx-user {
  margin-left: auto; width: 24px; height: 24px; border-radius: 50%; background: #ffc233; color: #241f3d;
  font: 700 10px/24px "Instrument Sans", sans-serif; text-align: center;
}
.spec--corporate-memphis .cmx-panes {
  position: relative; z-index: 3; flex: 1; min-height: 0; display: flex; gap: 10px; padding: 0 14px 12px;
}
.spec--corporate-memphis .cmx-side,
.spec--corporate-memphis .cmx-main,
.spec--corporate-memphis .cmx-detail {
  min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 10px 12px; border-radius: 14px; background: #fff;
}
.spec--corporate-memphis .cmx-side { flex: 0 0 22%; }
.spec--corporate-memphis .cmx-main { flex: 1 1 auto; }
.spec--corporate-memphis .cmx-detail { flex: 0 0 22%; }
.spec--corporate-memphis .cmx-h {
  margin: 0; font-size: 9.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #7b5cf0;
}
.spec--corporate-memphis .cmx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 7px; border-radius: 9px; }
.spec--corporate-memphis .cmx-row span { font-size: 11px; color: #241f3d; }
.spec--corporate-memphis .cmx-row b { font: 600 10.5px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6b6780; }
.spec--corporate-memphis .cmx-row.is-sel { background: #efeaff; }
.spec--corporate-memphis .cmx-row.is-sel span { font-weight: 600; color: #2f4bd8; }
.spec--corporate-memphis .cmx-row.is-sel b { color: #2f4bd8; }
.spec--corporate-memphis .cmx-title { margin: 0; font: 700 13px/1.1 "Instrument Sans", sans-serif; color: #241f3d; }
.spec--corporate-memphis .cmx-stats { display: flex; gap: 8px; }
.spec--corporate-memphis .cmx-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 7px 9px; border-radius: 12px; background: #f4f0e8;
}
.spec--corporate-memphis .cmx-stat span { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: #6b6780; }
.spec--corporate-memphis .cmx-stat b { font: 700 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #241f3d; }
.spec--corporate-memphis .cmx-tab { display: flex; flex-direction: column; }
.spec--corporate-memphis .cmx-tr { display: flex; align-items: center; gap: 6px; padding: 5px 2px; border-bottom: 1px solid #ece7db; }
.spec--corporate-memphis .cmx-tr span { flex: 1 1 auto; min-width: 0; font-size: 11px; color: #241f3d; }
.spec--corporate-memphis .cmx-tr b { font: 600 10.5px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6b6780; }
.spec--corporate-memphis .cmx-tr i { font-style: normal; font-size: 9.5px; padding: 2px 8px; border-radius: 999px; background: #f4f0e8; color: #6b6780; }
.spec--corporate-memphis .cmx-tr i.ok { background: #dcefe0; color: #2f7a4e; }
.spec--corporate-memphis .cmx-meta { margin: 0; font-size: 11px; color: #6b6780; }
.spec--corporate-memphis .cmx-btns { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
.spec--corporate-memphis .cmx-btn {
  text-align: center; padding: 8px 12px; border-radius: 999px; background: #ffc233; color: #241f3d;
  font: 600 11.5px/1 "Instrument Sans", sans-serif; cursor: pointer;
}
.spec--corporate-memphis .cmx-btn2 {
  text-align: center; padding: 7px 12px; border-radius: 999px; background: #f4f0e8; color: #2f4bd8;
  font: 600 11px/1 "Instrument Sans", sans-serif;
}`
};

window.COMPLEX["pixel-art"] = {
  html: `<div class="pxx-app">
    <div class="pxx-top">
      <span class="pxx-mark">COINBOX</span>
      <span class="pxx-nav"><span class="is-on">PLAY</span><span>SCORE</span><span>OPTIONS</span></span>
      <span class="pxx-user">LIVES 3</span>
    </div>
    <div class="pxx-body">
      <div class="pxx-side">
        <p class="pxx-h">STAGES</p>
        <div class="pxx-row"><span>CRYPT</span><b>01</b></div>
        <div class="pxx-row is-sel"><span>MARSH</span><b>02</b></div>
        <div class="pxx-row"><span>FORGE</span><b>03</b></div>
        <div class="pxx-row"><span>VAULT</span><b>04</b></div>
      </div>
      <div class="pxx-main">
        <p class="pxx-title">STAGE 03</p>
        <div class="pxx-stats">
          <div class="pxx-stat"><span>SCORE</span><b>1280</b></div>
          <div class="pxx-stat"><span>COINS</span><b>24</b></div>
          <div class="pxx-stat"><span>TIME</span><b>1:42</b></div>
        </div>
        <div class="pxx-tab">
          <div class="pxx-tr"><span>GUARD</span><b>x4</b><i>DONE</i></div>
          <div class="pxx-tr"><span>CHEST</span><b>x2</b><i>OPEN</i></div>
          <div class="pxx-tr"><span>BOSS</span><b>x1</b><i>NEXT</i></div>
        </div>
      </div>
      <div class="pxx-detail">
        <p class="pxx-h">RUN</p>
        <p class="pxx-meta">DIFFICULTY NORMAL</p>
        <p class="pxx-meta">CHECKPOINT 03</p>
        <p class="pxx-meta">HIGH 4210</p>
        <div class="pxx-btns"><span class="pxx-btn">START</span><span class="pxx-btn2">QUIT</span></div>
      </div>
    </div>
  </div>`,
  css: `.spec--pixel-art .pxx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  box-sizing: border-box; image-rendering: pixelated; font-family: "IBM Plex Mono", monospace; color: #e8e8f5;
  background: #2b2b4a;
  box-shadow: inset 0 0 0 2px #4a4a7a, inset 4px 4px 0 rgba(255,255,255,.08), inset -4px -4px 0 rgba(0,0,0,.28);
}
.spec--pixel-art .pxx-top {
  flex: none; display: flex; align-items: center; gap: 12px; padding: 8px 12px;
  background: #12121f; box-shadow: inset 0 -4px 0 #4a4a7a;
}
.spec--pixel-art .pxx-mark { font: 700 12px/1 "IBM Plex Mono", monospace; letter-spacing: .16em; color: #ffd23f; }
.spec--pixel-art .pxx-nav { display: flex; gap: 4px; margin-left: 4px; }
.spec--pixel-art .pxx-nav span {
  padding: 4px 8px; font-size: 10px; letter-spacing: .1em; color: #9a9ac8; background: #2b2b4a;
  box-shadow: inset 2px 2px 0 rgba(255,255,255,.10), inset -2px -2px 0 rgba(0,0,0,.35);
}
.spec--pixel-art .pxx-nav span.is-on { color: #12121f; background: #38e07b; box-shadow: inset 2px 2px 0 rgba(255,255,255,.35), inset -2px -2px 0 rgba(0,0,0,.30); }
.spec--pixel-art .pxx-user { margin-left: auto; font: 700 10px/1 "IBM Plex Mono", monospace; letter-spacing: .12em; color: #ff4d6d; }
.spec--pixel-art .pxx-body { flex: 1; min-height: 0; display: flex; gap: 8px; padding: 8px; }
.spec--pixel-art .pxx-side,
.spec--pixel-art .pxx-main,
.spec--pixel-art .pxx-detail {
  min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 8px; background: #34345c;
  box-shadow: inset 0 0 0 2px #4a4a7a, inset 4px 4px 0 rgba(255,255,255,.06), inset -4px -4px 0 rgba(0,0,0,.30);
}
.spec--pixel-art .pxx-side { flex: 0 0 24%; }
.spec--pixel-art .pxx-main { flex: 1 1 auto; }
.spec--pixel-art .pxx-detail { flex: 0 0 24%; }
.spec--pixel-art .pxx-h { margin: 0 0 2px; font: 700 9px/1 "IBM Plex Mono", monospace; letter-spacing: .2em; color: #38e07b; }
.spec--pixel-art .pxx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px; }
.spec--pixel-art .pxx-row span { font-size: 10px; letter-spacing: .08em; color: #c6c6e6; }
.spec--pixel-art .pxx-row b { font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #9a9ac8; }
.spec--pixel-art .pxx-row.is-sel { background: #4a4a7a; box-shadow: inset 2px 2px 0 rgba(255,255,255,.14), inset -2px -2px 0 rgba(0,0,0,.35); }
.spec--pixel-art .pxx-row.is-sel span { color: #ffd23f; }
.spec--pixel-art .pxx-row.is-sel b { color: #ffd23f; }
.spec--pixel-art .pxx-title { margin: 0 0 2px; font: 700 12px/1 "IBM Plex Mono", monospace; letter-spacing: .14em; color: #ffd23f; }
.spec--pixel-art .pxx-stats { display: flex; gap: 8px; }
.spec--pixel-art .pxx-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 6px 8px; background: #12121f;
  box-shadow: inset 2px 2px 0 rgba(0,0,0,.5), inset -2px -2px 0 rgba(255,255,255,.08);
}
.spec--pixel-art .pxx-stat span { font-size: 8.5px; letter-spacing: .16em; color: #9a9ac8; }
.spec--pixel-art .pxx-stat b { font: 700 12px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #38e07b; }
.spec--pixel-art .pxx-tab { display: flex; flex-direction: column; gap: 4px; margin-top: 2px; }
.spec--pixel-art .pxx-tr { display: flex; align-items: center; gap: 6px; padding: 5px 6px; background: #2b2b4a; }
.spec--pixel-art .pxx-tr span { flex: 1 1 auto; min-width: 0; font-size: 10px; letter-spacing: .08em; color: #c6c6e6; }
.spec--pixel-art .pxx-tr b { font: 700 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #ffd23f; }
.spec--pixel-art .pxx-tr i { font-style: normal; font-size: 9px; letter-spacing: .1em; padding: 2px 6px; color: #12121f; background: #ff8a3d; }
.spec--pixel-art .pxx-meta { margin: 0; font-size: 10px; letter-spacing: .08em; color: #c6c6e6; }
.spec--pixel-art .pxx-btns { margin-top: auto; display: flex; flex-direction: column; gap: 8px; }
.spec--pixel-art .pxx-btn {
  text-align: center; padding: 9px 8px; background: #ff8a3d; color: #12121f; cursor: pointer;
  font: 700 11px/1 "IBM Plex Mono", monospace; letter-spacing: .12em;
  box-shadow: inset 2px 2px 0 rgba(255,255,255,.35), inset -3px -3px 0 rgba(0,0,0,.30), 0 0 0 2px #12121f;
}
.spec--pixel-art .pxx-btn2 {
  text-align: center; padding: 7px 8px; background: #4a4a7a; color: #c6c6e6;
  font: 700 10px/1 "IBM Plex Mono", monospace; letter-spacing: .12em;
  box-shadow: inset 2px 2px 0 rgba(255,255,255,.12), inset -2px -2px 0 rgba(0,0,0,.35);
}`
};

window.COMPLEX["japanese-web"] = {
  html: `<div class="jpx-app">
    <div class="jpx-top">
      <span class="jpx-mark">総合ポータル</span>
      <span class="jpx-nav"><span>ホーム</span><span class="is-on">サービス</span><span>採用情報</span><span>会社概要</span></span>
      <span class="jpx-user">JP</span>
    </div>
    <div class="jpx-body">
      <div class="jpx-side">
        <p class="jpx-h">メニュー</p>
        <div class="jpx-row"><span>新着情報</span><b>12</b></div>
        <div class="jpx-row is-sel"><span>サービス</span><b>08</b></div>
        <div class="jpx-row"><span>採用情報</span><b>03</b></div>
        <div class="jpx-row"><span>お問合せ</span><b>05</b></div>
      </div>
      <div class="jpx-main">
        <p class="jpx-title">サービス一覧</p>
        <div class="jpx-stats">
          <div class="jpx-stat"><span>登録数</span><b>1,240</b></div>
          <div class="jpx-stat"><span>稼働率</span><b>99.2</b></div>
          <div class="jpx-stat"><span>更新</span><b>本日</b></div>
        </div>
        <div class="jpx-tab">
          <div class="jpx-tr"><span>基幹システム</span><b>安定</b><i class="ok">稼働</i></div>
          <div class="jpx-tr"><span>決済ゲート</span><b>速報</b><i class="ok">稼働</i></div>
          <div class="jpx-tr"><span>在庫管理</span><b>保守</b><i>停止</i></div>
        </div>
      </div>
      <div class="jpx-detail">
        <div class="jpx-tower">総合案内</div>
        <div class="jpx-info">
          <p class="jpx-h">詳細</p>
          <p class="jpx-meta">担当 山田</p>
          <p class="jpx-meta">更新 10/11</p>
          <p class="jpx-meta">区分 社内</p>
          <div class="jpx-btns"><span class="jpx-btn">詳細へ</span><span class="jpx-btn2">戻る</span></div>
        </div>
      </div>
    </div>
  </div>`,
  css: `.spec--japanese-web .jpx-app {
  position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden;
  box-sizing: border-box; color: #222; border: 1px solid #999; background: #fff;
  font-family: "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", "Instrument Sans", sans-serif;
}
.spec--japanese-web .jpx-top {
  flex: none; display: flex; align-items: center; gap: 8px; padding: 4px 6px; background: #fff; border-bottom: 2px solid #c8102e;
}
.spec--japanese-web .jpx-mark { font: 700 12px/1 "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif; color: #c8102e; }
.spec--japanese-web .jpx-nav { display: flex; gap: 0; margin-left: 4px; border-left: 1px solid #ccc; }
.spec--japanese-web .jpx-nav span {
  padding: 3px 8px; font-size: 11px; color: #222; border-right: 1px solid #ccc; background: #fbfbfb;
}
.spec--japanese-web .jpx-nav span.is-on { color: #fff; background: #c8102e; font-weight: 700; }
.spec--japanese-web .jpx-user {
  margin-left: auto; font-size: 10px; padding: 2px 6px; color: #fff; background: #1b3a6b; letter-spacing: .06em;
}
.spec--japanese-web .jpx-body {
  flex: 1; min-height: 0; display: flex; gap: 5px; padding: 5px; background: #fff;
}
.spec--japanese-web .jpx-side,
.spec--japanese-web .jpx-main,
.spec--japanese-web .jpx-detail {
  min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 5px; border: 1px solid #999; background: #fff;
}
.spec--japanese-web .jpx-side { flex: 0 0 22%; }
.spec--japanese-web .jpx-main { flex: 1 1 auto; }
.spec--japanese-web .jpx-detail { flex: 0 0 24%; flex-direction: row; gap: 6px; }
.spec--japanese-web .jpx-info { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.spec--japanese-web .jpx-h {
  margin: 0; padding: 2px 6px; font-size: 10px; font-weight: 700; color: #fff; background: #1b3a6b; letter-spacing: .06em;
}
.spec--japanese-web .jpx-row {
  display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px;
  font-size: 11px; border-bottom: 1px solid #ccc; background: #fbfbfb;
}
.spec--japanese-web .jpx-row:nth-child(odd) { background: #eef3f9; }
.spec--japanese-web .jpx-row span { color: #222; }
.spec--japanese-web .jpx-row b { font: 600 10.5px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #1b3a6b; }
.spec--japanese-web .jpx-row.is-sel { background: #fde8ec; border-left: 3px solid #c8102e; }
.spec--japanese-web .jpx-row.is-sel span { font-weight: 700; color: #c8102e; }
.spec--japanese-web .jpx-row.is-sel b { color: #c8102e; }
.spec--japanese-web .jpx-title {
  margin: 0; padding: 3px 6px; font: 700 11.5px/1.2 "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
  color: #222; border-left: 4px solid #c8102e; background: #f6f6f6;
}
.spec--japanese-web .jpx-stats { display: flex; gap: 4px; }
.spec--japanese-web .jpx-stat {
  flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 2px; padding: 5px 6px; border: 1px solid #ccc; background: #fbfbfb;
}
.spec--japanese-web .jpx-stat span { font-size: 9.5px; color: #666; }
.spec--japanese-web .jpx-stat b { font: 700 12px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #1b3a6b; }
.spec--japanese-web .jpx-tab { display: flex; flex-direction: column; border: 1px solid #999; }
.spec--japanese-web .jpx-tr { display: flex; align-items: center; gap: 5px; padding: 4px 6px; font-size: 11px; border-bottom: 1px solid #ccc; }
.spec--japanese-web .jpx-tr:nth-child(odd) { background: #fbfbfb; }
.spec--japanese-web .jpx-tr:nth-child(even) { background: #eef3f9; }
.spec--japanese-web .jpx-tr span { flex: 1 1 auto; min-width: 0; color: #222; }
.spec--japanese-web .jpx-tr b { font: 600 10.5px/1 "IBM Plex Mono", monospace; color: #666; }
.spec--japanese-web .jpx-tr i { font-style: normal; font-size: 9.5px; padding: 1px 5px; color: #fff; background: #888; }
.spec--japanese-web .jpx-tr i.ok { background: #2f7a4e; }
.spec--japanese-web .jpx-tower {
  writing-mode: vertical-rl; text-orientation: upright; align-self: stretch; text-align: center;
  padding: 5px 3px; font-size: 11px; letter-spacing: .18em; color: #fff; background: #1b3a6b;
}
.spec--japanese-web .jpx-meta { margin: 0; font-size: 10.5px; color: #333; }
.spec--japanese-web .jpx-btns { margin-top: auto; display: flex; flex-direction: column; gap: 4px; }
.spec--japanese-web .jpx-btn {
  text-align: center; padding: 6px 8px; font-size: 11px; font-weight: 700; color: #fff; background: #c8102e; cursor: pointer;
}
.spec--japanese-web .jpx-btn2 {
  text-align: center; padding: 5px 8px; font-size: 10.5px; color: #1b3a6b; background: #eef3f9; border: 1px solid #99a;
}`
};

window.COMPLEX["anti-design"] = {
  html: `<div class="axx-app">
  <div class="axx-top">
    <span class="axx-mark">MEGADROP</span>
    <div class="axx-nav"><span class="axx-navitem on">drops</span><span class="axx-navitem">closet</span><span class="axx-navitem">chats</span></div>
    <span class="axx-user">48h only</span>
  </div>
  <div class="axx-body">
    <div class="axx-side">
      <div class="axx-sidehead">racks</div>
      <div class="axx-row on"><span class="axx-rl">outerwear</span><span class="axx-rv">128</span></div>
      <div class="axx-row"><span class="axx-rl">tees</span><span class="axx-rv">64</span></div>
      <div class="axx-row"><span class="axx-rl">denim</span><span class="axx-rv">42</span></div>
      <div class="axx-row"><span class="axx-rl">samples</span><span class="axx-rv">9</span></div>
    </div>
    <div class="axx-main">
      <span class="axx-sticker">NEW!</span>
      <div class="axx-title">season 07</div>
      <div class="axx-stats">
        <div class="axx-stat"><span class="axx-sv">48h</span><span class="axx-sk">drop</span></div>
        <div class="axx-stat"><span class="axx-sv">9</span><span class="axx-sk">pieces</span></div>
        <div class="axx-stat"><span class="axx-sv">3k</span><span class="axx-sk">in cart</span></div>
      </div>
      <div class="axx-table">
        <div class="axx-tr"><span class="axx-tn">bomber</span><span class="axx-tv">220</span><span class="axx-ts">live</span></div>
        <div class="axx-tr"><span class="axx-tn">hoodie</span><span class="axx-tv">140</span><span class="axx-ts">low</span></div>
        <div class="axx-tr"><span class="axx-tn">cap</span><span class="axx-tv">45</span><span class="axx-ts">wait</span></div>
      </div>
    </div>
    <div class="axx-detail">
      <span class="axx-badge">18+</span>
      <div class="axx-dhead">piece</div>
      <div class="axx-meta">fit &middot; oversize</div>
      <div class="axx-meta">stock &middot; 12 left</div>
      <div class="axx-actions">
        <button class="axx-primary" type="button">grab it</button>
        <button class="axx-ghost" type="button">skip</button>
      </div>
    </div>
  </div>
</div>`,
  css: `.spec--anti-design .axx-app { position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 2px solid #111; background: #f5ff3d; font-family: "Instrument Sans", sans-serif; color: #111; }
.spec--anti-design .axx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; height: 32px; padding: 0 10px; background: #1200ff; border-bottom: 3px solid #111; }
.spec--anti-design .axx-mark { font: 800 13px/1 "Instrument Sans", sans-serif; letter-spacing: -0.03em; color: #f5ff3d; text-transform: uppercase; }
.spec--anti-design .axx-nav { display: flex; gap: 5px; }
.spec--anti-design .axx-navitem { font: 700 11px/1 "Instrument Sans", sans-serif; padding: 4px 8px; color: #f5ff3d; border: 2px solid #f5ff3d; transform: rotate(-3deg); }
.spec--anti-design .axx-navitem.on { color: #111; background: #ff2fb0; border-color: #111; transform: rotate(2deg); box-shadow: 2px 2px 0 #f5ff3d; }
.spec--anti-design .axx-user { margin-left: auto; font: 500 11px/1 "IBM Plex Mono", monospace; padding: 4px 8px; color: #111; background: #00e0a4; border: 2px solid #111; transform: rotate(4deg); }
.spec--anti-design .axx-body { flex: 1 1 auto; display: flex; min-height: 0; gap: 7px; padding: 7px; }
.spec--anti-design .axx-side { flex: 1 1 23%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 7px; background: #00e0a4; border: 2px solid #111; transform: rotate(-1.4deg); box-shadow: 3px 3px 0 #111; }
.spec--anti-design .axx-sidehead { font: 800 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .04em; color: #111; }
.spec--anti-design .axx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 4px 6px; border: 2px solid #111; background: #f5ff3d; }
.spec--anti-design .axx-row.on { background: #1200ff; box-shadow: 2px 2px 0 #ff2fb0; }
.spec--anti-design .axx-rl { font: 700 11px/1 "Instrument Sans", sans-serif; color: #111; }
.spec--anti-design .axx-row.on .axx-rl { color: #f5ff3d; }
.spec--anti-design .axx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111; }
.spec--anti-design .axx-row.on .axx-rv { color: #ff2fb0; }
.spec--anti-design .axx-main { position: relative; flex: 1 1 45%; min-width: 0; display: flex; flex-direction: column; gap: 7px; padding: 8px; background: #fff; border: 2px solid #111; transform: rotate(.8deg); box-shadow: 4px 4px 0 #1200ff; }
.spec--anti-design .axx-sticker { position: absolute; top: 6px; right: 8px; font: 800 11px/1 "Instrument Sans", sans-serif; padding: 5px 8px; color: #fff; background: #ff2fb0; border: 2px solid #111; transform: rotate(9deg); box-shadow: 3px 3px 0 #111; }
.spec--anti-design .axx-title { margin: 0; font: 800 22px/1 "Instrument Sans", sans-serif; text-transform: lowercase; letter-spacing: -0.04em; color: #1200ff; text-shadow: 3px 3px 0 #ff2fb0; }
.spec--anti-design .axx-stats { display: flex; gap: 6px; }
.spec--anti-design .axx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 2px; padding: 5px 7px; border: 2px solid #111; }
.spec--anti-design .axx-stat:nth-child(2) { background: #f5ff3d; }
.spec--anti-design .axx-stat:nth-child(3) { background: #00e0a4; }
.spec--anti-design .axx-stat:nth-child(1) { background: #1200ff; }
.spec--anti-design .axx-sv { font: 800 14px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111; }
.spec--anti-design .axx-stat:nth-child(1) .axx-sv { color: #f5ff3d; }
.spec--anti-design .axx-sk { font: 700 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .06em; color: #111; }
.spec--anti-design .axx-stat:nth-child(1) .axx-sk { color: #00e0a4; }
.spec--anti-design .axx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 3px; }
.spec--anti-design .axx-tr { display: flex; align-items: center; gap: 8px; padding: 4px 6px; border: 2px solid #111; background: #f5ff3d; }
.spec--anti-design .axx-tr:nth-child(2) { transform: rotate(-.8deg); }
.spec--anti-design .axx-tn { flex: 1 1 0; min-width: 0; font: 700 11px/1 "Instrument Sans", sans-serif; color: #111; }
.spec--anti-design .axx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #111; }
.spec--anti-design .axx-ts { font: 800 9px/1 "Instrument Sans", sans-serif; text-transform: uppercase; color: #1200ff; }
.spec--anti-design .axx-detail { position: relative; flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 8px; background: #ff2fb0; border: 2px solid #111; transform: rotate(1.6deg); box-shadow: 3px 3px 0 #1200ff; }
.spec--anti-design .axx-badge { position: absolute; top: 6px; right: 8px; font: 800 10px/1 "Instrument Sans", sans-serif; padding: 3px 6px; color: #111; background: #f5ff3d; border: 2px solid #111; transform: rotate(-8deg); }
.spec--anti-design .axx-dhead { font: 800 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .04em; color: #111; }
.spec--anti-design .axx-meta { font: 500 10px/1.2 "IBM Plex Mono", monospace; color: #111; padding: 4px 6px; background: #fff; border: 2px solid #111; }
.spec--anti-design .axx-actions { margin-top: auto; display: flex; gap: 7px; }
.spec--anti-design .axx-primary { flex: 1 1 0; padding: 7px; border: 2px solid #111; cursor: pointer; font: 800 11px/1 "Instrument Sans", sans-serif; color: #f5ff3d; background: #1200ff; text-transform: lowercase; }
.spec--anti-design .axx-ghost { flex: 1 1 0; padding: 7px; border: 2px solid #111; cursor: pointer; font: 800 11px/1 "Instrument Sans", sans-serif; color: #111; background: #f5ff3d; text-transform: lowercase; }`
};

window.COMPLEX["terminal-cli"] = {
  html: `<div class="tmx-app">
  <div class="tmx-top">
    <span class="tmx-mark">orion-shell</span>
    <div class="tmx-nav"><span class="tmx-navitem on">build</span><span class="tmx-navitem">logs</span><span class="tmx-navitem">env</span></div>
    <span class="tmx-user">root@orion</span>
  </div>
  <div class="tmx-body">
    <div class="tmx-side">
      <div class="tmx-sidehead">-- targets --</div>
      <div class="tmx-row on"><span class="tmx-rl">api</span><span class="tmx-rv">ok</span></div>
      <div class="tmx-row"><span class="tmx-rl">web</span><span class="tmx-rv">ok</span></div>
      <div class="tmx-row"><span class="tmx-rl">worker</span><span class="tmx-rv">warn</span></div>
      <div class="tmx-row"><span class="tmx-rl">docs</span><span class="tmx-rv">skip</span></div>
    </div>
    <div class="tmx-main">
      <div class="tmx-title">$ build --release</div>
      <div class="tmx-stats">
        <div class="tmx-stat"><span class="tmx-sv">214</span><span class="tmx-sk">passed</span></div>
        <div class="tmx-stat"><span class="tmx-sv">2</span><span class="tmx-sk">failed</span></div>
        <div class="tmx-stat"><span class="tmx-sv">18</span><span class="tmx-sk">warned</span></div>
      </div>
      <div class="tmx-table">
        <div class="tmx-tr"><span class="tmx-tn">api.test</span><span class="tmx-tv">0.42s</span><span class="tmx-ts">pass</span></div>
        <div class="tmx-tr"><span class="tmx-tn">web.spec</span><span class="tmx-tv">0.31s</span><span class="tmx-ts">fail</span></div>
        <div class="tmx-tr"><span class="tmx-tn">lint</span><span class="tmx-tv">0.08s</span><span class="tmx-ts">warn</span></div>
      </div>
    </div>
    <div class="tmx-detail">
      <div class="tmx-dhead">-- job 554 --</div>
      <div class="tmx-meta">pid &middot; 2210</div>
      <div class="tmx-meta">elapsed &middot; 00:04</div>
      <div class="tmx-actions">
        <button class="tmx-primary" type="button">rerun</button>
        <button class="tmx-ghost" type="button">abort</button>
      </div>
    </div>
  </div>
  <div class="tmx-prompt">$ tail -f build.log<span class="tmx-cur"><i></i></span></div>
  <div class="tmx-status"><span class="tmx-ok">[ok]</span> 4 targets &middot; <span class="tmx-bad">2 failed</span> &middot; 00:04 elapsed</div>
</div>`,
  css: `.spec--terminal-cli .tmx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; background: #0b0e0c; border: 1px solid #23282a; font-family: "IBM Plex Mono", monospace; color: #cfe0d8; }
.spec--terminal-cli .tmx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; height: 26px; padding: 0 10px; background: #161a19; border-bottom: 1px solid #23282a; font-size: 11px; }
.spec--terminal-cli .tmx-mark { font-weight: 600; color: #cfe0d8; letter-spacing: .02em; }
.spec--terminal-cli .tmx-nav { display: flex; gap: 8px; }
.spec--terminal-cli .tmx-navitem { font-size: 11px; color: #7e8a85; }
.spec--terminal-cli .tmx-navitem.on { color: #0b0e0c; background: #6fd6a4; padding: 0 5px; }
.spec--terminal-cli .tmx-user { margin-left: auto; font-size: 11px; color: #7e8a85; }
.spec--terminal-cli .tmx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--terminal-cli .tmx-side { flex: 1 1 24%; min-width: 0; display: flex; flex-direction: column; gap: 2px; padding: 6px 8px; border-right: 1px solid #23282a; }
.spec--terminal-cli .tmx-sidehead { font-size: 11px; color: #7e8a85; margin-bottom: 3px; }
.spec--terminal-cli .tmx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 2px 5px; font-size: 11px; }
.spec--terminal-cli .tmx-row.on { background: #cfe0d8; color: #0b0e0c; }
.spec--terminal-cli .tmx-rl { color: inherit; }
.spec--terminal-cli .tmx-rv { font-variant-numeric: tabular-nums; color: #7e8a85; }
.spec--terminal-cli .tmx-row.on .tmx-rv { color: #0b0e0c; }
.spec--terminal-cli .tmx-main { flex: 1 1 46%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 7px 9px; border-right: 1px solid #23282a; }
.spec--terminal-cli .tmx-title { font-size: 11px; color: #6fd6a4; }
.spec--terminal-cli .tmx-stats { display: flex; gap: 6px; }
.spec--terminal-cli .tmx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 2px; padding: 5px 6px; border: 1px solid #23282a; }
.spec--terminal-cli .tmx-sv { font-size: 13px; font-variant-numeric: tabular-nums; color: #cfe0d8; }
.spec--terminal-cli .tmx-sk { font-size: 10px; color: #7e8a85; }
.spec--terminal-cli .tmx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 2px; }
.spec--terminal-cli .tmx-tr { display: flex; align-items: center; gap: 8px; padding: 3px 5px; font-size: 11px; border-bottom: 1px solid #1a1f1d; }
.spec--terminal-cli .tmx-tn { flex: 1 1 0; min-width: 0; color: #cfe0d8; }
.spec--terminal-cli .tmx-tv { font-variant-numeric: tabular-nums; color: #cfe0d8; }
.spec--terminal-cli .tmx-ts { color: #6fd6a4; }
.spec--terminal-cli .tmx-tr:nth-child(2) .tmx-ts { color: #ef7a6a; }
.spec--terminal-cli .tmx-tr:nth-child(3) .tmx-ts { color: #7e8a85; }
.spec--terminal-cli .tmx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 7px 9px; }
.spec--terminal-cli .tmx-dhead { font-size: 11px; color: #7e8a85; }
.spec--terminal-cli .tmx-meta { font-size: 11px; color: #cfe0d8; }
.spec--terminal-cli .tmx-actions { margin-top: auto; display: flex; gap: 6px; }
.spec--terminal-cli .tmx-primary { flex: 1 1 0; padding: 5px; cursor: pointer; font: 400 11px/1 "IBM Plex Mono", monospace; color: #0b0e0c; background: #6fd6a4; border: 0; }
.spec--terminal-cli .tmx-ghost { flex: 1 1 0; padding: 5px; cursor: pointer; font: 400 11px/1 "IBM Plex Mono", monospace; color: #cfe0d8; background: #0b0e0c; border: 1px solid #23282a; }
.spec--terminal-cli .tmx-prompt { flex: 0 0 auto; padding: 4px 10px; font-size: 11px; color: #6fd6a4; background: #161a19; border-top: 1px solid #23282a; }
.spec--terminal-cli .tmx-cur { display: inline-block; width: 7px; height: 12px; margin-left: 5px; vertical-align: -2px; background: #6fd6a4; }
.spec--terminal-cli .tmx-cur i { display: none; }
.spec--terminal-cli .tmx-status { flex: 0 0 auto; padding: 3px 10px; font-size: 11px; color: #7e8a85; background: #0b0e0c; border-top: 1px solid #23282a; }
.spec--terminal-cli .tmx-ok { color: #6fd6a4; }
.spec--terminal-cli .tmx-bad { color: #ef7a6a; }`
};

window.COMPLEX["spatial-vision"] = {
  html: `<div class="spx-app">
  <span class="spx-room"></span>
  <div class="spx-top">
    <span class="spx-mark">VISTA</span>
    <div class="spx-nav"><span class="spx-navitem on">Gallery</span><span class="spx-navitem">Studio</span><span class="spx-navitem">Space</span></div>
    <span class="spx-user">Near</span>
  </div>
  <div class="spx-body">
    <div class="spx-side">
      <div class="spx-sidehead">Spatials</div>
      <div class="spx-row on"><span class="spx-rl">Coast</span><span class="spx-rv">12</span></div>
      <div class="spx-row"><span class="spx-rl">Studio</span><span class="spx-rv">8</span></div>
      <div class="spx-row"><span class="spx-rl">Field</span><span class="spx-rv">5</span></div>
      <div class="spx-row"><span class="spx-rl">Night</span><span class="spx-rv">3</span></div>
    </div>
    <div class="spx-main">
      <div class="spx-title">Gallery</div>
      <div class="spx-stats">
        <div class="spx-stat"><span class="spx-sv">24</span><span class="spx-sk">Frames</span></div>
        <div class="spx-stat"><span class="spx-sv">3</span><span class="spx-sk">Planes</span></div>
        <div class="spx-stat"><span class="spx-sv">96&deg;</span><span class="spx-sk">FOV</span></div>
      </div>
      <div class="spx-table">
        <div class="spx-tr"><span class="spx-tn">Coast 04</span><span class="spx-tv">2.1 m</span><span class="spx-ts">Near</span></div>
        <div class="spx-tr"><span class="spx-tn">Coast 03</span><span class="spx-tv">3.4 m</span><span class="spx-ts">Mid</span></div>
        <div class="spx-tr"><span class="spx-tn">Coast 02</span><span class="spx-tv">5.0 m</span><span class="spx-ts">Far</span></div>
      </div>
    </div>
    <div class="spx-detail">
      <div class="spx-dhead">Window</div>
      <div class="spx-meta">Depth &middot; 2.1 m</div>
      <div class="spx-meta">Size &middot; 38&deg;</div>
      <div class="spx-meta">Anchor &middot; Room</div>
      <div class="spx-actions">
        <button class="spx-primary" type="button">Bring near</button>
        <button class="spx-ghost" type="button">Send back</button>
      </div>
    </div>
  </div>
</div>`,
  css: `.spec--spatial-vision .spx-app { position: relative; width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border-radius: 18px; border: 1px solid rgba(255,255,255,.16); background: linear-gradient(160deg, #2c3444, #171c26); font-family: "Instrument Sans", sans-serif; color: #fff; }
.spec--spatial-vision .spx-room { position: absolute; inset: 0; background: radial-gradient(220px 150px at 18% 12%, rgba(190,215,255,.26), transparent 70%), radial-gradient(260px 190px at 84% 88%, rgba(255,190,150,.2), transparent 70%); }
.spec--spatial-vision .spx-top { position: relative; flex: 0 0 auto; display: flex; align-items: center; gap: 14px; height: 36px; padding: 0 16px; background: rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%); }
.spec--spatial-vision .spx-mark { font: 600 13px/1 "Instrument Sans", sans-serif; letter-spacing: .16em; color: #fff; }
.spec--spatial-vision .spx-nav { display: flex; gap: 4px; }
.spec--spatial-vision .spx-navitem { font: 500 11px/1 "Instrument Sans", sans-serif; padding: 6px 12px; border-radius: 999px; color: rgba(255,255,255,.72); }
.spec--spatial-vision .spx-navitem.on { color: #fff; background: rgba(255,255,255,.24); outline: 1px solid rgba(255,255,255,.7); }
.spec--spatial-vision .spx-user { margin-left: auto; font: 500 11px/1 "Instrument Sans", sans-serif; padding: 6px 12px; border-radius: 999px; color: #fff; background: rgba(255,255,255,.18); }
.spec--spatial-vision .spx-body { position: relative; flex: 1 1 auto; display: flex; min-height: 0; gap: 14px; padding: 14px; perspective: 900px; }
.spec--spatial-vision .spx-side { flex: 1 1 23%; min-width: 0; display: flex; flex-direction: column; gap: 5px; padding: 12px; border-radius: 20px; background: rgba(240,245,255,.2); border: 1px solid rgba(255,255,255,.32); box-shadow: 0 10px 24px rgba(0,0,0,.32); backdrop-filter: blur(18px) saturate(150%); -webkit-backdrop-filter: blur(18px) saturate(150%); transform: rotateY(7deg); }
.spec--spatial-vision .spx-sidehead { font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.66); margin-bottom: 3px; }
.spec--spatial-vision .spx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 5px 9px; border-radius: 12px; }
.spec--spatial-vision .spx-row.on { background: rgba(255,255,255,.3); outline: 1px solid rgba(255,255,255,.8); }
.spec--spatial-vision .spx-rl { font: 500 11px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.92); }
.spec--spatial-vision .spx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: rgba(255,255,255,.72); }
.spec--spatial-vision .spx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 9px; padding: 13px; border-radius: 24px; background: rgba(255,255,255,.24); border: 1px solid rgba(255,255,255,.42); box-shadow: 0 18px 40px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.62); backdrop-filter: blur(24px) saturate(160%); -webkit-backdrop-filter: blur(24px) saturate(160%); }
.spec--spatial-vision .spx-title { font: 600 13px/1 "Instrument Sans", sans-serif; color: #fff; }
.spec--spatial-vision .spx-stats { display: flex; gap: 8px; }
.spec--spatial-vision .spx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 7px 9px; border-radius: 14px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.3); }
.spec--spatial-vision .spx-sv { font: 600 14px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #fff; }
.spec--spatial-vision .spx-sk { font: 500 9px/1 "Instrument Sans", sans-serif; letter-spacing: .08em; text-transform: uppercase; color: rgba(255,255,255,.66); }
.spec--spatial-vision .spx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; gap: 3px; }
.spec--spatial-vision .spx-tr { display: flex; align-items: center; gap: 8px; padding: 5px 9px; border-radius: 11px; background: rgba(255,255,255,.12); }
.spec--spatial-vision .spx-tn { flex: 1 1 0; min-width: 0; font: 500 11px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.94); }
.spec--spatial-vision .spx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: rgba(255,255,255,.78); }
.spec--spatial-vision .spx-ts { font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .06em; text-transform: uppercase; color: rgba(255,255,255,.6); }
.spec--spatial-vision .spx-detail { flex: 1 1 28%; min-width: 0; display: flex; flex-direction: column; gap: 7px; padding: 12px; border-radius: 20px; background: rgba(255,255,255,.32); border: 1px solid rgba(255,255,255,.46); box-shadow: 0 14px 30px rgba(0,0,0,.36), inset 0 1px 0 rgba(255,255,255,.7); backdrop-filter: blur(18px) saturate(150%); -webkit-backdrop-filter: blur(18px) saturate(150%); transform: rotateY(-6deg); }
.spec--spatial-vision .spx-dhead { font: 600 9px/1 "Instrument Sans", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.7); }
.spec--spatial-vision .spx-meta { font: 500 10px/1 "Instrument Sans", sans-serif; color: rgba(255,255,255,.92); padding: 6px 9px; border-radius: 11px; background: rgba(255,255,255,.16); }
.spec--spatial-vision .spx-actions { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
.spec--spatial-vision .spx-primary { min-height: 34px; border: 1px solid rgba(255,255,255,.6); border-radius: 12px; cursor: pointer; font: 600 11px/1 "Instrument Sans", sans-serif; color: #131820; background: rgba(255,255,255,.86); }
.spec--spatial-vision .spx-ghost { min-height: 34px; border: 1px solid rgba(255,255,255,.42); border-radius: 12px; cursor: pointer; font: 600 11px/1 "Instrument Sans", sans-serif; color: #fff; background: rgba(255,255,255,.14); }`
};

window.COMPLEX["enterprise-b2b"] = {
  html: `<div class="ebx-app">
  <div class="ebx-top">
    <span class="ebx-mark">LEDGER OPS</span>
    <div class="ebx-nav"><span class="ebx-navitem on">Invoices</span><span class="ebx-navitem">Clients</span><span class="ebx-navitem">Reports</span><span class="ebx-navitem">Audit</span></div>
    <span class="ebx-user">n.okafor</span>
  </div>
  <div class="ebx-body">
    <div class="ebx-side">
      <div class="ebx-sidehead">Queues</div>
      <div class="ebx-row on"><span class="ebx-rl">Overdue</span><span class="ebx-rv">42</span></div>
      <div class="ebx-row"><span class="ebx-rl">Open</span><span class="ebx-rv">128</span></div>
      <div class="ebx-row"><span class="ebx-rl">Drafts</span><span class="ebx-rv">16</span></div>
      <div class="ebx-row"><span class="ebx-rl">Paid</span><span class="ebx-rv">512</span></div>
    </div>
    <div class="ebx-main">
      <div class="ebx-title">Invoices</div>
      <div class="ebx-stats">
        <div class="ebx-stat"><span class="ebx-sv">42</span><span class="ebx-sk">Overdue</span></div>
        <div class="ebx-stat"><span class="ebx-sv">18,420.00</span><span class="ebx-sk">Balance</span></div>
        <div class="ebx-stat"><span class="ebx-sv">7</span><span class="ebx-sk">Due week</span></div>
      </div>
      <div class="ebx-table">
        <div class="ebx-tr"><span class="ebx-tn">INV-1042</span><span class="ebx-tv">4,210.00</span><span class="ebx-ts">Overdue</span></div>
        <div class="ebx-tr"><span class="ebx-tn">INV-1041</span><span class="ebx-tv">980.50</span><span class="ebx-ts">Open</span></div>
        <div class="ebx-tr"><span class="ebx-tn">INV-1039</span><span class="ebx-tv">2,340.00</span><span class="ebx-ts">Draft</span></div>
      </div>
    </div>
    <div class="ebx-detail">
      <div class="ebx-dhead">INV-1042</div>
      <div class="ebx-meta">Client &middot; Northwind</div>
      <div class="ebx-meta">Due &middot; 12 Oct</div>
      <div class="ebx-meta">Owner &middot; n.okafor</div>
      <div class="ebx-actions">
        <button class="ebx-primary" type="button">Send reminder</button>
        <button class="ebx-ghost" type="button">Void</button>
      </div>
    </div>
  </div>
</div>`,
  css: `.spec--enterprise-b2b .ebx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; background: #ffffff; border: 1px solid #dfe2e6; border-radius: 4px; font-family: "Instrument Sans", sans-serif; color: #1b1e23; }
.spec--enterprise-b2b .ebx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 16px; height: 34px; padding: 0 12px; background: #1b1e23; }
.spec--enterprise-b2b .ebx-mark { font: 600 11px/1 "Instrument Sans", sans-serif; letter-spacing: .08em; color: #ffffff; }
.spec--enterprise-b2b .ebx-nav { display: flex; gap: 2px; }
.spec--enterprise-b2b .ebx-navitem { font: 500 11px/1 "Instrument Sans", sans-serif; padding: 5px 10px; border-radius: 3px; color: #aab2bd; }
.spec--enterprise-b2b .ebx-navitem.on { color: #ffffff; background: #3d444e; }
.spec--enterprise-b2b .ebx-user { margin-left: auto; font: 500 11px/1 "IBM Plex Mono", monospace; color: #c6cad1; }
.spec--enterprise-b2b .ebx-body { flex: 1 1 auto; display: flex; min-height: 0; }
.spec--enterprise-b2b .ebx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; padding: 10px 10px 6px; border-right: 1px solid #dfe2e6; background: #f8f9fa; }
.spec--enterprise-b2b .ebx-sidehead { font: 600 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .1em; color: #6b7280; margin-bottom: 6px; }
.spec--enterprise-b2b .ebx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; height: 30px; padding: 0 8px; border-radius: 3px; }
.spec--enterprise-b2b .ebx-row.on { background: #e8eef5; box-shadow: inset 0 0 0 1px #c6d4e4; }
.spec--enterprise-b2b .ebx-rl { font: 500 12px/1 "Instrument Sans", sans-serif; color: #3d444e; }
.spec--enterprise-b2b .ebx-row.on .ebx-rl { font-weight: 600; color: #1b1e23; }
.spec--enterprise-b2b .ebx-rv { font: 500 11px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6b7280; }
.spec--enterprise-b2b .ebx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 8px; padding: 10px 12px; }
.spec--enterprise-b2b .ebx-title { font: 600 13px/1 "Instrument Sans", sans-serif; color: #1b1e23; }
.spec--enterprise-b2b .ebx-stats { display: flex; gap: 8px; }
.spec--enterprise-b2b .ebx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 6px 8px; border: 1px solid #dfe2e6; border-radius: 4px; background: #fbfcfd; }
.spec--enterprise-b2b .ebx-sv { font: 600 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #1b1e23; }
.spec--enterprise-b2b .ebx-sk { font: 500 10px/1 "Instrument Sans", sans-serif; text-transform: uppercase; letter-spacing: .06em; color: #6b7280; }
.spec--enterprise-b2b .ebx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; border-top: 1px solid #dfe2e6; }
.spec--enterprise-b2b .ebx-tr { display: flex; align-items: center; gap: 10px; height: 30px; padding: 0 2px; border-bottom: 1px solid #eceff2; }
.spec--enterprise-b2b .ebx-tn { flex: 1 1 0; min-width: 0; font: 500 12px/1 "IBM Plex Mono", monospace; color: #1b1e23; }
.spec--enterprise-b2b .ebx-tv { font: 500 12px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #1b1e23; text-align: right; }
.spec--enterprise-b2b .ebx-ts { width: 62px; text-align: right; font: 600 11px/1 "Instrument Sans", sans-serif; color: #1f5f9f; }
.spec--enterprise-b2b .ebx-tr:nth-child(3) .ebx-ts { color: #6b7280; }
.spec--enterprise-b2b .ebx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 10px 12px; border-left: 1px solid #dfe2e6; background: #f8f9fa; }
.spec--enterprise-b2b .ebx-dhead { font: 600 12px/1 "IBM Plex Mono", monospace; letter-spacing: .04em; color: #1b1e23; margin-bottom: 2px; }
.spec--enterprise-b2b .ebx-meta { font: 500 11px/1 "Instrument Sans", sans-serif; color: #3d444e; padding: 5px 8px; border: 1px solid #e3e7eb; border-radius: 3px; background: #ffffff; }
.spec--enterprise-b2b .ebx-actions { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
.spec--enterprise-b2b .ebx-primary { min-height: 30px; border: 1px solid #1b1e23; border-radius: 4px; cursor: pointer; font: 600 11px/1 "Instrument Sans", sans-serif; color: #ffffff; background: #1b1e23; }
.spec--enterprise-b2b .ebx-ghost { min-height: 30px; border: 1px solid #cfd4db; border-radius: 4px; cursor: pointer; font: 600 11px/1 "Instrument Sans", sans-serif; color: #3d444e; background: #ffffff; }`
};

window.COMPLEX["dark-oled"] = {
  html: `<div class="dkx-app">
  <div class="dkx-top">
    <span class="dkx-mark">PULSE</span>
    <div class="dkx-nav"><span class="dkx-navitem on">Overview</span><span class="dkx-navitem">Power</span><span class="dkx-navitem">Devices</span></div>
    <span class="dkx-user">Live</span>
  </div>
  <div class="dkx-body">
  <div class="dkx-side">
    <div class="dkx-sidehead">Panels</div>
    <div class="dkx-row on"><span class="dkx-rl">Battery</span><span class="dkx-rv">82%</span></div>
    <div class="dkx-row"><span class="dkx-rl">Cells</span><span class="dkx-rv">4012</span></div>
    <div class="dkx-row"><span class="dkx-rl">Cycles</span><span class="dkx-rv">214</span></div>
    <div class="dkx-row"><span class="dkx-rl">Health</span><span class="dkx-rv">94%</span></div>
  </div>
  <div class="dkx-main">
    <div class="dkx-title">Power</div>
    <div class="dkx-stats">
    <div class="dkx-stat"><span class="dkx-sv">82%</span><span class="dkx-sk">Charge</span></div>
    <div class="dkx-stat"><span class="dkx-sv">4.1 A</span><span class="dkx-sk">Draw</span></div>
    <div class="dkx-stat"><span class="dkx-sv">31 C</span><span class="dkx-sk">Temp</span></div>
    </div>
    <div class="dkx-table">
    <div class="dkx-tr"><span class="dkx-tn">Cell A</span><span class="dkx-tv">3.92</span><span class="dkx-ts">Stable</span></div>
    <div class="dkx-tr"><span class="dkx-tn">Cell B</span><span class="dkx-tv">3.88</span><span class="dkx-ts">Stable</span></div>
    <div class="dkx-tr"><span class="dkx-tn">Cell C</span><span class="dkx-tv">3.74</span><span class="dkx-ts">Warn</span></div>
    </div>
  </div>
  <div class="dkx-detail">
    <div class="dkx-dhead">Battery</div>
    <div class="dkx-meta">Package &middot; 4-cell</div>
    <div class="dkx-meta">Age &middot; 14 mo</div>
    <div class="dkx-meta">Mode &middot; Balanced</div>
    <div class="dkx-actions">
      <button class="dkx-primary" type="button">Optimise</button>
      <button class="dkx-ghost" type="button">Details</button>
    </div>
  </div>
  </div>
</div>`,
  css: `.spec--dark-oled .dkx-app { width: 100%; min-height: 250px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #2a2d33; border-radius: 12px; background: #000000; font-family: "Instrument Sans", sans-serif; color: #e8eaed; }
.spec--dark-oled .dkx-top { flex: 0 0 auto; display: flex; align-items: center; gap: 12px; height: 40px; padding: 0 14px; border-bottom: 1px solid #2a2d33; background: #0b0c0e; border-radius: 12px 12px 0 0; }
.spec--dark-oled .dkx-mark { font-size: 12px; font-weight: 600; letter-spacing: .1em; color: #e8eaed; }
.spec--dark-oled .dkx-nav { display: flex; gap: 4px; }
.spec--dark-oled .dkx-navitem { font-size: 10px; padding: 5px 10px; border-radius: 8px; color: #a8adb6; }
.spec--dark-oled .dkx-navitem.on { color: #e8eaed; background: #1b1e23; border: 1px solid #2a2d33; }
.spec--dark-oled .dkx-user { margin-left: auto; font: 500 10px/1 "IBM Plex Mono", monospace; letter-spacing: .1em; text-transform: uppercase; color: #6fbdb4; padding: 4px 9px; border: 1px solid #2f4a48; border-radius: 999px; }
.spec--dark-oled .dkx-body { flex: 1 1 auto; display: flex; min-height: 0; gap: 10px; padding: 10px; }
.spec--dark-oled .dkx-side { flex: 1 1 22%; min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 10px; background: #0b0c0e; border: 1px solid #2a2d33; border-radius: 10px; }
.spec--dark-oled .dkx-sidehead { font-size: 9px; letter-spacing: .12em; text-transform: uppercase; color: #7f858e; margin-bottom: 4px; }
.spec--dark-oled .dkx-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 6px 8px; border-radius: 7px; }
.spec--dark-oled .dkx-row.on { background: #1b1e23; border: 1px solid #2a2d33; }
.spec--dark-oled .dkx-rl { font-size: 10px; color: #a8adb6; }
.spec--dark-oled .dkx-row.on .dkx-rl { color: #e8eaed; font-weight: 500; }
.spec--dark-oled .dkx-rv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #6fbdb4; }
.spec--dark-oled .dkx-main { flex: 1 1 48%; min-width: 0; display: flex; flex-direction: column; gap: 9px; padding: 10px; background: #0b0c0e; border: 1px solid #2a2d33; border-radius: 10px; }
.spec--dark-oled .dkx-title { font-size: 12px; font-weight: 600; color: #e8eaed; }
.spec--dark-oled .dkx-stats { display: flex; gap: 8px; }
.spec--dark-oled .dkx-stat { flex: 1 1 0; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding: 8px 9px; background: #121316; border: 1px solid #2a2d33; border-radius: 8px; }
.spec--dark-oled .dkx-sv { font: 600 13px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #e8eaed; }
.spec--dark-oled .dkx-sk { font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: #7f858e; }
.spec--dark-oled .dkx-table { flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column; }
.spec--dark-oled .dkx-tr { display: flex; align-items: center; gap: 8px; padding: 6px 2px; border-top: 1px solid #23262b; }
.spec--dark-oled .dkx-tn { flex: 1 1 0; min-width: 0; font-size: 10px; color: #a8adb6; }
.spec--dark-oled .dkx-tv { font: 500 10px/1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; color: #e8eaed; }
.spec--dark-oled .dkx-ts { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: #6fbdb4; }
.spec--dark-oled .dkx-detail { flex: 1 1 30%; min-width: 0; display: flex; flex-direction: column; gap: 6px; padding: 10px; background: #0b0c0e; border: 1px solid #2a2d33; border-radius: 10px; }
.spec--dark-oled .dkx-dhead { font-size: 9px; letter-spacing: .12em; text-transform: uppercase; color: #7f858e; margin-bottom: 4px; }
.spec--dark-oled .dkx-meta { font-size: 10px; color: #a8adb6; padding: 6px 8px; background: #121316; border: 1px solid #23262b; border-radius: 8px; }
.spec--dark-oled .dkx-actions { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
.spec--dark-oled .dkx-primary { padding: 9px 10px; cursor: pointer; border: 1px solid #e8eaed; border-radius: 8px; background: #e8eaed; font: 600 11px/1 "Instrument Sans", sans-serif; color: #0b0c0e; }
.spec--dark-oled .dkx-ghost { padding: 9px 10px; cursor: pointer; border: 1px solid #3a3f47; border-radius: 8px; background: transparent; font: 500 11px/1 "Instrument Sans", sans-serif; color: #e8eaed; }`
};
