/* Real-world examples: names, links and observations from the live pages.
   Screenshots in images/examples/ are captured by tools/capture.js. */
window.GALLERY = {
  "capturedAt": "2026-10-10",
  "sites": [
    {
      "id": "aesop",
      "name": "Aesop",
      "url": "https://www.aesop.com/",
      "domain": "aesop.com",
      "tags": [
        "editorial",
        "minimalism",
        "luxury-premium"
      ],
      "look": [
        "Serif headline over full-bleed product photography; the image does the arguing.",
        "Warm neutral ground with the only colour coming from the product itself.",
        "Thin, wide-tracked nav labels — no icon competes with the photography.",
        "A single outlined CTA under the hero line, nothing filled."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "ant-design",
      "name": "Ant Design",
      "url": "https://ant.design/",
      "domain": "ant.design",
      "tags": [
        "enterprise-b2b",
        "design-system",
        "skeleton-loading"
      ],
      "look": [
        "A pale gradient hero with one black headline, a filled blue CTA beside a ghost one.",
        "Placeholder skeleton bars used as the hero illustration — the loading state as the artwork.",
        "A hairline row of logos as the only proof, sitting directly under the buttons."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "anthropic",
      "name": "Anthropic",
      "url": "https://www.anthropic.com/",
      "domain": "anthropic.com",
      "tags": [
        "editorial",
        "minimalism"
      ],
      "look": [
        "Serif display headline at a wide measure with a short deck beside it.",
        "Near-monochrome warm ground; product names set in a calm serif rather than a UI face.",
        "Hairlines and spacing instead of cards or elevation."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors an allow-list"
    },
    {
      "id": "apple",
      "name": "Apple",
      "url": "https://www.apple.com/",
      "domain": "apple.com",
      "tags": [
        "dark-oled",
        "minimalism"
      ],
      "look": [
        "Full-bleed dark hero with the product floating in it and one line of copy.",
        "Type sized per section, never competing across the fold; buy actions stay small and bright.",
        "Product imagery locked to a fixed aspect ratio so the page never reflows."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "apple-vision-pro",
      "name": "Apple — Vision Pro",
      "url": "https://www.apple.com/apple-vision-pro/",
      "domain": "apple.com/apple-vision-pro",
      "tags": [
        "spatial-vision",
        "bento-grid"
      ],
      "look": [
        "Human-scale imagery over spec copy: who and where, not just the chip.",
        "Tiles at mixed spans, each answering one question (fit, display, audio).",
        "Type sizes stepped by tile span rather than by section."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "arc",
      "name": "Arc",
      "url": "https://arc.net/",
      "domain": "arc.net",
      "tags": [
        "aurora-mesh",
        "playful-chunky"
      ],
      "look": [
        "Wide bands of gradient with a scalloped edge, wrapping a pale panel in the middle.",
        "One black pill on the pale panel is the only filled control on the page.",
        "The browser window is the product shot, with the assistant's prompt printed inside it."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "are-na",
      "name": "Are.na",
      "url": "https://www.are.na/",
      "domain": "are.na",
      "tags": [
        "minimalism",
        "editorial"
      ],
      "look": [
        "A text-first interface: the home page is a numbered list of statements, not a hero.",
        "Mono labels at label size, one blue accent for every link.",
        "Blocks laid out as a quiet grid where the media is the only weight."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "awwwards",
      "name": "Awwwards",
      "url": "https://www.awwwards.com/",
      "domain": "awwwards.com",
      "tags": [
        "dark-oled",
        "card-ui"
      ],
      "look": [
        "Dark hero with a single oversized project title and the jury vote beside it.",
        "Every entry is a card whose media is the whole card; captions sit outside.",
        "Section labels in small mono caps, not uppercase-italic decoration."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "bandcamp",
      "name": "Bandcamp",
      "url": "https://bandcamp.com/",
      "domain": "bandcamp.com",
      "tags": [
        "editorial",
        "card-ui",
        "dark-oled"
      ],
      "look": [
        "Editorial copy with the key figures set in bold boxes, over a charcoal ground.",
        "A live strip of covers, each with its price and a relative timestamp underneath.",
        "A daily editorial section given its own band below the commerce strip."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "bang-olufsen",
      "name": "Bang & Olufsen",
      "url": "https://www.bang-olufsen.com/",
      "domain": "bang-olufsen.com",
      "tags": [
        "luxury-premium",
        "minimalism"
      ],
      "look": [
        "Edge-to-edge photography, one line of copy, one outlined CTA.",
        "Nav reduced to a hamburger and thin tracked type so nothing frames the image.",
        "Aspect-locked media, no borders, no shadows anywhere."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "berkshire-hathaway",
      "name": "Berkshire Hathaway",
      "url": "https://www.berkshirehathaway.com/",
      "domain": "berkshirehathaway.com",
      "tags": [
        "brutalist-web"
      ],
      "look": [
        "No stylesheet at all: browser serif, browser link colours, browser bullets.",
        "Two columns of links under a press-release stub — hierarchy from heading tags only.",
        "The canonical proof that an unstyled page can outperform a designed one."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "brutalist-websites",
      "name": "Brutalist Websites",
      "url": "https://brutalistwebsites.com/",
      "domain": "brutalistwebsites.com",
      "tags": [
        "brutalist-web",
        "card-ui"
      ],
      "look": [
        "Each entry is a black-framed screenshot typed in that site's own face.",
        "The index itself obeys the style it indexes: loud type, hard edges, no softness.",
        "Media is a plain screenshot; the label carries the whole credit line."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "bun-sh",
      "name": "Bun",
      "url": "https://bun.sh/",
      "domain": "bun.sh",
      "tags": [
        "terminal-cli",
        "dark-oled"
      ],
      "look": [
        "The install command is the hero, with a real OS switcher under it.",
        "Benchmarks printed as an actual table with tabular numerals, not as flourish bars.",
        "Dark ground with one lime accent reserved for the primary action."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "camerons-world",
      "name": "Cameron's World",
      "url": "https://www.cameronsworld.net/",
      "domain": "cameronsworld.net",
      "tags": [
        "maximalism",
        "y2k-frutiger"
      ],
      "look": [
        "Every surviving GIF from the 90s web tiled as the background — no grid, no restraint.",
        "Animated sprite links as the only navigation.",
        "A love letter presented as a dense collage rather than a gallery."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "cargo",
      "name": "Cargo",
      "url": "https://cargo.site/",
      "domain": "cargo.site",
      "tags": [
        "minimalism"
      ],
      "look": [
        "Near-empty ground with a single grey headline and two text links.",
        "A site builder arguing for restraint by using almost no interface at all.",
        "Type doing all the work: no images, no cards, no buttons."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "charm-sh",
      "name": "Charm",
      "url": "https://charm.sh/",
      "domain": "charm.sh",
      "tags": [
        "aurora-mesh",
        "dark-oled"
      ],
      "look": [
        "Mesh gradient field behind pixel-art sprites and glow.",
        "Mono type in one column; the tools are shown as terminal output, not screenshots.",
        "Two colours total: violet field, white type, one pink accent."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "cloudflare-radar",
      "name": "Cloudflare Radar",
      "url": "https://radar.cloudflare.com/",
      "domain": "radar.cloudflare.com",
      "tags": [
        "data-dashboard",
        "bento-grid"
      ],
      "look": [
        "Left rail nav, one question per panel, hairline trends with no chart junk.",
        "Protocol shares shown as a chart plus a percentage, not a chart alone.",
        "Filters and time ranges stated as text above the data they affect."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "craigslist",
      "name": "Craigslist",
      "url": "https://craigslist.org/",
      "domain": "craigslist.org",
      "tags": [
        "brutalist-web"
      ],
      "look": [
        "Fixed multi-column link lists, alternating row tint, zero hover decoration.",
        "Default link colours doing all the navigation and state work.",
        "Information density treated as the feature; the layout has barely moved in 25 years."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "cyberpunk-net",
      "name": "Cyberpunk 2077",
      "url": "https://www.cyberpunk.net/",
      "domain": "cyberpunk.net",
      "tags": [
        "cyberpunk-hud",
        "dark-oled"
      ],
      "look": [
        "Full-bleed key art behind a clipped, angled frame.",
        "Neon yellow on black with corner cuts and bracket ticks everywhere.",
        "Platform buy-links printed as a mono status row along the frame."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "deno",
      "name": "Deno",
      "url": "https://deno.com/",
      "domain": "deno.com",
      "tags": [
        "terminal-cli",
        "dark-oled"
      ],
      "look": [
        "One grotesque headline on a near-black ground with a run of terminal output glowing beside it.",
        "The feature list is printed as a terminal menu, so the pitch is a screenshot of itself.",
        "Two pill CTAs of equal weight; a thin bright banner carries the news at the top."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "discord",
      "name": "Discord",
      "url": "https://discord.com/",
      "domain": "discord.com",
      "tags": [
        "playful-chunky",
        "render-3d",
        "dark-oled"
      ],
      "look": [
        "A violet gradient ground with a chunky oblique headline and 3D characters standing on it.",
        "Device renders arranged in perspective, floating rather than framed in a box.",
        "One solid blue CTA beside a white outline one, both pill-shaped."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "duolingo",
      "name": "Duolingo",
      "url": "https://www.duolingo.com/",
      "domain": "duolingo.com",
      "tags": [
        "playful-chunky",
        "gamified"
      ],
      "look": [
        "Chunky rounded buttons with a solid bottom edge that compresses on press.",
        "The mascot sits at the centre of the composition; copy stays short and warm.",
        "One saturated green reserved for the primary action; the rest is friendly greyscale.",
        "Language list at the bottom as flags plus names, not a dropdown."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "figma",
      "name": "Figma",
      "url": "https://www.figma.com/",
      "domain": "figma.com",
      "tags": [
        "dark-oled",
        "card-ui"
      ],
      "look": [
        "The product's own UI is the hero image, tilted in perspective.",
        "Announcement banners as real strips with a date and a link, not modals.",
        "Dark ground with saturated accents used sparingly on product thumbnails."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "fonts-in-use",
      "name": "Fonts In Use",
      "url": "https://fontsinuse.com/",
      "domain": "fontsinuse.com",
      "tags": [
        "card-ui",
        "editorial"
      ],
      "look": [
        "Filters as tab rows above a grid of specimens; the grid is the whole page.",
        "Card media is the printed artefact itself, with a credit line under each.",
        "Search-as-you-type copy stated plainly next to the filters."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: sameorigin"
    },
    {
      "id": "framer",
      "name": "Framer",
      "url": "https://www.framer.com/",
      "domain": "framer.com",
      "tags": [
        "dark-oled",
        "motion-micro"
      ],
      "look": [
        "A black ground with one large headline and the product shown inside a glowing frame.",
        "Two pill CTAs of unequal weight: one filled white, one quiet, both under the headline.",
        "The accent on the frame is the only hue on the page; everything else is greyscale."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com/",
      "domain": "github.com",
      "tags": [
        "dark-oled",
        "card-ui"
      ],
      "look": [
        "One sentence of positioning, two CTAs, then a screenshot that does the explaining.",
        "Dark ground where elevation is a lighter border, not a shadow.",
        "First-person stories as cards beneath the fold."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: deny"
    },
    {
      "id": "glassmorphism",
      "name": "Glassmorphism",
      "url": "https://glassmorphism.com/",
      "domain": "glassmorphism.com",
      "tags": [
        "glassmorphism",
        "render-3d"
      ],
      "look": [
        "A translucent panel floating over a photographic ground, blurred behind its own border.",
        "The controls are named by effect (blur, refraction, depth) and the generated CSS is printed under them.",
        "One saturated CTA on a near-black field; everything else on the page is glass."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "grafana-play",
      "name": "Grafana Play",
      "url": "https://play.grafana.org/",
      "domain": "play.grafana.org",
      "tags": [
        "data-dashboard"
      ],
      "look": [
        "Left rail of dashboards, panel grid of charts, nothing decorative between them.",
        "Legends under charts with tabular values instead of tooltips as the only source.",
        "One gradient banner as the single authored moment, and it is a link, not decoration."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors 'none'"
    },
    {
      "id": "grilli-type",
      "name": "Grilli Type",
      "url": "https://www.grillitype.com/",
      "domain": "grillitype.com",
      "tags": [
        "swiss",
        "kinetic-typography"
      ],
      "look": [
        "The specimen is the hero: letterforms drawn with their construction geometry visible.",
        "Grid guides left on screen as a feature — the scaffolding is the pitch.",
        "Type tester rows directly under the specimen so you can set your own word."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "gumroad",
      "name": "Gumroad",
      "url": "https://gumroad.com/",
      "domain": "gumroad.com",
      "tags": [
        "neo-brutalism",
        "playful-chunky"
      ],
      "look": [
        "Thick black outlines and hard offsets: no blur anywhere on the page.",
        "Pink shapes scattered as stickers, rotated off-axis on purpose.",
        "Oversized grotesque headline paired with a mono subhead.",
        "A small live activity counter instead of a testimonial block."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "hacker-news",
      "name": "Hacker News",
      "url": "https://news.ycombinator.com/",
      "domain": "news.ycombinator.com",
      "tags": [
        "brutalist-web",
        "terminal-cli"
      ],
      "look": [
        "Rank, title, then a metadata row — a table that never became a card grid.",
        "The single orange bar carries all of the brand and all of the navigation.",
        "No images, no webfonts, tiny type, and it still reads faster than most feeds."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "headspace",
      "name": "Headspace",
      "url": "https://www.headspace.com/",
      "domain": "headspace.com",
      "tags": [
        "playful-chunky",
        "card-ui"
      ],
      "look": [
        "Warm orange used only on the primary action and links.",
        "Soft rounded cards with photography and one short label each.",
        "Social-proof rows set as text, not as a badge wall."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "hubspot",
      "name": "HubSpot",
      "url": "https://www.hubspot.com/",
      "domain": "hubspot.com",
      "tags": [
        "conversion-optimised",
        "hero-landing"
      ],
      "look": [
        "A centred serif headline with a filled orange CTA paired with an orange outline one.",
        "The product category stated in small caps above the headline, not in a nav.",
        "Photography as a band of equal crops directly beneath the buttons."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "ikea",
      "name": "IKEA",
      "url": "https://www.ikea.com/",
      "domain": "ikea.com",
      "tags": [
        "bento-grid",
        "card-ui"
      ],
      "look": [
        "A split composition: full-bleed photography beside a solid colour field.",
        "One CTA per tile; the colour field does the shouting so the button does not.",
        "The nearest-store line and account actions kept as plain text."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors an allow-list"
    },
    {
      "id": "its-nice-that",
      "name": "It's Nice That",
      "url": "https://www.itsnicethat.com/",
      "domain": "itsnicethat.com",
      "tags": [
        "editorial",
        "card-ui"
      ],
      "look": [
        "Dense editorial grid of article cards, each with a real one-line standfirst.",
        "Mono used for categories and dates only — never for body copy.",
        "A feature story given a wider span so the grid has a hierarchy."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "itch-io",
      "name": "itch.io",
      "url": "https://itch.io/",
      "domain": "itch.io",
      "tags": [
        "brutalist-web",
        "card-ui"
      ],
      "look": [
        "A left column of dense text link lists: every tag, genre and price bracket stated plainly.",
        "Game covers in a bright grid — the one burst of colour on an otherwise plain page.",
        "Section headings as small bold text with a red count badge, never a decorated header."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "kinfolk",
      "name": "Kinfolk",
      "url": "https://www.kinfolk.com/",
      "domain": "kinfolk.com",
      "tags": [
        "editorial",
        "nordic",
        "minimalism"
      ],
      "look": [
        "Centred serif issue title above a single cover image: one idea per viewport.",
        "Navigation is a single line of small caps; nothing else is drawn.",
        "Buy and Read as two quiet links rather than buttons."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "linear",
      "name": "Linear",
      "url": "https://linear.app/",
      "domain": "linear.app",
      "tags": [
        "dark-oled",
        "motion-micro",
        "card-ui"
      ],
      "look": [
        "Near-black ground, one headline, then the actual product UI framed with a hairline.",
        "Shortcut hints printed onto the screenshot, so the keyboard path is documentation.",
        "Type tight and small; the interface image carries the scale."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors an allow-list"
    },
    {
      "id": "mailchimp",
      "name": "Mailchimp",
      "url": "https://mailchimp.com/",
      "domain": "mailchimp.com",
      "tags": [
        "card-ui",
        "playful-chunky"
      ],
      "look": [
        "Yellow reserved strictly for the primary action.",
        "Product screenshots tilted inside soft cards, each with a short caption.",
        "Trust signals (ratings, update date) printed as small text under the CTA."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "m3-material",
      "name": "Material Design 3",
      "url": "https://m3.material.io/",
      "domain": "m3.material.io",
      "tags": [
        "material-you",
        "design-system"
      ],
      "look": [
        "A left rail of section icons beside a light hero with one oversized headline.",
        "A single filled pill is the primary action; every other link is plain text.",
        "Phone screens tiled at mixed sizes so the system's own components are the artwork."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "microsoft",
      "name": "Microsoft",
      "url": "https://www.microsoft.com/",
      "domain": "microsoft.com",
      "tags": [
        "fluent-design",
        "dark-oled"
      ],
      "look": [
        "A dark full-bleed product hero with the headline set over the render rather than beside it.",
        "Product segments laid along the top bar instead of hidden behind a menu.",
        "A ghost CTA paired with a solid one; the accent blue is spent only on the solid button."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "mschf",
      "name": "MSCHF",
      "url": "https://mschf.com/",
      "domain": "mschf.com",
      "tags": [
        "maximalism",
        "kinetic-typography",
        "brutalist-web"
      ],
      "look": [
        "A mono ledger of every drop, set like a receipt: number, item, price.",
        "Oversized black, green and yellow type over a field of static numerics.",
        "Textures instead of images: the noise grid is the background asset."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "neobrutalism-dev",
      "name": "Neobrutalism components",
      "url": "https://www.neobrutalism.dev/",
      "domain": "neobrutalism.dev",
      "tags": [
        "neo-brutalism"
      ],
      "look": [
        "Lavender ground with hard black borders and clashing green sticker accents.",
        "The keyboard shortcut is printed inside the primary button itself.",
        "Components previewed live in the page's own style, so the demo is the documentation."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "neocities",
      "name": "Neocities",
      "url": "https://neocities.org/",
      "domain": "neocities.org",
      "tags": [
        "y2k-frutiger",
        "playful-chunky"
      ],
      "look": [
        "Retro-teal header band with a drawn mascot — the brand is illustration, not a logo.",
        "Sign-up form as the hero, with visible labels above every field.",
        "Featured sites as small screenshot cards with a visible hit counter."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "neumorphism-io",
      "name": "Neumorphism.io",
      "url": "https://neumorphism.io/",
      "domain": "neumorphism.io",
      "tags": [
        "neumorphism"
      ],
      "look": [
        "A single grey ground with elements extruded from it by paired light and dark shadows.",
        "No borders and no fills anywhere — every edge is a shadow, so the page reads as one material.",
        "Monochrome throughout: the extruded form is the only argument the page makes."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "nintendo",
      "name": "Nintendo",
      "url": "https://www.nintendo.com/",
      "domain": "nintendo.com",
      "tags": [
        "playful-chunky",
        "card-ui"
      ],
      "look": [
        "A white store bar with the red logo, then a full-bleed key-art hero.",
        "The game's own artwork is the only colour; the chrome around it stays neutral.",
        "A thumbnail carousel of platform badges under the hero, then a featured row."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "notion",
      "name": "Notion",
      "url": "https://www.notion.com/",
      "domain": "notion.com",
      "tags": [
        "minimalism",
        "card-ui"
      ],
      "look": [
        "One friendly headline, one sentence, two buttons — nothing else above the fold.",
        "Product screenshots as collage rather than a single hero shot.",
        "Story cards below with named customers, no badge wall."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors an allow-list"
    },
    {
      "id": "nushell",
      "name": "Nushell",
      "url": "https://www.nushell.sh/",
      "domain": "nushell.sh",
      "tags": [
        "terminal-cli"
      ],
      "look": [
        "A real terminal frame is the hero, with a runnable command and its output.",
        "Feature columns each led by a mono label and one sentence.",
        "Colour used only for state inside the terminal output."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "openai",
      "name": "OpenAI",
      "url": "https://openai.com/",
      "domain": "openai.com",
      "tags": [
        "minimalism",
        "agentic-adaptive"
      ],
      "look": [
        "The prompt field is the primary interface on a public home page.",
        "Example prompts as chips under the field — the suggestion system is the nav.",
        "No photography at all: the question is the hero."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors 'none'"
    },
    {
      "id": "our-world-in-data",
      "name": "Our World in Data",
      "url": "https://ourworldindata.org/",
      "domain": "ourworldindata.org",
      "tags": [
        "data-dashboard",
        "editorial"
      ],
      "look": [
        "Search is the hero action, with live dataset counts beside it.",
        "Story cards, each making one claim with a small chart that supports it.",
        "Publication-grade typography applied to charts, not just to prose."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "pentagram",
      "name": "Pentagram",
      "url": "https://www.pentagram.com/",
      "domain": "pentagram.com",
      "tags": [
        "editorial",
        "minimalism"
      ],
      "look": [
        "A photograph fills the viewport with a single statement of intent.",
        "Project grid with no captions beyond client and discipline.",
        "Micro-nav in thin tracked caps; the work never competes with the chrome."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "poolsuite",
      "name": "Poolsuite",
      "url": "https://poolsuite.net/",
      "domain": "poolsuite.net",
      "tags": [
        "y2k-frutiger",
        "retro-futurism"
      ],
      "look": [
        "A retro desktop window is the whole interface, complete with a menu bar.",
        "Pixel icons as navigation; the window chrome is inherited, not redrawn.",
        "One sepia palm photograph behind a single product line."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "rauno",
      "name": "Rauno Freiberg",
      "url": "https://rauno.me/",
      "domain": "rauno.me",
      "tags": [
        "maximalism",
        "kinetic-typography"
      ],
      "look": [
        "Body copy set at display scale, mixing a serif with a geometric sans mid-sentence.",
        "One flat colour disc as the only graphic element on the page.",
        "Interaction notes and key commands written into the page as content."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "space-jam-1996",
      "name": "Space Jam (1996)",
      "url": "https://www.spacejam.com/1996/",
      "domain": "spacejam.com/1996",
      "tags": [
        "y2k-frutiger",
        "comic-popart"
      ],
      "look": [
        "A starfield background with orbiting planet buttons — navigation as a solar system.",
        "Frameset-era structure preserved verbatim, including the loading animation.",
        "Peak 1996 web: every element is an image, and every image is a GIF."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "spotify",
      "name": "Spotify",
      "url": "https://open.spotify.com/",
      "domain": "open.spotify.com",
      "tags": [
        "dark-oled",
        "card-ui"
      ],
      "look": [
        "A dark library: a left nav rail, then rows of cover cards carrying artist and track meta.",
        "Cover art supplies every colour; the interface around it is near-black with white type.",
        "One brand green, reserved for the sign-up bar pinned along the bottom."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors an allow-list"
    },
    {
      "id": "stardew-valley",
      "name": "Stardew Valley",
      "url": "https://www.stardewvalley.net/",
      "domain": "stardewvalley.net",
      "tags": [
        "pixel-art",
        "playful-chunky"
      ],
      "look": [
        "A pixel-art logo over a painted landscape; the illustration is the entire hero.",
        "Navigation as small uppercase letterspaced links along the top edge.",
        "Saturated colour and a drawn face instead of any photographic asset."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "stripe",
      "name": "Stripe",
      "url": "https://stripe.com/",
      "domain": "stripe.com",
      "tags": [
        "aurora-mesh",
        "bento-grid"
      ],
      "look": [
        "A mesh-gradient ribbon beside plain product copy — colour only where it argues.",
        "Customer logo strip directly under the hero, in a hairline row.",
        "Secondary navigation as a thin labelled rail rather than a mega-menu."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "stripe-press",
      "name": "Stripe Press",
      "url": "https://press.stripe.com/",
      "domain": "press.stripe.com",
      "tags": [
        "editorial",
        "luxury-premium"
      ],
      "look": [
        "Book covers as the only imagery, stacked to imply a shelf.",
        "Mono for metadata, serif for titles — the two registers never swap roles.",
        "Dark ground so the covers supply every colour on the page."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    },
    {
      "id": "tailwind",
      "name": "Tailwind CSS",
      "url": "https://tailwindcss.com/",
      "domain": "tailwindcss.com",
      "tags": [
        "minimalism",
        "token-system"
      ],
      "look": [
        "One near-black headline on white, with the utility classes shown inline in the accent colour.",
        "A black pill CTA and a search field, then the code editor as the proof.",
        "Almost no chrome: type and code supply the whole hierarchy."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "teenage-engineering",
      "name": "Teenage Engineering",
      "url": "https://teenage.engineering/",
      "domain": "teenage.engineering",
      "tags": [
        "dark-oled",
        "retro-futurism"
      ],
      "look": [
        "Huge condensed display type as the hero; no photograph at all.",
        "Products tiled in a black bar separated by hairlines, like a parts catalogue.",
        "Specs presented as a technical drawing with part numbers."
      ],
      "frameable": true,
      "frameReason": null
    },
    {
      "id": "the-verge",
      "name": "The Verge",
      "url": "https://www.theverge.com/",
      "domain": "theverge.com",
      "tags": [
        "editorial",
        "dark-oled",
        "card-ui"
      ],
      "look": [
        "Dark editorial ground with one accent rail running through every section.",
        "Story cards with mono timestamps and a single-line standfirst.",
        "One accent colour for links and section marks; everything else is greyscale."
      ],
      "frameable": false,
      "frameReason": "sends Content-Security-Policy frame-ancestors an allow-list"
    },
    {
      "id": "vercel",
      "name": "Vercel",
      "url": "https://vercel.com/",
      "domain": "vercel.com",
      "tags": [
        "minimalism",
        "kinetic-typography"
      ],
      "look": [
        "Two lines of headline, two CTAs, one geometric mark — nothing else above the fold.",
        "Company logos in a hairline row as the only social proof.",
        "Near-white ground with black type doing all the hierarchy work."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: DENY"
    },
    {
      "id": "yahoo-japan",
      "name": "Yahoo! Japan",
      "url": "https://www.yahoo.co.jp/",
      "domain": "yahoo.co.jp",
      "tags": [
        "japanese-web",
        "maximalism"
      ],
      "look": [
        "A tabbed portal: every module is a strip of headlines under its own label, not a card.",
        "Density as the feature — a dozen competing blocks above the fold, each filled to its edges.",
        "Mixed type sizes and coloured module headers; the logo is the loudest thing on a busy page."
      ],
      "frameable": false,
      "frameReason": "sends X-Frame-Options: SAMEORIGIN"
    }
  ]
};
