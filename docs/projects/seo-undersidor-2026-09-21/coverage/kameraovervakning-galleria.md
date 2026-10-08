# Source coverage – Kameraövervakning Galleria

**Route:** `/kameraovervakning/galleria/`  
**Jämförelsesida:** `/kameraovervakning/butik/`  
**Status:** Draft/noindex – inte publiceringsgodkänd  
**Uppföljd:** 2026-10-08

## Källor och genomförda ändringar

- Generell kameratjänst `/tjanster/kameraovervakning/` och gemensam camera-industry-modell.
- Miljösida `/miljo/kopcentrum-galleria/` och fördjupning `/tjanster/exakt-sokning-ai-analys/`.
- `docs/source-material/Kameraövervakning galleria.docx` genomgicks i tidigare lokal Codex-inventering. Word-källan har inte öppnats via GitHub-anslutningen i denna uppföljning.
- PR #120: kortare H1, underrubrik och ingress. Hero visuellt godkänd.
- PR #121: innehåll om entréer, övergångar mellan våningsplan, ansvarsfördelning samt villkorad sökning/integration. GitHub-validering grön; separat visuell slutkontroll av innehållet återstår.
- Internlänkning till handelsmiljön och Exakt sökning läggs i samma PR som denna dokumentuppdatering. Befintlig CTA-länk till kameratjänsten kvarstår.

## Medvetet utelämnat och ej verifierat

- Galleria Duvan används inte som kamerareferens: befintligt referensutkast avser digital signage, har inte verifierad kameraleverans och saknar publiceringsgodkännande.
- Automatisk personspårning mellan kameror, AI-analys och specifika integrationer utlovas inte generellt. Funktioner beror på plattform, licenser och projektering.
- Inga kundspecifika produktantal, mätvärden eller kamerareferenser är tillagda.
- Juridik och ansvar mellan fastighetsägare, centrumledning och butikshyresgäster beskrivs orienterande, inte som generell rättslig bedömning.

## Bilder – väntar på granskning

- `/assets/kopcentrum-galleria-kameraövervakning-hero.webp` används i hero och principsektionen.
- `/assets/Kameraovervakning-dahua-hero.webp` används vid driftavsnittet. Alt-texten beskriver ett videogränssnitt trots att bilden enligt tidigare granskning visar en fysisk kamera.
- Bildval, upprepning, motivanknytning och alt-texter behöver granskas. Inga bilder eller alt-texter ändras i denna PR.

## Kvar före publicering

- [ ] Andreas granskar nytt innehåll och internlänkar visuellt, inklusive mobil.
- [ ] Kundteamet godkänner eller ändrar bildval, upprepade motiv och bildbeskrivningar.
- [ ] Kontrollera att nya påståenden stämmer med verifierad AVAB-leveransomfattning och aktuell integritetsvägledning.
- [ ] Kör slutlig internlänkskontroll, guardrails/build och visuell QA.
- [ ] Dokumentera uttryckligt publiceringsbeslut innan draft/noindex ändras.

## Publiceringsgate

`draft: true` och `seo.noindex: true` förblir aktiva.

Tidigare `MATERIAL SOURCE DEVIATIONS: 0` är inte verifierat som fullständig överensstämmelse med Word-underlaget. Medvetna utelämnanden och öppna verifieringar framgår ovan.
