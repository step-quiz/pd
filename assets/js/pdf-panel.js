/* pdf-panel.js — panell de material (PDF) d'una sessió i normalització de
   capçaleres de taula provinents de mammoth.
   Exposa (globals): pdfPanel(udNum, sessNum, pdfCtx), markTableHeaders(html). */

/* Panell de material (PDF) d'una sessió. L'estat es decideix en el moment del
   render, consultant pdfCtx.pdfSet (el conjunt de noms de PDF que realment
   existeixen, carregat des de {path}/pdfs/manifest.json). No es fa cap petició
   de xarxa per sessió ni cap canvi d'estat posterior:
   - Si el nom hi és al manifest: botó blau "Veure PDF".
   - Si no hi és: insígnia grisa "PDF en construcció", no clicable.

   pdfCtx = { basePath, pdfPrefix, pdfSet }
     · basePath   ruta de la carpeta del curs (p. ex. contingut/batxillerat/1r/pro)
     · pdfPrefix  prefix de nom de fitxer (p. ex. "1bat")
     · pdfSet     Set amb els noms de PDF disponibles */
function pdfPanel(udNum, sessNum, pdfCtx) {
  const { basePath, pdfPrefix, pdfSet } = pdfCtx;
  const filename = `${pdfPrefix}-ud${udNum}-${sessNum}.pdf`;
  const file = `${basePath}/pdfs/${filename}`;
  const exists = pdfSet.has(filename);
  const viewSvg = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/></svg>';
  const wipSvg = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.5l2 1.5"/></svg>';
  return `<div class="session-pdf${exists ? '' : ' sp-pending'}" data-pdf="${escHtml(file)}">` +
           `<span class="sp-label"><span class="sp-ico">PDF</span>Material de la sessi\u00f3</span>` +
           `<a class="sp-btn sp-view" href="${escHtml(file)}" target="_blank" rel="noopener"${exists ? '' : ' hidden'}>${viewSvg} Veure PDF</a>` +
           `<span class="sp-wip"${exists ? ' hidden' : ''}>${wipSvg} PDF en construcci\u00f3</span>` +
         `</div>`;
}

/* mammoth no distingeix mai la fila de capçalera: totes les files de
   totes les taules surten com a <tr><td>...</td></tr> planes, sense
   <thead>/<th>. Convertim la primera fila de cada taula en capçalera
   real perquè el CSS (.rich thead th / .rich tbody td) hi pugui aplicar
   un estil consistent, independent del format (negreta o no) que tingui
   aquella fila al document Word original. */
function markTableHeaders(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  tmp.querySelectorAll('table').forEach(table => {
    const rows = Array.from(table.rows);
    if (rows.length < 2) return;
    const [headerRow, ...bodyRows] = rows;
    const thead = document.createElement('thead');
    const headTr = document.createElement('tr');
    Array.from(headerRow.cells).forEach(cell => {
      const th = document.createElement('th');
      th.innerHTML = cell.innerHTML;
      headTr.appendChild(th);
    });
    thead.appendChild(headTr);
    const tbody = document.createElement('tbody');
    bodyRows.forEach(tr => tbody.appendChild(tr));
    table.innerHTML = '';
    table.appendChild(thead);
    table.appendChild(tbody);
  });
  return tmp.innerHTML;
}
