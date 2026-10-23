# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-10-23._

## Aktuellt läge

- `AVAB-EU/avab-eu` är projektets enda source of truth. Produktionsdeploy ska utgå från `main`.
- Teknisk SEO-baslinje är genomförd: sitemap, draft/noindex, internlänkar, guardrails och build har verifierats. Se `docs/audits/publicering-indexering-2026-09-21.md`.
- **Referenssidan är funktionellt och visuellt godkänd av användaren 2026-10-10.** Sökning, Miljö/Teknik/Ort-plats-filter, antal, `Rensa allt`, URL-state och desktop/tablet-layouten är mergeade på `main` (bl.a. PR #110). Inga fler filterändringar behövs utan ny uttrycklig beställning.
- Kamera Butik är länkad till Go Banana-referensen och den tillfälliga publiceringscopyn är åtgärdad.
- PR #111 har etablerat tjänstesidestandard och delad FAQ-komponent; fler sidors migrering återstår. PR #112 har standardiserat global footer, inklusive Hörslinga och guardrail.
- **Tjänstesidor 2026-10-13:** PR #138 rättade Konferensrum-kortets klickkonflikt, PR #140 Mikrofoners hero-preload, PR #142 Talat utrymningslarms hero-preload och PR #144 horisontell scroll vid 320 px i samma tjänstesidas `#prioritet`. Alla är mergeade efter grön CI och relevanta godkännanden. Nästa arbetsblock är en read-only visuell jämförelse av kortare hero på Talat utrymningslarm.
- PR #106:s två P2-reviewfynd är åtgärdade i PR #114 och visuellt godkända. Även Kunskapsbankens hero-etikett och en krasch i referensfiltreringen rättades i samma PR.
- Äldre referensfilter-branch är helt överspelad av `main`. Header-branchen med 14 unika commits finns bevarad både under sitt ursprungliga namn och i `archive/header-scroll-auto-hide-2026-10-10`; ingen gammal branch har råkat mergeas in i godkänd kod.
- Kameraundersidorna Skola, Parkering, Industri och Galleria ligger på `main` och går att öppna via direktlänk på `avab.eu` (bekräftat av användaren). De har fortfarande `draft: true` och `seo.noindex: true`, vilket inte är ett slutligt publiceringsgodkännande.

## Nästa arbetsblock

### Nästa arbetsblock – tjänstesidor: verifierade användarproblem

- [x] **Read-only kodinventering 2026-10-13:** prioriterade tjänstesidor kontrollerade för konkreta problem med bl.a. länkar, FAQ och hero. Ingen webbläsarsession fanns i inventeringen; visuella problem på olika skärmstorlekar har inte generellt verifierats. Undvik ändringar enbart för att få äldre FAQ-kod att följa ny komponentstandard.
- [x] **Styrsystem & integration – Konferensrum-kortet:** rättad klickkonflikt mellan kortets miljölänk och brödtextlänken till Konferensteknik. PR #138 mergead efter grön CI och användarens manuella godkännande av mus/touch, tangentbord och utseende. Endast sidans Astro-markup ändrades, ingen global CSS.
- [x] **Mikrofoner – hero-preload rättad:** PR #140 är squash-mergead 2026-10-13 efter grön CI. Preload (`href` och `imagesrcset`) pekar nu på befintlig hero-bild `/assets/mikrofoner-hero.webp`. Inga visuella bilder eller bildbeskärningar ändrades.
- [x] **Talat utrymningslarm – hero-preload:** PR #142 är squash-mergead 2026-10-13 (`451a3c02`) efter grön CI. `imagesrcset` matchar nu `href` och befintlig CSS-hero; felaktig förladdning av simhallsbilden är borttagen. Inga layout- eller bildbyten gjordes.
- [x] **Talat utrymningslarm – mobilscroll i `#prioritet`:** PR #144 är squash-mergead 2026-10-13 (`9dc18a77`) efter grön CI och användarens visuella godkännande av jämförelsebild vid 320 px. En diskretionär avstavning i H2 (`Säkerhets&shy;funktionen`) tog bort 40 px sidscroll vid 320 px enligt Codex Playwright-test. Ingen global CSS eller annan sidkod ändrades.
- [x] **Talat utrymningslarm – read-only hero-jämförelse 2026-10-13:** Codex testade original, variant A och variant B samt reviderad B temporärt i Playwright med riktig Plus Jakarta Sans vid 320, 390 och 1440 px (844 px höga fönster). Reviderad B: H1 3/3/2 rader; herohöjd 786/737/600 px mot original 1102/956/637 px; primärknapp Y 687–743/607–663/495–551 px, helt synlig. Ingen horisontell scroll eller överlappning enligt Codex. Ingen källfil, branch eller PR skapades för förslaget.
- [ ] **Nästa beslut – Talat utrymningslarm, kortare hero:** Föreslagen H1: `Talade larm för utrymning och inrymning`. Föreslagen ingress: `AVAB projekterar, installerar och verifierar talat utrymningslarm och inrymningslarm för publika miljöer i hela Sverige. Vi hjälper också till med driftsättning, mätning och dokumentation.` Befintlig eyebrow och CTA behålls. Jämförelsebilder ligger lokalt i `C:/webbprojekt/avab-qa/hero-talat-utrymningslarm/` (framför allt `jamforelse-reviderad-b-390.png`) och är **inte granskade av ChatGPT**. Invänta uttryckligt visuellt/textmässigt användargodkännande före kodändring. Därefter: liten separat feature-PR från aktuell `main`, ändra endast H1 och ingress, kör build/CI, verifiera visuell mobil/desktop-layout och merga först efter godkännande. Ingen ny global hero-standard beslutad.
- [ ] **Fortsatt tjänstegranskning:** prioritera belagda problem för besökare framför generell refaktorering. Låt kamera- och referensarbetet vara stängt.
- [ ] **Mikrofoner – delningsbild (senare bild-/metadata-QA):** granska om `/assets/hallbyggnad-fasad-parkering.webp`, som alltjämt anges i Open Graph, Twitter och strukturerad data, är relevant och korrekt beskriven för Mikrofoner. Ändra inte bilden eller metadata utan verifierat underlag och eventuellt kundgodkännande. Det var inte del av PR #140.

### Referenser – STÄNGT enligt användarbeslut 2026-10-10

- [x] **`/referenser/` färdig:** hela referenssidan inklusive sökning, filter och utseende godkänd. Ingen ytterligare granskning eller ändring planeras.
- [x] **Referenskortsstandard och andra framtida referensförbättringar avförda ur aktiv TODO:** dessa har *inte* implementerats eller godkänts som en ny gemensam standard. Tidigare idéer och underlag bevaras i dokumentationen men återupptas enbart efter nytt uttryckligt uppdrag.
- [x] **Publicering av klara referenser 2026-10-23:** enligt användarbeslut sätts `draft: false`, `seo.noindex: false` och `customer.publicationApproved: true` för Säffle simhall, Sörby sporthall Kumla, Minnebergsskolan Arvika, Fortnox Arena Växjö, Mullhyttans sporthall, Skolhagenskolan Täby, STC Kil och Stockfallets skola. Sidorna var redan nåbara via `/referenser/` men stängda för indexering; flaggan hade förbisetts.
- [ ] **Ofärdiga referenser – bygg vidare inom kort (användarbeslut 2026-10-23):** Claessons, Friskis&Svettis, Hundfjällscenter, Årjängs simhall, Ekhagsskolan, Galleria Duvan, Götetorpsskolan, Hanza Mechanics, Kroppkärrs IP, Lesjöfors, Loka Brunn, Lundsbergs skola, Nordic Wellness och Sannerudshallen. Hanza ligger kvar publicerad; där saknas bilder och beskrivning av leveransen. Övriga behåller `draft/noindex` tills de är klara.
- [ ] **Lesjöfors – byt namn till Lesjöfors Fjädrar:** användaren godkänner namnbytet om allt relaterat byts (titel, texter, slug/URL, filnamn, interna länkar) och gamla URL:en redirectas till den nya.
- [ ] **Översyn av avsnittet "Det här ingick i AVAB:s leverans" (alla referenssidor, användarbeslut 2026-10-23):** sektionen (`scope` med punktlista och projektfakta-ruta) upprepar mycket som redan står i hero-fakta, story-kapitlen, varianter och teknisk sammanfattning. Se över vad sektionen ska innehålla, eller om den ska kortas, slås ihop eller tas bort, som en gemensam ändring för alla referenser via `ReferencePage`/`ReferenceScope`, inte sida för sida. Exempel: Hanza Mechanics.
- [x] **Gamla brancher inventerade:** `feature/referenser-kompakta-filter` ligger helt bakom `main` (0 unika commits). `feature/header-scroll-auto-hide` hade 14 unika commits och har säkerhetskopierats till `archive/header-scroll-auto-hide-2026-10-10` utan att dess historiska ändringar mergats till `main`. Radering av de gamla remote-brancherna återstår som en separat teknisk städåtgärd eftersom GitHub-anslutningen saknar funktion för branchradering.

### Kamera Prioritet 2 – PAUSAD, väntar på kundens bilder och kommentarer

- [x] **Parkering:** genomgång mot kundens 14-sidiga `Kameraövervakning parkering.docx` utförd. PR #130 (hero), #131 (översikt/ANPR/sökning), #132 (juridik/FAQ), #133 (internlänkar), #134 (coverage) och #135 (SEO-metadata) är mergeade. Kvar: bildgodkännande, referensverifiering (Bilparken/Duvan), juridisk färskhetskontroll och slutlig helsides-QA.
- [x] **Skola:** PR #124 (hero), #125 (innehåll), #126 (juridik/FAQ), #128 (internlänkar) och #129 (source coverage) mergeade. Kundens 21-sidiga Word-underlag har jämförts; originalfilen var uppladdad i arbetschatten och är inte versionerad i repot. Slutligt bildbeslut och juridisk publiceringskontroll återstår.
- [x] **Galleria:** PR #120 (hero), #121 (innehåll) och #122 (internlänkar + coverage) mergeade. Visuella ändringar granskade. Kundbildbesked och verifiering av eventuella kamera-referenspåståenden återstår.
- [x] **Industri:** PR #116–#119 mergeade och text, hero, internlänkar granskade. Bildbesked samt sista juridiska/faktamässiga publiceringskontroll återstår.
- [x] **Gemensamma kamerarelaterade länkar:** PR #127 mergead; rubriken i `CameraIndustryPage` är nu neutrala `Läs vidare`.
- [x] **Kamera – innehållsarbete avslutat för detta arbetspass:** Skola, Parkering, Industri och Galleria är genomarbetade och ligger på `main`. Inga fler kamera-SEO-/metadata-/innehållsgranskningar startas nu. Återuppta endast efter kundens bilder eller kommentarer, eller ett nytt uttryckligt uppdrag.
- [ ] **Samtliga fyra kameraundersidor:** gör slutlig metadata-, internlänks-, bild- och juridisk QA inför publicering när kundens bildbeslut kommit. Håll `draft: true` och `seo.noindex: true` tills uttryckligt publiceringsgodkännande. Kunden granskar via `avab.eu`, inte localhost.
- [ ] **Kamera GDPR:** egen juridisk färskhetskontroll nära eventuell publicering; ingår inte i nästa arbetsblock och startas inte under kameraprojektets paus.
- [ ] **Vid återstart av kamera:** kör guardrails/build, internlänkskontroll och sidvisuell QA efter bildbesked och inför eventuella godkända publiceringsändringar.

## Aktiva uppföljningar

- [x] **Referenssidan – avslutad:** funktion, filtrering, layout och korten på `/referenser/` lämnas oförändrade. Kundbeslutet är dokumenterat ovan.
- [x] **Referenskortsstandard – avförd från aktiv arbetslista:** framtida harmonisering är inte levererad och ska inte tas upp igen utan ny beställning.

## Väntar på kundbeslut

- [ ] **Kamera Parkering – bilder och Bilparken:** separat bildmejl skickat 2026-10-08 och uppföljning i samma tråd skickad 2026-10-10. Invänta besked om Sörby-bilden (hero och upprepning), bild till Exakt sökning samt eventuella publicerbara bilder/situationsplan och referensgodkännande för Bilparken i Karlstad. Sökavsnittets nuvarande alt-text beskriver felaktigt ett videohanteringssystem trots bild på fysisk kamera; rätta efter godkänt bildval.
- [ ] **Kamera Industri – bilder:** separat mejl skickat 2026-10-08. Invänta svar om hero, upprepad fasadbild och bild i sök-/driftsektionen.
- [ ] **Kamera Galleria – bilder:** separat mejl skickat 2026-10-08. Invänta bildbeslut; använd inte Galleria Duvan som kamerareferens utan verifierat underlag.
- [ ] **Kamera Skola – bilder:** separat mejl skickat 2026-10-10. Invänta bildbeslut om upprepad skolbild och bildmaterial från Stjerneskolan; verifiera plats, leveransomfattning och rätt att använda bilder.
- [ ] Inga bildbyten, crop/focal point, motivändringar eller bildtexter som förutsätter nytt projektunderlag utan kundbeslut. Kameraundersidorna ligger kvar på `draft/noindex` under väntetiden.

- [ ] `/author/andreas-avab/` – invänta besked om gammal WordPress-författarsida.
- [ ] `/login/` – invänta besked om kund-/medlemsinloggning fortfarande behövs.
- [ ] `/sample-page/` – invänta besked om gammal WordPress-testsida.
- [ ] När besked kommer: dokumentera beslut och välj korrekt server-/SEO-hantering per URL innan ändring.

## Senare prioriteringar

- [ ] **FAQ-teknikskuld (senare):** PR #111 införde gemensam `FaqSection`, FAQ → CTA och guardrail. Bedöm befintliga undantag när respektive sida ändå behöver ändras; migrera inte en fungerande FAQ enbart för kodstandardens skull.
- [ ] Koppla offertformuläret till ett säkert mailflöde till `info@avab.eu` och bekräftelse till kunden; hantera spam, fel och personuppgiftsminimerad loggning.
- [ ] Genomför separat mobil innehålls- och gränssnittsanpassning på riktiga mobilbredder och tablet.
- [ ] Ta bort dekorativ glow bakom knappar/CTA utan att försvaga `:focus-visible`.
- [ ] Inventera och förbättra metadata och sök-/delningspresentation sidvis; jämför med verkliga sökresultat och Search Console där möjligt.
- [ ] Rätta korten på `/om-oss/#vad-vi-gor/`: relevanta destinationslänkar, helklickbarhet och konsekvent rubrik-/brödtextlinjering.
- [ ] Genomför sitewide metadata-audit för title, description, canonical, robots, H1, Open Graph/Twitter och schema; prioritera viktiga sidor.
- [ ] Följ upp Search Console efter publicering: indexering, queries, impressions, CTR, snippets och crawlstatus.
- [x] **Framtida referensjobb avförda ur aktiv plan enligt användarbeslut:** färdigställandeår, Lesjöfors-bildretusch och Lundsberg-ombyggnad är inte genomförda; de kan återupptas endast efter ny beställning och eventuellt kundunderlag. Ingen crop, fokalpunktsändring eller retusch har utförts.
- [ ] Bild-SEO: granska de 17 tidigare flaggade alt-texterna, spåra saknade original, avgör om `kopcentrum-fasad-kvall-bred.webp` ska användas, kontrollera publika bild-URL:er/hash-länkar, verifiera footerns logotypsökväg och besluta namnkonvention för `images`/`image/partners/`.
- [ ] Skapa unik preview per PR så visuellt godkännande fungerar från mobil/chat.
- [x] **Referensrelaterad AI-dokumentationsharmonisering avförd ur aktiv plan:** inte utförd; bevarad som historiskt förslag och kräver ett nytt uppdrag.
- [ ] Förbättra PDF-underlagets design i budgetkalkylatorn och verifiera AVAB-logotypen i utskrift/PDF.
- [ ] Kundönskemål återstår enligt `docs/projects/kundonskemal-2026-08-20/`: invänta beslut/material för headerkontakt, restaurangmiljöns kanoniska namn, skillnaden mellan ”Hur vi jobbar” och ”Vår leverans”, erbjudandepris och bildmappningar. Följ avtalat bildansvar.
- [ ] Tjänstesidor: gemensam standard dokumenterad i `docs/standards/pages/service.md` genom PR #111. Vid behovsstyrda ändringar: jämför relevanta sidor mot standarden och återanvänd gemensamma komponenter där det ger faktisk nytta. Befintliga sidundantag är inte i sig skäl för ombyggnad. Kamera och referenser återöppnas inte utan nytt uppdrag.
- [ ] Miljösidor: dokumentera gemensam standard och hantera sidvisa bild-, länk- och innehållsbehov för Sporthall/arena, Simhall, Ishall, Kontor/konferens, Hotell, Restaurang/bar/klubb, Butik/retail, Köpcentrum/galleria, Skola, Vård/sjukhus, Industri och Parkering/garage. Referensrelaterade förbättringar ingår inte utan nytt uppdrag.
- [ ] Startsida: kontrollera hero-pillernas globala standard, låt kundteamet justera beskärningen av högtalarbilden, uppdatera erbjudandet först med verifierat pris och lös saknade destinationsrutter med innehållsbeslut före länkändringar.
- [ ] Slutför full sitewide-QA vid behov: interna länkar, navigation/footer/FAQ/grids, assets, bildprestanda, alt-texter, canonical och schema samt build och visuell granskning. Ändra inte `/referenser/` som del av detta utan ny uttrycklig begäran.

## Historik / avslutade checkpoints

- **2026-10-13 – checkpoint efter read-only hero-prototyp:** PR #138, #140, #142 och #144 är mergeade, liksom separata TODO-PR. Codex har provat kortare hero på Talat utrymningslarm i webbläsaren, inklusive reviderad variant B. Resultatet är mätt men inte infört i källkoden eller visuellt slutgodkänt. Nästa steg är användarens bild- och textbeslut, därefter eventuell liten PR. Kamera pausad och referenser stängda.

- **2026-10-13 – PR #144 Talat utrymningslarm:** Mjuk avstavning i H2 på `#prioritet` eliminerade webbläsarverifierad horisontell scroll vid 320 px (Codex: 40 → 0 px). Användaren godkände jämförelsebilden visuellt. Grön CI och squash-merge till `main` (`9dc18a77`). Nästa steg: kortare mobilhero, först som förslag med före/efter-skärmbilder.

- **2026-10-13 – PR #142 Talat utrymningslarm:** Felaktig `imagesrcset` för hero-preload rättad till befintlig herobild. Playwright-kontroll rapporterad av Codex och grön CI. Squash-merge till `main` (`451a3c02`). Horisontell mobilscroll och lång mobilhero är separata återstående förbättringar.

- **2026-10-13 – PR #140 Mikrofoner:** Felaktig bild-preload bytt till den befintliga hero-bilden utan ändrat sidutseende. Grön CI och squash-merge till `main` (`ac387046`). Delningsbildens relevans är en separat framtida kontrollpunkt.

- **2026-10-13 – PR #138 Styrsystem & integration:** Konferensrum-kortets sekundärlänk återfick separat klickyta med befintliga `clickable-card`/`card-primary-link`. Grön CI, manuell visuell/funktionell verifiering och squash-merge till `main` (`a312b34`). Nästa tekniska fynd är Mikrofoners felaktiga hero-preload.

- **2026-10-10 – Referensarbetet avslutat enligt uttryckligt beslut:** användaren godkänner hela `/referenser/` och vill stänga alla öppna referenspunkter. Ingen kodändring görs i den färdiga sidans filter eller kort. Gamla förbättringsidéer om kortstandard, referensår, Lesjöfors, Lundsberg och AI-modeller avförs ur aktiv TODO utan påstående om att de är implementerade. `feature/referenser-kompakta-filter` saknar unika commits; `feature/header-scroll-auto-hide` har unikt historiskt arbete arkiverat under `archive/header-scroll-auto-hide-2026-10-10`. De två gamla remote-brancherna ska raderas med separat Git-kommandon eftersom tillgänglig anslutning inte stödjer radering.

- **2026-10-10 – Kamerablocket pausat enligt projektbeslut:** Alla fyra kamera-branschsidor är genomarbetade på `main`, fortsatt `draft/noindex`, och kunden granskar via `avab.eu`. Invänta separata bildbeslut och eventuella kommentarer. Ingen ny kameragranskning planeras under pausen; nästa fristående TODO-block är referensfiltrets visuella slutkontroll och branchstädning. PR #130–#135 färdiga för Parkering, med dokumentation i PR #136.

- **2026-10-10 – Kamera Parkering innehåll och metadata:** PR #130–#135 mergeade till `main`. H1/hero, kameratäckning, ANPR, Exakt sökning, juridik och 15 FAQ-frågor, två internlänkar, source coverage och SEO-title/description genomförda. Bilder och referensgodkännande väntar; `draft/noindex` kvar. Uppföljningsmejl skickat om Sörby-bilden, rätt sökbild och Bilparken.

- **2026-10-10 – Kameraundersidor och PR-städning:** Skola PR #124–#126 och #128–#129 genomförda; Galleria PR #122 mergead; gemensam rubrikfix PR #127 mergead. Visuellt godkännande lämnat; samtliga fyra kameraundersidor kan nås via direktlänk på produktionsdomänen men är fortsatt draft/noindex. Bildmejl skickade för Parkering, Industri, Galleria och Skola. Nästa aktiva innehållsarbete är Parkering; bildfrågorna väntar på kund.

- **2026-10-08 – PR #114:** båda P2-fynden från PR #106 (hero-detektering och första scroll-deltat) åtgärdade och visuellt godkända. Även Kunskapsbankens hero-etikett och referenssidans saknade `filterLocation` hanterades. PR #114 mergead på `main`.

- **2026-10-06 – PR #112:** Hörslinga använder gemensam `SiteFooter`, verifierat oanvänd footer-CSS borttaget och footer-guardrail tillagd. Mergead på `main`.
- **2026-10-06 – PR #111:** gemensam tjänstesidestandard dokumenterad, `FaqSection` införd och FAQ → CTA etablerad med guardrail. Mergead på `main`; fler sidor återstår att migrera.

- **2026-10-06 – referensfilter, PR #110:** desktop/tablet-regressionen är fixad och mergead på `main`. Filtreringen har Miljö, Teknik och Ort/plats samt sökning, träffantal, rensning och URL-state. Visuell/funktionell slutkontroll godkänd 2026-10-10; eventuell radering av äldre remote-brancher hanteras separat enligt senare checkpoint.
- **2026-10-06 – Kamera Butik / Go Banana:** internlänk till `/referenser/go-banana-bergvik/` finns och tillfällig ”kommer inom kort”-copy är åtgärdad.
- **2026-10-06 – PR #107:** header-scroll-städningen är mergead på `main`; den tillfälliga beteendedokumentationen är borttagen.
- **2026-09-22 – SEO:** sitemap/draft/noindex-hantering verifierad och sitemap-index accepterat i Search Console. SEO-baslinjen dokumenteras i `docs/audits/publicering-indexering-2026-09-21.md`.
- **2026-09-21 – teknisk publiceringsfas:** byggda kamera- och tjänsteundersidor, nya referenser samt teknisk SEO-/internlänkskontroll dokumenterades; P0=0 och P1=0 vid den kontrollen.
- **2026-09-04 – internlänksarbete:** äldre checkpoint ersatt av 2026-09-21-status. Instruktionen att återställa `b8794a7` och gamla listor över väntande sidunderlag gäller inte utan ny verifiering.
- **2026-09-01 – miljönavigation:** kundbeslut ersatte `/miljo/`-landningen med `Miljöer` som navigationskategori och en kompakt `/tjanster/`-översikt. Kontrollera trafik/externa länkar före eventuell serverbaserad 410; ingen startsideredirect utan motsvarande destination.
- **2026-08-29 – Fas 1B/1C och PR #29:** grön sektionsstandard och landningssidornas dåvarande designpilot genomfördes. Senare kundbeslut ändrade `/miljo/`-riktningen; generella komponenter/principer består.
- **2026-08-23 – Fas 1A:** global footer, responsiva dropdown-menyer och helklickbara kort verifierades. Gamla faschecklistor är avslutade och ersatta av prioriteringarna ovan.
- **Projektbeslut att bevara:** `AVAB-EU/avab-eu` är enda source of truth; använd inte `KodAiDeas/avab-eu`. Kundrepots faktiska kod är implementationens källa. Bilder hålls platt i `public/assets/`; AI får göra entydiga kompletta assetbyten, medan crop, focal point och retusch hanteras av kundteamet.
