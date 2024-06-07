'use client';
import React, { useEffect } from 'react';
import MyCircularProgress from '~/components/common/MyCircularProgress';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CompanyYearsOfExperience({ companyYearsExp }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="text-center p-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold my-2">
          {companyYearsExp?.main_headingText}
        </h2>
        <p className="mb-4 font-poppins font-regular text-secondColor text-xs sm:text-sm md:text-base lg:text-lg w-4/5 text-center mx-auto">
          {companyYearsExp?.main_paraText}
        </p>
      </div>
      <div className="relative z-20-e items-center overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('../../assets/images/AboutUs/AboutUsBackground.png')] bg-cover bg-center bg-white dark:bg-gray-800 "></div>
        <div className="container mx-auto px-6 flex-e relative py-10">
          <div className="xl:mx-48 flex flex-col md:flex-row gap-12 ">
            <div className="md:w-1/3">
              <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-white">
                {companyYearsExp?.sub_heading}
              </h2>
              <p className="my-2 font-poppins font-regular text-white text-xs sm:text-sm md:text-base lg:text-lg">
                {companyYearsExp?.sub_text}
              </p>
            </div>
            <div className="md:w-2/3 gap-5">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2  ">
                {companyYearsExp?.card &&
                  companyYearsExp?.card?.map((el) => {
                    return (
                      <div className="text-center" key={el?._key}>
                        <MyCircularProgress
                          progressColorFrom={'#ffffff'}
                          progressColorTo={'#ffffff'}
                          trackColor={'#B9B7B1'}
                          trackSize={4}
                          knobSize={15}
                          knobColor={'#000000'}
                        />
                        <p className="text-[#181818] font-poppins font-semibold  text-sm sm:text-base md:text-lg lg:text-1xl">
                          {el?.text}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
