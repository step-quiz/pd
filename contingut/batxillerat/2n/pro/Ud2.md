# Proposta detallada d'activitats — Unitat Didàctica 2
## Programació lineal: decidir amb recursos limitats

**Matemàtiques Aplicades II · 2n Batxillerat Professionalitzador en Serveis a la Comunitat**
**INS Miquel Tarradell · Curs 2027-28 · 16 hores**

---

Aquest document desenvolupa, sessió a sessió, les 16 hores previstes per a la Unitat Didàctica 2 a la programació general de Matemàtiques Aplicades II. Pren com a punt de partida els objectius, els criteris d'avaluació, els materials i les quatre activitats ja definides («Quantes combinacions són possibles?», «La regió de les decisions possibles», «Maximitzar la cobertura social» i «Minimitzar el cost d'un servei»), i les seqüencia seguint el mateix patró metodològic establert a la programació (aules pensants → classe magistral → treball pràctic i estudi de casos), tot afegint les sessions de connexió, consolidació i ampliació necessàries (recuperació de les inequacions de 1r, primer contacte amb GeoGebra per a regions, consolidació de la traducció de restriccions, mecanització de l'avaluació als vèrtexs, casos especials i un taller de preparació de la prova) per completar un itinerari de 16 hores coherent amb el perfil d'alumnat del Batxillerat Professionalitzador en Serveis a la Comunitat: motivació per les persones per sobre de l'abstracció matemàtica, contextos reals dels àmbits social i comunitari, i èmfasi en el pensament crític davant de dades. La programació lineal és un context potentíssim i molt natural per a aquest perfil: tracta de repartir recursos limitats (un pressupost, unes hores de personal, unes places) entre serveis per maximitzar la cobertura o minimitzar el cost, exactament el tipus de decisió que es pren en la gestió de projectes socials. La unitat recupera i amplia les inequacions de la UD1 de 1r, aprofita les matrices i la lògica d'assignació de la UD1 de 2n, i integra GeoGebra com a eina per visualitzar regions factibles, vinculada a l'instrument «Treballs pràctics i tecnològics».

### Llegenda

| Codi | Objectiu de la UD2 |
| --- | --- |
| **O1** | Plantejar i representar gràficament inequacions amb dues variables, recuperant i ampliant el treball amb inequacions de la UD1 de 1r. |
| **O2** | Determinar la regió factible d'un conjunt de restriccions i interpretar-la com el conjunt de decisions possibles davant d'uns recursos limitats. |
| **O3** | Optimitzar una funció objectiu (maximitzar cobertura o minimitzar cost) sobre la regió factible i interpretar la solució en termes d'assignació de recursos. |

| Codi | Criteri d'avaluació de la UD2 |
| --- | --- |
| **C1** | Tradueix les condicions d'un problema real (pressupost, hores de personal, places disponibles) a un sistema d'inequacions amb dues variables. |
| **C2** | Representa gràficament les restriccions i identifica correctament la regió factible, distingint quan una vora hi és inclosa o exclosa. |
| **C3** | Defineix la funció objectiu del problema i en troba el màxim o el mínim avaluant-la als vèrtexs de la regió factible. |
| **C4** | Interpreta la solució òptima en el context social (com repartir els recursos) i en valora la viabilitat pràctica. |

### Visió general de les 16 hores

Cada fila correspon a una hora lectiva (60 min). Les sessions marcades amb ⁺ són les incorporades per completar i consolidar l'itinerari de 16 hores.

| # | Títol | Agrupament dominant | Metodologia | Referència a la programació |
| --- | --- | --- | --- | --- |
| 1 ⁺ | Les inequacions de 1r, ara amb dues variables | Individual + gran grup | Repte curt + classe magistral | Connexió amb la UD1 de 1r |
| 2 | Representar una inequació amb dues variables | Gran grup + parelles | Classe magistral + pràctic | Pas previ a l'Activitat 1 |
| 3 | Quantes combinacions són possibles? (descoberta) | Grups aleatoris, pissarres verticals | Aules pensants | Activitat 1 |
| 4 | Sistemes d'inequacions: on es creuen les condicions | Gran grup + parelles | Classe magistral | Pas previ a l'Activitat 2 |
| 5 | La regió de les decisions possibles | Parelles | Treball pràctic / estudi de cas | Activitat 2 |
| 6 ⁺ | GeoGebra: dibuixar regions factibles | Parelles (ordinador/tauleta) | Treball pràctic i tecnològic | Reforç de la pràctica amb GeoGebra |
| 7 ⁺ | Consolidació: traduir i representar restriccions | Parelles + individual | Treball pràctic (consolidació) | Reforç de C1 i C2 |
| 8 | Els vèrtexs i la funció objectiu | Gran grup + parelles | Classe magistral | Pas previ a l'Activitat 3 |
| 9 | Maximitzar la cobertura social | Parelles | Treball pràctic / estudi de cas | Activitat 3 |
| 10 ⁺ | Avaluar als vèrtexs (mecanització) | Parelles | Treball pràctic (mecanització) | Reforç de C3 |
| 11 | Minimitzar el cost d'un servei | Parelles | Treball pràctic / estudi de cas | Activitat 4 |
| 12 ⁺ | Casos especials: solució múltiple o regió no acotada | Grups aleatoris + parelles | Aules pensants + classe magistral | Ampliació de C3 i C4 |
| 13 ⁺ | Cas real complet amb GeoGebra | Parelles (ordinador/tauleta) | Treball pràctic i tecnològic / estudi de cas | Integració de tot el mètode |
| 14 | Repàs global i síntesi (estacions) | Grups aleatoris (estacions) | Síntesi/repàs | Tancament de la unitat |
| 15 ⁺ | Taller de preparació de la prova | Parelles + individual | Repàs guiat / autoavaluació | Preparació de l'instrument «Proves escrites» |
| 16 | Prova escrita de la UD2 | Individual | Avaluació | Instrument «Proves escrites» (60%) |

---

## Sessió 1 ⁺ — Les inequacions de 1r, ara amb dues variables

**Agrupament:** individual + gran grup · **Objectius/criteris:** transversal, prepara O1 · **Correspon a:** connexió amb la UD1 de 1r (inequacions i intervals).

**Materials:** llibreta de quadres, pissarra, full breu amb inequacions d'una variable de contextos socials.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | Repàs ràpid: inequacions d'una variable de 1r |
| Desenvolupament | 33 min | De la recta al pla: aparició de la segona variable |
| Tancament | 15 min | Posada en comú i reflexió breu individual |

**Desenvolupament detallat:** La unitat arrenca recuperant les inequacions d'una variable que l'alumnat va treballar a la UD1 de 1r (llindars de renda, franges d'edat), per assegurar que la base hi és abans de fer el salt. Es resolen un parell d'inequacions senzilles d'un context social i es repassa la seva representació a la recta. A continuació es planteja una situació en què hi ha dues quantitats que poden variar alhora (per exemple, una entitat reparteix els seus diners entre dos programes, i el total no pot superar un màxim): aquí ja no n'hi ha prou amb una recta, perquè hi ha dues variables. D'aquí emergeix la necessitat de representar la condició al pla, no en una recta. El docent fa veure, de manera intuïtiva, que una condició com «el cost del programa A més el del programa B no pot superar 5.000 €» es pot escriure com una inequació amb dues variables i que les combinacions que la compleixen formen tota una zona del pla. El docent recull breument el punt de partida del grup (qui recorda resoldre i representar inequacions de 1r i qui no), sense que sigui una prova avaluable. Al tancament, cada alumne anota amb les seves paraules què canvia quan en lloc d'una incògnita en tenim dues.

**Evidència d'avaluació formativa:** full de connexió i reflexió individual (no computa a la nota; orienta la planificació docent).

**Atenció a la diversitat:** per a l'alumnat amb més inseguretat amb les inequacions o amb la representació al pla es preveuen agrupaments heterogenis a les pissarres verticals de les properes sessions i una fitxa de suport (com es resol una inequació de primer grau, com es representen punts i rectes al pla) que es podrà tenir a mà durant la unitat i retirar progressivament.

---

## Sessió 2 — Representar una inequació amb dues variables

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O1 / C2 · **Correspon a:** pas previ necessari a l'Activitat 1.

**Materials:** llibreta de quadres, regle, pissarra, full amb inequacions amb dues variables de contextos socials.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | De la recta frontera al semiplà solució |
| Desenvolupament | 35 min | Classe magistral (representar una inequació) + pràctica |
| Tancament | 10 min | Decidir quin costat és la solució |

**Desenvolupament detallat:** Aquesta sessió formalitza com es representa una inequació amb dues variables. La classe magistral mostra el procediment: primer es dibuixa la recta frontera (canviant la desigualtat per una igualtat), tot decidint si és contínua (vora inclosa, ≤ o ≥) o discontínua (vora exclosa, < o >), i després es decideix quin dels dos semiplans és la zona solució, comprovant un punt senzill (sovint l'origen). Es treballa amb inequacions extretes de contextos socials reals (per exemple, condicions de pressupost o d'hores), de manera que cada recta i cada regió tinguin un significat. A continuació, en parelles, l'alumnat representa diverses inequacions amb dues variables, dibuixa la recta frontera, en marca correctament el caràcter (inclosa o exclosa) i ombreja el semiplà solució. El docent insisteix en els dos punts que més costen: triar bé el tipus de línia segons el signe i no equivocar-se de costat. Al tancament es posa en comú com es decideix quin semiplà és la solució, preparant la combinació de diverses condicions de les sessions següents.

**Evidència d'avaluació formativa:** full amb inequacions amb dues variables representades correctament (treball diari).

---

## Sessió 3 — Quantes combinacions són possibles? (descoberta)

**Agrupament:** grups aleatoris de 3, pissarres verticals · **Objectius/criteris:** O1, O2 / C1 (de manera emergent) · **Correspon a:** Activitat 1 de la programació.

**Materials:** enunciat de l'Activitat 1 (una entitat amb un pressupost màxim i un nombre màxim d'hores de monitoratge per a dos tipus d'activitat), pissarres verticals, llibreta de quadres.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Formació de grups + repartiment del repte |
| Desenvolupament | 32 min | Trobar quines combinacions d'activitats són possibles |
| Tancament | 15 min | Volta de pissarres i aparició de la regió de solucions |

**Desenvolupament detallat:** Es formen grups aleatoris i es planteja el cas de l'Activitat 1: una entitat disposa d'un pressupost màxim i d'un nombre màxim d'hores de monitoratge per organitzar dos tipus d'activitat (per exemple, tallers i sortides), cadascun amb el seu cost i les seves hores. La consigna és trobar quines combinacions de les dues activitats són possibles sense passar-se ni de pressupost ni d'hores. A les pissarres, els grups proven combinacions concretes (tantes d'una i tantes de l'altra), van descartant les que incompleixen alguna condició i, de mica en mica, descobreixen que les combinacions vàlides no són un grapat de casos solts sinó tota una zona de possibilitats. El docent circula sense donar la resposta i fa preguntes d'extensió («hi ha una única solució o moltes?», «com escriuríeu la condició del pressupost amb símbols?», «si dibuixéssiu totes les combinacions possibles, quina forma tindrien?»), guiant els grups perquè tradueixin les condicions a inequacions amb dues variables i intueixin que les solucions formen una regió del pla. Al tancament es fa una volta de pissarres i el docent recull les inequacions trobades i la idea emergent de regió de solucions, anunciant que la sessió següent en formalitzarà la representació conjunta.

**Evidència d'avaluació formativa:** observació del raonament a les pissarres i traducció de les condicions a inequacions (treball diari).

---

## Sessió 4 — Sistemes d'inequacions: on es creuen les condicions

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O2 / C1 i C2 · **Correspon a:** pas previ necessari a l'Activitat 2.

**Materials:** llibreta de quadres, regle, pissarra, sistemes d'inequacions de contextos socials.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Diverses condicions alhora: què tenen en comú |
| Desenvolupament | 35 min | Classe magistral (intersecció de semiplans) + pràctica |
| Tancament | 10 min | La zona que compleix totes les condicions |

**Desenvolupament detallat:** Es recull la idea sorgida a les pissarres (les combinacions vàlides formen una regió) i es formalitza com es troba aquesta regió quan hi ha diverses condicions alhora. La classe magistral mostra que representar un sistema d'inequacions consisteix a dibuixar cada inequació per separat i quedar-se només amb la zona que compleix totes les condicions a la vegada, és a dir, la intersecció de tots els semiplans. Es treballa també una condició que en aquests problemes sol ser implícita però essencial: les quantitats no poden ser negatives (no es poden fer −3 tallers), de manera que la regió queda confinada al primer quadrant. A continuació, en parelles, l'alumnat representa un parell de sistemes d'inequacions de contextos socials, dibuixant cada recta amb cura i ombrejant la zona comuna. El docent insisteix en l'ordre i la netedat del dibuix, perquè la regió resultant es vegi clarament. Al tancament es posa en comú com s'obté la zona que compleix totes les condicions, donant pas a la formalització de la regió factible.

**Evidència d'avaluació formativa:** full amb sistemes d'inequacions representats i la zona comuna identificada (treball diari).

---

## Sessió 5 — La regió de les decisions possibles

**Agrupament:** parelles · **Objectius/criteris:** O2 / C2 i C4 · **Correspon a:** Activitat 2 de la programació.

**Materials:** enunciat de l'Activitat 2 (sistema d'inequacions d'un cas social d'assignació de recursos), llibreta de quadres, regle, GeoGebra (opcional en aquesta sessió).

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas i recordatori del mètode |
| Desenvolupament | 37 min | Dibuixar la regió factible i identificar-ne els vèrtexs |
| Tancament | 15 min | Interpretar què representa cada punt de la regió |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 2: a partir del sistema d'inequacions d'un cas social d'assignació de recursos (per exemple, el de l'entitat de la sessió 3), l'alumnat ha de dibuixar amb cura la regió factible, és a dir, el conjunt de totes les combinacions de recursos que compleixen totes les restriccions alhora. En parelles, representen cada restricció, n'obtenen la zona comuna i n'identifiquen els vèrtexs (els punts on es tallen les vores), calculant-ne les coordenades exactes resolent els sistemes corresponents. El nucli de l'activitat és la interpretació: cada punt de la regió factible representa una decisió possible (una manera concreta de repartir els recursos), i els vèrtexs són les decisions «extremes». El docent acompanya el dibuix i el càlcul dels vèrtexs i demana que interpretin un parell de punts concrets de la regió en termes de l'enunciat (quantes activitats de cada tipus, quant pressupost gastat). Al tancament es posa en comú la regió factible i es discuteix per què representa el conjunt de totes les decisions possibles, deixant plantejat que entre totes aquestes decisions n'hi haurà una de millor (l'òptima), que es buscarà més endavant.

**Evidència d'avaluació formativa:** full de l'Activitat 2 amb la regió factible dibuixada i els vèrtexs calculats i interpretats (treball diari, especialment indicatiu del criteri C2).

---

## Sessió 6 ⁺ — GeoGebra: dibuixar regions factibles

**Agrupament:** parelles (ordinador o tauleta) · **Objectius/criteris:** O2 / C2 · **Correspon a:** sessió afegida per integrar GeoGebra en la representació de regions factibles.

**Materials:** ordinador o tauleta amb GeoGebra, full guia amb els passos bàsics, els sistemes ja treballats a mà.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | Introduir inequacions a GeoGebra i veure el semiplà |
| Desenvolupament | 33 min | Representar un sistema i obtenir la regió factible |
| Tancament | 15 min | Comparar la regió de la màquina amb la feta a mà |

**Desenvolupament detallat:** Aquesta sessió integra GeoGebra com a eina per representar regions factibles, tal com preveu la programació, i és una de les pràctiques de la unitat vinculades a l'instrument «Treballs pràctics i tecnològics». En parelles, l'alumnat aprèn a introduir inequacions amb dues variables a GeoGebra i a observar com l'aplicació ombreja directament el semiplà solució. La tasca central és representar un sistema d'inequacions complet (un dels ja treballats a mà a les sessions anteriors) i veure com la superposició de les condicions genera la regió factible, que GeoGebra mostra clarament. El valor pedagògic és doble: l'alumnat comprova que la regió obtinguda amb la màquina coincideix amb la que havia dibuixat a mà (guanyant confiança i autocorregint-se si hi ha discrepàncies) i, alhora, pot localitzar els vèrtexs amb precisió amb les eines de l'aplicació. El docent acompanya l'ús bàsic de l'eina (introduir inequacions, ajustar la finestra, trobar punts d'intersecció) i valora tant la correcció tècnica com la interpretació. Al tancament es comparen les regions de la màquina i les fetes a mà, consolidant la representació abans d'entrar en l'optimització.

**Evidència d'avaluació formativa:** full de pràctica amb la regió factible representada a GeoGebra i comparada amb la versió manual (instrument «Treballs pràctics i tecnològics», 15%).

**Atenció a la diversitat:** es proporciona una pauta amb captures dels passos bàsics de GeoGebra per a qui no en tingui experiència, i les parelles es formen de manera que l'alumnat amb més soltesa digital doni suport a qui en tingui menys.

---

## Sessió 7 ⁺ — Consolidació: traduir i representar restriccions

**Agrupament:** parelles + individual · **Objectius/criteris:** O1, O2 / C1 i C2 · **Correspon a:** sessió de consolidació afegida per assentar la traducció a inequacions i la representació de la regió factible.

**Materials:** fitxa de consolidació amb casos graduats i errors típics, llibreta de quadres, regle, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | «Caça l'error» amb regions mal representades |
| Desenvolupament | 35 min | Bateria graduada: de l'enunciat a la regió factible |
| Tancament | 13 min | Full d'autoavaluació individual |

**Desenvolupament detallat:** L'hora assenta les dues habilitats que sostenen tota la unitat —traduir un enunciat a un sistema d'inequacions i representar-ne la regió factible— abans d'entrar en l'optimització. S'obre amb una activitat de «caça l'error»: es reparteixen regions factibles ja dibuixades pel docent, algunes correctes i altres amb els errors habituals del grup (triar malament el tipus de línia segons el signe, ombrejar el semiplà equivocat, oblidar la condició que les variables no poden ser negatives, o equivocar-se en calcular un vèrtex). En parelles, l'alumnat detecta i corregeix els errors. A continuació es treballa una bateria graduada que va de l'enunciat a la regió factible: petits casos socials en què cal identificar les variables, traduir les condicions a inequacions, representar-les i obtenir la regió amb els seus vèrtexs. La graduació permet que cadascú avanci al seu ritme. Cada exercici manté la rutina d'identificar clarament què representa cada variable i de comprovar un punt per assegurar el semiplà correcte. Al tancament, cada alumne resol individualment un full breu d'autoavaluació i marca, en una petita graella, què domina i què encara li costa, de cara a la prova.

**Evidència d'avaluació formativa:** full d'autoavaluació individual + observació de les parelles (treball diari).

**Atenció a la diversitat:** la fitxa ofereix un itinerari mínim (sistemes de dues inequacions senzilles amb la traducció guiada) per a qui ho necessiti, i ampliacions amb més restriccions i càlcul de tots els vèrtexs per a qui ja domini el procediment.

---

## Sessió 8 — Els vèrtexs i la funció objectiu

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O3 / C3 · **Correspon a:** pas previ necessari a l'Activitat 3.

**Materials:** llibreta de quadres, regle, pissarra, una regió factible ja coneguda amb una funció objectiu associada.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Entre totes les decisions possibles, quina és la millor? |
| Desenvolupament | 35 min | Classe magistral (funció objectiu i avaluació als vèrtexs) |
| Tancament | 10 min | Per què l'òptim és sempre en un vèrtex |

**Desenvolupament detallat:** Aquesta sessió introdueix el cor de la programació lineal: un cop sabem quines decisions són possibles (la regió factible), com triem la millor. Es parteix de la pregunta natural sorgida a la sessió 5: entre totes les combinacions possibles, quina ens interessa més? La classe magistral introdueix la funció objectiu, l'expressió que mesura allò que volem maximitzar (la cobertura, les persones ateses) o minimitzar (el cost), en funció de les dues variables. Es presenta el resultat clau del mètode, explicat de manera intuïtiva i visual: el valor òptim d'una funció objectiu sobre una regió factible s'assoleix sempre en un dels vèrtexs de la regió, de manera que n'hi ha prou d'avaluar la funció objectiu a cada vèrtex i comparar els resultats. Es fa veure per què té sentit (els vèrtexs són les decisions «extremes», on s'esgota algun recurs). A continuació, sobre una regió factible ja coneguda, es treballa en gran grup com s'avalua una funció objectiu senzilla a cada vèrtex. Al tancament es sintetitza el mètode complet (regió factible → vèrtexs → avaluar la funció objectiu → triar el millor), preparant l'estudi de cas de maximització.

**Evidència d'avaluació formativa:** full amb una funció objectiu avaluada als vèrtexs d'una regió coneguda (treball diari).

---

## Sessió 9 — Maximitzar la cobertura social

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** Activitat 3 de la programació.

**Materials:** enunciat de l'Activitat 3 (la regió factible de l'Activitat 2 amb una funció objectiu de cobertura: el nombre total de persones ateses), llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació de l'objectiu: atendre el màxim de persones |
| Desenvolupament | 37 min | Avaluar la funció als vèrtexs i triar l'òptim |
| Tancament | 15 min | Justificar la millor decisió possible |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 3: sobre la regió factible ja obtinguda a l'Activitat 2, es defineix una funció objectiu que mesura la cobertura social (per exemple, el nombre total de persones ateses segons quantes activitats de cada tipus es facin). En parelles, l'alumnat ha de trobar la combinació de recursos que maximitza aquesta cobertura, aplicant el mètode treballat: avaluar la funció objectiu a cada vèrtex de la regió i comparar els resultats per identificar el màxim. El nucli de l'activitat és la justificació: l'alumnat no només calcula l'òptim, sinó que ha d'argumentar per què aquella combinació és la millor decisió possible amb els recursos disponibles, i interpretar-la en termes de l'enunciat (quantes activitats de cada tipus, quantes persones ateses, quins recursos s'esgoten). Això connecta el mètode matemàtic amb la presa de decisions reals en la gestió de projectes socials. El docent acompanya l'avaluació als vèrtexs i la interpretació. Al tancament, cada parella redacta una breu conclusió justificada sobre la decisió òptima, que enllaça amb la justificació de propostes pròpia dels cicles formatius.

