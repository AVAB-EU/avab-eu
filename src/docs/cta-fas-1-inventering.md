# CTA fas 1: inventering och rekommenderad avgränsning

## Status

Inventeringen genomfördes 2026-08-05 efter att samtliga referenssidor hade
migrerats till den gemensamma referensarkitekturen och den senaste batchen
hade granskats visuellt på test2.avab.eu.

Det här dokumentet är ett beslutsunderlag. Fas 1 ändrar inte CTA-komponenter,
CTA-texter, länkar, SiteFooter eller publik layout.

## Rekommendation

Den nya CTA:n bör i första utrullningen avgränsas till
**referensdetaljsidorna**.

Skälen är:

- Hanza använder redan den nya PageCTA genom referensernas content-schema.
- Övriga referenser använder samma layout men ligger kvar på den tillfälliga
  legacy-renderern.
- miljö-, tjänste- och övriga marknadssidor har redan fungerande lokala CTA:er
  med sidunika budskap.
- en samtidig webbplatsomfattande CTA-konvertering skulle blanda
  designstandardisering, innehållsarbete och referensrelease i samma ändring.

PageCTA ska därför vara målvarianten för referensdetaljer. Övriga sidtyper
behåller sina nuvarande CTA:er tills ett separat beslut tas om en
webbplatsomfattande standardisering.

## Teknisk nulägesbild

| Område | Antal aktiva sidor | Nuvarande CTA |
|---|---:|---|
| Referensdetaljer | 14 | 1 PageCTA, 13 legacy |
| Referensarkiv | 1 | Lokal fullwidth-cta |
| Miljösidor | 14 | Lokal fullwidth-cta på samtliga |
| Tjänstesidor | 13 | 12 lokala fullwidth-cta, 1 lokal CTA-kortvariant |
| Start, kunskap och övriga stödsidor | 6 | Lokala fullwidth-cta |
| Kontaktsida | 1 | Kontaktformuläret är konverteringsmålet |

Det finns alltså minst fyra aktiva presentationssätt:

1. PageCTA.astro
2. ReferenceLegacyCTA.astro
3. lokala fullwidth-cta-block
4. ett lokalt CTA-kort på kameraövervakningssidan

## Referensdetaljer

| Referens | Nuvarande variant | Primärt mål | Sekundärt mål | Rekommendation för fas 2 |
|---|---|---|---|---|
| Hanza Mechanics | page | /kontakt/ | /miljo/kontor-konferens/ | Behåll som referens och kontrollfall |
| Säffle simhall | legacy | /kontakt/#kontaktformular | /kontakt/ | Byt till page, behåll budskap och länkar |
| Hundfjällshotellet | legacy | /kontakt/#kontaktformular | /miljo/hotell/ | Byt till page, behåll budskap och länkar |
| Årjängs simhall | legacy | /kontakt/#kontaktformular | /miljo/simhall/ | Byt till page, behåll budskap och länkar |
| Claessons | legacy | tel:+46548202080 | /miljo/kontor-konferens/ | Byt till page; besluta om telefon ska vara primär |
| Ekhagsskolan | legacy | /kontakt/#kontaktformular | /miljo/skola/ | Byt till page, behåll budskap och länkar |
| Friskis&Svettis | legacy | /kontakt/ | /service-support/ | Byt till page, behåll serviceinriktningen |
| Kroppkärrs IP | legacy | /kontakt/#kontaktformular | /miljo/utomhusidrott/ | Byt till page, behåll budskap och länkar |
| Lesjöfors AB | legacy | /kontakt/#kontaktformular | /miljo/kontor-konferens/ | Byt till page, behåll budskap och länkar |
| Lundsbergs skola | legacy | /kontakt/#kontaktformular | /miljo/gym/ | Byt till page, behåll budskap och länkar |
| Minnebergsskolan | legacy | /kontakt/#kontaktformular | /miljo/skola/ | Byt till page, behåll budskap och länkar |
| Nordic Wellness | legacy | /kontakt/#kontaktformular | /miljo/gym/ | Byt till page, behåll budskap och länkar |
| Sannerudshallen | legacy | /kontakt/#kontaktformular | /miljo/ishall/ | Byt till page, behåll budskap och länkar |
| Sörby idrottshall | legacy | /kontakt/#kontaktformular | /miljo/sporthall-arena/ | Byt till page, behåll budskap och länkar |

