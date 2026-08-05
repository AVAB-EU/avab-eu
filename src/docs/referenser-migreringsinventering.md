# Inventering inför migrering av referenser

Inventerad 2026-08-05 mot arbetskopian på `feature/referenser-markdown`.
Inventeringen omfattar de 14 faktiska routes som har en `index.astro` direkt
under `src/pages/referenser/`. Arkivsidan `/referenser/` räknas inte som en
referenssida.

## Övergångsarkitektur

Hanza är i fas 1 flyttad till `src/content/references/` och dess route och
arkivkort använder samma entry. De 13 omigrerade posterna ligger tillfälligt
kvar i `src/data/referenser.ts`.

Vid varje kommande migrering ska motsvarande objekt tas bort ur
`referenser.ts` först när arkivkortet läser samma content entry. När den sista
posten är migrerad kan övergångsadaptern på arkivsidan tas bort. Taxonomierna
för miljö och teknik kan då antingen flyttas till en separat konfigurationsfil
eller ersättas med typade taxonomier; `referenser.ts` ska därefter tas bort.

CTA är uttryckligen utanför denna migrering. Varje äldre sida ska behålla sin
befintliga CTA-variant eller avsaknad av CTA tills det separata CTA-arbetets tre
faser startar efter avslutad referensmigrering.

## Bildinventering

`Ja` i dimensionskolumnen betyder att filens faktiska metadata har lästs med
Sharp. `Nej` betyder att filen saknas och därför inte kan verifieras. Alla
listade bilder har alt-text i sidans markup, metadata eller arkivdata; texten
ska ändå granskas redaktionellt vid respektive migrering.

| Referens | Route | Bildväg | Finns lokalt | Användning | Dimensioner verifierade | Alt-text | Åtgärd |
|---|---|---|---:|---|---:|---|---|
| Årjängs simhall | `/referenser/arjangs-simhall/` | `/assets/arjang-simhall-25m-bassang-nybyggnation.jpg` | Nej | Hero/metadata | Nej | Angiven | Lokalisera original; blockera migrering |
| Årjängs simhall | samma | `/assets/arjang-simhall-bassang-hogtalare-reception.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Årjängs simhall | samma | `/assets/arjang-simhall-grupptraning-hogtalare-headset.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Årjängs simhall | samma | `/assets/arjang-simhall-gym-aktiva-hogtalare.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Årjängs simhall | samma | `/assets/arjang-simhall-hogtalare-25m-lift.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Årjängs simhall | samma | `/assets/arjang-simhall-multipool-projektor.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Årjängs simhall | samma | `/assets/arjang-simhall-reception-lounge-diskslinga.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Årjängs simhall | samma | `/assets/arjang-simhall-teknikrum-bose-processor.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Claessons | `/referenser/claessons-restaurang-konferens/` | `/assets/claessons-albatrossen-stor-sal.webp` | Nej | Hero/metadata | Nej | Angiven | Lokalisera original; blockera migrering |
| Ekhagsskolan | `/referenser/ekhagsskolan-dals-langed/` | `/assets/ekhagsskolan-idrottshall-hogtalare-oversikt.webp` | Nej | Hero/metadata | Nej | Angiven | Lokalisera original; blockera migrering |
| Ekhagsskolan | samma | `/assets/ishall-hogtalare-ovan-is.webp` | Ja | Relaterad referens | Ja, 1200×900 | Angiven | Behåll efter relevanskontroll |
| Ekhagsskolan | samma | `/assets/modern-trafasad-innergard.webp` | Ja | Relaterad referens | Ja, 1200×834 | Angiven | Behåll efter relevanskontroll |
| Ekhagsskolan | samma | `/assets/sporthall-interior-linjer.webp` | Ja | Relaterad referens | Ja, 1200×900 | Angiven | Behåll efter relevanskontroll |
| Friskis&Svettis | `/referenser/friskis-solstadens-sportcenter/` | `/assets/friskis-solstadens-sportcenter-av-teknik.webp` | Nej | Hero/metadata | Nej | Angiven | Lokalisera original; blockera migrering |
| Friskis&Svettis | samma | `/assets/friskis-solstadens-sportcenter-crestronpanel.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Friskis&Svettis | samma | `/assets/friskis-solstadens-sportcenter-projektor-entre.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Friskis&Svettis | samma | `/assets/friskis-solstadens-sportcenter-rack-teknikrum.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Hanza Mechanics | `/referenser/hanza-konferens-tocksfors/` | `/assets/konferensrum-stor-skarm-bord.webp` | Ja | Hero och galleri | Ja, 1200×900 | Angiven och migrerad | Behåll |
| Hanza Mechanics | samma | `/assets/konferensrum-vaggskarm-ljudlimpa.webp` | Ja | Galleri | Ja, 1200×900 | Angiven och migrerad | Behåll |
| Hanza Mechanics | samma | `/assets/modern-trafasad-innergard.webp` | Ja | Relaterad referens | Ja, 1200×834 | Angiven och migrerad | Behåll |
| Hundfjällshotellet | `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | `/assets/fjallanlaggning-vinterkvall.webp` | Ja | Hero/metadata | Ja, 1422×800 | Angiven | Behåll |
| Hundfjällshotellet | samma | `/assets/hundfjallscenter-ease-ljudberakning-spa.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Hundfjällshotellet | samma | `/assets/skistar-lodge-hundfjallet-huvudentre-pendel-hogtalare.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Hundfjällshotellet | samma | `/assets/skistar-lodge-hundfjallet-restaurang-ljudanlaggning.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Kroppkärrs IP | `/referenser/kroppkarrs-ip-fotboll/` | `/assets/kroppkarrs-ip-hero-hogtalare.jpg` | Nej | Hero/metadata | Nej | Angiven | Lokalisera original; blockera migrering |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-hogtalare-fore-montage.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-lift-montage.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-mast-lift-efter-installation.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-oversikt-tva-planer.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-vy-fran-mast.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Lesjöfors AB | `/referenser/lesjofors-ab/` | `/assets/lesjofors-ab-fasad-lesjofors.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Lesjöfors AB | samma | `/assets/lesjofors-audio-technica-takmikrofon.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Lesjöfors AB | samma | `/assets/lesjofors-konferensrum-fardigt-langbord.webp` | Nej | Hero och galleri | Nej | Angiven | Lokalisera original; blockera migrering |
| Lundsbergs skola | `/referenser/lundsbergs-skola-gym/` | `/assets/lundsbergs-skola-gym-oversikt.webp` | Nej | Hero/metadata | Nej | Angiven | Lokalisera original; blockera migrering |
| Lundsbergs skola | samma | `/assets/takhogtalare-rad-takinstallation.webp` | Ja | Relaterad referens | Ja, 1200×900 | Angiven | Behåll efter relevanskontroll |
| Lundsbergs skola | samma | `/assets/nordic-wellness-marieberg-ledstrak-slutresultat.jpg` | Nej | Relaterad referens | Nej | Angiven | Lokalisera original |
| Lundsbergs skola | samma | `/assets/ekhagsskolan-idrottshall-hogtalare-oversikt.webp` | Nej | Relaterad referens | Nej | Angiven | Lokalisera original |
| Minnebergsskolan | `/referenser/minnebergsskolan-arvika/` | `/assets/modern-trafasad-innergard.webp` | Ja | Hero/metadata | Ja, 1200×834 | Angiven | Behåll |
| Minnebergsskolan | samma | `/assets/minnebergsskolan-arvika-innergard.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Minnebergsskolan | samma | `/assets/minnebergsskolan-gradang-horslinga-installation.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Minnebergsskolan | samma | `/assets/minnebergsskolan-klassrum-epson-touchprojektor.webp` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Nordic Wellness | `/referenser/nordic-wellness-orebro-marieberg/` | `/assets/nordic-wellness-marieberg-ledstrak-slutresultat.jpg` | Nej | Hero och galleri | Nej | Angiven | Lokalisera original; blockera migrering |
| Säffle simhall | `/referenser/saffle-simhall/` | `/assets/ishall-hogtalare-ovan-is.webp` | Ja | Relaterad referens | Ja, 1200×900 | Angiven | Behåll efter relevanskontroll |
| Säffle simhall | samma | `/assets/modern-trafasad-innergard.webp` | Ja | Relaterad referens | Ja, 1200×834 | Angiven | Behåll efter relevanskontroll |
| Säffle simhall | samma | `/assets/sporthall-interior-linjer.webp` | Ja | Relaterad referens | Ja, 1200×900 | Angiven | Behåll efter relevanskontroll |
| Säffle simhall | samma | `https://avab.eu/wp-content/uploads/2023/02/1920x1080-Saffle-simhall-50m-hogt-palm-vatten-parkering-2-1536x864.webp` | Fjärrkälla | Hero | Nej, 1536×864 är deklarerat | Angiven | HTTP 200; lokalisera original före migration |
| Säffle simhall | samma | `https://avab.eu/wp-content/uploads/2023/02/1920x1080-Saffle-simhall-50m-hogt-palm-vatten-parkering-2-1024x576.webp` | Fjärrkälla | Galleri | Nej, 1024×576 är deklarerat | Angiven | HTTP 200; lokalisera original före migration |
| Säffle simhall | samma | `https://avab.eu/wp-content/uploads/2023/02/1920x1080-Saffle-simhall-reception-1024x576.webp` | Fjärrkälla | Galleri | Nej, 1024×576 är deklarerat | Angiven | HTTP 200; lokalisera original före migration |
| Säffle simhall | samma | `https://avab.eu/wp-content/uploads/2023/02/1920x1080-Saffle-simhall-relax-1024x576.webp` | Fjärrkälla | Galleri | Nej, 1024×576 är deklarerat | Angiven | HTTP 200; lokalisera original före migration |
| Säffle simhall | samma | `https://avab.eu/wp-content/uploads/2023/02/1920x1080-Saffle-simhall-barnpool-1024x576.webp` | Fjärrkälla | Galleri | Nej, 1024×576 är deklarerat | Angiven | HTTP 200; lokalisera original före migration |
| Sannerudshallen | `/referenser/sannerudshallen-kil/` | `/assets/sannerudshallen-electrovoice-hogtalare-narbild.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Sannerudshallen | samma | `/assets/sannerudshallen-fardig-ljudinstallation.jpg` | Nej | Hero och galleri | Nej | Angiven | Lokalisera original; blockera migrering |
| Sannerudshallen | samma | `/assets/sannerudshallen-fore-stora-hogtalare.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Sannerudshallen | samma | `/assets/sannerudshallen-kils-ishall-exterior.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Sannerudshallen | samma | `/assets/sannerudshallen-lift-installation-is.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Sannerudshallen | samma | `/assets/sannerudshallen-nya-hogtalare-laktare-is.jpg` | Nej | Galleri | Nej | Angiven | Lokalisera original |
| Sörby idrottshall | `/referenser/sorby-sporthall-kumla/` | `/assets/sporthall-interior-linjer.webp` | Ja | Hero/metadata | Ja, 1200×900 | Angiven | Behåll |
| Sörby idrottshall | samma | `/assets/ishall-hogtalare-ovan-is.webp` | Ja | Relaterad referens | Ja, 1200×900 | Angiven | Behåll efter relevanskontroll |
| Sörby idrottshall | samma | `/assets/modern-trafasad-innergard.webp` | Ja | Relaterad referens | Ja, 1200×834 | Angiven | Behåll efter relevanskontroll |
| Sörby idrottshall | samma | `/assets/tegelbyggnad-glasfasad-entre.webp` | Ja | Relaterad referens | Ja, 1391×800 | Angiven | Behåll efter relevanskontroll |

