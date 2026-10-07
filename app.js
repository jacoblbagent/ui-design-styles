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

  function entryHTML(e, i) {
    var spec = '<div class="spec spec--' + e.id + '">' + e.html + "</div>";
    var traits = e.traits.map(function (t) { return "<li>" + t + "</li>"; }).join("");
    var avoid = (e.avoid && e.avoid.length)
      ? '<h4 style="margin-top:14px">Watch out for</h4><ul>' +
        e.avoid.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>"
      : "";
    var sources = (e.sources && e.sources.length)
      ? '<p class="entry__src">Sources: ' + e.sources.map(function (u) {
          return '<a href="' + u + '" rel="noopener">' + stripTags(u).replace(/^https?:\/\//, "").replace(/\/$/, "") + "</a>";
        }).join(", ") + "</p>"
      : "";

    return '<article class="entry" id="' + e.id + '" data-id="' + e.id + '">' +
      '<div>' +
        '<h3 class="entry__title"><a href="#' + e.id + '">' + e.name + "</a></h3>" +
        '<p class="entry__meta">' + e.era + " &middot; " + stripTags(e.origin) + "</p>" +
      "</div>" +
      '<p class="entry__blurb">' + e.blurb + "</p>" +
      spec +
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
      sources +
    "</article>";
  }

  /* ---------- render ---------- */
  var main = $("#catalog");
  var chips = $("#chips");
  var countLine = $("#count-line");

  function matches(e) {
    if (state.cat !== "all" && e.cat !== state.cat) return false;
    if (!state.q) return true;
    var hay = [e.name, e.id, e.cat, e.era, stripTags(e.origin), stripTags(e.blurb), stripTags(e.traits.join(" ")), e.prompt].join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (term) { return hay.indexOf(term) !== -1; });
  }

  function render() {
    var visible = CATALOG.filter(matches);
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
    if (!visible.length) {
      html = '<section class="section"><p class="section__note">Nothing matches that search. ' +
             'Try a material instead: glass, clay, brutal, terminal, bento.</p></section>';
    }
    main.innerHTML = html;

    var showing = visible.length === CATALOG.length
      ? CATALOG.length + " styles"
      : "showing " + visible.length + " of " + CATALOG.length + " styles";
    countLine.textContent = showing + (state.cat !== "all" ? " · " + sectionName(state.cat) : "") + (state.q ? ' · matching "' + state.q + '"' : "");
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
    chips.innerHTML = all + rest;
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

  main.addEventListener("click", function (ev) {
    var btn = ev.target.closest("[data-copy]");
    if (!btn) return;
    var id = btn.getAttribute("data-id");
    var e = null;
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].id === id) e = CATALOG[i];
    if (!e) return;
    var kind = btn.getAttribute("data-copy");
    if (kind === "traits") copy(traitsText(e), "traits for " + e.name);
    if (kind === "css") copy(cssText(e), "CSS for " + e.name);
    if (kind === "prompt") copy(e.prompt, "prompt for " + e.name);
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
