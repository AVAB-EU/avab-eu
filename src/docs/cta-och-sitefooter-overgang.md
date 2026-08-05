# CTA och SiteFooter under referensmigreringen

## Status

Detta dokument är den bindande beslutsnoteringen för CTA och `SiteFooter`
under migreringen av referenssidor. Om en äldre instruktion säger att en
befintlig referens automatiskt ska byta till `<PageCTA />`, gäller detta
dokument i stället.

## Begrepp som inte får blandas ihop

- `SiteFooter.astro` är den globala sidfoten. Den nya versionen innehåller
  ingen inbyggd CTA.
- `PageCTA.astro` är en fristående, sidanpassad CTA-sektion som kan ligga sist
  i `<main>`, direkt före `SiteFooter`.
- `.fullwidth-cta`, `.reference-cta` och motsvarande lokal markup är äldre
  CTA-lösningar som fortfarande används på befintliga sidor.

En ändring av `SiteFooter` är därför inte samma sak som en CTA-migrering.
`PageCTA` får inte läggas in i `SiteFooter` för att återinföra en global CTA.

## Låst beslut under referensmigreringen

Referensmigreringen gäller innehållsmodell, gemensam layout, komponenter,
metadata och arkivdata. CTA-designen är en fryst zon under denna migrering.

- En helt ny referensroute som skapas efter detta beslut ska använda den nya
  `<PageCTA />`. En ombyggd sida på en route som redan finns räknas som en
  befintlig referens, inte som en ny.
- Hanza har redan den nya `<PageCTA />` och ska behålla exakt den CTA som finns
  när Hanza migreras till den gemensamma referensarkitekturen.
- En befintlig äldre referens ska under sin referensmigrering behålla sin
  befintliga CTA: text, länkar, knappantal, visuella variant och placering.
- Migreringen får inte byta `.fullwidth-cta`, `.reference-cta` eller annan
  befintlig CTA mot `<PageCTA />`.
- Migreringen får inte lägga till en CTA på en äldre sida som saknar CTA.
- Ingen sida får få två CTA-sektioner före sidfoten.
- `SiteFooter.astro`, `PageCTA.astro` och global CTA-CSS ska inte ändras som en
  bieffekt av referensmigreringen.

Om den gemensamma referenslayouten inte kan återge en äldre CTA utan visuell
förändring ska CTA:n behandlas som ett tillfälligt kompatibilitetsundantag,
exempelvis via en variant, adapter eller namngiven slot. Välj minsta lösning
som bevarar sidan. Stoppa och rapportera endast om CTA:n tekniskt hindrar en
fungerande build eller gör att två CTA:er renderas; att CTA:n är äldre är inte
i sig ett fel eller ett migrationsblockerande problem.

## Separat CTA-arbete efter avslutad referensmigrering

CTA-arbetet startar först när alla beslutade referenssidor är migrerade och
referensmigreringen är godkänd. Arbetet görs i tre separata faser:

### Fas 1: inventering och beslut

- Inventera alla aktiva sidtyper, inte bara referenser.
- Registrera route, sidtyp, nuvarande CTA-variant, CTA-innehåll, länkmål och om
  sidan saknar CTA.
- Bedöm om sidan ska ha `<PageCTA />`, behålla en annan lösning eller sakna
  CTA.
- Dokumentera beslut och motiv innan kod ändras.

### Fas 2: kontrollerad implementering

- Migrera endast de sidor och sidtyper som godkänts i inventeringen.
- Anpassa innehållet efter sidans avsikt; använd inte samma CTA-text överallt.
- Säkerställ att varje sida har högst en avslutande CTA.
- Ändra inte `SiteFooter` för att distribuera CTA:n globalt.

### Fas 3: verifiering och städning

- Testa beslutade sidor på mobil och desktop samt med tangentbord.
- Kontrollera länkar, fokus, kontrast, rubrikhierarki och visuella övergången
  mellan CTA och `SiteFooter`.
- Sök efter kvarvarande legacy-markup och klassificera varje träff som aktiv,
  avsiktligt undantag eller borttagningsbar.
- Ta bort gammal global CTA-CSS först när inga aktiva sidor längre behöver
  den.

## Kontrollpunkt för varje referensmigrering

Före och efter migreringen ska följande noteras för den aktuella sidan:

- CTA-typ före och efter
- CTA-text och länkar före och efter
- antal CTA-sektioner före sidfoten
- om `SiteFooter` är oförändrad

Förväntat resultat för en befintlig sida är att dessa värden är oförändrade,
förutom rena tekniska anpassningar som inte påverkar renderat innehåll eller
utseende.
