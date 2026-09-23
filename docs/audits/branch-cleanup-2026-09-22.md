# Branch cleanup audit — 2026-09-22

## Syfte

Städa gamla Git-brancher utan att kasta bort arbete som fortfarande bara finns utanför `main`.

## Source of truth

- Canonical repo: `AVAB-EU/avab-eu`
- Production: `main`
- Öppna PR:er vid inventeringen: 0

## Kan tas bort efter kontroll i GitHub

Följande brancher hör till arbete som redan är mergat, ersatt eller uttryckligen stängt. De ska inte återanvändas som startpunkt för nytt arbete:

- `docs/checkpoint-2026-09-22` — PR #87 stängd; relevant checkpoint är bevarad i aktuell `TODO.md`.
- `docs/seo-overnight-checkpoint` — checkpoint-arbetet är mergat.
- `docs/source-of-truth-cleanup` — PR #94 mergad.
- `fix/environment-factbands-standard` — PR #92 mergad.
- `fix/factband-responsive-live` — äldre factband-fix, ersatt av senare canonical fixes.
- `fix/final-qa-seo-links` — PR #74 mergad.
- `fix/kamera-butik-go-banana` — PR #81 mergad.
- `fix/local-guardrail-base-ref` — PR #75 mergad.
- `fix/reference-factband-one-row` — PR #91 mergad.
- `fix/reference-facts-single-row` — PR #90 stängd utan merge och ersatt av senare factband-fix.
- `fix/reference-hero-copy-final-sync` — PR #93 mergad.
- `seo/kameraovervakning-skola` — motsvarande kameraundersidor är införda i `main`.
- `seo/kravstallning-systemintegration` — PR #72 mergad.
- `seo/metadata-leverans-breadcrumbs` — PR #85 mergad.
- `seo/publicera-digital-signage` — PR #79 mergad.
- `seo/publicera-exakt-sokning-ai` — PR #82 mergad.
- `seo/publicera-kamera-gdpr` — PR #80 mergad.
- `seo/publicera-skarmar-projektorer` — PR #78 mergad.
- `seo/publiceringsaudit-indexering` — PR #77 mergad.
- `seo/referens-gotetorpsskolan` — PR #71 mergad.
- `seo/referens-loka-brunn` — gammal Loka-branch; slutlig referens finns i `main`.
- `seo/referens-loka-brunn-v2` — gammal mellanversion.
- `seo/referens-loka-brunn-v3` — gammal mellanversion/slutspår; aktuell sida finns i `main`.
- `seo/search-console-legacy-cleanup` — PR #84 mergad.
- `seo/strategiska-internlankar` — PR #86 mergad.
- `seo/tjanster-konferensteknik` — structured service-pages finns i `main`; branchen är ett gammalt arbets-/stackspår.

## Behåll tills separat granskning

Dessa brancher innehåller tydligt arbete som inte bara kan betraktas som en gammal PR-kopia:

### `Nya-hundfjäll-test`
Innehåller ett stort separat Hundfjällsarbete med ett stort antal bilder samt omfattande ändring av referenssidan. Ligger långt efter `main`, men ska inte raderas innan innehållet bedömts eller arkiverats.

### `agent/saffle-simhall-minneberg-layout`
Innehåller cirka 300 rader separat Säffle-layoutarbete. Behåll tills det jämförts mot dagens canonical referensstandard.

### `feature/kundonskemal-fas2a-tjanstestandard`
Innehåller omfattande äldre tjänstestandard-/kundönskemålsarbete, dokumentation och komponentförändringar. Delar finns i dagens kodbas men inte allt. Kräver separat innehålls-/arkitekturbedömning före radering.

### `seo/undersidor-fas0-plan`
Innehåller tre planeringsdokument som inte finns på `main`:
- `docs/projects/seo-undersidor-2026-09-21/FASPLAN.md`
- `docs/projects/seo-undersidor-2026-09-21/README.md`
- `docs/projects/seo-undersidor-2026-09-21/SOURCE-COVERAGE.md`

Dessa bör antingen arkiveras/mergas som historik eller uttryckligen bedömas som onödiga innan branchen tas bort.

### `agent/ai-content-system`
Har endast en liten avvikelse mot startsidan men är kopplad till tidigare AI-content-arbete. Kan sannolikt tas bort, men bör först jämföras mot dokumentationen så inget aktivt beslut råkar ligga endast i branchhistoriken.

## Regel framåt

- Nya brancher ska vara kortlivade och kopplade till en konkret uppgift/PR.
- Mergade brancher bör raderas när PR:n är klar.
- En gammal branch får inte återanvändas som bas för nytt arbete.
- Om en branch innehåller unikt material som ska sparas ska materialet först flyttas till `main` som kod, dokumentation eller arkiverad historik.
