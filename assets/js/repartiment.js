/* repartiment.js — Lògica de la pàgina "Repartiment de continguts".
 * Migrat des de m-main/repartiment.html.
 * Depèn de: repartiment-data.js (SENTITS, CLASSES, REPARTIMENT,
 *           i opcionalment CONTINGUTS_ACTIVITATS) i utils.js (escHtml),
 *           carregats abans que aquest script.
 * El catàleg de materials (manifest.json) és opcional: si no existeix,
 * la pàgina funciona igual sense les icones d'enllaç al catàleg. */

/* ─── CONFIG ──────────────────────────────────────────────────────── */
const CURS_ORDER  = ['1ESO', '2ESO', '3ESO', '4ESO'];
const CURS_LABELS = { '1ESO':'1r ESO', '2ESO':'2n ESO', '3ESO':'3r ESO', '4ESO':'4t ESO' };

/* ─── STATE ───────────────────────────────────────────────────────── */
let activeCurs = '1ESO';

/* ─── RENDER ──────────────────────────────────────────────────────── */

function renderTabs() {
  document.getElementById('tabsBar').innerHTML = CURS_ORDER.map(c => {
    const d = REPARTIMENT[c];
    return `<div class="ctab${c===activeCurs?' active':''}" data-curs="${c}">
      ${escHtml(CURS_LABELS[c])}
      <span class="h-badge">${d.hores_any}h</span>
    </div>`;
  }).join('');
}

function renderMain() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  for (const curs of CURS_ORDER) {
    main.appendChild(buildCursView(curs));
  }
}