Sammanfattning: 60 sid–bild-relationer och 50 unika bildkällor. Av dessa är
45 lokala `/assets/`-vägar och fem fjärrbilder på `avab.eu/wp-content`.
37 unika lokala filer saknas. Samtliga fem fjärrbilder svarade HTTP 200 vid
HEAD-kontroll 2026-08-05, men deras faktiska pixelmått har inte lästs lokalt.

### Klassificering av saknade lokala bildvägar

Sökningen omfattade exakt sökväg, skiftlägesokänsligt filnamn i `public/` och
`src/`, samtliga ZIP-arkiv i projektroten samt filnamn i alla lokala
git-referenser. Ingen av de 37 filerna hade en verifierbar matchning. En
semantiskt liknande bild räknas inte som matchning utan redaktionellt beslut.

| Referens | Route | Angiven sökväg | Faktisk status | Möjlig matchning | Rekommenderad åtgärd | Publiceringsblockerande |
|---|---|---|---|---|---|---|
| Årjängs simhall | `/referenser/arjangs-simhall/` | `/assets/arjang-simhall-25m-bassang-nybyggnation.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Årjängs simhall | samma | `/assets/arjang-simhall-bassang-hogtalare-reception.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Årjängs simhall | samma | `/assets/arjang-simhall-grupptraning-hogtalare-headset.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Årjängs simhall | samma | `/assets/arjang-simhall-gym-aktiva-hogtalare.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Årjängs simhall | samma | `/assets/arjang-simhall-hogtalare-25m-lift.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Årjängs simhall | samma | `/assets/arjang-simhall-multipool-projektor.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Årjängs simhall | samma | `/assets/arjang-simhall-reception-lounge-diskslinga.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Årjängs simhall | samma | `/assets/arjang-simhall-teknikrum-bose-processor.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Claessons | `/referenser/claessons-restaurang-konferens/` | `/assets/claessons-albatrossen-stor-sal.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Ekhagsskolan | `/referenser/ekhagsskolan-dals-langed/` | `/assets/ekhagsskolan-idrottshall-hogtalare-oversikt.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Friskis&Svettis | `/referenser/friskis-solstadens-sportcenter/` | `/assets/friskis-solstadens-sportcenter-av-teknik.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Friskis&Svettis | samma | `/assets/friskis-solstadens-sportcenter-crestronpanel.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Friskis&Svettis | samma | `/assets/friskis-solstadens-sportcenter-projektor-entre.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Friskis&Svettis | samma | `/assets/friskis-solstadens-sportcenter-rack-teknikrum.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Hundfjällshotellet | `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | `/assets/hundfjallscenter-ease-ljudberakning-spa.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller använd enbildsläge | Nej vid enbildsläge |
| Hundfjällshotellet | samma | `/assets/skistar-lodge-hundfjallet-huvudentre-pendel-hogtalare.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller använd enbildsläge | Nej vid enbildsläge |
| Hundfjällshotellet | samma | `/assets/skistar-lodge-hundfjallet-restaurang-ljudanlaggning.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller använd enbildsläge | Nej vid enbildsläge |
| Kroppkärrs IP | `/referenser/kroppkarrs-ip-fotboll/` | `/assets/kroppkarrs-ip-hero-hogtalare.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-hogtalare-fore-montage.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-lift-montage.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-mast-lift-efter-installation.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-oversikt-tva-planer.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Kroppkärrs IP | samma | `/assets/kroppkarrs-ip-vy-fran-mast.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Lesjöfors AB | `/referenser/lesjofors-ab/` | `/assets/lesjofors-konferensrum-fardigt-langbord.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Lesjöfors AB | samma | `/assets/lesjofors-ab-fasad-lesjofors.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Lesjöfors AB | samma | `/assets/lesjofors-audio-technica-takmikrofon.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Lundsbergs skola | `/referenser/lundsbergs-skola-gym/` | `/assets/lundsbergs-skola-gym-oversikt.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Lundsbergs skola | samma | `/assets/nordic-wellness-marieberg-ledstrak-slutresultat.jpg` | Saknas verkligen | Ingen verifierad match | Återställ relaterad referensbild eller utelämna kortet | Nej, om kortet utelämnas |
| Lundsbergs skola | samma | `/assets/ekhagsskolan-idrottshall-hogtalare-oversikt.webp` | Saknas verkligen | Ingen verifierad match | Återställ relaterad referensbild eller utelämna kortet | Nej, om kortet utelämnas |
| Minnebergsskolan | `/referenser/minnebergsskolan-arvika/` | `/assets/minnebergsskolan-arvika-innergard.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller använd enbildsläge | Nej vid enbildsläge |
| Minnebergsskolan | samma | `/assets/minnebergsskolan-gradang-horslinga-installation.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller använd enbildsläge | Nej vid enbildsläge |
| Minnebergsskolan | samma | `/assets/minnebergsskolan-klassrum-epson-touchprojektor.webp` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller använd enbildsläge | Nej vid enbildsläge |
| Nordic Wellness | `/referenser/nordic-wellness-orebro-marieberg/` | `/assets/nordic-wellness-marieberg-ledstrak-slutresultat.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Sannerudshallen | `/referenser/sannerudshallen-kil/` | `/assets/sannerudshallen-fardig-ljudinstallation.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera hero-original | Ja |
| Sannerudshallen | samma | `/assets/sannerudshallen-electrovoice-hogtalare-narbild.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Sannerudshallen | samma | `/assets/sannerudshallen-fore-stora-hogtalare.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Sannerudshallen | samma | `/assets/sannerudshallen-kils-ishall-exterior.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Sannerudshallen | samma | `/assets/sannerudshallen-lift-installation-is.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |
| Sannerudshallen | samma | `/assets/sannerudshallen-nya-hogtalare-laktare-is.jpg` | Saknas verkligen | Ingen verifierad match | Lokalisera original eller utelämna bilden | Nej, om valfri bild utelämnas |

