'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ContainerWidth from '~/components/common/ContainerWidth';
import { urlForImage } from '../../../../sanity/lib/image';
import AnimationClassNameFN from '~/utils/animation.util';
import AnimationCard from '~/components/common/AnimationCard';

export default function PerkAndBenefits({ perkBenefitData }: any) {
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
        <div
          className="w-full h-full flex flex-col items-start justify-center p-4 py-6
         "
        >
          <h1
            className="font-poppins font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {perkBenefitData?.headingText}
          </h1>
          <p
            className="font-poppins font-regular text-white text-center text-sm sm:text-base md:text-lg lg:text-1xl   my-4 lg:my-8"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {perkBenefitData?.paraText}
          </p>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:md:grid-cols-3 lg:gap-8">
            {perkBenefitData?.cards &&
              perkBenefitData?.cards?.map((item, idx) => {
                return (
                  <AnimationCard key={item?._key} className={AnimationClassNameFN(2)} perspective={1000}>
                    <div
                      className="primary-gradient-border-color border-solid rounded-lg flex flex-row justify-around items-center p-4 h-32  md:p-6 lg:p-8 gap-6 "
                      data-aos="fade-up"
                      data-aos-duration={idx === 0 ? 500 : idx * 500}
                    >
                      <span className="">
                        <Image
                          src={urlForImage(item?.image?.asset?._ref).url()}
                          alt="palm icon"
                          width={60}
                          height={60}
                        />
                      </span>
                      <p className="font-poppins font-bold white text-sm sm:text-base md:text-lg  lg:text-1xl">
                        {item?.text}
                      </p>
                    </div>
                  </AnimationCard>
                );
              })}
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
