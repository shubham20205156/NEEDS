import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="NavbarContainer flex w-full h-16 justify-center items-center">
                <div className="logContainer w-1/2 text-3xl">
                    <h3 className='text-white flex justify-start ml-5'>
                        <img className="h-25 w-20" src={require('./NavbarImage.png')} alt="logo" />
                    </h3>
                </div>
                <div>
                {/* <i class="fa-solid fa-bars" style={{color:"white"}}></i> */}
                </div>
                <div className="navContainer w-1/2 text-white flex justify-around text-lg">
                    <h1 className='cursor-pointer hover:text-gray-300'>Home</h1>
                    <h3 className='cursor-pointer hover:text-gray-300'>Members</h3>
                    <h3 className='cursor-pointer hover:text-gray-300'>About</h3>
                    <h3 className='cursor-pointer hover:text-gray-300'>Login</h3>
                    <h3 className='cursor-pointer hover:text-gray-300'>Contact Us</h3>
                </div>
            </div>
        </>
    )
}

export default Navbar