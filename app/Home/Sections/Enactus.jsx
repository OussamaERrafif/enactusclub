import React from 'react';
import './Enactus.css'; // Import the CSS file for animations

const Enactus = () => {

  return (
    <div className="enactus-container animate-fade-in"> {/* Add a container class for animations */}
      <h1 className='text-center text-2xl font-bold mb-11'>What is <span className='bg-yellow-300'>Enactus</span>: </h1>
      <div className="flex flex-col justify-center items-center w-full h-full" >
        <div className="flex justify-between w-1/2 md:block sm:block lg:flex">
          <div className="flex flex-col items-center animate-fade-in"> {/* Add an animation class */}
            <div className="w-40 h-40 rounded-full bg-yellow-400 flex justify-center items-center">
              <span className="text-2xl font-bold">EN</span>
            </div>
            <h1 className='text-black mt-2 text-xl font-bold'><span className='text-yellow-400'>EN</span>trepreneurial</h1>
            <p className="m-5 text-black text-center">Having the perspective to see an opportunity and the talent to create value from that opportunity.</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in"> {/* Add an animation class */}
            <div className="w-40 h-40 rounded-full bg-yellow-400 flex justify-center items-center">
              <span className="text-2xl font-bold">ACT</span>
            </div>
            <h1 className='text-black mt-2 text-xl font-bold'><span className='text-yellow-400'>Act</span>ion</h1>
            <p className="m-5 text-black text-center">The willingness to do something and the commitment to see it through even when the outcome is not guaranteed.</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in"> {/* Add an animation class */}
            <div className="w-40 h-40 rounded-full bg-yellow-400 flex justify-center items-center">
              <span className="text-2xl font-bold">US</span>
            </div>
            <h1 className='text-black mt-2 text-xl font-bold'><span className='text-yellow-400'>US</span> </h1>
            <p className="m-5 text-black text-center">A group of people who see themselves connected in some important way; individuals that are part of a greater whole.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enactus;