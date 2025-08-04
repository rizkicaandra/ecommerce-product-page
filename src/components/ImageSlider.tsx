'use client';

export default function ImageSlider({
  currentImage,
  setCurrentImage,
  setProductPreview,
}: {
  readonly currentImage: number;
  readonly setCurrentImage: (value: number) => void;
  readonly setProductPreview: (value: boolean) => void;
}) {
  const images = [
    '/image-product-1-thumbnail.jpg',
    '/image-product-2-thumbnail.jpg',
    '/image-product-3-thumbnail.jpg',
    '/image-product-4-thumbnail.jpg',
  ];

  function handleClick(index: number) {
    setCurrentImage(index);
  }

  return (
    <div className='lg:w-full'>
      <div className='md:rounded-15px relative h-75 w-full overflow-hidden md:my-12 md:h-72.5 lg:my-0 lg:h-111.25 lg:w-112'>
        <button
          type='button'
          className='cursor-pointer hover:opacity-75'
          onClick={() => setProductPreview(true)}
        >
          <img
            src={`/image-product-${currentImage}.jpg`}
            alt='product'
            className='lg:rounded-15px absolute -top-9 w-full object-cover md:-top-48 lg:top-0 lg:h-fit'
          />
        </button>
        <div className='absolute flex h-full w-full items-center justify-between p-4 lg:hidden'>
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white'
          >
            <img src='/icon-previous.svg' alt='previous' className='w-2' />
          </button>
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white'
          >
            <img src='/icon-next.svg' alt='next' className='w-2' />
          </button>
        </div>
      </div>

      <div className='mt-8 hidden gap-8 lg:flex'>
        {images.map((image, index) => (
          <button
            key={image}
            type='button'
            onClick={() => handleClick(index + 1)}
            className='w-22 cursor-pointer hover:opacity-65'
          >
            <img
              src={image}
              alt='product'
              className={`rounded-10px w-full border-2 object-center ${index + 1 === currentImage ? 'border-orange-500 opacity-65' : 'border-white'}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