function buildCursView(curs) {
  const d = REPARTIMENT[curs];
  const div = document.createElement('div');
  div.className = 'cview' + (curs === activeCurs ? ' active' : '');
  div.id = 'cv-' + curs;

  let html = `<div class="cview-header">
    <h2>${escHtml(d.label)}</h2>
    <span class="meta">${d.hores_any}h anuals &mdash; ${escHtml(d.hores_info)}</span>
  </div>`;

  for (const bloc of d.blocs) {
    const sm = SENTITS[bloc.sentit];
    const sid = `${curs}__${bloc.sentit}`;
    html += `<div class="s-section ${bloc.sentit}" id="ss-${sid}">
      <div class="s-header ${bloc.sentit}" data-sid="${sid}">
        <div class="s-dot"></div>
        <div class="s-label">${escHtml(sm.label)}</div>
        <div class="s-hores">${bloc.hores}h</div>
        <span class="s-chevron">▶</span>
      </div>
      <div class="s-body">
        <table class="tema-table">
          <colgroup><col/><col/></colgroup>
          <thead><tr><th>Tema</th><th style="text-align:right">Hores</th></tr></thead>
          <tbody>
          ${bloc.temes.map(t => buildTemaRow(curs, bloc.sentit, t)).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
  }

  div.innerHTML = html;
  return div;
}

function buildTemaRow(curs, sentit, t) {
  const rid = `${curs}__${sentit}__${t.id}`;
  const linkMap = (typeof CONTINGUTS_ACTIVITATS !== 'undefined' ? CONTINGUTS_ACTIVITATS : {})[`${sentit}/${t.id}`] || {};
  const items = t.continguts.map((c, i) => {
    const acts = linkMap[i + 1] || [];
    const da = acts.length ? ` data-act="${escHtml(acts.join(','))}"` : '';
    return `<li${da}><span class="cont-num">${i+1}.</span><span>${escHtml(c)}</span></li>`;
  }).join('');
  return `<tr class="tema-row">
    <td>
      <div class="tema-toggle" data-rid="${rid}">
        <span class="tema-caret">▶</span>
        <span class="tema-name">${escHtml(t.label)}</span>
      </div>
      <ul class="cont-list" id="cl-${rid}">${items}</ul>
    </td>
    <td class="hores-td">${t.hores}h</td>
  </tr>`;
}

/* ─── ACTIONS ─────────────────────────────────────────────────────── */

function switchCurs(curs) {
  activeCurs = curs;
  document.querySelectorAll('.ctab').forEach(t =>
    t.classList.toggle('active', t.dataset.curs === curs));
  document.querySelectorAll('.cview').forEach(v =>
    v.classList.toggle('active', v.id === 'cv-' + curs));
}

function toggleSection(sid) {
  const sec = document.getElementById('ss-' + sid);
  sec.classList.toggle('open');
}

function toggleTema(rid) {
  const tog = document.querySelector(`.tema-toggle[data-rid="${rid}"]`);
  const list = document.getElementById('cl-' + rid);
  const open = tog.classList.toggle('open');
  list.classList.toggle('open', open);
}

/* ─── EVENTS ──────────────────────────────────────────────────────── */

document.getElementById('tabsBar').addEventListener('click', e => {
  const tab = e.target.closest('.ctab');
  if (tab) switchCurs(tab.dataset.curs);
});

document.getElementById('main').addEventListener('click', e => {
  // Edit mode: intercept action buttons before anything else
  if (isEditing && handleEditClick(e)) return;

  // Section header toggle (ignore clicks on inputs / buttons)
  const hdr = e.target.closest('.s-header');
  if (hdr && !e.target.closest('input, button')) { toggleSection(hdr.dataset.sid); return; }

  // Tema expand/collapse (read mode only — in edit mode continguts are always visible)
  if (!isEditing) {
    const tog = e.target.closest('.tema-toggle');
    if (tog) { toggleTema(tog.dataset.rid); }
  }
});

document.getElementById('main').addEventListener('input', e => {
  if (isEditing) handleEditInput(e);
});

/* ─── ENLLAÇOS AL CATÀLEG ─────────────────────────────────────────────
 * Per a cada contingut amb activitats mapades (data-act), mira si el
 * catàleg (manifest.json) té materials d'aquelles activitats i, si en té,
 * hi posa una icona que obre el cercador filtrat. Si el manifest no es pot
 * carregar (p. ex. obrint amb file://), no apareix cap icona i la pàgina
 * continua funcionant igual. */
function applyMaterialLinks(manifest) {
  const byAct = {};
  for (const f of (manifest.files || [])) {
    for (const a of (f.activities || [])) {
      (byAct[a] = byAct[a] || new Set()).add(f.id);
    }
  }
  document.querySelectorAll('#main li[data-act]').forEach(li => {
    const acts = li.dataset.act.split(',').filter(Boolean);
    const ids = new Set();
    acts.forEach(a => { if (byAct[a]) byAct[a].forEach(id => ids.add(id)); });
    const n = ids.size;
    if (!n) return;                       // cap material al catàleg → cap icona
    const qs = new URLSearchParams({ mode: 'advanced', activity: acts.join(',') });
    const url = 'index.html?' + qs.toString();
    const lbl = `${n} ${n === 1 ? 'material' : 'materials'} al catàleg · obre el cercador filtrat`;
    li.classList.add('has-mat');
    li.insertAdjacentHTML('afterbegin',
      `<a class="cont-mat" href="${url}" target="_blank" rel="noopener" title="${escHtml(lbl)}" aria-label="${escHtml(lbl)}">`
      + `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M4 2.5h4.5L12.5 6.5v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"/><path d="M8.5 2.5v4h4"/></svg>`
      + `</a>`);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   MODE EDICIÓ — estat, operacions, renderització i descàrrega
   ═══════════════════════════════════════════════════════════════════ */

/* ─── Estat ───────────────────────────────────────────────────────── */
let editData = null;   // còpia mutable de REPARTIMENT durant l'edició
let isEditing = false;
let _movePending = null; // { curs, sentit, tid } mentre el modal està obert

/* ─── Start / stop ────────────────────────────────────────────────── */
function startEdit() {
  editData = JSON.parse(JSON.stringify(REPARTIMENT));
  isEditing = true;
  document.body.classList.add('is-editing');
  renderMainEdit();
}

function stopEdit() {
  const dirty = JSON.stringify(editData) !== JSON.stringify(REPARTIMENT);
  if (dirty && !confirm('Hi ha canvis que no heu descarregat. Sortir igualment?')) return;
  editData = null;
  isEditing = false;
  document.body.classList.remove('is-editing');
  renderMain();
  REPARTIMENT[activeCurs].blocs.forEach(b =>
    document.getElementById(`ss-${activeCurs}__${b.sentit}`)?.classList.add('open'));
  fetch('manifest.json').then(r => r.ok ? r.json() : null)
    .then(m => { if (m) applyMaterialLinks(m); }).catch(() => {});
}

/* ─── Helpers d'accés ─────────────────────────────────────────────── */
function eBloc(curs, sentit) {
  return editData[curs]?.blocs.find(b => b.sentit === sentit) || null;
}
function eTema(curs, sentit, tid) {
  return eBloc(curs, sentit)?.temes.find(t => t.id === tid) || null;
}

/* ─── Operacions sobre continguts ────────────────────────────────── */
function eCont_Move(curs, sentit, tid, ci, dir) {
  const t = eTema(curs, sentit, tid); if (!t) return;
  const ni = ci + dir;
  if (ni < 0 || ni >= t.continguts.length) return;
  [t.continguts[ci], t.continguts[ni]] = [t.continguts[ni], t.continguts[ci]];
  rerenderCurs(curs);
}
function eCont_Del(curs, sentit, tid, ci) {
  const t = eTema(curs, sentit, tid); if (!t) return;
  if (!confirm(`Suprimir "${t.continguts[ci]}"?`)) return;
  t.continguts.splice(ci, 1);
  rerenderCurs(curs);
}
function eCont_Add(curs, sentit, tid) {
  const t = eTema(curs, sentit, tid); if (!t) return;
  t.continguts.push('Nou contingut');
  rerenderCurs(curs);
}
// Actualitza el text d'un contingut sense re-renderitzar (l'input ja mostra el valor)
function eCont_Update(curs, sentit, tid, ci, value) {
  const t = eTema(curs, sentit, tid);
  if (t) t.continguts[ci] = value;
}

/* ─── Operacions sobre temes ──────────────────────────────────────── */
function eTema_Move(curs, sentit, tid, dir) {
  const bloc = eBloc(curs, sentit); if (!bloc) return;
  const i = bloc.temes.findIndex(t => t.id === tid);
  const ni = i + dir;
  if (ni < 0 || ni >= bloc.temes.length) return;
  [bloc.temes[i], bloc.temes[ni]] = [bloc.temes[ni], bloc.temes[i]];
  rerenderCurs(curs);
}
function eTema_Del(curs, sentit, tid) {
  const bloc = eBloc(curs, sentit); if (!bloc) return;
  const i = bloc.temes.findIndex(t => t.id === tid); if (i < 0) return;
  if (!confirm(`Suprimir el tema "${bloc.temes[i].label}" i tots els seus continguts?`)) return;
  bloc.temes.splice(i, 1);
  rerenderCurs(curs);
}
function eTema_Add(curs, sentit) {
  const bloc = eBloc(curs, sentit); if (!bloc) return;
  bloc.temes.push({ id: 'tema-' + Date.now(), label: 'Tema nou', hores: 0, continguts: ['Contingut 1'] });
  rerenderCurs(curs);
}
function eTema_UpdateLabel(curs, sentit, tid, value) {
  const t = eTema(curs, sentit, tid); if (t) t.label = value;
}
function eTema_UpdateHores(curs, sentit, tid, value) {
  const t = eTema(curs, sentit, tid); if (t) t.hores = parseInt(value) || 0;
}
function eTema_MoveTo(srcCurs, srcSentit, tid, dstCurs, dstSentit) {
  if (srcCurs === dstCurs && srcSentit === dstSentit) return;
  const srcBloc = eBloc(srcCurs, srcSentit);
  const dstBloc = eBloc(dstCurs, dstSentit);
  if (!dstBloc) { alert(`No existeix el sentit "${dstSentit}" a ${dstCurs}.`); return; }
  const i = srcBloc.temes.findIndex(t => t.id === tid); if (i < 0) return;
  const [tema] = srcBloc.temes.splice(i, 1);
  dstBloc.temes.push(tema);
  rerenderCurs(srcCurs);
  if (dstCurs !== srcCurs) rerenderCurs(dstCurs);
}

/* ─── Operació sobre blocs ────────────────────────────────────────── */
function eBloc_UpdateHores(curs, sentit, value) {
  const b = eBloc(curs, sentit); if (b) b.hores = parseInt(value) || 0;
}

/* ─── Re-renderitzar un curs (preservant la pestanya activa) ──────── */
function rerenderCurs(curs) {
  const el = document.getElementById('cv-' + curs); if (!el) return;
  const newEl = buildCursViewEdit(curs);
  newEl.className = el.className;
  el.replaceWith(newEl);
  // En mode edició deixa tots els blocs oberts
  editData[curs].blocs.forEach(b =>
    document.getElementById(`ss-${curs}__${b.sentit}`)?.classList.add('open'));
}

/* ─── Render principal (mode edició) ──────────────────────────────── */
function renderMainEdit() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  for (const curs of CURS_ORDER) main.appendChild(buildCursViewEdit(curs));
  // Obre tots els blocs del curs actiu per defecte
  editData[activeCurs].blocs.forEach(b =>
    document.getElementById(`ss-${activeCurs}__${b.sentit}`)?.classList.add('open'));
}

