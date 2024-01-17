"use client";

import { useState, useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import Enactus from './Sections/Enactus';
import Events from './Sections/Events';

const App = () => {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        // Add a class to make the navbar white when scrolling down
        setNavbarClass('bg-white');
      } else {
        // Remove the class when at the top of the page
        setNavbarClass('');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Transparent Navbar */}
      <div className={`p-4 md:fixed lg:fixed  w-full z-[11] transition-all ${navbarClass} sm:static  `}>
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="relative z-0">
        <Hero />
      </div>

      <div className='p-10 m-10'>
        <Enactus /> 
      </div>
      <div className='p-10 m-10'>
        <Events/>
      </div>
    </div>
  );
};

export default App;
