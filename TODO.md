# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-10-10._

## Aktuellt läge

- `AVAB-EU/avab-eu` är projektets enda source of truth. Produktionsdeploy ska utgå från `main`.
- Teknisk SEO-baslinje är genomförd: sitemap, draft/noindex, internlänkar, guardrails och build har verifierats. Se `docs/audits/publicering-indexering-2026-09-21.md`.
- Referensfiltreringen är mergead på `main`, inklusive desktop/tablet-fixen i PR #110. Sökning, Miljö/Teknik/Ort-plats-filter, antal, rensning och URL-state finns. Eventuell kvarvarande visuell verifiering och branchstädning hanteras separat.
- Kamera Butik är länkad till Go Banana-referensen och den tillfälliga publiceringscopyn är åtgärdad.
- PR #111 har etablerat tjänstesidestandard och delad FAQ-komponent; fler sidors migrering återstår. PR #112 har standardiserat global footer, inklusive Hörslinga och guardrail.
- PR #106:s två P2-reviewfynd är åtgärdade i PR #114 och visuellt godkända. Även Kunskapsbankens hero-etikett och en krasch i referensfiltreringen rättades i samma PR.
- Öppna brancher får bedömas mot aktuell `main` före radering. Äldre `feature/header-scroll-auto-hide` kan bedömas för radering efter mergeade PR #114; `feature/referenser-kompakta-filter` behålls till dess den separata visuella slutkontrollen är klar.
- Kameraundersidorna Skola, Parkering, Industri och Galleria ligger på `main` och går att öppna via direktlänk på `avab.eu` (bekräftat av användaren). De har fortfarande `draft: true` och `seo.noindex: true`, vilket inte är ett slutligt publiceringsgodkännande.

## Nästa arbetsblock

### Kamera Prioritet 2 – nästa aktiva sida: Parkering

- [ ] **Parkering:** genomför read-only innehållsgranskning mot kundens `Kameraövervakning parkering.docx` när underlaget är tillgängligt. Granska behov, H1/hero-text, rättsliga/tekniska påståenden, metadata och internlänkar. Behåll bilderna och `draft/noindex` under arbetet.
- [x] **Skola:** PR #124 (hero), #125 (innehåll), #126 (juridik/FAQ), #128 (internlänkar) och #129 (source coverage) mergeade. Kundens 21-sidiga Word-underlag har jämförts; originalfilen var uppladdad i arbetschatten och är inte versionerad i repot. Slutligt bildbeslut och juridisk publiceringskontroll återstår.
- [x] **Galleria:** PR #120 (hero), #121 (innehåll) och #122 (internlänkar + coverage) mergeade. Visuella ändringar granskade. Kundbildbesked och verifiering av eventuella kamera-referenspåståenden återstår.
- [x] **Industri:** PR #116–#119 mergeade och text, hero, internlänkar granskade. Bildbesked samt sista juridiska/faktamässiga publiceringskontroll återstår.
- [x] **Gemensamma kamerarelaterade länkar:** PR #127 mergead; rubriken i `CameraIndustryPage` är nu neutrala `Läs vidare`.
- [ ] **Samtliga fyra kameraundersidor:** gör slutlig metadata-, internlänks-, bild- och juridisk QA när kundens bildbeslut kommit. Håll `draft: true` och `seo.noindex: true` tills uttryckligt publiceringsgodkännande. Kunden granskar via `avab.eu`, inte localhost.
- [ ] **Kamera GDPR:** hantera `/kameraovervakning/gdpr/` separat med juridisk färskhetskontroll nära eventuell publicering.
- [ ] Kör guardrails/build för nya ändringar och behåll små separata PR:er. Bekräfta deployment och verklig sidvisning efter merge.

## Aktiva uppföljningar

- [ ] **Referensfilter – slutkontroll och branchstädning:** gör visuell desktop/tablet-kontroll på `main` efter mergeade PR #110, och bedöm därefter om `feature/referenser-kompakta-filter` kan raderas. Själva layoutfixen är redan mergead.
- [ ] Slutför gemensam referenskortsstandard stegvis. Grundkomponenter och gemensamma stilar finns, men flera lokala referenskortvarianter återstår på startsida, tjänste- och miljösidor.

## Väntar på kundbeslut

- [ ] **Kamera Parkering – bilder:** separat mejl skickat 2026-10-08. Invänta svar om hero- och övriga bildval samt eventuella bildbeskrivningar.
- [ ] **Kamera Industri – bilder:** separat mejl skickat 2026-10-08. Invänta svar om hero, upprepad fasadbild och bild i sök-/driftsektionen.
- [ ] **Kamera Galleria – bilder:** separat mejl skickat 2026-10-08. Invänta bildbeslut; använd inte Galleria Duvan som kamerareferens utan verifierat underlag.
- [ ] **Kamera Skola – bilder:** separat mejl skickat 2026-10-10. Invänta bildbeslut om upprepad skolbild och bildmaterial från Stjerneskolan; verifiera plats, leveransomfattning och rätt att använda bilder.
- [ ] Inga bildbyten, crop/focal point, motivändringar eller bildtexter som förutsätter nytt projektunderlag utan kundbeslut. Kameraundersidorna ligger kvar på `draft/noindex` under väntetiden.

- [ ] `/author/andreas-avab/` – invänta besked om gammal WordPress-författarsida.
- [ ] `/login/` – invänta besked om kund-/medlemsinloggning fortfarande behövs.
- [ ] `/sample-page/` – invänta besked om gammal WordPress-testsida.
- [ ] När besked kommer: dokumentera beslut och välj korrekt server-/SEO-hantering per URL innan ändring.

## Senare prioriteringar

- [ ] Rulla ut den gemensamma FAQ-komponenten och ordningen FAQ → CTA till återstående relevanta sidor. PR #111 har redan infört tjänstesidestandard, FAQ-komponent och guardrail för nya avvikelser; befintliga undantag och andra sidtyper återstår att bedöma.
- [ ] Koppla offertformuläret till ett säkert mailflöde till `info@avab.eu` och bekräftelse till kunden; hantera spam, fel och personuppgiftsminimerad loggning.
- [ ] Genomför separat mobil innehålls- och gränssnittsanpassning på riktiga mobilbredder och tablet.
- [ ] Ta bort dekorativ glow bakom knappar/CTA utan att försvaga `:focus-visible`.
- [ ] Inventera och förbättra metadata och sök-/delningspresentation sidvis; jämför med verkliga sökresultat och Search Console där möjligt.
- [ ] Rätta korten på `/om-oss/#vad-vi-gor/`: relevanta destinationslänkar, helklickbarhet och konsekvent rubrik-/brödtextlinjering.
- [ ] Genomför sitewide metadata-audit för title, description, canonical, robots, H1, Open Graph/Twitter och schema; prioritera viktiga sidor.
- [ ] Följ upp Search Console efter publicering: indexering, queries, impressions, CTR, snippets och crawlstatus.
- [ ] Fortsätt referensarbete när materialpausen kan hävas: verifiera publiceringsgodkännande, lägg till verifierat färdigställandeår, hantera Lesjöfors-bildretusch och planera Lundsberg-ombyggnad. AI får byta till befintliga assets; crop, focal point och retusch görs av kundteamet.
- [ ] Bild-SEO: granska de 17 tidigare flaggade alt-texterna, spåra saknade original, avgör om `kopcentrum-fasad-kvall-bred.webp` ska användas, kontrollera publika bild-URL:er/hash-länkar, verifiera footerns logotypsökväg och besluta namnkonvention för `images`/`image/partners/`.
- [ ] Skapa unik preview per PR så visuellt godkännande fungerar från mobil/chat.
- [ ] Försona AI-dokumentationen med kundrepots aktuella `compact`/`standard`/`extended`-referensimplementation och befintliga `Reference*`-komponenter.
- [ ] Förbättra PDF-underlagets design i budgetkalkylatorn och verifiera AVAB-logotypen i utskrift/PDF.
- [ ] Kundönskemål återstår enligt `docs/projects/kundonskemal-2026-08-20/`: invänta beslut/material för headerkontakt, restaurangmiljöns kanoniska namn, skillnaden mellan ”Hur vi jobbar” och ”Vår leverans”, erbjudandepris och bildmappningar. Följ avtalat bildansvar.
- [ ] Tjänstesidor: gemensam standard är dokumenterad i `docs/standards/pages/service.md` genom PR #111. Granska och migrera återstående sidor stegvis: Ljus, Bild/skärm, Kamera, Talat utrymningslarm, Mikrofoner, Ljudsystem, Taluppfattbarhet, Styrsystem och Bakgrundsmusik samt eventuella kvarstående Hörslinga-avvikelser.
- [ ] Miljösidor: dokumentera gemensam standard och hantera sidvisa bild-, länk-, innehålls- och referensbehov för Sporthall/arena, Simhall, Ishall, Kontor/konferens, Hotell, Restaurang/bar/klubb, Butik/retail, Köpcentrum/galleria, Skola, Vård/sjukhus, Industri och Parkering/garage.
- [ ] Startsida: kontrollera hero-pillernas globala standard, låt kundteamet justera beskärningen av högtalarbilden, uppdatera erbjudandet först med verifierat pris och lös saknade destinationsrutter med innehållsbeslut före länkändringar.
- [ ] Slutför full sitewide-QA vid behov: interna länkar, navigation/footer/FAQ/grids, assets, bildprestanda, alt-texter, canonical, referensår och schema samt build och visuell granskning.

## Historik / avslutade checkpoints

- **2026-10-10 – Kameraundersidor och PR-städning:** Skola PR #124–#126 och #128–#129 genomförda; Galleria PR #122 mergead; gemensam rubrikfix PR #127 mergead. Visuellt godkännande lämnat; samtliga fyra kameraundersidor kan nås via direktlänk på produktionsdomänen men är fortsatt draft/noindex. Bildmejl skickade för Parkering, Industri, Galleria och Skola. Nästa aktiva innehållsarbete är Parkering; bildfrågorna väntar på kund.

- **2026-10-08 – PR #114:** båda P2-fynden från PR #106 (hero-detektering och första scroll-deltat) åtgärdade och visuellt godkända. Även Kunskapsbankens hero-etikett och referenssidans saknade `filterLocation` hanterades. PR #114 mergead på `main`.

- **2026-10-06 – PR #112:** Hörslinga använder gemensam `SiteFooter`, verifierat oanvänd footer-CSS borttaget och footer-guardrail tillagd. Mergead på `main`.
- **2026-10-06 – PR #111:** gemensam tjänstesidestandard dokumenterad, `FaqSection` införd och FAQ → CTA etablerad med guardrail. Mergead på `main`; fler sidor återstår att migrera.

- **2026-10-06 – referensfilter, PR #110:** desktop/tablet-regressionen är fixad och mergead på `main`. Filtreringen har Miljö, Teknik och Ort/plats samt sökning, träffantal, rensning och URL-state. Visuell slutkontroll på `main` och eventuell branchradering kvarstår.
- **2026-10-06 – Kamera Butik / Go Banana:** internlänk till `/referenser/go-banana-bergvik/` finns och tillfällig ”kommer inom kort”-copy är åtgärdad.
- **2026-10-06 – PR #107:** header-scroll-städningen är mergead på `main`; den tillfälliga beteendedokumentationen är borttagen.
- **2026-09-22 – SEO:** sitemap/draft/noindex-hantering verifierad och sitemap-index accepterat i Search Console. SEO-baslinjen dokumenteras i `docs/audits/publicering-indexering-2026-09-21.md`.
- **2026-09-21 – teknisk publiceringsfas:** byggda kamera- och tjänsteundersidor, nya referenser samt teknisk SEO-/internlänkskontroll dokumenterades; P0=0 och P1=0 vid den kontrollen.
- **2026-09-04 – internlänksarbete:** äldre checkpoint ersatt av 2026-09-21-status. Instruktionen att återställa `b8794a7` och gamla listor över väntande sidunderlag gäller inte utan ny verifiering.
- **2026-09-01 – miljönavigation:** kundbeslut ersatte `/miljo/`-landningen med `Miljöer` som navigationskategori och en kompakt `/tjanster/`-översikt. Kontrollera trafik/externa länkar före eventuell serverbaserad 410; ingen startsideredirect utan motsvarande destination.
- **2026-08-29 – Fas 1B/1C och PR #29:** grön sektionsstandard och landningssidornas dåvarande designpilot genomfördes. Senare kundbeslut ändrade `/miljo/`-riktningen; generella komponenter/principer består.
- **2026-08-23 – Fas 1A:** global footer, responsiva dropdown-menyer och helklickbara kort verifierades. Gamla faschecklistor är avslutade och ersatta av prioriteringarna ovan.
- **Projektbeslut att bevara:** `AVAB-EU/avab-eu` är enda source of truth; använd inte `KodAiDeas/avab-eu`. Kundrepots faktiska kod är implementationens källa. Bilder hålls platt i `public/assets/`; AI får göra entydiga kompletta assetbyten, medan crop, focal point och retusch hanteras av kundteamet.
