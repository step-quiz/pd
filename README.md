# Programació Didàctica Web

Visualitzador d'una sola pàgina (SPA) de programacions didàctiques de Matemàtiques.
HTML + CSS + JS vanilla, sense build. Es desplega a Cloudflare Pages.

## Afegir un curs nou

1. Afegeix una entrada a `data/courses.json`.
2. Crea la carpeta indicada al camp `path` amb un `course.json` a dins.
3. Hi deixes els `Ud{N}.md`, la `programacio.docx` i els PDFs a `pdfs/`.

**Cap línia de codi.**

## Estructura

```
index.html                      SPA shell (minimalista)
repartiment.html                Repartiment de continguts ESO (taula per curs/sentit)
404.html                        pàgina d'error
seguiment-link.txt              URL del Google Doc/Drive de Seguiment (només la URL)
assets/
  css/  tokens · layout · components · rich · responsive · print · repartiment
  js/   utils · md · docx · fields · collapsible · pdf-panel · sidebar · app
        repartiment-data · repartiment · seguiment · index-menu
  lib/  mammoth.browser.min.js
data/
  courses.json                  registre global de cursos
contingut/
  batxillerat/1r/pro/
    course.json                 metadades del curs
    programacio.docx            programació general
    Ud1.md … Ud6.md             unitats didàctiques
    pdfs/  *.pdf + manifest.json
    source/  fonts LaTeX (no servides; noindex)
_dev/                           material intern (no publicat)
```

## Continguts: Repartiment i Seguiment

L'índex inclou un desplegable **Continguts** amb dues opcions:

- **Repartiment** (`repartiment.html`) — taula del repartiment de continguts
  d'ESO per curs i sentit matemàtic, amb mode edició integrat que permet
  reordenar, afegir o suprimir temes i continguts i descarregar un
  `repartiment-data.js` actualitzat. Les dades viuen a
  `assets/js/repartiment-data.js`.
- **Seguiment** — enllaç a un Google Doc/Drive. L'adreça es llegeix de
  `seguiment-link.txt` (un fitxer de text pla amb només la URL). Per
  canviar-la, edita només aquell fitxer; cap línia de codi.

## Contractes de dades

- **`data/courses.json`** — llista de cursos amb `id`, `label`, `path`, `available`.
- **`course.json`** — `brand`, `brandSub`, `pdfPrefix`, `docx` (o `null`), `udMax`, `udTitles`.
- **`pdfs/manifest.json`** — `{ "pdfs": ["1bat-ud2-1.pdf", …] }`.

## Desenvolupament local

Cal servir per HTTP (no `file://`), perquè l'app llegeix dades amb `fetch()`:

```
python3 -m http.server 8000
```

## Convencions de noms

| Tipus | Convenció | Exemple |
|---|---|---|
| Unitats Markdown | `Ud{N}.md` | `Ud1.md` |
| PDFs de sessions | `{prefix}-ud{U}-{S}.pdf` | `1bat-ud2-3.pdf` |
| Programació DOCX | `programacio.docx` | (el nom real va a `course.json`) |
| Fonts LaTeX | `{prefix}-ud{U}-{S}.tex` | `1bat-ud2-3.tex` |
