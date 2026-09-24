'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AccessButton from './access-button';

export default function SiteHeader() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = () => {
      let saved = null;
      try { saved = localStorage.getItem('me-theme'); } catch { /* Storage can be unavailable. */ }
      const dark = saved === 'dark' || (saved !== 'light' && preference.matches);
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      setDarkMode(dark);
    };
    syncTheme();
    preference.addEventListener('change', syncTheme);
    window.addEventListener('storage', syncTheme);
    return () => {
      preference.removeEventListener('change', syncTheme);
      window.removeEventListener('storage', syncTheme);
    };
  }, []);

  const toggleTheme = () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    setDarkMode(dark);
    try { localStorage.setItem('me-theme', dark ? 'dark' : 'light'); } catch { /* The switch still works without storage. */ }
  };

  return (
      <header className="site-header">
        <a className="brand" href="/#top" aria-label="ME Startseite">
          <Image src="/media/me-logo.png" alt="ME" width={42} height={42} priority />
          <span>AI.Support</span>
        </a>
        <nav id="main-nav" className={menuOpen ? 'is-open' : ''} aria-label="Hauptnavigation" onClick={() => setMenuOpen(false)}>
          <a href="/#funktionen">Funktionen</a>
          <a href="/#plattform">Plattform</a>
          <a href="/#sicherheit">Vertrauen</a>
          <a href="/#inhalte">Anwendung</a>
          <a href="/#geraete">Endgeräte</a>
          <a href="/#faq">FAQ</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
        <div className="header-actions">
          <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Schließen' : 'Menü'}</button>
          <AccessButton kind="login" className="header-cta" />
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Darkmode" aria-pressed={darkMode} title={darkMode ? 'Helle Ansicht aktivieren' : 'Darkmode aktivieren'}>
            <svg className="theme-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></svg>
            <svg className="theme-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
          </button>
        </div>
      </header>
  );
}
