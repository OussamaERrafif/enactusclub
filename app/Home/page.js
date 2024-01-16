"use client";

import Button from './components/Button';
import Card from './components/Card';
import Navbar from './Sections/Main';
import Hero from './Sections/Hero';
import Enactus from './Sections/Enactus';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Transparent Navbar */}
      <div className=" bg-opacity-50 p-4 fixed w-full z-10">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="relative z-0">
        <Hero />
      </div>
      <div className='p-10'>
      <Enactus /> 
      </div>
    </div>
  );
};

export default App;