**Evidència d'avaluació formativa:** full de l'Activitat 3 amb la funció objectiu avaluada als vèrtexs i la decisió òptima justificada (treball diari, especialment indicatiu dels criteris C3 i C4).

---

## Sessió 10 ⁺ — Avaluar als vèrtexs (mecanització)

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 · **Correspon a:** sessió afegida per mecanitzar el càlcul dels vèrtexs i l'avaluació de la funció objectiu.

**Materials:** bateria graduada de regions factibles amb la seva funció objectiu, llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Recordatori: trobar vèrtexs i avaluar la funció |
| Desenvolupament | 35 min | Bateria graduada d'optimització |
| Tancament | 15 min | Correcció creuada entre parelles |

**Desenvolupament detallat:** Després d'haver donat sentit a l'optimització en un context real, aquesta sessió s'hi dedica a guanyar destresa mecànica, perquè els automatismes no fallin a la prova. Es comença amb un recordatori del procediment: com es troben les coordenades dels vèrtexs (resolent els sistemes de les rectes que es tallen) i com s'avalua la funció objectiu a cadascun. A continuació, en parelles, l'alumnat resol una bateria graduada de problemes en què ja es dona la regió factible (o un sistema senzill) i la funció objectiu, i cal trobar els vèrtexs, avaluar-hi la funció i identificar el màxim o el mínim. La graduació permet que cadascú avanci al seu ritme: els primers casos tenen pocs vèrtexs i nombres rodons, els últims en tenen més. El docent circula resolent dubtes i insistint en els paranys recurrents (equivocar-se en resoldre el sistema d'un vèrtex, confondre si es busca el màxim o el mínim, oblidar d'avaluar algun vèrtex). Al tancament, cada parella intercanvia la seva bateria amb una altra i en fa una correcció creuada, fixant-se en cada pas.

