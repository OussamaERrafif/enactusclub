import React from 'react';
import circle from '../imgs/circle.png';

const Enactus = () => {
  const style = {
    backgroundImage: `url(${circle})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-full" style={style}>
        <div className="flex justify-between w-1/2">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex justify-center items-center">
              <span className="text-2xl font-bold">EN</span>
            </div>
            <h1 className='text-black mt-2'> <span className=' text-yellow-400'>EN</span>trepreneurial</h1>
            <p className="mt-2 text-black text-center">Having the perspective to see an opportunity and the talent to create value from that opportunity.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex justify-center items-center">
              <span className="text-2xl font-bold">ACT</span>
            </div>
            <h1>Action</h1>
            <p className="mt-2 text-black text-center">The willingness to do something and the commitment to see it through even when the outcome is not guaranteed.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex justify-center items-center">
              <span className="text-2xl font-bold">US</span>
            </div>
            <h1></h1>
            <p className="mt-2 text-black text-center">A group of people who see themselves connected in some important way; individuals that are part of a greater whole.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enactus;