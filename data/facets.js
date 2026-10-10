/* Facets: the axes and the recurring techniques, replacing the old four buckets.
   This file is the classification layer for the catalog.

   - `columns` is the controlled vocabulary. Every tag used in `styles` must exist here.
     Order is the matrix column order, grouped: material, form, type, colour, behaviour.
   - `styles[id]` gives that entry:
       v  — 0–100 on the horizontal axis: restrained (0) -> loud (100)
       d  — 0–100 on the vertical axis:  flat (0)      -> dimensional (100)
       t  — tags from `columns`. 2 = the trait the style is actually made of
            (its signature), 1 = present and supporting it.
   Positions and tags are read from the traits each entry already declares, in
   data/foundations.js, data/surfaces.js, data/expressive.js and data/patterns.js.
   Editing an entry's traits should be followed by re-reading its row here. */

window.FACETS = {

  columns: [
    { id: "flat",        label: "Flat",        group: "Material",  note: "No depth model at all: solid fills, hierarchy from size and weight." },
    { id: "hairline",    label: "Hairline",    group: "Material",  note: "1px rules and borders instead of boxes, fills or shadows." },
    { id: "hard-shadow", label: "Hard shadow", group: "Material",  note: "Zero-blur offset shadow — the element is a printed sticker." },
    { id: "soft-shadow", label: "Soft shadow", group: "Material",  note: "Paired or inset light and dark shadows modelling real thickness." },
    { id: "blur-glass",  label: "Blur glass",  group: "Material",  note: "Backdrop blur and saturation: translucency is the material." },
    { id: "glow",        label: "Glow",        group: "Material",  note: "Emitted light — bloom, neon, same-hue blurred shadows." },
    { id: "gradient",    label: "Gradient",    group: "Material",  note: "A gradient is the surface itself, not a decoration on it." },
    { id: "texture",     label: "Texture",     group: "Material",  note: "Grain, scanlines, halftone or an all-over pattern." },
    { id: "imagery",     label: "Imagery",     group: "Material",  note: "Photography or full-bleed media carries the page." },
    { id: "illustration", label: "Illustration", group: "Material", note: "Drawn vector art — flat figures, blobs or sprites — is the material, not a photo." },

    { id: "hard-border", label: "Hard border", group: "Form",      note: "2px+ solid strokes on every element, inputs included." },
    { id: "square",      label: "Square",      group: "Form",      note: "Radius 0: sharp corners, or corners deliberately clipped." },
    { id: "round",       label: "Round",       group: "Form",      note: "Generous radii, 16px through to a full pill." },
    { id: "spatial",     label: "Spatial",     group: "Form",      note: "A real z-axis: stacked planes or tilt, not a painted shadow." },
    { id: "density",     label: "Density",     group: "Form",      note: "Tight rhythm and small type: many elements per screen, single-digit padding, the air removed." },

    { id: "mono",        label: "Mono",        group: "Type",      note: "Monospace type, usually with tabular numerals." },
    { id: "display",     label: "Display",     group: "Type",      note: "Oversized, serif, or otherwise expressive typography." },

    { id: "monochrome",  label: "Monochrome",  group: "Colour",    note: "One hue, or one accent held against a neutral ground." },
    { id: "loud-color",  label: "Loud colour", group: "Colour",    note: "Clashing, saturated or multi-hue colour is the point." },
    { id: "dark-ground", label: "Dark ground", group: "Colour",    note: "Built dark-first, rather than a light theme inverted." },

    { id: "motion",      label: "Motion",      group: "Behaviour", note: "Motion is the idea, not a nicety: transitions carry meaning." },
    { id: "reveal",      label: "Reveal",      group: "Behaviour", note: "Depth on demand: disclosure, drawers, drill-down." },
    { id: "data",        label: "Data",        group: "Behaviour", note: "Tables, charts, high information density." },
    { id: "ambient",     label: "Ambient",     group: "Behaviour", note: "The interface leaves the screen: the system acts and reports." }
  ],

  /* What each entry is, as opposed to what it is made of. A style is a look;
     a pattern is the shape of a screen or an interaction, and is visually
     neutral — it can be built in any register; a practice is a discipline or a
     policy that says how to work, and several of them deliberately have no look
     of their own. Kind is one per entry, because a thing is one kind of thing;
     the columns above stay non-exclusive, because a thing is made of many
     things at once. Borderline calls, with the reason, are in the README. */
  kinds: [
    { id: "style",    label: "Styles",    one: "Style",    note: "A look: how surfaces, type and colour read." },
    { id: "pattern",  label: "Patterns",  one: "Pattern",  note: "A screen or interaction structure, visually neutral — its shape, not its register." },
    { id: "practice", label: "Practices", one: "Practice", note: "A discipline or policy that says how to work. Most have no look of their own." }
  ],

  styles: {
    "accessibility-first": { k: "practice", v: 10, d: 10, t: { hairline: 1, "hard-border": 1, flat: 1 } },
    "agentic-adaptive":    { k: "practice", v: 25, d: 35, t: { reveal: 2, ambient: 1, hairline: 1 } },
    "aurora-mesh":         { k: "style", v: 45, d: 45, t: { gradient: 2, hairline: 1, flat: 1, "dark-ground": 1 } },
    "bento-grid":          { k: "pattern", v: 35, d: 40, t: { round: 2, hairline: 1, data: 1, flat: 1 } },
    "brutalist-web":       { k: "style", v: 85, d: 5,  t: { flat: 2, "hard-border": 2, square: 1, display: 1, data: 1 } },
    "card-ui":             { k: "pattern", v: 30, d: 45, t: { hairline: 2, round: 2, flat: 1, "soft-shadow": 1 } },
    "claymorphism":        { k: "style", v: 60, d: 85, t: { "soft-shadow": 2, round: 2, "loud-color": 1 } },
    "comic-popart":        { k: "style", v: 95, d: 20, t: { "hard-border": 2, "hard-shadow": 2, texture: 2, "loud-color": 2, flat: 2, display: 1 } },
    "conversational":      { k: "pattern", v: 25, d: 25, t: { round: 2, flat: 1, motion: 1 } },
    "cyberpunk-hud":       { k: "style", v: 90, d: 45, t: { mono: 2, glow: 2, "dark-ground": 2, data: 2, "loud-color": 1, square: 1 } },
    "dark-oled":           { k: "style", v: 30, d: 20, t: { "dark-ground": 2, flat: 2, hairline: 1, monochrome: 1 } },
    "data-dashboard":      { k: "pattern", v: 35, d: 25, t: { data: 2, "dark-ground": 2, hairline: 2, mono: 1 } },
    "editorial":           { k: "style", v: 35, d: 15, t: { display: 2, hairline: 1, imagery: 1 } },
    "empty-state":         { k: "pattern", v: 15, d: 20, t: { flat: 1, round: 1 } },
    "enterprise-b2b":      { k: "style", v: 15, d: 15, t: { data: 2, hairline: 2, square: 1, reveal: 1 } },
    "flat-design":         { k: "style", v: 55, d: 0,  t: { flat: 2, square: 1, "loud-color": 1 } },
    "gamified":            { k: "pattern", v: 70, d: 45, t: { motion: 2, round: 1 } },
    "glassmorphism":       { k: "style", v: 60, d: 85, t: { "blur-glass": 2, round: 2, imagery: 1, spatial: 1 } },
    "kinetic-typography":  { k: "style", v: 85, d: 25, t: { display: 2, motion: 2, imagery: 1 } },
    "liquid-glass":        { k: "style", v: 60, d: 90, t: { "blur-glass": 2, round: 2, glow: 1, spatial: 1, imagery: 1, "soft-shadow": 1 } },
    "luxury-premium":      { k: "style", v: 40, d: 30, t: { "dark-ground": 2, display: 2, hairline: 2, monochrome: 2, imagery: 1 } },
    "material-2":          { k: "style", v: 45, d: 75, t: { "soft-shadow": 2, round: 1, motion: 1 } },
    "material-you":        { k: "style", v: 50, d: 30, t: { round: 2, flat: 2, "loud-color": 1 } },
    "maximalism":          { k: "style", v: 95, d: 60, t: { "loud-color": 2, data: 2, display: 1, spatial: 1, imagery: 1, "hard-border": 1 } },
    "memphis":             { k: "style", v: 95, d: 25, t: { "loud-color": 2, "hard-border": 2, texture: 2, "hard-shadow": 1, display: 1 } },
    "minimalism":          { k: "style", v: 10, d: 5,  t: { flat: 2, hairline: 2, monochrome: 2 } },
    "motion-micro":        { k: "practice", v: 35, d: 35, t: { motion: 2, flat: 1, round: 1 } },
    "neo-brutalism":       { k: "style", v: 90, d: 30, t: { "hard-shadow": 2, "hard-border": 2, "loud-color": 2, square: 2, flat: 1, display: 1 } },
    "neumorphism":         { k: "style", v: 25, d: 75, t: { "soft-shadow": 2, round: 2, monochrome: 2, flat: 1 } },
    "nordic":              { k: "style", v: 20, d: 25, t: { flat: 2, imagery: 2, monochrome: 1, hairline: 1 } },
    "organic-handdrawn":   { k: "style", v: 40, d: 40, t: { texture: 2, round: 1, "soft-shadow": 1, display: 1, imagery: 1 } },
    "playful-chunky":      { k: "style", v: 80, d: 60, t: { round: 2, "hard-shadow": 2, "loud-color": 2, motion: 2 } },
    "progressive-disclosure": { k: "practice", v: 10, d: 25, t: { reveal: 2, hairline: 2, flat: 1 } },
    "retro-futurism":      { k: "style", v: 65, d: 70, t: { glow: 2, data: 1, "hard-border": 1, round: 1, texture: 1 } },
    "skeleton-loading":    { k: "pattern", v: 20, d: 20, t: { motion: 2, flat: 2, round: 1, hairline: 1 } },
    "skeuomorphism":       { k: "style", v: 65, d: 95, t: { "soft-shadow": 2, gradient: 2, texture: 1, imagery: 1, "hard-border": 1, glow: 1 } },
    "spatial-vision":      { k: "style", v: 55, d: 95, t: { spatial: 2, "blur-glass": 2, round: 2, imagery: 1, "soft-shadow": 1 } },
    "swiss":               { k: "style", v: 45, d: 5,  t: { flat: 2, hairline: 2, display: 2, imagery: 1, monochrome: 1 } },
    "terminal-cli":        { k: "style", v: 25, d: 5,  t: { mono: 2, flat: 2, square: 1, "hard-border": 1, data: 1, "dark-ground": 1 } },
    "token-system":        { k: "practice", v: 15, d: 20, t: { flat: 2, hairline: 1, round: 1, mono: 1 } },
    "vaporwave":           { k: "style", v: 100, d: 60, t: { glow: 2, gradient: 2, texture: 2, "loud-color": 2, "dark-ground": 2, display: 1 } },
    "y2k-frutiger":        { k: "style", v: 85, d: 85, t: { gradient: 2, "blur-glass": 1, round: 1, glow: 1, imagery: 1, "loud-color": 1 } },
    "fluent-design":       { k: "style", v: 40, d: 70, t: { "blur-glass": 2, "soft-shadow": 1, spatial: 1, motion: 1, round: 1, hairline: 1 } },
    "holographic":         { k: "style", v: 85, d: 80, t: { gradient: 2, glow: 2, "loud-color": 2, display: 1, texture: 1 } },
    "isometric":           { k: "style", v: 55, d: 70, t: { spatial: 2, gradient: 1, "soft-shadow": 1, round: 1 } },
    "render-3d":           { k: "style", v: 75, d: 90, t: { imagery: 2, "soft-shadow": 2, gradient: 1, round: 1 } },
    "zero-ui":             { k: "practice", v: 20, d: 10, t: { ambient: 2, flat: 1 } },

    "anti-design":         { k: "style", v: 95, d: 35, t: { "loud-color": 2, display: 2, texture: 2, flat: 1, "hard-border": 1, "hard-shadow": 1 } },
    "art-deco":            { k: "style", v: 55, d: 35, t: { display: 2, monochrome: 2, gradient: 1, square: 1, texture: 1, "hard-border": 1 } },
    "corporate-memphis":   { k: "style", v: 60, d: 30, t: { illustration: 2, flat: 2, round: 1, "loud-color": 1, gradient: 1 } },
    "grunge":              { k: "style", v: 70, d: 25, t: { texture: 2, display: 2, "dark-ground": 1, mono: 1, imagery: 1, flat: 1 } },
    "ios-human-interface": { k: "style", v: 35, d: 35, t: { round: 2, "blur-glass": 1, hairline: 1, motion: 1, flat: 1 } },
    "japanese-web":        { k: "style", v: 70, d: 40, t: { data: 2, density: 2, "loud-color": 2, hairline: 1, texture: 1, display: 1, imagery: 1 } },
    "pixel-art":           { k: "style", v: 75, d: 20, t: { texture: 2, square: 2, mono: 1, "loud-color": 1, flat: 1 } },

    "command-palette":     { k: "pattern", v: 25, d: 50, t: { reveal: 2, "blur-glass": 1, mono: 1, hairline: 1, motion: 1, round: 1 } },
    "feed-timeline":       { k: "pattern", v: 30, d: 25, t: { hairline: 1, imagery: 1, motion: 1, flat: 1, reveal: 1, data: 1 } },
    "form-validation":     { k: "pattern", v: 16, d: 24, t: { hairline: 2, reveal: 1, flat: 1, round: 1 } },
    "hero-landing":        { k: "pattern", v: 50, d: 40, t: { display: 1, imagery: 1, flat: 1, round: 1, motion: 1 } },
    "navigation-shell":    { k: "pattern", v: 25, d: 25, t: { hairline: 1, flat: 1, round: 1, reveal: 1, mono: 1 } },
    "onboarding-wizard":   { k: "pattern", v: 22, d: 18, t: { reveal: 2, round: 1, flat: 1, hairline: 1, motion: 1 } },
    "overlay-layer":       { k: "pattern", v: 35, d: 55, t: { spatial: 1, "soft-shadow": 1, "blur-glass": 1, reveal: 1, round: 1, motion: 1 } },

    "content-design":      { k: "practice", v: 14, d: 12, t: { flat: 1 } },
    "dark-patterns":       { k: "practice", v: 40, d: 30, t: { reveal: 2, motion: 1, "loud-color": 1 } },
    "design-system":       { k: "practice", v: 22, d: 25, t: { flat: 1, round: 1, hairline: 1 } },
    "error-resilience":    { k: "practice", v: 20, d: 30, t: { reveal: 1, hairline: 1, flat: 1 } },
    "localization-rtl":    { k: "practice", v: 12, d: 22, t: { flat: 1, hairline: 1 } },
    "performance-first":   { k: "practice", v: 25, d: 12, t: { motion: 1, data: 1, flat: 1 } },
    "research-driven":     { k: "practice", v: 30, d: 18, t: { data: 1, flat: 1 } },
    "responsive-mobile-first": { k: "practice", v: 20, d: 12, t: { flat: 1, hairline: 1, reveal: 1, density: 1 } },

    "attention-first":        { k: "practice", v: 84, d: 42, t: { motion: 2, imagery: 2, "dark-ground": 1, round: 1, "loud-color": 1 } },
    "brand-expression-first": { k: "practice", v: 76, d: 28, t: { "loud-color": 2, display: 2, imagery: 1, gradient: 1 } },
    "cinematic-media-first":  { k: "practice", v: 58, d: 52, t: { imagery: 2, "dark-ground": 2, display: 1, motion: 1, gradient: 1 } },
    "conversion-optimised":   { k: "practice", v: 82, d: 14, t: { "loud-color": 2, display: 1, "hard-shadow": 1, motion: 1, data: 1 } },
    "elevation-hierarchy":    { k: "practice", v: 24, d: 58, t: { "soft-shadow": 2, spatial: 2, hairline: 1, round: 1, flat: 1 } },
    "immersive-3d-first":     { k: "practice", v: 80, d: 76, t: { spatial: 2, imagery: 2, glow: 1, "dark-ground": 1, motion: 1 } },
    "joy-first":              { k: "practice", v: 72, d: 36, t: { round: 2, motion: 2, illustration: 2, "loud-color": 1, "hard-shadow": 1 } },
    "scroll-narrative":       { k: "practice", v: 66, d: 62, t: { motion: 2, spatial: 2, imagery: 2, display: 1, reveal: 1 } },
    "sound-haptics":          { k: "practice", v: 55, d: 66, t: { motion: 2, ambient: 2, glow: 1, round: 1 } },
    "spatial-interaction":    { k: "practice", v: 30, d: 80, t: { ambient: 2, spatial: 2, "blur-glass": 1, round: 1, glow: 1 } }
  }

};
