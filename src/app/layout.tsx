import 'styles/globals.css';

import { Inter } from '@next/font/google';

const font = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`bg-white font-sans text-slate-900 antialiased ${font.variable}`}
    >
      <head />
      <body className='min-h-screen'>{children}</body>
    </html>
  );
}
