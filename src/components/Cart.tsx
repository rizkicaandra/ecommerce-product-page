import { motion } from 'framer-motion';

export default function Cart({
  totalItems,
  setTotalItems,
}: {
  readonly totalItems: number;
  readonly setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className='rounded-10px max-w-cart-mobile text-grey-500 text-preset-3 absolute top-20 right-2 z-10 flex w-full flex-col items-start gap-6 bg-white py-6 shadow-2xl md:top-25 lg:left-1/2 lg:translate-x-7/10'
    >
      <h2 className='px-4 font-bold'>Cart</h2>
      <div className='border-grey-100 w-full border-b-2 px-7'></div>

      {totalItems > 0 ? (
        <>
          <div className='flex items-center justify-center gap-4 px-6'>
            <img
              src='./image-product-1-thumbnail.jpg'
              alt='product'
              className='rounded-10px h-12.5 w-12.5'
            />

            <div>
              <p>Fall Limited Edition Sneakers</p>
              <span>
                $125.00 x {totalItems}{' '}
                <span className='ml-2 font-bold'>${125 * totalItems}.00</span>
              </span>
            </div>

            <button
              type='button'
              aria-label='delete'
              onClick={() => setTotalItems(0)}
              className='group'
            >
              <img
                src={'./icon-delete.svg'}
                alt='delete'
                className='h-4 w-3 cursor-pointer group-hover:opacity-60'
              />
            </button>
          </div>

          <button
            type='button'
            aria-label='checkout'
            className='text-grey-950 rounded-10px mx-6 cursor-pointer bg-orange-500 px-29.75 py-3.5 font-bold hover:bg-orange-300'
            onClick={() => setTotalItems(0)}
          >
            Checkout
          </button>
        </>
      ) : (
        <div className='flex h-32.5 w-full items-center justify-center font-bold'>
          <span>Your cart is empty</span>
        </div>
      )}
    </motion.div>
  );
}
