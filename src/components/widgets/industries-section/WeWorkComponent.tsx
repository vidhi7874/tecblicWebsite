'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function WeWorkComponent({ weWorkIndData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="text-center">
          <span className="font-poppins font-bold text-white  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl item-center">
            {weWorkIndData?.headingText}
          </span>

          <p
            className="font-poppins font-regular text-sm sm:text-base lg:text-lg xl:text-1xl  text-center text-secondColor my-6  lg:w-6/12 xl:w-7/12 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {weWorkIndData?.paraText}
          </p>
        </div>
        <div>
          <div className="my-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {weWorkIndData?.cards &&
              weWorkIndData?.cards?.map((el, index) => (
                <div
                  className="flex justify-center item-center"
                  data-aos="fade-up"
                  data-aos-duration={`${index === 0 ? 700 : 700 * index}`}
                  key={index}
                >
                  <div className="block rounded-xl border border-gray-800 p-4 md:p-8 transform transition-transform hover:scale-102 hover:translate-x-2 hover:translate-y-2 hover:border-[#d6d3d1]">
                    <Image
                      src={urlForImage(el?.svg_icon?.asset._ref).url()}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                    <h5 className="my-2 font-poppins font-bold text-white  text-lg md:text-1xl lg:text-2xl xl:text-3xl font-semibold tracking-tight  dark:text-white">
                      {el?.title}
                    </h5>
                    <p className="my-2 font-poppins font-regular text-sm md:text-base lg:text-lg  text-secondColor dark:text-gray-400">
                      {el?.text}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
