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

Der GitHub-Import richtet keine automatische Veröffentlichung ein und ändert das bestehende Hosting nicht. Für einen Wechsel des Hosting-Anbieters muss die vorhandene Sites-/Cloudflare-Konfiguration angepasst werden.
