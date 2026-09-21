# Source coverage – Mullhyttans sporthall

**Route:** `/referenser/mullhyttans-sporthall/`
**Sidtyp:** Reference
**Kundunderlag:** `Referens Mullhyttan.docx` (läst direkt från `docs/source-material/Referens Mullhyttan.docx`, untracked arbetskälla – inte i Git)
**Bildpaket:** 13 färdiga WebP-assets i `public/assets`
**Status:** Byggd som draft/noindex i `seo/referens-mullhyttans-sporthall`.
**Senaste audit:** 2026-09-21 – ny direkt DOCX → implementation-jämförelse. Den tidigare versionen av denna coverage-fil användes INTE som facit; den innehöll minst två felaktiga PASS-markeringar (se "Fel i tidigare coverage-version" nedan).

## Arkitektur

- Structured content: `src/content/references/mullhyttans-sporthall.md`
- Tunn route: `src/pages/referenser/mullhyttans-sporthall/index.astro`
- Renderer: befintlig `src/layouts/ReferencePage.astro`
- Visuell layout (Yamaha-sektionen, portrait+split-fix, sidebar-variant) är visuellt godkänd och orörd i denna audit.
- Ingen sidspecifik CSS, ingen ny komponent, ingen schemaändring i detta steg.

## Publiceringsstatus

- `draft: true` – bekräftat kvarstår
- `seo.noindex: true` – bekräftat kvarstår
- `customer.publicationApproved: null`

## Fel i tidigare coverage-version

Den gamla coverage-filen markerade följande som PASS trots att sakuppgiften saknades i implementationen vid tidpunkten för denna audit:

| Source fact | Tidigare status | Verklig status vid audit-start | Åtgärd |
|---|---|---|---|
| Dante AVIO Bluetooth strömförsörjs via PoE | PASS (felaktigt) | MISSING – fanns inte i story, technicalDetails eller FAQ | Tillagd, se nedan |
| Sennheiser-mikrofonernas användningsområden (idrottsundervisning, speaker, matcher, cuper, skolarrangemang, prisutdelningar, föreningsaktiviteter) | PASS (felaktigt) | MISSING – mikrofonstycket beskrev bara teknik, inte användningsområden | Tillagd, se nedan |

Detta bekräftar att den tidigare filen inte kunde användas som facit och att en ny direktjämförelse mot DOCX var nödvändig.

## Metodik

Varje unik sakuppgift i DOCX klassificerades som:

- **A – Obligatoriskt projektfaktum:** vad som projekterades/installerades/levererades/integrerades/verifierades/dokumenterades. Måste finnas representerat.
- **B – Extern produktfakta:** tillverkarspecifikationer (watt, SPL, I/O, latens, PoE m.m.). Verifieras mot primärkälla; behöver inte alltid publiceras om den inte bär projektberättelsen.
- **C – SEO-fras:** primära/geografiska sökfraser. Behandlas som SEO-target, inte som sakuppgift som ska återges ordagrant.
- **D – OPTIONAL PRODUCT CONTEXT:** generell produktbakgrund i DOCX som inte beskriver den exakta installerade Mullhyttan-konfigurationen. Krävs inte på sidan.

Upprepning i brödtext/FAQ/AEO-GEO/CTA räknas som samma coverage – inte separata krav.

## A. Obligatoriska projektfakta – spårbarhetsmatris