function buildCursViewEdit(curs) {
  const d = editData[curs];
  const div = document.createElement('div');
  div.className = 'cview' + (curs === activeCurs ? ' active' : '');
  div.id = 'cv-' + curs;

  let html = `<div class="cview-header">
    <h2>${escHtml(d.label)}</h2>
    <span class="meta">${d.hores_any}h anuals &mdash; ${escHtml(d.hores_info)}</span>
  </div>`;

  for (const bloc of d.blocs) {
    const sm = SENTITS[bloc.sentit];
    const sid = `${curs}__${bloc.sentit}`;
    html += `
    <div class="s-section ${escHtml(bloc.sentit)}" id="ss-${sid}">
      <div class="s-header ${escHtml(bloc.sentit)}" data-sid="${sid}">
        <div class="s-dot"></div>
        <div class="s-label">${escHtml(sm.label)}</div>
        <input class="hores-inp" type="number" min="0" max="999" value="${bloc.hores}"
          data-edit="bloc-hores" data-curs="${escHtml(curs)}" data-sentit="${escHtml(bloc.sentit)}"
          title="Hores del bloc">
        <span style="font-size:12px;color:var(--muted);margin-right:4px">h</span>
        <span class="s-chevron">▶</span>
      </div>
      <div class="s-body">
        <table class="tema-table">
          <colgroup><col/><col style="width:82px"/></colgroup>
          <thead><tr><th>Tema</th><th style="text-align:right">Hores</th></tr></thead>
          <tbody>
          ${bloc.temes.map((t, ti) => buildTemaRowEdit(curs, bloc.sentit, t, ti, bloc.temes.length)).join('')}
          </tbody>
        </table>
        <button class="edit-add-btn"
          data-edit="add-tema" data-curs="${escHtml(curs)}" data-sentit="${escHtml(bloc.sentit)}">
          + Afegir tema
        </button>
      </div>
    </div>`;
  }
  div.innerHTML = html;
  return div;
}

