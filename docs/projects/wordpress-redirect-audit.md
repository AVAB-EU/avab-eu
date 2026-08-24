# WordPress-redirectaudit

```text
Status: Draft
Owner: Go-live / SEO
Last reviewed: 2026-08-24
Scope: Read-only jämförelse mellan WordPress-backupen 2026-06-30 och nuvarande AVAB-projekt/produktion
```

## Syfte och avgränsning

Rapporten inventerar gamla publika URL:er i WordPress-backupen
`C:\webbprojekt\Backup avab.eu 2026-06-30` och jämför dem med nuvarande
routes, redirectregister och faktisk produktion på `https://avab.eu/`.

Analysen genomfördes read-only. Inga filer i backupen eller implementationen
ändrades under inventeringen.

Den normativa beskrivningen av nuvarande redirectlösning finns i
[`../architecture/wordpress-redirects.md`](../architecture/wordpress-redirects.md).
Det här dokumentet är en informativ snapshot och ersätter inte den.

## Underlag och metod

Följande källor användes:

- backupens `llms.txt`, genererad av All in One SEO 4.9.9
- WordPress-databasdumpen `avab_wp746.sql`
- publicerade poster och sidor i `wpwn_posts`
- canonical- och robotsdata i `wpwn_aioseo_posts`
- publicerade interna länkar och menylänkar
- Rank Maths 404-logg
- backupens `.htaccess` och `.htaccess.bk`
- [`../../astro.config.mjs`](../../astro.config.mjs)
- [`../architecture/wordpress-redirects.md`](../architecture/wordpress-redirects.md)
- [`../architecture/deployment.md`](../architecture/deployment.md)
- [`../../.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml)
- faktiska routes under `src/pages/`
- read-only HTTP-headerkontroller mot produktionen 2026-08-24

Backupens `llms.txt` gav den säkraste ögonblicksbilden av indexerbara URL:er:
144 unika publika/indexerbara adresser. Databasen bekräftade 43 publicerade
sidor och 98 publicerade inlägg. Skillnaden mot 144 utgörs av startsidan,
kategoriarkiv och en URL-kollision där både sida och inlägg använde `/akustik/`.

Normalt irrelevanta systemendpoints, feeds, mediafiler, bildbilagor,
`wp-admin`, `wp-content`, `wp-includes`, API-routes och query-varianter har
filtrerats bort.

## Resultatöversikt

- **Gamla publika/indexerbara URL:er:** 144
- **Semantiskt korrekta Astro-redirects:** 12
- **Riktiga HTTP 301 bland dessa 12:** 0
- **Gamla URL:er som fortfarande är riktiga sidor:** 3
- **URL:er som saknar redirect:** 129
  - 127 svarar HTTP 404
  - 2 svarar HTTP 403: `/kunskap/` och `/tjanster/`
- **Mappings som kräver manuell bedömning:** 109
  - 82 har medelhög säkerhet och en bredare tematisk destination
  - 27 har låg säkerhet eller bör sannolikt behålla 404/få 410
- **Saknade redirects med hög säkerhet:** 20

`MANUELL` i tabellen betyder att destinationen kan uppfattas som en soft 404
om redirecten införs utan innehålls- och sökintentionsbedömning.

## Fullständig URL-jämförelse

| Prioritet | Gammal URL | Status idag | Föreslagen ny URL | Redirect finns? | Säkerhet | Kommentar |
|---|---|---|---|---|---|---|
| P3 | `/` | 200 sida | `/` | Ej behövd | Hög | Samma publika route finns. |
| P2 | `/2321-2/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Ljudprocessor; bredare ny sida. |
| P3 | `/2933-2/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | Namnlös prototyp-/testsida. |
| P2 | `/63mm-tele/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P1 | `/akustik/` | 200 meta | `/tjanster/taluppfattbarhet/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P2 | `/akustikpanel/` | 404 | `/tjanster/taluppfattbarhet/` | Nej | Medel – MANUELL | Närmaste ämnesmatch. |
| P2 | `/akustikpaneler-forbattra-ljudkvaliteten-i-ditt-rum/` | 404 | `/tjanster/taluppfattbarhet/` | Nej | Medel – MANUELL | Närmaste ämnesmatch. |
| P2 | `/antenner-och-signalforstarkare-for-tradlosa-mikrofoner-forbattra-signalstyrkan-och-rackvidden/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Detaljartikel till mikrofontjänsten. |
| P1 | `/bakgrundsljud/` | 200 meta | `/tjanster/bakgrundsmusik/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P2 | `/balanserad-kabel/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/bass-enhancers-forstark-ditt-ljud-med-kraftfull-bas/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Bredare sökintention på målet. |
| P2 | `/biocentriskt-ljus-vetenskapliga-bevis-och-fordelar/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P1 | `/butik/` | 404 | `/miljo/butik-retail/` | Nej | Hög | Tydlig miljömotsvarighet. |
| P2 | `/category/bild/` | 404 | `/miljo/kontor-konferens/` | Nej | Medel – MANUELL | Visuell kommunikation saknar egen route. |
| P2 | `/category/kameraovervakning/` | 404 | `/tjanster/kameraovervakning/` | Nej | Hög | Tydlig kategori–tjänst-match. |
| P2 | `/category/ljud/` | 404 | `/tjanster/ljudsystem/` | Nej | Hög | Tydlig kategori–tjänst-match. |
| P2 | `/category/ljus/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/category/nyheter/` | 404 | Saknas | Nej | Låg – MANUELL | Nyhetslisting saknas. |
| P2 | `/category/smart_styrning/` | 404 | `/tjanster/styrsystem-integration/` | Nej | Hög | Tydlig kategori–tjänst-match. |
| P3 | `/category/uncategorized/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | Generiskt WordPress-arkiv. |
| P2 | `/dante/` | 404 | `/tjanster/styrsystem-integration/` | Nej | Medel – MANUELL | Relevant men bredare destination. |
| P2 | `/daw/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P2 | `/de-essers-minska-oonskade-s-ljud-i-dina-inspelningar/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Bredare destination. |
| P2 | `/delningsfilter-fordelning-av-frekvenser-i-ljudsystem/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/digital-ljuddistribution-smidig-och-effektiv-ljudhantering/` | 404 | `/tjanster/styrsystem-integration/` | Nej | Medel – MANUELL | Nätverk/integration. |
| P2 | `/distortionsenheter-skapa-unika-toner-och-texturer-i-din-musik/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/sceninnehåll; bredare mål. |
| P2 | `/dj-controllers-din-kompletta-losning-for-digital-dj-ing/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/klubbmiljö. |
| P2 | `/dj-hogtalare-kraftfullt-ljud-for-din-publik/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/klubbmiljö. |
| P2 | `/dj-horlurar-ditt-viktigaste-verktyg-for-mixning/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P2 | `/dj-programvara-digitala-verktyg-for-modern-dj-ing/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P2 | `/dynamiska-mikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P1 | `/ecovision/` | 404 | `/tjanster/kameraovervakning/` | Nej | Hög | Kamera-/NVR-lösning. |
| P2 | `/effektenheter-for-dj-skapa-dynamiska-och-unika-set-2/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Dubblettlik DJ-artikel. |
| P2 | `/effektenheter-for-dj-skapa-dynamiska-och-unika-set/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/klubbmiljö. |
| P1 | `/effektiva-och-certifierade-talade-utrymningslarm-for-saker-evakuering/` | 404 | `/tjanster/talat-utrymningslarm/` | Nej | Hög | Samma tjänst. |
| P1 | `/en54-klassning/` | 404 | `/tjanster/talat-utrymningslarm/` | Nej | Hög | EN54 behandlas på tjänstesidan. |
| P2 | `/equalizers/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Ljudprodukt till samlingssida. |
| P1 | `/ett-hotell-har-mycket-teknik-vad-kan-man-styra/` | 404 | `/miljo/hotell/` | Nej | Hög | Tydlig hotellmatch. |
| P2 | `/exciters-forhoj-ljudets-klarhet-och-narvaro/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Ljudprodukt till samlingssida. |
| P2 | `/ficksandare/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P3 | `/gobananabergvik/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | Kundintern medlemsyta som var felaktigt indexerbar. |
| P2 | `/gobo-projektorer-projicera-monster-och-logotyper-pa-scenen/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/handhallna-tradlosa-mikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/hangande-mikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/hdmi-kablar/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/hogtalarkabeln-en-tekniskt-uttommande-oversikt/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P1 | `/horslinga-pls-eller-sls/` | 404 | `/tjanster/horslinga/#slingtyper` | Nej | Hög | Exakt relevant sektion finns. |
| P1 | `/horslingor/` | 200 meta | `/tjanster/horslinga/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P2 | `/industriella-hogtalarsystem-kraftfull-ljudlosning-for-stora-anlaggningar/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Alternativt `/miljo/industri/`. |
| P1 | `/installation-av-ljudsystem-sa-har-far-du-perfekt-ljud-i-alla-miljoer/` | 404 | `/tjanster/installation/` | Nej | Hög | Installationsintention. |
| P2 | `/intercom-system-effektiv-kommunikation-for-stora-installationer-och-live-event/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Närmaste befintliga tjänst. |
| P1 | `/kalibrering-av-ljudsystem-optimera-ljudkvaliteten-for-ditt-utrymme/` | 404 | `/tjanster/driftsattning/` | Nej | Medel – MANUELL | Kalibrering/injustering ligger närmast. |
| P1 | `/kameraovervakning-skola/` | 404 | `/tjanster/kameraovervakning/` | Nej | Hög | Samma tjänst och skolkontext. |
| P2 | `/kardioid-mikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/koaxialkablar/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/kompressorer-kontrollera-dynamiken-i-din-musik/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P2 | `/kondensatormikrofon/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P1 | `/konferensteknik/` | 404 | `/miljo/kontor-konferens/` | Nej | Hög | Tydlig ämnesmotsvarighet. |
| P3 | `/kontakt/` | 200 sida | `/kontakt/` | Ej behövd | Hög | Samma publika route finns. |
| P1 | `/kunskap/` | 403 | Saknas | Nej | Låg – MANUELL | Viktig gammal hubb; indexroute saknas. |
| P2 | `/lagnivakabel/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/lagohm-eller-100v/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/laserprojektor-varfor-det/` | 404 | Saknas | Nej | Låg – MANUELL | Bild/ljus saknar exakt motsvarighet. |
| P2 | `/led-lampor-for-scenbruk-energisnala-och-langlivade-ljuskallor/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/lediga-tjanster/` | 404 | `/om-oss/` | Nej | Medel – MANUELL | Ingen aktuell karriärroute. |
| P2 | `/limitern-skydda-ditt-ljudsystem-med-precision/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Ljudprodukt till samlingssida. |
| P2 | `/line-array-hogtalare-for-storskaliga-och-exakta-ljudlosningar/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/live-mixers/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Bredare destination. |
| P2 | `/ljudinterface/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P2 | `/ljudisolering-skapa-en-tystare-och-mer-privat-miljo/` | 404 | `/tjanster/taluppfattbarhet/` | Nej | Medel – MANUELL | Närmaste akustikrelaterade tjänst. |
| P2 | `/ljudmixers-for-dj/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/klubbmiljö. |
| P2 | `/ljudmobler-och-rack-diskreta-och-funktionella-losningar-for-ditt-ljudsystem/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P1 | `/ljudprojektering/` | 200 meta | `/tjanster/projektering/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P3 | `/login/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskap-kassa/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskap-kassa/medlemskapsbekraftelse/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskapskonto/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskapskonto/avbryt-medlemskap/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskapskonto/medlemskapsfakturering/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskapskonto/membership-orders/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskapskonto/your-profile/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P3 | `/medlemskapsnivaer/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | WordPress-medlemsfunktion. |
| P2 | `/midi-kablar/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/mikrofoner-med-fantommatning/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/mikrofonstativ-och-hallare-stabilitet-och-flexibilitet-for-ditt-ljudsystem/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P1 | `/minnebergsskolan-arvika/` | 200 meta | `/referenser/minnebergsskolan-arvika/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P2 | `/multiroom-ljudsystem-somlos-ljudupplevelse-i-hela-hemmet/` | 404 | `/tjanster/bakgrundsmusik/` | Nej | Medel – MANUELL | Relevant men bredare destination. |
| P2 | `/noise-gates-kontrollera-oonskat-brus-i-din-mix/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P1 | `/nyheter/` | 404 | Saknas | Nej | Låg – MANUELL | Etablerad indexerad hubb utan ersättare. |
| P2 | `/nytt-ljuskoncept/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/obalanserad-kabel/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P1 | `/om-2/` | 200 meta | `/om-oss/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P1 | `/om/` | 404 | `/om-oss/` | Nej | Hög | Tydlig Om-sida. |
| P2 | `/optisk-kabel/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/pa-hogtalare-kraftfull-ljudatergivning-for-stora-evenemang/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/par-lampor-traditionella-scenljusarmaturer-for-kraftfull-belysning/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/pitch-shifters-justera-tonhojden-for-kreativa-ljudmojligheter/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P2 | `/portabla-dj-system-flexibilitet-och-kraft-pa-sprang/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/klubbmiljö. |
| P2 | `/portabla-pa-system-flexibel-ljudlosning-for-alla-evenemang/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/powercon/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P1 | `/projektering_taluppfattbarhet/` | 404 | `/tjanster/taluppfattbarhet/` | Nej | Hög | Samma ämne och tjänst. |
| P3 | `/rastsignal/` | 200 sida | `/rastsignal/` | Ej behövd | Hög | Samma publika route finns. |
| P2 | `/rca-kontakter/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/reverb-fran-plate-till-moderna-digitala-effekter/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P2 | `/rormikrofoner-varm-och-kanslig-ljudupptagning-for-studioinspelningar/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/rormikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/rotary-mixers-klassisk-kontroll-med-modern-kansla/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | DJ-/klubbmiljö. |
| P1 | `/saffle-simhall/` | 200 meta | `/referenser/saffle-simhall/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P1 | `/sakerhetskameror/` | 200 meta | `/tjanster/kameraovervakning/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P1 | `/sakerhetskamerorgammal/` | 404 | `/tjanster/kameraovervakning/` | Nej | Hög | Äldre säkerhetskamerasida. |
| P3 | `/sample-page/` | 404 | Ingen, ev. 410 | Nej | Låg – MANUELL | Standardiserad WordPress-testsida. |
| P2 | `/samplers-kreativitetens-verktyg-i-musikproduktion/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P2 | `/scenljus-och-belysningsteknik-skapa-stamning-och-forstarka-upplevelsen/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/scenmonitorer-klar-och-palitlig-ljudatergivning-for-liveframtradanden/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/scratch-pads-din-kreativa-verktygslada-for-dj-ing/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P1 | `/service/` | 404 | `/tjanster/garanti-och-service/` | Nej | Hög | Service-/supportmotsvarighet. |
| P2 | `/shotgun-mikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P1 | `/simhall/` | 200 meta | `/miljo/simhall/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P1 | `/skistar-lodge-hundfjallet/` | 404 | `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | Nej | Hög | Samma etablerade projekt. |
| P2 | `/skivspelare-fran-historisk-ikon-till-modern-klassiker/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P1 | `/skola/` | 200 meta | `/miljo/skola/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P2 | `/speakon-kontakter/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P1 | `/sporthall/` | 200 meta | `/miljo/sporthall-arena/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P2 | `/stereo-imaging-skapa-rumslighet-och-djup-i-din-mix/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P2 | `/stralkastare-fresnel-justerbara-ljusarmaturer-for-fokus-och-spridning/` | 404 | Saknas | Nej | Låg – MANUELL | Relevant Ljus-route finns inte. |
| P2 | `/streaming-ljudlosningar-hogkvalitativ-ljuduppspelning-for-hem-och-foretag/` | 404 | `/tjanster/bakgrundsmusik/` | Nej | Medel – MANUELL | Relevant men bredare destination. |
| P2 | `/studiomonitorer-precisionsverktyg-for-musikproduktion/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Studioproduktion kontra installation. |
| P2 | `/subwoofers-kraftfull-bas-for-en-fullandad-ljudupplevelse/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/takmonterade-mikrofoner-diskret-och-effektiv-ljudupptagning-for-motesrum-och-konferenser/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P1 | `/talat-utrymningslarm/` | 404 | `/tjanster/talat-utrymningslarm/` | Nej | Hög | Exakt tjänstemotsvarighet. |
| P1 | `/taluppfattbarhet-i-publika-lokaler/` | 200 meta | `/tjanster/taluppfattbarhet/` | Astro, ej 301 | Hög | Rätt mål men HTTP 200. |
| P1 | `/tjanster/` | 403 | Saknas | Nej | Låg – MANUELL | Viktig gammal hubb; indexroute saknas. |
| P2 | `/tradlosa-in-ear-monitors-personlig-ljudovervakning-for-professionella-musikframtradanden/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant men bredare destination. |
| P2 | `/tradlosa-ljudsystem-flexibilitet-och-bekvamlighet-for-utomhus-och-inomhus/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Relevant ljudsystemssida. |
| P2 | `/tv-eller-skarm/` | 404 | `/miljo/kontor-konferens/` | Nej | Medel – MANUELL | Bild/skärm saknar egen tjänsteroute. |
| P2 | `/usb-mikrofoner/` | 404 | `/tjanster/mikrofoner/` | Nej | Medel – MANUELL | Tydlig ämnesfamilj. |
| P2 | `/usb-stickor-och-mediaforvaring-for-dj-saker-och-effektiv-hantering-av-din-musik/` | 404 | `/miljo/restaurang-bar-klubb/` | Nej | Medel – MANUELL | Produktartikel; bredare mål. |
| P2 | `/utomhushogtalare-hogkvalitativ-ljudatergivning-for-alla-utemiljoer/` | 404 | `/tjanster/ljudsystem/` | Nej | Medel – MANUELL | Alternativt relevant miljösida. |
| P1 | `/vad-ar-nvr/` | 404 | `/tjanster/kameraovervakning/` | Nej | Hög | Kamera-/NVR-innehåll. |
| P1 | `/videokonferens/` | 404 | `/miljo/kontor-konferens/` | Nej | Hög | Tydlig ämnesmotsvarighet. |
| P1 | `/villkor-kamerabevakning/` | 404 | `/integritetspolicy/` | Nej | Låg – MANUELL | Juridiskt innehåll är inte identiskt. |
| P2 | `/xlr-kontakter-och-kablar/` | 404 | `/kunskap/kablar-kontakter/` | Nej | Medel – MANUELL | Konsolidering till kabelguiden. |
| P2 | `/yamaha-dm3-digital-dante-mixer-for-de-flesta-behov/` | 404 | `/tjanster/styrsystem-integration/` | Nej | Medel – MANUELL | Alternativt ljudsystem; bedöm intent. |
| P2 | `/zonstyrning-flexibel-ljudkontroll-for-alla-miljoer/` | 404 | `/tjanster/styrsystem-integration/` | Nej | Medel – MANUELL | Tydlig integrationskoppling. |

## De 10 viktigaste saknade redirectsen

1. `/horslinga-pls-eller-sls/` → `/tjanster/horslinga/#slingtyper`
2. `/service/` → `/tjanster/garanti-och-service/`
3. `/talat-utrymningslarm/` → `/tjanster/talat-utrymningslarm/`
4. `/effektiva-och-certifierade-talade-utrymningslarm-for-saker-evakuering/` → `/tjanster/talat-utrymningslarm/`
5. `/en54-klassning/` → `/tjanster/talat-utrymningslarm/`
6. `/projektering_taluppfattbarhet/` → `/tjanster/taluppfattbarhet/`
7. `/konferensteknik/` → `/miljo/kontor-konferens/`
8. `/skistar-lodge-hundfjallet/` → `/referenser/hundfjallshotellet-hundfjallscenter-salen/`
9. `/kameraovervakning-skola/` → `/tjanster/kameraovervakning/`
10. `/sakerhetskamerorgammal/` → `/tjanster/kameraovervakning/`

Därefter bör `/butik/`, `/om/`, `/ecovision/`, `/vad-ar-nvr/`,
`/videokonferens/` och installationsartikeln prioriteras.

## Särskild kontroll: hörslinga

Den nya hörslingesidan har redan rätt ankare:

```html
<section class="section" id="slingtyper">
  <h2>Olika slingtyper för olika lokaler och krav</h2>
</section>
```

Rekommenderad destination är därför:

```text
/tjanster/horslinga/#slingtyper
```

Rubriken behöver inte ett separat `id`; sektionsankaret är lämpligare.

Backupens interna länkar visar även en historisk daterad variant:

```text
/2023/02/28/horslinga-pls-eller-sls/
```

Den bör få samma destination men ingår inte i totalsiffran 144 eftersom den
inte fanns i backupens aktuella indexerbara URL-register.

## Nuvarande redirectregister

`astro.config.mjs` innehåller 13 poster:

| Källa | Mål |
|---|---|
| `/miljo/sporthall/` | `/miljo/sporthall-arena/` |
| `/om-2/` | `/om-oss/` |
| `/skola/` | `/miljo/skola/` |
| `/simhall/` | `/miljo/simhall/` |
| `/sporthall/` | `/miljo/sporthall-arena/` |
| `/horslingor/` | `/tjanster/horslinga/` |
| `/sakerhetskameror/` | `/tjanster/kameraovervakning/` |
| `/minnebergsskolan-arvika/` | `/referenser/minnebergsskolan-arvika/` |
| `/saffle-simhall/` | `/referenser/saffle-simhall/` |
| `/ljudprojektering/` | `/tjanster/projektering/` |
| `/taluppfattbarhet-i-publika-lokaler/` | `/tjanster/taluppfattbarhet/` |
| `/akustik/` | `/tjanster/taluppfattbarhet/` |
| `/bakgrundsljud/` | `/tjanster/bakgrundsmusik/` |

Tolv av dessa finns i den gamla 144-listan. `/miljo/sporthall/` är en extra
legacyvariant.

## Produktionsverifiering och redirectkedjor

De 13 registrerade redirectsen är inte HTTP-redirects i produktion. De svarar
med HTTP `200 OK` och en statisk HTML-sida med ungefär följande innehåll:

```html
<meta http-equiv="refresh" content="0;url=/om-oss">
<meta name="robots" content="noindex">
<link rel="canonical" href="https://avab.eu/om-oss">
```

Målen i `astro.config.mjs` saknar avslutande snedstreck. LiteSpeed gör därefter
en riktig 301 till slashvarianten:

```text
/om-2/
→ HTTP 200 med meta refresh till /om-oss
→ HTTP 301 till /om-oss/
→ HTTP 200
```

Samma mönster verifierades för samtliga 13 Astro-redirects.

Domännormaliseringen fungerar däremot på servernivå:

- `https://www.avab.eu/...` → riktig HTTP 301 till apex-domänen
- `http://avab.eu/...` → riktig HTTP 301 till HTTPS

## SEO-risker

1. De registrerade legacyredirectsen ger HTTP 200 i stället för 301.
2. Meta refresh följs av en extra 301 eftersom målen saknar avslutande `/`.
3. `/kunskap/` och `/tjanster/` ger 403 i stället för en användbar sida eller 404.
4. WordPress-kategoriarkiven är helt omappade.
5. Många detaljerade artiklar saknar tillräckligt nära destination och kan ge
   soft-404-signaler om de skickas till breda tjänstesidor.
6. Privata medlems- och kundsidor var felaktigt indexerbara i WordPress.
7. Backupens `.htaccess` innehöll endast LiteSpeed-cache och WordPress
   front-controller-regler; inga sidredirects hittades.
8. Nuvarande repo innehåller ingen `.htaccess`. Deploymenten laddar endast upp
   innehållet från `dist/` via FTP.

## Ytterligare kandidater utanför totalsiffran

Publicerade interna länkar visade också historiska eller planerade adresser som
inte fanns i den aktuella indexerbara 144-listan. De ska inte blandas in i
huvudtotalen utan separat bedömning. Viktigast är:

| Kandidat | Rekommendation |
|---|---|
| `/2023/02/28/horslinga-pls-eller-sls/` | Samma redirect som den odaterade hörslinge-URL:en. |
| `/2023/03/04/nytt-ljuskoncept/` | Manuell bedömning; Ljus-route saknas. |
| `/projekt/batbuss-190610-christine-holm/` | Manuell bedömning; ingen verifierad ny referens. |
| `/taluppfattbarhet/` | `/tjanster/taluppfattbarhet/` om historisk publicering bekräftas. |
| `/butik-retail/` | `/miljo/butik-retail/` om historisk publicering bekräftas. |
| `/hotell/` | `/miljo/hotell/` om historisk publicering bekräftas. |
| `/industri/` | `/miljo/industri/` om historisk publicering bekräftas. |
| `/ishall/` | `/miljo/ishall/` om historisk publicering bekräftas. |
| `/kameraovervakning/` | `/tjanster/kameraovervakning/` om historisk publicering bekräftas. |
| `/kontor-konferens/` | `/miljo/kontor-konferens/` om historisk publicering bekräftas. |
| `/projektering/` | `/tjanster/projektering/` om historisk publicering bekräftas. |
| `/sporthall-arena/` | `/miljo/sporthall-arena/` om historisk publicering bekräftas. |
| `/styrsystem-integration/` | `/tjanster/styrsystem-integration/` om historisk publicering bekräftas. |
| `/ljus/` | Ingen säker destination ännu. |
| `/visuell-kommunikation/` | Ingen verifierad egen route ännu. |
| `/nedladdningar/checklista-av-sakerhet/` | Ingen verifierad egen route ännu. |

## Rekommenderad långsiktig struktur

Skapa ett enda kanoniskt redirectregister med minst följande fält:

```text
source
destination
httpStatus
priority
confidence
reason
sourceEvidence
owner
lastVerified
```

Registret bör:

- generera LiteSpeed/Apache-regler med riktig HTTP 301
- generera Astro-konfigurationen som sekundärt skydd
- alltid använda slutlig canonical-URL med avslutande `/`
- valideras i CI för dubbletter, loopar, kedjor och saknade mål
- ha en separat explicit lista för `410` eller avsiktlig 404
- förbjuda bred redirect till startsidan utan dokumenterad motivering
- HTTP-testas efter deployment, inte bara verifieras genom build

På den nuvarande statiska FTP-/LiteSpeed-miljön bör de permanenta
path-redirectsen ligga i serverlagret och peka direkt på fullständig canonical
destination. Astro-redirectsen kan behållas som fallback men bör inte vara det
primära SEO-skyddet.

## Beslutspunkt före implementation

Ingen implementation bör starta innan följande har godkänts:

1. de 20 högsäkerhetsmappningarna
2. om de 82 medelsäkra artiklarna ska konsolideras eller få nya kunskapssidor
3. vilka av de 27 lågsäkra URL:erna som ska få 410, behålla 404 eller få ny sida
4. om `/kunskap/`, `/tjanster/`, Nyheter, Ljus och Visuell kommunikation ska få
   egna indexroutes
5. om redirectregistret ska generera en deployad `.htaccess` för LiteSpeed