### Visuella platshållare i omigrerade sidor

| Referens | Antal | Åtgärd |
|---|---:|---|
| Claessons | 5 | Inventera original; tillåt enbildsläge om material saknas |
| Ekhagsskolan | 9 | Inventera original; blockera migrering tills hero finns |
| Friskis&Svettis | 6 | Inventera original; blockera migrering tills hero finns |
| Hundfjällshotellet | 9 | Inventera original; befintlig hero kan användas |
| Kroppkärrs IP | 1 | Inventera original; blockera migrering tills hero finns |
| Lesjöfors AB | 5 | Inventera original; blockera migrering tills hero finns |
| Lundsbergs skola | 9 | Inventera original; blockera migrering tills hero finns |
| Minnebergsskolan | 10 | Inventera original; befintlig hero kan användas |
| Nordic Wellness | 4 | Inventera original; blockera migrering tills hero finns |
| Sörby idrottshall | 6 | Inventera original; befintlig hero kan användas |

Totalt finns 64 synliga bild- eller videoplatshållare. De är befintliga och
har inte ändrats i fas 1.

## Länkinventering

Tabellen grupperar identiska länkar. `Ja` betyder att motsvarande route eller
lokala fragment finns i arbetskopian. Kontaktfragmenten bedöms via den faktiska
kontaktrouten. Omigrerade sidor ändras inte i denna fas.

