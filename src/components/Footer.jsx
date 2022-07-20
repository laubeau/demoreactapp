import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGitSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 bg-black grid lg:grid-cols-3 gap-8 text-gray-400 '>
        <div>
            <h1 className='text-3xl uppercase text-green-600 font-bold'>React</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis, ex consequatur at eaque explicabo deserunt voluptate sapiente voluptates aliquid.</p>
            <div className='flex md:w-[75%] justify-between my-6 '>
               <FaDribbbleSquare size={30}/>
               <FaFacebookSquare size={30}/>
               <FaGitSquare size={30}/>
               <FaInstagramSquare size={30}/>
            </div>
        </div>

        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='text-md font-bold text-gray-300'>Title</h6>
                <ul>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                </ul>
            </div>

            <div>
                <h6 className='text-md font-bold text-gray-300'>Title</h6>
                <ul>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                </ul>
            </div>

            <div>
                <h6 className='text-md font-bold text-gray-300'>Title</h6>
                <ul>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                </ul>
            </div>

            <div>
                <h6 className='text-md font-bold text-gray-300'>Title</h6>
                <ul>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                <li className='py-1 text-sm'> My Link</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer