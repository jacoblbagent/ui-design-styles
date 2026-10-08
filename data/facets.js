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

    { id: "hard-border", label: "Hard border", group: "Form",      note: "2px+ solid strokes on every element, inputs included." },
    { id: "square",      label: "Square",      group: "Form",      note: "Radius 0: sharp corners, or corners deliberately clipped." },
    { id: "round",       label: "Round",       group: "Form",      note: "Generous radii, 16px through to a full pill." },
    { id: "spatial",     label: "Spatial",     group: "Form",      note: "A real z-axis: stacked planes or tilt, not a painted shadow." },

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

  styles: {
    "accessibility-first": { v: 10, d: 10, t: { hairline: 1, "hard-border": 1, flat: 1 } },
    "agentic-adaptive":    { v: 25, d: 35, t: { reveal: 2, ambient: 1, hairline: 1 } },
    "aurora-mesh":         { v: 45, d: 45, t: { gradient: 2, hairline: 1, flat: 1, "dark-ground": 1 } },
    "bento-grid":          { v: 35, d: 40, t: { round: 2, hairline: 1, data: 1, flat: 1 } },
    "brutalist-web":       { v: 85, d: 5,  t: { flat: 2, "hard-border": 2, square: 1, display: 1, data: 1 } },
    "card-ui":             { v: 30, d: 45, t: { hairline: 2, round: 2, flat: 1, "soft-shadow": 1 } },
    "claymorphism":        { v: 60, d: 85, t: { "soft-shadow": 2, round: 2, "loud-color": 1 } },
    "comic-popart":        { v: 95, d: 20, t: { "hard-border": 2, "hard-shadow": 2, texture: 2, "loud-color": 2, flat: 2, display: 1 } },
    "conversational":      { v: 25, d: 25, t: { round: 2, flat: 1, motion: 1 } },
    "cyberpunk-hud":       { v: 90, d: 45, t: { mono: 2, glow: 2, "dark-ground": 2, data: 2, "loud-color": 1, square: 1 } },
    "dark-oled":           { v: 30, d: 20, t: { "dark-ground": 2, flat: 2, hairline: 1, monochrome: 1 } },
    "data-dashboard":      { v: 35, d: 25, t: { data: 2, "dark-ground": 2, hairline: 2, mono: 1 } },
    "editorial":           { v: 35, d: 15, t: { display: 2, hairline: 1, imagery: 1 } },
    "empty-state":         { v: 15, d: 20, t: { flat: 1, round: 1 } },
    "enterprise-b2b":      { v: 15, d: 15, t: { data: 2, hairline: 2, square: 1, reveal: 1 } },
    "flat-design":         { v: 55, d: 0,  t: { flat: 2, square: 1, "loud-color": 1 } },
    "gamified":            { v: 70, d: 45, t: { motion: 2, round: 1 } },
    "glassmorphism":       { v: 60, d: 85, t: { "blur-glass": 2, round: 2, imagery: 1, spatial: 1 } },
    "kinetic-typography":  { v: 85, d: 25, t: { display: 2, motion: 2, imagery: 1 } },
    "liquid-glass":        { v: 60, d: 90, t: { "blur-glass": 2, round: 2, glow: 1, spatial: 1, imagery: 1, "soft-shadow": 1 } },
    "luxury-premium":      { v: 40, d: 30, t: { "dark-ground": 2, display: 2, hairline: 2, monochrome: 2, imagery: 1 } },
    "material-2":          { v: 45, d: 75, t: { "soft-shadow": 2, round: 1, motion: 1 } },
    "material-you":        { v: 50, d: 30, t: { round: 2, flat: 2, "loud-color": 1 } },
    "maximalism":          { v: 95, d: 60, t: { "loud-color": 2, data: 2, display: 1, spatial: 1, imagery: 1, "hard-border": 1 } },
    "memphis":             { v: 95, d: 25, t: { "loud-color": 2, "hard-border": 2, texture: 2, "hard-shadow": 1, display: 1 } },
    "minimalism":          { v: 10, d: 5,  t: { flat: 2, hairline: 2, monochrome: 2 } },
    "motion-micro":        { v: 35, d: 35, t: { motion: 2, flat: 1, round: 1 } },
    "neo-brutalism":       { v: 90, d: 30, t: { "hard-shadow": 2, "hard-border": 2, "loud-color": 2, square: 2, flat: 1, display: 1 } },
    "neumorphism":         { v: 25, d: 75, t: { "soft-shadow": 2, round: 2, monochrome: 2, flat: 1 } },
    "nordic":              { v: 20, d: 25, t: { flat: 2, imagery: 2, monochrome: 1, hairline: 1 } },
    "organic-handdrawn":   { v: 40, d: 40, t: { texture: 2, round: 1, "soft-shadow": 1, display: 1, imagery: 1 } },
    "playful-chunky":      { v: 80, d: 60, t: { round: 2, "hard-shadow": 2, "loud-color": 2, motion: 2 } },
    "progressive-disclosure": { v: 10, d: 25, t: { reveal: 2, hairline: 2, flat: 1 } },
    "retro-futurism":      { v: 65, d: 70, t: { glow: 2, data: 1, "hard-border": 1, round: 1, texture: 1 } },
    "skeleton-loading":    { v: 20, d: 20, t: { motion: 2, flat: 2, round: 1, hairline: 1 } },
    "skeuomorphism":       { v: 65, d: 95, t: { "soft-shadow": 2, gradient: 2, texture: 1, imagery: 1, "hard-border": 1, glow: 1 } },
    "spatial-vision":      { v: 55, d: 95, t: { spatial: 2, "blur-glass": 2, round: 2, imagery: 1, "soft-shadow": 1 } },
    "swiss":               { v: 45, d: 5,  t: { flat: 2, hairline: 2, display: 2, imagery: 1, monochrome: 1 } },
    "terminal-cli":        { v: 25, d: 5,  t: { mono: 2, flat: 2, square: 1, "hard-border": 1, data: 1, "dark-ground": 1 } },
    "token-system":        { v: 15, d: 20, t: { flat: 2, hairline: 1, round: 1, mono: 1 } },
    "vaporwave":           { v: 100, d: 60, t: { glow: 2, gradient: 2, texture: 2, "loud-color": 2, "dark-ground": 2, display: 1 } },
    "y2k-frutiger":        { v: 85, d: 85, t: { gradient: 2, "blur-glass": 1, round: 1, glow: 1, imagery: 1, "loud-color": 1 } },
    "zero-ui":             { v: 20, d: 10, t: { ambient: 2, flat: 1 } }
  }

};
