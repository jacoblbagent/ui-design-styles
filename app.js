/* Renders the catalog, wires search / filters / copy / theme. */
(function () {
  "use strict";

  var SECTIONS = [
    { id: "foundations", name: "Foundations", note: "The starting points: material, flat, systematised, typographic." },
    { id: "surfaces", name: "Surfaces & depth", note: "Styles whose whole idea is how a surface behaves in light." },
    { id: "expressive", name: "Expressive & era-bound", note: "Looks with a date and a mood — loud, retro, or deliberately quiet." },
    { id: "patterns", name: "Structure & interaction", note: "Layout and behaviour patterns rather than visual registers." }
  ];

  var CATALOG = window.CATALOG || [];
  CATALOG.sort(function (a, b) { return a.name.localeCompare(b.name); });

  var GALLERY = (window.GALLERY && window.GALLERY.sites) || [];
  var CAPTURED = (window.GALLERY && window.GALLERY.capturedAt) || "";

  var state = { q: "", cat: "all", theme: "light" };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- specimen styles: one shared sheet ---------- */
  var styleEl = document.createElement("style");
  styleEl.textContent = CATALOG.map(function (e) { return e.css; }).join("\n\n");
  document.head.appendChild(styleEl);

  /* ---------- building blocks ---------- */
  var ICON_COPY = '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5"/><path d="M10.5 5.5V3.5a1.5 1.5 0 0 0-1.5-1.5H3.5A1.5 1.5 0 0 0 2 3.5V8a1.5 1.5 0 0 0 1.5 1.5h2"/></svg>';
  var ICON_EMBED = '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M2 6.5h12M5 9.5h3"/></svg>';
  var ICON_CLOSE = '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>';

  function traitsText(e) {
    var lines = ["## " + e.name + " (" + e.era + ")", "", e.blurb, "", "Traits:"];
    e.traits.forEach(function (t) { lines.push("- " + stripTags(t)); });
    if (e.avoid && e.avoid.length) {
      lines.push("", "Watch out for:");
      e.avoid.forEach(function (t) { lines.push("- " + stripTags(t)); });
    }
    if (e.sources && e.sources.length) lines.push("", "Sources: " + e.sources.join(" "));
    return lines.join("\n");
  }

  function stripTags(s) { return String(s).replace(/<[^>]*>/g, ""); }

  function cssText(e) {
    return "/* " + e.name + " — " + e.era + "\n   " + stripTags(e.blurb) + " */\n\n" + e.css;
  }

  /* ---------- grid card: summary only, detail lives in the modal ---------- */
  function entryHTML(e) {
    return '<article class="entry entry--summary" id="' + e.id + '" data-id="' + e.id + '" tabindex="0" role="group" aria-label="' + e.name + ' — open details">' +
      '<div class="entry__top">' +
        '<h3 class="entry__title">' + e.name + "</h3>" +
        '<p class="entry__meta">' + e.era + "</p>" +
      "</div>" +
      '<p class="entry__blurb">' + e.blurb + "</p>" +
      '<div class="spec spec--' + e.id + '">' + e.html + "</div>" +
    "</article>";
  }

  /* the specimen markup is authored for the page; scope its ids when it is
     rendered a second time inside the dialog so nothing lands twice. */
  function uniqueIds(html) {
    return String(html)
      .replace(/\bid="([^"]+)"/g, 'id="m-$1"')
      .replace(/\bfor="([^"]+)"/g, 'for="m-$1"');
  }

  function detailHTML(e) {
    var traits = e.traits.map(function (t) { return "<li>" + t + "</li>"; }).join("");
    var avoid = (e.avoid && e.avoid.length)
      ? '<h4 class="detail__sub">Watch out for</h4><ul>' +
        e.avoid.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>"
      : "";
    var sources = (e.sources && e.sources.length)
      ? '<p class="entry__src">Sources: ' + e.sources.map(function (u) {
          return '<a href="' + u + '" rel="noopener">' + stripTags(u).replace(/^https?:\/\//, "").replace(/\/$/, "") + "</a>";
        }).join(", ") + "</p>"
      : "";

    return '<div class="modal__head">' +
        "<div>" +
          '<h2 class="modal__title" id="detail-title">' + e.name + "</h2>" +
          '<p class="modal__meta">' + e.era + " &middot; " + stripTags(e.origin) + "</p>" +
        "</div>" +
        '<button class="iconbtn" type="button" data-close aria-label="Close details">' + ICON_CLOSE + "</button>" +
      "</div>" +
      '<p class="modal__blurb">' + e.blurb + "</p>" +
      '<div class="spec spec--' + e.id + '">' + uniqueIds(e.html) + "</div>" +
      '<div class="traits"><div class="blockhead"><h4>Traits</h4>' +
        '<button class="ghost" type="button" data-copy="traits" data-id="' + e.id + '">' + ICON_COPY + "Copy traits</button>" +
      "</div><ul>" + traits + "</ul>" + avoid + "</div>" +
      '<div class="actions">' +
        '<button class="ghost" type="button" data-copy="css" data-id="' + e.id + '">' + ICON_COPY + "Copy CSS</button>" +
        '<button class="ghost" type="button" data-copy="prompt" data-id="' + e.id + '">' + ICON_COPY + "Copy prompt</button>" +
      "</div>" +
      '<details class="code"><summary>Tokens &amp; CSS for this style</summary>' +
        "<pre><code>" + esc(cssText(e)) + "</code></pre>" +
        "<pre><code>" + esc(e.prompt) + "</code></pre>" +
      "</details>" +
      sources;
  }

  /* ---------- real-world examples ---------- */
  function styleLink(tag) {
    var e = null;
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].id === tag || CATALOG[i].name.toLowerCase() === tag.toLowerCase()) e = CATALOG[i];
    if (!e) return '<span class="site__tag">' + tag + "</span>";
    return '<a href="#' + e.id + '">' + e.name + "</a>";
  }

  function siteHTML(s) {
    var tags = (s.tags || []).map(styleLink).join("");
    var embed = s.frameable
      ? '<button class="ghost" type="button" data-embed="' + s.url + '" data-shot="images/examples/' + s.id + '.jpg">' + ICON_EMBED + "Load live view</button>"
      : "";
    var frameNote = s.frameable
      ? "<b>Allows framing</b> — load live view above swaps the screenshot for the real page, running here."
      : "<b>Refuses framing</b> — " + (s.frameReason || "sends X-Frame-Options or a frame-ancestors policy") + ", so it opens in a new tab.";

    return '<article class="site" id="site-' + s.id + '">' +
      '<figure class="site__shot">' +
        '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + s.name + ' in a new tab">' +
          '<img src="images/examples/' + s.id + '.jpg" alt="Homepage of ' + s.name + ' as captured on ' + CAPTURED + '" width="720" height="450" loading="lazy" decoding="async">' +
          '<span class="site__open">Open live site</span>' +
        "</a>" +
      "</figure>" +
      '<div class="site__body">' +
        '<h3 class="site__title"><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + s.name + "</a></h3>" +
        '<p class="site__meta">' + s.domain + " &middot; captured " + CAPTURED + "</p>" +
        '<p class="site__tags">' + tags + "</p>" +
        '<div class="site__look"><h4>What to look at</h4><ul>' +
          (s.look || []).map(function (t) { return "<li>" + t + "</li>"; }).join("") +
        "</ul></div>" +
        (embed ? '<div class="actions">' + embed + "</div>" : "") +
        '<p class="site__note">' + frameNote + "</p>" +
      "</div>" +
    "</article>";
  }

  function siteMatches(s) {
    if (state.cat !== "all" && state.cat !== "gallery") return false;
    if (!state.q) return true;
    var hay = [s.name, s.domain, s.url, (s.tags || []).join(" "), (s.look || []).join(" ")].join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (t) { return hay.indexOf(t) !== -1; });
  }

  function renderSites() {
    var visible = GALLERY.filter(siteMatches);
    if (!visible.length && state.cat !== "gallery") return "";
    var head = '<div class="section__head"><h2>Real-world examples</h2><span class="n">' + visible.length + "</span></div>" +
      '<p class="section__note">Live sites, one per style family, captured from the real page by this repo\u2019s tooling on ' + CAPTURED +
      ". The site is the source of truth — the screenshot is only a record of what it looked like. Where a site permits framing, " +
      "you can load it right here; the rest send <code>X-Frame-Options</code> or a <code>frame-ancestors</code> policy and open in a new tab. " +
      "Tags link to the matching style above.</p>";
    var body = visible.length
      ? '<div class="sites">' + visible.map(siteHTML).join("") + "</div>"
      : '<p class="section__note">No saved site matches that search.</p>';
    return '<section class="section" id="sec-gallery">' + head + body + "</section>";
  }

  /* ---------- render ---------- */
  var main = $("#catalog");
  var chips = $("#chips");
  var countLine = $("#count-line");

  function matches(e) {
    if (state.cat === "gallery") return false;
    if (state.cat !== "all" && e.cat !== state.cat) return false;
    if (!state.q) return true;
    var hay = [e.name, e.id, e.cat, e.era, stripTags(e.origin), stripTags(e.blurb), stripTags(e.traits.join(" ")), e.prompt].join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (term) { return hay.indexOf(term) !== -1; });
  }

  function render() {
    var visible = CATALOG.filter(matches);
    var sites = GALLERY.filter(siteMatches);
    var html = "";
    SECTIONS.forEach(function (s) {
      var items = visible.filter(function (e) { return e.cat === s.id; });
      if (!items.length) return;
      html += '<section class="section" id="sec-' + s.id + '">' +
        '<div class="section__head"><h2>' + s.name + '</h2><span class="n">' + items.length + "</span></div>" +
        '<p class="section__note">' + s.note + "</p>" +
        '<div class="grid">' + items.map(entryHTML).join("") + "</div>" +
      "</section>";
    });
    if (!visible.length && state.cat !== "gallery") {
      html = '<section class="section"><p class="section__note">Nothing matches that search. ' +
             "Try a material instead: glass, clay, brutal, terminal, bento.</p></section>";
    }
    html += renderSites();
    main.innerHTML = html;
    countLine.textContent = countText(visible.length, sites.length);
  }

  function countText(nStyles, nSites) {
    var filtering = state.q || state.cat !== "all";
    var bits = [];
    bits.push(filtering ? "showing " + nStyles + " of " + CATALOG.length + " styles" : CATALOG.length + " styles");
    if (GALLERY.length) bits.push(filtering ? nSites + " of " + GALLERY.length + " real sites" : GALLERY.length + " real sites");
    var tail = state.cat !== "all" && state.cat !== "gallery" ? " · " + sectionName(state.cat) : "";
    if (state.cat === "gallery") tail = " · Real-world examples";
    return bits.join(" · ") + tail + (state.q ? ' · matching "' + state.q + '"' : "");
  }

  function sectionName(id) {
    for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return SECTIONS[i].name;
    return id;
  }

  /* ---------- chips ---------- */
  function renderChips() {
    var all = '<button class="chip" type="button" data-cat="all" aria-pressed="' + (state.cat === "all") + '">' +
      "All<span class=\"chip__n\">" + CATALOG.length + "</span></button>";
    var rest = SECTIONS.map(function (s) {
      var n = CATALOG.filter(function (e) { return e.cat === s.id; }).length;
      return '<button class="chip" type="button" data-cat="' + s.id + '" aria-pressed="' + (state.cat === s.id) + '">' +
        s.name + '<span class="chip__n">' + n + "</span></button>";
    }).join("");
    var gallery = GALLERY.length
      ? '<button class="chip" type="button" data-cat="gallery" aria-pressed="' + (state.cat === "gallery") + '">' +
        "Real-world examples" + '<span class="chip__n">' + GALLERY.length + "</span></button>"
      : "";
    chips.innerHTML = all + rest + gallery;
  }

  chips.addEventListener("click", function (ev) {
    var btn = ev.target.closest(".chip");
    if (!btn) return;
    state.cat = btn.getAttribute("data-cat");
    renderChips();
    render();
  });

  /* ---------- search ---------- */
  var q = $("#q");
  var debounce;
  q.addEventListener("input", function () {
    clearTimeout(debounce);
    debounce = setTimeout(function () {
      state.q = q.value.trim().toLowerCase();
      render();
    }, 90);
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "/" && document.activeElement !== q && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      ev.preventDefault();
      q.focus();
    }
    if (ev.key === "Escape" && document.activeElement === q) {
      q.value = "";
      state.q = "";
      render();
      q.blur();
    }
  });

  /* ---------- copy ---------- */
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  var toastTimer;

  function say(msg) {
    toast.textContent = msg;
    toast.dataset.show = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.dataset.show = "0"; }, 1900);
  }

  function copy(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { say("Copied " + label); },
        function () { fallback(text, label); });
    } else {
      fallback(text, label);
    }
  }

  function fallback(text, label) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); say("Copied " + label); }
    catch (err) { say("Copy failed — select the block manually"); }
    document.body.removeChild(ta);
  }

  /* ---------- detail modal ---------- */
  var modal = $("#detail");
  var lastFocus = null;

  function findEntry(id) {
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].id === id) return CATALOG[i];
    return null;
  }

  function openDetail(id) {
    var e = findEntry(id);
    if (!e || !modal || modal.open) return;
    lastFocus = document.activeElement;
    modal.innerHTML = detailHTML(e);
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    var closeBtn = modal.querySelector("[data-close]");
    if (closeBtn) closeBtn.focus();
  }

  function runCopy(btn) {
    var e = findEntry(btn.getAttribute("data-id"));
    if (!e) return;
    var kind = btn.getAttribute("data-copy");
    if (kind === "traits") copy(traitsText(e), "traits for " + e.name);
    if (kind === "css") copy(cssText(e), "CSS for " + e.name);
    if (kind === "prompt") copy(e.prompt, "prompt for " + e.name);
  }

  if (modal) {
    /* a click that lands on the dialog itself is a backdrop click */
    modal.addEventListener("click", function (ev) {
      if (ev.target === modal || ev.target.closest("[data-close]")) { modal.close(); return; }
      var btn = ev.target.closest("[data-copy]");
      if (btn) runCopy(btn);
    });
    modal.addEventListener("close", function () {
      modal.innerHTML = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      lastFocus = null;
    });
    /* a tag link or a pasted #hash jumps straight to the detail */
    function fromHash() {
      var id = (location.hash || "").replace(/^#/, "");
      if (id && findEntry(id)) openDetail(id);
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  }

  main.addEventListener("click", function (ev) {
    var emb = ev.target.closest("[data-embed]");
    if (emb) {
      var url = emb.getAttribute("data-embed");
      var figure = emb.closest(".site").querySelector(".site__shot");
      if (figure) {
        figure.innerHTML = '<iframe src="' + url + '" title="Live view of ' + url + '" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>';
        emb.disabled = true;
        emb.textContent = "Live view loaded";
        say("Loading " + url.replace(/^https?:\/\/(www\.)?/, "") + " in place");
      }
      return;
    }
    var btn = ev.target.closest("[data-copy]");
    if (btn) { runCopy(btn); return; }
    /* the card is a summary: clicking it anywhere opens the full detail */
    var card = ev.target.closest(".entry");
    if (card && !ev.target.closest("a")) openDetail(card.getAttribute("data-id"));
  });

  /* keyboard parity for the card, which is the only way in now */
  main.addEventListener("keydown", function (ev) {
    if (ev.key !== "Enter" && ev.key !== " ") return;
    var card = ev.target.closest(".entry");
    if (!card || ev.target.closest("a, button, input, select, textarea")) return;
    ev.preventDefault();
    openDetail(card.getAttribute("data-id"));
  });

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var toggle = $("#theme-toggle");
  var themeLabel = $("#theme-label");

  function applyTheme(t) {
    state.theme = t;
    root.setAttribute("data-theme", t);
    toggle.setAttribute("aria-pressed", t === "dark");
    themeLabel.textContent = t === "dark" ? "Light surfaces" : "Dark surfaces";
    try { localStorage.setItem("catalog-theme", t); } catch (err) {}
  }

  var stored = null;
  try { stored = localStorage.getItem("catalog-theme"); } catch (err) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });

  /* ---------- the one authored interaction: press to confirm ---------- */
  main.addEventListener("pointerdown", function (ev) {
    var b = ev.target.closest(".mm-btn");
    if (b) b.classList.add("is-done");
  });
  main.addEventListener("pointerup", function () {
    setTimeout(function () {
      $$(".mm-btn.is-done").forEach(function (b) { b.classList.remove("is-done"); });
    }, 900);
  });

  /* ---------- go ---------- */
  renderChips();
  render();
})();