**Evidència d'avaluació formativa:** bateria d'optimització resolta i corregida (treball diari).

---

## Sessió 11 — Minimitzar el cost d'un servei

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** Activitat 4 de la programació.

**Materials:** enunciat de l'Activitat 4 (un cas en què cal cobrir unes necessitats mínimes amb el menor cost possible), llibreta de quadres, regle, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas: cobrir necessitats al mínim cost |
| Desenvolupament | 37 min | Plantejar, representar i minimitzar la funció de cost |
| Tancament | 15 min | Comparar maximitzar i minimitzar |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 4: una situació en què cal cobrir unes necessitats mínimes (per exemple, garantir un nombre mínim d'hores d'atenció a uns col·lectius) amb el menor cost possible, combinant dos recursos amb costos diferents. En parelles, l'alumnat ha de fer tot el procés de manera autònoma: identificar les variables, plantejar les restriccions (ara amb condicions de «com a mínim», que donen inequacions del tipus ≥), representar la regió factible —que en aquests casos sol ser no acotada per dalt— i definir la funció de cost. Després, n'ha de buscar el mínim avaluant la funció als vèrtexs. El nucli de l'activitat és comprendre que el mateix mètode serveix tant per maximitzar com per minimitzar: només canvia què busquem (el valor més petit en lloc del més gran) i el tipus de restriccions. El docent acompanya el plantejament de les restriccions de mínim, que són noves respecte de l'activitat anterior, i la interpretació del resultat. Al tancament es comparen les dues situacions treballades (maximitzar cobertura i minimitzar cost) per consolidar que la programació lineal és una única eina amb dues cares.

