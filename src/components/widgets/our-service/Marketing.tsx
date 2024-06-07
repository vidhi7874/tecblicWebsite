'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AnimationCard from '~/components/common/AnimationCard';
import { urlForImage } from '../../../../sanity/lib/image';

export default function Marketing({ serviceData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-zinc-950 lg:mb-20">
        <div className="container mx-auto px-3 pt-5 md:pt-8 lg:pt-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-32 pb-5 md:pb-8 lg:pb-14">
            <div className="place-self-center">
              <h1
                className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {serviceData?.headingText}
              </h1>
              <p
                className="font-poppins font-regular text-xs sm:text-sm md:text-base lg:text-lg"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {serviceData?.paraText}
              </p>
            </div>

            <div className="hidden lg:block">
              <AnimationCard
                glareColor=""
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={900}
                scale={1.1}
                transitionSpeed={2000}
                gyroscope={false}
              >
                {serviceData && (
                  <Image
                    src={urlForImage(serviceData?.image?.asset?._ref).url()}
                    alt="group pic"
                    className=" -mb-20"
                    width={600}
                    height={600}
                  />
                )}
              </AnimationCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