function buildTemaRowEdit(curs, sentit, t, ti, total) {
  const rid = `${escHtml(curs)}__${escHtml(sentit)}__${escHtml(t.id)}`;
  const first = ti === 0, last = ti === total - 1;

  const contItems = t.continguts.map((c, ci) => `
    <li>
      <div class="edit-cont-row">
        <span class="cont-num">${ci + 1}.</span>
        <input class="cont-inp" type="text" value="${escHtml(c)}"
          data-edit="cont" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
          data-tid="${escHtml(t.id)}" data-ci="${ci}">
        <div class="edit-mini-btns">
          <button class="edit-mini-btn" title="Amunt"
            data-edit="cont-up" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}" data-ci="${ci}" ${ci === 0 ? 'disabled' : ''}>▲</button>
          <button class="edit-mini-btn" title="Avall"
            data-edit="cont-down" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}" data-ci="${ci}" ${ci === t.continguts.length - 1 ? 'disabled' : ''}>▼</button>
          <button class="edit-mini-btn del" title="Suprimeix contingut"
            data-edit="cont-del" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}" data-ci="${ci}">✕</button>
        </div>
      </div>
    </li>`).join('');

  return `
  <tr class="tema-row">
    <td>
      <div class="edit-tema-head">
        <span class="tema-caret">▶</span>
        <input class="tema-label-inp" type="text" value="${escHtml(t.label)}"
          data-edit="tema-label" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
          data-tid="${escHtml(t.id)}">
        <div class="edit-mini-btns">
          <button class="edit-mini-btn" title="Amunt dins del bloc"
            data-edit="tema-up" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}" ${first ? 'disabled' : ''}>▲</button>
          <button class="edit-mini-btn" title="Avall dins del bloc"
            data-edit="tema-down" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}" ${last ? 'disabled' : ''}>▼</button>
          <button class="edit-mini-btn move" title="Mou a un altre curs o sentit"
            data-edit="tema-move" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}">↔</button>
          <button class="edit-mini-btn del" title="Suprimeix tema"
            data-edit="tema-del" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}">✕</button>
        </div>
      </div>
      <ul class="cont-list open" id="cl-${rid}">
        ${contItems}
        <li style="list-style:none">
          <button class="edit-add-btn"
            data-edit="add-cont" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
            data-tid="${escHtml(t.id)}">+ Afegir contingut</button>
        </li>
      </ul>
    </td>
    <td class="hores-td" style="vertical-align:top;padding-top:9px">
      <input class="hores-inp" type="number" min="0" max="999" value="${t.hores}"
        data-edit="tema-hores" data-curs="${escHtml(curs)}" data-sentit="${escHtml(sentit)}"
        data-tid="${escHtml(t.id)}">h
    </td>
  </tr>`;
}

