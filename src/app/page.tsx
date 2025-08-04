'use client';

import ImageSlider from '@/components/ImageSlider';
import Navbar from '@/components/Navbar';
import Product from '@/components/Product';
import ProductPreview from '@/components/ProductPreview';
import { useState } from 'react';

export default function Home() {
  const [productPreview, setProductPreview] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      {productPreview && (
        <ProductPreview
          setProductPreview={setProductPreview}
          firstImage={currentImage}
        />
      )}
      <div className='md:px-20 md:pt-7 md:pb-16 lg:flex lg:flex-col lg:items-center lg:justify-center'>
        <Navbar totalItems={totalItems} setTotalItems={setTotalItems} />

        <main className='lg:px-11.1 lg:max-w-desktop flex flex-col gap-6 md:gap-0 lg:mt-24 lg:flex-row lg:gap-32'>
          <ImageSlider
            setProductPreview={setProductPreview}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
          <Product totalItems={totalItems} setTotalItems={setTotalItems} />
        </main>
      </div>
    </>
  );
}
