import { sitePath } from './site-path';
// Add the supplied destination URLs here to activate every matching button.
const accessLinks: Record<'register' | 'login', string | null> = {
  register: '/#anmelden',
  login: null,
};

export default function AccessButton({ kind = 'register', className = 'button button-primary' }: {
  kind?: 'register' | 'login';
  className?: string;
}) {
  const href = accessLinks[kind];
  const label = kind === 'login' ? 'Login' : 'Betrieb anmelden';
  if (href) return <a className={`${className} access-button`} href={sitePath(href)}>{label}</a>;
  return (
    <button className={`${className} access-button access-pending`} type="button" disabled title={`${label} – bald verfügbar`}>
      <span>{label}</span><small>Bald verfügbar</small>
    </button>
  );
}
