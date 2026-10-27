'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { buildTenantLoginEntryUrl, fetchLoginTenants, normalizeLoginEmail, type LoginTenant } from './login-api';
import { sitePath } from './site-path';

function LoginDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const request = useRef<AbortController | null>(null);
  const loginTab = useRef<Window | null>(null);
  const [email, setEmail] = useState('');
  const [tenants, setTenants] = useState<LoginTenant[]>([]);
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [readyUrl, setReadyUrl] = useState('');

  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    element?.querySelector<HTMLInputElement>('#login-email')?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      request.current?.abort();
      loginTab.current?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function closeWaitingTab() {
    loginTab.current?.close();
    loginTab.current = null;
  }

  function openWaitingTab() {
    // Reserve the tab during the user gesture, before the asynchronous lookup.
    // Otherwise browsers may block the later redirect as a popup.
    closeWaitingTab();
    const tab = window.open('about:blank', '_blank');
    if (tab) {
      tab.opener = null;
      tab.document.title = 'ME – Login wird vorbereitet';
      tab.document.documentElement.lang = 'de';
      tab.document.body.textContent = 'ME – Ihre Firmenzuordnung wird geprüft. Der Login wird gleich geöffnet.';
      const meta = tab.document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'no-referrer';
      tab.document.head.appendChild(meta);
    }
    loginTab.current = tab;
  }

  function redirect(subdomain: string, address: string) {
    const url = buildTenantLoginEntryUrl(subdomain, address);
    setReadyUrl(url);
    const tab = loginTab.current;
    if (tab && !tab.closed) {
      try { tab.location.replace(url); loginTab.current = null; }
      catch { closeWaitingTab(); }
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current || loading) return;
    setError('');
    let address: string;
    try { address = normalizeLoginEmail(email); }
    catch (cause) { setError((cause as Error).message); return; }
    if (tenants.length && !tenants.some(tenant => tenant.subdomain === selected)) {
      setError('Bitte wählen Sie Ihre Firma aus.');
      return;
    }
    setReadyUrl('');
    openWaitingTab();
    if (tenants.length) {
      redirect(selected, address);
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    setLoading(true);
    try {
      const matches = await fetchLoginTenants(address, controller.signal);
      if (controller.signal.aborted) return;
      if (!matches.length) {
        closeWaitingTab();
        setError('Zu dieser E-Mail-Adresse wurde keine Firma gefunden. Bitte prüfen Sie Ihre Adresse oder kontaktieren Sie uns.');
      } else if (matches.length === 1) {
        redirect(matches[0].subdomain, address);
      } else {
        closeWaitingTab();
        setTenants(matches);
      }
    } catch (cause) {
      if (!controller.signal.aborted) {
        closeWaitingTab();
        setError(cause instanceof Error ? cause.message : 'Die Anmeldung konnte nicht vorbereitet werden. Bitte versuchen Sie es erneut.');
      }
    } finally {
      if (!controller.signal.aborted) { setLoading(false); request.current = null; }
    }
  }

  return <dialog ref={dialog} className="login-dialog" aria-labelledby="login-title" aria-describedby="login-description" onCancel={onClose} onClose={onClose} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  }}>
    <button type="button" className="login-close" aria-label="Login schließen" onClick={onClose}>×</button>
    <span className="section-kicker">Ihr Zugang zu ME</span>
    <h2 id="login-title">Bei ME anmelden</h2>
    <p id="login-description">Geben Sie Ihre E-Mail-Adresse ein. Wir ordnen Sie Ihrer Firma zu und öffnen den passenden Login in einem neuen Tab.</p>
    <form onSubmit={handleSubmit} aria-busy={loading}>
      <label htmlFor="login-email">E-Mail-Adresse</label>
      <input id="login-email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required maxLength={254} autoFocus value={email} disabled={loading || tenants.length > 0 || !!readyUrl} onChange={event => { setEmail(event.target.value); setError(''); }} />
      {tenants.length > 0 && <>
        <label htmlFor="login-tenant">Bei welcher Firma möchten Sie sich anmelden?</label>
        <select id="login-tenant" required value={selected} disabled={!!readyUrl} onChange={event => { setSelected(event.target.value); setError(''); }}>
          <option value="" disabled>Firma auswählen</option>
          {tenants.map(tenant => <option key={tenant.subdomain} value={tenant.subdomain}>{tenant.name}</option>)}
        </select>
      </>}
      {error && <p className="login-error" role="alert">{error}</p>}
      <div aria-live="polite">{loading && <p>Firma wird ermittelt …</p>}{readyUrl && <p>Der Login wurde vorbereitet. Falls sich kein neuer Tab geöffnet hat: <a href={readyUrl} target="_blank" rel="noopener noreferrer">Login öffnen</a>.</p>}</div>
      <p className="login-privacy">Erst mit „Weiter zum Login“ senden Sie Ihre E-Mail-Adresse an das ME-Backend zur Firmenzuordnung. Ihr Passwort geben Sie ausschließlich im anschließenden Login ein. <a href={sitePath('/datenschutz/#login')} target="_blank" rel="noopener noreferrer">Datenschutz</a></p>
      <div className="login-actions">
        <button type="button" className="login-secondary" onClick={onClose}>Schließen</button>
        {(tenants.length > 0 || readyUrl) && <button type="button" className="login-secondary" onClick={() => { setTenants([]); setSelected(''); setReadyUrl(''); setError(''); }}>Andere E-Mail</button>}
        {!readyUrl && <button type="submit" className="button button-primary" disabled={loading || (tenants.length > 0 && !selected)}>{loading ? 'Bitte warten …' : 'Weiter zum Login'}</button>}
      </div>
    </form>
  </dialog>;
}

export default function LoginButton({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return <>
    <button ref={trigger} className={`${className} access-button`} type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}>Login</button>
    {open && createPortal(<LoginDialog onClose={() => { setOpen(false); requestAnimationFrame(() => trigger.current?.focus()); }} />, document.body)}
  </>;
}
