'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import AnimationCard from '~/components/common/AnimationCard';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function BestGraphicComponent({ graphicIndData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-zinc-950 w-full h-full">
        <ContainerWidth customClassName="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
            <div className="w-full h-full my-6 pl-4">
              <h2
                className="font-poppins font-strong  text-white text-2xl md:text-4xl lg:text-5xl"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {graphicIndData?.headingText}
              </h2>
              <p
                className="my-4 font-poppins font-regular text-sm sm:text-base lg:text-lg xl:text-1xl text-secondColor"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {graphicIndData?.paraText}
              </p>

              <div className="w-full h-full pt-4">
                {graphicIndData?.cards &&
                  graphicIndData?.cards?.map((el, index) => (
                    <>
                      <hr className="border-t-2 my-4 border-firstColor" />
                      <div className="flex space-x-4 ">
                        <div>
                          <Image
                            src={urlForImage(el?.icon?.asset?._ref).url()}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          />
                        </div>
                        <div>
                          <h3
                            className=" font-poppins font-bold  text-white text-base sm:text-lg  lg:text-1xl xl:text-2xl"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          >
                            {el?.title}
                          </h3>
                          <p
                            className="font-poppins font-regular text-sm sm:text-base  xl:text-lg text-secondColor"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          >
                            {el?.text}dsd
                          </p>
                        </div>
                        <hr className="border-t-2 my-4 border-gray-300" />
                      </div>
                    </>
                  ))}
              </div>
            </div>

            {/* second  div  */}
            <div className="flex my-0 p-4 md:p-6 lg:p-8 xl:p-12 2xl:p-16" data-aos="fade-up" data-aos-duration="1200">
              <AnimationCard
                glareColor=""
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={900}
                scale={0.8}
                transitionSpeed={2000}
                gyroscope={true}
              >
                {graphicIndData && (
                  <Image
                    src={urlForImage(graphicIndData?.image?.asset?._ref).url()}
                    width={800}
                    height={800}
                    alt="Picture of the author"
                  />
                )}
              </AnimationCard>
            </div>
          </div>
        </ContainerWidth>
      </div>
    </>
  );
}
