# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-08-17._

## Referensmigrering – nästa fas

- [x] Inventera samtliga referensroutes och klassificera standard/fördjupad.
- [x] Frysa Minnebergsskolan som canonical pilot och dokumentera referensstandard version 1.
- [ ] Migrera första enkla referensen: Nordic Wellness Marieberg.
- [ ] Validera den enkla referensen vid 1440, 1024, 768, 390 och 375 px.
- [ ] Migrera Lesjöfors AB som andra enkelkontroll.
- [ ] Migrera Hanza Mechanics som normal referens.
- [ ] Migrera Claessons och Säffle som separata bildrika kontrollfall.
- [ ] Genomför valideringsstopp och lås eventuella nödvändiga justeringar i de gemensamma komponenterna.
- [ ] Implementera godkänd referensstandard på återstående referenssidor i små, beslutade batcher.
- [ ] Kör slut-QA för index, internlänkar, alt-texter, canonical, drafts, responsivitet och build.

## Bild-SEO

- [ ] Granska alt-texter; börja med de 17 tidigare flaggade. Ortsnamn hör hemma i alt-text, inte i generiska filnamn.
- [ ] Pusha `bildstruktur-seo` och skapa PR först när den separata arbetsfasen uttryckligen återupptas och visuell kontroll är klar.
- [ ] Besluta om `kopcentrum-fasad-kvall-bred.webp`, som tidigare saknade referenser: radera eller ta i bruk.
- [ ] Verifiera kvarvarande trasiga internlänkar från tidigare inventering.
- [ ] Spåra eller ersätt saknade originalbilder.
- [ ] Kontrollera publika bild-URL:er och hash-länkar manuellt.
- [ ] Verifiera `SiteFooter.astro` efter ändrad sökväg för logotyp.
- [ ] Välj namnkonvention för `images` respektive `image/partners/` och gör den enhetlig i en separat uppgift.

### Beslut som ska bevaras

- Inga undermappar i `public/assets/`; bilder ligger platt och endast omdöpta.
- Generiska motivnamn används i filnamn, ortsnamn i alt-text.
- Visuellt lika men icke-identiska bilder hålls isär.
- De två tidigare raderade gymfilerna förblir raderade; `gym_hero_hammaro_stc.webp` behålls som framtida gym-hero.
- Val av gym-hero är ett separat innehållsbeslut.