/* ─── Dispatch de clics en mode edició ────────────────────────────── */
function handleEditClick(e) {
  const btn = e.target.closest('[data-edit]'); if (!btn) return false;
  const { edit: act, curs, sentit, tid, ci } = btn.dataset;
  const idx = parseInt(ci ?? '0');
  switch (act) {
    case 'cont-up':   eCont_Move(curs, sentit, tid, idx, -1); break;
    case 'cont-down': eCont_Move(curs, sentit, tid, idx, +1); break;
    case 'cont-del':  eCont_Del(curs, sentit, tid, idx);      break;
    case 'add-cont':  eCont_Add(curs, sentit, tid);           break;
    case 'tema-up':   eTema_Move(curs, sentit, tid, -1);      break;
    case 'tema-down': eTema_Move(curs, sentit, tid, +1);      break;
    case 'tema-del':  eTema_Del(curs, sentit, tid);           break;
    case 'add-tema':  eTema_Add(curs, sentit);                break;
    case 'tema-move': openMoveModal(curs, sentit, tid);       break;
    default: return false;
  }
  return true;
}

/* ─── Dispatch d'inputs en mode edició ────────────────────────────── */
function handleEditInput(e) {
  const el = e.target; if (!el.dataset.edit) return;
  const { edit: act, curs, sentit, tid, ci } = el.dataset;
  switch (act) {
    case 'cont':       eCont_Update(curs, sentit, tid, parseInt(ci), el.value); break;
    case 'tema-label': eTema_UpdateLabel(curs, sentit, tid, el.value);          break;
    case 'tema-hores': eTema_UpdateHores(curs, sentit, tid, el.value);          break;
    case 'bloc-hores': eBloc_UpdateHores(curs, sentit, el.value);               break;
  }
}

