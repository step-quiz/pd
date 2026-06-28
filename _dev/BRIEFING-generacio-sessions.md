# Briefing per a la generació de fitxers LaTeX — Sessions de batxillerat

## Matemàtiques Aplicades I i II · Batxillerat Professionalitzador en Serveis a la Comunitat · INS Miquel Tarradell

> Aquest briefing és **genèric**: serveix per generar les sessions de **qualsevol
> curs i qualsevol unitat didàctica** del projecte. No està lligat a una sola UD.
> Reemplaça la versió antiga (`BRIEFING-sessions-pendents.md`), que descrivia només
> una unitat concreta amb rutes i títols que ja no es corresponen amb el projecte.

---

## 0. Instruccions d'inici per a la IA (llegir PRIMER)

**Abans de generar cap sessió, llegeix els fitxers en aquest ordre:**

1. Aquest briefing — sencer.
2. `contingut/batxillerat/{curs}/pro/Ud{U}.md` — font de veritat pedagògica de les
   16 sessions de la unitat que estàs generant.
3. `contingut/batxillerat/{curs}/pro/source/defs.tex` — definicions de tots els
   entorns i comandes LaTeX (és **idèntic** als dos cursos).
4. `contingut/batxillerat/{curs}/pro/source/main.tex` — preàmbul complet (paquets
   disponibles), per fer el wrapper de compilació.
5. El fitxer `.tex` de la **sessió immediatament anterior** a la que has de generar,
   per assegurar la connexió entre sessions i el to exacte.

On `{curs}` és `1r` o `2n`, i `{U}` és el número d'unitat (1–6).

**Inici ràpid:** en rebre `ok, sN` (o equivalent), genera directament el `.tex` i el
PDF de la sessió N. No cal demanar confirmació de quin fitxer generar.

---

## 1. Context del projecte

És una **pàgina web de programació didàctica** (SPA estàtica, HTML/CSS/JS vanilla,
desplegada a Cloudflare Pages). Per a cada sessió, la web mostra un **panell de
material** que enllaça un PDF. Aquests PDFs es generen a partir de fitxers LaTeX
individuals, un per sessió.

Dos cursos, cadascun amb **6 unitats** de **16 sessions**:

| Curs | Matèria | Prefix PDF | Curs acadèmic |
|---|---|---|---|
| `1r` | Matemàtiques Aplicades I | `1bat` | 2026-27 |
| `2n` | Matemàtiques Aplicades II | `2bat` | 2027-28 |

Els títols vigents de cada unitat són la **font de veritat** del fitxer
`course.json` de cada curs (camp `udTitles`), no aquest briefing. Consulta-hi sempre
el títol exacte abans de redactar la portada d'una sessió.

### 1.1 Estat de generació (orientatiu — verifica'l abans de començar)

L'estat canvia a mesura que es generen sessions. Per saber l'estat **real** en
qualsevol moment, compta els fitxers:

```bash
ls contingut/batxillerat/{curs}/pro/source/{prefix}-ud{U}-*.tex | wc -l
ls contingut/batxillerat/{curs}/pro/pdfs/{prefix}-ud{U}-*.pdf  | wc -l
```

