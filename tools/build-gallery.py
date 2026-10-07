#!/usr/bin/env python3
"""Merge capture-report.json with per-site annotations into data/gallery.js."""
import json, os, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
report = json.load(open(os.path.join(ROOT, "tools", "capture-report.json")))

# id: (display name, domain, [style ids to link], [what to look at], drop?)
A = {
 "aesop": ("Aesop", "aesop.com", ["editorial", "minimalism", "luxury-premium"], [
   "Serif headline over full-bleed product photography; the image does the arguing.",
   "Warm neutral ground with the only colour coming from the product itself.",
   "Thin, wide-tracked nav labels — no icon competes with the photography.",
   "A single outlined CTA under the hero line, nothing filled."]),
 "anthropic": ("Anthropic", "anthropic.com", ["editorial", "minimalism"], [
   "Serif display headline at a wide measure with a short deck beside it.",
   "Near-monochrome warm ground; product names set in a calm serif rather than a UI face.",
   "Hairlines and spacing instead of cards or elevation."]),
 "apple": ("Apple", "apple.com", ["dark-oled", "minimalism"], [
   "Full-bleed dark hero with the product floating in it and one line of copy.",
   "Type sized per section, never competing across the fold; buy actions stay small and bright.",
   "Product imagery locked to a fixed aspect ratio so the page never reflows."]),
 "apple-vision-pro": ("Apple — Vision Pro", "apple.com/apple-vision-pro", ["spatial-vision", "bento-grid"], [
   "Human-scale imagery over spec copy: who and where, not just the chip.",
   "Tiles at mixed spans, each answering one question (fit, display, audio).",
   "Type sizes stepped by tile span rather than by section."]),
 "are-na": ("Are.na", "are.na", ["minimalism", "editorial"], [
   "A text-first interface: the home page is a numbered list of statements, not a hero.",
   "Mono labels at label size, one blue accent for every link.",
   "Blocks laid out as a quiet grid where the media is the only weight."]),
 "awwwards": ("Awwwards", "awwwards.com", ["dark-oled", "card-ui"], [
   "Dark hero with a single oversized project title and the jury vote beside it.",
   "Every entry is a card whose media is the whole card; captions sit outside.",
   "Section labels in small mono caps, not uppercase-italic decoration."]),
 "bang-olufsen": ("Bang & Olufsen", "bang-olufsen.com", ["luxury-premium", "minimalism"], [
   "Edge-to-edge photography, one line of copy, one outlined CTA.",
   "Nav reduced to a hamburger and thin tracked type so nothing frames the image.",
   "Aspect-locked media, no borders, no shadows anywhere."]),
 "berkshire-hathaway": ("Berkshire Hathaway", "berkshirehathaway.com", ["brutalist-web"], [
   "No stylesheet at all: browser serif, browser link colours, browser bullets.",
   "Two columns of links under a press-release stub — hierarchy from heading tags only.",
   "The canonical proof that an unstyled page can outperform a designed one."]),
 "brutalist-websites": ("Brutalist Websites", "brutalistwebsites.com", ["brutalist-web", "card-ui"], [
   "Each entry is a black-framed screenshot typed in that site's own face.",
   "The index itself obeys the style it indexes: loud type, hard edges, no softness.",
   "Media is a plain screenshot; the label carries the whole credit line."]),
 "bun-sh": ("Bun", "bun.sh", ["terminal-cli", "dark-oled"], [
   "The install command is the hero, with a real OS switcher under it.",
   "Benchmarks printed as an actual table with tabular numerals, not as flourish bars.",
   "Dark ground with one lime accent reserved for the primary action."]),
 "camerons-world": ("Cameron's World", "cameronsworld.net", ["maximalism", "y2k-frutiger"], [
   "Every surviving GIF from the 90s web tiled as the background — no grid, no restraint.",
   "Animated sprite links as the only navigation.",
   "A love letter presented as a dense collage rather than a gallery."]),
 "cargo": ("Cargo", "cargo.site", ["minimalism"], [
   "Near-empty ground with a single grey headline and two text links.",
   "A site builder arguing for restraint by using almost no interface at all.",
   "Type doing all the work: no images, no cards, no buttons."]),
 "charm-sh": ("Charm", "charm.sh", ["aurora-mesh", "dark-oled"], [
   "Mesh gradient field behind pixel-art sprites and glow.",
   "Mono type in one column; the tools are shown as terminal output, not screenshots.",
   "Two colours total: violet field, white type, one pink accent."]),
 "cloudflare-radar": ("Cloudflare Radar", "radar.cloudflare.com", ["data-dashboard", "bento-grid"], [
   "Left rail nav, one question per panel, hairline trends with no chart junk.",
   "Protocol shares shown as a chart plus a percentage, not a chart alone.",
   "Filters and time ranges stated as text above the data they affect."]),
 "craigslist": ("Craigslist", "craigslist.org", ["brutalist-web"], [
   "Fixed multi-column link lists, alternating row tint, zero hover decoration.",
   "Default link colours doing all the navigation and state work.",
   "Information density treated as the feature; the layout has barely moved in 25 years."]),
 "cyberpunk-net": ("Cyberpunk 2077", "cyberpunk.net", ["cyberpunk-hud", "dark-oled"], [
   "Full-bleed key art behind a clipped, angled frame.",
   "Neon yellow on black with corner cuts and bracket ticks everywhere.",
   "Platform buy-links printed as a mono status row along the frame."]),
 "duolingo": ("Duolingo", "duolingo.com", ["playful-chunky", "gamified"], [
   "Chunky rounded buttons with a solid bottom edge that compresses on press.",
   "The mascot sits at the centre of the composition; copy stays short and warm.",
   "One saturated green reserved for the primary action; the rest is friendly greyscale.",
   "Language list at the bottom as flags plus names, not a dropdown."]),
 "figma": ("Figma", "figma.com", ["dark-oled", "card-ui"], [
   "The product's own UI is the hero image, tilted in perspective.",
   "Announcement banners as real strips with a date and a link, not modals.",
   "Dark ground with saturated accents used sparingly on product thumbnails."]),
 "fonts-in-use": ("Fonts In Use", "fontsinuse.com", ["card-ui", "editorial"], [
   "Filters as tab rows above a grid of specimens; the grid is the whole page.",
   "Card media is the printed artefact itself, with a credit line under each.",
   "Search-as-you-type copy stated plainly next to the filters."]),
 "github": ("GitHub", "github.com", ["dark-oled", "card-ui"], [
   "One sentence of positioning, two CTAs, then a screenshot that does the explaining.",
   "Dark ground where elevation is a lighter border, not a shadow.",
   "First-person stories as cards beneath the fold."]),
 "grafana-play": ("Grafana Play", "play.grafana.org", ["data-dashboard"], [
   "Left rail of dashboards, panel grid of charts, nothing decorative between them.",
   "Legends under charts with tabular values instead of tooltips as the only source.",
   "One gradient banner as the single authored moment, and it is a link, not decoration."]),
 "grilli-type": ("Grilli Type", "grillitype.com", ["swiss", "kinetic-typography"], [
   "The specimen is the hero: letterforms drawn with their construction geometry visible.",
   "Grid guides left on screen as a feature — the scaffolding is the pitch.",
   "Type tester rows directly under the specimen so you can set your own word."]),
 "gumroad": ("Gumroad", "gumroad.com", ["neo-brutalism", "playful-chunky"], [
   "Thick black outlines and hard offsets: no blur anywhere on the page.",
   "Pink shapes scattered as stickers, rotated off-axis on purpose.",
   "Oversized grotesque headline paired with a mono subhead.",
   "A small live activity counter instead of a testimonial block."]),
 "hacker-news": ("Hacker News", "news.ycombinator.com", ["brutalist-web", "terminal-cli"], [
   "Rank, title, then a metadata row — a table that never became a card grid.",
   "The single orange bar carries all of the brand and all of the navigation.",
   "No images, no webfonts, tiny type, and it still reads faster than most feeds."]),
 "headspace": ("Headspace", "headspace.com", ["playful-chunky", "card-ui"], [
   "Warm orange used only on the primary action and links.",
   "Soft rounded cards with photography and one short label each.",
   "Social-proof rows set as text, not as a badge wall."]),
 "ikea": ("IKEA", "ikea.com", ["bento-grid", "card-ui"], [
   "A split composition: full-bleed photography beside a solid colour field.",
   "One CTA per tile; the colour field does the shouting so the button does not.",
   "The nearest-store line and account actions kept as plain text."]),
 "its-nice-that": ("It's Nice That", "itsnicethat.com", ["editorial", "card-ui"], [
   "Dense editorial grid of article cards, each with a real one-line standfirst.",
   "Mono used for categories and dates only — never for body copy.",
   "A feature story given a wider span so the grid has a hierarchy."]),
 "kinfolk": ("Kinfolk", "kinfolk.com", ["editorial", "nordic", "minimalism"], [
   "Centred serif issue title above a single cover image: one idea per viewport.",
   "Navigation is a single line of small caps; nothing else is drawn.",
   "Buy and Read as two quiet links rather than buttons."]),
 "linear": ("Linear", "linear.app", ["dark-oled", "motion-micro", "card-ui"], [
   "Near-black ground, one headline, then the actual product UI framed with a hairline.",
   "Shortcut hints printed onto the screenshot, so the keyboard path is documentation.",
   "Type tight and small; the interface image carries the scale."]),
 "mailchimp": ("Mailchimp", "mailchimp.com", ["card-ui", "playful-chunky"], [
   "Yellow reserved strictly for the primary action.",
   "Product screenshots tilted inside soft cards, each with a short caption.",
   "Trust signals (ratings, update date) printed as small text under the CTA."]),
 "mschf": ("MSCHF", "mschf.com", ["maximalism", "kinetic-typography", "brutalist-web"], [
   "A mono ledger of every drop, set like a receipt: number, item, price.",
   "Oversized black, green and yellow type over a field of static numerics.",
   "Textures instead of images: the noise grid is the background asset."]),
 "neobrutalism-dev": ("Neobrutalism components", "neobrutalism.dev", ["neo-brutalism"], [
   "Lavender ground with hard black borders and clashing green sticker accents.",
   "The keyboard shortcut is printed inside the primary button itself.",
   "Components previewed live in the page's own style, so the demo is the documentation."]),
 "neocities": ("Neocities", "neocities.org", ["y2k-frutiger", "playful-chunky"], [
   "Retro-teal header band with a drawn mascot — the brand is illustration, not a logo.",
   "Sign-up form as the hero, with visible labels above every field.",
   "Featured sites as small screenshot cards with a visible hit counter."]),
 "notion": ("Notion", "notion.com", ["minimalism", "card-ui"], [
   "One friendly headline, one sentence, two buttons — nothing else above the fold.",
   "Product screenshots as collage rather than a single hero shot.",
   "Story cards below with named customers, no badge wall."]),
 "nushell": ("Nushell", "nushell.sh", ["terminal-cli"], [
   "A real terminal frame is the hero, with a runnable command and its output.",
   "Feature columns each led by a mono label and one sentence.",
   "Colour used only for state inside the terminal output."]),
 "openai": ("OpenAI", "openai.com", ["minimalism", "agentic-adaptive"], [
   "The prompt field is the primary interface on a public home page.",
   "Example prompts as chips under the field — the suggestion system is the nav.",
   "No photography at all: the question is the hero."]),
 "our-world-in-data": ("Our World in Data", "ourworldindata.org", ["data-dashboard", "editorial"], [
   "Search is the hero action, with live dataset counts beside it.",
   "Story cards, each making one claim with a small chart that supports it.",
   "Publication-grade typography applied to charts, not just to prose."]),
 "pentagram": ("Pentagram", "pentagram.com", ["editorial", "minimalism"], [
   "A photograph fills the viewport with a single statement of intent.",
   "Project grid with no captions beyond client and discipline.",
   "Micro-nav in thin tracked caps; the work never competes with the chrome."]),
 "poolsuite": ("Poolsuite", "poolsuite.net", ["y2k-frutiger", "retro-futurism"], [
   "A retro desktop window is the whole interface, complete with a menu bar.",
   "Pixel icons as navigation; the window chrome is inherited, not redrawn.",
   "One sepia palm photograph behind a single product line."]),
 "rauno": ("Rauno Freiberg", "rauno.me", ["maximalism", "kinetic-typography"], [
   "Body copy set at display scale, mixing a serif with a geometric sans mid-sentence.",
   "One flat colour disc as the only graphic element on the page.",
   "Interaction notes and key commands written into the page as content."]),
 "space-jam-1996": ("Space Jam (1996)", "spacejam.com/1996", ["y2k-frutiger", "comic-popart"], [
   "A starfield background with orbiting planet buttons — navigation as a solar system.",
   "Frameset-era structure preserved verbatim, including the loading animation.",
   "Peak 1996 web: every element is an image, and every image is a GIF."]),
 "stripe": ("Stripe", "stripe.com", ["aurora-mesh", "bento-grid"], [
   "A mesh-gradient ribbon beside plain product copy — colour only where it argues.",
   "Customer logo strip directly under the hero, in a hairline row.",
   "Secondary navigation as a thin labelled rail rather than a mega-menu."]),
 "stripe-press": ("Stripe Press", "press.stripe.com", ["editorial", "luxury-premium"], [
   "Book covers as the only imagery, stacked to imply a shelf.",
   "Mono for metadata, serif for titles — the two registers never swap roles.",
   "Dark ground so the covers supply every colour on the page."]),
 "teenage-engineering": ("Teenage Engineering", "teenage.engineering", ["dark-oled", "retro-futurism"], [
   "Huge condensed display type as the hero; no photograph at all.",
   "Products tiled in a black bar separated by hairlines, like a parts catalogue.",
   "Specs presented as a technical drawing with part numbers."]),
 "the-verge": ("The Verge", "theverge.com", ["editorial", "dark-oled", "card-ui"], [
   "Dark editorial ground with one accent rail running through every section.",
   "Story cards with mono timestamps and a single-line standfirst.",
   "One accent colour for links and section marks; everything else is greyscale."]),
 "vercel": ("Vercel", "vercel.com", ["minimalism", "kinetic-typography"], [
   "Two lines of headline, two CTAs, one geometric mark — nothing else above the fold.",
   "Company logos in a hairline row as the only social proof.",
   "Near-white ground with black type doing all the hierarchy work."]),
}

