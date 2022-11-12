import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='container grid items-center justify-center gap-6 pt-8 md:pt-12 lg:pt-24'>
        <div className='flex flex-col items-start gap-4 md:max-w-[800px]'>
          <Link
            href='https://discord.com/invite/XNw2RZFzaP'
            className='group inline-flex items-center space-x-2 rounded-full text-sm font-medium'
          >
            <span>Follow development on Discord</span>
            <span className='rounded-full bg-slate-100 p-1 transition-colors group-hover:bg-slate-900 group-hover:text-white'>
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
                className='h-3 w-3'
              >
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <polyline points='12 5 19 12 12 19'></polyline>
              </svg>
            </span>
          </Link>
          <h1 className='text-3xl font-black leading-[1.1] sm:text-4xl md:text-6xl'>
            Create wonderful bots with tiramisujs
          </h1>
          <p className='max-w-[85%] text-lg leading-normal text-slate-700 sm:text-xl sm:leading-8'>
            A set of packages for interacting with discord, focused on
            performance and scalability.
          </p>
        </div>
      </section>

      <div className='md:py-18 container py-12 lg:py-24'>
        <hr className='border-slate-100' />
      </div>

      <section className='container grid justify-center gap-6'>
        <div className='mx-auto flex flex-col gap-4 md:max-w-[800px]'>
          <h2 className='text-2xl font-bold leading-[1.1] sm:text-3xl md:text-6xl'>
            Projects
          </h2>
          <p className='max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7'>
            Tiramisu is primarily inspired by Discord.js and Discordeno but it
            does not include a cache layer by default, we believe that you
            should not make software that does things it is not supposed to do.
          </p>
        </div>
        <div className='grid justify-center gap-4 sm:grid-cols-2 md:max-w-[860px] md:grid-cols-3'>
          <div className='relative overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-2xl'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#000000]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12'
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
                  A monorepo focused on services and communication layers.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-2xl'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#000000]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12'
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
                  A monorepo focused on functions, utilities and classes.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border border-slate-100 bg-white p-2 shadow-2xl'>
            <div className='flex h-[180px] flex-col justify-between rounded-md bg-[#000000]/20 p-6'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12'
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
                  A framework different from the rest focused on scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='md:py-18 container py-12 lg:py-24'>
        <hr className='border-slate-100' />
      </div>
    </>
  );
}
