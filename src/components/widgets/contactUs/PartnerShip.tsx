import Image from 'next/image';
import React from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import { urlForImage } from '../../../../sanity/lib/image';

export default function PartnerShip({ partnerShip }: any) {
  return (
    <ContainerWidth customParentClassName="bg-zinc-950" customClassName="container">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 py-2 lg:py-12">
        <div className="flex flex-col justify-start lg:justify-center">
          <h1
            className="font-bold text-2xl text-white lg:text-3xl mb-2 lg:mb-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {partnerShip?.headingText}
          </h1>

          <p className="font-regular text-secondColor text-base" data-aos="fade-up" data-aos-duration="1200">
            {partnerShip?.paraText}
          </p>
        </div>
        <div className="hidden lg:block"></div>
        <div className="col-span-1 lg:col-span-2">
          <div
            className="grid grid-cols-2 gap-6 lg:grid-cols-4 content-stretch lg:gap-4 "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {partnerShip?.images &&
              partnerShip?.images?.map((el) => {
                return (
                  <AnimationCard
                    key={el?._key}
                    className={AnimationClassNameFN(4)}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={false}
                  >
                    <div className="bg-white/5 rounded-xl flex justify-center items-center py-10 px-4  h-24">
                      <Image
                        src={urlForImage(el?.image?.asset?._ref).url()}
                        alt="logo items"
                        className="object-center"
                        width={100}
                        height={30}
                      />
                    </div>
                  </AnimationCard>
                );
              })}
          </div>
        </div>
      </div>
    </ContainerWidth>
  );
}
