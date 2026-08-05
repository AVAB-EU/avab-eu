# Webbplatsomfattande CTA-inventering och beslut

## Status och syfte

Inventerad 2026-08-05 mot `upstream/main` efter att referenspilotens nya CTA
hade mergats och deployats till `test2.avab.eu`.

Det här dokumentet ersätter inte referenspilotens historik, men är styrande för
nästa CTA-fas. Syftet är att:

- skilja lanseringskandidater från gamla, trasiga och tekniska preview-routes
- fatta ett CTA-beslut för varje aktiv sida
- rätta döda eller dubblerade CTA-mål i samband med respektive migrering
- undvika en mekanisk webbplatsomfattande komponentersättning utan hänsyn till
  sidans uppgift

Inventeringen ändrar inte publik layout eller CTA-kod.

## Sammanfattat beslut

Testbygget innehåller 75 genererade HTML-sidor:

- 49 kanoniska routes med en fil som heter exakt `index.astro`
- 25 gamla, trasiga eller preview-routes som inte ska ingå i CTA-arbetet
- 1 avsiktlig redirect från `/miljo/sporthall/` till
  `/miljo/sporthall-arena/`

De 49 kanoniska routsen har följande nuläge:

| Nuvarande lösning | Antal |
|---|---:|
| `PageCTA` via referensarkitekturen | 14 |
| Lokal `fullwidth-cta` | 33 |
| Lokalt CTA-kort | 1 |
| Lokal kontaktmodul | 1 |

Beslutet för målbilden är:

- behåll `PageCTA` på de 14 referensdetaljerna
- ersätt 33 lokala fullbredds-CTA:er och kameraövervakningens CTA-kort med
  `PageCTA`
- behåll kontaktsidans kontaktmodul och lägg inte till en extra `PageCTA`
- använd högst två knappar per `PageCTA`
- använd sidunika budskap och underbyggda punkter; samma generiska text ska inte
  kopieras till alla sidor
- behåll den generiska `foot-cta` i `SiteFooter` under migreringsbatcherna som
  rollback-skydd, men ta bort den i slutlig upprensning när alla valda sidor har
  granskad `PageCTA`

Slutmålet är därmed 48 aktiva sidor med sidstyrd `PageCTA` och kontaktsidan med
sin befintliga, uppgiftsstyrda kontaktmodul.

## CTA-familjer

| Familj | Användning | Primär handling | Sekundär handling |
|---|---|---|---|
| Projekt och miljö | Start, miljösidor, referensarkiv, projektnära innehåll | Kontaktformulär eller uppladdning | Relevant tjänst eller arbetssätt |
| Specialisttjänst | Ljud, mikrofoner, styrning, hörslinga och liknande | Kontaktformulär | Närliggande tjänst eller metod |
| Service och snabb hjälp | Garanti, service och akuta driftfrågor | Telefon | Kontaktformulär |
| Referens | Referensdetaljer | Kontaktformulär | Relevant miljösida |
| Integritet | Integritetspolicy | E-post till AVAB | Kontaktsidan |
| Kontaktflöde | Kontaktsidan | Sidans eget formulär | Telefon |

Komponenten behöver inte få en variant per familj. Familjen styr innehåll och
länkmål, medan `PageCTA` förblir generell.

## Beslut per route: gemensamma och redaktionella sidor

| Route | Nuläge | Beslut | CTA-familj | Särskild åtgärd |
|---|---|---|---|---|
| `/` | fullwidth | Byt till `PageCTA` | Projekt och miljö | Behåll rådgivning som primär och projektering som sekundär |
| `/integritetspolicy/` | fullwidth | Byt till `PageCTA` | Integritet | Behåll e-post och kontakt; ta bort telefon som tredje CTA-knapp |
| `/kontakt/` | lokal kontaktmodul | Behåll, ingen `PageCTA` | Kontaktflöde | Formuläret är sidans mål; undvik en självrefererande extra CTA |
| `/kunskap/kablar-kontakter/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Behåll kontakt och projektering; telefon finns fortsatt i footer/kontakt |
| `/om-oss/` | fullwidth | Byt till `PageCTA` | Projekt och miljö | Ersätt primär telefon med kontaktflöde och rätta den döda projekteringslänken |
| `/rastsignal/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Behåll kontakt och skola; ta bort tredje telefonknappen |

## Beslut per route: referenser

