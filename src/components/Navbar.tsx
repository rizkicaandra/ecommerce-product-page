'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Cart from './Cart';

export default function Navbar({
  totalItems,
  setTotalItems,
}: {
  readonly totalItems: number;
  readonly setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}) {
  const navbar = [
    {
      title: 'Collections',
      link: '#',
    },
    {
      title: 'Men',
      link: '#',
    },
    {
      title: 'Women',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
    {
      title: 'Contact',
      link: '#',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='md:border-grey-100 lg:max-w-desktop flex items-center justify-between p-6 md:border-b-[1px] md:p-0 md:pb-8 lg:w-full'>
      {/* left section: logo + menu + nav items */}
      <div className='flex items-center gap-4 lg:gap-14'>
        {/* menu */}
        <button
          className='w-6 cursor-pointer hover:opacity-80 lg:hidden'
          type='button'
          aria-label='menu'
          onClick={toggleMenu}
        >
          <img src='/icon-menu.svg' alt='icon-menu' />
        </button>

        {/* logo */}
        <div className='w-34.5'>
          <img src='/logo.svg' alt='logo' className='w-full' />
        </div>

        {/* nav items */}
        <nav className='text-grey-500 text-preset-4 hidden items-center gap-8 lg:flex'>
          {navbar.map((nav, index) => (
            <a
              key={nav.title + index}
              href={nav.link}
              className='hover:text-grey-950 relative transition-colors duration-200 before:absolute before:top-17 before:left-0 before:h-1 before:w-0 before:bg-orange-500 before:transition-transform before:duration-200 hover:before:w-full'
            >
              {nav.title}
            </a>
          ))}
        </nav>

        {isOpen && (
          <div className='fixed inset-0 z-20 flex h-screen w-full overflow-y-hidden transition-all duration-200 ease-in-out'>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className='max-w-navbar-left-mobile md:max-w-navbar-left-tablet h-screen w-full bg-white p-6 md:px-20 md:py-12'
            >
              <button
                type='button'
                className='mb-14 w-3.5'
                onClick={toggleMenu}
              >
                <img
                  src={'/icon-close.svg'}
                  alt='icon-close'
                  className='w-full'
                  aria-label='close'
                />
              </button>

              <nav className='flex flex-col items-start justify-center gap-6 text-lg leading-6 font-bold'>
                {navbar.map((nav, index) => (
                  <a key={nav.title + index} href={nav.link} className=''>
                    {nav.title}
                  </a>
                ))}
              </nav>
            </motion.div>

            <button
              type='button'
              onClick={toggleMenu}
              className='flex-1 bg-black opacity-75'
            ></button>
          </div>
        )}
      </div>

      {/* right section: cart + avatar */}
      <div className='flex items-center gap-6 md:gap-12'>
        {/* cart */}
        <button
          className='group relative flex w-5.5 cursor-pointer items-center justify-center'
          type='button'
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <svg
            width='22'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full'
          >
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='#69707D'
              fillRule='nonzero'
              className='group-hover:fill-grey-950'
            />
          </svg>

          {totalItems > 0 && (
            <span className='text-bold absolute bottom-2 left-2 rounded-md bg-orange-500 px-2 pt-0.5 text-[10px] text-white'>
              {totalItems}
            </span>
          )}
        </button>

        {/* cart container */}
        {isCartOpen && (
          <Cart totalItems={totalItems} setTotalItems={setTotalItems} />
        )}

        {/* avatar */}
        <div className='w-6 hover:border-2 hover:border-orange-500 md:w-12.5 lg:rounded-full'>
          <img src='/image-avatar.png' alt='image-avatar' className='w-full' />
        </div>
      </div>
    </nav>
  );
}