/* ─── Modal: moure tema ───────────────────────────────────────────── */
function openMoveModal(curs, sentit, tid) {
  const tema = eTema(curs, sentit, tid); if (!tema) return;
  _movePending = { curs, sentit, tid };
  const cursOpts = CURS_ORDER.map(c =>
    `<option value="${c}"${c===curs?' selected':''}>${escHtml(CURS_LABELS[c])}</option>`).join('');
  const sentitOpts = Object.entries(SENTITS).map(([k, v]) =>
    `<option value="${k}"${k===sentit?' selected':''}>${escHtml(v.label)}</option>`).join('');
  document.getElementById('move-modal-body').innerHTML = `
    <p class="move-sub">Tema: <strong>${escHtml(tema.label)}</strong></p>
    <label>Curs destí</label>
    <select id="move-dst-curs">${cursOpts}</select>
    <label>Sentit destí</label>
    <select id="move-dst-sentit">${sentitOpts}</select>`;
  document.getElementById('move-modal-bg').hidden = false;
}
function closeMoveModal(confirmed) {
  if (confirmed && _movePending) {
    eTema_MoveTo(
      _movePending.curs, _movePending.sentit, _movePending.tid,
      document.getElementById('move-dst-curs').value,
      document.getElementById('move-dst-sentit').value
    );
  }
  document.getElementById('move-modal-bg').hidden = true;
  _movePending = null;
}

/* ─── Descàrrega de repartiment-data.js ──────────────────────────── */
function downloadData() {
  const ca = typeof CONTINGUTS_ACTIVITATS !== 'undefined' ? CONTINGUTS_ACTIVITATS : {};
  const date = new Date().toLocaleDateString('ca-ES', {day:'2-digit',month:'2-digit',year:'numeric'});
  const js = [
    `/* repartiment-data.js — Repartiment de continguts matemàtics ESO 2025-26`,
    ` * Compartit entre repartiment.html i seguiment.html.`,
    ` * No modifiqueu els noms de les constants (SENTITS, CLASSES, REPARTIMENT).`,
    ` * Generat per l'editor integrat de repartiment.html el ${date}.`,
    ` */`,
    ``,
    `/* ─── SENTITS ───────────────────────────────────────────────────────── */`,
    `const SENTITS = ${JSON.stringify(SENTITS, null, 2)};`,
    ``,
    `/* ─── CLASSES DEL DEPARTAMENT ───────────────────────────────────────── */`,
    `const CLASSES = ${JSON.stringify(CLASSES, null, 2)};`,
    ``,
    `/* ─── REPARTIMENT DE CONTINGUTS ──────────────────────────────────────── */`,
    `const REPARTIMENT = ${JSON.stringify(editData, null, 2)};`,
    ``,
    `/* ════════════════════════════════════════════════════════════════════`,
    ` * CONTINGUTS_ACTIVITATS — pont entre el repartiment i el catàleg.`,
    ` * ATENCIÓ: si heu reordenat o eliminat continguts d'un tema, reviseu`,
    ` * les posicions numèriques d'aquest objecte.`,
    ` * ════════════════════════════════════════════════════════════════════ */`,
    `const CONTINGUTS_ACTIVITATS = ${JSON.stringify(ca, null, 2)};`,
  ].join('\n');

  const blob = new Blob([js], { type: 'application/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'repartiment-data.js';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

/* ─── Wire-up dels botons d'edició ───────────────────────────────── */
document.getElementById('btn-edit-start').onclick  = startEdit;
document.getElementById('btn-edit-stop').onclick   = stopEdit;
document.getElementById('btn-edit-dl').onclick     = downloadData;
document.getElementById('move-confirm-btn').onclick = () => closeMoveModal(true);
document.getElementById('move-cancel-btn').onclick  = () => closeMoveModal(false);
document.getElementById('move-modal-bg').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeMoveModal(false);
});
renderTabs();
renderMain();
// Open all sentit sections of the active course by default
REPARTIMENT[activeCurs].blocs.forEach(b =>
  document.getElementById(`ss-${activeCurs}__${b.sentit}`)?.classList.add('open'));

// Enllaços al catàleg (best-effort): carrega el manifest i posa les icones.
fetch('manifest.json').then(r => r.ok ? r.json() : null).then(m => { if (m) applyMaterialLinks(m); }).catch(() => {});
