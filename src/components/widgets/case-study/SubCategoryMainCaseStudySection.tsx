'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { fetchFilteredCaseStudyPageData } from 'apis';
import GoGreenWareHouseManagementPage from './GoGreenWareHouseManagementPage';
import { urlForImage } from '../../../../sanity/lib/image';
import ContainerWidth from '~/components/common/ContainerWidth';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import ReadyToTalk from '~/components/common/ReadyToTalk';
import CommonLoader from '~/components/common/CommonLoader';

export default function SubCategoryMainCaseStudySection({ params_id }) {
  const [filteredData, setFilteredData] = useState(null);
  console.log('filteredData: ', filteredData, filteredData?.section1?.section1_heading);

  useEffect(() => {
    async function fetchFilteredData(id) {
      const data: any = await fetchFilteredCaseStudyPageData(id);
      setFilteredData(data?.case_study[0]);
    }
    fetchFilteredData(params_id);
  }, [params_id]);
  return (
    <>
      {/* go green warehouse component  */}
      {filteredData ? (
        <GoGreenWareHouseManagementPage
          title={filteredData?.main_heading}
          text={filteredData?.text}
          image_url={urlForImage(filteredData?.case_study_img?.asset?._ref).url()}
        />
      ) : (
        <CommonLoader />
      )}

      {/* objective part div  */}
      {filteredData?.section_1 ? (
        <div className="w-full h-full bg-[#111111]">
          <ContainerWidth customClassName="container">
            <div className="grid grid-cols-1 justify-center items-center">
              <h1 className="font-poppins font-bold text-2xl md:text-3xl ld:text-4xl xl:text-5xl text-white text-center ">
                {filteredData?.section_1?.section1_heading}
              </h1>
              <p className="font-poppins font-regular text-xs sm:text-sm md:text-base lg:text-lg xl:text-1xl text-secondColor text-center w-4/5 mx-auto py-4">
                {filteredData?.section_1?.section1_para}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2  gap-4 p-3 ">
                {filteredData?.section_1?.section1_data &&
                  filteredData?.section_1?.section1_data?.map((el) => {
                    return (
                      <div
                        className="w-full h-full flex flex-col justify-start items-start case-study-object-card border border-[#424245] hover:border-[#c0bdac] p-4  min-h-40 md:min-h-44 lg:min-h-60"
                        key={el?._key}
                      >
                        <Image
                          src={urlForImage(el?.section1_card_icon?.asset?._ref).url()}
                          alt="icon"
                          width={30}
                          height={30}
                        />
                        <h1 className="font-poppins font-bold text-lg md:text-1xl ld:text-2xl xl:text-3xl my-2">
                          {el?.section1_title}
                        </h1>
                        <p className="font-poppins font-regular text-xs sm:text-sm md:text-base lg:text-lg xl:text-1xl  text-secondColor mb-2">
                          {el?.section1_text}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </ContainerWidth>
        </div>
      ) : (
        <CommonLoader />
      )}

      {/* what are challenges components */}
      {/* <ChallengeComponent /> */}
      <div className="w-full h-full">
        <ContainerWidth customClassName="container">
          {filteredData?.section_2 ? (
            <div className="grid grid-cols-1 justify-center items-center">
              <h1 className="font-poppins font-bold text-2xl md:text-3xl ld:text-4xl xl:text-5xl text-white text-center">
                {filteredData?.section_2?.section2_heading}
              </h1>
              <p className="font-poppins font-regular text-xs sm:text-sm md:text-base lg:text-lg xl:text-1xl text-secondColor text-center w-4/5 mx-auto py-4">
                {filteredData?.section_2?.section2_para}
              </p>
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 py-4">
                {filteredData?.section_2?.section2_data &&
                  filteredData?.section_2?.section2_data?.map((el) => {
                    return (
                      <AnimationCard
                        key={el?._key}
                        className={AnimationClassNameFN(1)}
                        perspective={700}
                        glareEnable={true}
                        glareMaxOpacity={0.25}
                        glarePosition="all"
                        scale={1.0}
                        trackOnWindow={false}
                      >
                        <div className="w-full h-full flex justify-center items-center challenge-card min-h-40 min-w-48 p-4 px-8">
                          <p className="font-poppins font-medium text-base sm:text-lg md:text-1xl lg:text-2xl text-white text-center">
                            {el?.section2_text}
                          </p>
                        </div>
                      </AnimationCard>
                    );
                  })}
              </div>
            </div>
          ) : (
            <CommonLoader />
          )}
        </ContainerWidth>
      </div>

      {/* time line component  */}
      <div className="w-full h-full bg-[#111111]">
        <ContainerWidth customClassName="container">
          {filteredData?.section_3 ? (
            <div className="grid grid-cols-1 p-4">
              <h1 className="font-poppins font-bold text-2xl md:text-3xl ld:text-4xl xl:text-5xl text-white text-center">
                {filteredData?.section_3?.section3_heading}
              </h1>
              <VerticalTimeline>
                {filteredData?.section_3?.section3_data &&
                  filteredData?.section_3?.section3_data?.map((el, idx) => {
                    return (
                      <VerticalTimelineElement
                        key={el?._key}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#000000', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #000000' }}
                        iconStyle={{
                          background: '#000000',
                          color: '#fff',
                          fontSize: `${window.innerWidth}` > '1440px' ? '40px' : '25px',
                          textAlign: 'center',
                          placeItem: 'center',
                        }}
                        icon={`${idx + 1}`}
                      >
                        <div className="flex flex-col justify-center items-start p-3 ">
                          <h3 className=" vertical-timeline-element-title font-poppins font-semibold text-white  text-base sm:text-lg md:text-1xl  lg:text-2xl">
                            {el?.section3_title}
                          </h3>
                          <p className="font-poppins font-semibold text-secondColor  text-xs sm:text-sm md:text-base  lg:text-lg ">
                            {el?.section3_text}
                          </p>
                        </div>
                      </VerticalTimelineElement>
                    );
                  })}
              </VerticalTimeline>
            </div>
          ) : (
            <CommonLoader />
          )}
        </ContainerWidth>
      </div>

      {/* results part  */}
      <div className="bg-black w-full h-full">
        <ContainerWidth customClassName="container">
          {filteredData?.section_4 ? (
            <div className="grid grid-cols-1">
              <h1 className="font-poppins font-bold text-2xl md:text-3xl ld:text-4xl xl:text-5xl text-white text-center ">
                {filteredData?.section_4?.section4_heading}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4 ">
                {filteredData?.section_4?.section4_data &&
                  filteredData?.section_4?.section4_data?.map((el) => {
                    return (
                      <div
                        key={el?._key}
                        className="p-4 flex flex-col justify-center items-center bg-[#111111] border-b-2  custom-border-white rounded-tl-2xl rounded-tr-2xl"
                      >
                        <h2 className="font-poppins font-medium text-lg sm:text-1xl md:text-2xl lg:text-4xl text-white my-3">
                          {el?.section4_title}
                        </h2>
                        <p className="font-poppins font-medium text-base sm:text-lg md:text-1xl lg:text-2xl text-white mx-auto w-4/5 text-center">
                          {el?.section4_text}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <CommonLoader />
          )}
        </ContainerWidth>
      </div>

      <ReadyToTalk
        buttonName={'Send Message'}
        paraText={
          'Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.'
        }
        headingText={'Ready To Talk ?'}
      />
    </>
  );
}