| Route | Nuläge | Beslut | Särskild åtgärd |
|---|---|---|---|
| `/referenser/` | fullwidth | Byt till `PageCTA` | Rätta kontaktankaret till `#kontaktformular`; behåll tjänstefördjupning |
| `/referenser/arjangs-simhall/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/claessons-restaurang-konferens/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/ekhagsskolan-dals-langed/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/friskis-solstadens-sportcenter/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/hanza-konferens-tocksfors/` | `PageCTA` | Behåll | Visuellt kontrollfall |
| `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/kroppkarrs-ip-fotboll/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/lesjofors-ab/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/lundsbergs-skola-gym/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/minnebergsskolan-arvika/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/nordic-wellness-orebro-marieberg/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/saffle-simhall/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/sannerudshallen-kil/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |
| `/referenser/sorby-sporthall-kumla/` | `PageCTA` | Behåll | Ingen CTA-ändring före visuell slutkontroll |

## Beslut per route: miljösidor

Samtliga 15 miljösidor ska få `PageCTA` med familjen **Projekt och miljö**.
Nuvarande sidunika rubrik, text och faktapunkter är redaktionell utgångspunkt.

| Route | Nuläge | Beslut | Sekundärt mål eller korrigering |
|---|---|---|---|
| `/miljo/butik-retail/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/gym/` | fullwidth | Byt till `PageCTA` | `/tjanster/ljudsystem/` |
| `/miljo/hotell/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/industri/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/ishall/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/kontor-konferens/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/kopcentrum-galleria/` | fullwidth | Byt till `PageCTA` | Använd kontaktformulär i stället för personbunden e-post; sekundär projektering |
| `/miljo/kyrka/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/parkering-garage/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/restaurang-bar-klubb/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/simhall/` | fullwidth | Byt till `PageCTA` | Ersätt den andra `/kontakt/`-knappen med `/tjanster/projektering/` |
| `/miljo/skola/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/sporthall-arena/` | fullwidth | Byt till `PageCTA` | Ersätt saknad budgetkalkylator med `/tjanster/projektering/` |
| `/miljo/utomhusidrott/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |
| `/miljo/vard/` | fullwidth | Byt till `PageCTA` | `/tjanster/projektering/` |

## Beslut per route: tjänstesidor

| Route | Nuläge | Beslut | CTA-familj | Sekundärt mål eller korrigering |
|---|---|---|---|---|
| `/tjanster/bakgrundsmusik/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Behåll `#arbetssatt` |
| `/tjanster/certifiering/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Kontaktformulär primärt, telefon sekundärt |
| `/tjanster/driftsattning/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Kontaktformulär primärt, telefon sekundärt |
| `/tjanster/garanti-och-service/` | fullwidth | Byt till `PageCTA` | Service och snabb hjälp | Telefon primärt, kontaktformulär sekundärt |
| `/tjanster/horslinga/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Ersätt dubbla kontaktmål med `/tjanster/taluppfattbarhet/` sekundärt |
| `/tjanster/installation/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Kontaktformulär primärt, projektering sekundärt |
| `/tjanster/kameraovervakning/` | CTA-kort | Byt till `PageCTA` | Specialisttjänst | Ersätt dubbla kontaktmål med projektering sekundärt |
| `/tjanster/ljudsystem/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Behåll taluppfattbarhet sekundärt |
| `/tjanster/mikrofoner/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Behåll ljudsystem sekundärt |
| `/tjanster/projektering/` | fullwidth | Byt till `PageCTA` | Projekt och miljö | Kontaktformulär primärt, telefon sekundärt |
| `/tjanster/styrsystem-integration/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Ersätt `/service-support/` med `/tjanster/garanti-och-service/` |
| `/tjanster/talat-utrymningslarm/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Rätta ankaret till `#kontaktformular`; behåll taluppfattbarhet sekundärt |
| `/tjanster/taluppfattbarhet/` | fullwidth | Byt till `PageCTA` | Specialisttjänst | Behåll hörslinga sekundärt |

## Bekräftade CTA-problem

### Döda mål

| Route | Nuvarande CTA-mål | Beslutad ersättning |
|---|---|---|
| `/om-oss/` | `/projektering/` | `/tjanster/projektering/` |
| `/referenser/` | `/kontakt/#ladda-upp-underlag` | `/kontakt/#kontaktformular` |
| `/miljo/sporthall-arena/` | `/budgetkalkylator-av-teknik/` | `/tjanster/projektering/` |
| `/tjanster/styrsystem-integration/` | `/service-support/` | `/tjanster/garanti-och-service/` |
| `/tjanster/talat-utrymningslarm/` | `/kontakt/#ladda-upp-underlag` | `/kontakt/#kontaktformular` |

Budgetkalkylatorn och de gamla servicevägarna förekommer även utanför CTA:erna.
De ska inventeras i ett separat länkarbete; CTA-migreringen får inte beskrivas
som en fullständig webbplatsomfattande länkreparation.

### Dubblerade knappmål

| Route | Problem | Beslut |
|---|---|---|
| `/miljo/simhall/` | Två knappar går till `/kontakt/` | Sekundär knapp går till projektering |
| `/tjanster/horslinga/` | Två knappar går till `/kontakt/` | Sekundär knapp går till taluppfattbarhet |
| `/tjanster/kameraovervakning/` | Två knappar går till `/kontakt/` | Sekundär knapp går till projektering |

