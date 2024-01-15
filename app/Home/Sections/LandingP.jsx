import React, { useEffect, useState } from 'react';
import Button from "../components/Button";

const LandingP = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative"
      style={{
        paddingBottom: '56.25%',
      }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={require('../imgs/enactusa.jpg')}
        alt="animated gif"
        style={{
          objectFit: 'cover',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Grand Text
        </h1>
        <p
          className="text-xl md:text-2xl text-white mt-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          Sub Text
        </p>
        <Button text={"Show More"} onClick={() => console.log("Button clicked")} />
      </div>
    </div>
  );
};

export default LandingP;