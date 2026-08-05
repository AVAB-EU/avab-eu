# PageCTA på AVAB:s Astro-sidor

## Syfte

`PageCTA.astro` är den gemensamma komponenten för en valfri, sidanpassad
kontaktsektion i slutet av en sida.

Komponenten ansvarar för:

- fullbreddsdesignen
- mörkgrön bakgrund och god textkontrast
- responsiv layout för dator och mobil
- primär och valfri sekundär knapp
- valfri punktlista
- semantisk rubrik och tillgänglig märkning
- fokusmarkeringar för tangentbordsanvändare

Sidan som använder komponenten ansvarar för allt innehåll och alla länkar.

## Placering

Importera komponenten i sidans frontmatter och placera den sist i `<main>`,
direkt före `</main>` och `<SiteFooter />`.

```astro
---
import PageCTA from "../../components/PageCTA.astro";
import SiteFooter from "../../components/SiteFooter.astro";
---

<main>
  <!-- Sidans övriga innehåll -->

  <PageCTA
    title="Vill ni veta mer?"
    primaryLabel="Kontakta oss"
    primaryHref="/kontakt/"
  />
</main>

<SiteFooter />
```

Justera den relativa importsökvägen efter sidans placering i `src/pages`.

## Viktiga regler

- `PageCTA` är valfri. Alla sidor ska inte automatiskt få en CTA.
- Komponenten får inte importeras eller renderas i `SiteFooter.astro`.
- En sida får inte ha både `PageCTA` och äldre CTA-markup, exempelvis
  `.fullwidth-cta`.
- Det ska aldrig visas två CTA-sektioner direkt före sidfoten.
- Sidanpassad text och URL:er ska anges som props på sidan, inte hårdkodas i
  komponenten.
- Kontakt-, integritets- och informationssidor ska bara få `PageCTA` när det
  finns ett uttryckligt innehållsbehov.
- Ändra komponentens CSS när designen ska ändras på alla sidor. Lägg inte
  lokala kopior av CTA-stylingen på enskilda sidor.

## Undantag under referensmigreringen

Referensmigreringen och den webbplatsövergripande CTA-migreringen är två
separata arbeten. Under migrering av en befintlig referens ska den CTA som
redan finns på sidan behållas. Reglerna ovan om att ersätta äldre markup och
checklistan nedan gäller alltså när en sida uttryckligen har valts för
CTA-migrering eller när en helt ny sida byggs, inte vid den pågående
referensmigreringen.

En helt ny referensroute ska använda `<PageCTA />`. Hanza har redan
`<PageCTA />` och behåller den. Äldre referenser behåller
`.fullwidth-cta`, `.reference-cta`, annan befintlig CTA eller avsaknad av CTA
tills den separata CTA-inventeringen och de tre CTA-faserna har genomförts.

Den bindande övergångsplanen, inklusive skillnaden mellan `PageCTA` och den
nya `SiteFooter`, finns i `src/docs/cta-och-sitefooter-overgang.md`.

## API

| Prop | Typ | Obligatorisk | Beskrivning |
| --- | --- | --- | --- |
| `title` | `string` | Ja | CTA-sektionens rubrik. Renderas som `<h2>`. |
| `primaryLabel` | `string` | Ja | Text på den primära knappen. |
| `primaryHref` | `string` | Ja | Länk för den primära knappen. |
| `eyebrow` | `string` | Nej | Kort överrubrik ovanför huvudrubriken. |
| `text` | `string` | Nej | Förklarande brödtext. |
| `secondaryLabel` | `string` | Nej | Text på den sekundära knappen. |
| `secondaryHref` | `string` | Nej | Länk för den sekundära knappen. |
| `points` | `string[]` | Nej | Punktlista som visas i komponentens högra kolumn. |
| `ariaLabel` | `string` | Nej | Alternativ till rubriken som sektionens tillgängliga namn. |
| `id` | `string` | Nej | Eget stabilt id för rubriken. Genereras annars från `title`. |

Den sekundära knappen renderas bara när både `secondaryLabel` och
`secondaryHref` har angetts. Punktlistan renderas bara när `points` innehåller
minst en punkt.

## Komplett exempel

```astro
<PageCTA
  eyebrow="Konferensrum som fungerar i vardagen"
  title="Planerar ni nya eller uppgraderade mötesrum?"
  text="Vi hjälper er från behovsanalys och projektering till installation, driftsättning och support."
  primaryLabel="Boka kostnadsfri rådgivning"
  primaryHref="/kontakt/"
  secondaryLabel="Läs om konferenslösningar"
  secondaryHref="/miljo/kontor-konferens/"
  points={[
    "Trådlös presentation med tydlig användning",
    "Teams- och BYOD-lösningar anpassade efter rummet",
    "Styrning, installation och support från samma partner",
  ]}
/>
```

## Exempel utan punktlista och sekundärknapp

```astro
<PageCTA
  eyebrow="Vi hjälper er vidare"
  title="Har ni frågor om nästa projekt?"
  text="Kontakta AVAB så går vi igenom era behov."
  primaryLabel="Kontakta oss"
  primaryHref="/kontakt/"
/>
```

Komponenten anpassar automatiskt layouten när punktlistan eller
sekundärknappen saknas.

## Checklista för en ny sida eller beslutad CTA-migrering

- [ ] CTA:n tillför ett tydligt nästa steg för just den här sidan.
- [ ] Texten och länkarna är sidanpassade.
- [ ] Primärknappens länk fungerar.
- [ ] Sekundärknappen har både etikett och länk, eller har utelämnats helt.
- [ ] Punktlistan innehåller konkreta och relevanta fördelar.
- [ ] Äldre `.fullwidth-cta` eller annan specialbyggd CTA har tagits bort från
      sidan.
- [ ] `PageCTA` ligger sist i `<main>`.
- [ ] Endast en CTA visas direkt före sidfoten.
- [ ] Sidan har kontrollerats på både dator och mobil.
- [ ] Tangentbordsfokus är tydligt på båda knapparna.
- [ ] `git diff --check` och projektets build har körts.

## Äldre CTA-markup

Den globala `.fullwidth-cta`-CSS:en finns kvar så länge aktiva äldre sidor
använder den. Ta inte bort den gemensamma CSS:en förrän samtliga aktiva sidor
har inventerats och de beslutade CTA-migreringarna är verifierade. Migrering
av en referenssidas innehåll eller arkitektur är inte i sig ett beslut att
migrera sidans CTA.

Gamla, arkiverade eller namngivna reservfiler ska inte migreras automatiskt.
