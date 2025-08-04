import { useState } from 'react';

export default function ProductPreview({
  firstImage,
  setProductPreview,
}: {
  readonly firstImage: number;
  readonly setProductPreview: (value: boolean) => void;
}) {
  const [currentImage, setCurrentImage] = useState(firstImage);

  const images = [
    '/image-product-1-thumbnail.jpg',
    '/image-product-2-thumbnail.jpg',
    '/image-product-3-thumbnail.jpg',
    '/image-product-4-thumbnail.jpg',
  ];

  function handleClick(index: number) {
    let newIndex = 0;

    if (index > 4) newIndex = 1;
    else if (index < 1) newIndex = 4;
    else newIndex = index;

    setCurrentImage(newIndex);
  }
  return (
    <div className='bg-grey-950/85 fixed z-50 flex h-screen w-full flex-col items-center justify-center'>
      <div className='z-100 flex w-full max-w-137.5 flex-col items-end'>
        {/* close */}
        <button
          type='button'
          onClick={() => setProductPreview(false)}
          className='group w-5 cursor-pointer'
        >
          <svg
            width='14'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full'
          >
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#fff'
              fillRule='evenodd'
              className='group-hover:fill-orange-500'
            />
          </svg>
        </button>

        {/* product */}
        <div className='relative mt-6 w-137.5'>
          <img
            src={`/image-product-${currentImage}.jpg`}
            alt='product'
            className='rounded-15px w-full'
          />
          <div className='absolute top-1/2 -left-7 flex w-full -translate-y-1/2 justify-between'>
            {/* previous */}
            <button
              type='button'
              onClick={() => handleClick(currentImage - 1)}
              className='group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white'
            >
              <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11 1 3 9l8 8'
                  stroke='#1D2026'
                  strokeWidth='3'
                  fill='none'
                  fillRule='evenodd'
                  className='group-hover:stroke-orange-500'
                />
              </svg>
            </button>

            {/* next */}
            <button
              type='button'
              onClick={() => handleClick(currentImage + 1)}
              className='group absolute -right-14 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white'
            >
              <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='m2 1 8 8-8 8'
                  stroke='#1D2026'
                  strokeWidth='3'
                  fill='none'
                  fillRule='evenodd'
                  className='group-hover:stroke-orange-500'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* product thumbnails */}
        <div className='mt-10 flex w-full items-center justify-evenly gap-8 px-10'>
          {images.map((image, index) => (
            <button
              key={image}
              type='button'
              className='w-22 cursor-pointer hover:opacity-90'
              onClick={() => handleClick(index + 1)}
            >
              <img
                src={image}
                alt='product'
                className={`rounded-10px w-full border-2 object-center ${index + 1 === currentImage ? 'border-orange-500 opacity-70' : 'border-none'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
