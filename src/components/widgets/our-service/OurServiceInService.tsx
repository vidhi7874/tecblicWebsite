'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function OurServiceInService({ ourServiceData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ContainerWidth customClassName="container lg:pt-0">
        <div className="">
          <h1
            className="font-poppins font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {ourServiceData?.headingText}
          </h1>
          <p
            className="font-poppins font-regular text-white  text-xs sm:text-sm md:text-base lg:text-lg w-full lg:w-3/5 text-center my-4 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {ourServiceData?.paraText}
          </p>

          <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-3/5 md:w-4/5 lg:w-3/5 mx-auto mt-5">
            {ourServiceData?.cardData &&
              ourServiceData?.cardData?.map((el) => {
                return (
                  <AnimationCard
                    key={el?._key}
                    className={AnimationClassNameFN(1)}
                    perspective={700}
                    glareEnable={true}
                    glareMaxOpacity={0.25}
                    glarePosition="all"
                    scale={1.0}
                    trackOnWindow={false}
                  >
                    <div
                      className="flex flex-col justify-center items-center border border-neutral-700 rounded-3xl p-4 bg-gradient-to-b from-black from-20% to-neutral-700 overflow-hidden "
                      data-aos="fade-up"
                      data-aos-duration="700"
                    >
                      <div className="flex justify-center items-center w-20 h-20 rounded-full bg-[#292930]">
                        <Image src={urlForImage(el?.image?.asset?._ref).url()} alt="gear pic" width={50} height={50} />{' '}
                      </div>
                      <h2
                        className="font-poppins font-semibold text-white m-3 text-base sm:text-lg md:text-1xl lg:text-2xl"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        {el?.title}
                      </h2>
                      <p
                        className="font-poppins font-regular text-white text-center text-xs sm:text:sm md:text-base"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        {el?.text}
                      </p>
                      <div className="border-2 border-[#d6d3d1] w-16 h-0.5 my-8"></div>
                    </div>
                  </AnimationCard>
                );
              })}
          </div>

          <div className="grid grid-cols-4 gap-8"></div>
        </div>
      </ContainerWidth>
    </>
  );
}
