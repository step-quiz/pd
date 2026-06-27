/* index-menu.js — Comportament del desplegable "Continguts" de l'índex.
 * Reprodueix el patró de m-main/index.html (obrir/tancar, tancar en clicar
 * fora o un ítem, i accessibilitat amb aria-expanded). */
(function () {
  const wrap = document.getElementById('continguts-wrap');
  const btn  = document.getElementById('continguts-btn');
  const menu = document.getElementById('continguts-menu');
  if (!wrap || !btn || !menu) return;

  function toggle(force) {
    const open = force !== undefined ? force : menu.hidden;
    if (open) {
      menu.hidden = false;
      wrap.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      menu.hidden = true;
      wrap.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();
    toggle();
  });

  // Tancar el menú en clicar un ítem.
  menu.addEventListener('click', e => {
    if (e.target.closest('.config-item')) toggle(false);
  });

  // Clic fora → tanca.
  document.addEventListener('click', e => {
    if (!menu.hidden && !wrap.contains(e.target)) toggle(false);
  });

  // Escape → tanca.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !menu.hidden) toggle(false);
  });
})();
