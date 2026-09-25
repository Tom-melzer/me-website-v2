import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const routes = ['', 'impressum/', 'datenschutz/', 'rechtliches/', 'web-app/'];
let checked = 0;
for (const route of routes) {
  const file = join('out', route, 'index.html');
  assert(existsSync(file), 'Missing static route: ' + file);
  const html = readFileSync(file, 'utf8');
  assert(!/tel:|930093|8920-0/.test(html), 'Removed phone number still present: ' + file);
  assert(!/60\.000|Über 30 Hersteller/.test(html), 'Outdated document/manufacturer count: ' + file);
  if (route !== 'web-app/') assert(/<a\b[^>]*href="https:\/\/frontend\.meai\.support"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*>Login<\/a>/.test(html), 'Login must open the ME app safely in a new tab: ' + file);
  for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    assert(url.startsWith(basePath + '/'), 'URL outside Pages base path: ' + url);
    const path = decodeURIComponent(url.slice(basePath.length).split(/[?#]/)[0]);
    assert(existsSync(join('out', path)), 'Missing linked file: ' + url);
    checked++;
  }
}
const home = readFileSync('out/index.html', 'utf8');
assert(home.includes('Ihr Firmenwissen. Geschützt.'), 'Protected company area copy missing');
assert(!home.includes('Die Informationswebsite zeigt Funktionen'), 'Old company area copy still present');
assert(home.includes(basePath + '/media/wissen-ohne-dateianzahl.png'), 'Hero missing');
assert(home.includes(basePath + '/datenschutz/'), 'Privacy link missing');
assert(!home.includes('/_next/image?'), 'Server-side image optimizer cannot run on Pages');
const cssDir = 'out/_next/static/css';
assert(existsSync(cssDir), 'CSS output missing');
const css = readdirSync(cssDir).filter(f => f.endsWith('.css')).map(f => readFileSync(join(cssDir, f), 'utf8')).join('');
assert(css.includes('Onest'), 'Onest declaration missing');
assert(!css.includes("url('/fonts/"), 'Font path is not Pages-safe');
console.log('Static routes and ' + checked + ' internal links/assets verified.');
