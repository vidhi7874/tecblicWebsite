'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import MyCircularProgress from '~/components/common/MyCircularProgress';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ConsultingAgency({ consultAgency }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContainerWidth customParentClassName="bg-zinc-950" customClassName="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center items-start place-self-center md:w-1/2">
            <h1
              className="font-poppins font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {consultAgency?.headingText}
            </h1>
            <p
              className="font-poppins font-medium text-firstColor text-xs sm:text-sm md:text-base my-2 lg:text-base"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {consultAgency?.paraText}
            </p>

            <div className="flex flex-col  w-full h-full pt-6 justify-center items-start">
              <div className="h-px w-full bg-[#a1a1aa] my-2"></div>
              <div className="flex flex-row justify-around items-center w-full h-full gap-1 ">
                {consultAgency?.cards?.map((item, idx) => {
                  return (
                    <div
                      key={item?._key}
                      className="flex flex-col bg-black rounded-lg p-2 sm:p-3 "
                      data-aos="fade-up"
                      data-aos-duration={idx === 0 ? 500 : idx * 500}
                    >
                      <div className="flex flex-row justify-start items-center">
                        <span>
                          <Image
                            src={urlForImage(item?.card_image?.asset?._ref).url()}
                            alt="star pic"
                            width={25}
                            height={25}
                          />
                        </span>

                        <h2
                          className="font-poppins font-bold text-white  ml-2 text-lg md:text-2xl lg:text-3xl"
                          data-aos="fade-up"
                          data-aos-duration={idx === 0 ? 500 : idx * 500}
                        >
                          {item?.title}
                        </h2>
                      </div>
                      <p
                        className="font-poppins font-medium  text-black-200 text-xs  md:text-base"
                        data-aos="fade-up"
                        data-aos-duration={idx === 0 ? 500 : idx * 500}
                      >
                        {item?.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="h-px w-full bg-[#a1a1aa] my-2"></div>
            </div>
          </div>

          <div className="w-full relative">
            <AnimationCard
              className={AnimationClassNameFN(1)}
              perspective={700}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glarePosition="all"
              scale={1.0}
              trackOnWindow={false}
            >
              {consultAgency && (
                <Image
                  src={urlForImage(consultAgency?.image?.asset?._ref).url()}
                  alt="study pic"
                  className="md:py-16 lg:py-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  width={700}
                  height={500}
                />
              )}
            </AnimationCard>

            <AnimationCard
              className={AnimationClassNameFN(1)}
              perspective={7000}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glarePosition="all"
              scale={1.0}
              trackOnWindow={false}
            >
              {consultAgency?.specialCard &&
                consultAgency?.specialCard?.map((el) => {
                  return (
                    <div
                      key={el?._key}
                      className="flex flex-row justify-center items-center bg-black w-44 h-24 md:w-52 md:h-28 text-zinc-900 absolute bottom-[-2px] left-[-2px] md:bottom-0 md:left-[2px] lg:bottom-[-10px] lg:left-[-14%] rounded-2xl p-4"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="flex justify-center items-center relative gap-2">
                        <MyCircularProgress />
                      </div>
                      <p
                        className="font-poppins font-semibold text-white text-sm mx-2 lg:text-base"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        {el?.text}
                      </p>
                    </div>
                  );
                })}
            </AnimationCard>
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
