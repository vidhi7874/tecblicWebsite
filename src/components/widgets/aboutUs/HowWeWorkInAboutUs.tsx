'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function HowWeWorkInAboutUs({ howWeWorkData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-zinc-950">
        <div>
          <div className="h-full w-full bg-gray-800 pt-12 p-4">
            <div className="text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white my-4">
                {howWeWorkData?.headingText}
              </h2>
            </div>
            <div className="grid gap-14 my-10 md:grid-cols-3 md:gap-5 w-4/5 mx-auto">
              {howWeWorkData?.cards &&
                howWeWorkData?.cards?.map((el, idx) => {
                  return (
                    <AnimationCard className={AnimationClassNameFN(2)} perspective={1000} key={el?._key}>
                      <div
                        className="rounded-xl bg-black p-6 text-center shadow-xl"
                        data-aos="fade-up"
                        data-aos-duration={idx === 0 ? 500 : idx * 500}
                      >
                        <div className="mx-auto flex h-16 w-16 -translate-y-14 transform items-center justify-center rounded-">
                          <Image
                            src={urlForImage(el?.image?.asset?._ref).url()}
                            width={60}
                            height={60}
                            alt="Note Pad"
                          />
                        </div>
                        <h1 className="font-poppins font-semibold  text-darken mb-3 text-sm sm:text-base md:text-lg lg:text-xl  text-white font-medium lg:px-14">
                          {el?.title}
                        </h1>
                        <p className="font-poppins font-regular px-4 text-secondColor text-xs sm:text-sm md:text-base xl:text-lg">
                          {el?.text}fsdf
                        </p>
                        <p className="font-poppins font-medium text-center my-4 text-purpleSecondColor text-sm sm:text-base md:text-lg lg:text-xl">
                          {el?.footer_text}
                        </p>
                      </div>
                    </AnimationCard>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