| Källa | Länk | Route finns | Typ | Åtgärd |
|---|---|---:|---|---|
| Flera referenser | Lokala `#leveransen`, `#uppdraget`, `#zoner`, `#lagen`, `#bilder`, `#halvsal-helsal`, `#omfattning` | Ja | Fragment | Behåll |
| Säffle | `/` | Ja | Route | Behåll |
| Flera referenser | `/kontakt/` och kontaktfragment | Ja | Route/fragment | Behåll; verifiera fragment vid varje migrering |
| Årjäng | `/kunskap/ratt-kabel-av-teknik/` | Nej | Flyttad route | Innehållet finns på `/kunskap/kablar-kontakter/`, men sidan har fortfarande gamla canonical-värden. Besluta om redirect och använd fysisk route vid migrering. |
| Flera referenser | `/service-support/` | Nej | Verkligen saknad route | Ingen likvärdig dedikerad route finns. Skapa route eller besluta om annat mål i separat länkarbete. |
| Hanza | `/miljo/kontor-konferens/` | Ja | Route | Behåll |
| Friskis, Lundsberg, Nordic | `/miljo/gym/` | Ja | Route | Behåll |
| Hundfjället | `/miljo/hotell/` | Ja | Route | Behåll |
| Sannerudshallen | `/miljo/ishall/` | Ja | Route | Behåll |
| Claessons, Hundfjället | `/miljo/restaurang-bar-klubb/` | Ja | Route | Behåll |
| Ekhagsskolan, Lundsberg, Minneberg | `/miljo/skola/` | Ja | Route | Behåll |
| Årjäng, Säffle | `/miljo/simhall/` | Ja | Route | Behåll |
| Ekhagsskolan, Kroppkärr, Sörby | `/miljo/sporthall-arena/` | Ja | Route | Behåll |
| Kroppkärr | `/miljo/utomhusidrott/` | Ja | Route | Behåll |
| Flera referenser | `/referenser/` | Ja | Route | Behåll |
| Lundsberg | `/referenser/ekhagsskolan-dals-langed/` | Ja | Route | Behåll |
| Lundsberg | `/referenser/friskis-solstadens-sportcenter/` | Ja | Route | Behåll |
| Ekhagsskolan, Hanza, Sörby | `/referenser/minnebergsskolan-arvika/` | Ja | Route | Behåll |
| Lundsberg | `/referenser/nordic-wellness-orebro-marieberg/` | Ja | Route | Behåll |
| Årjäng, Sörby | `/referenser/saffle-simhall/` | Ja | Route | Behåll |
| Ekhagsskolan, Sörby | `/referenser/sannerudshallen-kil/` | Ja | Route | Behåll |
| Ekhagsskolan | `/referenser/sorby-sporthall-kumla/` | Ja | Route | Behåll |
| Claessons, Hundfjället, Lundsberg | `/tjanster/bakgrundsmusik/` | Ja | Route | Behåll |
| Claessons, Friskis, Hundfjället, Lesjöfors, Minneberg | `/tjanster/konferensteknik/` | Nej | Troligen konsoliderad route | `/miljo/kontor-konferens/` är närmast befintliga relevanta sida. Besluta om redirect eller nytt mål före migrering. |
| Årjäng, Hundfjället, Minneberg, Säffle | `/tjanster/horslinga/` | Ja | Route | Behåll |
| Flera referenser | `/tjanster/ljudsystem/` | Ja | Route | Behåll |
| Flera referenser | `/tjanster/mikrofoner/` | Ja | Route | Behåll |
| Flera referenser | `/tjanster/projektering/` | Ja | Route | Behåll |
| Årjäng, Claessons, Lundsberg, Minneberg, Sörby | `/tjanster/skarmar-projektorer/` | Nej | Verkligen saknad route | Ingen enskild likvärdig route finns. Behåll som blockerare tills tjänsteroute eller redirect beslutats. |
| Flera referenser inklusive Hanza | `/tjanster/styrsystem-integration/` | Ja | Route | Behåll |
| Ekhagsskolan, Sannerudshallen, Sörby | `/tjanster/taluppfattbarhet/` | Ja | Route | Behåll |
| Lesjöfors | `/tjanster/videomoten-byod/` | Nej | Troligen konsoliderad route | `/miljo/kontor-konferens/` täcker BYOD och videomöten. Besluta om redirect eller nytt mål före migrering. |

