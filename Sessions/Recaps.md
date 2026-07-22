---
title: "Session Recaps"
---

# Session Recaps

Every session of the current campaign, [Campaign 5: Loss, Legacy, and Lament](Campaign%205%20-%20Loss,%20Legacy,%20and%20Lament%20-%20Overall%20Summary). Each link jumps to that session's section in the full campaign summary.

<button id="recap-sort-toggle" class="recap-sort-toggle" type="button" aria-label="Toggle recap order">Oldest first ↓</button>

| Session | Recap |
|---|---|
| [Session 0.5 — The Reunion at the Cat's Pajamas](Campaign%205%20-%20Loss,%20Legacy,%20and%20Lament%20-%20Overall%20Summary#session-05--the-reunion-at-the-cats-pajamas) | The Worldcrafter Teyou Zhiang dies mid-drink at a century-old reunion, leaving behind a will, a prophecy, and the first sign of a new era. |
| [Session 1 — The Broken Blade](Campaign%205%20-%20Loss,%20Legacy,%20and%20Lament%20-%20Overall%20Summary#session-1--the-broken-blade) | A goblin possessed by a shattered Tychonium shard attacks a beggar trapped in a time loop — and Feit's name resurfaces for the first time in two thousand years. |
| [Session 2 — Before Me Is Death](Campaign%205%20-%20Loss,%20Legacy,%20and%20Lament%20-%20Overall%20Summary#session-2--before-me-is-death) | 702 confesses two thousand years of guilt just before the party finds a goblin camp slaughtered to the last — save one orphaned survivor they refuse to leave behind. |
{: #recap-table}

<script>
(function () {
  var btn = document.getElementById('recap-sort-toggle');
  var table = document.getElementById('recap-table');
  if (!btn || !table) return;
  var tbody = table.querySelector('tbody');
  var ascending = true;
  btn.addEventListener('click', function () {
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    rows.reverse();
    rows.forEach(function (row) { tbody.appendChild(row); });
    ascending = !ascending;
    btn.textContent = ascending ? 'Oldest first ↓' : 'Most recent first ↑';
  });
})();
</script>

---

[Back to the current campaign wiki](../).
