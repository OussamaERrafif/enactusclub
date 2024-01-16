import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Imgh = ({ src, alt }) => {
  return (
    <div className='relative object-contain'>
      <Image className='w-full h-full filter grayscale-100' src={src} alt={alt} />
      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center w-full pl-10 z-10">
        <h1 className='text-white text-3xl font-bold m-10'>title</h1>
        <Button className="m-10" text={"Show More"} onClick={() => console.log("Button clicked")} />
      </div>
    </div>
  );
};

export default Imgh;
