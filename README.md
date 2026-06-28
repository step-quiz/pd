# Programació Didàctica Web

Visualitzador d'una sola pàgina (SPA) de programacions didàctiques de Matemàtiques.
HTML + CSS + JS vanilla, sense build. Es desplega a Cloudflare Pages.

## Com s'organitzen els cursos

Cada curs té **la seva pàgina HTML** a l'arrel (p. ex. `1r-bat-pro.html`,
`2n-bat-pro.html`). Aquesta pàgina només fa una cosa abans de carregar l'app: fixar la
ruta del curs en una variable global.

```html
<script>window.COURSE_PATH = 'contingut/batxillerat/2n/pro';</script>
```

`assets/js/course.js` llegeix `window.COURSE_PATH` i, a partir d'aquí, carrega amb
`fetch()`:

- `{COURSE_PATH}/course.json` → metadades del curs (marca, títols d'unitat, docx…)
- `{COURSE_PATH}/Ud{N}.md` → cada unitat didàctica
- `{COURSE_PATH}/pdfs/manifest.json` → llista de PDFs disponibles

**No hi ha cap registre global de cursos:** afegir un curs vol dir crear-ne la pàgina
HTML (amb el seu `COURSE_PATH`) i la carpeta de contingut corresponent. Cap línia de
codi de l'app.

## Afegir un curs nou

1. Crea la carpeta del curs sota `contingut/…/` amb un `course.json` a dins.
2. Hi deixes els `Ud{N}.md`, la programació (`programacio.docx`, o `null` si no n'hi
   ha) i els PDFs a `pdfs/` amb el seu `manifest.json`.
3. Crea una pàgina HTML a l'arrel (copiant-ne una d'existent) que fixi
   `window.COURSE_PATH` a la carpeta del pas 1, i enllaça-la des de l'índex.

## Estructura

```
index.html                      SPA shell / menú
1r-bat-pro.html                 pàgina del curs 1r (fixa COURSE_PATH)
2n-bat-pro.html                 pàgina del curs 2n (fixa COURSE_PATH)
repartiment.html                Repartiment de continguts ESO (taula per curs/sentit)
404.html                        pàgina d'error
seguiment-link.txt              URL del Google Doc/Drive de Seguiment (només la URL)
assets/
  css/  tokens · layout · components · rich · responsive · print · repartiment
  js/   utils · md · docx · fields · collapsible · pdf-panel · sidebar
        course · repartiment-data · repartiment · seguiment · index-menu
  lib/  mammoth.browser.min.js
contingut/
  batxillerat/1r/pro/
    course.json                 metadades del curs
    programacio.docx            programació general
    Ud1.md … Ud6.md             unitats didàctiques
    pdfs/    *.pdf + manifest.json
    source/  fonts LaTeX (no servides; noindex)
  batxillerat/2n/pro/           (mateixa estructura)
_dev/                           material intern (no publicat)
```

> Nota: la ruta del curs viu a cada pàgina HTML (`COURSE_PATH`), no en un fitxer de
> dades central. Si en algun moment es vol un menú de cursos generat per dades,
> caldria introduir un registre (p. ex. `data/courses.json`) i fer que l'índex el
> llegeixi; **avui això no existeix** i el menú és estàtic.

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

- **`course.json`** (per curs) — `brand`, `brandSub`, `pdfPrefix`, `docx` (o `null`),
  `udMax`, `udTitles`.
- **`pdfs/manifest.json`** (per curs) — `{ "pdfs": ["1bat-ud2-1.pdf", …] }`. És la
  font de veritat que decideix si una sessió mostra el botó "Veure PDF" o la insígnia
  "PDF en construcció".

## Generació dels PDFs (LaTeX)

Els PDFs de les sessions es generen a partir de fonts LaTeX a `{curs}/source/`. El
flux, les convencions d'estil i la infraestructura de compilació (wrapper per
curs/unitat, gràfiques TikZ/pgfplots, trampes habituals) estan documentats a
`_dev/BRIEFING-generacio-sessions.md`.

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
