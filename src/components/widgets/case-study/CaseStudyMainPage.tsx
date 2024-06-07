'use client';
import React from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import CaseCard from '../CaseCard';
import { urlForImage } from '../../../../sanity/lib/image';

export default function CaseStudyMainPage({ caseStudyData }: any) {
  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="flex flex-col w-full h-full items-center justify-center pt-20 md:pt-24">
          <h1 className="font-poppins font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {caseStudyData?.headingText}
          </h1>
          <p className="font-poppins font-regular text-firstColor text-sm sm:text-base md:text-lg xl:text-1xl w-4/5 my-4 lg:my-8 mx-auto text-center">
            {caseStudyData?.paraText}
          </p>
          <div className="grid grid-cols-1  gap-8">
            {caseStudyData?.case_study &&
              caseStudyData?.case_study?.map((el, index: number) => {
                return (
                  <CaseCard
                    index={index}
                    key={el?._key}
                    main_title={el?.main_heading}
                    text={el?.text}
                    route_id={el?._key}
                    image_url={urlForImage(el?.case_study_img?.asset?._ref).url()}
                  />
                );
              })}
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
