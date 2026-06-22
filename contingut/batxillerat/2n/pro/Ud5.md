# Proposta detallada d'activitats — Unitat Didàctica 5
## Probabilitat i distribucions: del cas a la llei

**Matemàtiques Aplicades II · 2n Batxillerat Professionalitzador en Serveis a la Comunitat**
**INS Miquel Tarradell · Curs 2027-28 · 16 hores**

---

Aquest document desenvolupa, sessió a sessió, les 16 hores previstes per a la Unitat Didàctica 5 a la programació general de Matemàtiques Aplicades II. Pren com a punt de partida els objectius, els criteris d'avaluació, els materials i les quatre activitats ja definides («Repàs amb dades reals», «Quants superaran el programa?», «Llegir la corba normal» i «Probabilitats sobre la normal»), i les seqüencia seguint el mateix patró metodològic establert a la programació (aules pensants → classe magistral → treball pràctic i tecnològic), tot afegint les sessions de connexió, consolidació i ampliació necessàries (connexió amb la probabilitat de 1r, consolidació de la probabilitat condicionada, formalització i mecanització de la distribució binomial, pràctica amb full de càlcul, propietats i consolidació de la distribució normal i un taller de preparació de la prova) per completar un itinerari de 16 hores coherent amb el perfil d'alumnat del Batxillerat Professionalitzador en Serveis a la Comunitat: motivació per les persones per sobre de l'abstracció matemàtica, contextos reals dels àmbits social i comunitari, i èmfasi en el pensament crític davant de dades. La unitat fa el camí «del cas a la llei»: parteix de la probabilitat de successos concrets que l'alumnat ja coneix de la UD6 de 1r (regla de Laplace, probabilitat condicionada, diagrames d'arbre i taules de contingència) i n'extreu models generals —les distribucions— que permeten preveure el comportament d'un col·lectiu sencer: la binomial, per modelar quants casos esperem en situacions d'èxit o fracàs, i la normal, per llegir indicadors socials continus. És, alhora, el pont directe cap a la inferència estadística de la UD6 que tanca l'etapa, i integra el full de càlcul com a eina per calcular probabilitats i representar distribucions, vinculat a l'instrument «Treballs pràctics i tecnològics».

### Llegenda

| Codi | Objectiu de la UD5 |
| --- | --- |
| **O1** | Reprendre i consolidar el càlcul de probabilitats de la UD6 de 1r (regla de Laplace, probabilitat condicionada, diagrames d'arbre i taules de contingència). |
| **O2** | Comprendre i aplicar la distribució binomial per modelar quants casos esperem d'un col·lectiu en situacions d'«èxit o fracàs». |
| **O3** | Comprendre i interpretar la distribució normal i la seva corba per llegir indicadors socials continus (alçada, puntuacions, edats), com a pont cap a la inferència estadística. |

| Codi | Criteri d'avaluació de la UD5 |
| --- | --- |
| **C1** | Calcula probabilitats simples, compostes i condicionades en contextos socials i n'expressa el resultat de manera equivalent en fracció, decimal i percentatge. |
| **C2** | Reconeix quan una situació segueix un model binomial i en calcula probabilitats per estimar quants casos s'esperen d'un col·lectiu. |
| **C3** | Interpreta la corba normal i les seves propietats (simetria, mitjana, desviació típica) per llegir la distribució d'un indicador social continu. |
| **C4** | Calcula probabilitats bàsiques sobre la distribució normal i en valora el significat dins del context d'un estudi. |

### Visió general de les 16 hores

Cada fila correspon a una hora lectiva (60 min). Les sessions marcades amb ⁺ són les incorporades per completar i consolidar l'itinerari de 16 hores.

| # | Títol | Agrupament dominant | Metodologia | Referència a la programació |
| --- | --- | --- | --- | --- |
| 1 ⁺ | La probabilitat de 1r, ara cap a les lleis | Individual + gran grup | Repte curt + classe magistral | Connexió amb la UD6 de 1r |
| 2 | Repàs amb dades reals | Parelles | Treball pràctic / estudi de cas | Activitat 1 |
| 3 ⁺ | Consolidació de la probabilitat condicionada | Parelles + individual | Treball pràctic (consolidació) | Reforç de C1 |
| 4 | Situacions d'èxit o fracàs repetides (descoberta) | Grups aleatoris, pissarres verticals | Aules pensants | Pas previ a l'Activitat 2 |
| 5 | La distribució binomial: la llei | Gran grup + parelles | Classe magistral | Formalització de la binomial |
| 6 | Quants superaran el programa? | Parelles | Treball pràctic / estudi de cas | Activitat 2 |
| 7 ⁺ | La binomial amb el full de càlcul | Parelles (ordinador) | Treball pràctic i tecnològic | Reforç de la pràctica amb full de càlcul |
| 8 ⁺ | Consolidació de la distribució binomial | Parelles + individual | Treball pràctic (consolidació) | Reforç de C2 |
| 9 | De les barres a la corba: la distribució normal | Gran grup + parelles | Classe magistral | Pas previ a l'Activitat 3 |
| 10 | Llegir la corba normal | Parelles | Treball pràctic / estudi de cas | Activitat 3 |
| 11 ⁺ | Les propietats de la normal: mitjana i desviació | Gran grup + parelles | Classe magistral + pràctic | Reforç de C3 |
| 12 | Probabilitats sobre la normal | Parelles (ordinador) | Treball pràctic i tecnològic | Activitat 4 |
| 13 ⁺ | Consolidació de la distribució normal | Parelles + individual | Treball pràctic (consolidació) | Reforç de C4 |
| 14 | Repàs global i síntesi (estacions) | Grups aleatoris (estacions) | Síntesi/repàs | Tancament de la unitat |
| 15 ⁺ | Taller de preparació de la prova | Parelles + individual | Repàs guiat / autoavaluació | Preparació de l'instrument «Proves escrites» |
| 16 | Prova escrita de la UD5 | Individual | Avaluació | Instrument «Proves escrites» (60%) |

---

## Sessió 1 ⁺ — La probabilitat de 1r, ara cap a les lleis

**Agrupament:** individual + gran grup · **Objectius/criteris:** transversal, prepara O1 · **Correspon a:** connexió amb la UD6 de probabilitat de 1r.

**Materials:** llibreta, pissarra, full breu amb situacions de probabilitat senzilles de l'àmbit social.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | Repàs ràpid: probabilitat i regla de Laplace de 1r |
| Desenvolupament | 33 min | D'un cas concret a tot un col·lectiu |
| Tancament | 15 min | Posada en comú i reflexió breu individual |

**Desenvolupament detallat:** La unitat arrenca recuperant la probabilitat que l'alumnat va treballar a la UD6 de 1r (la regla de Laplace, la probabilitat com a valor entre 0 i 1, la probabilitat condicionada), per assegurar que la base hi és abans de fer el salt a les distribucions. Es resol un parell de situacions senzilles d'un context social (la probabilitat que un usuari triat a l'atzar compleixi una condició) i es recorda l'expressió del resultat en fracció, decimal i percentatge. A continuació es planteja la pregunta que obre la unitat: «fins ara hem calculat la probabilitat d'un cas; i si volem preveure el comportament de tot un col·lectiu? Per exemple, si cada usuari té un 70% de probabilitat de superar un programa, quants en superaran d'un grup de 25?». Es fa veure que respondre aquestes preguntes demana passar del cas concret a una llei general que descrigui tot el col·lectiu: una distribució de probabilitat. El docent recull breument el punt de partida del grup (qui recorda la probabilitat de 1r i qui no), sense que sigui una prova avaluable. Al tancament, cada alumne anota amb les seves paraules la diferència entre calcular la probabilitat d'un cas i preveure el comportament d'un grup sencer.

**Evidència d'avaluació formativa:** full de connexió i reflexió individual (no computa a la nota; orienta la planificació docent).

**Atenció a la diversitat:** per a l'alumnat amb més inseguretat amb la probabilitat de 1r es preveuen agrupaments heterogenis a les properes sessions i una fitxa de suport (regla de Laplace, conversió entre fracció, decimal i percentatge, lectura d'una taula de contingència) que es podrà tenir a mà durant la unitat i retirar progressivament.

---

## Sessió 2 — Repàs amb dades reals

**Agrupament:** parelles · **Objectius/criteris:** O1 / C1 · **Correspon a:** Activitat 1 de la programació.

**Materials:** enunciat de l'Activitat 1 (una taula de contingència de dades sociodemogràfiques reals o versemblants), calculadora científica, llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació de la taula de contingència |
| Desenvolupament | 37 min | Calcular probabilitats simples i condicionades |
| Tancament | 15 min | Interpretar els patrons detectats |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 1: una taula de contingència de dades sociodemogràfiques (per exemple, una mostra de població creuant el tipus de llar amb la situació respecte d'algun indicador social), del tipus que l'alumnat ja va treballar a la UD6 de 1r. En parelles, l'alumnat recupera totes les eines de la probabilitat de 1r: calcula probabilitats simples (la probabilitat que una persona triada a l'atzar tingui una característica), compostes i, sobretot, condicionades (la probabilitat de tenir una característica sabent que en té una altra), i n'expressa el resultat en fracció, decimal i percentatge. El nucli de l'activitat és la interpretació dels patrons: detectar, a partir de les probabilitats condicionades, quins perfils tenen més risc o més presència d'un fenomen, una lectura essencial per a qui treballarà amb col·lectius vulnerables. Aquesta sessió reactiva la probabilitat de 1r en un context real abans d'introduir les distribucions. El docent acompanya el càlcul i la interpretació, parant atenció a la diferència entre probabilitat simple i condicionada. Al tancament es posen en comú els patrons detectats i es discuteix com les dades ajuden a orientar la intervenció sense estigmatitzar.

**Evidència d'avaluació formativa:** full de l'Activitat 1 amb les probabilitats calculades i els patrons interpretats (treball diari, especialment indicatiu del criteri C1).

---

## Sessió 3 ⁺ — Consolidació de la probabilitat condicionada

**Agrupament:** parelles + individual · **Objectius/criteris:** O1 / C1 · **Correspon a:** sessió de consolidació afegida per assentar la probabilitat condicionada abans d'introduir les distribucions.

**Materials:** fitxa de consolidació amb casos graduats i errors típics, calculadora científica, llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | «Caça l'error» amb probabilitats ja calculades |
| Desenvolupament | 35 min | Bateria graduada: simples, compostes i condicionades |
| Tancament | 13 min | Full d'autoavaluació individual |

**Desenvolupament detallat:** L'hora assenta el càlcul de probabilitats —especialment les condicionades, que la UD6 de 1r va assenyalar com el punt més delicat— abans d'introduir les distribucions, perquè l'alumnat hi arribi amb la base sòlida. S'obre amb una activitat de «caça l'error»: es reparteixen probabilitats ja calculades pel docent a partir de taules de contingència i diagrames d'arbre, algunes correctes i altres amb els errors habituals del grup (confondre una probabilitat condicionada amb una de simple, equivocar-se de base en condicionar, donar un resultat més gran que 1). En parelles, l'alumnat detecta i corregeix els errors. A continuació es treballa una bateria graduada de probabilitats simples, compostes i condicionades en contextos socials, amb conversió entre fracció, decimal i percentatge. La graduació permet que cadascú avanci al seu ritme. Cada exercici manté la rutina de comprovar que el resultat queda entre 0 i 1 i té sentit en el context. Al tancament, cada alumne resol individualment un full breu d'autoavaluació i marca, en una petita graella, què domina i què encara li costa, de cara a la prova.

**Evidència d'avaluació formativa:** full d'autoavaluació individual + observació de les parelles (treball diari).

**Atenció a la diversitat:** la fitxa ofereix un itinerari mínim (probabilitats simples llegides directament d'una taula) per a qui ho necessiti, i ampliacions amb condicionades i diagrames d'arbre per a qui ja domini el càlcul.

---

## Sessió 4 — Situacions d'èxit o fracàs repetides (descoberta)

**Agrupament:** grups aleatoris de 3, pissarres verticals · **Objectius/criteris:** O2 / C2 (de manera emergent) · **Correspon a:** pas previ necessari a l'Activitat 2 (metodologia d'aules pensants).

**Materials:** situació de repetició (per exemple, quants usuaris d'un grup superaran una prova si cadascun té una certa probabilitat d'èxit), pissarres verticals, llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Formació de grups + plantejament del repte |
| Desenvolupament | 32 min | Estimar quants casos esperem en una repetició |
| Tancament | 15 min | Volta de pissarres i necessitat d'un model |

**Desenvolupament detallat:** Es formen grups aleatoris i es planteja, tal com indica la metodologia de la programació, una situació de repetició: cada usuari d'un grup té una certa probabilitat d'èxit en una prova (per exemple, un 60% de superar un programa formatiu), i la consigna és estimar i debatre quants usuaris del grup s'espera que la superin, i amb quina probabilitat se'n superaran exactament un cert nombre. A les pissarres, els grups intenten resoldre-ho amb les eines que tenen (diagrames d'arbre, recompte de casos) i s'adonen que, a mesura que el grup creix, calcular-ho cas a cas es fa inabordable: hi ha massa combinacions possibles. El docent circula sense donar la resposta i fa preguntes d'extensió («quantes maneres hi ha que en superin exactament 3 de 5?», «es podria preveure quants en superaran de mitjana sense llistar tots els casos?»), fent emergir la necessitat d'un model general que descrigui aquest tipus de situació d'«èxit o fracàs» repetida. Al tancament es fa una volta de pissarres i el docent recull les intuïcions i la necessitat d'una llei, anunciant que la sessió següent en presentarà el model: la distribució binomial.

**Evidència d'avaluació formativa:** observació del raonament a les pissarres i estimacions fetes (treball diari).

---

## Sessió 5 — La distribució binomial: la llei

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O2 / C2 · **Correspon a:** formalització de la distribució binomial.

**Materials:** llibreta, pissarra, calculadora científica, exemples de situacions binomials de l'àmbit social.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Es recupera la situació d'èxit o fracàs de la sessió 4 |
| Desenvolupament | 35 min | Classe magistral (model binomial) + càlcul guiat |
| Tancament | 10 min | Quan una situació és binomial |

**Desenvolupament detallat:** Es comença recuperant la situació de repetició sorgida a les pissarres i preguntant com es podria preveure sense llistar tots els casos. La classe magistral formalitza la distribució binomial com el model que descriu quants èxits s'esperen en un nombre fix de repeticions independents, cadascuna amb la mateixa probabilitat d'èxit. Es presenten de manera operativa els elements del model (el nombre de repeticions, la probabilitat d'èxit de cada una) i com es calcula la probabilitat d'obtenir exactament un cert nombre d'èxits, sense entrar en una complexitat tècnica innecessària i recolzant-se en la calculadora. Es treballa també la idea del nombre d'èxits esperat (el valor mitjà), que té una lectura social directa (quants usuaris s'espera que superin el programa). Es posa molt d'èmfasi en reconèixer quan una situació és binomial (repeticions fixes, èxit o fracàs, mateixa probabilitat, independència), perquè aquest és el pas que més costa. A continuació, en parelles, l'alumnat calcula un parell de probabilitats binomials d'exemples socials amb el docent acompanyant pas a pas. Al tancament es practica com es reconeix una situació binomial, preparant l'estudi de cas.

**Evidència d'avaluació formativa:** full amb probabilitats binomials calculades i la identificació dels elements del model (treball diari).

---

## Sessió 6 — Quants superaran el programa?

**Agrupament:** parelles · **Objectius/criteris:** O2 / C2 · **Correspon a:** Activitat 2 de la programació.

**Materials:** enunciat de l'Activitat 2 (es coneix la probabilitat que un usuari superi un programa formatiu), calculadora científica, llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas: planificar segons els èxits esperats |
| Desenvolupament | 37 min | Modelitzar amb la binomial i calcular probabilitats |
| Tancament | 15 min | Interpretar els resultats per a la planificació |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 2: es coneix la probabilitat que un usuari superi un programa formatiu (a partir de l'experiència d'edicions anteriors) i es vol preveure el comportament d'un grup. En parelles, l'alumnat modelitza la situació amb la distribució binomial i calcula diferents probabilitats d'interès per a la gestió: quants usuaris s'espera que superin el programa, la probabilitat que en superin exactament un cert nombre, o la probabilitat que en superin com a mínim un llindar determinat. El nucli de l'activitat és la interpretació dels resultats per a la planificació real del servei: si s'espera que aproximadament una part del grup superi el programa, quants recursos cal preveure per a la fase següent, o si convé ampliar el grup inicial perquè el nombre d'èxits esperat sigui suficient. Això connecta el model matemàtic amb la presa de decisions en la gestió de projectes socials. El docent acompanya el càlcul binomial i la interpretació, parant atenció a traduir cada probabilitat en una conseqüència pràctica. Al tancament es posa en comú què aporta el model a la planificació del programa.

**Evidència d'avaluació formativa:** full de l'Activitat 2 amb les probabilitats binomials calculades i interpretades per a la planificació (treball diari, especialment indicatiu del criteri C2).

---

## Sessió 7 ⁺ — La binomial amb el full de càlcul

**Agrupament:** parelles (ordinador) · **Objectius/criteris:** O2 / C2 · **Correspon a:** sessió afegida per integrar el full de càlcul en el càlcul de probabilitats binomials.

**Materials:** ordinadors amb full de càlcul, full guia amb les funcions de probabilitat, els casos ja treballats a mà.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | Introduir una situació binomial al full de càlcul |
| Desenvolupament | 33 min | Calcular probabilitats i representar la distribució |
| Tancament | 15 min | Comparar amb el càlcul fet a mà |

**Desenvolupament detallat:** Aquesta sessió integra el full de càlcul per calcular probabilitats binomials, tal com preveu la programació, i és una de les pràctiques vinculades a l'instrument «Treballs pràctics i tecnològics». En parelles, l'alumnat aprèn a utilitzar les funcions del full de càlcul que calculen probabilitats binomials, introduint el nombre de repeticions i la probabilitat d'èxit, i comprova com la màquina dona directament la probabilitat de cada nombre d'èxits. La tasca central és doble: reproduir amb el full de càlcul els casos ja resolts a mà (per comprovar que coincideixen i guanyar confiança) i, sobretot, representar la distribució binomial completa en un gràfic de barres, veient d'un cop d'ull quins resultats són més probables i com es distribueixen al voltant del valor esperat. Això prepara visualment el pas cap a la corba normal de les sessions següents. El docent acompanya l'ús de les funcions i la creació del gràfic, i insisteix que el full de càlcul estalvia el càlcul repetitiu però que cal saber interpretar el que surt. Al tancament es comparen els resultats de la màquina amb els fets a mà i s'observa la forma de la distribució.

**Evidència d'avaluació formativa:** full de càlcul amb les probabilitats binomials i el gràfic de la distribució (instrument «Treballs pràctics i tecnològics», 15%).

**Atenció a la diversitat:** es proporciona una pauta amb captures dels passos bàsics del full de càlcul per a qui no en tingui experiència, i les parelles es formen de manera que l'alumnat amb més soltesa digital doni suport a qui en tingui menys.

---

## Sessió 8 ⁺ — Consolidació de la distribució binomial

**Agrupament:** parelles + individual · **Objectius/criteris:** O2 / C2 · **Correspon a:** sessió de consolidació afegida per assentar la distribució binomial abans de passar a la normal.

**Materials:** fitxa de consolidació amb casos graduats i errors típics, calculadora científica, llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | «Caça l'error»: és binomial o no ho és? |
| Desenvolupament | 35 min | Bateria graduada de situacions binomials |
| Tancament | 15 min | Full d'autoavaluació individual |

**Desenvolupament detallat:** L'hora assenta la distribució binomial abans d'introduir la normal. S'obre amb una activitat de «caça l'error» centrada en el pas que més costa: decidir si una situació és realment binomial. Es reparteixen diverses situacions i l'alumnat, en parelles, ha de decidir quines compleixen les condicions del model (repeticions fixes, èxit o fracàs, mateixa probabilitat, independència) i quines no, i per què. A continuació es treballa una bateria graduada de situacions clarament binomials en què cal identificar els elements del model i calcular probabilitats (exactament un nombre, com a mínim, com a màxim) i el nombre d'èxits esperat. La graduació permet que cadascú avanci al seu ritme. Cada exercici manté la rutina de comprovar que el resultat té sentit en el context. Al tancament, cada alumne resol individualment un full breu d'autoavaluació i marca, en una petita graella, què domina i què encara li costa, de cara a la prova.

**Evidència d'avaluació formativa:** full d'autoavaluació individual + observació de les parelles (treball diari).

**Atenció a la diversitat:** la fitxa ofereix un itinerari mínim (situacions binomials senzilles amb pocs casos i la identificació guiada del model) per a qui ho necessiti, i ampliacions amb probabilitats acumulades («com a mínim», «com a màxim») per a qui ja domini el model.

---

## Sessió 9 — De les barres a la corba: la distribució normal

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O3 / C3 · **Correspon a:** pas previ necessari a l'Activitat 3.

**Materials:** llibreta, pissarra, recursos visuals de la corba de Gauss, histogrames d'indicadors continus.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | De les barres de la binomial a una corba suau |
| Desenvolupament | 35 min | Classe magistral (la distribució normal i la seva corba) |
| Tancament | 10 min | On apareix la corba normal a la vida real |

**Desenvolupament detallat:** Aquesta sessió fa el pont entre la binomial i la distribució normal. Es parteix del gràfic de barres de la binomial obtingut a la sessió 7 i es fa veure que, quan el nombre de repeticions creix, el perfil de les barres es va assemblant cada cop més a una corba suau en forma de campana. D'aquí s'introdueix la distribució normal com el model que descriu molts indicadors continus de la realitat (alçades, pesos, puntuacions d'un test, edats d'un col·lectiu), que tendeixen a acumular-se al voltant d'un valor central i a escassejar als extrems. La classe magistral presenta la corba normal (la campana de Gauss) i les seves característiques bàsiques de manera intuïtiva i visual: la simetria respecte de la mitjana, el paper de la mitjana (on se situa el centre) i de la desviació típica (com d'ampla o estreta és la campana), recuperant aquests dos paràmetres de l'estadística descriptiva de la UD4 de 1r. Es mostren exemples reals d'indicadors socials que segueixen aproximadament una distribució normal. Al tancament es comenta on apareix la corba normal a la vida real, preparant la lectura de l'estudi de cas.

**Evidència d'avaluació formativa:** full amb la identificació de la corba normal i els seus elements en exemples reals (treball diari).

---

## Sessió 10 — Llegir la corba normal

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 · **Correspon a:** Activitat 3 de la programació.

**Materials:** enunciat de l'Activitat 3 (la distribució d'un indicador continu d'un col·lectiu, per exemple les puntuacions d'un test d'autonomia), llibreta, recursos visuals de la corba normal.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació de la distribució de l'indicador |
| Desenvolupament | 37 min | Identificar mitjana i desviació i llegir franges |
| Tancament | 15 min | Interpretar què diu la corba sobre el col·lectiu |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 3: la distribució d'un indicador continu d'un col·lectiu (per exemple, les puntuacions d'un test d'autonomia d'un grup de persones ateses, o les edats d'un col·lectiu) que segueix aproximadament una distribució normal. En parelles, l'alumnat ha d'identificar la mitjana (el valor central, on la campana és més alta) i la desviació típica (com d'escampades estan les dades), i llegir la corba per estimar quina proporció de persones es troba en cada franja. S'introdueix de manera intuïtiva la regla pràctica de la distribució normal (la majoria del col·lectiu es concentra a prop de la mitjana, dins d'una o dues desviacions típiques), que permet fer lectures ràpides sense càlculs complexos. El nucli de l'activitat és la interpretació en clau social: què significa, per al col·lectiu atès, que la majoria de puntuacions estiguin en una franja determinada, on se situen els casos extrems que potser necessiten més suport, i com aquesta lectura ajuda a dimensionar una intervenció. El docent acompanya la lectura de la corba i la interpretació. Al tancament es posa en comú què diu la distribució sobre el col·lectiu i com orienta la planificació.

**Evidència d'avaluació formativa:** full de l'Activitat 3 amb la mitjana, la desviació i la lectura de franges interpretades (treball diari, especialment indicatiu del criteri C3).

---

## Sessió 11 ⁺ — Les propietats de la normal: mitjana i desviació

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** sessió afegida per consolidar les propietats de la distribució normal abans del càlcul de probabilitats.

**Materials:** llibreta, pissarra, recursos visuals de corbes normals amb diferents mitjanes i desviacions, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Com canvia la corba si canvia la mitjana o la desviació |
| Desenvolupament | 35 min | Explorar les propietats + lectura de franges |
| Tancament | 10 min | Comparar dues distribucions normals |

**Desenvolupament detallat:** Aquesta sessió consolida la comprensió de les propietats de la distribució normal abans d'entrar en el càlcul de probabilitats amb el full de càlcul. Es treballa, sobretot de manera visual, com canvia la corba quan es modifiquen els seus dos paràmetres: si augmenta la mitjana, la campana es desplaça cap a la dreta (el col·lectiu té valors més alts); si augmenta la desviació típica, la campana s'eixampla i s'aplana (el col·lectiu és més heterogeni). Es comparen distribucions normals de diferents col·lectius per llegir-ne les diferències (per exemple, dos grups amb la mateixa mitjana però desviacions diferents: un de molt homogeni i un de molt divers), recuperant la idea de dispersió de la UD4 de 1r. A continuació, en parelles, l'alumnat llegeix i compara corbes normals d'exemples socials i n'estima les franges. El docent insisteix en la interpretació social de cada paràmetre (la mitjana com el «valor típic», la desviació com la «diversitat» del col·lectiu). Al tancament es comparen dues distribucions normals i s'interpreta què les diferencia, deixant l'alumnat preparat per calcular-hi probabilitats.

**Evidència d'avaluació formativa:** full amb la comparació de distribucions normals i la interpretació dels paràmetres (treball diari).

---

## Sessió 12 — Probabilitats sobre la normal

**Agrupament:** parelles (ordinador) · **Objectius/criteris:** O3 / C4 · **Correspon a:** Activitat 4 de la programació.

**Materials:** ordinadors amb full de càlcul, enunciat de l'Activitat 4 (una distribució normal real), full guia de funcions.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas i de l'eina |
| Desenvolupament | 37 min | Calcular probabilitats sobre la normal amb el full de càlcul |
| Tancament | 15 min | Interpretar el resultat dins de l'estudi |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 4: una distribució normal real d'un indicador d'un col·lectiu, sobre la qual cal calcular probabilitats concretes. En parelles, amb el full de càlcul, l'alumnat aprèn a utilitzar les funcions que calculen probabilitats sobre una distribució normal i resol preguntes d'interès: quina proporció del col·lectiu supera un cert valor, quina queda per sota d'un llindar, o quina es troba entre dos valors. El full de càlcul permet fer aquests càlculs sense recórrer a les taules de la normal, centrant l'esforç en el plantejament i la interpretació. El nucli de l'activitat és traduir cada probabilitat en una conclusió útil per a l'estudi del col·lectiu: per exemple, quin percentatge de persones ateses està per sota d'un llindar d'autonomia i, per tant, necessita un suport més intensiu. Aquesta sessió és, a més, la preparació directa de la inferència de la UD6, on aquestes mateixes idees s'aplicaran a les mostres. El docent acompanya l'ús de les funcions i, sobretot, la interpretació dels resultats dins del context de l'estudi. Al tancament es posa en comú què aporten aquestes probabilitats a la comprensió del col·lectiu.

**Evidència d'avaluació formativa:** full de càlcul amb les probabilitats sobre la normal calculades i interpretades (instrument «Treballs pràctics i tecnològics», 15%).

---

## Sessió 13 ⁺ — Consolidació de la distribució normal

**Agrupament:** parelles + individual · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** sessió de consolidació afegida per assentar la lectura i el càlcul sobre la distribució normal.

**Materials:** fitxa de consolidació amb casos graduats i errors típics, calculadora científica, full de càlcul (opcional), llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | «Caça l'error» amb lectures de la corba normal |
| Desenvolupament | 35 min | Bateria graduada de lectura i càlcul sobre la normal |
| Tancament | 15 min | Full d'autoavaluació individual |

**Desenvolupament detallat:** L'hora assenta tot el bloc de la distribució normal abans del repàs global, consolidant tant la lectura de la corba com el càlcul de probabilitats. S'obre amb una activitat de «caça l'error»: es reparteixen lectures de corbes normals fetes pel docent, algunes correctes i altres amb els errors habituals del grup (confondre mitjana i desviació, llegir malament una franja, oblidar la simetria de la campana). En parelles, l'alumnat detecta i corregeix els errors. A continuació es treballa una bateria graduada que combina lectura de la corba (identificar paràmetres, estimar franges amb la regla pràctica) i càlcul de probabilitats senzilles (a mà amb la regla pràctica o amb el full de càlcul). La graduació permet que cadascú avanci al seu ritme. Cada exercici manté la rutina d'interpretar el resultat en clau social. Al tancament, cada alumne resol individualment un full breu d'autoavaluació i marca, en una petita graella, què domina i què encara li costa, de cara a la prova.

**Evidència d'avaluació formativa:** full d'autoavaluació individual + observació de les parelles (treball diari).

**Atenció a la diversitat:** la fitxa ofereix un itinerari mínim (lectura de franges amb la regla pràctica sobre corbes clares) per a qui ho necessiti, i ampliacions amb el càlcul de probabilitats entre dos valors per a qui ja domini la lectura.

---

## Sessió 14 — Repàs global i síntesi (estacions)

**Agrupament:** grups aleatoris (estacions) · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** tancament i síntesi de la unitat.

**Materials:** quatre estacions de treball (probabilitat i taules de contingència, distribució binomial, lectura de la corba normal, probabilitats sobre la normal), amb una tasca curta cadascuna.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Explicació de la dinàmica d'estacions |
| Desenvolupament | 40 min | Rotació per les quatre estacions (≈10 min cada una) |
| Tancament | 12 min | Recull de dubtes comuns i mapa de la unitat |

**Desenvolupament detallat:** L'hora repassa de manera activa tota la unitat mitjançant quatre estacions, una per cada bloc treballat. A l'estació de probabilitat, l'alumnat calcula una probabilitat simple i una condicionada a partir d'una taula de contingència i les expressa en les tres formes; a la de binomial, reconeix una situació binomial i en calcula una probabilitat; a la de lectura de la normal, identifica la mitjana i la desviació d'una corba i n'estima una franja; i a la de probabilitats sobre la normal, calcula la proporció del col·lectiu en una franja i la interpreta. Els grups roten per les quatre estacions amb temps controlat, de manera que cada alumne torna a tocar tots els continguts en contextos lleugerament diferents. El docent observa quins blocs generen més dubtes per reforçar-los al taller de preparació. Al tancament es construeix col·lectivament un petit mapa de la unitat que connecta el camí «del cas a la llei» (de la probabilitat d'un cas concret als models que descriuen tot un col·lectiu: la binomial i la normal), i es deixa plantejat com la distribució normal obre la porta a la inferència estadística de la UD6. Es recullen els dubtes comuns a aclarir abans de la prova.

**Evidència d'avaluació formativa:** observació del treball a les estacions i recull de dubtes (treball diari).

---

## Sessió 15 ⁺ — Taller de preparació de la prova

**Agrupament:** parelles + individual · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** sessió afegida com a pont entre el repàs (sessió 14) i la prova escrita (sessió 16).

**Materials:** model de prova (simulacre) equivalent en estructura a la prova real, rúbrica simplificada, calculadora científica, llibreta.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Presentació de l'estructura de la prova i la rúbrica |
| Desenvolupament | 35 min | Simulacre per blocs amb temps controlat |
| Tancament | 15 min | Coavaluació amb rúbrica i pla d'estudi personal |

**Desenvolupament detallat:** L'hora comença mostrant de manera transparent com serà la prova de la sessió 16: els quatre blocs (un per criteri, C1-C4), el pes orientatiu de cadascun i una rúbrica simplificada amb els nivells d'assoliment. Fer explícits els criteris de correcció és especialment important per a un alumnat que pot arribar amb una relació insegura amb les matemàtiques, perquè desmunta la sensació que l'examen és imprevisible. A continuació, l'alumnat resol un simulacre breu —un ítem representatiu de cada bloc: una probabilitat condicionada a partir d'una taula, un càlcul de probabilitat binomial amb la seva interpretació, la lectura d'una corba normal i un càlcul de probabilitat sobre la normal— amb un temps controlat semblant al de la prova real, però en parelles, de manera que puguin verbalitzar l'estratègia abans d'enfrontar-s'hi sols. En acabar, es fa una coavaluació: cada parella corregeix el simulacre d'una altra amb la rúbrica a la mà, fet que obliga a interioritzar què es valora (no només el càlcul correcte, sinó el reconeixement del model adequat i la interpretació del resultat en clau social). Al tancament, cada alumne escriu un breu pla d'estudi personal a partir de les graelles d'autoavaluació de les sessions 3, 8 i 13 i del simulacre, anotant els dos o tres aspectes que ha de repassar amb més atenció. El docent recull aquests plans per detectar qui pot necessitar un suport addicional abans de l'examen.

**Evidència d'avaluació formativa:** simulacre resolt + pla d'estudi personal (treball diari; no computa com a nota de prova, però orienta el suport previ a l'examen).

**Atenció a la diversitat:** l'alumnat amb més dificultats pot disposar de la rúbrica i d'un formulari-resum (regla de Laplace i probabilitat condicionada, condicions del model binomial, propietats de la corba normal) durant el simulacre, retirant progressivament aquest suport de cara a la prova segons el cas.

---

## Sessió 16 — Prova escrita de la Unitat 5

**Agrupament:** individual · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** instrument d'avaluació «Proves escrites» de la programació general.

**Materials:** enunciat de la prova, calculadora científica, full en blanc; opcionalment, ordinador amb full de càlcul per a les distribucions.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 5 min | Repartiment de la prova i indicacions |
| Desenvolupament | 50 min | Realització individual de la prova |
| Tancament | 5 min | Recollida i breu comentari de tancament |

**Desenvolupament detallat:** La unitat es tanca amb la prova escrita individual, que recull els quatre blocs treballats i s'alinea amb els criteris d'avaluació C1-C4. La prova combina, com s'ha anunciat al taller, problemes contextualitzats de l'àmbit social (calcular probabilitats simples i condicionades a partir d'una taula de contingència i expressar-les en les tres formes, reconèixer una situació binomial i calcular-ne probabilitats per a la planificació d'un servei, llegir una corba normal d'un indicador d'un col·lectiu identificant-ne els paràmetres, i calcular i interpretar una probabilitat sobre la distribució normal). Segons la disponibilitat d'aula d'ordinadors, una part de la prova pot demanar el càlcul de probabilitats binomials o normals amb el full de càlcul, coherentment amb el treball tecnològic de la unitat. Es valora tant la correcció del càlcul com el reconeixement del model adequat a cada situació i, sobretot, la interpretació dels resultats en clau social. En acabar, el docent fa un breu comentari de tancament de la unitat i anuncia el calendari de correcció i, si escau, de recuperació trimestral.

**Evidència d'avaluació formativa:** prova escrita de la UD5 (instrument «Proves escrites», 60%).

---

## Relació amb l'avaluació global de la matèria

D'acord amb els instruments d'avaluació definits a la programació general, la UD5 alimenta els tres instruments. Les **proves escrites** (60%) es concreten en la sessió 16. El **treball diari i les activitats d'aula** (25%) es nodreixen de l'observació continuada de les aules pensants, les pissarres verticals, els fulls de les activitats i els exit tickets de les sessions 1 a 15. El tercer instrument, **treballs pràctics i tecnològics** (15%), s'activa de manera directa en aquesta unitat a través de les pràctiques amb full de càlcul de les sessions 7 i 12, vinculades explícitament a la programació general (full de càlcul a UD1, UD5 i UD6); se'n valora tant la correcció tècnica com la interpretació dels resultats. L'ús de la calculadora científica a la resta de sessions té un caràcter purament instrumental que no requereix ponderació pròpia.

## Observacions i marge de flexibilitat

El repartiment proposat és orientatiu, tal com ja indica la programació general per al conjunt de la temporalització. La UD5 reprèn de manera intensiva la probabilitat de la UD6 de 1r (regla de Laplace, probabilitat condicionada, taules de contingència i diagrames d'arbre) i la dispersió de la UD4 de 1r (mitjana i desviació típica), de manera que convé fer explícits aquests enllaços, sobretot a les sessions 1, 2 i 9. Si el grup arriba amb la probabilitat de 1r molt fluixa, es pot ampliar el bloc inicial (sessions 1, 2 i 3) reduint lleugerament el repàs de la sessió 14. L'enfocament de les distribucions es manté intuïtiu i aplicat, amb l'accent en la interpretació de la corba normal més que no pas en la complexitat tècnica, tal com demana la programació; el full de càlcul assumeix el càlcul de probabilitats per alliberar atenció per a la interpretació. Les sessions 4-5-6 (binomial) i 9-10 (normal) reprodueixen el patró metodològic ja establert a la resta de la programació (aules pensants → classe magistral → treball pràctic i estudi de casos), per mantenir-hi la coherència didàctica. Les sessions 1, 3, 7, 8, 11 i 13 (connexió amb 1r, consolidació de la probabilitat condicionada, full de càlcul, consolidació de la binomial, propietats i consolidació de la normal) i la sessió 15 són aportacions d'aquesta proposta, pensades per assentar la probabilitat de base, integrar de manera ordenada la pràctica amb full de càlcul prevista a la programació i preparar la inferència de la UD6. Les sessions tecnològiques (7 i 12) requereixen aula d'ordinadors i s'han de coordinar amb el seu horari d'ús. Com a darrera unitat abans de la inferència, és un bon moment per remarcar que la distribució normal és la base sobre la qual es construirà l'última unitat de l'etapa. Totes les dades reals utilitzades (taxes d'èxit de programes, puntuacions de tests, distribucions d'edats o d'indicadors de col·lectius) s'han d'actualitzar amb les xifres vigents en el moment d'impartir la unitat el curs 2027-28.
