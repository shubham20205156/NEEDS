import React from 'react'
import { handleMenu } from './script';
const Navbar = () => {
    return (
        <>
            <div className="NavbarContainer flex w-full h-16 justify-between items-center">
                <div className="logContainer w-1/2 text-3xl">
                    <h3 className='text-white flex justify-start ml-5'>
                        <img className="h-25 w-20" src={require('./images/NavbarImage.png')} alt="logo" />
                    </h3>
                </div>

                <div className="navContainer w-1/2 text-white hidden lg:flex justify-end gap-14 text-lg mr-5">
                    <h1 className='cursor-pointer hover:text-gray-300'>Home</h1>
                    <h3 className='cursor-pointer hover:text-gray-300'>Members</h3>
                    <h3 className='cursor-pointer hover:text-gray-300'>About</h3>
                    <h3 className='cursor-pointer hover:text-gray-300'>Login</h3>
                    <h3 className='cursor-pointer hover:text-gray-300'>Contact Us</h3>
                </div>
                <button onClick={handleMenu}>
                    <i class="fa-solid fa-bars mr-7 lg:hidden" style={{ color: "white" }}></i>
                </button>

            </div>
            <div className="text-white text-xl w-full hidden flex flex-col gap-3 inset-0" id='showMenu'>
                <div className='flex items-center ml-5 gap-3'>
                    <i class="fa-solid fa-house mt-2"></i>
                    <h1 className='cursor-pointer  mt-3 hover:text-gray-300'>Home</h1>
                </div>
                <div className='flex items-center ml-5 gap-3'>
                    <i class="fa-solid fa-user-group ml"></i>
                    <h3 className='cursor-pointer  hover:text-gray-300'>Members</h3>
                </div>
                
                <div className='flex items-center ml-5 gap-3'>
                    <i class="fa-solid fa-phone"></i>
                    <h3 className='cursor-pointer  hover:text-gray-300'>Contact Us</h3>
                </div>
                <div className='flex items-center ml-5 gap-3'>
                    <i class="fa-solid fa-phone"></i>
                    <h3 className='cursor-pointer  hover:text-gray-300'>Contact Us</h3>
                </div>
                <div className='flex items-center ml-5 gap-3'>
                    <i class="fa-solid fa-phone"></i>
                    <h3 className='cursor-pointer  hover:text-gray-300'>Contact Us</h3>
                </div>

            </div>
        </>
    )
}

export default Navbar