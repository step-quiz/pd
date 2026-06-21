/* app.js — ENTRY POINT. Estat global i orquestració.
   Depèn de: utils.js, md.js, docx.js, fields.js, collapsible.js,
             pdf-panel.js, sidebar.js (tots carregats abans).

   L'app és data-driven:
     · data/courses.json  → registre global de cursos (quins existeixen, on són).
     · {path}/course.json → metadades del curs (marca, títols d'unitat, docx…).
     · {path}/pdfs/manifest.json → llista de PDFs realment disponibles.
   Afegir un curs nou = afegir una entrada a courses.json i crear la carpeta.
   Cap canvi de codi. */

const REGISTRY_URL = 'data/courses.json';
const UD_MAX_FALLBACK = 6;

/* ─── STATE ───────────────────────────────────────────────────────── */
let registry = [];          // [{id, label, path, available, …}]  (només els available)
let currentCourse = null;   // id del curs actiu (clau de courses.json)
let courseMeta = null;      // course.json del curs actiu
let coursePath = null;      // ruta base del curs actiu
let pdfSet = new Set();     // noms de PDF disponibles (manifest.json)

let DOCS = [];              // [{id, kind, file, title, sub}]
let activeId = null;
const cache = {};           // id → html ja renderitzat

/* ─── DETECCIÓ DE DOCUMENTS (del curs actiu) ──────────────────────── */
async function discover() {
  const docs = [];
  const udMax = courseMeta && courseMeta.udMax ? courseMeta.udMax : UD_MAX_FALLBACK;

  // Programació general (DOCX): el nom el diu course.json (camp "docx").
  // Pot ser null si encara no existeix → s'omet sense errors.
  if (courseMeta && courseMeta.docx) {
    docs.push({
      id: 'prog', kind: 'docx', file: `${coursePath}/${courseMeta.docx}`,
      title: 'Programació general', sub: `Curs · ${udMax} unitats · avaluació`,
    });
  }

  // Unitats Ud1…UdN que existeixin
  const titles = (courseMeta && courseMeta.udTitles) || {};
  const checks = [];
  for (let i = 1; i <= udMax; i++) {
    const file = `${coursePath}/Ud${i}.md`;
    checks.push(fileExists(file).then(ok => ok ? { n: i, file } : null));
  }
  const found = (await Promise.all(checks)).filter(Boolean).sort((a, b) => a.n - b.n);
  for (const u of found) {
    docs.push({
      id: 'ud' + u.n,
      kind: 'md',
      file: u.file,
      title: `Unitat ${u.n}`,
      sub: titles[u.n] || titles[String(u.n)] || 'Unitat didàctica',
    });
  }
  return docs;
}

/* ─── CARREGA DEL MANIFEST DE PDFs ────────────────────────────────── */
async function loadManifest() {
  const data = await fetchJson(`${coursePath}/pdfs/manifest.json`, { cache: 'no-store' });
  pdfSet = new Set(data && Array.isArray(data.pdfs) ? data.pdfs : []);
}

/* ─── SELECCIÓ I PINTAT D'UN DOCUMENT ─────────────────────────────── */
async function select(id) {
  activeId = id;
  renderSidebar(DOCS, activeId, onSelect);
  const doc = DOCS.find(d => d.id === id);
  const main = document.getElementById('main');
  window.scrollTo(0, 0);
  if (!doc) return;

  const isUd = doc.kind === 'md';
  const headHtml = `
    <div class="doc-head">
      <span class="dh-ico ${isUd ? 'ud' : 'prog'}">${isUd ? doc.title.replace('Unitat ', 'U') : 'PD'}</span>
      <div>
        <h1>${escHtml(isUd ? doc.title + ' — ' + doc.sub : 'Programació didàctica')}</h1>
        <div class="dh-meta">${isUd ? 'Proposta detallada d\u2019activitats · Markdown' : (courseMeta.brand + ' · document Word')}</div>
      </div>
      ${isUd ? `<div class="dh-actions">
        <button class="pill-btn" id="toggleAll" data-state="collapsed">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>
          Desplega-ho tot
        </button>
      </div>` : ''}
    </div>`;

  if (cache[id]) {
    main.innerHTML = `<div class="doc-wrap">${headHtml}<div class="rich">${cache[id]}</div></div>`;
    wireToggleAll();
    return;
  }

  main.innerHTML = `<div class="doc-wrap">${headHtml}<div class="state"><div class="spinner"></div><div>Carregant el document…</div></div></div>`;

  try {
    let inner;
    if (doc.kind === 'docx') {
      inner = await renderDocx(doc.file);
    } else {
      const r = await fetch(doc.file);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const udMatch = (doc.id || '').match(/ud(\d+)/i);
      const udNum = udMatch ? parseInt(udMatch[1], 10) : null;
      const pdfCtx = { basePath: coursePath, pdfPrefix: courseMeta.pdfPrefix, pdfSet };
      inner = collapsibleByH2(mdToHtml(await r.text()), udNum, pdfCtx);
    }
    cache[id] = inner;
    if (activeId === id) {
      main.innerHTML = `<div class="doc-wrap">${headHtml}<div class="rich">${inner}</div></div>`;
      wireToggleAll();
    }
  } catch (err) {
    main.innerHTML = `<div class="doc-wrap">${headHtml}
      <div class="state err"><div class="state-box">
        <strong>No s\u2019ha pogut carregar el document.</strong><br>
        Comprova que el fitxer <code>${escHtml(doc.file)}</code> existeix i que la pàgina
        s\u2019està servint per HTTP (no amb <code>file://</code>).<br>
        <span style="color:var(--hint)">Detall: ${escHtml(err.message)}</span>
      </div></div></div>`;
  }
}

