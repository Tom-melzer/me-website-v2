export const contactEmail = 'contact@meai.support';
export const contactHref = `mailto:${contactEmail}`;

export default function ContactButton({ className = 'button button-ghost' }: { className?: string }) {
  return (
    <a className={`${className} contact-button`} href={contactHref} title={`E-Mail an ${contactEmail} schreiben`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
      Kontakt
    </a>
  );
}