### Innehållsregler för fas 2

- befintlig eyebrow, rubrik, brödtext och länkmål är utgångspunkt
- CTA:n får högst två knappar
- primär knapp ska leda till faktisk kontaktväg, inte till ett saknat ankare
- sekundär knapp ska ge relevant fördjupning eller alternativ kontaktväg
- tre proof points får läggas till endast när de stöds av befintlig sidtext
- generiska proof points ska inte kopieras mekaniskt mellan alla referenser
- telefon som primär CTA på Claessons ska beslutas uttryckligen
- inga ändringar i PageCTA.astro, SiteFooter.astro eller global CTA-CSS ska
  göras om den befintliga komponenten redan kan återge önskat resultat

## Övriga sidtyper

Samtliga 14 aktiva miljösidor har en lokal fullwidth-cta och ska lämnas
oförändrade i referensutrullningen.

Tolv tjänstesidor har en lokal fullwidth-cta. Kameraövervakning använder ett
eget CTA-kort i FAQ-sektionen och är ett dokumenterat undantag. Kortets två
knappar leder båda till /kontakt/, vilket kan förbättras senare men inte ska
lösas i referens-CTA-fas 2.

Följande sidor behåller också sina nuvarande lokala CTA:er:

- /
- /referenser/
- /kunskap/kablar-kontakter/
- /om-oss/
- /rastsignal/
- /integritetspolicy/

Kontaktsidan får ingen extra CTA eftersom kontaktformuläret redan är sidans
konverteringsmål.

## Föreslagen trestegsplan

### Fas 1 — inventering och beslut

- dokumentera nuläge och scope
- besluta att referensdetaljer är första målgruppen
- håll projektfaktaboxar och annan referenspolering i separat backlog
- gör inga publika CTA-ändringar

### Fas 2 — ny CTA på referensdetaljer

- ändra de 13 legacy-entries till variant page
- behåll nuvarande budskap och länkmål som utgångspunkt
- använd Hanza som visuellt kontrollfall
- lägg endast till proof points när underlaget finns
- deploya som fortsatt draft/noindex till test2
- ändra inga miljö-, tjänste-, arkiv- eller stödsidor

### Fas 3 — granskning, release och upprensning

- granska samtliga referens-CTA:er i desktop och mobil
- justera endast innehåll eller avvikelser som upptäcks i granskningen
- dokumentera godkännande
- ta bort ReferenceLegacyCTA och legacy ur schemat först när ingen entry
  längre använder varianten
- hantera draft false, kundgodkännanden och bildrättigheter i respektive
  referens releasebeslut, inte automatiskt som del av CTA-bytet

## Beslut som krävs före fas 2

1. Ska Claessons behålla telefon som primär CTA eller använda kontaktformuläret?
2. Ska alla referenser ha proof points, eller får den nya CTA:n återges utan
   punktlista när underlag saknas?
3. Ska Säffles sekundära knapp fortsätta vara generell kontakt eller bytas till
   /miljo/simhall/?

### Rekommenderade standardbeslut

- Claessons använder kontaktformuläret som primär CTA. Telefonnumret kan stå i
  brödtext eller kontaktmiljö men bör inte vara den enda primära
  konverteringsvägen.
- samtliga referenser får tre sidunika proof points, men bara genom att
  återanvända verifierade uppgifter från respektive entry
- Säffles sekundära knapp går till /miljo/simhall/ i stället för att dubblera
  den primära kontaktvägen
- övriga CTA-länkmål behålls i fas 2 utan nytt redaktionellt beslut

De här rekommendationerna ger en mer enhetlig CTA utan att göra alla
referenstexter identiska.
