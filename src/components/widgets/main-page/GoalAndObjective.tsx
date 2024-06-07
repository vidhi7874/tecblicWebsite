'use client';
import React, { useEffect } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

function GoalAndObjective({ goalData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="relative">
        <div className="bg-black text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-left tracking-wider">
            {goalData?.card &&
              goalData?.card?.map((el, idx) => {
                return (
                  <div
                    key={el?._key}
                    className={`bg-cover bg-center h-[360px] md:h-screen  p-6`}
                    style={{
                      backgroundImage: `url(${urlForImage(el?.image_url?.asset?._ref).url()})`,
                    }}
                  >
                    <div
                      className="h-16 pl-4 bg-transparent border-l-2 border-yellow-300 flex items-center text-lg font-semibold "
                      data-aos="fade-up"
                      data-aos-duration={idx === 0 ? 500 : idx * 500}
                    >
                      <p className="font-poppins font-semibold text-white text-lg  md:text-1xl lg:text-2xl xl:text-3xl ">
                        {el?.title}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-full justify-center items-center">
          <div className="text-6xl font-bold tracking-wider hidden md:block">
            <h1
              className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {goalData?.paraText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default GoalAndObjective;
