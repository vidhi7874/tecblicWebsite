'use client';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import CaseCard from '../CaseCard';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CaseStudyInIndustryComponent({ caseStudyIndData }: any) {
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
        <div className="text-center pt-0 mt-0" data-aos="fade-up" data-aos-duration="1200">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white item-center">
            {caseStudyIndData?.headingText}
          </h1>
          <p className="font-poppins  text-secondColor text-base sm:text-lg md:text-xl lg:text-xl xl:text-md lg:w-4/5 text-center my-8 mx-auto">
            {caseStudyIndData?.paraText}
          </p>
        </div>
        <div className="grid grid-cols-1  gap-4" data-aos="fade-up" data-aos-duration="1200">
          {caseStudyIndData?.case_study &&
            caseStudyIndData?.case_study.map((el, index) => (
              <CaseCard
                main_title={el?.main_heading}
                text={el?.text}
                key={el?._key}
                route_id={el?._key}
                image_url={urlForImage(el?.case_study_img?.asset?._ref).url()}
                index={index}
              />
            ))}
        </div>
      </ContainerWidth>
    </>
  );
}
