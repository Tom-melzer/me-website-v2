import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildTenantLoginEntryUrl, fetchLoginTenants, normalizeLoginEmail, parseLoginTenants } from '../app/login-api.ts';

const tenant = { name: 'Testbetrieb', subdomain: 'testbetrieb' };
const reply = (body, status = 200) => async () => new Response(JSON.stringify(body), { status });

test('email is trimmed, plus addressing retained, invalid input rejected before fetching', async () => {
  assert.equal(normalizeLoginEmail(' user+service@example.com '), 'user+service@example.com');
  for (const input of ['', 'abc', 'a@b', 'a b@example.com']) {
    await assert.rejects(fetchLoginTenants(input, undefined, () => { throw new Error('must not fetch'); }), /gültige/);
  }
});

test('uses exact app login contract, never marketing host, safely encodes email', () => {
  const url = new URL(buildTenantLoginEntryUrl('testbetrieb', 'user+service@example.com'));
  assert.equal(url.origin, 'https://testbetrieb.frontend.meai.support');
  assert.equal(url.pathname, '/login');
  assert.equal(url.searchParams.get('email'), 'user+service@example.com');
  assert(url.search.includes('%2B'));
  for (const slug of ['evil.com', '//evil', 'x@evil', 'a/b', '-bad', 'bad-', 'a'.repeat(64), '']) {
    assert.throws(() => buildTenantLoginEntryUrl(slug, 'user@example.com'));
  }
});

test('supports no, one, multiple tenants and deduplicates matching subdomains', async () => {
  assert.deepEqual(await fetchLoginTenants('user@example.com', undefined, reply([])), []);
  assert.deepEqual(await fetchLoginTenants('user@example.com', undefined, reply([tenant])), [tenant]);
  const other = { name: 'Zweiter Betrieb', subdomain: 'second' };
  assert.deepEqual(parseLoginTenants([tenant, other, tenant]), [tenant, other]);
});

test('lookup only sends the submitted email to the known backend, no cookies or referrer', async () => {
  await fetchLoginTenants(' user+service@example.com ', undefined, async (input, options) => {
    const url = new URL(input);
    assert.equal(url.origin, 'https://backend.meai.support');
    assert.equal(url.pathname, '/api/tenant/get_tenants_by_email');
    assert.equal(url.searchParams.get('email'), 'user+service@example.com');
    assert.equal(options.method, 'GET');
    assert.equal(options.credentials, 'omit');
    assert.equal(options.referrerPolicy, 'no-referrer');
    assert.equal(options.cache, 'no-store');
    assert.equal(options.redirect, 'error');
    assert.equal(options.body, undefined);
    assert(options.signal instanceof AbortSignal);
    return new Response(JSON.stringify([tenant]));
  });
});

test('handles missing tenant, rate limit, server failure, invalid JSON and network errors', async () => {
  assert.deepEqual(await fetchLoginTenants('user@example.com', undefined, reply({}, 404)), []);
  await assert.rejects(fetchLoginTenants('user@example.com', undefined, reply({}, 429)), /Zu viele/);
  await assert.rejects(fetchLoginTenants('user@example.com', undefined, reply({}, 500)), /nicht verfügbar/);
  await assert.rejects(fetchLoginTenants('user@example.com', undefined, async () => new Response('<html>')), /ausgewertet/);
  await assert.rejects(fetchLoginTenants('user@example.com', undefined, async () => { throw new TypeError('Failed to fetch'); }), /nicht erreichbar/);
});

test('rejects invalid response shapes and unsafe tenant hosts', () => {
  for (const data of [null, {}, { tenants: [tenant] }, [null], [{}], [{ name: '', subdomain: 'a' }], [{ name: 'Fake', subdomain: 'evil.example.com' }]]) {
    assert.throws(() => parseLoginTenants(data), /ausgewertet/);
  }
});

test('abort signal cancels a pending lookup', async () => {
  const controller = new AbortController();
  const pending = fetchLoginTenants('user@example.com', controller.signal, async (_url, options) => {
    return new Promise((_resolve, reject) => options.signal.addEventListener('abort', () => reject(new Error('cancelled')), { once: true }));
  });
  controller.abort();
  await assert.rejects(pending, /abgebrochen/);
});
