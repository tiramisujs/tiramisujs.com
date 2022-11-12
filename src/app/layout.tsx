import Link from 'next/link';
import 'styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='bg-white text-slate-900 antialiased'>
      <head />
      <body className='min-h-screen'>
        <header className='container flex items-center justify-between py-4'>
          <div className='flex gap-6 md:gap-10'>
            <Link href='/' className='flex items-center space-x-2'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13 3H21V11H13V3ZM15 5H19V9H15V5Z'
                  fill='currentColor'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17 21V13H11V7H3V21H17ZM9 9H5V13H9V9ZM5 19L5 15H9V19H5ZM11 19V15H15V19H11Z'
                  fill='currentColor'
                />
              </svg>

              <span className='hidden font-bold sm:inline-block'>Tiramisu</span>
            </Link>
            <nav className='flex items-center gap-6 sm:gap-8'>
              <Link
                href='#'
                className='cursor-not-allowed text-sm font-medium opacity-60 hover:underline'
              >
                Courses
              </Link>
              <Link
                href='#'
                className='cursor-not-allowed text-sm font-medium opacity-60 hover:underline'
              >
                Blog
              </Link>
            </nav>
          </div>
          <nav>
            <Link
              href='https://github.com/tiramisujs'
              target="_blank"
              rel="noreferrer"
              className='relative inline-flex items-center rounded-md border border-transparent bg-brand-500 px-6 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
            >
              Github
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