| Source fact | Implementation | Evidence | Status |
|---|---|---|---|
| Ljudprojektering/omprojektering av FFU med 4×50 W + 200 W förstärkare | brief.need, story kap. 1 | "Ett befintligt FFU med fyra 50 W takhögtalare och 200 W förstärkare bedömdes inte ge rätt kapacitet..." | PASS |
| Varför FFU-lösningen bedömdes otillräcklig (spridning, riktverkan, headroom, taluppfattbarhet) | story kap. 1 para 1 | "spridning, riktverkan, headroom och taluppfattbarhet behöver projekteras tillsammans" | PASS |
| Bose ControlSpace EX-1280 som central DSP | facts, scope, story kap. 2, technicalDetails | "Bose ControlSpace EX-1280 är den centrala processorn..." | PASS |
| EX-1280 I/O (12 mic/line in, 8 ut, 64×64 Dante) | story kap. 2, technicalDetails | "EX-1280 har 12 analoga mikrofon-/linjeingångar, åtta analoga utgångar och 64 × 64 Dante." | PASS |
| 4 × Yamaha CBR15 huvudhögtalare | scope, story kap. 1, technicalDetails, FAQ | "Den färdiga högtalarlösningen består av fyra Yamaha CBR15." | PASS |
| Fast/sekundärsäkrat högtalarmontage | story kap. 1 + bild 06 | "Högtalarna är fast monterade högt i byggnaden och sekundärsäkrade." | PASS |
| Yamaha PX8 som slutsteg | scope, story kap. 2, technicalDetails, FAQ | "De fyra Yamaha CBR15 drivs av ett Yamaha PX8." | PASS |
| Bose = systemlogik, Yamaha = effekt (tydlig uppdelning) | story kap. 2 | "I Mullhyttan ligger den övergripande logiken i Bose-processorn medan PX8 levererar effekten till högtalarna." | PASS |
| 2 × Sennheiser EW-D 835-S, trådlösa handhållna mikrofoner | scope, story kap. 2, technicalDetails, FAQ | "Två handhållna Sennheiser EW-D 835-S ger trådlöst tal." | PASS |
| Mikrofonernas användningsområden (idrottsundervisning, speaker, matcher, cuper, skolarrangemang, prisutdelningar, föreningsaktiviteter) | story kap. 2 (tillagd i denna audit) | "De används bland annat vid idrottsundervisning, speaker, matcher, cuper, skolarrangemang, prisutdelningar och föreningsaktiviteter." | PASS (tidigare MISSING) |
| Extern antennlösning för mikrofoner | scope, story kap. 2, technicalDetails | "Systemet installerades med extern antennlösning så att radioförbindelsen projekteras för det område där användaren faktiskt ska kunna röra sig." | PASS |
| Mikrofoner följer respektive hallzon när delad, hela hallen i helsal | story kap. 2 | "I helsalsläge kan mikrofonerna användas över hela hallen och när lokalen delas hör de till respektive hallzon." | PASS |
| 2 × Dante AVIO Bluetooth, en lokal källa per hallhalva | scope, story kap. 2, technicalDetails, FAQ | "Två Dante AVIO Bluetooth-adaptrar ger en lokal Bluetooth-källa på varje sida." | PASS |
| Dante AVIO Bluetooth strömförsörjs via PoE | story kap. 2, technicalDetails (tillagd i denna audit) | "Adaptrarna strömförsörjs via PoE och fungerar som nätverksanslutna ljudenheter."; technicalDetails: "Bluetooth: 2 × Dante AVIO Bluetooth (PoE)..." | PASS (tidigare MISSING) |
| Två hallhalvor kan spela olika musik samtidigt | story kap. 2, FAQ | "Hall A kan därför spela en musikkälla samtidigt som hall B använder en annan." | PASS |
| 2 lokala inkopplingspunkter för extern mixer/produktionskälla via Dante | scope, story kap. 2, technicalDetails, FAQ | "Hallen har dessutom två lokala inkopplingspunkter för extern ljudkälla eller mixer via Dante." | PASS |
| Extern utrustning används vid matcher/cuper/uppvisningar/skolavslutningar | story kap. 2 | "...när en match, cup, skolavslutning, uppvisning, DJ eller annan produktion behöver mer avancerad teknik." | PASS |
| Dante/AES67 över AV-nätverk för signaltransport | facts, scope, story, technicalDetails | "Nätverk: Dante / AES67 över AV-nätverk" (projectFacts); källa: DOCX-projektfaktatabell rad "Nätverk: Dante / AES67 över AV-nätverk" | PASS |
| Dante möjliggör flexibel placering/routing utan långa analoga kablar | story kap. 2 | "Flera digitala ljudkanaler kan transporteras över AV-nätverket i stället för att varje källa behöver en egen lång analog kabel..." | PASS |
| 2 × Bose CC-16, lokal styrning per hallhalva | scope, story kap. 2, technicalDetails | "Varje hallhalva har en egen Bose CC-16." | PASS |
| CC-16 döljer avancerade parametrar för vardagsanvändaren | story kap. 2 | "...behöver därför inte förstå Dante, DSP eller signalmatriser för att höja ljudet eller välja rätt källa." | PASS |
| Ridåväggen delar AV-systemet automatiskt (helsal ↔ två zoner) | facts, brief, story kap. 2, results, FAQ | "När ridåväggen går ner delas ljudsystemet automatiskt." | PASS |
| Varje hallhalva får egen mikrofon, Bluetooth-källa, lokal ljudingång, volymstyrning, högtalarzon, hörslingezon | story kap. 2 answer + para 1 | "Varje hallhalva får egen mikrofon, Bluetooth-källa, lokal ljudingång, volymstyrning, högtalarzon och hörslingezon." | PASS |
| Återgång till helsal när ridån öppnas | story kap. 2, FAQ | "När ridån öppnas återgår anläggningen till helsalsläge." | PASS |
| Brandlarmsintegration – ordinarie ljud mute:as automatiskt | brief, scope, story kap. 2, results, technicalDetails, FAQ | "Ljudanläggningen är också integrerad med byggnadens brandlarm. När brandlarmet aktiveras mute:as ordinarie musik..." | PASS |
| Teknikrack, 12 HE golvstående | story kap. 3, technicalDetails, bild 08 | "De centrala komponenterna är samlade i ett 12 HE golvstående teknikrack..." | PASS |
| Rack avsett för service/förvaltning, inte daglig användare | story kap. 3 | "Racket är till för systemet och framtida service, inte för den dagliga användaren." | PASS |
| AVAB:s kund Björkholms El, Örebro | customer, facts, story kap. 3, FAQ | "AVAB:s kund i projektet var Björkholms El i Örebro." | PASS |
| Rollfördelning elentreprenör vs AV-specialist | story kap. 3 | "elentreprenören ansvarar för den övergripande el- och installationsentreprenaden medan AVAB går in med specialistkompetens..." | PASS |
| Tidig specialistinsats möjliggjorde omprojektering innan byggt | story kap. 3 | "När AVAB bedömde att den ursprungliga FFU-lösningen inte skulle ge ett bra slutresultat kunde högtalarsystemet omprojekteras innan material och montage var låsta." | PASS |
| Programmering/driftsättning/funktionsprov (routing, zonlogik, nivåer, EQ, filter, delay, limiter, mikrofoner, Bluetooth, Dante, högtalare) | story kap. 2–3, bild 11 | "Signalrouting, zonlogik, nivåer, EQ, filter, delay, limiter, mikrofoner, Bluetooth, Dante och högtalarsystem behöver programmeras, lyssnas igenom och funktionsprovas..." | PASS |
| Dokumentation (apparater, nätverk, Dante-routing, systemkonfiguration, hörslingeverifiering, sparade systemfiler) | story kap. 3, technicalDetails, results | "...omfattar leveransen dokumentation av apparater, nätverk, Dante-routing, systemkonfiguration och hörslingans verifiering. Systemfiler och konfigurationer sparas..." | PASS |
| SLS-hörslinga i två zoner under sportgolvet | facts, scope, story kap. 4, technicalDetails, FAQ | "Under sportgolvet ligger en projekterad SLS-hörslinga i två zoner med två Univox SLS-7." | PASS |
| Hörslingan följer samma zonlogik som ljudsystemet | story kap. 4, results, relevance | "Den följer samma logik som högtalarsystemet: i helsal fungerar tillgänglighetslösningen över hela användningsområdet..." | PASS |
| Hörapparatens T-läge får rätt hallhalva | story kap. 4 | "Den som lyssnar via hörapparatens T-läge ska få rätt program från rätt sida när lokalen delas." | PASS |
| Ledarmönster projekterat i Univox Loop Designer | story kap. 4, technicalDetails, bild 02 | "Arbetet började med att ledarmönstret projekterades i Univox Loop Designer." | PASS |
| Projekterad slingyta cirka 43,8 × 26,1 m | story kap. 4, technicalDetails | "Den projekterade ytan är ungefär 43,8 × 26,1 meter..." | PASS |
| Magnetfältet simulerat före installation, fel ska upptäckas i datorn | story kap. 4, bild 01 | "Värdet i simuleringen är att problem kan upptäckas innan någon ledare byggs in under golvet." | PASS |
| 9,5 rullar × 200 m ≈ 1 900 m kopparfolie | story kap. 4, technicalDetails, results, FAQ | "Den färdiga installationen omfattar 9,5 rullar kopparfolie à 200 meter, alltså cirka 1 900 meter slingledare." | PASS |
| Geometri utmätt och fixerad på betonggolv | story kap. 4, bild 03 | "Slingans geometri mättes ut över betonggolvet och fixerades enligt det projekterade mönstret." | PASS |
| Kopparfolie skyddad med tejp innan flytspackel/sportgolv | story kap. 4, bild 04 | "När kopparfolien låg rätt skyddades den med tejp inför resten av byggprocessen." | PASS |
| Golvsamordning: armeringsnät ska inte läggas över slingan | story kap. 4 | "I projektdokumentationen anges exempelvis att armeringsnät inte ska läggas över slingan." | PASS |
| Slingförstärkare får programmatning från central ljudanläggning | story kap. 4 | "Slingförstärkarna får programmatning från den centrala ljudanläggningen, så mikrofoner och andra källor kan routas genom Bose EX-1280 till rätt högtalar- och hörslingezon." | PASS |
| Hörslingan verifieras (mätpunkter, fältstyrka, frekvensgång, mätkarta) | story kap. 4, technicalDetails, FAQ | "Leveransen omfattar verifiering med dokumenterade mätpunkter, fältstyrka, frekvensgång och mätkarta enligt relevant standard." | PASS |
| Testmottagare levererade för löpande funktionskontroll | story kap. 4, technicalDetails, FAQ | "Testmottagare levererades också så att verksamheten kan göra enklare löpande funktionskontroller." | PASS |
| Flera hörslingeskyltar monterade | story kap. 4, bild 13 | "Därför monterades flera hörslingeskyltar så att användaren faktiskt får veta att funktionen finns." | PASS |
| Kommunens bakgrund: likvärdig skola, föreningsliv, rörelseglädje/social mötesplats | story.lead, FAQ (plats) | "Lekebergs kommun beskrev redan i förstudien den nya sporthallen som viktig för en mer likvärdig skola, föreningslivet, rörelseglädje och som social mötesplats." | PASS |
| Samtliga 15 DOCX-FAQ-frågor | `faq.items` (16 poster, inkl. platsfrågan från AEO/GEO) | Se punkt-för-punkt-jämförelse nedan | PASS |
| Internlänkar: Sporthall & arena, Ljudsystem, Hörslinga, Mikrofoner, Styrsystem & integration, Projektering, Fler referensprojekt | `technicalDetails.relatedCompetence` | Alla 7 länkar från DOCX finns representerade | PASS |

