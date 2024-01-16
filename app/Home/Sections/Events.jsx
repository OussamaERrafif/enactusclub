import React from 'react'
import Imgh from '../components/Imgh'
import project1 from '../imgs/project1.jpg'
import project2 from '../imgs/project2.jpg'

const Events = () => {
  return (
    <div>
        <h1 className='text-2xl text-center font-bold '>Our <span className='bg-yellow-300'>Events</span>:</h1>
        <div className='flex gap-11'>
            <Imgh src={project1} alt={"a1"} />
            <Imgh src={project2} alt={"a1"} />
        </div>
    </div>
  )
}

export default Events