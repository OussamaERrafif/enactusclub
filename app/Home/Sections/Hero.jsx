import React, { useEffect, useState } from 'react';
import Button from "../components/Button";
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative" style={{ paddingBottom: '56.25%' }}>
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={require("../imgs/enactusa.jpg")}  // Update the path based on your project structure
        alt="animated gif"
        width={1920}  // Update with the actual width of your image
        height={1080} // Update with the actual height of your image
        style={{ objectFit: 'cover' }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full pl-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          ENACTUS ENSA Agadir
        </h1>
        <p className="text-xl md:text-2xl text-white mt-4 text-center">
          jeunes entrepreneurs participent activement au développement durable au Maroc depuis 2003
        </p>
        <div className="text-right mt-11">
          <Button className="" text={"Show More"} onClick={() => console.log("Button clicked")} />
        </div>
      </div>
    </div>
  );
};

export default Hero;