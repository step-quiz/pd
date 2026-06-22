# Proposta detallada d'activitats — Unitat Didàctica 4
## Derivades i optimització: trobar el punt just

**Matemàtiques Aplicades II · 2n Batxillerat Professionalitzador en Serveis a la Comunitat**
**INS Miquel Tarradell · Curs 2027-28 · 16 hores**

---

Aquest document desenvolupa, sessió a sessió, les 16 hores previstes per a la Unitat Didàctica 4 a la programació general de Matemàtiques Aplicades II. Pren com a punt de partida els objectius, els criteris d'avaluació, els materials i les quatre activitats ja definides («A quina velocitat creix?», «Quan creix i quan decreix», «El cost mínim d'un servei» i «El benefici màxim o l'aforament ideal»), i les seqüencia seguint el mateix patró metodològic establert a la programació (aules pensants → classe magistral → treball pràctic i estudi de casos), tot afegint les sessions de connexió, consolidació i ampliació necessàries (connexió amb el vèrtex de les paràboles de 1r, consolidació del càlcul de derivades, mecanització de l'estudi del signe i de la cerca d'extrems, pràctica amb GeoGebra, un cas d'optimització integrador i un taller de preparació de la prova) per completar un itinerari de 16 hores coherent amb el perfil d'alumnat del Batxillerat Professionalitzador en Serveis a la Comunitat: motivació per les persones per sobre de l'abstracció matemàtica, contextos reals dels àmbits social i comunitari, i èmfasi en el pensament crític davant de dades. La unitat dona sentit pràctic a la derivada presentant-la sempre com una eina: primer com el ritme de canvi d'un fenomen (la velocitat amb què creix l'atur, el ritme de despesa d'un projecte) i després com l'instrument per trobar el punt òptim d'una situació real (el cost mínim, el benefici màxim, l'aforament ideal). Aprofundeix l'optimització que l'alumnat ja va tastar a 1r amb el vèrtex de les paràboles, ara amb funcions més generals, i integra GeoGebra per visualitzar pendents i extrems, vinculat a l'instrument «Treballs pràctics i tecnològics».

### Llegenda

| Codi | Objectiu de la UD4 |
| --- | --- |
| **O1** | Comprendre la derivada com el ritme de canvi d'un fenomen (la velocitat amb què creix l'atur, el ritme de despesa d'un projecte). |
| **O2** | Calcular derivades de funcions senzilles i utilitzar-les per estudiar el creixement i el decreixement d'un model. |
| **O3** | Aplicar la derivada per trobar màxims i mínims, aprofundint l'optimització que ja es va tastar a 1r amb el vèrtex de les paràboles, ara amb funcions més generals. |

| Codi | Criteri d'avaluació de la UD4 |
| --- | --- |
| **C1** | Interpreta la derivada com el ritme de canvi instantani i en llegeix el signe (positiu si el fenomen creix, negatiu si decreix). |
| **C2** | Calcula la derivada de funcions polinòmiques senzilles i l'utilitza per determinar els intervals de creixement i decreixement. |
| **C3** | Troba els màxims i mínims d'una funció igualant la derivada a zero i n'interpreta el resultat dins del context (cost mínim, benefici màxim, aforament ideal). |
| **C4** | Resol un problema d'optimització real complet, des del plantejament de la funció fins a la interpretació del punt òptim. |

### Visió general de les 16 hores

Cada fila correspon a una hora lectiva (60 min). Les sessions marcades amb ⁺ són les incorporades per completar i consolidar l'itinerari de 16 hores.

| # | Títol | Agrupament dominant | Metodologia | Referència a la programació |
| --- | --- | --- | --- | --- |
| 1 ⁺ | El ritme de canvi i el vèrtex de 1r (connexió) | Individual + gran grup | Repte curt + classe magistral | Connexió amb la UD3 de 1r (paràboles) |
| 2 | A quina velocitat creix? (descoberta) | Grups aleatoris, pissarres verticals | Aules pensants | Activitat 1 |
| 3 | La derivada com a pendent | Gran grup + parelles | Classe magistral | Activitat 1 — fase 2 |
| 4 | Calcular derivades de polinomis | Gran grup + parelles | Classe magistral + pràctic | Mecanització de la derivada |
| 5 ⁺ | Consolidació del càlcul de derivades | Parelles + individual | Treball pràctic (consolidació) | Reforç de C2 |
| 6 | Quan creix i quan decreix | Parelles | Treball pràctic / estudi de cas | Activitat 2 |
| 7 ⁺ | El signe de la derivada (mecanització) | Parelles | Treball pràctic (mecanització) | Reforç de C2 |
| 8 | Màxims i mínims: igualar la derivada a zero | Gran grup + parelles | Classe magistral | Pas previ a l'Activitat 3 |
| 9 | El cost mínim d'un servei | Parelles | Treball pràctic / estudi de cas | Activitat 3 |
| 10 ⁺ | Trobar extrems (mecanització) | Parelles | Treball pràctic (mecanització) | Reforç de C3 |
| 11 | El benefici màxim o l'aforament ideal | Parelles | Treball pràctic / estudi de cas | Activitat 4 |
| 12 ⁺ | GeoGebra: derivades, pendents i extrems | Parelles (ordinador/tauleta) | Treball pràctic i tecnològic | Reforç de la pràctica amb GeoGebra |
| 13 ⁺ | Cas d'optimització complet | Parelles | Treball pràctic / estudi de cas | Integració de tota la unitat |
| 14 | Repàs global i síntesi (estacions) | Grups aleatoris (estacions) | Síntesi/repàs | Tancament de la unitat |
| 15 ⁺ | Taller de preparació de la prova | Parelles + individual | Repàs guiat / autoavaluació | Preparació de l'instrument «Proves escrites» |
| 16 | Prova escrita de la UD4 | Individual | Avaluació | Instrument «Proves escrites» (60%) |