Fem unika route-mål saknas: `/kunskap/ratt-kabel-av-teknik/`,
`/service-support/`, `/tjanster/konferensteknik/`,
`/tjanster/skarmar-projektorer/` och `/tjanster/videomoten-byod/`.

## Faktainventering

`Kundnamn verifierat: ja` betyder att namnet är konsekvent i sidans titel,
H1 och arkivdata; det är inte en juridisk verifiering. Publiceringsdatum i
metadata räknas inte som färdigställandedatum. `Mätvärden med källa: nej`
betyder att sidan kan innehålla siffror men saknar en dokumenterad intern
mätkälla i nuvarande datamodell.

| Referens | Kundnamn verifierat | Publiceringsgodkännande | Bildrättigheter | Färdigställandedatum | AVAB:s ansvar tydligt | Mätvärden med källa | Kundcitat godkänt | Layout |
|---|---:|---|---|---|---:|---:|---|---|
| Årjängs simhall | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Claessons Konferens & Restaurang | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | standard |
| Ekhagsskolan | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | standard |
| Friskis&Svettis Karlstad | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | standard |
| Hanza Mechanics | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Hundfjällshotellet & Hundfjällscenter | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Kroppkärrs IP | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Lesjöfors AB | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | standard |
| Lundsbergs skola | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | standard |
| Minnebergsskolan | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Nordic Wellness Marieberg | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | compact |
| Säffle simhall | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Sannerudshallen | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |
| Sörby idrottshall | Ja | Okänt | Okänt | Okänt | Ja | Nej | Okänt | extended |

