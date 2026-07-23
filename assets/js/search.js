(function () {
  var input = document.querySelector('.site-nav-search');
  var results = document.querySelector('.site-nav-results');
  var list = document.querySelector('.site-nav-list');
  if (!input || !results || !list) return;

  var index = null;
  var indexPromise = null;

  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(input.dataset.indexUrl)
        .then(function (res) { return res.json(); })
        .then(function (data) { index = data; return data; });
    }
    return indexPromise;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function snippet(content, q) {
    var i = content.toLowerCase().indexOf(q);
    if (i === -1) return '';
    var start = Math.max(0, i - 40);
    var end = Math.min(content.length, i + q.length + 60);
    var text = (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
    return escapeHtml(text);
  }

  function render(query) {
    var q = query.trim().toLowerCase();
    if (!q) {
      results.hidden = true;
      list.hidden = false;
      results.innerHTML = '';
      return;
    }
    list.hidden = true;
    results.hidden = false;

    if (!index) {
      results.innerHTML = '<p class="site-nav-no-results">Loading…</p>';
      return;
    }

    var titleMatches = [];
    var contentMatches = [];
    index.forEach(function (entry) {
      var titleHit = entry.title.toLowerCase().indexOf(q) !== -1;
      var contentHit = entry.content.toLowerCase().indexOf(q) !== -1;
      if (titleHit) titleMatches.push(entry);
      else if (contentHit) contentMatches.push(entry);
    });

    var matches = titleMatches.concat(contentMatches).slice(0, 25);

    if (matches.length === 0) {
      results.innerHTML = '<p class="site-nav-no-results">No matches.</p>';
      return;
    }

    results.innerHTML = matches.map(function (entry) {
      var snip = snippet(entry.content, q);
      return '<a class="site-nav-result" href="' + entry.url + '">' +
        '<span class="site-nav-result-title">' + escapeHtml(entry.title) + '</span>' +
        (snip ? '<span class="site-nav-result-snippet">' + snip + '</span>' : '') +
        '</a>';
    }).join('');
  }

  input.addEventListener('focus', function () {
    loadIndex().then(function () { render(input.value); });
  });

  input.addEventListener('input', function () {
    if (index) {
      render(input.value);
    } else {
      loadIndex().then(function () { render(input.value); });
    }
  });
})();