DROP = {"readymag", "windows93", "muji", "rolex", "nytimes", "balenciaga"}


def frameable(rec):
    xfo = (rec.get("xFrameOptions") or "").upper()
    fa = rec.get("frameAncestors")
    if "DENY" in xfo or "SAMEORIGIN" in xfo:
        return False, "sends X-Frame-Options: " + rec["xFrameOptions"]
    if fa:
        if fa.strip() in ("*",) or fa.strip().startswith("*"):
            return True, None
        return False, "sends Content-Security-Policy frame-ancestors " + ("'none'" if "'none'" in fa else "an allow-list")
    return True, None


sites = []
for rec in report:
    if not rec.get("shot") or rec["id"] in DROP:
        continue
    if rec["id"] not in A:
        print("MISSING annotation for", rec["id"])
        continue
    name, domain, tags, look = A[rec["id"]]
    ok, reason = frameable(rec)
    sites.append({
        "id": rec["id"], "name": name, "url": rec["url"], "domain": domain,
        "tags": tags, "look": look, "frameable": ok, "frameReason": reason,
    })

sites.sort(key=lambda s: s["name"].lower())
out = {"capturedAt": datetime.date.today().isoformat(), "sites": sites}
js = "/* Real-world examples: names, links and observations from the live pages.\n   Screenshots in images/examples/ are captured by tools/capture.js. */\nwindow.GALLERY = " + json.dumps(out, indent=2, ensure_ascii=False) + ";\n"
open(os.path.join(ROOT, "data", "gallery.js"), "w").write(js)
print(f"{len(sites)} sites, {sum(1 for s in sites if s['frameable'])} frameable, {sum(1 for s in sites if not s['frameable'])} not")