Rekommendation: 1 compact, 5 standard och 8 extended. Samtliga 14 saknar
dokumenterat publiceringsgodkännande, kända bildrättigheter, verifierat
färdigställandedatum och godkänt kundcitat i den inventerade källkoden.

## Readiness-matris för de 13 omigrerade referenserna

`Migreringsstatus` avser teknisk migrering. Kolumnen `Godkännanden` avser
publicering och kan därför blockera publicering även när sidan är tekniskt
migreringsbar.

| Referens | Föreslagen layout | Innehåll redo | Bilder redo | Länkar redo | Fakta redo | Godkännanden | Rekommenderad nästa åtgärd | Migreringsstatus |
|---|---|---|---|---|---|---|---|---|
| Årjängs simhall | extended | redo | blockerad | blockerad | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero och övriga bilder; besluta tre saknade länkmål | blockerad |
| Claessons Konferens & Restaurang | standard | redo | blockerad | blockerad | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero; besluta service-, konferens- och bildroute | blockerad |
| Ekhagsskolan | standard | redo | blockerad | redo | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero-original | blockerad |
| Friskis&Svettis Karlstad | standard | redo | blockerad | blockerad | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero; besluta service- och konferensroute | blockerad |
| Hundfjällshotellet & Hundfjällscenter | extended | redo | redo med mindre åtgärd | redo med mindre åtgärd | redo med mindre åtgärd | okänt; publicering blockerad | Använd verifierad hero och enbildsläge; besluta konferensroute | redo med mindre åtgärd |
| Kroppkärrs IP | extended | redo | blockerad | redo | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero-original | blockerad |
| Lesjöfors AB | standard | redo | blockerad | blockerad | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero; besluta konferens- och BYOD-route | blockerad |
| Lundsbergs skola | standard | redo | blockerad | blockerad | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero; besluta bildroute | blockerad |
| Minnebergsskolan | extended | redo | redo med mindre åtgärd | redo med mindre åtgärd | redo med mindre åtgärd | okänt; publicering blockerad | Använd verifierad hero och enbildsläge; besluta två saknade länkmål | redo med mindre åtgärd |
| Nordic Wellness Marieberg | compact | redo | blockerad | redo | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero-original | blockerad |
| Säffle simhall | extended | redo | redo | redo | redo med mindre åtgärd | okänt; publicering blockerad | Kontrollera källan till arkivets 487-timmarsuppgift och citatgodkännande | redo med mindre åtgärd |
| Sannerudshallen | extended | redo | blockerad | redo | redo med mindre åtgärd | okänt; publicering blockerad | Återställ hero-original | blockerad |
| Sörby idrottshall | extended | redo | redo med mindre åtgärd | redo med mindre åtgärd | redo med mindre åtgärd | okänt; publicering blockerad | Utelämna platshållare och besluta bildroute | redo med mindre åtgärd |

