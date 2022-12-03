import Link from 'next/link';

export default function SignIn() {
  return (
    <div className='container grid flex-col items-center justify-center w-screen h-screen lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/'
        className='absolute inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center bg-transparent border border-transparent rounded-lg top-4 right-4 text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:right-8'
      >
        Home
      </Link>

      <div className='hidden h-full bg-slate-100 lg:block' />

      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-auto'
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

            <h1 className='text-2xl font-bold'>Sign In</h1>
            <p className='text-sm text-slate-600'>
              Use your discord account to sign in
            </p>
          </div>

          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <button className='inline-flex w-full items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 127.14 96.36'
                className='w-4 h-4 mr-2'
              >
                <path d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z' />
              </svg>
              Discord
            </button>
          </div>

          <p className='px-8 text-sm text-center text-slate-600'>
            By clicking continue, you agree to our{' '}
            <Link href='/' className='underline hover:text-brand'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href='/' className='underline hover:text-brand'>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
