import { sitePath } from './site-path';
import LoginButton from './login-button';

export default function AccessButton({ kind = 'register', className = 'button button-primary' }: {
  kind?: 'register' | 'login';
  className?: string;
}) {
  if (kind === 'login') return <LoginButton className={className} />;
  return <a className={`${className} access-button`} href={sitePath('/#anmelden')}>Betrieb anmelden</a>;
}
