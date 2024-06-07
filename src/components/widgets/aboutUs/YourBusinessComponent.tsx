'use client';
import Image from 'next/image';
import ContainerWidth from '~/components/common/ContainerWidth';
import AnimationCard from '~/components/common/AnimationCard';
import { useEffect } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function YourBusinessComponent({ aboutUsData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ContainerWidth customClassName="container md:px-20">
        <div className="bg-[#0C0C0C] p-6 mt-20 md:mt-28 lg:mt-20 ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h1
                className="font-poppins font-bold text-white  text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {aboutUsData?.headingText}
              </h1>
              <p
                className="my-4 font-poppins font-regular text-xs sm:text-sm md:text-base lg:text-lg text-secondColor"
                data-aos="fade-down"
              >
                {aboutUsData?.paraText}
              </p>
            </div>
            <div className="md:w-1/2 -mb-20 flex" data-aos="fade-up" data-aos-duration="1200">
              <AnimationCard
                glareColor=""
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={900}
                scale={1.1}
                transitionSpeed={2000}
                gyroscope={false}
              >
                {aboutUsData && (
                  <Image
                    src={urlForImage(aboutUsData?.image?.asset?._ref).url()}
                    width={600}
                    height={600}
                    alt="Note Pad"
                  />
                )}
              </AnimationCard>
            </div>
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