/* callback de selecció (passat a la sidebar): selecciona i tanca el nav mòbil */
function onSelect(id) { select(id); closeNav(); }

/* ─── Control «Desplega-ho tot / Plega-ho tot» ────────────────────── */
function wireToggleAll() {
  const btn = document.getElementById('toggleAll');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const secs = document.querySelectorAll('.rich .sec');
    const expand = btn.dataset.state === 'collapsed';
    secs.forEach(d => d.open = expand);
    btn.dataset.state = expand ? 'expanded' : 'collapsed';
    btn.querySelector('svg').style.transform = expand ? 'rotate(180deg)' : '';
    btn.childNodes[btn.childNodes.length - 1].textContent =
      expand ? ' Plega-ho tot' : ' Desplega-ho tot';
  });
}

/* ─── NAV mòbil ───────────────────────────────────────────────────── */
function closeNav() { document.getElementById('app').classList.remove('nav-open'); }

/* ─── IMPRESSIÓ: desplega tots els blocs i els restaura després ────── */
let _printReopen = [];
window.addEventListener('beforeprint', () => {
  _printReopen = [...document.querySelectorAll('.rich .sec:not([open])')];
  _printReopen.forEach(d => d.open = true);
});
window.addEventListener('afterprint', () => {
  _printReopen.forEach(d => d.open = false);
  _printReopen = [];
});

/* ─── SELECTOR DE CURS (construït des del registre) ────────────────── */
function renderCourseSwitch() {
  const sw = document.getElementById('courseSwitch');
  sw.innerHTML = registry.map(c =>
    `<button class="course-btn${c.id === currentCourse ? ' active' : ''}" data-course="${escHtml(c.id)}">${escHtml(c.label)}</button>`
  ).join('');
  sw.querySelectorAll('.course-btn').forEach(btn =>
    btn.addEventListener('click', () => setCourse(btn.dataset.course))
  );
}
function renderCourseButtons() {
  document.querySelectorAll('.course-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.course === currentCourse);
  });
}

/* ─── CARREGA D'UN CURS ───────────────────────────────────────────── */
async function loadCourse() {
  const entry = registry.find(c => c.id === currentCourse);
  if (!entry) return;
  coursePath = entry.path;

  // reinicia estat de documents en canviar de curs
  for (const k in cache) delete cache[k];
  activeId = null;
  document.getElementById('main').innerHTML =
    '<div class="state"><div class="spinner"></div><div>Carregant…</div></div>';

  courseMeta = await fetchJson(`${coursePath}/course.json`);
  if (!courseMeta) {
    document.getElementById('brand').innerHTML = escHtml(entry.label);
    renderCourseButtons();
    document.getElementById('main').innerHTML =
      `<div class="state err"><div class="state-box">
        <strong>No s\u2019ha pogut llegir <code>course.json</code> del ${escHtml(entry.label)}.</strong><br>
        Comprova que existeix <code>${escHtml(coursePath)}/course.json</code>.
      </div></div>`;
    return;
  }

  renderBrand(courseMeta.brand, courseMeta.brandSub);
  renderCourseButtons();
  await loadManifest();
  DOCS = await discover();
  renderSidebar(DOCS, activeId, onSelect);

  if (DOCS.length) {
    select(DOCS[0].id);
  } else {
    document.getElementById('main').innerHTML =
      `<div class="state err"><div class="state-box">
        <strong>Encara no hi ha material per al ${escHtml(entry.label)}.</strong><br>
        Col\u00b7loca el DOCX i els fitxers <code>Ud1.md</code>\u2026<code>Ud${courseMeta.udMax || UD_MAX_FALLBACK}.md</code> dins de
        <code>${escHtml(coursePath)}/</code> i serveix la pàgina per HTTP.
      </div></div>`;
  }
}

function setCourse(courseId) {
  if (courseId === currentCourse) return;
  if (!registry.some(c => c.id === courseId)) return;
  currentCourse = courseId;
  closeNav();
  loadCourse();
}

/* ─── INIT ────────────────────────────────────────────────────────── */
function wireChrome() {
  document.getElementById('menuToggle').addEventListener('click', () =>
    document.getElementById('app').classList.toggle('nav-open'));
  document.getElementById('scrim').addEventListener('click', closeNav);
}

async function loadApp() {
  wireChrome();
  const reg = await fetchJson(REGISTRY_URL, { cache: 'no-store' });
  // Només es mostren els cursos disponibles. Els altres queden registrats
  // però amagats de la UI fins que available passi a true.
  registry = reg && Array.isArray(reg.courses)
    ? reg.courses.filter(c => c.available !== false)
    : [];

  if (!registry.length) {
    document.getElementById('main').innerHTML =
      `<div class="state err"><div class="state-box">
        <strong>No hi ha cap curs disponible.</strong><br>
        Revisa <code>${escHtml(REGISTRY_URL)}</code>.
      </div></div>`;
    return;
  }

  currentCourse = registry[0].id;
  renderCourseSwitch();
  loadCourse();
}

loadApp();
