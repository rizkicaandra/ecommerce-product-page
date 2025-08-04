'use client';

import { useState } from 'react';

export default function Product({
  totalItems,
  setTotalItems,
}: {
  readonly totalItems: number;
  readonly setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    /* Product */
    <div className='text-grey-500 lg:py-16.62 flex flex-col gap-4 px-6 md:gap-6 md:px-0 lg:gap-8'>
      {/* product title */}
      <h3 className='text-preset-6 md:text-preset-5 uppercase'>
        Sneaker Company
      </h3>

      {/* product description  */}
      <h2 className='text-preset-2 md:text-preset-1 text-grey-950 lg:-mt-2'>
        Fall Limited Edition Sneakers
      </h2>

      {/* product description */}
      <p className='text-preset-4 md:text-preset-3'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      {/* product price */}
      <div className='mt-4 flex items-center justify-between md:mt-0 md:flex-col md:items-start md:gap-2'>
        <div className='relative'>
          <span className='text-preset-2 text-grey-950 mr-4 md:mr-6'>
            $125.00
          </span>
          <span className='text-preset-3 bg-grey-950 absolute rounded-md px-2.5 font-bold text-white'>
            50%
          </span>
        </div>

        <span className='text-preset-3 line-through'>$250.00</span>
      </div>

      <div className='mt-4 flex flex-col gap-4 md:mt-0 md:flex-row'>
        {/* product quantity */}
        <div className='bg-grey-50 rounded-10px flex w-full items-center justify-between px-4.5 py-3.5 lg:max-w-39.25 lg:justify-normal lg:gap-12 lg:px-4 lg:py-3.75'>
          <button
            type='button'
            className='cursor-pointer hover:opacity-60 disabled:cursor-not-allowed'
            disabled={quantity < 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            <img src={'/icon-minus.svg'} alt='minus' />
          </button>
          <span className='text-preset-3 text-grey-950 font-bold'>
            {quantity}
          </span>
          <button
            type='button'
            className='cursor-pointer hover:opacity-60'
            onClick={() => setQuantity(quantity + 1)}
          >
            <img src={'/icon-plus.svg'} alt='plus' />
          </button>
        </div>

        {/* button add to cart */}
        <button
          type='button'
          className='text-grey-950 rounded-10px button-shadow-orange flex w-full cursor-pointer items-center justify-center gap-4 bg-orange-500 px-24 py-3.75 hover:bg-orange-300 disabled:cursor-not-allowed md:max-w-75 md:px-22.5 lg:max-w-none lg:px-14'
          disabled={quantity < 1}
          onClick={() => setTotalItems(totalItems + quantity)}
        >
          <img
            src='/icon-cart.svg'
            alt='cart'
            className='fill-grey-950 w-4.5 self-center'
          />
          <span className='text-preset-3 font-bold'>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
