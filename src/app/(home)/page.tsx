import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24'>
        <Image
          src='/illustrations/product-launch.svg'
          height={250}
          width={250}
          alt='Hero'
          priority
        />

        <div className='mx-auto flex flex-col items-start gap-4 lg:w-[52rem]'>
          <h1 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl'>
            Create wonderful bots with tiramisujs
          </h1>
          <p className='max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8'>
            A set of packages for interacting with discord, focused on
            performance and scalability.
          </p>
        </div>

        <div className='flex gap-4'>
          <a
            className='relative inline-flex items-center px-8 py-2 font-medium text-white border border-transparent rounded-md h-11 bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
            href='/signin'
          >
            Get Started
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4 ml-2'
            >
              <line x1='5' y1='12' x2='19' y2='12'></line>
              <polyline points='12 5 19 12 12 19'></polyline>
            </svg>
          </a>
          <a
            href='https://github.com/tiramisujs'
            target='_blank'
            rel='noreferrer'
            className='relative inline-flex items-center px-8 py-2 font-medium transition-colors bg-white border rounded-md h-11 border-slate-200 text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
          >
            GitHub
          </a>
        </div>
      </section>

      <hr className='border-slate-200' />

      <section className='container grid justify-center gap-6 py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[52rem]'>
          <h2 className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl'>
            Projects
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7'>
            Tiramisu comes in small packages that you can configure and
            predefine as you wish for your project.
          </p>
        </div>
        <div className='grid justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3'>
          <div className='relative p-2 overflow-hidden bg-white border rounded-lg shadow-2xl border-slate-100'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#f45e1e]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z'
                  fill='currentColor'
                />
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold text-slate-900'>Microservices</h3>
                <p className='text-sm text-slate-900'>
                  A set of services to interact with discord and tiramisujs.
                </p>
              </div>
            </div>
          </div>
          <div className='relative p-2 overflow-hidden bg-white border rounded-lg shadow-2xl border-slate-100'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#61DAFB]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z'
                  fill='currentColor'
                />
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold text-slate-900'>Framework</h3>
                <p className='text-sm text-slate-900'>
                  A more robust version built for commercial bots and small
                  bots.
                </p>
              </div>
            </div>
          </div>
          <div className='relative p-2 overflow-hidden bg-white border rounded-lg shadow-2xl border-slate-100'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#29d7c4]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z'
                  fill='currentColor'
                />
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold text-slate-900'>Common</h3>
                <p className='text-sm text-slate-900'>
                  A set of shared functions, classes, and utilities.
                </p>
              </div>
            </div>
          </div>
          <div className='relative p-2 overflow-hidden bg-white border rounded-lg shadow-2xl border-slate-100'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#ff006e]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z'
                  fill='currentColor'
                />
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold text-slate-900'>Biscuit</h3>
                <p className='text-sm text-slate-900'>
                  A lightweight version of our scaling-focused fraemework.
                </p>
              </div>
            </div>
          </div>
          <div className='relative p-2 overflow-hidden bg-white border rounded-lg shadow-2xl border-slate-100'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#ffd60a]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z'
                  fill='currentColor'
                />
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold text-slate-900'>Bots</h3>
                <p className='text-sm text-slate-900'>
                  A few bots created by team members of tiramisujs.
                </p>
              </div>
            </div>
          </div>
          <div className='relative p-2 overflow-hidden bg-white border rounded-lg shadow-2xl border-slate-100'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#edf2f4]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-12 h-12'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z'
                  fill='currentColor'
                />
              </svg>

              <div className='space-y-2'>
                <h3 className='font-bold text-slate-900'>Web</h3>
                <p className='text-sm text-slate-900'>
                  A web site where to organize courses and bots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