### FAQ – punkt-för-punkt

Samtliga 15 huvudfrågor i DOCX FAQ-avsnittet (rad "Vanliga frågor om Mullhyttans sporthall") har en motsvarande post i `faq.items`, plus platsfrågan som i DOCX endast fanns som AEO/GEO-snippet ("Var ligger Mullhyttans sporthall?") men som också lagts till som egen FAQ-post. AEO/GEO-snippets i DOCX (rad 277–282) är alla semantiskt dubbeltäckta av story/FAQ enligt regel D (upprepning krävs inte i separat format).

## B. Extern produktfakta – verifiering mot primärkälla

| Produktfaktum | Källa i DOCX | Primärkälla | Status |
|---|---|---|---|
| CBR15: 15" bas, 90×60° spridning, 126 dB beräknad max-SPL, 500 W program / 1000 W peak | "beräknad maximal ljudtrycksnivå på 126 dB. Yamaha anger 500 W..." | Yamaha CBR-serie specifikationer | PASS – "beräknad" och "Yamaha anger" bevarat, inte förstärkt till uppmätt/garanterat |
| PX8: 2×800 W @ 8Ω, 2×1050 W @ 4Ω, DSP (PEQ, delningsfilter, delay, limiter) | "Yamaha anger 2 × 800 W vid 8 ohm och 2 × 1050 W vid 4 ohm..." | Yamaha PX-serie specifikationer | PASS – "anger" bevarat |
| EX-1280: 12 mic/line in, 8 analoga ut, 64×64 Dante | DOCX projektfaktatabell + kap. 2 | Bose ControlSpace EX-1280 datablad | PASS |
| EW-D 835-S: 134 dB dynamiskt omfång, 1,9 ms systemlatens | "modellen har bland annat 134 dB dynamiskt omfång och 1,9 ms systemlatens" | Sennheiser EW-D produktspecifikation | PASS |
| Dante AVIO Bluetooth: PoE, nätverksansluten ljudenhet | "Adaptern strömförsörjs via PoE och fungerar som en nätverksansluten ljudenhet." | Audinate Dante AVIO Bluetooth datablad | PASS (tillagd i denna audit) |
| SLS-7: utvecklad för stora slinginstallationer, kraven i IEC 60118-4 | "SLS-7 är utvecklad för stora slinginstallationer och för att uppfylla kraven i IEC 60118-4." | Univox SLS-7 produktsida / IEC 60118-4 | PASS |
| SLS-princip: överlappande/segmenterade slingor ger jämnare fältstyrka, mindre överhörning | body: "överlappande slingor"; FAQ: "Flera slingsegment" (båda finns i DOCX) | Univox SLS-produktbeskrivning | PASS – implementationens "segmenterade eller fasade slinglösningar" matchar DOCX FAQ-formuleringen, ingen ny teknisk term utan stöd i källan |

