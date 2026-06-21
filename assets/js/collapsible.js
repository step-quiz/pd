/* collapsible.js — converteix el HTML d'una unitat en blocs plegables.
   Exposa (global): collapsibleByH2(html, udNum, pdfCtx).
   Interns: wrapDetails(), nestH3().
   Depèn de: styleHourFields() (fields.js), pdfPanel() (pdf-panel.js).

   pdfCtx és l'objecte que collapsibleByH2 passa tal qual a pdfPanel() per a
   cada sessió: { basePath, pdfPrefix, pdfSet }. Mantenir collapsible sense
   estat — tota la informació del curs arriba per paràmetre. */

function wrapDetails(title, body, cls) {
  return `<details class="sec${cls ? ' ' + cls : ''}"><summary>` +
           `<span class="sec-caret" aria-hidden="true"></span>` +
           `<span class="sec-title">${title}</span>` +
         `</summary><div class="sec-body">${body}</div></details>`;
}

/* Converteix els <h3> de dins d'un bloc en subplegables niats.
   El contingut anterior al primer <h3> es manté visible a dalt del bloc. */
function nestH3(body) {
  const segs = body.split(/(?=<h3>)/g);
  let out = '';
  for (const seg of segs) {
    const m = seg.match(/^<h3>([\s\S]*?)<\/h3>([\s\S]*)$/);
    if (!m) { out += seg; continue; }          // intro abans del primer h3
    out += wrapDetails(m[1], m[2], 'sub');
  }
  return out;
}

/* PLEGABLE: blocs principals (H1/H2) amb subplegables niats (H3).
   · Bloc arrel: arrenca al títol del document (<h1>) i engloba el
     subtítol; a dins, «Llegenda» i «Visió general» (<h3>) són
     subplegables niats.
   · Blocs germans: cada <h2> (les 16 hores, relació amb l'avaluació,
     observacions). Si contenen <h3>, també esdevenen subplegables.
   Tot tancat per defecte. */
function collapsibleByH2(html, udNum, pdfCtx) {
  const parts = html.split(/(?=<h1>|<h2>)/g).filter(p => p.trim() !== '');
  // Si el document arrenca amb <h1> seguit d'un <h2> de subtítol,
  // fusiona tots dos en un únic bloc arrel (el subtítol no és un node propi).
  if (parts.length >= 2 && /^<h1>/.test(parts[0]) && /^<h2>/.test(parts[1])) {
    const sub = parts[1].replace(/^<h2>([\s\S]*?)<\/h2>/, '<p class="sec-subtitle">$1</p>');
    parts[0] = parts[0] + sub;
    parts.splice(1, 1);
  }
  let out = '';
  for (const part of parts) {
    const m = part.match(/^<(h1|h2)>([\s\S]*?)<\/\1>([\s\S]*)$/);
    if (!m) { out += part; continue; }
    const title = m[2];
    let body = styleHourFields(nestH3(m[3]));
    // Si el bloc és una sessió («Sessió N — …») i sabem la unitat, hi afegim
    // el panell del PDF corresponent, amagat fins que es comprovi que existeix.
    const sm = udNum && title.match(/Sessió\s+(\d+)/i);
    if (sm && pdfCtx) {
      body = pdfPanel(udNum, parseInt(sm[1], 10), pdfCtx) + body;
    }
    out += wrapDetails(title, body, '');
  }
  return out;
}
