"use client";

import Button from './components/Button';
import Card from './components/Card';
import Navbar from './Sections/Main';
import LandingP from './Sections/LandingP';
import Enactus from './Sections/Enactus';

const App = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <LandingP />
      <Enactus />
      <div>
        <h1>lorem ipsum</h1>
      </div>
    </div>
  );
};

export default App;