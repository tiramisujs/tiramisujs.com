import 'styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='antialiased bg-white text-slate-900'>
      <head />
      <body className='min-h-screen'>{children}</body>
    </html>
  );
}
