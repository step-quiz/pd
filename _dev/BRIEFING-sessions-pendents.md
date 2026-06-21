# Briefing per a la generació de fitxers LaTeX — Sessions pendents
## Matemàtiques Aplicades I · 1r Batxillerat Professionalitzador · Unitat Didàctica 2

---

## 0. Instruccions d'inici per a la IA (llegir PRIMER)

**Abans de fer res, llegeix els fitxers en aquest ordre:**

1. Aquest fitxer (briefing) — llegeix-lo sencer.
2. `1r-bat-pro-data/Ud2.md` — font de veritat pedagògica de les 16 sessions.
3. `source/defs.tex` — definicions de tots els entorns i comandes LaTeX.
4. `source/main.tex` — preàmbul complet (paquets disponibles).
5. El fitxer `.tex` de la sessió immediatament anterior a la que has de generar (per assegurar la connexió entre sessions i el to exacte).

**No cal llegir els PDFs existents ni inspeccionar-los.** No cal deduir res per inspecció: tota la informació necessària és a aquest briefing i als fitxers llistats.

**Inici ràpid:** en rebre la petició `ok, sN` o similar, genera directament el fitxer `1bat-ud2-N.tex` i el seu PDF. No cal demanar confirmació de quin fitxer generar.

---

## 1. Context del projecte

Es tracta d'una **pàgina web de programació didàctica** per a l'assignatura de Matemàtiques Aplicades I del 1r Batxillerat Professionalitzador en Serveis a la Comunitat (INS Miquel Tarradell, curs 2026-27).

La web mostra, per a cada sessió, un **panell de material** que enllaça el PDF corresponent. Aquests PDFs es generen a partir de fitxers LaTeX individuals (un per sessió).

La Unitat Didàctica 2 té **16 sessions**. Les sessions 1–9 ja estan generades. Les pendents són:

```
source/1bat-ud2-10.tex  ← pendent
source/1bat-ud2-11.tex  ← pendent
source/1bat-ud2-12.tex  ← pendent
source/1bat-ud2-13.tex  ← pendent
source/1bat-ud2-14.tex  ← pendent
source/1bat-ud2-15.tex  ← pendent
source/1bat-ud2-16.tex  ← pendent
```

Els PDFs es dipositen a `1r-bat-pro-data/1bat-ud2-N.pdf`.

---

## 2. Com compilar el PDF d'una sessió (IMPORTANT)

