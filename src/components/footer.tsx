'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className='container bg-white text-slate-600'>
      <div className='flex flex-col items-center justify-between gap-4 py-10 border-t border-t-slate-200 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
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
          </Link>
          <p className='text-sm leading-loose text-center md:text-left'>
            Built by{' '}
            <a
              href='https://github.com/tiramisujs/tiramisujs'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Tiramisu
            </a>
            , Illustrations by{" "}
            <a
              href="https://popsy.co"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Popsy
            </a>
            .
          </p>
        </div>
        <p className='text-sm text-center md:text-left'>
          The source code is available on{' '}
          <a
            href='https://github.com/tiramisujs/tiramisujs.com'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
