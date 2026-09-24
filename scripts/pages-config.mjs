import assert from 'node:assert/strict';
import { appendFileSync } from 'node:fs';

// Use one canonical URL for both metadata and every exported resource path.
// Custom domains normally use '/', repository Pages sites use '/repo-name/'.
const url = new URL(process.env.PAGES_URL);
assert(['http:', 'https:'].includes(url.protocol), 'Invalid Pages URL protocol');
assert(!url.search && !url.hash && !url.username && !url.password, 'Invalid Pages URL');
const basePath = url.pathname.replace(/\/+$/, '');
const outputs = `base_path=${basePath}\norigin=${url.origin}\n`;
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, outputs);
console.log(`Public site: ${url.origin}${basePath}/`);
console.log(`Resource prefix: ${basePath || '(domain root)'}`);
