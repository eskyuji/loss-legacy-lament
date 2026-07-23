(function () {
  var entries = Array.prototype.slice.call(document.querySelectorAll('.recap-entry'));
  if (entries.length === 0) return;

  entries.forEach(function (entry, i) {
    entry.dataset.recapKey = 'recap-open:' + location.pathname + ':' + i;
    entry.open = localStorage.getItem(entry.dataset.recapKey) === '1';
  });

  var expandToggle;

  function refreshExpandLabel() {
    if (!expandToggle) return;
    var allOpen = entries.every(function (e) { return e.open; });
    expandToggle.textContent = allOpen ? 'Collapse all' : 'Expand all';
  }

  entries.forEach(function (entry) {
    entry.addEventListener('toggle', function () {
      localStorage.setItem(entry.dataset.recapKey, entry.open ? '1' : '0');
      refreshExpandLabel();
    });
  });

  // Deep-link support: if the URL hash targets an element inside a recap
  // entry (or the entry itself), force that entry open and scroll to it.
  if (location.hash) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      var container = target.closest('.recap-entry');
      if (container) {
        container.open = true;
        localStorage.setItem(container.dataset.recapKey, '1');
        requestAnimationFrame(function () {
          target.scrollIntoView();
        });
      }
    }
  }

  // Skip on Recaps.md (identified by #recap-list) — each entry links out to
  // its own full session page there instead, so "expand all" isn't useful.
  if (entries.length > 1 && !document.getElementById('recap-list')) {
    expandToggle = document.createElement('button');
    expandToggle.type = 'button';
    expandToggle.className = 'recap-expand-toggle';
    entries[0].parentNode.insertBefore(expandToggle, entries[0]);
    refreshExpandLabel();

    expandToggle.addEventListener('click', function () {
      var shouldOpen = !entries.every(function (e) { return e.open; });
      entries.forEach(function (entry) {
        entry.open = shouldOpen;
        localStorage.setItem(entry.dataset.recapKey, shouldOpen ? '1' : '0');
      });
      refreshExpandLabel();
    });
  }

  // Recaps.md-specific: most-recent-first sort toggle. No-op elsewhere.
  var sortBtn = document.getElementById('recap-sort-toggle');
  var list = document.getElementById('recap-list');
  if (sortBtn && list) {
    function reverseList() {
      // Only reorder the recap entries themselves — leave the injected
      // "Expand all" button (or anything else in the list) where it is.
      var children = Array.prototype.slice.call(list.querySelectorAll(':scope > .recap-entry'));
      children.reverse();
      children.forEach(function (child) { list.appendChild(child); });
    }
    // Source order is oldest-first; reverse once so most-recent-first is the default view.
    reverseList();
    var ascending = false;
    sortBtn.addEventListener('click', function () {
      reverseList();
      ascending = !ascending;
      sortBtn.textContent = ascending ? 'Oldest first ↓' : 'Most recent first ↑';
    });
  }
})();