## C. SEO-fraser (SEO TARGET – semantisk, inte ordagrann coverage)

| SEO-fras (DOCX) | Bedömning | Status |
|---|---|---|
| Primära sökfraser: ljudanläggning sporthall, ljudsystem idrottshall, hörslinga sporthall, hörslinga idrottshall, ljud i sporthall, Dante ljudsystem, ljud delbar sporthall | Semantiskt täckta via H1, summary, story, technicalDetails, FAQ – inte krav på ordagrann förekomst | SEO TARGET |
| Geografiska sökfraser: Mullhyttans sporthall, Mullhyttan, Lekebergs kommun, ljudinstallation Örebro län, hörslinga Örebro län | Mullhyttan/Lekebergs kommun förekommer ordagrant; "Örebro län" förekommer inte ordagrant men Örebro (kund) och Lekebergs kommun gör | SEO TARGET |

## D. OPTIONAL PRODUCT CONTEXT (kräver inte publicering)

| Sakuppgift | Motivering | Status |
|---|---|---|
| "Audinates AVIO-familj finns bland annat som en- och tvåkanaliga analoga in- och utgångsadaptrar för att ansluta traditionell ljudutrustning till Dante." | Generell produktfamilj-bakgrund om Dante AVIO-sortimentet, beskriver inte den specifika Mullhyttan-installationen (som redan är täckt via "2 lokala inkopplingspunkter ... via Dante"). Läggs inte till för att undvika mekanisk coverage. | OPTIONAL PRODUCT CONTEXT |