---

## Sessió 1 ⁺ — El ritme de canvi i el vèrtex de 1r (connexió)

**Agrupament:** individual + gran grup · **Objectius/criteris:** transversal, prepara O1 i O3 · **Correspon a:** connexió amb la UD3 de funcions de 1r (vèrtex de les paràboles).

**Materials:** llibreta de quadres, pissarra, gràfiques de paràboles amb el vèrtex de 1r.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | Repàs ràpid: el vèrtex d'una paràbola de 1r |
| Desenvolupament | 33 min | Del punt òptim concret a la idea de ritme de canvi |
| Tancament | 15 min | Posada en comú i reflexió breu individual |

**Desenvolupament detallat:** La unitat arrenca connectant amb una cosa que l'alumnat ja sap fer: a la UD3 de 1r va aprendre a trobar el vèrtex d'una paràbola per localitzar un punt òptim (el preu que maximitzava el benefici de la venda de samarretes). Es recupera aquell tipus de problema i es fa veure que llavors es resolia amb una fórmula específica per a paràboles. A continuació es planteja la pregunta que obre la unitat: «i si la funció no és una paràbola? Com trobaríem el punt òptim de qualsevol funció?». Per respondre-la, s'introdueix de manera intuïtiva la idea clau: en el punt més alt o més baix d'una corba, la gràfica deixa de pujar i comença a baixar (o a l'inrevés), de manera que en aquell punt, per un instant, «no creix ni decreix». Estudiar com creix o decreix una funció en cada punt és estudiar el seu ritme de canvi, que és el que mesura la derivada. El docent recull breument el punt de partida del grup (qui recorda el vèrtex i l'optimització de 1r i qui no), sense que sigui una prova avaluable. Al tancament, cada alumne anota amb les seves paraules què vol dir «ritme de canvi» i un exemple propi de l'àmbit social on interessi trobar un punt òptim.

**Evidència d'avaluació formativa:** full de connexió i reflexió individual (no computa a la nota; orienta la planificació docent).

**Atenció a la diversitat:** per a l'alumnat amb més inseguretat amb les paràboles i el càlcul algebraic es preveuen agrupaments heterogenis a les pissarres verticals de les properes sessions i una fitxa de suport (què és el pendent d'una recta, com es representa una paràbola, el càlcul del valor numèric) que es podrà tenir a mà durant la unitat i retirar progressivament.

---

## Sessió 2 — A quina velocitat creix? (descoberta)

**Agrupament:** grups aleatoris de 3, pissarres verticals · **Objectius/criteris:** O1 / C1 (de manera emergent) · **Correspon a:** Activitat 1 de la programació — fase d'aules pensants.

