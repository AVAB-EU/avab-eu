# Global layoutstandard

Status: Active  
Owner: AVAB  
Last reviewed: 2026-08-24

Den här standarden definierar återanvändbara layoutregler för publika AVAB-sidor. Den kompletterar `mobile.md`; faktisk markup och `src/styles/avab.css` är sanningskälla för implementationen.

## Grundprincip

- Använd delade tokens och globala primitiver före sidspecifik CSS.
- Lägg bara till en lokal variant när sidens innehåll eller funktion faktiskt kräver det.
- Migrera befintliga sidor stegvis och verifiera varje sidtyp. En ny global primitiv innebär inte att alla sidor automatiskt ska byggas om.
- Fasta höjder och `nth-child`-korrigeringar ska inte användas för att få kort eller rubriker att linjera.

## Spacing

Spacing ska utgå från tokens i `:root`. För vertikala innehållsgrupper används den opt-in-baserade primitivens `.avab-stack`:

- `.avab-stack` för normalt innehållsavstånd
- `.avab-stack--related` för tätt relaterade element
- `.avab-stack--heading` för rubrik och introduktion
- `.avab-stack--blocks` för separata innehållsblock

Primitiven nollställer endast direkta barns vertikala marginaler när den uttryckligen används. Den får därför inte läggas på befintlig markup utan visuell kontroll.

## Processkort och sifferpiller

`.flow-card` är den kanoniska globala kortytan. Numrerade steg använder följande struktur:

```html
<article class="flow-card">
  <strong><em>1</em> Stegets rubrik</strong>
  <span>Förklarande text.</span>
</article>
```

`em` är processens sifferpiller och får inte ersättas med lokala cirkelregler. Ett `.flow-card` utan `em` behåller en enkel grön rubrik och fungerar som kompatibel standardvariant. Rubriker ska få bryta över flera rader; fasta minimihöjder är inte tillåtna.

## Balanserade kortgridar

`.grid-balanced` är en opt-in-primitiv för kortgrupper där sista raden ska centreras:

- `.grid-balanced--3` ger tre kolumner på bred skärm. Sex kort blir 3+3 och fem kort blir 3+2.
- `.grid-balanced--2` ger två kolumner på bred skärm.
- Trekolumnsvarianten går till två kolumner vid 1120 px. Alla varianter går till en kolumn vid 768 px.

Primitiven ska appliceras per sida efter innehålls- och browser-QA. Mikrofoner, Ljudsystem och Styrsystem/integration ingår inte i den globala Fas 1C-implementeringen.

## FAQ-rubriker

`.faq-heading h2` och rubriker i `.compact-faq summary` ska kunna brytas över flera rader utan överlappning eller horisontell scroll. Ikonen i FAQ-raden ska ligga kvar till höger och linjera med radens överkant när frågan bryts.

FAQ-listor använder `.compact-faq` eller det äldre kompatibla namnet `.faq-list`. På bred layout visas posterna i två lika breda kolumner och flödar radvis i naturlig DOM- och tangentbordsordning. Vid högst 768 px går layouten till en kolumn med full bredd. Breakpointen styrs endast av tillgänglig horisontell bredd; viewporthöjd påverkar inte kolumnantalet.

FAQ-poster får ha innehållsdriven höjd. Plus-/accordion-ikonen ska vara stabil till höger även när frågan bryts över flera rader. Sidspecifik gridordning eller kolumnindelning får inte användas.

## CTA-hierarki i hero

När en hero innehåller flera handlingar används följande visuella hierarki:

1. `.button-primary` för den viktigaste handlingen: grön yta och mörk text.
2. `.button-secondary` för den näst viktigaste handlingen: vit yta och mörk text.
3. `.button-quiet` för en eventuell tredje handling: halvtransparent grå yta och mörk text.

En tredje CTA ska alltid vara visuellt underordnad primär och sekundär CTA. En hero bör normalt inte innehålla fler än tre handlingar.

På mobil staplas knapparna i samma prioritetsordning och ska behålla minst 44 px klickyta enligt `mobile.md`.

## Lokal CSS och fortsatt migrering

Nya sidor ska återanvända reglerna ovan. Befintliga lokala kopior tas bort först när respektive sidtyp migreras och visuellt verifieras. Bred textlinjering, sidspecifik kortordning och applicering av 3+3/3+2 hör till senare sidarbete och markeras inte som klara av denna standard.
