# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-10-06._

## Aktuellt läge

- `AVAB-EU/avab-eu` är projektets enda source of truth. Produktionsdeploy ska utgå från `main`.
- Teknisk SEO-baslinje är genomförd: sitemap, draft/noindex, internlänkar, guardrails och build har verifierats. Se `docs/audits/publicering-indexering-2026-09-21.md`.
- Referensfiltreringen är genomförd i sak: sökning, Miljö/Teknik/Ort-plats-filter, antal, rensning och URL-state finns. Desktop/tablet-regressionen efter merge behöver dock fixas och verifieras innan filterbranchen kan städas bort.
- Kamera Butik är länkad till Go Banana-referensen och den tillfälliga publiceringscopyn är åtgärdad.
- PR #106 är mergead, men dess två öppna P2-reviewfynd finns kvar under Aktiva uppföljningar.
- Öppna brancher får bedömas mot aktuell `main` före radering. `feature/header-scroll-auto-hide` och `feature/referenser-kompakta-filter` ska behållas tills respektive uppföljning är verifierad.

## Nästa arbetsblock

### Kamera Prioritet 2 – publiceringsgranskning

- [ ] Granska `/kameraovervakning/skola/`, `/kameraovervakning/parkering/`, `/kameraovervakning/industri/` och `/kameraovervakning/galleria/` mot content, metadata, bilder, internlänkar, schema och visuell struktur.
- [ ] Klassificera varje sida: redo att publicera, behöver åtgärd eller behöver kundbeslut. Ändra inte `draft`/`noindex` före granskningen och blockerarlösning.
- [ ] Hantera `/kameraovervakning/gdpr/` separat med juridisk färskhetskontroll nära eventuell publicering.
- [ ] Kör guardrails/build för eventuella ändringar och håll dem i små, separata PR:er.

## Aktiva uppföljningar

- [ ] **Referensfilter – desktop/tablet-regression:** återställ fullbreddsfilterlayouten (tre filterkort, fullbredds öppnade alternativ och tre checkboxkolumner på desktop/tablet). Verifiera, committa, pusha och mergea fixen; verifiera sedan på `main` innan `feature/referenser-kompakta-filter` raderas.
- [ ] **PR #106 P2 – hero-detektering:** lägg till hero-detektering för `/kunskap/` (`.knowledge-hero`) och `/budgetkalkylator-av-teknik/` (`.budget-hero`), så headerns scrollbeteende får rätt sidkontext.
- [ ] **PR #106 P2 – första scroll-deltat:** räkna in första scroll-deltat i tröskeln i stället för att börja mätningen från det redan uppdaterade `currentY`-värdet. Granska och verifiera fixen innan headerbranchen städas bort.
- [ ] Slutför gemensam referenskortsstandard stegvis. Grundkomponenter och gemensamma stilar finns, men flera lokala referenskortvarianter återstår på startsida, tjänste- och miljösidor.

## Väntar på kundbeslut

- [ ] `/author/andreas-avab/` – invänta besked om gammal WordPress-författarsida.
- [ ] `/login/` – invänta besked om kund-/medlemsinloggning fortfarande behövs.
- [ ] `/sample-page/` – invänta besked om gammal WordPress-testsida.
- [ ] När besked kommer: dokumentera beslut och välj korrekt server-/SEO-hantering per URL innan ändring.

## Senare prioriteringar

- [ ] Standardisera FAQ på hela sajten: två kolumner och direkt före avslutande CTA, med gemensam implementation och lämplig guardrail.
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
- [ ] Tjänstesidor: dokumentera gemensam standard; prioritera Ljus, Bild/skärm, Kamera, Talat utrymningslarm, Mikrofoner, Ljudsystem, Hörslinga, Taluppfattbarhet, Styrsystem och Bakgrundsmusik enligt sidvisa behov i projektunderlaget.
- [ ] Miljösidor: dokumentera gemensam standard och hantera sidvisa bild-, länk-, innehålls- och referensbehov för Sporthall/arena, Simhall, Ishall, Kontor/konferens, Hotell, Restaurang/bar/klubb, Butik/retail, Köpcentrum/galleria, Skola, Vård/sjukhus, Industri och Parkering/garage.
- [ ] Startsida: kontrollera hero-pillernas globala standard, låt kundteamet justera beskärningen av högtalarbilden, uppdatera erbjudandet först med verifierat pris och lös saknade destinationsrutter med innehållsbeslut före länkändringar.
- [ ] Slutför full sitewide-QA vid behov: interna länkar, navigation/footer/FAQ/grids, assets, bildprestanda, alt-texter, canonical, referensår och schema samt build och visuell granskning.

## Historik / avslutade checkpoints

- **2026-10-06 – referensfilter:** filtreringen är färdig i sak och ska betraktas som klar när den verifierade desktop/tablet-regressionen är mergead och verifierad på `main`. Filtreringen har Miljö, Teknik och Ort/plats samt sökning, träffantal, rensning och URL-state.
- **2026-10-06 – Kamera Butik / Go Banana:** internlänk till `/referenser/go-banana-bergvik/` finns och tillfällig ”kommer inom kort”-copy är åtgärdad.
- **2026-10-06 – PR #107:** header-scroll-städningen är mergead på `main`; den tillfälliga beteendedokumentationen är borttagen.
- **2026-09-22 – SEO:** sitemap/draft/noindex-hantering verifierad och sitemap-index accepterat i Search Console. SEO-baslinjen dokumenteras i `docs/audits/publicering-indexering-2026-09-21.md`.
- **2026-09-21 – teknisk publiceringsfas:** byggda kamera- och tjänsteundersidor, nya referenser samt teknisk SEO-/internlänkskontroll dokumenterades; P0=0 och P1=0 vid den kontrollen.
- **2026-09-04 – internlänksarbete:** äldre checkpoint ersatt av 2026-09-21-status. Instruktionen att återställa `b8794a7` och gamla listor över väntande sidunderlag gäller inte utan ny verifiering.
- **2026-09-01 – miljönavigation:** kundbeslut ersatte `/miljo/`-landningen med `Miljöer` som navigationskategori och en kompakt `/tjanster/`-översikt. Kontrollera trafik/externa länkar före eventuell serverbaserad 410; ingen startsideredirect utan motsvarande destination.
- **2026-08-29 – Fas 1B/1C och PR #29:** grön sektionsstandard och landningssidornas dåvarande designpilot genomfördes. Senare kundbeslut ändrade `/miljo/`-riktningen; generella komponenter/principer består.
- **2026-08-23 – Fas 1A:** global footer, responsiva dropdown-menyer och helklickbara kort verifierades. Gamla faschecklistor är avslutade och ersatta av prioriteringarna ovan.
- **Projektbeslut att bevara:** `AVAB-EU/avab-eu` är enda source of truth; använd inte `KodAiDeas/avab-eu`. Kundrepots faktiska kod är implementationens källa. Bilder hålls platt i `public/assets/`; AI får göra entydiga kompletta assetbyten, medan crop, focal point och retusch hanteras av kundteamet.