**Materials:** dades de l'evolució d'un indicador social (atur o despesa acumulada d'un projecte), pissarres verticals, llibreta de quadres.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Formació de grups + repartiment de les dades |
| Desenvolupament | 32 min | Descriure a quina velocitat canvia l'indicador |
| Tancament | 15 min | Volta de pissarres i aparició de la idea de ritme |

**Desenvolupament detallat:** Es formen grups aleatoris i es reparteix el cas de l'Activitat 1: les dades de l'evolució d'un indicador social al llarg del temps (per exemple, el nombre de persones a l'atur d'un municipi mes a mes, o la despesa acumulada d'un projecte). La consigna no és només dir si l'indicador puja o baixa, sinó descriure a quina velocitat ho fa: en quins períodes creix de pressa, en quins creix a poc a poc, en quins s'atura o decreix. A les pissarres, els grups comparen els canvis entre períodes consecutius i descobreixen que el «ritme» de creixement no és constant: hi ha trams on l'indicador es dispara i trams on amb prou feines es mou. El docent circula sense donar la resposta i fa preguntes d'extensió («com mesuraríeu la velocitat de creixement en un moment concret?», «què vol dir, socialment, que l'atur creixi cada cop més de pressa?», «i si en un mes ni puja ni baixa?»). S'espera que sorgeixi de manera intuïtiva la idea de ritme de canvi i que el seu signe (creix/decreix) i la seva magnitud (de pressa/a poc a poc) tenen una lectura social directa. Al tancament es fa una volta de pissarres i el docent recull les descripcions i la idea emergent de «velocitat de canvi», anunciant que la sessió següent li posarà nom: la derivada.

**Evidència d'avaluació formativa:** observació del raonament a les pissarres i descripció del ritme de canvi (treball diari).

---

## Sessió 3 — La derivada com a pendent

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O1 / C1 · **Correspon a:** Activitat 1 de la programació — fase de consolidació.

**Materials:** llibreta de quadres, regle, pissarra, gràfiques de fenòmens socials amb pendents diferents.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Es recupera la «velocitat de canvi» de la sessió 2 |
| Desenvolupament | 35 min | Classe magistral (derivada com a pendent) + lectura del signe |
| Tancament | 10 min | Llegir el ritme de canvi des d'una gràfica |

**Desenvolupament detallat:** Es comença recuperant la idea de «velocitat de canvi» sorgida a les pissarres i preguntant com es podria mesurar en un instant concret. La classe magistral formalitza, de manera intuïtiva i visual, la derivada com el ritme de canvi instantani d'una funció, que gràficament es correspon amb el pendent de la corba en aquell punt: on la gràfica puja amb molt de pendent, la derivada és gran i positiva (creix de pressa); on és gairebé plana, la derivada és prop de zero (a penes canvia); on baixa, la derivada és negativa (decreix). Es treballa sobretot la lectura del signe i de la magnitud de la derivada sobre gràfiques de fenòmens socials, connectant cada situació amb la seva interpretació real (l'atur que s'accelera, una despesa que es frena). Es manté un nivell intuïtiu, sense entrar encara en el càlcul. A continuació, en parelles, l'alumnat llegeix el ritme de canvi de diverses gràfiques en punts concrets, indicant si la derivada és positiva, negativa o nul·la i si és gran o petita. Al tancament es practica com es llegeix el ritme de canvi des d'una gràfica, preparant el càlcul de la sessió següent.

**Evidència d'avaluació formativa:** full amb la lectura del signe i la magnitud de la derivada sobre gràfiques (treball diari).

---

## Sessió 4 — Calcular derivades de polinomis

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O2 / C2 · **Correspon a:** mecanització del càlcul de la derivada.

**Materials:** llibreta de quadres, pissarra, calculadora científica, bateria inicial de polinomis.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | De llegir el pendent a calcular-lo |
| Desenvolupament | 35 min | Classe magistral (regles de derivació de polinomis) + pràctica |
| Tancament | 10 min | Comprovar el signe de la derivada en un punt |

**Desenvolupament detallat:** Aquesta sessió presenta com es calcula la derivada d'una funció polinòmica, l'eina que permetrà passar de llegir el ritme de canvi en una gràfica a calcular-lo amb precisió. La classe magistral introdueix les regles de derivació dels polinomis de manera operativa i senzilla (la derivada d'una potència, la d'una constant, la d'una suma), sense entrar en la definició formal amb límits, coherentment amb l'enfocament aplicat de la matèria. Es treballa pas a pas amb exemples, reprenent el llenguatge algebraic i els polinomis de la UD2 de 1r perquè l'alumnat reconegui el terreny. A continuació, en parelles, l'alumnat deriva una bateria inicial de polinomis senzills i, per a alguns, calcula el valor de la derivada en un punt concret (el valor numèric de la derivada) i n'interpreta el signe (si en aquell punt el fenomen creix o decreix). El docent vigila els errors típics (derivar malament una potència, oblidar que la derivada d'una constant és zero) i insisteix que derivar és un procediment mecànic que cal automatitzar. Al tancament es comprova el signe de la derivada en un punt per connectar el càlcul amb la lectura de la sessió anterior.

**Evidència d'avaluació formativa:** full amb derivades de polinomis calculades i el signe interpretat en punts concrets (treball diari).

---

## Sessió 5 ⁺ — Consolidació del càlcul de derivades

**Agrupament:** parelles + individual · **Objectius/criteris:** O2 / C2 · **Correspon a:** sessió de consolidació afegida per assentar el càlcul de derivades abans d'estudiar-ne el signe.

**Materials:** fitxa de consolidació amb casos graduats i errors típics, calculadora científica, llibreta de quadres.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 12 min | «Caça l'error» amb derivades ja calculades |
| Desenvolupament | 35 min | Bateria graduada de derivades de polinomis |
| Tancament | 13 min | Full d'autoavaluació individual |

**Desenvolupament detallat:** L'hora assenta el càlcul de derivades, que és el procediment mecànic sobre el qual reposa tota la unitat, abans de fer-lo servir per estudiar el creixement i trobar extrems. S'obre amb una activitat de «caça l'error»: es reparteixen derivades ja calculades pel docent, algunes correctes i altres amb els errors habituals del grup (derivar malament una potència, no derivar bé el terme de primer grau, posar un terme independent on la derivada hauria de ser zero). En parelles, l'alumnat detecta i corregeix els errors. A continuació es treballa una bateria graduada de derivades de polinomis, dels més senzills als que combinen diversos termes, perquè la mecànica esdevingui automàtica i alliberi atenció per a la interpretació posterior. La graduació permet que cadascú avanci al seu ritme. Cada exercici manté la rutina de comprovar terme a terme. Al tancament, cada alumne resol individualment un full breu d'autoavaluació i marca, en una petita graella, què domina i què encara li costa, de cara a la prova.

**Evidència d'avaluació formativa:** full d'autoavaluació individual + observació de les parelles (treball diari).

**Atenció a la diversitat:** la fitxa ofereix un itinerari mínim (derivades de polinomis de pocs termes amb la regla guiada) per a qui ho necessiti, i ampliacions amb polinomis més complets per a qui ja domini la mecànica.

---

## Sessió 6 — Quan creix i quan decreix

**Agrupament:** parelles · **Objectius/criteris:** O2 / C2 · **Correspon a:** Activitat 2 de la programació.

**Materials:** enunciat de l'Activitat 2 (una funció que modelitza un fenomen social), llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas: un fenomen que puja i baixa |
| Desenvolupament | 37 min | Calcular la derivada i estudiar-ne el signe |
| Tancament | 15 min | Interpretar els trams de creixement i decreixement |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 2: una funció que modelitza un fenomen social (per exemple, l'evolució de la demanda d'un servei al llarg de l'any, o l'eficàcia d'un programa segons la seva durada) que té trams de creixement i trams de decreixement. En parelles, l'alumnat ha de calcular la derivada de la funció i estudiar-ne el signe: on la derivada és positiva, el fenomen creix; on és negativa, decreix; i on s'anul·la, hi ha un canvi de tendència. El nucli de l'activitat és connectar el signe de la derivada amb el comportament del fenomen i la seva interpretació social: identificar els períodes en què la demanda d'un servei augmenta (cal reforçar recursos) i els que disminueix (es poden reassignar). El docent acompanya el càlcul de la derivada i l'estudi del signe, i demana que tradueixin els trams de creixement i decreixement en termes de l'enunciat. Al tancament es posa en comú quan creix i quan decreix el fenomen i què implica això per a la gestió, preparant la cerca d'extrems de les sessions següents.

**Evidència d'avaluació formativa:** full de l'Activitat 2 amb la derivada calculada, el signe estudiat i els trams interpretats (treball diari, especialment indicatiu del criteri C2).

---

## Sessió 7 ⁺ — El signe de la derivada (mecanització)

**Agrupament:** parelles · **Objectius/criteris:** O2 / C2 · **Correspon a:** sessió afegida per mecanitzar l'estudi del signe de la derivada.

**Materials:** bateria graduada de funcions per estudiar-ne el creixement, llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Recordatori: del signe de la derivada al creixement |
| Desenvolupament | 35 min | Bateria graduada d'estudi del creixement |
| Tancament | 15 min | Correcció creuada entre parelles |

**Desenvolupament detallat:** Després d'haver donat sentit a l'estudi del signe en un context real, aquesta sessió s'hi dedica a guanyar destresa mecànica. Es comença amb un recordatori del procediment complet: derivar la funció, trobar on s'anul·la la derivada (els punts on pot canviar la tendència) i estudiar el signe de la derivada a cada tram per determinar on la funció creix i on decreix. A continuació, en parelles, l'alumnat resol una bateria graduada de funcions polinòmiques en què cal determinar els intervals de creixement i decreixement. La graduació permet que cadascú avanci al seu ritme: les primeres funcions tenen un únic canvi de tendència, les últimes en tenen més d'un. El docent circula resolent dubtes i insistint en els paranys recurrents (equivocar-se en resoldre on s'anul·la la derivada, confondre el signe de la derivada amb el de la funció, oblidar de comprovar el signe a cada tram). Al tancament, cada parella intercanvia la seva bateria amb una altra i en fa una correcció creuada, fet que prepara la cerca d'extrems.

**Evidència d'avaluació formativa:** bateria d'estudi del creixement resolta i corregida (treball diari).

---

## Sessió 8 — Màxims i mínims: igualar la derivada a zero

**Agrupament:** gran grup + parelles · **Objectius/criteris:** O3 / C3 · **Correspon a:** pas previ necessari a l'Activitat 3.

**Materials:** llibreta de quadres, pissarra, calculadora científica, funcions amb màxims i mínims de contextos socials.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | On la funció deixa de pujar i comença a baixar |
| Desenvolupament | 35 min | Classe magistral (cerca d'extrems amb la derivada) |
| Tancament | 10 min | Distingir un màxim d'un mínim |

**Desenvolupament detallat:** Aquesta sessió presenta el mètode central de la unitat per trobar el punt òptim de qualsevol funció, generalitzant el vèrtex de les paràboles de 1r. Es parteix de la idea ja sorgida a la sessió 1: en un màxim o un mínim, la funció deixa de créixer i comença a decréixer (o a l'inrevés), de manera que en aquell punt el ritme de canvi és nul i, per tant, la derivada val zero. La classe magistral formalitza el mètode: per trobar els màxims i mínims d'una funció, es calcula la derivada, s'iguala a zero i es resol l'equació resultant; els valors obtinguts són els candidats a extrem. Després, estudiant el signe de la derivada al voltant de cada candidat (com a la sessió 7), es distingeix si és un màxim (la funció passa de créixer a decréixer) o un mínim (de decréixer a créixer). Es connecta explícitament amb el vèrtex de la paràbola de 1r, que ara apareix com un cas particular d'aquest mètode general. A continuació, en parelles, l'alumnat troba els extrems d'un parell de funcions senzilles i els classifica. Al tancament es practica com es distingeix un màxim d'un mínim, preparant l'estudi de cas del cost mínim.

**Evidència d'avaluació formativa:** full amb extrems trobats i classificats com a màxim o mínim (treball diari).

---

## Sessió 9 — El cost mínim d'un servei

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** Activitat 3 de la programació.

**Materials:** enunciat de l'Activitat 3 (el cost per usuari d'un servei modelitzat per una funció que primer baixa i després puja), llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas: la dimensió ideal d'un servei |
| Desenvolupament | 37 min | Derivar, igualar a zero i trobar el mínim |
| Tancament | 15 min | Interpretar el punt òptim com la dimensió ideal |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 3: el cost per usuari d'un servei modelitzat per una funció que primer baixa (perquè les despeses fixes es reparteixen entre més usuaris) i després puja (perquè cal contractar més personal i recursos), de manera que té un mínim. En parelles, l'alumnat ha de trobar, derivant la funció i igualant la derivada a zero, el nombre d'usuaris que fa mínim el cost per usuari, i comprovar amb el signe de la derivada que efectivament és un mínim. El nucli de l'activitat és la interpretació d'aquest punt òptim com la dimensió ideal del servei: ni massa petit (cost per usuari alt perquè les despeses fixes pesen molt) ni massa gran (cost per usuari alt per la saturació de recursos), sinó el punt que minimitza el cost. Això connecta directament el càlcul amb una decisió real de gestió de serveis. El docent acompanya el procés complet (derivar, igualar a zero, resoldre, comprovar i interpretar) i demana que valorin si el resultat té sentit en el context. Al tancament, cada parella interpreta el punt òptim trobat i justifica per què és la dimensió ideal del servei.

**Evidència d'avaluació formativa:** full de l'Activitat 3 amb el mínim trobat i interpretat com la dimensió ideal (treball diari, especialment indicatiu dels criteris C3 i C4).

---

## Sessió 10 ⁺ — Trobar extrems (mecanització)

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 · **Correspon a:** sessió afegida per mecanitzar la cerca de màxims i mínims.

**Materials:** bateria graduada de funcions per trobar-ne els extrems, llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Recordatori del mètode complet de cerca d'extrems |
| Desenvolupament | 35 min | Bateria graduada de màxims i mínims |
| Tancament | 15 min | Correcció creuada entre parelles |

**Desenvolupament detallat:** Aquesta sessió consolida el mètode de cerca d'extrems abans d'aplicar-lo al problema complet de l'Activitat 4. Es comença amb un recordatori del procediment complet: derivar, igualar la derivada a zero, resoldre l'equació, i estudiar el signe de la derivada al voltant de cada solució per classificar-la com a màxim o mínim. A continuació, en parelles, l'alumnat resol una bateria graduada de funcions polinòmiques de les quals cal trobar i classificar tots els extrems. La graduació permet que cadascú avanci al seu ritme: les primeres funcions tenen un únic extrem, les últimes en tenen diversos. El docent circula resolent dubtes i insistint en els paranys recurrents (no resoldre bé l'equació de la derivada igualada a zero, oblidar de classificar l'extrem, confondre màxim amb mínim). Es manté la rutina de comprovar que el resultat té sentit. Al tancament, cada parella intercanvia la seva bateria amb una altra i en fa una correcció creuada, deixant la mecànica a punt per al problema complet i la prova.

**Evidència d'avaluació formativa:** bateria d'extrems resolta i corregida (treball diari).

---

## Sessió 11 — El benefici màxim o l'aforament ideal

**Agrupament:** parelles · **Objectius/criteris:** O3 / C3 i C4 · **Correspon a:** Activitat 4 de la programació.

**Materials:** enunciat de l'Activitat 4 (un problema d'optimització complet de l'àmbit social o comunitari), llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del problema complet a optimitzar |
| Desenvolupament | 37 min | Plantejar la funció, optimitzar-la i interpretar |
| Tancament | 15 min | Justificar la decisió òptima |

**Desenvolupament detallat:** Es presenta el cas complet de l'Activitat 4: un problema d'optimització de l'àmbit social o comunitari en què, a diferència de les activitats anteriors, l'alumnat ha de construir ell mateix la funció a optimitzar a partir de l'enunciat. Pot ser, per exemple, el preu que maximitza els ingressos d'una activitat solidària, o l'aforament que fa òptim un equipament comunitari. En parelles, l'alumnat ha de fer tot el procés: identificar la variable, plantejar la funció objectiu (ingressos, benefici o el que correspongui) a partir de les dades, derivar-la, igualar la derivada a zero, trobar l'extrem i classificar-lo, i interpretar el resultat. El nucli de l'activitat és resoldre un problema d'optimització real de cap a cap, des del plantejament fins a la interpretació, que és la competència més completa de la unitat. El docent acompanya sobretot la fase de plantejament (traduir l'enunciat a una funció), que és la que més costa, i demana que comprovin el resultat amb GeoGebra si hi ha disponibilitat. Al tancament, cada parella redacta una breu conclusió justificada sobre la decisió òptima (quin preu, quin aforament) i per què, en un format proper a la justificació de propostes dels cicles formatius.

**Evidència d'avaluació formativa:** full de l'Activitat 4 amb el problema d'optimització resolt i la decisió justificada (treball diari, especialment indicatiu dels criteris C3 i C4).

---

## Sessió 12 ⁺ — GeoGebra: derivades, pendents i extrems

**Agrupament:** parelles (ordinador o tauleta) · **Objectius/criteris:** O2, O3 / C2 i C3 · **Correspon a:** sessió afegida per integrar GeoGebra en la visualització de pendents i extrems.

**Materials:** ordinador o tauleta amb GeoGebra, les funcions ja treballades a mà, full de pràctica tecnològica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Introduir una funció i la seva derivada a GeoGebra |
| Desenvolupament | 35 min | Visualitzar pendents, creixement i extrems |
| Tancament | 15 min | Validar gràficament els càlculs fets a mà |

**Desenvolupament detallat:** Aquesta sessió integra GeoGebra per visualitzar la derivada i els extrems, tal com preveu la programació, i és una de les pràctiques vinculades a l'instrument «Treballs pràctics i tecnològics». En parelles, l'alumnat introdueix a GeoGebra les funcions ja treballades a mà i observa visualment la relació entre la funció i la seva derivada: on la funció creix, la derivada és positiva; on decreix, és negativa; i als màxims i mínims, la derivada val zero (talla l'eix horitzontal). L'aplicació permet veure el pendent de la corba en cada punt i localitzar amb precisió els extrems. La tasca central és validar gràficament els càlculs fets a mà a les sessions anteriors: comprovar que els intervals de creixement i decreixement i els extrems calculats coincideixen amb el que mostra la gràfica. El valor pedagògic és consolidar la coherència entre el càlcul de la derivada, la seva lectura gràfica i la interpretació. El docent acompanya l'ús de l'eina i valora tant la correcció tècnica com la interpretació. Al tancament es comparen els extrems de la màquina amb els calculats a mà, reforçant que el càlcul i la gràfica s'han de validar mútuament.

**Evidència d'avaluació formativa:** full de pràctica tecnològica amb la visualització de pendents i extrems a GeoGebra (instrument «Treballs pràctics i tecnològics», 15%).

**Atenció a la diversitat:** es proporciona una pauta amb captures dels passos bàsics de GeoGebra per a qui no en tingui experiència, i les parelles es formen de manera que l'alumnat amb més soltesa digital doni suport a qui en tingui menys.

---

## Sessió 13 ⁺ — Cas d'optimització complet

**Agrupament:** parelles · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** integració de tota la unitat en un estudi de cas.

**Materials:** enunciat d'un cas d'optimització social complet, GeoGebra (opcional), llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Presentació del cas integrador |
| Desenvolupament | 37 min | Resoldre tot el procés d'optimització |
| Tancament | 15 min | Presentar i justificar la decisió òptima |

**Desenvolupament detallat:** Aquesta sessió integra tots els continguts de la unitat en un únic estudi de cas d'optimització real. En parelles, l'alumnat rep un enunciat complet de l'àmbit social o comunitari (per exemple, dimensionar un servei o una activitat per fer mínim un cost o màxim un benefici, amb diverses dades que cal combinar) i ha de fer tot el procés de manera autònoma: interpretar el ritme de canvi del fenomen, plantejar la funció a partir de les dades, calcular-ne la derivada, estudiar el creixement i el decreixement, trobar i classificar l'extrem, i interpretar el punt òptim en termes de la decisió real. El nucli de l'activitat és tancar el cicle complet d'una decisió d'optimització basada en el càlcul: del problema real a la recomanació justificada. El docent valora la integració dels diferents continguts (ritme de canvi, càlcul de derivades, estudi del signe, cerca d'extrems) i la qualitat de la interpretació. Al tancament, algunes parelles presenten breument la seva decisió òptima a la resta de la classe, justificant-la amb els resultats obtinguts, en un format proper a la defensa de propostes dels cicles formatius.

**Evidència d'avaluació formativa:** full de l'estudi de cas d'optimització resolt amb la decisió justificada (treball diari; la part de GeoGebra, si s'usa, alimenta també «Treballs pràctics i tecnològics»).

---

## Sessió 14 — Repàs global i síntesi (estacions)

**Agrupament:** grups aleatoris (estacions) · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** tancament i síntesi de la unitat.

**Materials:** quatre estacions de treball (ritme de canvi i signe de la derivada, càlcul de derivades, estudi del creixement, cerca i interpretació d'extrems), amb una tasca curta cadascuna.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 8 min | Explicació de la dinàmica d'estacions |
| Desenvolupament | 40 min | Rotació per les quatre estacions (≈10 min cada una) |
| Tancament | 12 min | Recull de dubtes comuns i mapa de la unitat |

**Desenvolupament detallat:** L'hora repassa de manera activa tota la unitat mitjançant quatre estacions, una per cada bloc treballat. A l'estació de ritme de canvi, l'alumnat llegeix el signe i la magnitud de la derivada sobre una gràfica i l'interpreta; a la de càlcul, deriva uns quants polinomis; a la d'estudi del creixement, determina els intervals de creixement i decreixement d'una funció; i a la de cerca d'extrems, troba i classifica el màxim o el mínim d'una funció i n'interpreta el significat. Els grups roten per les quatre estacions amb temps controlat, de manera que cada alumne torna a tocar tots els continguts en contextos lleugerament diferents. El docent observa quins blocs generen més dubtes per reforçar-los al taller de preparació. Al tancament es construeix col·lectivament un petit mapa de la unitat que connecta els tres passos (entendre la derivada com a ritme de canvi → calcular-la i estudiar-ne el signe → trobar el punt òptim), i es deixa plantejat com aquesta eina d'optimització tanca el bloc d'anàlisi de l'etapa. Es recullen els dubtes comuns a aclarir abans de la prova.

**Evidència d'avaluació formativa:** observació del treball a les estacions i recull de dubtes (treball diari).

---

## Sessió 15 ⁺ — Taller de preparació de la prova

**Agrupament:** parelles + individual · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** sessió afegida com a pont entre el repàs (sessió 14) i la prova escrita (sessió 16).

**Materials:** model de prova (simulacre) equivalent en estructura a la prova real, rúbrica simplificada, llibreta de quadres, calculadora científica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 10 min | Presentació de l'estructura de la prova i la rúbrica |
| Desenvolupament | 35 min | Simulacre per blocs amb temps controlat |
| Tancament | 15 min | Coavaluació amb rúbrica i pla d'estudi personal |

**Desenvolupament detallat:** L'hora comença mostrant de manera transparent com serà la prova de la sessió 16: els quatre blocs (un per criteri, C1-C4), el pes orientatiu de cadascun i una rúbrica simplificada amb els nivells d'assoliment. Fer explícits els criteris de correcció és especialment important per a un alumnat que pot arribar amb una relació insegura amb les matemàtiques, perquè desmunta la sensació que l'examen és imprevisible. A continuació, l'alumnat resol un simulacre breu —un ítem representatiu de cada bloc: interpretar el ritme de canvi sobre una gràfica, calcular una derivada, estudiar el creixement d'una funció i resoldre un problema d'optimització amb la seva interpretació— amb un temps controlat semblant al de la prova real, però en parelles, de manera que puguin verbalitzar l'estratègia abans d'enfrontar-s'hi sols. En acabar, es fa una coavaluació: cada parella corregeix el simulacre d'una altra amb la rúbrica a la mà, fet que obliga a interioritzar què es valora (no només el càlcul correcte de la derivada, sinó l'estudi acurat del signe, la classificació de l'extrem i la interpretació del punt òptim dins el context). Al tancament, cada alumne escriu un breu pla d'estudi personal a partir de les graelles d'autoavaluació de les sessions 5 i 10 i del simulacre, anotant els dos o tres aspectes que ha de repassar amb més atenció. El docent recull aquests plans per detectar qui pot necessitar un suport addicional abans de l'examen.

**Evidència d'avaluació formativa:** simulacre resolt + pla d'estudi personal (treball diari; no computa com a nota de prova, però orienta el suport previ a l'examen).

**Atenció a la diversitat:** l'alumnat amb més dificultats pot disposar de la rúbrica i d'un formulari-resum (les regles de derivació dels polinomis, com s'estudia el signe de la derivada, el mètode per trobar i classificar extrems) durant el simulacre, retirant progressivament aquest suport de cara a la prova segons el cas.

---

## Sessió 16 — Prova escrita de la Unitat 4

**Agrupament:** individual · **Objectius/criteris:** O1, O2, O3 / C1, C2, C3, C4 · **Correspon a:** instrument d'avaluació «Proves escrites» de la programació general.

**Materials:** enunciat de la prova, calculadora científica, regle, full de quadres; opcionalment, ordinador amb GeoGebra per a la part gràfica.

| Fase | Temps | Què passa (resum) |
| --- | --- | --- |
| Inici | 5 min | Repartiment de la prova i indicacions |
| Desenvolupament | 50 min | Realització individual de la prova |
| Tancament | 5 min | Recollida i breu comentari de tancament |

**Desenvolupament detallat:** La unitat es tanca amb la prova escrita individual, que recull els quatre blocs treballats i s'alinea amb els criteris d'avaluació C1-C4. La prova combina, com s'ha anunciat al taller, un problema d'optimització complet contextualitzat de l'àmbit social (plantejar la funció a partir de l'enunciat, derivar-la, trobar i classificar l'extrem, i interpretar el punt òptim com una decisió real) amb exercicis més curts de càlcul de derivades, d'estudi del creixement i decreixement, i de lectura del ritme de canvi sobre una gràfica. Segons la disponibilitat d'aula d'ordinadors, una part de la prova pot recolzar-se en GeoGebra per a la comprovació gràfica, coherentment amb el treball tecnològic de la unitat. Es valora tant la correcció del càlcul de la derivada com l'estudi acurat del signe, la classificació correcta dels extrems i, sobretot, la interpretació del punt òptim dins del context social. En acabar, el docent fa un breu comentari de tancament de la unitat i anuncia el calendari de correcció i, si escau, de recuperació trimestral.

**Evidència d'avaluació formativa:** prova escrita de la UD4 (instrument «Proves escrites», 60%).

---

## Relació amb l'avaluació global de la matèria

D'acord amb els instruments d'avaluació definits a la programació general, la UD4 alimenta els tres instruments. Les **proves escrites** (60%) es concreten en la sessió 16. El **treball diari i les activitats d'aula** (25%) es nodreixen de l'observació continuada de les aules pensants, les pissarres verticals, els fulls de les activitats i els exit tickets de les sessions 1 a 15. El tercer instrument, **treballs pràctics i tecnològics** (15%), s'activa de manera directa en aquesta unitat a través de la pràctica amb GeoGebra de la sessió 12 (i, opcionalment, del cas integrador de la sessió 13), vinculada explícitament a la programació general (GeoGebra a UD2, UD3 i UD4); se'n valora tant la correcció tècnica com la validació gràfica dels càlculs. L'ús de la calculadora científica a la resta de sessions té un caràcter purament instrumental que no requereix ponderació pròpia.

## Observacions i marge de flexibilitat

El repartiment proposat és orientatiu, tal com ja indica la programació general per al conjunt de la temporalització. La UD4 aprofundeix l'optimització que l'alumnat ja va tastar a 1r amb el vèrtex de les paràboles (UD3 de 1r), ara amb funcions més generals i amb una eina nova (la derivada), de manera que convé fer explícit aquest enllaç, sobretot a la sessió 1 de connexió i a la sessió 8. L'enfocament del càlcul de derivades es manté operatiu i aplicat: es treballen les regles de derivació dels polinomis sense entrar en la definició formal amb límits, coherentment amb el perfil de l'alumnat. Les sessions 2-3 (ritme de canvi), 6 (creixement) i 8-9 (extrems) reprodueixen el patró metodològic ja establert a la resta de la programació (aules pensants → classe magistral → treball pràctic i estudi de casos), per mantenir-hi la coherència didàctica. Les sessions 1, 4, 5, 7, 10, 12 i 13 (connexió amb 1r, càlcul i consolidació de derivades, mecanització del signe i dels extrems, GeoGebra i cas integrador) i la sessió 15 són aportacions d'aquesta proposta, pensades per assentar el càlcul de derivades, integrar de manera ordenada la pràctica amb GeoGebra prevista a la programació i garantir un tancament de la unitat coherent. La sessió tecnològica (12) requereix ordinadors o tauletes amb GeoGebra i s'ha de coordinar amb el seu horari d'ús. Com a unitat que tanca el bloc d'anàlisi (UD3 i UD4), és un bon moment per fer una mirada enrere sobre les funcions, els límits i les derivades abans d'encarar el bloc d'estadística i probabilitat del tercer trimestre. Totes les dades reals utilitzades (costos de serveis, ingressos d'activitats, aforaments d'equipaments) s'han d'actualitzar amb les xifres vigents en el moment d'impartir la unitat el curs 2027-28.
