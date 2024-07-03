import React from 'react'

const Home = () => {
    return (
        <>
            <div className="homeContainer h-screen w-full flex">
                <div className="left flex flex-col items-center justify-center w-1/2 h-full">
                    <h1 className='text-white text-6xl'>Welcome to NEEDS</h1>
                    <h3 className='text-white text-3xl text-center'>Navjyoti Educational Enviromental and Development Society </h3>
                </div>
                <div className="left flex items-center justify-center w-1/2">
                    <img className="h-3/5 w-3/5" src={require("./HomeImage.png")} />
                </div>
            </div>
        </>
    )
}

export default Home