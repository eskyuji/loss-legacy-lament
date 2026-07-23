(function () {
  var nav = document.querySelector('[data-nav]');
  if (!nav) return;

  var toggle = nav.querySelector('.site-nav-toggle');
  var tree = nav.querySelector('.site-nav-tree');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    localStorage.setItem('nav-open', open ? '1' : '0');
  }

  setOpen(localStorage.getItem('nav-open') === '1');

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !nav.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
    }
  });

  // If the open drawer currently overlaps the main content column (narrow
  // viewports), close it on navigation so the next page load isn't hidden
  // behind it. On wide viewports, where the drawer only ever covers empty
  // margin, leave it open — it persists across pages as usual.
  tree.addEventListener('click', function (e) {
    if (!e.target.closest('a')) return;
    var main = document.querySelector('main.page');
    if (main && tree.getBoundingClientRect().right > main.getBoundingClientRect().left) {
      setOpen(false);
    }
  });

  nav.querySelectorAll('[data-nav-group]').forEach(function (group) {
    var key = 'nav-group-' + group.getAttribute('data-nav-group');
    var groupToggle = group.querySelector('.site-nav-group-toggle');
    var list = group.querySelector('.site-nav-group-list');

    function setExpanded(expanded) {
      group.classList.toggle('is-expanded', expanded);
      groupToggle.setAttribute('aria-expanded', String(expanded));
      list.hidden = !expanded;
      localStorage.setItem(key, expanded ? '1' : '0');
    }

    setExpanded(localStorage.getItem(key) === '1');

    groupToggle.addEventListener('click', function () {
      setExpanded(!group.classList.contains('is-expanded'));
    });
  });
})();
