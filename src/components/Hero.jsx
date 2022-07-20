import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green-500 font-bold p-2 uppercase'>Welcome Text</p>
            <h1 className='md:text-7xl sm:text-4xl text-4xl font-bold md:py-6'>Grow with data</h1>
            <div>
                <p className='md:text-5xl sm:text-3xl text-34xl font-bold pb-6'>fast, Flexible app</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400 px-20'> Lorem ipsum Text line one two  Lorem ipsum Text line one two  Lorem ipsum Text line one two </p>
            <button className='p-4 px-6 font-bold rounded-md  bg-green-700 w-fit mx-auto m-5 '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero