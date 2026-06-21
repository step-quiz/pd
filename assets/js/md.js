/* md.js — parser Markdown lleuger.
   Exposa (global): mdToHtml(md).
   Cobreix el que fan servir els documents Ud: encapçalaments, taules GFM,
   llistes, blockquotes, hr, negreta/cursiva/codi i enllaços. */
function mdToHtml(md) {
  md = md.replace(/\r\n?/g, '\n');
  const lines = md.split('\n');
  let out = [];
  let i = 0;

  const inline = t => escHtml(t)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  const splitRow = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());

  while (i < lines.length) {
    let line = lines[i];

    // línia buida
    if (/^\s*$/.test(line)) { i++; continue; }

    // hr
    if (/^\s*---+\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

    // encapçalaments
    let h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) { const l = h[1].length; out.push(`<h${l}>${inline(h[2].trim())}</h${l}>`); i++; continue; }

    // taula GFM: fila de capçalera + fila separadora |---|---|
    if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i+1]) && lines[i+1].includes('-')) {
      const header = splitRow(line);
      i += 2; // saltar capçalera + separador
      const rows = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) { rows.push(splitRow(lines[i])); i++; }
      let t = '<div class="table-scroll"><table><thead><tr>' +
        header.map(c => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>';
      for (const r of rows) {
        t += '<tr>' + header.map((_, c) => `<td>${inline(r[c] ?? '')}</td>`).join('') + '</tr>';
      }
      t += '</tbody></table></div>';
      out.push(t);
      continue;
    }

    // blockquote
    if (/^\s*>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^\s*>\s?/, '')); i++; }
      out.push('<blockquote>' + buf.map(b => `<p>${inline(b)}</p>`).join('') + '</blockquote>');
      continue;
    }

    // llista no ordenada
    if (/^\s*[-*+]\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*[-*+]\s+/, '')); i++; }
      out.push('<ul>' + buf.map(b => `<li>${inline(b)}</li>`).join('') + '</ul>');
      continue;
    }

    // llista ordenada
    if (/^\s*\d+\.\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*\d+\.\s+/, '')); i++; }
      out.push('<ol>' + buf.map(b => `<li>${inline(b)}</li>`).join('') + '</ol>');
      continue;
    }

    // paràgraf (acumula línies fins a un tall)
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) &&
           !/^\s*(#{1,6}\s|>|[-*+]\s|\d+\.\s|---+\s*$)/.test(lines[i]) &&
           !/^\s*\|.*\|\s*$/.test(lines[i])) {
      buf.push(lines[i]); i++;
    }
    if (buf.length) out.push(`<p>${inline(buf.join(' '))}</p>`);
  }
  return out.join('\n');
}
