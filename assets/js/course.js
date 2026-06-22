/* course.js — ENTRY POINT per a les pàgines de curs individuals.
   Depèn de: utils.js, md.js, docx.js, fields.js, collapsible.js,
             pdf-panel.js, sidebar.js (tots carregats abans).

   La pàgina HTML defineix window.COURSE_PATH abans de carregar aquest script:
     <script>window.COURSE_PATH = 'contingut/batxillerat/2n/pro';</script>

   Cada pàgina de curs és completament autònoma:
     · {COURSE_PATH}/course.json     → metadades (marca, títols d'unitat, docx…)
     · {COURSE_PATH}/pdfs/manifest.json → PDFs disponibles
   Afegir un curs nou = crear un nou HTML i la carpeta de contingut.
   Cap canvi de codi. */

const UD_MAX_FALLBACK = 6;

/* ─── STATE ───────────────────────────────────────────────────────── */
const coursePath = window.COURSE_PATH;
let courseMeta = null;
let pdfSet = new Set();

let DOCS = [];
let activeId = null;
const cache = {};

/* ─── DETECCIÓ DE DOCUMENTS ───────────────────────────────────────── */
async function discover() {
  const docs = [];
  const udMax = courseMeta.udMax || UD_MAX_FALLBACK;

  // Programació general (DOCX)
  if (courseMeta.docx) {
    docs.push({
      id: 'prog', kind: 'docx',
      file: `${coursePath}/${courseMeta.docx}`,
      title: 'Programació general',
      sub: `Curs · ${udMax} unitats · avaluació`,
    });
  }

  // Unitats Ud1…UdN
  const titles = courseMeta.udTitles || {};
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
        <h1>${escHtml(isUd ? doc.title + ' \u2014 ' + doc.sub : 'Programaci\u00f3 did\u00e0ctica')}</h1>
        <div class="dh-meta">${isUd ? 'Proposta detallada d\u2019activitats \u00b7 Markdown' : (courseMeta.brand + ' \u00b7 document Word')}</div>
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

  main.innerHTML = `<div class="doc-wrap">${headHtml}<div class="state"><div class="spinner"></div><div>Carregant el document\u2026</div></div></div>`;

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
        Comprova que el fitxer <code>${escHtml(doc.file)}</code> existeix i que la p\u00e0gina
        s\u2019est\u00e0 servint per HTTP (no amb <code>file://</code>).<br>
        <span style="color:var(--hint)">Detall: ${escHtml(err.message)}</span>
      </div></div></div>`;
  }
}

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

/* ─── IMPRESSIÓ ───────────────────────────────────────────────────── */
let _printReopen = [];
window.addEventListener('beforeprint', () => {
  _printReopen = [...document.querySelectorAll('.rich .sec:not([open])')];
  _printReopen.forEach(d => d.open = true);
});
window.addEventListener('afterprint', () => {
  _printReopen.forEach(d => d.open = false);
  _printReopen = [];
});

/* ─── INIT ────────────────────────────────────────────────────────── */
function wireChrome() {
  document.getElementById('menuToggle').addEventListener('click', () =>
    document.getElementById('app').classList.toggle('nav-open'));
  document.getElementById('scrim').addEventListener('click', closeNav);
}

async function loadApp() {
  wireChrome();

  courseMeta = await fetchJson(`${coursePath}/course.json`, { cache: 'no-store' });
  if (!courseMeta) {
    document.getElementById('main').innerHTML =
      `<div class="state err"><div class="state-box">
        <strong>No s\u2019ha pogut llegir <code>course.json</code>.</strong><br>
        Comprova que existeix <code>${escHtml(coursePath)}/course.json</code>.
      </div></div>`;
    return;
  }

  renderBrand(courseMeta.brand, courseMeta.brandSub);
  await loadManifest();
  DOCS = await discover();
  renderSidebar(DOCS, activeId, onSelect);

  if (DOCS.length) {
    select(DOCS[0].id);
  } else {
    document.getElementById('main').innerHTML =
      `<div class="state err"><div class="state-box">
        <strong>Encara no hi ha material per a aquest curs.</strong><br>
        Col\u00b7loca el DOCX i els fitxers <code>Ud1.md</code>\u2026<code>Ud${courseMeta.udMax || UD_MAX_FALLBACK}.md</code> dins de
        <code>${escHtml(coursePath)}/</code>.
      </div></div>`;
  }
}

loadApp();
