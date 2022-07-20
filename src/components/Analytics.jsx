import React from 'react'
// import Image from 'next/image'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
             
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop'/>
             
            <div className='text-black flex flex-col justify-center px-4'>
                <p className='text-green-800 uppercase font-bold' >title description</p>
                <h1 className='font-bold md:text-4xl sm:text-2xl py-2' >My Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas voluptatibus id architecto eaque enim voluptate, nobis harum consequuntur. Similique in consequatur quis, delectus sapiente ex dolorem facilis suscipit officiis!</p>
                <button className='p-2 px-6 font-bold rounded-md  bg-green-700 w-fit text-white my-5 '>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics