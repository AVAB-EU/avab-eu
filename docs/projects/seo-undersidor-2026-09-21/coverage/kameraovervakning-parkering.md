# Source coverage – Kameraövervakning Parkering

**Route:** `/kameraovervakning/parkering/`  
**Sidtyp:** Camera industry page  
**Jämförelsesida:** `/kameraovervakning/butik/`  
**Status:** Draft/noindex, tillgänglig för kundgranskning via direktlänk men ännu inte slutligt publiceringsgodkänd  
**Uppdaterad:** 2026-10-10

## Kundunderlag och källstatus

Källor som har använts eller jämförts:

- Kundens **`Kameraövervakning parkering.docx`**, 14 sidor, uppladdad i arbetschatten och genomgången 2026-10-10. Det uppladdade dokumentet är källan till den redaktionella jämförelsen nedan.
- `src/content/camera-industry-pages/parkering.md`, senaste `main` efter PR #132.
- `src/layouts/CameraIndustryPage.astro` och sidan `/kameraovervakning/butik/` som befintlig kameramodell.
- `/miljo/parkering-garage/` och `/tjanster/exakt-sokning-ai-analys/` som befintliga relaterade sidor.
- IMY:s vägledning om parkeringsplatser och det juridiska granskningsarbetet i PR #132.

**KÄLLGRANSKNING:** Kundens uppladdade DOCX har lästs och jämförts med den aktuella kodtexten. En eventuell kopia i `C:\webbprojekt\avab-eu\docs\source-material\` har **inte** kontrollerats via GitHub eller i användarens lokala arbetskopia. Originaldokumentet är inte versionerat i GitHub-repot. Behandla dessa som två skilda kontroller, inte som ett bevis för att lokala filer har verifierats.

## Implementerat jämfört med Word-dokumentet

| Område i Word-underlaget | Täckning i aktuell kod |
| --- | --- |
| H1, hero och parkeringsmiljöns typiska bildproblem (s. 1–2) | **PR #130 mergead:** kort H1, separat underrubrik och förbättrad ingress. Etablerad URL och befintlig hero-bild har behållits. |
| Behov, infarter, utfarter och gångstråk (s. 2–3) | Befintliga avsnitt `varfor` och `zoner-oversikt`; incidenter, flöden och olika kameravyer behandlas. |
| Översikt kontra detalj och skymda ytor (s. 2–3, 5–6) | **PR #131 mergead:** separat avsnitt om riktade kameror, monteringshöjd, hinder och döda vinklar. |
| ANPR/LPR och tillförlitlig registreringsläsning (s. 3–4) | **PR #131 mergead:** separat ANPR-avsnitt. Funktioner och resultat villkoras av kamera, körfält, plattform och licenser. |
| Exakt sökning, fordon och händelseförlopp (s. 4–5) | **PR #131 mergead:** bättre avsnitt om tidslinjer, fordonsfilter och kameravyer. Ingen automatisk identitetsbestämning eller spårning mellan kameror lovas. |
| Parkeringsgarage, mörker, motljus och belysning (s. 7) | Befintligt `ljus-och-vader` behandlar ljusskillnader och montage. Kundunderlagets tekniska resonemang om WDR och samordnad belysning är avsiktligt förenklade. |
| Rättslig grund, skillnad mellan markparkering och parkeringshus, personuppgifter och lagring (s. 8–10) | **PR #132 mergead:** `legalOrientation` med IMY-länk. Tre dygn presenteras som tumregel, inte som ovillkorlig lagringsgräns. |
| Frågor om placering, ANPR, kameratillstånd och integritet (s. 11–13) | **PR #132 mergead:** FAQ utökad från 6 till 15 frågor. |
| Relaterade fördjupningar och miljösida (s. 3, 10, 13) | **PR #133 öppen:** två `relatedLinks` till Parkeringsmiljön och Exakt sökning. Visuell granskning och merge återstår. |

## Medvetna avgränsningar och ej införda påståenden

- Kundens underlag föreslår `/tjanster/kameraovervakning/parkering/`, men den etablerade URL:en är `/kameraovervakning/parkering/`. URL ska inte ändras utan separat beslut och redirectanalys.
- Kundens SEO-förslag fokuserar tydligare på ANPR i title och meta description. Nuvarande metadata har **inte** ändrats i PR #130–#133. Metadata och sociala delningsfält behöver slutgranskas separat, men inga särskilda funktioner ska antydas som standardleverans utan verifiering.
- Word-dokumentet utvecklar 180°-kameror, PTZ, WDR, samordning med belysning, förprojektering av synfält samt återanvändning av befintliga kameror. Allt har inte kopierats över. Överväg komplettering bara om det ger tydligt mervärde utan att göra sidan onödigt lång.
- Den mer omfattande delen om bomstyrning, intercom och fordonsflöden hör hemma på `/miljo/parkering-garage/`. Tekniska ANPR- och analysfunktioner är inte generellt verifierade för alla system.
- Underlaget nämner **Bilparken i Karlstad** som genomfört kameraövervakningsprojekt med projektering före montage. Någon verifierad projektspecifik kameraleverans, referenstext, bildkoppling eller publiceringsrätt finns ännu inte dokumenterad i denna granskning. Skriv inte in ett färdigt case utan separat kundverifiering.
- Underlaget föreslår ett andra case för **Galleria Duvans parkering/garage** först när installationen är färdig. Ingen sådan referens eller leveransstatus får anges som färdig nu.
- Uppgiften från Brå om anmälda bilbrott under 2025 och annan tidsbunden statistik i Word-underlaget har inte förts in på sidan. Den behöver kontrolleras mot ursprungskälla och aktualitet om den senare används.
- Kundens förslag till CTA, situationsplan och skicka-ritning-flöde är inte infört som separat uppladdningsfunktion. Befintlig kontakt-CTA är kvar; skapa ingen ny formfunktion utan beslut om vart filer ska skickas och hur personuppgifter hanteras.

## Bildstatus – väntar på kunden

Kunden fick ett separat bildgranskningsmejl för Parkering **2026-10-08**. Befintliga bildval lämnas orörda i detta arbetsblock:

- `/assets/hallbyggnad-fasad-parkering.webp` (1200 × 900) används både i hero och principsektionen. Kunden behöver ta ställning till motivvalet och upprepningen.
- `/assets/Kameraovervakning-dahua-hero.webp` (2032 × 770) används i sökavsnittet. Nuvarande alt-text beskriver ett videohanteringssystem; kontrollera att den verkligen motsvarar bildens faktiska motiv innan eventuellt alt-byte.
- Eventuella situationsplaner och fotografier från Bilparken får bara användas efter kontroll av projektkoppling, bildrätt och kundgodkännande.

**Gör inga bildbyten, beskärningar, ändringar av fokalpunkt eller projektspecifika alt-texter i väntan på kundens besked.**

## Juridik, verifiering och publiceringsgate

- PR #132 innehåller allmän juridisk orientering och länkar till IMY. Den personuppgiftsansvariga verksamheten, inte AVAB, gör den faktiska rättsliga bedömningen.
- Villkoren för undantaget inne i parkeringshus får inte överföras generellt till öppna markparkeringar. GDPR-ansvaret kvarstår.
- **JURIDISK SLUTKONTROLL: PENDING.** Kontrollera IMY-vägledningens aktualitet och formuleringarna om dokumentationsundantag, registreringsnummer, informationsplikt och lagring nära slutligt publiceringsbeslut.
- **BILDVAL: PENDING** kundbesked och kontroll av motiv/alt-text.
- **BILPARKEN / DUVAN: PENDING** verifierad leverans- och referensinformation.
- **INTERNLÄNKAR: PENDING** granskning och merge av PR #133.
- **METADATA OCH HELSIDES-QA: PENDING** efter godkända PR:er, inklusive internlänkskontroll, build och desktop/mobil.
- **DOCX-KÄLLA:** jämförd via uppladdat Word-dokument; originalet inte tillgängligt i repot.

`draft: true` och `seo.noindex: true` ska behållas. Kunden kan granska `https://avab.eu/kameraovervakning/parkering/` via direktlänk när ändringarna har deployats, men detta är **inte** slutligt indexerings- eller publiceringsgodkännande. Ändra inte flaggorna utan uttryckligt beslut.
