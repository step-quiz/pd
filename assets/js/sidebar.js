/* sidebar.js — pintat de la barra lateral i de la marca de la topbar.
   Exposa (globals):
     renderSidebar(docs, activeId, onSelect)
     renderBrand(brand, brandSub)
   Sense estat: tot arriba per paràmetre i s'escriu al DOM. */

function renderSidebar(docs, activeId, onSelect) {
  const prog = docs.filter(d => d.kind === 'docx');
  const uds  = docs.filter(d => d.kind === 'md');

  const navItem = d => {
    const isUd = d.kind === 'md';
    const icoCls = isUd ? 'ud' : 'prog';
    const icoTxt = isUd ? d.title.replace('Unitat ', 'U') : 'PD';
    return `<button class="nav-item${d.id === activeId ? ' active' : ''}" data-id="${d.id}">
      <span class="nav-ico ${icoCls}">${escHtml(icoTxt)}</span>
      <span class="nav-body">
        <span class="nav-title">${escHtml(d.title)}</span>
        <span class="nav-sub">${escHtml(d.sub)}</span>
      </span>
    </button>`;
  };

  let html = '';
  if (prog.length) {
    html += `<div class="side-group"><h3>Programació</h3>${prog.map(navItem).join('')}</div>`;
  }
  html += `<div class="side-group"><h3>Unitats didàctiques</h3>`;
  if (uds.length) {
    html += uds.map(navItem).join('');
  } else {
    html += `<div class="nav-empty">Encara no hi ha unitats. Deixa un fitxer <code>Ud1.md</code> a la carpeta de dades.</div>`;
  }
  html += `</div>`;

  const sb = document.getElementById('sidebar');
  sb.innerHTML = html;
  sb.querySelectorAll('.nav-item').forEach(btn =>
    btn.addEventListener('click', () => onSelect(btn.dataset.id))
  );
}

function renderBrand(brand, brandSub) {
  document.getElementById('brand').innerHTML =
    `${escHtml(brand)} <small>${escHtml(brandSub)}</small>`;
}
