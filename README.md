# ME AI.Support – Webseite V2

Aktueller Stand der ME-Landingpage, übernommen am 24. September 2026.

- Webseite: https://me-ai-support-v2.tommelzer2.chatgpt.site/
- Ausgangsstand: `4c3d1f84bb23cf062651a3a2c827a23e6220473b`
- Dieses Repository enthält den aktuellen Quellcode als Snapshot, nicht die frühere Sites-Versionshistorie.
- Die bestehende V1 und die veröffentlichte V2 bleiben unverändert.

## Lokal starten

Voraussetzung: Node.js ab 22.13.0 und npm.

```sh
npm ci
npm run dev
```

Die im Terminal angezeigte lokale Adresse im Browser öffnen.

## Prüfen und bauen

```sh
npx tsc --noEmit
npm run build
```

## Aufbau

- `app/`: Landingpage, Komponenten, Formular sowie Impressum und Datenschutz.
- `public/media/`: App-Mockups einschließlich der bestehenden Verpixelungen.
- `public/fonts/`: lokal eingebundene Onest-Schrift und deren Lizenz.
- `vite.config.ts`: Vinext/Vite mit Cloudflare- und Sites-Anbindung.
- `.openai/hosting.json`: Zuordnung zur bestehenden V2 auf Sites.

Installierte Abhängigkeiten, lokale Umgebungsdateien und erzeugte Build-Dateien sind nicht Bestandteil des Repositories.

## Registrierung und Veröffentlichung

Das Anmeldeformular sendet echte Anfragen an
`https://backend.meai.support/api/inquiry/create`.
Keine Testanfragen ohne Abstimmung absenden. Bei einer neuen Domain muss das Backend diese für browserseitige Anfragen zulassen.

## GitHub Pages

Änderungen auf `main` werden durch `.github/workflows/nextjs.yml` automatisch statisch gebaut, geprüft und auf GitHub Pages veröffentlicht. In den Repository-Einstellungen muss Pages auf „GitHub Actions“ stehen.

Der Workflow verwendet Node.js 24 und liest Domain und Unterverzeichnis aus der Pages-Konfiguration. Die vorhandene ES-Modul-Konfiguration wird nicht durch eine generierte CommonJS-Datei überschrieben.

**Nach einer Domainänderung unbedingt neu bauen:** Unter Actions → Deploy Next.js site to Pages → Run workflow ausführen. Eine Änderung der „Custom domain“ allein schreibt die bereits exportierten CSS-, JavaScript- und Bildpfade nicht um. `scripts/pages-config.mjs` leitet beim nächsten Build alle Pfade aus der aktuellen öffentlichen Pages-URL ab: bei `https://meai.support/` ohne Repository-Präfix, bei der GitHub-Projektadresse mit `/me-website-v2`.

Lokaler Test für die Projektadresse:

```sh
NEXT_PUBLIC_BASE_PATH=/me-website-v2 NEXT_PUBLIC_SITE_ORIGIN=https://tom-melzer.github.io NEXT_PUBLIC_HOSTING=github-pages npm run build:pages
NEXT_PUBLIC_BASE_PATH=/me-website-v2 node scripts/check-pages.mjs
```

Die statischen Dateien liegen danach unter `out/`. Interne Links, Bilder, Schriften und die Geräte-Weiterleitung unterstützen das Unterverzeichnis. Die Registrierung bleibt direkt mit dem bestehenden ME-Backend verbunden. Ein automatischer Test verschickt keine Registrierungen.

Die bisherigen Sites-Veröffentlichungen werden durch diesen Workflow nicht verändert. `npm run build` bleibt der bisherige Vinext-Build; GitHub Pages verwendet ausdrücklich `npm run build:pages`.
