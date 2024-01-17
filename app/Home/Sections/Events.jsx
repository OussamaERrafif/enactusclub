import React from 'react';
import Imgh from '../components/Imgh';
import './Global.css';
import project1 from '../imgs/project1.jpg';
import project2 from '../imgs/project2.jpg';

const Events = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl text-center font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        Our <span className="bg-yellow-300">Events</span>:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
        <Imgh src={project1} alt={"a1"} title={"Enactus Days"} />
        <Imgh src={project2} alt={"a1"} title={"Women Entrepreneur"} />
      </div>
    </div>
  );
};

export default Events;