## Routes som inte ska migreras

Följande 25 routes byggs på test2 men ska inte få ny CTA. De är gamla
jämförelseversioner, trasiga varianter eller HTML-previewfiler och ska hanteras
som en separat route-/releaseupprensning:

- `/miljo/butik-retail/index-gammal/`
- `/miljo/hotell/index-gammal/`
- `/miljo/hotell/preview-miljo-hotell/`
- `/miljo/industri/index-gammal/`
- `/miljo/ishall/index-gammal/`
- `/miljo/ishall/index-ny trasig/`
- `/miljo/ishall/preview-miljo-ishall/`
- `/miljo/kontor-konferens/index-gammal/`
- `/miljo/kontor-konferens/index-ny fast trasig/`
- `/miljo/kontor-konferens/preview-miljo-kontor-konferens/`
- `/miljo/kopcentrum-galleria/index-ny men trasig/`
- `/miljo/kopcentrum-galleria/preview-miljo-kopcentrum-galleria/`
- `/miljo/kyrka/index-gammal/`
- `/miljo/parkering-garage/index-gammal/`
- `/miljo/restaurang-bar-klubb/index-gammal/`
- `/miljo/skola/index-gammal/`
- `/miljo/utomhusidrott/index ny fast trasig/`
- `/miljo/utomhusidrott/index-gammal/`
- `/miljo/utomhusidrott/preview-miljo-utomhusidrott/`
- `/miljo/vard/index2-ful/`
- `/miljo/vard/index-ny men trasig/`
- `/miljo/vard/index-pre/`
- `/miljo/vard/preview-miljo-vard/`
- `/referenser/claessons-restaurang-konferens/claessons-html-preview/`
- `/referenser/claessons-restaurang-konferens/index gammal/`

Redirecten `/miljo/sporthall/` ska inte ha en egen CTA. Den ska fortsätta leda
till den kanoniska `/miljo/sporthall-arena/` tills ett separat URL- och
redirectbeslut tas inför produktionslansering.

## Genomförandeordning

### Batch 1: gemensamma pilotfall

- startsidan
- referensarkivet
- om oss
- kunskapssidan
- integritetspolicyn
- rastsignal

Syftet är att verifiera att `PageCTA` fungerar för både kommersiell,
redaktionell och juridisk kontext innan större batcher.

### Batch 2: miljösidor

- migrera samtliga 15 miljösidor i en kodbatch
- använd befintliga sidunika texter och faktapunkter som underlag
- rätta bara CTA-relaterade länkar
- granska minst en kort, en normal och en lång CTA i desktop och mobil

### Batch 3: tjänstesidor

- migrera samtliga 13 tjänstesidor
- använd särskilt serviceflöde för garanti- och servicesidan
- ersätt kameraövervakningens CTA-kort
- kontrollera telefon-, e-post-, hash- och interna länkar

### Batch 4: slutlig upprensning

- verifiera samtliga 49 kanoniska routes
- ta bort gamla lokala CTA-markup- och CSS-regler som inte längre används
- ta bort den generiska `foot-cta` ur `SiteFooter` när alla sidstyrda CTA:er är
  godkända
- behåll kontaktsidans lokala kontaktmodul
- dokumentera desktop-, mobil-, tangentbords- och länkgranskning

## Regler för varje implementationbatch

- inga gamla/preview-routes får följa med
- ingen sida får mer än en primär sid-CTA före footern
- högst två knappar i `PageCTA`
- primär och sekundär knapp får inte ha samma mål
- relativa interna länkar ska användas
- varje internt CTA-mål och fragment ska finnas i det byggda resultatet
- proof points ska komma från befintlig sidtext eller verifierat underlag
- telefon och e-post används bara när sidans intention motiverar det
- global `PageCTA`-CSS ändras endast om ett faktiskt gemensamt behov hittas
- `SiteFooter` ändras inte förrän sista upprensningsbatchen
- varje batch deployas till noindex-skyddade test2 och granskas innan nästa batch

## Kvarstående produktbeslut

Följande behöver inte blockera första pilotbatchen men ska beslutas före
slutlig release:

1. Ska personbunden e-post på köpcentrumsidan bevaras någonstans utanför CTA:n?
2. Ska kontaktformuläret få en stabil URL-parameter för projekt respektive
   service, så att `PageCTA` kan öppna rätt formulärläge från andra sidor?
3. Ska de 25 gamla/preview-routsen tas bort, flyttas utanför `src/pages` eller
   skyddas på annat sätt före produktionslansering?
4. Ska klick på primär och sekundär CTA mätas med gemensamma data-attribut?
