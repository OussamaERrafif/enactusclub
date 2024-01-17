import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import '../Sections/Global.css';

const Imgh = ({ src, alt, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='flex flex-col max-w-full min-w-[200px] md:min-w-[300px] sm:min-w-[150px] rounded overflow-hidden shadow-lg transition-transform duration-500 ease-in-out relative m-4'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className={`border-l-4 border-b-4 border-yellow-300 w-full h-full object-fit object-center transition-transform duration-500 ease-in-out ${
          isHovered ? 'scale-110 grayscale transition-filter' : 'reverse-grayscale'
        } z-0`}
        src={src}
        alt={alt}
      />
      {isHovered && (
        <div className="animate-fade-up animate-once absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 z-10">
          <h1 className='animate-fade-up animate-once text-white lg:text-3xl md:text-lg sm:text-lg font-bold m-4 border-4 p-2 border-yellow-300'>{title}</h1>
          <Button className="animate-fade-up animate-once m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12" text={"Show More"} onClick={() => console.log("Button clicked")} />
        </div>
      )}
    </div>
  );
};

export default Imgh;