Cada `1bat-ud2-N.tex` és un **fragment sense preàmbul**. Per generar el PDF individual de la sessió N, cal crear un fitxer wrapper temporal `main-sN.tex` amb aquest esquelet exacte i compilar-lo amb `pdflatex`:

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
\usepackage[colorlinks=true, linkcolor=udnavy, urlcolor=udblue, citecolor=udnavy]{hyperref}
\usepackage{fancyhdr}
\usepackage{titlesec}
\titleformat{\section}{\Large\bfseries\color{udnavy}}{\thesection.}{0.6em}{}
\titleformat{\subsection}{\large\bfseries\color{udblue}}{\thesubsection}{0.6em}{}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\color{udnavy} Matemàtiques Aplicades I · 1r Batx.\ PRO}
\fancyhead[R]{\small\color{udnavy} UD2 · Llenguatge algebraic}
\fancyfoot[C]{\small\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\input{defs.tex}
\begin{document}
\begin{titlepage}
\centering
\vspace*{3cm}
{\Large\bfseries\color{udnavy} Matemàtiques Aplicades I\par}
\vspace{0.4cm}
{\large 1r Batxillerat Professionalitzador en Serveis a la Comunitat\par}
\vspace{0.2cm}
{\large INS Miquel Tarradell · Curs 2026-27\par}
\vspace{2cm}
{\Huge\bfseries\color{udnavy} Unitat Didàctica 2\par}
\vspace{0.4cm}
{\LARGE Llenguatge algebraic, polinomis\\ i fórmules socials\par}
\vspace{1.5cm}
{\large\itshape Exemples, exercicis resolts i exercicis per fer\par}
{\large Sessió N\par}          % <-- canvia N pel número real
\vfill
\end{titlepage}
\setcounter{section}{N-1}      % <-- N-1, perquè \section incrementa a N
\input{1bat-ud2-N.tex}         % <-- el fitxer de la sessió
\end{document}
```

**Notes de compilació:**
- Compilar **dues vegades** (la segona estabilitza referències i outlines).
- El `\setcounter{section}{N-1}` fa que `\horatitol` (que crida `\section`) numeri la secció com a `N.`, en coherència amb el número de sessió.
- No hi ha `\tableofcontents` en els PDFs individuals.
- Si `lmodern` no es troba: `apt-get install -y lmodern` (entorn Linux).
- El fitxer wrapper **no** és un lliurable; només el `.tex` de la sessió i el `.pdf` resultant ho són.
- Nom del PDF lliurable: `1bat-ud2-N.pdf` (no `main-sN.pdf`).

---

## 3. Estudi pedagògic del projecte

### 3.1 Perfil de l'alumnat

El Batxillerat Professionalitzador en Serveis a la Comunitat atreu alumnat amb una **motivació per les persones per sobre de l'abstracció matemàtica**. Molts arrosseguen inseguretats del càlcul de l'ESO (signes, jerarquia d'operacions, fraccions). El punt fort és la seva connexió amb contextos reals: copagaments, prestacions socials, pressupostos d'entitats, índexs de vulnerabilitat.

### 3.2 Principis metodològics

| Principi | Concreció als fitxers TEX |
|---|---|
| **Contextualització real** | Tots els exemples i exercicis usen dades i situacions de l'àmbit social i comunitari (serveis socials, ajuts, casals, entitats) |
| **Seqüència didàctica fixa** | Cada sessió segueix: Idea clau → Exemples → Exercicis resolts → Exercicis per fer → Full de solucions |
| **Jerarquia progressiva** | Dins de cada sessió, els exercicis per fer van de més guiats a més oberts |
| **Connexió entre sessions** | Cada sessió recull explícitament allò treballat a la sessió anterior |
| **Atenció a la diversitat** | Les sessions de consolidació (5, 9, 15) inclouen itinerari mínim i exercicis d'ampliació |
| **Avaluació formativa** | Cada sessió tanca amb una evidència clara |

### 3.3 Mapa de sessions i contingut

| Sessió | Títol | Contingut matemàtic central | Metodologia |
|---|---|---|---|
| 1 ✓ | Del nombre concret a la lletra | Variable, expressió algebraica, traducció frase→símbol | Magistral + pràctica |
| 2 ✓ | La regla general d'un servei | Terme independent + coeficient, cost fix + variable | Aules pensants |
| 3 ✓ | Formalització del llenguatge algebraic | Vocabulari: terme, coeficient, grau, polinomi | Magistral + parelles |
| 4 ✓ | L'avaluador d'expedients | Valor numèric, jerarquia d'operacions, grau 2 | Treball pràctic |
| 5 ✓ ⁺ | Valor numèric: jerarquia i casos difícils | Substitució amb negatius, fraccions, dues variables | Consolidació |
| 6 ✓ | Sumar i restar pressupostos | Termes semblants, suma i resta de polinomis | Aules pensants + magistral |
| 7 ✓ | Pressupostos integrats | Producte d'un nombre per un polinomi | Treball pràctic |
| 8 ✓ | Gimnàstica algebraica | Mecanització: sumes, restes i productes | Treball pràctic |
| 9 ✓ ⁺ | Consolidació d'operacions amb polinomis | Caça l'error, restes i productes difícils | Consolidació |
| **10** | Igualar a zero: equacions de primer grau | Arrel d'un polinomi de primer grau; llindar d'exclusió | Magistral + pràctic |
| **11** | Arrels de segon grau: la fórmula | Fórmula general $ax^2+bx+c=0$; discriminant; 0/1/2 solucions | Magistral + pràctic |
| **12** | On es talla l'aixeta? | Arrels en context; llindar d'exclusió de la prestació | Treball pràctic |
| **13** ⁺ | Veure les arrels amb GeoGebra | Representació gràfica; arrels = tall a l'eix horitzontal | Pràctica tecnològica |
| **14** | Repàs global i síntesi (estacions) | 4 estacions: traducció, valor numèric, operacions, arrels | Síntesi/repàs |
| **15** ⁺ | Taller de preparació de la prova | Simulacre per blocs, rúbrica, coavaluació, pla d'estudi | Repàs guiat |
| **16** | Prova escrita de la UD2 | Prova individual cobrint C1-C4 | Avaluació |

---

## 4. Estructura i convencions dels fitxers `.tex`

### 4.1 El fitxer NO porta preàmbul

Cada `1bat-ud2-N.tex` és un fragment que comença directament amb `\horatitol`. No conté `\documentclass`, `\usepackage`, ni `\begin{document}`.

### 4.2 Primera línia obligatòria

```latex
% =====================================================================
%  1bat-ud2-N.tex  —  HORA N: [Títol de la sessió]
%  (sense preàmbul: s'inclou des de main.tex)
% =====================================================================
```

### 4.3 Comanda `\horatitol`

```latex
\horatitol{Sessió N — [Títol]}%
{[Subtítol breu que descriu la idea central, en una línia.]}
```

### 4.4 Subsecció `Idea clau`

```latex
\subsection{Idea clau}
```

- 2-4 línies de prosa accessible, connectant amb la sessió anterior.
- **Obligatòriament** un entorn `\begin{idea} ... \end{idea}` amb la definició, regla o fórmula clau.

### 4.5 Subsecció `Exemples`

**2 exemples** en entorns `\begin{exemple}[títol del context social] ... \end{exemple}`.

### 4.6 Subsecció `Exercicis resolts`

**2 exercicis resolts** en entorns `\begin{exresolt}[títol] ... \end{exresolt}`, cadascun amb:
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

**6 exercicis** graduats: 1-2 mecànics, 3-4 contextualitzats, 5 amb `\textbf{(Compte amb...)}`, 6 amb `\textbf{(Interpretació)}` o `\textbf{(Raonament)}`.

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

---

## 5. Convencions tipogràfiques

### 5.1 Matemàtiques

- Inline: `$...$`. Bloc: `\[ ... \]` o `align*`.
- Decimals amb coma: `\num{0,05}`. **Mai** `0.05` ni `0,05` directe en mode matemàtic.
- Milers: `\num{1000}` → `1.000`.
- Multiplicació: `\per` (= `\cdot`). **Mai** `\times`.
- Euros: `\eur`. Exemple: `$500\eur$`.
- **Compte:** no usar caràcters Unicode com `−` (U+2212) en mode matemàtic; usar el guió ASCII `-`.

### 5.2 Contextos socials recurrents (usar sempre les mateixes fórmules)

| Situació | Fórmula canònica |
|---|---|
| Copagament | `C(x) = \num{0,05}x^2 - 10x + 500` (x = renda mensual en €) |
| Cost fix + variable | `C = a + bx` (x = usuaris, hores, àpats…) |
| Prestació decreixent | `B(x) = -20x + 600` (x = ingressos en milers €) |
| Pressupost casal de joves | `P(x) = \num{1500}x + \num{2000}`, `M(x) = 50x^2 + 300x` |
| Índex de vulnerabilitat | polinomis amb variables d'ingressos i nombre de membres |

### 5.3 Marcadors de dificultat

- `\textbf{(Compte amb el signe)}` — perill: signe negatiu.
- `\textbf{(Compte amb la jerarquia)}` — perill: ordre d'operacions.
- `\textbf{(Interpretació)}` — cal donar sentit al resultat en context.
- `\textbf{(Raonament)}` — resposta oberta sense valor únic.
- `\textbf{(Ampliació)}` — opcional, sessions de consolidació.

---

## 6. Consideracions especials per sessió

### 6.1 Sessions de consolidació (5 ✓, 9 ✓, 15)

- Obertura amb dinàmica **"caça l'error"**: 2-3 exercicis ja resolts, alguns malament.
- `Idea clau` llista explícitament els errors típics del bloc (en `itemize`).
- Un dels últims exercicis per fer és d'**autoavaluació** (graella `tabular` amb columnes Domino / Quasi / Em costa i `$\square$`).
- Nota `\textbf{Atenció a la diversitat:}` en prosa al final de `exercicis` (fora de `exlist`), amb itinerari mínim i ampliació.

### 6.2 Sessió 13 (GeoGebra)

Els "exercicis per fer" són **tasques de comprovació visual**: "Introdueix a GeoGebra el polinomi X. Observa on talla l'eix horitzontal. Coincideix amb l'arrel calculada a la sessió N?". Mateixos entorns, to adaptat.

### 6.3 Sessió 14 (estacions)

En lloc de `\subsection{Exercicis per fer}`, usar **4 blocs** amb `\subsection*{Estació A — [nom]}` i un entorn `exercicis` per estació, cadascun amb 1-2 ítems.

### 6.4 Sessió 15 (simulacre)

Exercicis per fer en format de simulacre de prova: 4 blocs (C1–C4), un ítem per bloc, temps orientatiu indicat. Afegir al final `\subsection*{Pla d'estudi personal}` amb una graella on l'alumne marca el seu nivell per bloc.

### 6.5 Sessió 16 (prova)

- **No hi ha** `\subsection{Idea clau}` ni `\subsection{Exercicis resolts}`.
- Substituir per `\subsection{Instruccions}` i `\subsection{Rúbrica}`.
- Els exercicis per fer **SÓN la prova**: 4 problemes (un per C1–C4), amb `\vspace{3cm}` per a l'espai de resposta i una taula de rúbrica final (nivells NA/AS/AN/AE per criteri).

---

## 7. Protocol de generació

**Un fitxer per torn.** Flux:

1. L'usuari diu `ok, sN` (o equivalent).
2. La IA genera `1bat-ud2-N.tex` **i** el PDF `1bat-ud2-N.pdf` en el mateix torn.
3. **Afegeix `"1bat-ud2-N.pdf"` a la llista `pdfs` de `1r-bat-pro-data/manifest.json`** (mantenir-la ordenada). Aquest fitxer és la **font de veritat** que fa servir `index.html` per decidir si mostra el botó "Veure PDF" o la insígnia "PDF en construcció" — si s'oblida aquest pas, el PDF existirà però la web seguirà mostrant-lo com a pendent. (El mateix `manifest.json` també declara, al camp `docx`, quin és el fitxer de la programació general; no cal tocar-lo en aquest flux.)
4. Lliura els tres fitxers (`.tex`, `.pdf`, `manifest.json` actualitzat) i espera confirmació abans de passar a `N+1`.

Cada fitxer ha de:
- No tenir preàmbul (fragment pur).
- Seguir les convencions de les seccions 4, 5 i 6.
- Usar únicament els entorns i comandes de `defs.tex`.
- Ser coherent amb `Ud2.md` i connectar explícitament amb la sessió anterior.

---

## 8. Fitxers de referència al ZIP

| Fitxer | Ús |
|---|---|
| `1r-bat-pro-data/Ud2.md` | Font de veritat pedagògica: 16 sessions detallades |
| `source/defs.tex` | Tots els entorns i comandes LaTeX del projecte |
| `source/main.tex` | Preàmbul complet (base per al wrapper de compilació) |
| `source/1bat-ud2-4.tex` | Model de sessió pràctica amb polinomi de grau 2 |
| `source/1bat-ud2-N.tex` (N=1..9) | Sessions ja generades, models d'estil i to |

**No cal inspeccionar els PDFs existents.** La informació sobre estructura i numeració és aquí (secció 2).

---

## 9. Llista de tasques pendents

- [ ] `1bat-ud2-10.tex` — Sessió 10: Igualar a zero (equacions de 1r grau)
- [ ] `1bat-ud2-11.tex` — Sessió 11: Arrels de segon grau: la fórmula
- [ ] `1bat-ud2-12.tex` — Sessió 12: On es talla l'aixeta?
- [ ] `1bat-ud2-13.tex` — Sessió 13 ⁺: Veure les arrels amb GeoGebra
- [ ] `1bat-ud2-14.tex` — Sessió 14: Repàs global i síntesi (estacions)
- [ ] `1bat-ud2-15.tex` — Sessió 15 ⁺: Taller de preparació de la prova
- [ ] `1bat-ud2-16.tex` — Sessió 16: Prova escrita de la UD2
