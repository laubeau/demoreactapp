import React from 'react'

export const Newsletter = () => {
  return (
    <div className='w-full bg-black py-16 text-white' >
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
            <div className='lg:col-span-2'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-xl'>Want tips & trick to optimize your flow?</h1>
                <p>Sign up now</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter here' />
                <button className='py-3 my-6 ml-4 font-bold rounded-md  bg-green-700 w-[200px]  text-white '>Get Started</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;