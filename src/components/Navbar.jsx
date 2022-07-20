import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return(
        // <div className='flex text-white justify-between items-center max-w-[1240] px-4'>
        //     <h1 className ='w-full text-3xl font-bold text-blue-400'>Supercar Blondie </h1>
        //     <ul className="flex">
        //         <li className=" p-4">Home</li>
        //         <li className=" p-4">About</li>
        //         <li className=" p-4">Service</li>
        //         <li className=" p-4">Gallery</li>
        //         <li className=" p-4">Contact</li>
        //     </ul>
        // </div>
        <div className="flex container mx-auto justify-between items-center py-5 px-5">
            <h1 className="text-blue-400 text-3xl ">Logo</h1>
            <ul className=" hidden md:flex">
            <li className=" p-2">Link Name</li>
            <li className=" p-2"> Name</li>
            <li className=" p-2">Link Name</li>
            <li className=" p-2">Link Name</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
                {/* <AiOutlineMenu size={25}/> */}
            </div>
            
            { <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%] ease-in-out duration-300 '}>
            <h1 className="text-blue-400 text-3xl p-4">Logo</h1>
            <ul className='uppercase'>
                <li className=" p-4 border-b border-gray-700">Link Name</li>
                <li className=" p-4 border-b border-gray-700">Link Name</li>
                <li className=" p-4 border-b border-gray-700">Link Name</li>
                <li className=" p-4 ">Link Name</li>
            </ul>
            </div> }
        </div>
    )
}

export default Navbar;