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

## Nuvarande struktur

```text
src/
  pages/
    index.astro
    miljo/
      simhall/index.astro
      sporthall/index.astro
      ...
    tjanster/
      horslinga/index.astro
      kameraovervakning/index.astro
  styles/
    global.css
    miljo.css
public/
  assets/
```

## Viktiga principer

- `src/styles/miljo.css` är basen för miljösidorna.
- Undvik att länka till gamla `avab.css` om filen inte finns i `public`.
- Undvik dubbla bildkopior när du kan. För publika bildvägar räcker `public/assets`.
- Skriv svenska tecken direkt i UTF-8.
