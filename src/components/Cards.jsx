import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='bg-white text-black py-[10rem] px-4 w-full'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl bg-white flex flex-col p-4 my-4 border rounded-lg text-center hover:scale-105 duration-300'>
                <img src={Single} alt='icons' className='mx-auto bg-white w-20 mt-[-40px]' />
                <h2 className='text-2xl py-4 font-bold'>
                    Title Card 1
                </h2>
                <p className='text-5xl  font-bold'>$999</p>
                <div>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum lines</p>
                    <p className='py-2 border-b mx-8'>Lorem Ipsum lines</p>
                    <p className='py-2 border-b mx-8'>Lorem Ipsum lines</p>
                </div>
                <button className='p-2 px-4 font-bold rounded-md  bg-green-700 w-[150px] mx-auto text-white my-5 '>Get Started</button>
            </div>

            <div className='w-full shadow-xl lg:scale-105 bg-white flex flex-col p-4 my-4 border rounded-lg mx-auto text-center hover:scale-105 duration-300'>
                <img src={Double} alt='icons' className='mx-auto bg-white w-20 mt-[-40px]' />
                <h2 className='text-2xl py-4 font-bold'>
                    Title Card 1
                </h2>
                <p className='text-5xl  font-bold'>$999</p>
                <div>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum lines</p>
                    <p className='py-2 border-b mx-8'>Lorem Ipsum lines</p>
                    <p className='py-2 border-b mx-8'>Lorem Ipsum lines</p>
                </div>
                <button className='p-2 px-4 font-bold rounded-md  bg-green-700 w-[150px] mx-auto text-white my-5 '>Get Started</button>
            </div>

            <div className='w-full shadow-xl bg-white flex flex-col p-4 my-4 border rounded-lg mx-auto text-center hover:scale-105 duration-300'>
                <img src={Triple} alt='icons' className='mx-auto bg-white w-20 mt-[-40px]' />
                <h2 className='text-2xl py-4 font-bold'>
                    Title Card 1
                </h2>
                <p className='text-5xl  font-bold'>$999</p>
                <div>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum lines</p>
                    <p className='py-2 border-b mx-8'>Lorem Ipsum lines</p>
                    <p className='py-2 border-b mx-8'>Lorem Ipsum lines</p>
                </div>
                <button className='p-2 px-4 font-bold rounded-md  bg-green-700 w-[150px] mx-auto text-white my-5 '>Get Started</button>
            </div>
             
        </div>

    </div>
  )
}

export default Cards