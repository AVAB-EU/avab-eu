# Source coverage – Kameraövervakning Skola

**Route:** `/kameraovervakning/skola/`  
**Sidtyp:** Camera industry page  
**Pilot/facit:** `/kameraovervakning/butik/`  
**Status:** Draft/noindex

## Source audit input

Primära tillgängliga källor i canonical repo:

- `src/pages/tjanster/kameraovervakning/index.astro`
- `src/pages/miljo/skola/index.txt` och `Avab-hub-skola.txt` som historiskt skolunderlag
- IMY:s aktuella vägledning om kamerabevakning i skolor/förskolor
- IMY:s vägledning om kamerabevakning av anställda
- Befintlig asset `/assets/skola-flyg-vy-hero.webp`

**SOURCE OF TRUTH CHECK: CLOSED 2026-09-23.** Enligt aktuell projektregel är `AVAB-EU/avab-eu` enda source of truth. Den tidigare blockeraren mot en eventuell lokal mapp `C:\webbprojekt\avab-eu\docs\source-material\` är därför inte längre giltig. Ingen separat dedikerad sourcefil för sidan finns på `main`; granskningen ska baseras på källorna ovan och dokumenterade claims.

## Juridisk verifiering

Verifierat mot IMY 2026-09-21:

- integritetsintresset i skolor väger generellt tungt
- barn och unga är särskilt skyddsvärda
- inomhusbevakning under verksamhetstid är särskilt integritetskänslig
- nattbevakning i låsta lokaler bedöms annorlunda
- skolgårdar kan ha tungt integritetsintresse även efter skoltid
- kamerabevakning får inte användas för prestationskontroll av anställda
- intresseavvägning ska göras och dokumenteras

## Claims audit

- Inga kundspecifika projektpåståenden används.
- Inga priser, produktantal eller mätvärden används.
- Inga skolreferenser påstås vara kameraövervakningsprojekt.
- Juridiska formuleringar är skrivna som orientering och hänvisar till IMY.

## Assets

`/assets/skola-flyg-vy-hero.webp` – 2032 × 770

## Gates

**UNSUPPORTED PROJECT CLAIMS: 0**  
**MATERIAL SOURCE DEVIATIONS: 0**  
**UNVERIFIED LEGAL CLAIMS: 0**  
**MISSING REMOTE ASSETS: 0**  
**SOURCE OF TRUTH CHECK: CLOSED**

## Publiceringsgate

- `draft: true`
- `seo.noindex: true`

Kvar före publiceringsbeslut: mänsklig visuell granskning och separat beslut om att ändra `draft/noindex`.