Summering: 0 `redo`, 4 `redo med mindre åtgärd`, 9 `blockerad` och 0
`okänt` för teknisk migrering. Samtliga 13 är fortfarande blockerade för
publiceringsbeslut eftersom kundgodkännande och bildrättigheter är okända.

## Rekommenderad nästa pilotbatch

| Pilottyp | Kandidat | Rekommendation |
|---|---|---|
| compact | Nordic Wellness Marieberg | Blockerad: enda compact-kandidaten saknar verifierad hero. |
| standard | Ekhagsskolan | Blockerad: närmast redo eftersom länkarna fungerar, men hero saknas. |
| extended | Säffle simhall | Rekommenderad efter liten faktakontroll. Hero och fyra galleribilder svarar HTTP 200, länkarna fungerar och innehållet är komplett. |

Migrera därför högst Säffle som nästa pilot. Starta inte compact- eller
standardpilot förrän respektive hero-original finns.

## Manuell visuell kontroll efter fas 1.5

Den automatiska testwebbläsaren kunde inte ansluta eftersom fältet
`sandboxPolicy` saknades i webbläsarens sandbox-metadata. Följande kontroller
är därför **inte godkända** och måste göras manuellt innan checkpointen räknas
som visuellt verifierad.

| Route | 375 px | 768 px | 1024 px | 1440 px | 1920 px |
|---|---|---|---|---|---|
| `/referenser/hanza-konferens-tocksfors/` | Ej godkänd | Ej godkänd | Ej godkänd | Ej godkänd | Ej godkänd |
| `/referenser/` | Ej godkänd | Ej godkänd | Ej godkänd | Ej godkänd | Ej godkänd |

Manuell checklista:

1. Kontrollera vid samtliga bredder att ingen horisontell scroll, överlappning
   eller avklippt text finns, även vid 200 procents zoom.
2. På Hanza: kontrollera 8 procent grön hero, text före bild på mobil, bild
   till högerkanten på desktop, ingen skugga/overlay samt rimlig beskärning.
3. Tabbnavigera från skip-länk genom header, hero-knappar, detaljer,
   relaterad referens, PageCTA och footer. Fokus ska vara synligt.
4. Öppna och stäng teknisk `details/summary` med Enter och mellanslag.
5. På arkivet: testa filtersökning, miljö- och teknikfilter, rensa filter,
   mobil filterknapp och URL-parametrar. Kontrollera 1/2/3-kolumnslayout.
6. Bekräfta exakt en Hanza-post, en CTA före Hanzas footer och oförändrad
   legacy-CTA på arkivet.
7. Kontrollera konsol, nätverk, trasiga bilder och samtliga Hanza-länkar.

## Blockerare för nästa batch

1. Återställ eller lokalisera hero-original för de nio routes vars huvudbild
   saknas; migrera inte dem med antagna ersättningsbilder.
2. Besluta om de fem saknade interna route-målen. Ändra inte länkar förrän
   faktisk målsida är vald.
3. Fastställ publiceringsgodkännande och bildrättigheter per kund.
4. Dokumentera källor till kvantitativa resultat innan de modelleras som
   `measured` eller `estimated`.
5. Bevara varje äldre sidas CTA via kompatibilitetsläge; CTA-standardisering
   görs först efter att alla referenser är migrerade.
