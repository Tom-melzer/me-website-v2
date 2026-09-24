import { sitePath } from './site-path';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://me-ai-support-v2.tommelzer2.chatgpt.site'),
  title: 'ME AI.Support – Wissen, das mitarbeitet',
  description: 'Die intelligente Plattform für validiertes Herstellerwissen, ERP-verknüpften Anlagenkontext und geschütztes Erfahrungswissen im technischen Service.',
  icons: { icon: sitePath('/favicon.png'), apple: sitePath('/favicon.png') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title: 'ME AI.Support – Wissen, das mitarbeitet',
    description: 'Die intelligente Plattform für validiertes Herstellerwissen, ERP-verknüpften Anlagenkontext und geschütztes Erfahrungswissen im technischen Service.',
    images: [{ url: sitePath('/og.jpg'), width: 1400, height: 788, alt: 'ME AI.Support – Wissen, das mitarbeitet.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ME AI.Support – Wissen, das mitarbeitet',
    description: 'Die intelligente Plattform für validiertes Herstellerwissen, ERP-verknüpften Anlagenkontext und geschütztes Erfahrungswissen im technischen Service.',
    images: [sitePath('/og.jpg')],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('me-theme');document.documentElement.dataset.theme=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){document.documentElement.dataset.theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})();` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
