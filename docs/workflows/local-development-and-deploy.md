# Workflow: lokal utveckling och deployment

**Status:** Active

**Owner:** AVAB-projektet

**Scope:** Lokalt arbete i Windows/VS Code, Pull Request och produktionsdeploy

**Last reviewed:** 2026-08-24

## Grundregel

Utveckla inte direkt på `main`. Normalflödet är:

```text
main → hämta senaste version → ny branch → ändra → validera → commit
→ push → Pull Request → granskning → merge till main → automatisk deploy → verifiering
```

`origin` ska peka på `https://github.com/avab-eu/avab-eu.git`. Deploymentens tekniska
detaljer och secrets dokumenteras i [`../architecture/deployment.md`](../architecture/deployment.md).

## 1. Börja ett nytt arbete

Öppna `C:\Webbprojekt\AVAB` i VS Code och kontrollera först arbetskopian:

```powershell
git status --short --branch
git remote -v
```

Om status visar ändrade eller oversionerade filer: stanna och ta hand om dem innan branchbyte
eller uppdatering. Radera, återställ eller stasha inte arbete utan att först veta vad det är.

Om arbetskopian är ren, uppdatera `main` utan att skapa en merge commit:

```powershell
git switch main
git pull --ff-only origin main
```

Skapa sedan en branch med ett kort beskrivande namn:

```powershell
git switch -c feature/kort-beskrivning
```

För rena innehållsändringar används prefixen i
[`customer-chat-authoring.md`](customer-chat-authoring.md), exempelvis
`content/reference-<slug>`.

## 2. Installera och starta lokalt

Projektet kräver Node.js `>=22.12.0`. Kontrollera miljön:

```powershell
git --version
node --version
npm.cmd --version
code --version
```

Installera exakt de versioner som är låsta i `package-lock.json`:

```powershell
npm.cmd ci
```

Om npm på ett företags- eller antivirusfiltrerat nätverk rapporterar
`UNABLE_TO_VERIFY_LEAF_SIGNATURE`, använd Windows betrodda systemcertifikat för den aktuella
terminalsessionen och försök igen:

```powershell
$env:NODE_OPTIONS = "--use-system-ca"
npm.cmd ci
```

Stäng inte av SSL-verifiering med `strict-ssl=false`.

Starta utvecklingsservern:

```powershell
npm.cmd run dev
```

Öppna adressen som Astro visar, normalt `http://localhost:4321/`. Avsluta servern med
`Ctrl+C`. Formen `npm.cmd` används för att fungera även när PowerShell blockerar `npm.ps1`.

## 3. Validera ändringen

Kör projektets samlade kontroll före commit:

```powershell
npm.cmd run validate
```

Det kör AVAB:s guardrails och `npm run build`. Det finns för närvarande inget separat
lint- eller testscript i `package.json`.

Kontrollera därefter ändringarna:

```powershell
git status --short
git diff
```

## 4. Commit, push och Pull Request

Lägg endast till avsedda filer, inte hela arbetskopian slentrianmässigt:

```powershell
git add sokvag/till/fil
git diff --cached
git commit -m "Beskriv ändringen kort"
git push -u origin feature/kort-beskrivning
```

Skapa en Pull Request mot `main` på GitHub. Med GitHub CLI:

```powershell
gh auth status
gh auth login -h github.com
gh pr create --base main --web
```

`gh auth login` behövs bara när datorn inte redan har en giltig GitHub CLI-inloggning.
PR-checken `Validate pull request` måste vara grön. Merge sker först efter avsedd mänsklig
granskning och godkännande.

## 5. Deploy och produktionsverifiering

En merge till `main` triggar `.github/workflows/deploy.yml`. GitHub Actions installerar
dependencies, bygger med `DEPLOYMENT_URL=https://avab.eu/` och laddar upp `dist/` via FTP
till produktionsroot. Kör ingen separat manuell FTP-deploy i normalflödet.

Efter merge:

1. Öppna GitHub-repots flik **Actions** och kontrollera att workflowet **Deploy avab.eu** är grönt.
2. Öppna `https://avab.eu/` i ett privat webbläsarfönster.
3. Kontrollera startsidan och de routes som ändrades, både på desktop och mobil.
4. Kontrollera att HTTPS, bilder, navigation, metadata och viktiga länkar fungerar.
5. Vid fel: dokumentera felet och rätta via en ny branch och PR. Force-pusha eller gör inte
   otestade direktändringar på `main` eller produktionsservern.

## Nästa arbetspass

När en PR har mergats och nästa uppgift ska börja:

```powershell
git switch main
git pull --ff-only origin main
git switch -c feature/nasta-uppgift
npm.cmd ci
npm.cmd run dev
```
