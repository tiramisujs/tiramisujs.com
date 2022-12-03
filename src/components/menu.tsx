'use client';

import Link from 'next/link';

export function Menu() {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='items-center hidden space-x-2 md:flex'>
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

      <Link
        href='#'
        className='flex items-center text-lg font-semibold text-slate-600 sm:text-sm'
      >
        Courses
      </Link>
      <Link
        href='#'
        className='flex items-center text-lg font-semibold text-slate-600 sm:text-sm'
      >
        Blog
      </Link>
    </div>
  );
}