**Evidència d'avaluació formativa:** full de l'Activitat 4 amb la regió, la funció de cost i el mínim trobat i interpretat (treball diari, especialment indicatiu dels criteris C3 i C4).

---

## Sessió 12 ⁺ — Casos especials: solució múltiple o regió no acotada

**Agrupament:** grups aleatoris + parelles · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** ampliació afegida per tractar els casos especials de la programació lineal.

**Materials:** llibreta de quadres, regle, pissarra, casos amb solució múltiple i amb regió no acotada.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Repte: què passa en aquests dos casos estranys? |
| Desenvolupament | 35 min | Solució múltiple i regió no acotada |
| Tancament | 15 min | Síntesi: com es llegeix cada cas |

**Desenvolupament detallat:** Aquesta sessió tracta els casos especials que poden aparèixer i que sovint generen confusió, perquè l'alumnat hi sàpiga reaccionar a la prova i a la vida real. En grups, a les pissarres, es plantegen dos reptes. El primer és un cas en què la funció objectiu pren el mateix valor òptim en dos vèrtexs (i, de fet, en tot el segment que els uneix): l'alumnat descobreix que el problema pot tenir més d'una solució òptima, totes igual de bones, i interpreta què significa això socialment (hi ha diverses maneres igualment òptimes de repartir els recursos). El segon és un cas amb regió factible no acotada, típic dels problemes de minimització de cost: l'alumnat veu que el mínim existeix i s'assoleix en un vèrtex, però que el màxim podria no existir si la regió s'estén indefinidament. El docent guia la discussió perquè els grups arribin a aquestes conclusions amb els seus dibuixos, sense donar-les fetes. Al tancament es fa una síntesi sobre com es reconeix i com s'interpreta cada cas especial, completant la comprensió del mètode.

