/* seguiment.js — Enllaç al Seguiment (Google Doc / Drive).
 * Migrat des de m-main/common.js.
 *
 * L'adreça es llegeix de "seguiment-link.txt" (un fitxer de text pla
 * amb únicament la URL). Per canviar l'adreça, edita només aquell fitxer;
 * no cal tocar cap línia de codi.
 *
 * S'aplica a tots els elements amb l'atribut data-seguiment-doc
 * (index.html, repartiment.html, etc.).
 */
document.addEventListener('DOMContentLoaded', () => {
  fetch('seguiment-link.txt')
    .then(r => r.ok ? r.text() : Promise.reject(r.status))
    .then(text => {
      const url = text.trim();
      if (!url) return;
      document.querySelectorAll('[data-seguiment-doc]').forEach(a => {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
      });
    })
    .catch(err => console.warn('seguiment-link.txt no s\'ha pogut carregar:', err));
});