Instantània coneguda (pot haver avançat des d'aleshores):

| Curs · UD | Títol | `.tex` | `.pdf` |
|---|---|---|---|
| 1r · UD1 | Nombres reals, inequacions i intervals | 16 | 16 |
| 1r · UD2 | Llenguatge algebraic i polinomis | 16 | 15 ⚠️ |
| 1r · UD3 | Funcions i modelització social | 16 | 16 |
| 2n · UD1 | Matrices: organitzar i operar amb dades | 16 | 16 |
| 2n · UD2 | Programació lineal: decidir amb recursos limitats | 16 | 16 |
| 2n · UD3 | Límits i continuïtat: tendències i llindars | 16 | 16 |

> ⚠️ A 1r·UD2 hi ha 16 fonts `.tex` però 15 PDF (i el manifest de 1r en té 47, no
> 48): falta compilar/dipositar un PDF d'aquella unitat. Si treballes en aquella UD,
> comprova quina sessió queda sense PDF i quadra el manifest.

Les UD4–UD6 de tots dos cursos encara no estan generades (a data d'aquesta
instantània).

---

## 2. Com compilar el PDF d'una sessió (IMPORTANT)

Cada `{prefix}-ud{U}-{N}.tex` és un **fragment sense preàmbul**. Per generar-ne el PDF
individual, es crea un **wrapper temporal** `main-sN.tex` que replica el preàmbul real
de `main.tex` d'aquell curs, fixa el comptador de secció i fa `\input` del fragment.

**El wrapper depèn del curs i de la unitat** (capçalera, portada i títol de la UD
canvien). No existeix un wrapper universal. Construeix-lo a partir del `main.tex` real
del curs, canviant només:

- `\fancyhead[R]{...}` → `UD{U} · {títol curt de la unitat}`
- El bloc de portada (`\Huge Unitat Didàctica {U}` + `\LARGE {títol de la UD}`)
- `\setcounter{section}{N-1}` (perquè `\horatitol`, que crida `\section`, numeri la
  secció com a `N.`)
- `\input{{prefix}-ud{U}-{N}.tex}`

**Esquelet del wrapper** (omple els camps `{...}` segons curs/UD):

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[provide=*,catalan]{babel}
\usepackage{lmodern}
\usepackage{microtype}
\usepackage{amsmath,amssymb}
\usepackage{siunitx}
\sisetup{output-decimal-marker={,}, group-separator={.}, group-minimum-digits=4}
\usepackage[a4paper,margin=2.4cm]{geometry}
\usepackage{parskip}
\usepackage{enumitem}
\usepackage{booktabs}
\usepackage{array}
\usepackage{eurosym}
\usepackage{xcolor}
\usepackage[most]{tcolorbox}
\tcbuselibrary{breakable,skins}
\usepackage{graphicx}
\definecolor{udnavy}{HTML}{1F3A5F}
\definecolor{udblue}{HTML}{2E75B6}
% --- Gràfiques (vegeu §2.1). Necessari per a unitats amb figures. ---
\usepackage{tikz}
\usetikzlibrary{arrows.meta, calc, patterns}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usepgfplotslibrary{fillbetween}   % només si la unitat ombreja regions
% -------------------------------------------------------------------
\usepackage[colorlinks=true, linkcolor=udnavy, urlcolor=udblue, citecolor=udnavy]{hyperref}
\usepackage{fancyhdr}
\usepackage{titlesec}
\titleformat{\section}{\Large\bfseries\color{udnavy}}{\thesection.}{0.6em}{}
\titleformat{\subsection}{\large\bfseries\color{udblue}}{\thesubsection}{0.6em}{}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\color{udnavy} {Matèria} · {curs} Batx.\ PRO}
\fancyhead[R]{\small\color{udnavy} UD{U} · {títol curt de la unitat}}
\fancyfoot[C]{\small\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\input{defs.tex}
\begin{document}
\begin{titlepage}
\centering
\vspace*{3cm}
{\Large\bfseries\color{udnavy} {Matèria}\par}
\vspace{0.4cm}
{\large {curs} Batxillerat Professionalitzador en Serveis a la Comunitat\par}
\vspace{0.2cm}
{\large INS Miquel Tarradell · Curs {curs acadèmic}\par}
\vspace{2cm}
{\Huge\bfseries\color{udnavy} Unitat Didàctica {U}\par}
\vspace{0.4cm}
{\LARGE {títol complet de la unitat}\par}
\vspace{1.5cm}
{\large\itshape Exemples, exercicis resolts i exercicis per fer\par}
{\large Sessió N\par}
\vfill
\end{titlepage}
\setcounter{section}{N-1}
\input{{prefix}-ud{U}-N.tex}
\end{document}
```

**Notes de compilació:**
- Compilar **dues vegades** (la segona estabilitza referències i outlines).
- Si `lmodern` no es troba: `apt-get install -y lmodern` (només cal un cop).
- El wrapper **no** és un lliurable; el `.tex` de la sessió i el `.pdf` sí.
- Nom del PDF lliurable: `{prefix}-ud{U}-N.pdf` (no `main-sN.pdf`). Copia'l a
  `contingut/batxillerat/{curs}/pro/pdfs/` i esborra els temporals `main-sN.*`.
- **Verifica visualment** el render (p. ex. `pdftoppm -png -r 80 -f 2 -l 2 …`) abans
  de donar la sessió per bona, sobretot si conté figures.
- És pràctic deixar el wrapper en un script reutilitzable per curs/UD (un `wrap.sh N`
  que tingui fixos la capçalera i la portada d'aquella unitat).

### 2.1 Infraestructura de gràfiques (TikZ + pgfplots)

Les unitats amb figures (funcions, regions factibles, rectes reals, asímptotes,
funcions a trossos…) fan servir **TikZ + pgfplots**. Aquesta infraestructura ja està
instal·lada **als dos cursos**:

- A `source/main.tex` (de cada curs) hi ha, després de `graphicx`:
  `\usepackage{tikz}` amb `\usetikzlibrary{arrows.meta, calc, patterns}`,
  `\usepackage{pgfplots}` i `\pgfplotsset{compat=1.18}`.
- A `source/defs.tex` (de cada curs) hi ha, al final, l'estil comú d'eixos
  **`udaxis`** (eixos al mig amb fletxes Stealth en `udgrey`, graella en `udline`) i
  la comanda **`\figcap{…}`** per als peus de figura. Els colors `udgrey` i `udline`
  ja estan definits a `defs.tex`.

Convencions de figures:
- Eixos amb `\begin{axis}[udaxis, …]`; peus de figura amb `\figcap{…}` dins d'un
  `center`, després del dibuix.
- **Recta real** amb punts plens/buits: `\fill[udblue] … circle` (extrem inclòs, ●) i
  `\draw[udblue,fill=white] … circle` (extrem exclòs, ○).
- **Funció amb salt** (a trossos): `mark=*` (punt tancat) i `mark=o` (punt obert).
- **Regions ombrejades** (programació lineal): cal
  `\usepgfplotslibrary{fillbetween}` al wrapper, i `\addplot[fill] fill between […]`
  o un `\fill` directe sobre els vèrtexs del polígon.
- **Verifica la geometria** amb un càlcul ràpid (p. ex. Python) abans de finalitzar:
  els vèrtexs d'una regió han de ser correctes (idealment enters); comprova que cap
  restricció no és redundant i que les taules de valors quadren amb la corba dibuixada.

---

## 3. Estudi pedagògic del projecte

### 3.1 Perfil de l'alumnat

El Batxillerat Professionalitzador en Serveis a la Comunitat atreu alumnat amb una
**motivació per les persones per sobre de l'abstracció matemàtica**. Molts arrosseguen
inseguretats del càlcul de l'ESO (signes, jerarquia d'operacions, fraccions). El punt
fort és la connexió amb contextos reals: prestacions socials, llindars de renda,
pressupostos d'entitats, ocupació de serveis, índexs de vulnerabilitat.

### 3.2 Principis metodològics

| Principi | Concreció als fitxers TEX |
|---|---|
| **Contextualització real** | Tots els exemples i exercicis usen dades i situacions de l'àmbit social i comunitari (serveis socials, ajuts, casals, entitats, pressupostos públics) |
| **Seqüència didàctica fixa** | Cada sessió segueix: Idea clau → Exemples → Exercicis resolts → Exercicis per fer → Full de solucions |
| **Jerarquia progressiva** | Dins de cada sessió, els exercicis per fer van de més guiats a més oberts |
| **Connexió entre sessions** | Cada sessió recull explícitament allò treballat a l'anterior |
| **Atenció a la diversitat** | Les sessions de consolidació inclouen itinerari mínim i exercicis d'ampliació |
| **Avaluació formativa** | Cada sessió tanca amb una evidència clara |

### 3.3 Tipus de sessió (patró recurrent a totes les unitats)

Cada UD de 16 sessions barreja sessions "normals" amb sessions especials. Els tipus
més habituals (marcats sovint amb ⁺ a la programació quan són aportació de la
proposta):

- **Descoberta / aules pensants** — exploració en grup a les pissarres, abans de cap
  formalització; sovint un cas real "mut" que l'alumnat ha de desxifrar.
- **Consolidació** — dinàmica **"caça l'error"** (exercicis resolts, alguns malament),
  `Idea clau` que llista els errors típics del bloc, i un exercici final
  d'**autoavaluació** (graella `tabular` Sol / Amb ajuda / Encara no). Nota
  `\textbf{Atenció a la diversitat}` en prosa amb itinerari mínim i ampliació.
- **Estudi de cas** — un cas real complet de cap a cap, amb interpretació social.
- **Pràctica tecnològica (GeoGebra)** — els "exercicis per fer" són tasques de
  comprovació visual ("introdueix X a GeoGebra, observa…, coincideix amb el càlcul a
  mà?"); inclou un full de validació i la idea d'**autocorrecció** (la màquina detecta
  errors del càlcul manual).
- **Estacions** — repàs per **4 estacions** (una per bloc/criteri) + un **mapa de la
  unitat** (taula) que connecta cada eina amb el seu context o concepte.
- **Taller de preparació de la prova** — estructura de la prova (4 blocs, C1–C4),
  **rúbrica** (AE/AN/AS/NA), **simulacre** (un ítem per bloc), coavaluació,
  formulari-resum i **pla d'estudi personal**.
- **Prova** (sessió 16) — format d'examen: capçalera amb dades de l'alumne
  (`tcolorbox`), blocs per criteri (C1–C4) amb pesos orientatius, i **solucionari per
  al professorat després d'un `\newpage`** (perquè el docent pugui imprimir només
  l'enunciat o tot el document). Inclou una nota final d'orientació de qualificació.

---

## 4. Estructura i convencions dels fitxers `.tex`

### 4.1 El fitxer NO porta preàmbul

Cada `{prefix}-ud{U}-{N}.tex` és un fragment que comença directament amb `\horatitol`.
No conté `\documentclass`, `\usepackage` ni `\begin{document}`.

### 4.2 Capçalera de comentari

```latex
% =====================================================================
%  {prefix}-ud{U}-N.tex  —  SESSIÓ N: [Títol de la sessió]
%  (sense preàmbul: s'inclou des de main.tex)
% =====================================================================
```

### 4.3 Comanda `\horatitol`

```latex
\horatitol{Sessió N — [Títol]}%
{[Subtítol breu que descriu la idea central, en una línia.]}
```

### 4.4 Subsecció `Idea clau`

- 2-4 línies de prosa accessible, connectant amb la sessió anterior.
- **Obligatòriament** un entorn `\begin{idea} ... \end{idea}` amb la definició, regla
  o fórmula clau.

### 4.5 Subsecció `Exemples`

**2 exemples** en entorns `\begin{exemple}[títol del context social] ... \end{exemple}`.

### 4.6 Subsecció `Exercicis resolts`

**2 exercicis resolts** en entorns `\begin{exresolt}[títol] ... \end{exresolt}`, amb:
- Enunciat contextualitzat.
- `\solucio` + resolució pas a pas verbalitzant cada pas.
- `\resposta{...}` al final.

### 4.7 Subsecció `Exercicis per fer`

```latex
\subsection{Exercicis per fer}
\begin{exercicis}
\begin{exlist}
  \item ...
\end{exlist}
\end{exercicis}
```

**6 exercicis** graduats: mecànics → contextualitzats → amb marcador d'atenció →
oberts d'interpretació/raonament.

### 4.8 Full de solucions

```latex
% ---------------------------------------------------------------------
\fullsolucions{Sessió N}
\begin{solucions}
\begin{sollist}
  \item [resposta final, sense resolució detallada]
  ...
\end{sollist}
\end{solucions}
```

> Les sessions especials adapten aquesta estructura (vegeu §3.3): p. ex. la prova no
> té `Idea clau` ni `Exercicis resolts`, sinó capçalera + blocs + solucionari post
> `\newpage`; les estacions substitueixen `Exercicis per fer` per blocs d'estació.

---

## 5. Convencions tipogràfiques

### 5.1 Matemàtiques

- Inline: `$...$`. Bloc: `\[ ... \]` o `align*`.
- Decimals amb coma: `\num{0,05}`. **Mai** `0.05` en mode matemàtic.
- Milers: `\num{1000}` → `1.000`.
- Multiplicació: `\per` (= `\cdot`). **Mai** `\times`.
- Euros: `\eur`. Exemple: `$500\eur$`.

### 5.2 ⚠️ Trampa recurrent: caràcters Unicode / ciríl·lics

És l'error de compilació **més freqüent** del projecte. En escriure text català,
s'hi colen caràcters ciríl·lics que **semblen** llatins però trenquen `pdflatex` (p.
ex. «Quин» amb и/н ciríl·liques en lloc de «Quin»). També cal evitar el menys Unicode
`−` (U+2212) en mode matemàtic: fes servir el guió ASCII `-`.

Si una compilació falla sense causa òbvia, cerca caràcters fora de l'ASCII/llatí:

```bash
grep -nP "[\x{0400}-\x{04FF}]" {prefix}-ud{U}-N.tex   # rang ciríl·lic
```

### 5.3 Marcadors de dificultat (entre parèntesis i en negreta)

`\textbf{(Compte amb el signe)}`, `\textbf{(Compte amb la jerarquia)}`,
`\textbf{(Interpretació)}`, `\textbf{(Raonament)}`, `\textbf{(Caça l'error)}`,
`\textbf{(Decisió justificada)}`, `\textbf{(Ampliació)}`… Tria els que escaiguin al
contingut.

---

## 6. Protocol de generació

**Un fitxer per torn.** Flux:

1. L'usuari diu `ok, sN` (o equivalent).
2. La IA genera `{prefix}-ud{U}-N.tex` **i** el PDF `{prefix}-ud{U}-N.pdf` en el
   mateix torn, i en verifica visualment el render.
3. **Només a la sessió 16** (última de la unitat) s'actualitza el
   `pdfs/manifest.json` del curs afegint-hi els PDF de la unitat. (En el mode de
   treball eficient acordat, el manifest no es lliura sessió a sessió, sinó un sol cop
   en tancar la unitat.) El `manifest.json` és la **font de veritat** que fa servir la
   web per decidir si mostra el botó "Veure PDF" o la insígnia "PDF en construcció":
   si s'oblida, el PDF existirà però la web el mostrarà com a pendent.
4. Es lliuren els fitxers de la sessió (`.tex` i `.pdf`; més `manifest.json` a la
   sessió 16) i s'espera la confirmació abans de passar a `N+1`.

Cada fitxer ha de:
- No tenir preàmbul (fragment pur).
- Seguir les convencions de les seccions 4 i 5 i el tipus de sessió de §3.3.
- Usar únicament els entorns i comandes de `defs.tex`.
- Ser coherent amb `Ud{U}.md` i connectar explícitament amb la sessió anterior.
- Tenir la geometria de les figures verificada (§2.1).

---

## 7. Fitxers de referència (per a cada curs/UD)

| Fitxer | Ús |
|---|---|
| `contingut/batxillerat/{curs}/pro/Ud{U}.md` | Font de veritat pedagògica de les 16 sessions |
| `contingut/batxillerat/{curs}/pro/course.json` | Títols oficials de les unitats (`udTitles`), marca, prefix |
| `contingut/batxillerat/{curs}/pro/source/defs.tex` | Tots els entorns i comandes LaTeX + estil de gràfiques |
| `contingut/batxillerat/{curs}/pro/source/main.tex` | Preàmbul complet (base per al wrapper) |
| `contingut/batxillerat/{curs}/pro/source/{prefix}-ud{U}-{N}.tex` | Sessions ja generades: models d'estil i to |
| `contingut/batxillerat/{curs}/pro/pdfs/manifest.json` | Catàleg de PDF disponibles (actualitzar a la sessió 16) |

**Convenció de noms** (resum):

| Tipus | Convenció | Exemple |
|---|---|---|
| Unitats Markdown | `Ud{U}.md` | `Ud3.md` |
| Fonts LaTeX | `{prefix}-ud{U}-{N}.tex` | `2bat-ud3-9.tex` |
| PDFs de sessions | `{prefix}-ud{U}-{N}.pdf` | `2bat-ud3-9.pdf` |