**Evidència d'avaluació formativa:** observació del raonament a les pissarres i resolució dels casos especials (treball diari).

---

## Sessió 13 ⁺ — Cas real complet amb GeoGebra

**Agrupament:** parelles (ordinador o tauleta) · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** integració de tot el mètode en un estudi de cas amb suport tecnològic.

**Materials:** ordinador o tauleta amb GeoGebra, enunciat d'un cas real complet d'assignació de recursos socials, llibreta de quadres.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas complet, de l'enunciat a la decisió |
| Desenvolupament | 37 min | Resoldre tot el procés amb suport de GeoGebra |
| Tancament | 15 min | Presentar i justificar la decisió òptima |

**Desenvolupament detallat:** Aquesta sessió integra tot el mètode de la unitat en un estudi de cas real complet, amb el suport de GeoGebra, i és una de les pràctiques vinculades a l'instrument «Treballs pràctics i tecnològics». En parelles, l'alumnat rep un enunciat real d'assignació de recursos socials (per exemple, com repartir un pressupost i unes hores de personal entre dos serveis per atendre el màxim de persones) i ha de fer tot el procés de manera autònoma: identificar les variables, traduir les condicions a un sistema d'inequacions, representar la regió factible amb GeoGebra, localitzar-ne els vèrtexs amb precisió, definir la funció objectiu i trobar-ne l'òptim. GeoGebra permet centrar l'esforç en el plantejament i la interpretació, reduint els errors de dibuix manual. El nucli de l'activitat és tancar el cicle complet d'una decisió basada en dades: del problema real a la recomanació justificada. El docent valora tant la correcció tècnica de l'ús de GeoGebra com la qualitat del plantejament i de la interpretació. Al tancament, algunes parelles presenten breument la seva decisió òptima a la resta de la classe, justificant-la amb els resultats obtinguts.

