import React, { useEffect, useRef } from 'react';

const Home = () => {
  const homeImageRef = useRef(null);

  useEffect(() => {
    // Ensure gsap is available globally
    if (window.gsap) {
    //   window.gsap.from(homeImageRef.current, {
    //     duration: 1,
    //     opacity: 0,
    //     x: 100,
    //    });
    }

    
    
  }, [Home]);

  return (
    <>
      <div className="homeContainer w-full flex flex-col gap-[60px] lg:flex-row lg:h-screen">
        <div className="left flex flex-col items-center justify-center w-full mt-20 lg:mb-14">
          <h1 className="text-white text-2xl text-center lg:text-5xl">Welcome to NEEDS</h1>
          <h3 className="text-white text-xl text-center lg:text-2xl">
            Navjyoti Educational Environmental and Development Society
          </h3>
        </div>
        <div className="left flex items-center justify-center w-full">
          <img
            id="homeImage"
            className="h-4/5 w-3/5 lg:h-3/5"
            src={require('./images/HomeImage.png')}
            ref={homeImageRef}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
