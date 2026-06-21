/* docx.js — render de DOCX a HTML via mammoth.
   Exposa (global): renderDocx(fileUrl) -> Promise<html>.
   Depèn de: mammoth (global, des de assets/lib/mammoth.browser.min.js),
             markTableHeaders() (pdf-panel.js). */
async function renderDocx(fileUrl) {
  const resp = await fetch(fileUrl);
  if (!resp.ok) throw new Error('HTTP ' + resp.status);
  const buf = await resp.arrayBuffer();
  const styleMap = [
    "p[style-name='Title'] => h1:fresh",
    "p[style-name='Heading 1'] => h2:fresh",
    "p[style-name='Heading 2'] => h3:fresh",
    "p[style-name='Heading 3'] => h4:fresh",
  ];
  const res = await mammoth.convertToHtml({ arrayBuffer: buf }, { styleMap });
  return markTableHeaders(res.value);
}