**Evidència d'avaluació formativa:** full i fitxer de l'estudi de cas resolt amb GeoGebra, amb la decisió òptima justificada (instrument «Treballs pràctics i tecnològics», 15%).

---

## Sessió 14 — Repàs global i síntesi (estacions)

**Agrupament:** grups aleatoris (estacions) · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** tancament i síntesi de la unitat.

**Materials:** quatre estacions de treball (traduir a inequacions, representar la regió factible, optimitzar als vèrtexs, interpretar i casos especials), amb una tasca curta cadascuna.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Explicació de la dinàmica d'estacions |
| Desenvolupament | 40 min | Rotació per les quatre estacions (≈10 min cada una) |
| Tancament | 12 min | Recull de dubtes comuns i mapa de la unitat |

**Desenvolupament detallat:** L'hora repassa de manera activa tota la unitat mitjançant quatre estacions, una per cada bloc treballat. A l'estació de traducció, l'alumnat passa un enunciat social a un sistema d'inequacions amb dues variables; a la de representació, dibuixa la regió factible d'un sistema i en troba els vèrtexs; a la d'optimització, avalua una funció objectiu als vèrtexs i identifica el màxim o el mínim; i a la d'interpretació i casos especials, llegeix una solució òptima en termes de l'enunciat o reconeix un cas de solució múltiple o de regió no acotada. Els grups roten per les quatre estacions amb temps controlat, de manera que cada alumne torna a tocar tots els continguts en contextos lleugerament diferents. El docent observa quins blocs generen més dubtes per reforçar-los al taller de preparació. Al tancament es construeix col·lectivament un petit mapa de la unitat que connecta els quatre passos del mètode (traduir → representar → optimitzar → interpretar) i es deixa plantejat com aquesta eina de decisió enllaça amb la gestió de recursos que travessa tota l'etapa. Es recullen els dubtes comuns a aclarir abans de la prova.

**Evidència d'avaluació formativa:** observació del treball a les estacions i recull de dubtes (treball diari).

---

## Sessió 15 ⁺ — Taller de preparació de la prova

**Agrupament:** parelles + individual · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** sessió afegida com a pont entre el repàs (sessió 14) i la prova escrita (sessió 16).

**Materials:** model de prova (simulacre) equivalent en estructura a la prova real, rúbrica simplificada, llibreta de quadres, regle, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Presentació de l'estructura de la prova i la rúbrica |
| Desenvolupament | 35 min | Simulacre per blocs amb temps controlat |
| Tancament | 15 min | Coavaluació amb rúbrica i pla d'estudi personal |

**Desenvolupament detallat:** L'hora comença mostrant de manera transparent com serà la prova de la sessió 16: els quatre blocs (un per criteri, C1-C4), el pes orientatiu de cadascun i una rúbrica simplificada amb els nivells d'assoliment. Fer explícits els criteris de correcció és especialment important per a un alumnat que pot arribar amb una relació insegura amb les matemàtiques, perquè desmunta la sensació que l'examen és imprevisible. A continuació, l'alumnat resol un simulacre breu —un ítem representatiu de cada bloc: traduir un enunciat a un sistema d'inequacions, representar una regió factible i trobar-ne els vèrtexs, optimitzar una funció objectiu als vèrtexs, i interpretar la solució o reconèixer un cas especial— amb un temps controlat semblant al de la prova real, però en parelles, de manera que puguin verbalitzar l'estratègia abans d'enfrontar-s'hi sols. En acabar, es fa una coavaluació: cada parella corregeix el simulacre d'una altra amb la rúbrica a la mà, fet que obliga a interioritzar què es valora (no només el càlcul correcte, sinó la traducció acurada de les condicions, el dibuix net de la regió i la interpretació de la solució dins el context). Al tancament, cada alumne escriu un breu pla d'estudi personal a partir de la graella d'autoavaluació de la sessió 7 i del simulacre, anotant els dos o tres aspectes que ha de repassar amb més atenció. El docent recull aquests plans per detectar qui pot necessitar un suport addicional abans de l'examen.

