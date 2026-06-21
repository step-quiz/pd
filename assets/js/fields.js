/* fields.js — Proposta A: format de fitxa per als camps de cada hora.
   Exposa (global): styleHourFields(html).

   Transforma els paràgrafs «<strong>Camp:</strong> …» que generen les
   hores en una presentació més llegible, sense tocar el contingut:
   · Agrupament / Objectius/criteris / Correspon a / Materials → fitxa
     de metadades (graella de 2 columnes amb fons suau).
   · Desenvolupament detallat → bloc amb títol i filet blau.
   · Evidència… / Atenció a la diversitat → peu etiquetat amb separador.
   Opera sobre el HTML d'un bloc; deixa intacte el que no reconeix
   (Llegenda, Visió general, taules, etc.). */
function styleHourFields(html) {
  const FIELD = /^<p><strong>([^:]+):<\/strong>\s*([\s\S]*?)<\/p>$/;
  // Re-segmenta el cos per <p>…</p> i deixa la resta (taules, hr…) tal qual.
  const parts = html.split(/(<p>[\s\S]*?<\/p>)/g).filter(s => s !== '');

  const META = ['Agrupament', 'Objectius/criteris', 'Correspon a', 'Materials'];
  const FOOT = ['Evidència', 'Atenció a la diversitat'];

  function parseFieldP(str) {
    const m = str.match(FIELD);
    if (!m) return null;
    return { label: m[1].trim(), value: m[2].trim() };
  }
  // Una línia de metadades pot dur diversos camps units per « · »:
  // <strong>Agrupament:</strong> … · <strong>Objectius/criteris:</strong> …
  function splitInlineFields(value, firstLabel) {
    const rows = [];
    const re = /<strong>([^:]+):<\/strong>/g;
    // reconstrueix incloent el primer camp
    const full = `<strong>${firstLabel}:</strong> ${value}`;
    let m, idxs = [];
    while ((m = re.exec(full)) !== null) idxs.push({ label: m[1].trim(), start: m.index, after: re.lastIndex });
    for (let i = 0; i < idxs.length; i++) {
      const seg = full.slice(idxs[i].after, i + 1 < idxs.length ? idxs[i + 1].start : full.length);
      rows.push({ label: idxs[i].label, value: seg.replace(/^\s*|[\s·]+$/g, '').trim() });
    }
    return rows;
  }

  const out = [];
  // és un fragment només d'espais/salts (separador entre <p>)?
  const isBlank = s => /^\s*$/.test(s);
  // índex del següent fragment no-blanc a partir de j
  const nextReal = j => { while (j < parts.length && isBlank(parts[j])) j++; return j; };

  let i = 0;
  while (i < parts.length) {
    const seg = parts[i];
    if (isBlank(seg)) { out.push(seg); i++; continue; }
    const f = parseFieldP(seg);

    if (f && (META.includes(f.label) || f.label.startsWith('Objectius'))) {
      let rows = splitInlineFields(f.value, f.label);
      i++;
      // acumula camps META consecutius, saltant separadors en blanc
      for (;;) {
        const k = nextReal(i);
        const nf = k < parts.length ? parseFieldP(parts[k]) : null;
        if (nf && (META.includes(nf.label) || nf.label.startsWith('Objectius'))) {
          rows = rows.concat(splitInlineFields(nf.value, nf.label));
          i = k + 1;
        } else break;
      }
      out.push(
        '<div class="hour-card">' +
        rows.map(r =>
          `<div class="hc-key">${escHtml(r.label)}</div><div class="hc-val">${r.value}</div>`
        ).join('') +
        '</div>'
      );
      continue;
    }

    if (f && f.label.startsWith('Desenvolupament')) {
      out.push(
        '<div class="hour-devel"><div class="hd-title">' +
        `<span class="hd-bar"></span>${escHtml(f.label)}</div>` +
        `<div class="hd-body"><p>${f.value}</p></div></div>`
      );
      i++;
      continue;
    }

    if (f && FOOT.some(lbl => f.label.startsWith(lbl))) {
      // agrupa els camps de peu consecutius en un sol bloc amb separador
      const foot = [];
      let k = i;
      for (;;) {
        k = nextReal(k);
        const nf = k < parts.length ? parseFieldP(parts[k]) : null;
        if (nf && FOOT.some(lbl => nf.label.startsWith(lbl))) { foot.push(nf); k++; }
        else break;
      }
      i = k;
      out.push(
        '<div class="hour-foot">' +
        foot.map(r => `<p><span class="hf-key">${escHtml(r.label)}:</span> ${r.value}</p>`).join('') +
        '</div>'
      );
      continue;
    }

    out.push(seg);
    i++;
  }
  return out.join('');
}
