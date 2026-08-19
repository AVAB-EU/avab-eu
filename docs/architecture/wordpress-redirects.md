# WordPress → Astro redirect-mappning

```text
Status: Active
Owner: Go-live
Last reviewed: 2026-08-19
Replaces: —
```

Dokumenterar mappningen mellan gamla WordPress-URL:er på `avab.eu` och nya Astro-routes, samt vad som redan är implementerat kontra vad som kräver serverkonfiguration vid cutover.

## Implementerat i Astro (`astro.config.mjs` → `redirects`)

Dessa 302/301-liknande redirects hanteras av Astro själv i produktionsbuilden och kräver ingen serverkonfiguration:

| Gammal URL | Ny route |
|---|---|
| `/om-2/` | `/om-oss/` |
| `/skola/` | `/miljo/skola/` |
| `/simhall/` | `/miljo/simhall/` |
| `/sporthall/` | `/miljo/sporthall-arena/` |
| `/miljo/sporthall/` | `/miljo/sporthall-arena/` |
| `/horslingor/` | `/tjanster/horslinga/` |
| `/sakerhetskameror/` | `/tjanster/kameraovervakning/` |
| `/minnebergsskolan-arvika/` | `/referenser/minnebergsskolan-arvika/` |
| `/saffle-simhall/` | `/referenser/saffle-simhall/` |
| `/ljudprojektering/` | `/tjanster/projektering/` |
| `/taluppfattbarhet-i-publika-lokaler/` | `/tjanster/taluppfattbarhet/` |
| `/akustik/` | `/tjanster/taluppfattbarhet/` |
| `/bakgrundsljud/` | `/tjanster/bakgrundsmusik/` |

Alla 13 mål verifierade mot faktiska routes i `src/pages/` 2026-08-19. Astros `redirects`-config skriver ut statiska HTML-redirect-filer i produktionsbuilden (`build.format: 'directory'` i `astro.config.mjs`), så dessa fungerar även utan server-side rewrite-regler — men en `.htaccess`-nivå-redirect enligt nedan ger snabbare (riktig 301) respons och fångar eventuella url-varianter Astro inte matchar exakt.

## Domän-normalisering — KRÄVER serverkonfiguration vid cutover

Astro har ingen mekanism för host-nivå-redirects (www → apex, http → https). Detta måste ske i webbservern (Apache/LiteSpeed) eller DNS/CDN-lagret. Nedan är en FÖRBEREDD, ej installerad, `.htaccess` för Apache/LiteSpeed:

```apache
RewriteEngine On

# www.avab.eu -> avab.eu (bevara path + querystring)
RewriteCond %{HTTP_HOST} ^www\.avab\.eu$ [NC]
RewriteRule ^(.*)$ https://avab.eu/$1 [L,R=301]

# http:// -> https:// (avab.eu och www.avab.eu, oavsett ordning på reglerna ovan)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://avab.eu%{REQUEST_URI} [L,R=301]

# 404
ErrorDocument 404 /404.html
```

**Detta är INTE installerat på produktionsservern.** Det är ett förberett underlag för manuell installation vid cutover, enligt `docs/README.md` regelhierarki och go-live-migrationschecklistan. Verifiera faktisk servertyp (Apache vs LiteSpeed vs Nginx) innan installation — reglerna ovan är skrivna för Apache/LiteSpeed `mod_rewrite`-syntax.

## Manuell verifiering krävs vid cutover

- ⚠️ Faktisk webbroot och servertyp på `avab.eu`.
- ⚠️ Att `.htaccess` ovan faktiskt fungerar på den riktiga hostingmiljön (testa varje redirect-rad efter installation).
- ⚠️ SSL-certifikat giltigt för både `avab.eu` och `www.avab.eu` (www måste fortfarande terminera TLS innan redirecten kan köras).
- ⚠️ Att gamla WordPress-filer inte konkurrerar med de nya reglerna (t.ex. gammal `index.php`-rewrite ska INTE följa med).
