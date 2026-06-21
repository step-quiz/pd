/* utils.js — utilitats sense estat.
   Exposa (globals): escHtml(s), fileExists(url), fetchJson(url). */

/* Escapa text per inserir-lo de manera segura dins de HTML. */
function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

/* Comprova si un fitxer existeix (HEAD; fallback a GET si el servidor no admet HEAD). */
async function fileExists(url) {
  try {
    let r = await fetch(url, { method: 'HEAD' });
    if (r.ok) return true;
    if (r.status === 405 || r.status === 501) { r = await fetch(url); return r.ok; }
    return false;
  } catch (_) { return false; }
}

/* Llegeix un JSON. `opts` es passa tal qual a fetch (p. ex. { cache: 'no-store' }).
   Retorna l'objecte parsejat o null si falla. */
async function fetchJson(url, opts) {
  try {
    const r = await fetch(url, opts);
    if (!r.ok) return null;
    return await r.json();
  } catch (_) {
    return null;
  }
}