## E. UNSUPPORTED PROJECT CLAIMS (implementation → DOCX)

Genomgången av samtliga projektspecifika påståenden i story, results, relevance, facts, scope, technicalDetails och FAQ hittade inga påståenden om det faktiska Mullhyttan-projektet som saknar stöd i DOCX.

**UNSUPPORTED PROJECT CLAIMS: 0**

## F. MATERIAL SOURCE DEVIATIONS (semantisk styrka)

Kontrollerade specifikt efter mönstret "projekterades för" → "garanterar", "ska verifieras" → "är verifierad", "beräknad" → "uppmätt", samt sökning efter starka/absoluta formuleringar (garanterar, säkerställer, alltid, 100 %, felfri, är verifierad, har verifierats, uppmätt). Inga träffar. Alla identifierade tillverkarsangivelser ("anger", "beräknad") är bevarade i samma styrka som källan; hörslingeverifiering beskrivs som pågående leverans/process ("leveransen omfattar verifiering ... enligt relevant standard"), inte som ett redan uppmätt eller garanterat resultat.

**MATERIAL SOURCE DEVIATIONS: 0**

## Bildcoverage

Alla 13 kundassets används, verifierat på nytt i denna audit (grep-kontroll av samtliga filnummer 01–13 i implementationen). Inga placeholderbilder eller nya AI-genererade bilder förekommer.

