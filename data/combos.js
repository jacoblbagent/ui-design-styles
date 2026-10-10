/* Combos: three entries that work together — one style, one pattern, one
   practice — with one line saying why the three hold up as a set.

   The three names each open their own entry, so a combo never has to explain
   what its members are; the line only carries the reason the three belong
   together. A combo is not a category: it claims nothing about the rest of the
   catalog, and the atlas and the matrix remain the only classification.

   Every id below must exist in the catalog and carry the kind its slot names,
   which is what tools/verify.js checks (nothing is drawn for a combo whose
   members do not resolve). */
window.COMBOS = [

  {
    id: "swiss-landing",
    style: "swiss",
    pattern: "hero-landing",
    practice: "content-design",
    why: "A landing page with the grid doing the ornament and the copy doing the selling; nothing else is needed."
  },
  {
    id: "brutal-states",
    style: "neo-brutalism",
    pattern: "card-ui",
    practice: "error-resilience",
    why: "Hard borders and sticker shadows make states unmistakable, which is exactly what an error or empty card has to be."
  },
  {
    id: "glass-overlay",
    style: "glassmorphism",
    pattern: "overlay-layer",
    practice: "motion-micro",
    why: "Blur reads as glass only when content sits behind it, so the pane belongs in an overlay — and it should arrive in about 200ms."
  },
  {
    id: "terminal-palette",
    style: "terminal-cli",
    pattern: "command-palette",
    practice: "performance-first",
    why: "Monospace and a keyboard palette are cheap to paint; the practice keeps the interface text-only, so it is legible before the page has finished loading."
  },
  {
    id: "material-shell",
    style: "material-2",
    pattern: "navigation-shell",
    practice: "elevation-hierarchy",
    why: "In Material, depth is the hierarchy, so the shell, its menus and its dialogs each take one step up a fixed scale."
  },
  {
    id: "fluent-bento",
    style: "fluent-design",
    pattern: "bento-grid",
    practice: "design-system",
    why: "A bento tray is a design system in miniature: one radius, one gutter, one blur, repeated."
  },
  {
    id: "hud-telemetry",
    style: "cyberpunk-hud",
    pattern: "data-dashboard",
    practice: "progressive-disclosure",
    why: "Neon on near-black is the HUD tradition for dense telemetry; disclosure keeps the second layer of numbers off the first screen."
  },
  {
    id: "minimal-empty",
    style: "minimalism",
    pattern: "empty-state",
    practice: "research-driven",
    why: "With nothing to decorate, the empty state's single sentence is the design — which is why it is the screen worth testing first."
  },
  {
    id: "depth-panes",
    style: "spatial-vision",
    pattern: "overlay-layer",
    practice: "spatial-interaction",
    why: "Depth UI is panes floating over content, and the practice supplies what the look cannot: comfort rules for reaching them."
  },
  {
    id: "isometric-wizard",
    style: "isometric",
    pattern: "onboarding-wizard",
    practice: "motion-micro",
    why: "An isometric scene turns each step of a wizard into a place rather than a page, and one authored movement marks the transition."
  },
  {
    id: "drawn-forms",
    style: "organic-handdrawn",
    pattern: "form-validation",
    practice: "accessibility-first",
    why: "Warmth works best on the screens people dread: hand-drawn forms and errors, with contrast, labels and focus still measured."
  },
  {
    id: "oled-feed",
    style: "dark-oled",
    pattern: "feed-timeline",
    practice: "attention-first",
    why: "A media feed on true black: the only light on screen is the content, and the hook sits inside the first frame."
  },
  {
    id: "render-hero",
    style: "render-3d",
    pattern: "hero-landing",
    practice: "conversion-optimised",
    why: "One rendered hero explains what a paragraph would, which leaves a single button to press."
  },
  {
    id: "y2k-brand",
    style: "y2k-frutiger",
    pattern: "hero-landing",
    practice: "brand-expression-first",
    why: "The era's gloss only works when the brand commits to it everywhere, gradient and all."
  },
  {
    id: "memphis-reward",
    style: "memphis",
    pattern: "gamified",
    practice: "joy-first",
    why: "If progress is meant to feel like a reward, the reward is allowed to be loud."
  },
  {
    id: "pixel-arcade",
    style: "pixel-art",
    pattern: "gamified",
    practice: "sound-haptics",
    why: "A game interface answers every press with a chip and a blip; the two extra channels are the genre's contract."
  },
  {
    id: "luxury-stills",
    style: "luxury-premium",
    pattern: "card-ui",
    practice: "cinematic-media-first",
    why: "Serif restraint and product cards shot like stills: luxury is a pacing decision before it is a palette."
  },
  {
    id: "hig-thumb",
    style: "ios-human-interface",
    pattern: "navigation-shell",
    practice: "responsive-mobile-first",
    why: "Thumb-first navigation is the whole point of the HIG, and the shell is where it is spent."
  },
  {
    id: "vaporwave-scroll",
    style: "vaporwave",
    pattern: "hero-landing",
    practice: "scroll-narrative",
    why: "A sunset palette and a scroll-driven story make the same argument: keep going."
  },
  {
    id: "brutal-forms",
    style: "brutalist-web",
    pattern: "form-validation",
    practice: "accessibility-first",
    why: "Hard borders and square inputs are already focus-ring friendly; brutalism only fails when it skips the labels."
  }

];