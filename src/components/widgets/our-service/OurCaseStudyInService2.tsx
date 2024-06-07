'use client';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import CaseCard from '../CaseCard';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function OurCaseStudyInService2({ caseStudy }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ContainerWidth customParentClassName="" customClassName="container">
        <div className="flex flex-col w-full h-full items-center bg-black ">
          <h1 className="font-poppins font-bold  text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {caseStudy?.headingText}
          </h1>
          <p className="font-poppins font-regular text-center text-firstColor  my-4 text-xs sm:text-sm md:text-base lg:text-lg w-4/5">
            {caseStudy?.paraText}
          </p>
          <div className="grid grid-cols-1 gap-4 w-full h-full ">
            {caseStudy?.case_study &&
              caseStudy?.case_study?.map((el, index) => {
                return (
                  <CaseCard
                    key={el?._key}
                    main_title={el?.main_heading}
                    text={el?.text}
                    route_id={el?._key}
                    image_url={urlForImage(el?.case_study_img?.asset?._ref).url()}
                    index={index}
                  />
                );
              })}
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