**Evidència d'avaluació formativa:** simulacre resolt + pla d'estudi personal (treball diari; no computa com a nota de prova, però orienta el suport previ a l'examen).

**Atenció a la diversitat:** l'alumnat amb més dificultats pot disposar de la rúbrica i d'un formulari-resum (com es representa una inequació amb dues variables, com s'obté la regió factible, com es calcula un vèrtex, com s'avalua la funció objectiu) durant el simulacre, retirant progressivament aquest suport de cara a la prova segons el cas.

---

## Sessió 16 — Prova escrita de la Unitat 2

**Agrupament:** individual · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** instrument d'avaluació «Proves escrites» de la programació general.

**Materials:** enunciat de la prova, calculadora científica, regle, full de quadres; opcionalment, ordinador amb GeoGebra per a la part de representació.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 5 min | Repartiment de la prova i indicacions |
| Desenvolupament | 50 min | Realització individual de la prova |
| Tancament | 5 min | Recollida i breu comentari de tancament |

**Desenvolupament detallat:** La unitat es tanca amb la prova escrita individual, que recull els quatre blocs treballats i s'alinea amb els criteris d'avaluació C1-C4. La prova combina, com s'ha anunciat al taller, un problema d'optimització complet contextualitzat de l'àmbit social (traduir les condicions d'assignació de recursos a un sistema d'inequacions, representar la regió factible i trobar-ne els vèrtexs, definir la funció objectiu i trobar-ne el màxim o el mínim, i interpretar la solució òptima en termes de l'enunciat) amb algun ítem més curt de representació d'una inequació o de reconeixement d'un cas especial. Segons la disponibilitat d'aula d'ordinadors, una part de la prova pot demanar la representació de la regió amb GeoGebra, coherentment amb el treball tecnològic de la unitat. Es valora tant la correcció del càlcul com la traducció acurada de les condicions, el dibuix net de la regió, l'avaluació correcta als vèrtexs i la interpretació de la solució dins del context. En acabar, el docent fa un breu comentari de tancament de la unitat i anuncia el calendari de correcció i, si escau, de recuperació trimestral.

**Evidència d'avaluació formativa:** prova escrita de la UD2 (instrument «Proves escrites», 60%).

---

## Relació amb l'avaluació global de la matèria

D'acord amb els instruments d'avaluació definits a la programació general, la UD2 alimenta els tres instruments. Les **proves escrites** (60%) es concreten en la sessió 16. El **treball diari i les activitats d'aula** (25%) es nodreixen de l'observació continuada de les aules pensants, les pissarres verticals, els fulls de les activitats i els exit tickets de les sessions 1 a 15. El tercer instrument, **treballs pràctics i tecnològics** (15%), s'activa de manera directa en aquesta unitat a través de les pràctiques amb GeoGebra de les sessions 6 i 13, vinculades explícitament a la programació general (GeoGebra a UD2, UD3 i UD4); se'n valora tant la correcció tècnica com la interpretació i la justificació de la decisió òptima. L'ús de la calculadora científica a la resta de sessions té un caràcter purament instrumental que no requereix ponderació pròpia.

## Observacions i marge de flexibilitat

El repartiment proposat és orientatiu, tal com ja indica la programació general per al conjunt de la temporalització. La UD2 recupera de manera intensiva les inequacions de la UD1 de 1r i aprofita la lògica d'assignació de recursos i les matrices de la UD1 de 2n, de manera que convé fer explícits aquests enllaços, especialment a la sessió 1 de connexió. Si el grup arriba amb les inequacions molt fluixes, es pot ampliar el bloc inicial (sessions 1, 2 i 7) reduint lleugerament el repàs de la sessió 14. Les sessions 3-4-5 (de l'enunciat a la regió factible), 8-9 (optimització) i 11 (minimització) reprodueixen el patró metodològic ja establert a la resta de la programació (aules pensants → classe magistral → treball pràctic i estudi de casos), per mantenir-hi la coherència didàctica. Les sessions 1, 6, 7, 10, 12 i 13 (connexió amb 1r, GeoGebra per a regions, consolidació de la traducció de restriccions, mecanització de l'optimització, casos especials i cas real complet) i la sessió 15 són aportacions d'aquesta proposta, pensades per assentar la base d'inequacions, integrar de manera ordenada la pràctica amb GeoGebra prevista a la programació i garantir un tancament de la unitat coherent. Les sessions tecnològiques (6 i 13) requereixen ordinadors o tauletes amb GeoGebra i s'han de coordinar amb el seu horari d'ús. Totes les dades reals utilitzades (pressupostos, hores de personal, costos i places de serveis socials) s'han d'actualitzar amb les xifres vigents en el moment d'impartir la unitat el curs 2027-28.
