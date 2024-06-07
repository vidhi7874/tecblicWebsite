'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import right from '~/assets/images/AboutUs/gradientRight.svg';

import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function BusinessPlanComponent({ businessPlanData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-4">
          {/* image div  */}
          <div className="hidden md:block md:w-1/2 flex">
            {businessPlanData && (
              <Image
                src={urlForImage(businessPlanData?.image?.asset?._ref).url()}
                width={650}
                height={700}
                alt="Note Pad"
              />
            )}
          </div>
          <div className="md:w-1/2 p-2">
            <div data-aos="fade-up" data-aos-duration="1200">
              <h2 className="font-poppins font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {businessPlanData?.headingText}
              </h2>
              <p
                className="mt-4 font-poppins font-regular text-secondColor text-xs sm:text-sm md:text-base lg:text-lg"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {businessPlanData?.paraText}
              </p>
            </div>
            {/* div for the business cards  */}
            {businessPlanData?.business_card &&
              businessPlanData?.business_card?.map((el, idx) => {
                return (
                  <div
                    key={el?._el}
                    className="flex border primary-gradient-border-color border-solid p-4 my-4 gap-4"
                    data-aos="fade-up"
                    data-aos-duration={idx === 0 ? 500 : idx * 500}
                  >
                    <div className="">
                      <Image src={right} width={30} height={30} alt="Note Pad" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-white text-sm sm:text-base md:text-lg lg:text-1xl">
                        {el?.title}
                      </h3>
                      <p className="font-poppins font-regular text-secondColor text-xs sm:text-sm md:text-base ">
                        {el?.text}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
