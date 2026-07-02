# AVAB Astro-projekt

Det här är den lokala Astro-sidan för AVAB. Målet är att hålla projektet lätt att förstå: sidor i en mapp, gemensam design i en fil och publika bilder på ett ställe.

## Snabbstart

```sh
npm run dev
npm run build
npm run preview
```

## Färgkodad projektkarta

| Färg | Område | Var det ligger | Regel |
| --- | --- | --- | --- |
| Grön | Designsystem | `src/styles/global.css`, `src/styles/miljo.css` | Ändra här när flera sidor ska se likadana ut. |
| Blå | Sidor | `src/pages/**/index.astro` | En publik URL per `index.astro`. |
| Gul | Sidmaterial | `src/pages/**/**/*.txt`, gamla `.html` | Använd som källa, men bygg nya sidor i `.astro`. |
| Rosa | Bilder | `public/assets` | Använd i HTML som `/assets/filnamn.webp`. |
| Grå | Konfiguration | `astro.config.mjs`, `tsconfig.json`, `package.json` | Rör varsamt, påverkar hela projektet. |

## Rekommenderad arbetsordning

1. Välj sidan du jobbar med i `src/pages`.
2. Lägg sidans unika text och HTML i sidans `index.astro`.
3. Lägg återkommande design i `src/styles/miljo.css` eller `src/styles/global.css`.
4. Lägg bilder som ska användas med `/assets/...` i `public/assets`.
5. Kör `npm run build` innan du anser sidan klar.

## Snabbnavigering i projektträdet

> Färgikonerna följer projektkartan ovan. Klicka på filnamn eller mappar för att hoppa direkt dit.

- 🟦 [`src/pages/`](src/pages/) - publika sidor och URL:er
  - 🟦 [`index.astro`](src/pages/index.astro) - startsidan
  - 🟦 [`miljo/`](src/pages/miljo/) - miljösidor
    - 🟦 [`butik-retail/index.astro`](src/pages/miljo/butik-retail/index.astro)
    - 🟦 [`hotell/index.astro`](src/pages/miljo/hotell/index.astro)
    - 🟦 [`industri/index.astro`](src/pages/miljo/industri/index.astro)
    - 🟦 [`ishall/index.astro`](src/pages/miljo/ishall/index.astro)
    - 🟦 [`kontor-konferens/index.astro`](src/pages/miljo/kontor-konferens/index.astro)
    - 🟦 [`kopcentrum-galleria/index.astro`](src/pages/miljo/kopcentrum-galleria/index.astro)
    - 🟦 [`kyrka/index.astro`](src/pages/miljo/kyrka/index.astro)
    - 🟦 [`parkering-garage/index.astro`](src/pages/miljo/parkering-garage/index.astro)
    - 🟦 [`restaurang-bar-klubb/index.astro`](src/pages/miljo/restaurang-bar-klubb/index.astro)
    - 🟦 [`simhall/index.astro`](src/pages/miljo/simhall/index.astro)
    - 🟦 [`skola/index.astro`](src/pages/miljo/skola/index.astro)
    - 🟦 [`sporthall/index.astro`](src/pages/miljo/sporthall/index.astro)
    - 🟦 [`utomhusidrott/index.astro`](src/pages/miljo/utomhusidrott/index.astro)
    - 🟦 [`vard/index.astro`](src/pages/miljo/vard/index.astro)
  - 🟦 [`rastsignal/index.astro`](src/pages/rastsignal/index.astro)
  - 🟦 [`referenser/saffle-simhall/index.astro`](src/pages/referenser/saffle-simhall/index.astro)
  - 🟦 [`tjanster/`](src/pages/tjanster/) - tjänstesidor
    - 🟦 [`horslinga/index.astro`](src/pages/tjanster/horslinga/index.astro)
    - 🟦 [`kameraovervakning/index.astro`](src/pages/tjanster/kameraovervakning/index.astro)
- 🟩 [`src/styles/`](src/styles/) - gemensam design
  - 🟩 [`global.css`](src/styles/global.css) - global bas och återkommande komponenter
  - 🟩 [`miljo.css`](src/styles/miljo.css) - bas och komponenter för miljösidor
- 🟨 Sidmaterial och textkällor
  - 🟨 [`src/pages/miljo/**/Avab-hub-*.txt`](src/pages/miljo/) - gamla/externa underlag per miljösida
- 🟪 [`public/assets/`](public/assets/) - publika bilder som används med `/assets/filnamn.webp`
- ⚙️ Projektkonfiguration
  - ⚙️ [`astro.config.mjs`](astro.config.mjs)
  - ⚙️ [`package.json`](package.json)
  - ⚙️ [`tsconfig.json`](tsconfig.json)

## Viktiga principer

- `src/styles/miljo.css` är basen för miljösidorna.
- Använd `src/styles/global.css` och `src/styles/miljo.css` som aktiva designfiler.
- Undvik dubbla bildkopior när du kan. För publika bildvägar räcker `public/assets`.
- Skriv svenska tecken direkt i UTF-8.
