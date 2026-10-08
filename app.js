/* Renders the catalog — atlas, trait matrix, entry grid — plus search, facet
   filters, copy, the detail modal and the theme toggle.

   Classification model (replaces the old four exclusive buckets):
     - the atlas plots every style on two axes: restrained -> loud, flat -> dimensional
     - the matrix shows the recurring techniques as columns, so shared traits line up
     - the two together are the only categorisation; there are no categories.
   Both read data/facets.js. */
(function () {
  "use strict";

  var CATALOG = window.CATALOG || [];
  CATALOG.sort(function (a, b) { return a.name.localeCompare(b.name); });

  var FACETS = window.FACETS || { columns: [], styles: {} };
  var COLUMNS = FACETS.columns || [];
  var COL_OF = {};
  COLUMNS.forEach(function (c) { COL_OF[c.id] = c; });

  var KINDS = FACETS.kinds || [];
  var KIND_OF = {};
  KINDS.forEach(function (k) { KIND_OF[k.id] = k; });

  var GALLERY = (window.GALLERY && window.GALLERY.sites) || [];
  var CAPTURED = (window.GALLERY && window.GALLERY.capturedAt) || "";

  var state = { q: "", view: "all", kind: "all", facets: [], theme: "light" };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  var stripTags = function (s) { return String(s == null ? "" : s).replace(/<[^>]*>/g, ""); };

  function facetOf(id) { return FACETS.styles[id] || { v: 50, d: 50, t: {} }; }
  function kindOf(id) { return facetOf(id).k || "style"; }
  function kindLabel(id) { var k = KIND_OF[kindOf(id)]; return k ? k.one : kindOf(id); }
  function kindNote(id) { var k = KIND_OF[kindOf(id)]; return k ? k.note : ""; }
  function levelOf(id, col) { var f = facetOf(id).t || {}; return f[col] || 0; }
  function signatureOf(id) {
    var t = facetOf(id).t || {}, out = [];
    for (var i = 0; i < COLUMNS.length; i++) if (t[COLUMNS[i].id] === 2) out.push(COLUMNS[i].id);
    return out;
  }

  /* weighted overlap between two entries: shared traits over declared traits.
     A signature (2) counts double, so "both are made of this" outranks a cameo. */
  function shareScore(a, b) {
    var ta = facetOf(a).t || {}, tb = facetOf(b).t || {}, shared = 0, declared = 0;
    COLUMNS.forEach(function (c) {
      var x = ta[c.id] || 0, y = tb[c.id] || 0;
      shared += Math.min(x, y);
      declared += Math.max(x, y);
    });
    if (!declared || !shared) return 0;
    return shared / declared;
  }

  function relatives(id, n) {
    var out = [];
    CATALOG.forEach(function (e) {
      if (e.id === id) return;
      var score = shareScore(id, e.id);
      if (score <= 0) return;
      var f = facetOf(id), g = facetOf(e.id);
      var axis = Math.abs(f.v - g.v) + Math.abs(f.d - g.d);
      out.push({ id: e.id, name: e.name, score: score, axis: axis });
    });
    out.sort(function (a, b) { return b.score - a.score || a.axis - b.axis; });
    return out.slice(0, n || 3);
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
    var lines = ["## " + e.name + " (" + e.era + ")",
      kindLabel(e.id) + " — " + kindNote(e.id), "", e.blurb, "", "Traits:"];
    e.traits.forEach(function (t) { lines.push("- " + stripTags(t)); });
    if (e.avoid && e.avoid.length) {
      lines.push("", "Watch out for:");
      e.avoid.forEach(function (t) { lines.push("- " + stripTags(t)); });
    }
    var sig = signatureOf(e.id).map(function (id) { return COL_OF[id] ? COL_OF[id].label : id; });
    if (sig.length) lines.push("", "Defined by: " + sig.join(", "));
    var rel = relatives(e.id, 3).map(function (r) { return r.name; });
    if (rel.length) lines.push("Shares traits with: " + rel.join(", "));
    if (e.sources && e.sources.length) lines.push("", "Sources: " + e.sources.join(" "));
    return lines.join("\n");
  }

  function cssText(e) {
    return "/* " + e.name + " — " + e.era + "\n   " + stripTags(e.blurb) + " */\n\n" + e.css;
  }

  /* ---------- entry grid: summary only, detail lives in the modal ---------- */
  function entryHTML(e) {
    var sig = signatureOf(e.id).map(function (id) {
      return '<span class="tag tag--sig">' + (COL_OF[id] ? COL_OF[id].label : id) + "</span>";
    }).join("");
    return '<article class="entry entry--summary" id="' + e.id + '" data-id="' + e.id + '" tabindex="0" role="group" aria-label="' + esc(e.name) + ' — open details">' +
      '<div class="entry__top">' +
        '<h3 class="entry__title">' + esc(e.name) + "</h3>" +
        '<p class="entry__meta">' + esc(e.era) + "</p>" +
      "</div>" +
      '<p class="entry__tags"><span class="tag tag--kind" title="' + esc(kindNote(e.id)) + '">' + esc(kindLabel(e.id)) + "</span>" + sig + "</p>" +
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

    var f = facetOf(e.id);
    var place = '<div class="placement">' +
      '<p class="placement__axes"><span><b>Loud</b> ' + f.v + "/100</span><span><b>Dimensional</b> " + f.d + "/100</span></p>" +
      '<p class="placement__note">Read from the traits this entry declares — ' +
        '<a href="#sec-atlas" data-scroll="sec-atlas">see it placed on the atlas</a>.</p>' +
      "</div>";

    var sig = signatureOf(e.id);
    var tags = '<div class="blockhead"><h4>Made of</h4><span class="blockhead__hint">signature traits, the ones that define it</span></div>' +
      '<ul class="traitlist">' + (sig.length
        ? sig.map(function (id) {
            var c = COL_OF[id];
            return '<li><button class="tag tag--sig" type="button" data-facet="' + id + '">' +
              (c ? c.label : id) + '</button><span class="traitlist__note">' + (c ? esc(c.note) : "") + "</span></li>";
          }).join("")
        : '<li><span class="traitlist__note">A practice rather than a look: it holds no signature technique of its own.</span></li>') +
      "</ul>";

    var rel = relatives(e.id, 4);
    var related = rel.length
      ? '<div class="blockhead"><h4>Shares traits with</h4><span class="blockhead__hint">weighted overlap of declared traits</span></div>' +
        '<ul class="related">' + rel.map(function (r) {
          var pct = Math.round(r.score * 100);
          return '<li><button class="chip" type="button" data-goto="' + r.id + '">' + esc(r.name) +
            '<span class="chip__n">' + pct + "%</span></button></li>";
        }).join("") + "</ul>"
      : "";

    var all = '<details class="alltraits"><summary>Every declared trait (' + COLUMNS.length + ' facets)</summary>' +
      '<ul class="traitlist traitlist--all">' + COLUMNS.map(function (c) {
        var lv = levelOf(e.id, c.id);
        return '<li data-level="' + lv + '"><span class="dot dot--' + (lv === 2 ? "sig" : lv === 1 ? "sup" : "off") + '"></span>' +
          esc(c.label) + '<span class="traitlist__note">' + (lv === 2 ? "signature" : lv === 1 ? "supporting" : "not declared") + "</span></li>";
      }).join("") + "</ul></details>";

    return '<div class="modal__head">' +
        "<div>" +
          '<h2 class="modal__title" id="detail-title">' + esc(e.name) + "</h2>" +
          '<p class="modal__meta">' + esc(e.era) + " &middot; " + stripTags(e.origin) + "</p>" +
        "</div>" +
        '<button class="iconbtn" type="button" data-close aria-label="Close details">' + ICON_CLOSE + "</button>" +
      "</div>" +
      '<p class="modal__blurb">' + e.blurb + "</p>" +
      '<p class="modal__kind"><span class="tag tag--kind">' + esc(kindLabel(e.id)) + "</span>" +
        "<span>" + esc(kindNote(e.id)) + "</span></p>" +
      '<div class="spec spec--' + e.id + '">' + uniqueIds(e.html) + "</div>" +
      place + tags + related +
      '<div class="traits"><div class="blockhead"><h4>Traits</h4>' +
        '<button class="ghost" type="button" data-copy="traits" data-id="' + e.id + '">' + ICON_COPY + "Copy traits</button>" +
      "</div><ul>" + traits + "</ul>" + avoid + "</div>" +
      '<div class="actions">' +
        '<button class="ghost" type="button" data-copy="css" data-id="' + e.id + '">' + ICON_COPY + "Copy CSS</button>" +
        '<button class="ghost" type="button" data-copy="prompt" data-id="' + e.id + '">' + ICON_COPY + "Copy prompt</button>" +
      "</div>" +
      all +
      '<details class="code"><summary>Tokens &amp; CSS for this style</summary>' +
        "<pre><code>" + esc(cssText(e)) + "</code></pre>" +
        "<pre><code>" + esc(e.prompt) + "</code></pre>" +
      "</details>" +
      sources;
  }

  /* ---------- the atlas: two axes, every style placed ---------- */
  function axisPos(i, v, d) {
    /* Two styles share an exact position (Claymorphism/Glassmorphism, Empty
       state/Token-driven system UI) and a dozen sit within five units, so each
       dot takes a sub-one-percent offset from its authored value. That is
       inside the thickness of the mark: dots never misreport a value by a
       readable amount, and co-located styles stay visible as two marks. */
    var jx = ((i * 37) % 7 - 3) * 0.3;
    var jy = ((i * 53) % 7 - 3) * 0.3;
    var x = Math.min(100, Math.max(0, v + jx));
    var y = Math.min(100, Math.max(0, d + jy));
    /* the name is the mark now, so it starts centred on its own two values and
       only moves if it has to */
    return { x: x, y: y, side: "center" };
  }

  function atlasHTML(items) {
    /* every style is always on the map, so a filter dims the neighbourhood
       instead of deleting it */
    var dots = CATALOG.map(function (e, i) {
      var f = facetOf(e.id);
      var p = axisPos(i, f.v, f.d);
      return '<button class="atlas__name" type="button" data-id="' + e.id + '" data-side="' + p.side + '"' +
          ' data-x="' + p.x.toFixed(2) + '" data-y="' + p.y.toFixed(2) + '"' +
          ' style="left:' + p.x.toFixed(2) + '%;bottom:' + p.y.toFixed(2) + '%"' +
          ' title="' + esc(e.name) + " — " + esc(e.era) + " · loud " + f.v + "/100 · dimensional " + f.d + '/100">' +
          '<span class="atlas__lead" aria-hidden="true"></span>' + esc(e.name) +
        "</button>";
    }).join("");

    return '<section class="section" id="sec-atlas">' +
      '<div class="section__head"><h2>Atlas</h2><span class="n">' + items.length + '</span></div>' +
      '<div class="atlas">' +
        '<div class="atlas__axis atlas__axis--y" aria-hidden="true"><span>Dimensional</span><span>Flat</span></div>' +
        '<div class="atlas__plot">' +
          '<div class="atlas__grid" aria-hidden="true">' +
            '<span class="atlas__mid atlas__mid--v"></span><span class="atlas__mid atlas__mid--h"></span>' +
          "</div>" +
          '<div class="atlas__space">' + dots + "</div>" +
        "</div>" +
        '<div class="atlas__axis atlas__axis--x" aria-hidden="true"><span>Restrained</span><span>Loud</span></div>' +
        atlasLegend() +
      "</div>" +
    "</section>";
  }

  /* On a phone the plot cannot hold 43 labels side by side, so the labels come
     off and the same information is listed under the plot instead: the styles
     in axis order with their two values. Nothing is dropped. */
  function atlasLegend() {
    var rows = CATALOG.slice().sort(function (a, b) {
      var fa = facetOf(a.id), fb = facetOf(b.id);
      return fb.v - fa.v || fb.d - fa.d;
    }).map(function (e) {
      var f = facetOf(e.id);
      return '<li><button type="button" data-id="' + e.id + '">' +
        '<span class="atlas__lgname">' + esc(e.name) + "</span>" +
        '<span class="atlas__lgval" title="loud / dimensional">' + f.v + " &middot; " + f.d + "</span></button></li>";
    }).join("");
    return '<div class="atlas__legend">' +
      '<p class="atlas__lghead"><span>Style</span><span>Loud &middot; Dimensional</span></p>' +
      "<ul>" + rows + "</ul></div>";
  }

  /* Labels collide once 43 of them share one plane. Move the labels, never the
     dots: a dot stays exactly where its two values put it, and only the label
     moves — nudged along the depth axis, or flipped to the other side of its
     dot, until it clears every other label, every dot and the plot edge.
     Deterministic: same data, same layout, every load. */
  function declutterAtlas() {
    /* the narrow layout drops the labels and lists the names instead */
    if (window.innerWidth <= 640) return;
    var space = $(".atlas__space", main);
    if (!space) return;
    var pr = space.getBoundingClientRect();
    if (!pr.width || !pr.height) return;
    var placed = [];
    var offsets = [0];
    for (var k = 1; k <= 24; k++) offsets.push(-12 * k, 12 * k);

    function hits(box, pad) {
      var n = 0;
      for (var i = 0; i < placed.length; i++) {
        var q = placed[i];
        if (box.left - pad < q.right && box.right + pad > q.left && box.top - pad < q.bottom && box.bottom + pad > q.top) n++;
      }
      return n;
    }
    /* how far a box pokes out of the coordinate space, in px */
    function overflow(box) {
      return Math.max(0, pr.top - box.top) + Math.max(0, box.bottom - pr.bottom) +
             Math.max(0, pr.left - box.left) + Math.max(0, box.right - pr.right);
    }

    $$(".atlas__name", space).forEach(function (name) {
      var best = { cost: Infinity, side: name.getAttribute("data-side"), off: 0 };
      ["center", "right", "left"].forEach(function (side) {
        name.setAttribute("data-side", side);
        for (var i = 0; i < offsets.length; i++) {
          name.style.setProperty("--lnudge", offsets[i] + "px");
          var box = name.getBoundingClientRect();
          var out = overflow(box);
          /* Two names touching is the failure this pass exists to prevent, so a
             collision costs far more than travelling further to avoid one: a
             name is moved as far as it takes, and only as little as it can.
             Leaving the plot is worse still, because it breaks the axis. */
          var cost = hits(box, 2) * 1000 + Math.abs(offsets[i]) + out * 60;
          if (cost < best.cost) best = { cost: cost, side: side, off: offsets[i] };
          if (cost < 24) return; /* clear, and within a label's own height: take it */
        }
      });
      name.setAttribute("data-side", best.side);
      name.style.setProperty("--lnudge", best.off + "px");
      /* The name is the only thing drawn, so wherever it is not sitting on its
         own values a hairline runs back to the exact spot. A name centred on
         its values needs no line; one placed beside its values always needs the
         short stub across, even when it did not move vertically. */
      name.setAttribute("data-dir", best.off < 0 ? "up" : "down");
      var half = name.getBoundingClientRect().height / 2;
      var run = best.side === "center" ? Math.abs(best.off) - half - 1 : Math.abs(best.off);
      name.style.setProperty("--lead", Math.max(0, run) + "px");
      name.classList.toggle("has-lead", best.side !== "center" || run >= 2);
      placed.push(name.getBoundingClientRect());
    });
  }

  /* ---------- the trait matrix: techniques as columns ----------
     Reading a mark means knowing both its row and its column, and with 22
     rotated headers over 43 rows that trace is long. So the matrix carries
     three aids: hairline boundaries between the five groups, a repeat of the
     header every fifteen rows, and a crosshair that lights the hovered row and
     column and names the pair in a readout above the table. */
  var REPEAT_EVERY = 15;

  function matrixHTML(items) {
    function colHead(c, live) {
      var on = state.facets.indexOf(c.id) !== -1;
      var n = items.filter(function (e) { return levelOf(e.id, c.id); }).length;
      if (!live) {
        /* the repeated rows are a reading aid, not a second header: plain text,
           out of the tab order, hidden from assistive tech */
        return '<td class="matrix__col matrix__col--repeat" data-group="' + c.group + '" aria-hidden="true">' +
          '<span class="matrix__collabel">' + esc(c.label) + '</span><span class="matrix__coln">' + n + "</span></td>";
      }
      return '<th scope="col" class="matrix__col" data-group="' + c.group + '">' +
        '<button class="matrix__colbtn" type="button" data-facet="' + c.id + '" aria-pressed="' + on + '" title="' + esc(c.note) + '">' +
          '<span class="matrix__collabel">' + esc(c.label) + '</span><span class="matrix__coln">' + n + "</span>" +
        "</button></th>";
    }

    var head = COLUMNS.map(function (c) { return colHead(c, true); }).join("");
    var repeatHead = '<tr class="matrix__repeat" aria-hidden="true">' +
      '<td class="matrix__row matrix__row--repeat">Style</td>' +
      COLUMNS.map(function (c) { return colHead(c, false); }).join("") +
      '<td class="matrix__near matrix__near--repeat">Shares with</td></tr>';

    var rows = [];
    items.forEach(function (e) {
      var cells = COLUMNS.map(function (c) {
        var lv = levelOf(e.id, c.id);
        var on = state.facets.indexOf(c.id) !== -1;
        return '<td class="matrix__cell" data-level="' + lv + '" data-on="' + on + '" data-group="' + c.group + '" data-facet="' + c.id + '">' +
          '<button type="button" data-facet="' + c.id + '" ' + (lv ? "" : "tabindex=\"-1\" ") +
            'aria-label="' + esc(e.name) + ": " + esc(c.label) + " — " +
            (lv === 2 ? "signature trait" : lv === 1 ? "supporting trait" : "not declared") + '">' +
            '<span class="dot dot--' + (lv === 2 ? "sig" : lv === 1 ? "sup" : "off") + '"></span>' +
          "</button></td>";
      }).join("");
      var rel = relatives(e.id, 1)[0];
      rows.push('<tr id="row-' + e.id + '">' +
        '<th scope="row" class="matrix__row"><button type="button" data-id="' + e.id + '">' + esc(e.name) + "</button></th>" +
        cells +
        '<td class="matrix__near">' + (rel
          ? '<button type="button" data-goto="' + rel.id + '">' + esc(rel.name) + " <span>" + Math.round(rel.score * 100) + "%</span></button>"
          : "<span class=\"muted\">—</span>") + "</td>" +
      "</tr>");
      /* a repeat of the column labels, so no mark is ever more than a few rows
         from the text that names its column */
      if ((rows.length % REPEAT_EVERY) === 0 && rows.length < items.length) rows.push(repeatHead);
    });

    return '<section class="section" id="sec-matrix">' +
      '<div class="section__head"><h2>Trait matrix</h2><span class="n">' + items.length + " &times; " + COLUMNS.length + "</span></div>" +
      '<div class="matrix__legend"><span><span class="dot dot--sig"></span>signature</span><span><span class="dot dot--sup"></span>supporting</span>' +
        "<span><span class=\"dot dot--off\"></span>not declared</span><span>last column: closest neighbour by trait overlap</span></div>" +
      '<div class="matrix__body">' +
      '<div class="matrix__scroll"><table class="matrix">' +
        '<thead><tr><th scope="col" class="matrix__corner">Style</th>' + head + '<th scope="col" class="matrix__nearhead">Shares with</th></tr></thead>' +
        "<tbody>" + rows.join("") + "</tbody>" +
      "</table></div>" +
      /* the bar is sticky while the matrix is on screen: the readout names the
         mark, and the clear control sits beside it, so the way out of a filter
         is always where the filters were applied. It lives inside the body
         wrapper so the narrow layout can lift it above the table. */
      '<div class="matrix__bar">' +
        '<p class="matrix__readout" id="matrix-readout" role="status" aria-live="polite">' +
          '<span class="matrix__ro-hint">Hover or focus a mark — its row and column light up, and the pair is named here.</span>' +
        "</p>" +
        ((state.facets.length || state.kind !== "all")
          ? '<button class="ghost ghost--tiny matrix__clear" type="button" data-clear-filters>Clear all filters</button>'
          : "") +
      "</div>" +
      "</div>" +
    "</section>";
  }

  /* ---------- real-world examples ---------- */
  function styleLink(tag) {
    var e = null;
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].id === tag || CATALOG[i].name.toLowerCase() === tag.toLowerCase()) e = CATALOG[i];
    if (!e) return '<span class="site__tag">' + esc(tag) + "</span>";
    return '<a href="#' + e.id + '">' + esc(e.name) + "</a>";
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
        '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + esc(s.name) + ' in a new tab">' +
          '<img src="images/examples/' + s.id + '.jpg" alt="Homepage of ' + esc(s.name) + ' as captured on ' + CAPTURED + '" width="720" height="450" loading="lazy" decoding="async">' +
          '<span class="site__open">Open live site</span>' +
        "</a>" +
      "</figure>" +
      '<div class="site__body">' +
        '<h3 class="site__title"><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + "</a></h3>" +
        '<p class="site__meta">' + esc(s.domain) + " &middot; captured " + CAPTURED + "</p>" +
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
    if (state.view !== "all" && state.view !== "gallery") return false;
    if (!state.q) return true;
    var hay = [s.name, s.domain, s.url, (s.tags || []).join(" "), (s.look || []).join(" ")].join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (t) { return hay.indexOf(t) !== -1; });
  }

  function renderSites() {
    var visible = GALLERY.filter(siteMatches);
    if (!visible.length && state.view !== "gallery") return "";
    var head = '<div class="section__head"><h2>Real-world examples</h2><span class="n">' + visible.length + "</span></div>";
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
    if (state.view === "gallery") return false;
    if (state.kind !== "all" && kindOf(e.id) !== state.kind) return false;
    for (var i = 0; i < state.facets.length; i++) {
      if (!levelOf(e.id, state.facets[i])) return false;
    }
    if (!state.q) return true;
    var hay = [e.name, e.id, e.era, stripTags(e.origin), stripTags(e.blurb), stripTags(e.traits.join(" ")), e.prompt,
      signatureOf(e.id).map(function (id) { return COL_OF[id] ? COL_OF[id].label + " " + COL_OF[id].note : id; }).join(" "),
      kindOf(e.id), kindLabel(e.id), kindNote(e.id)
    ].join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (term) { return hay.indexOf(term) !== -1; });
  }

  function filterNote(visible) {
    if (!state.facets.length && state.kind === "all") return "";
    var bits = [];
    if (state.kind !== "all" && KIND_OF[state.kind]) bits.push(KIND_OF[state.kind].label);
    if (state.facets.length) bits.push(state.facets.map(function (id) { return COL_OF[id] ? COL_OF[id].label : id; }).join(" + "));
    var labels = bits.join(" + ");
    var listed = visible.slice(0, 8).map(function (e) { return esc(e.name); });
    var more = visible.length > listed.length ? " and " + (visible.length - listed.length) + " more" : "";
    return '<p class="filterline"><b>' + esc(labels) + "</b> — " +
      (visible.length ? listed.join(", ") + more : "nothing in the catalog is all of those at once") +
      ' <button class="ghost ghost--tiny" type="button" id="clear-facets">Clear</button></p>';
  }

  function render() {
    var visible = CATALOG.filter(matches);
    var sites = GALLERY.filter(siteMatches);
    var html = "";

    if (state.view !== "gallery") {
      html += atlasHTML(visible);
      html += matrixHTML(visible);
      html += '<section class="section" id="sec-all">' +
        '<div class="section__head"><h2>Every entry</h2><span class="n">' + visible.length + "</span></div>" +
        filterNote(visible) +
        (visible.length
          ? '<div class="grid">' + visible.map(entryHTML).join("") + "</div>"
          : '<p class="section__note">Nothing matches that search. Try a material instead: glass, clay, brutal, terminal, bento.</p>') +
      "</section>";
    }

    html += renderSites();
    clearCrosshair();
    main.innerHTML = html;
    countLine.textContent = countText(visible.length, sites.length);
    if (state.view !== "gallery") {
      declutterAtlas();
      /* a facet filter dims the styles that fall outside it, so the
         neighbourhood of a filtered style stays visible */
      if (state.facets.length || state.q || state.kind !== "all") {
        $$(".atlas__name", main).forEach(function (b) {
          if (!isVisible(b.getAttribute("data-id"))) b.classList.add("is-dim");
        });
        /* the narrow layout lists the names instead of plotting them, so the
           same dimming rule applies to that list */
        $$(".atlas__legend button", main).forEach(function (b) {
          if (!isVisible(b.getAttribute("data-id"))) b.classList.add("is-dim");
        });
      }
      /* label widths change when the webfont swaps in, which moves the layout */
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { declutterAtlas(); });
    }
  }

  function getEntry(id) {
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].id === id) return CATALOG[i];
    return null;
  }
  function isVisible(id) {
    var e = getEntry(id);
    return !!e && matches(e);
  }

  function countText(nStyles, nSites) {
    var filtering = state.q || state.view !== "all" || state.facets.length || state.kind !== "all";
    var bits = [];
    bits.push(filtering ? "showing " + nStyles + " of " + CATALOG.length + " entries" : CATALOG.length + " entries");
    if (GALLERY.length) bits.push(filtering ? nSites + " of " + GALLERY.length + " real sites" : GALLERY.length + " real sites");
    if (state.kind !== "all") bits.push(KIND_OF[state.kind] ? KIND_OF[state.kind].label : state.kind);
    if (state.facets.length) bits.push(state.facets.map(function (id) { return COL_OF[id] ? COL_OF[id].label : id; }).join(" + "));
    if (state.view === "gallery") bits.push("Real-world examples");
    return bits.join(" · ") + (state.q ? ' · matching "' + state.q + '"' : "");
  }

  /* ---------- chips: the filter state, not the whole vocabulary ----------
     The vocabulary is the matrix: its columns carry the counts and are the
     filter controls. Repeating all 22 of them up here doubled the sticky
     header and said the same thing twice, so the chip row only carries what
     the matrix cannot: All, the gallery, and whichever facets are switched on. */
  function renderChips() {
    /* the coarse filter: what kind of thing is this, before which of its traits
       it happens to declare */
    var all = '<button class="chip chip--kind" type="button" data-kind="all" aria-pressed="' + (state.kind === "all") + '">' +
      "Everything<span class=\"chip__n\">" + CATALOG.length + "</span></button>";
    var kindChips = KINDS.map(function (k) {
      var n = CATALOG.filter(function (e) { return kindOf(e.id) === k.id; }).length;
      return '<button class="chip chip--kind" type="button" data-kind="' + k.id + '" aria-pressed="' + (state.kind === k.id) + '" title="' + esc(k.note) + '">' +
        esc(k.label) + '<span class="chip__n">' + n + "</span></button>";
    }).join("");
    var active = state.facets.map(function (id) {
      var c = COL_OF[id];
      var n = CATALOG.filter(function (e) { return levelOf(e.id, id); }).length;
      return '<button class="chip" type="button" data-facet="' + id + '" aria-pressed="true" title="' + esc(c ? c.note : "") + '">' +
        esc(c ? c.label : id) + '<span class="chip__n">' + n + "</span>" +
        '<span class="chip__x" aria-hidden="true">&times;</span></button>';
    }).join("");
    var clear = (state.facets.length > 1 || (state.kind !== "all" && state.facets.length))
      ? '<button class="chip chip--clear" type="button" data-clear-facets>Clear all</button>'
      : "";
    var gallery = GALLERY.length
      ? '<button class="chip" type="button" data-view="gallery" aria-pressed="' + (state.view === "gallery") + '">' +
        "Real-world examples" + '<span class="chip__n">' + GALLERY.length + "</span></button>"
      : "";
    chips.innerHTML = all + kindChips + gallery + active + clear;
  }

  function toggleFacet(id) {
    var i = state.facets.indexOf(id);
    if (i === -1) state.facets.push(id);
    else state.facets.splice(i, 1);
  }

  chips.addEventListener("click", function (ev) {
    var btn = ev.target.closest(".chip");
    if (!btn) return;
    if (btn.hasAttribute("data-clear-facets")) {
      /* one control, and it clears both halves of the filter */
      state.facets = [];
      state.kind = "all";
    } else if (btn.hasAttribute("data-facet")) {
      toggleFacet(btn.getAttribute("data-facet"));
      state.view = "all";
    } else if (btn.hasAttribute("data-kind")) {
      state.kind = btn.getAttribute("data-kind");
      state.view = "all";
    } else {
      state.view = btn.getAttribute("data-view");
      if (state.view === "gallery") state.facets = [];
    }
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

  function showDetail(e) {
    modal.innerHTML = detailHTML(e);
    if (typeof modal.showModal === "function") { if (!modal.open) modal.showModal(); }
    else modal.setAttribute("open", "");
    var closeBtn = modal.querySelector("[data-close]");
    if (closeBtn) closeBtn.focus();
    try { history.replaceState(null, "", "#" + e.id); } catch (err) { location.hash = e.id; }
  }

  /* The hash is only there so an open entry can be linked to. Once the dialog
     is dismissed the address should go back to being the page, not a style you
     are no longer looking at. replaceState keeps it out of the history, and it
     does not fire hashchange, so nothing reopens. */
  function clearHash() {
    var id = (location.hash || "").replace(/^#/, "");
    if (!id || !getEntry(id)) return;
    try { history.replaceState(null, "", location.pathname + location.search); }
    catch (err) { location.hash = ""; }
  }

  function openDetail(id) {
    var e = getEntry(id);
    if (!e || !modal) return;
    lastFocus = document.activeElement;
    showDetail(e);
  }

  function runCopy(btn) {
    var e = getEntry(btn.getAttribute("data-id"));
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
      var scrollTo = ev.target.closest("[data-scroll]");
      if (scrollTo) {
        /* the atlas sits behind the dialog, so close first, then go there */
        ev.preventDefault();
        var dest = $("#" + scrollTo.getAttribute("data-scroll"));
        modal.close();
        if (dest) dest.scrollIntoView({ block: "start" });
        return;
      }
      var go = ev.target.closest("[data-goto]");
      if (go) {
        var target = getEntry(go.getAttribute("data-goto"));
        if (target) showDetail(target);
        return;
      }
      var facet = ev.target.closest("[data-facet]");
      if (facet) {
        toggleFacet(facet.getAttribute("data-facet"));
        renderChips();
        render();
        say("Filtering by " + (COL_OF[facet.getAttribute("data-facet")] || {}).label);
        return;
      }
      var btn = ev.target.closest("[data-copy]");
      if (btn) runCopy(btn);
    });
    modal.addEventListener("close", function () {
      modal.innerHTML = "";
      clearHash();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      lastFocus = null;
    });
    /* a tag link or a pasted #hash jumps straight to the detail */
    function fromHash() {
      var id = (location.hash || "").replace(/^#/, "");
      if (id && getEntry(id)) openDetail(id);
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  }

  main.addEventListener("click", function (ev) {
    var clearBtn = ev.target.closest("#clear-facets, [data-clear-facets], [data-clear-filters]");
    if (clearBtn) {
      /* the section line names the kind as well as the traits, so Clear clears
         everything it just listed */
      state.facets = [];
      state.kind = "all";
      renderChips();
      render();
      return;
    }

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

    var facet = ev.target.closest("[data-facet]");
    if (facet) {
      toggleFacet(facet.getAttribute("data-facet"));
      renderChips();
      render();
      return;
    }

    var go = ev.target.closest("[data-goto]");
    if (go) { openDetail(go.getAttribute("data-goto")); return; }

    var btn = ev.target.closest("[data-copy]");
    if (btn) { runCopy(btn); return; }

    /* a point on the atlas, or a card in the grid, opens the full detail */
    var target = ev.target.closest(".atlas__name, .entry, .atlas__legend button");
    if (target && !ev.target.closest("a")) openDetail(target.getAttribute("data-id"));
  });

  /* keyboard parity for the atlas points and the cards */
  main.addEventListener("keydown", function (ev) {
    if (ev.key !== "Enter" && ev.key !== " ") return;
    var el = ev.target.closest(".atlas__name, .entry, .atlas__legend button");
    if (!el || ev.target.closest("a, button:not(.atlas__name), input, select, textarea")) return;
    ev.preventDefault();
    openDetail(el.getAttribute("data-id"));
  });

  /* ---------- matrix crosshair: name the row and the column under the pointer ---------- */
  var lastHot = null, hotNodes = [];

  function clearCrosshair() {
    hotNodes.forEach(function (n) { n.classList.remove("is-hotrow", "is-hotcol"); });
    hotNodes = [];
    lastHot = null;
  }

  function setCrosshair(cell) {
    if (cell === lastHot) return;
    clearCrosshair();
    lastHot = cell;
    var table = cell.closest("table");
    var tr = cell.closest("tr");
    if (!table || !tr) return;
    var idx = cell.cellIndex;
    tr.classList.add("is-hotrow");
    hotNodes.push(tr);
    var heads = table.tHead ? table.tHead.rows[0].cells : [];
    var head = heads[idx];
    if (head) { head.classList.add("is-hotcol"); hotNodes.push(head); }
    var body = table.tBodies[0];
    if (body) {
      for (var i = 0; i < body.rows.length; i++) {
        var row = body.rows[i];
        if (row.classList.contains("matrix__repeat")) continue;
        var peer = row.cells[idx];
        if (peer) { peer.classList.add("is-hotcol"); hotNodes.push(peer); }
      }
    }
    var ro = $("#matrix-readout");
    var nameBtn = tr.querySelector(".matrix__row button");
    var col = COL_OF[cell.getAttribute("data-facet")];
    var lv = cell.getAttribute("data-level");
    if (ro) {
      ro.innerHTML = "<b>" + esc(nameBtn ? nameBtn.textContent : "") + "</b>" +
        '<span class="matrix__ro-sep">·</span><b>' + esc(col ? col.label : "") + "</b>" +
        '<span class="matrix__ro-state">' +
          (lv === "2" ? "signature trait" : lv === "1" ? "supporting trait" : "not declared") + "</span>" +
        '<span class="matrix__ro-click">' + (lv ? "click to filter by this trait" : "click to filter by this trait anyway") + "</span>";
    }
  }

  main.addEventListener("pointerover", function (ev) {
    var cell = ev.target.closest(".matrix__cell");
    if (cell) setCrosshair(cell);
  });
  main.addEventListener("pointerout", function (ev) {
    if (!main.contains(ev.relatedTarget)) clearCrosshair();
  });
  main.addEventListener("focusin", function (ev) {
    var cell = ev.target.closest(".matrix__cell");
    if (cell) setCrosshair(cell);
  });
  main.addEventListener("focusout", function (ev) {
    if (!main.contains(ev.relatedTarget)) clearCrosshair();
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

  /* the masthead is sticky and its height depends on how the facet chips wrap,
     so publish it: anything scrolled to must clear the header, not hide under it */
  var masthead = $(".masthead");
  function setMastheadHeight() {
    if (masthead) document.documentElement.style.setProperty("--masthead-h", masthead.offsetHeight + "px");
  }
  setMastheadHeight();
  window.addEventListener("load", setMastheadHeight);
  /* past the first screen the header sheds its intro lines and title size; the
     published height is refreshed so scroll targets still clear it */
  var tight = false;
  window.addEventListener("scroll", function () {
    var should = window.scrollY > 80;
    if (should === tight) return;
    tight = should;
    if (masthead) masthead.classList.toggle("is-tight", should);
    setMastheadHeight();
  }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setMastheadHeight);

  /* a wider or narrower window is a different plot, so re-place the labels */
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { declutterAtlas(); setMastheadHeight(); }, 160);
  });

  /* ---------- go ---------- */
  renderChips();
  render();
})();
