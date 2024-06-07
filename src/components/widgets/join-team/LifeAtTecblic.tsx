'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LifeAtTecblic({ lifeAtTec }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-4 lg:mx-16">
          <h1
            className="font-poppins font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {lifeAtTec?.headingText}
          </h1>
          <p
            className="font-poppins font-regular text-white text-center text-sm sm:text-base md:text-lg lg:text-1xl my-4 md:w-3/5 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {lifeAtTec?.paraText}
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-around gap-2 p-8">
          {lifeAtTec?.cards &&
            lifeAtTec?.cards?.map((el, index) => {
              return (
                <div
                  key={el?._key}
                  className="flex flex-col h-96 items-center odd:justify-start even:justify-end"
                  data-aos="fade-up"
                  data-aos-duration={index === 0 ? 500 : index * 500}
                >
                  <Image src={urlForImage(el?.image?.asset?._ref).url()} alt="alt image" width={320} height={400} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