| Asset | Roll |
|---|---|
| `10-mullhyttans-sporthall-exterior.webp` | hero + archive |
| `05-mullhyttans-sporthall-yamaha-cbr15-hogtalare.webp` | CBR15 / högtalarval |
| `06-mullhyttans-sporthall-yamaha-cbr15-montage.webp` | fast och sekundärsäkrat montage |
| `07-mullhyttans-sporthall-delbar-hall-ridavagg.webp` | ridåvägg / automatisk zonlogik |
| `11-mullhyttans-sporthall-programmering-bose-controlspace.webp` | programmering och driftsättning |
| `12-mullhyttans-sporthall-bose-cc16-ljudstyrning.webp` | lokal användarstyrning |
| `08-mullhyttans-sporthall-teknikrack-bose-yamaha.webp` | teknikrack / centralutrustning |
| `09-mullhyttans-sporthall-installation-laktare.webp` | installation / entreprenad |
| `02-mullhyttans-sporthall-horslinga-ledarlayout.webp` | hörslingans ledarlayout |
| `01-mullhyttans-sporthall-horslinga-projektering-faltstyrka.webp` | fältstyrkesimulering |
| `03-mullhyttans-sporthall-horslinga-gul-fixering.webp` | inmätning/fixering |
| `04-mullhyttans-sporthall-horslinga-svart-skyddstejp.webp` | skydd av kopparfolie |
| `13-mullhyttans-sporthall-horslinga-skylt.webp` | skyltning och synlig tillgänglighet |

## Primärkällor för extern verifiering

### Bose ControlSpace EX-1280
https://www.boseprofessional.com/products/processors/open-architecture/ex-1280/controlspace-ex-1280-digital-signal-processor

### Yamaha CBR15
https://usa.yamaha.com/products/proaudio/speakers/cbr/specs.html

### Yamaha PX8
https://se.yamaha.com/sv/audio/portable-pa/products/power-amplifiers/px-series/

### Sennheiser EW-D 835-S
https://assets.sennheiser.com/global-downloads/file/22240/EW-D_835-S_SET_Product_specification_v1.7_EN.pdf

### Audinate Dante AVIO Bluetooth
https://assets.audinate.com/wp-content/uploads/2021/02/Dante-AVIO-Bluetooth-Marketing-Datasheet-20210119-en.pdf

Verifierar Bluetooth-anslutning för mobila enheter/datorer till Dante samt PoE-strömförsörjning.

### Univox SLS-7
https://univox.eu/product/sls-7/

### Univox Loop Designer
https://univox.eu/support/consultation-and-support/univox-loop-designer/

### Univox IEC 60118-4
https://univox.eu/support/consultation-and-support/standards-and-legislation/

### Lekebergs kommun
https://meetings.lekeberg.se/committees/kommunstyrelsen/mote-2024-02-13/protocol/protokoll-ks-2024-02-13pdf?downloadMode=open

## Källhantering

- Denna audit läste `docs/source-material/Referens Mullhyttan.docx` direkt (untracked arbetskälla, inte committad till Git) och jämförde varje atomär sakuppgift mot implementationen – den tidigare coverage-filen användes inte som facit.
- Produktdata har kontrollerats mot respektive tillverkares primärkälla.
- Kommunens syfte med sporthallen har kontrollerats mot Lekebergs kommun.
- Inga produkt- eller projektpåståenden har lagts till enbart utifrån filnamn på bilderna.
- Ingen placeholder eller AI-genererad ersättningsbild används.
- DOCX-filen ska inte committas till Git; den ligger kvar som lokal arbetskälla i `docs/source-material/`.

## Slutgates

- **MISSING REQUIRED SOURCE FACTS: 0** (2 st åtgärdade i denna audit – PoE för Dante AVIO Bluetooth, mikrofonernas användningsområden)
- **UNSUPPORTED PROJECT CLAIMS: 0**
- **MATERIAL SOURCE DEVIATIONS: 0**
- **UNVERIFIED CLAIMS: 0** (alla produktfakta spårade till tillverkarens primärkälla, se ovan)
- **MISSING REMOTE ASSETS: 0** (samtliga 13 assets bekräftat använda)
- **MISSING SOURCE INFORMATION: 0** – definieras här som: sakuppgifter av kategori A (obligatoriska projektfakta) som saknas helt på sidan. Kategori B/C/D-uppgifter som medvetet inte publicerats (t.ex. OPTIONAL PRODUCT CONTEXT) räknas inte som missing.

Gates sattes till 0 efter att den faktiska rad-för-rad-jämförelsen ovan genomfördes, inte innan.

## Nästa gate

1. Kör `npm run build` (validate:guardrails blockeras för närvarande av ett känt, orelaterat fel i `hanza-konferens-tocksfors.md`).
2. Kontrollera renderad sida desktop + mobil.
3. Mänskligt publiceringsgodkännande före draft/noindex ändras.
