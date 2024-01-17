import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden" style={{ paddingBottom: '56.25%' }}>
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={require('../imgs/enactusa.jpg')}
        alt="ENACTUS ENSA Agadir"
        width={1920}
        height={1080}
        style={{ objectFit: 'cover', maxHeight: '80vh' }}
      />
      <div
        className="absolute text-center w-full text-white"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to ENACTUS ENSA Agadir
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering young entrepreneurs for sustainable development in Morocco since 2003.
        </p>
        <div>
          <Button className="bg-yellow-300 text-gray-800 hover:bg-yellow-400" text="Explore More" onClick={() => console.log('Button clicked')} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
