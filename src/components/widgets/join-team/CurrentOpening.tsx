'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import rightArrow from '../../../assets/images/join-team/arrow-right.svg';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CurrentOpening({ currentData }: any) {
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
        <div className="w-full h-full flex flex-col justify-center items-center p-2 sm:p-6 lg:p-8" id="current-opening">
          <h1
            className="font-poppins font-bold text-white  mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {currentData?.headingText}
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2  md:gap-16">
            {currentData?.cardArray &&
              currentData?.cardArray?.map((el, idx) => {
                return (
                  <AnimationCard key={el?._key} className={AnimationClassNameFN(2)} perspective={1000}>
                    <Link href={`/join-team/${el?._key}`}>
                      <div
                        className="flex flex-col items-center justify-center w-full overflow-hidden h-full primary-gradient-border-color border-solid rounded-lg p-2 lg:p-6"
                        data-aos="fade-up"
                        data-aos-duration={idx === 0 ? 500 : idx * 500}
                      >
                        <div className="flex flex-row w-full justify-between items-center">
                          <h1
                            className="font-poppins font-medium white text-base md:text-xl lg:text-3xl"
                            data-aos="fade-up"
                            data-aos-duration={idx === 0 ? 500 : idx * 500}
                          >
                            {' '}
                            {el?.title}
                          </h1>
                          <span className="">
                            <Image src={rightArrow} alt="right arrow" width={40} height={40} />
                          </span>
                        </div>
                        <div className="w-full h-px bg-firstColor my-2 sm:my-4 md:my-6 lg:my-8"></div>

                        <p
                          className="font-poppins font-regular text-secondColor text-xs p-4 md:p-2 sm:text-sm md:text-base lg:text-lg xl:text-1xl"
                          data-aos="fade-up"
                          data-aos-duration={idx === 0 ? 500 : idx * 500}
                        >
                          {el?.text}
                        </p>
                      </div>
                    </Link>
                  </AnimationCard>
                );
              })}
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
