import Image from 'next/image';
import { contactHref } from './contact-button';

export default function SiteFooter({ note = 'Intelligentes Wissen für technischen Service.' }: { note?: string }) {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="/#top" aria-label="ME Startseite">
        <Image src="/media/me-logo.png" alt="ME" width={38} height={38} />
        <span>AI.Support</span>
      </a>
      <p>{note}</p>
      <nav aria-label="Kontakt und rechtliche Informationen">
        <a href={contactHref}>Kontakt</a>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="/rechtliches">Rechtliche Hinweise</a>
      </nav>
    </footer>
  );
}
