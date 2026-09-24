import { sitePath } from './site-path';
import Image from './site-image';
import { contactHref } from './contact-button';

export default function SiteFooter({ note = 'Intelligentes Wissen für technischen Service.' }: { note?: string }) {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href={sitePath('/#top')} aria-label="ME Startseite">
        <Image src="/media/me-logo.png" alt="ME" width={38} height={38} />
        <span>AI.Support</span>
      </a>
      <p>{note}</p>
      <nav aria-label="Kontakt und rechtliche Informationen">
        <a href={contactHref}>Kontakt</a>
        <a href={sitePath('/impressum/')}>Impressum</a>
        <a href={sitePath('/datenschutz/')}>Datenschutz</a>
        <a href={sitePath('/rechtliches/')}>Rechtliche Hinweise</a>
      </nav>
    </footer>
  );
}
