'use client';
import React from 'react';

const Hero = ({ heroData }: any) => {
  const result = heroData?.headingText?.split(' ') || [];
  console.log('result:  >', result);

  return (
    <section id="home">
      {heroData && (
        <div className="flex items-center justify-center bg-black overflow-hidden min-h-screen bg-repeat ">
          <div className="flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full h-90 justify-center items-center  px-2  mx-auto">
              <h1 className="flex flex-wrap justify-center items-center  gap-2 font-poppins font-strong uppercase text-purpleColor text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl  w-full ">
                {heroData?.headingText &&
                  result.map((el, idx) => {
                    return <span key={idx} data-content={el} className="slide-in-text  flex-row "></span>;
                  })}
              </h1>

              <br />
              <p className="font-poppins font-regular  lg:text-center text-white w-2/3 px-4 text-sm  md:text-base lg:text-1xl 2xl:text-2xl">
                {heroData?.paraText}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
