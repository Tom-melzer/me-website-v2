'use client';

import { useEffect } from 'react';
import { sitePath } from '../site-path';

export default function WebAppPage() {
  const href = sitePath('/#geraete');
  useEffect(() => { window.location.replace(href); }, [href]);
  return <main><p>Weiter zur Geräteübersicht: <a href={href}>ME auf allen Geräten</a></p></main>;
}
