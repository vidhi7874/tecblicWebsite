'use client';
import React, { useEffect, useState } from 'react';
import { urlForImage } from '../../../sanity/lib/image';
import AnimationCard from '../common/AnimationCard';
import AnimationClassNameFN from '~/utils/animation.util';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

const TabMenu = ({ tabsContent, tabOption, show }) => {
  console.log('show: ', show);
  console.log('tabOption: ', tabOption);
  const [activeTab, setActiveTab] = useState((show === 'tech' ? tabOption[0]?.id : tabOption[0]?.id) || '');
  console.log('activeTab: ', activeTab);
  const [selectedTab, setSelectTab] = useState(
    tabsContent ? tabsContent?.filter((el) => el.type === tabOption[0]?.id) : [],
  );
  console.log('selectedTab: ', selectedTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const data = tabsContent?.filter((el) => el.type === tabId);
    setSelectTab(data);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full h-full">
      <ul
        className="flex flex-wrap justify-center -mb-px text-xl transition font-medium text-center"
        id="default-tab"
        role="tablist"
      >
        {tabOption &&
          tabOption?.map((tab) => (
            <li key={tab.id} className="me-2 w-30  p-4 " role="presentation">
              <button
                className={`inline-block p-4  rounded-t-lg w-40 ${
                  activeTab === tab.id
                    ? 'custom-border-white border-b-2 text-transparent transition font-poppins  text-lg md:text-1xl lg:text-2xl font-strong text-white whitespace-nowrap'
                    : 'border-transparent hover:text-gray-600 hover:border-secondColor '
                }`}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
      </ul>
      <div id="default-tab-content w-full">
        {show === 'tech' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5">
            {selectedTab?.map((el) => {
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
                  <div
                    className="w-80 h-80   p-4 gap-16 flex flex-col rounded-2xl border-gray-400 border-2 bg-black"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <div className=" h-24 flex flex-col justify-between">
                      <div className="w-12 h-12 rounded-full mb-2">
                        <Image src={urlForImage(el?.tab_icon?.asset?._ref).url()} alt="icon" width={61} height={61} />
                      </div>
                      <br />
                      <div className="">
                        <p className="font-poppins font-bold text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl text-white">
                          {el?.title}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <p className="font-poppins font-regular  text-[#8E90A6] text-xs sm:text-sm  lg:text-base xl:text-1xl">
                        {el?.text}
                      </p>
                    </div>
                  </div>
                </AnimationCard>
              );
            })}
          </div>
        ) : (
          <div className={`mt-5 flex justify-center w-full h-full mx-auto `}>
            <div className="w-full lg:w-9/12 h-full flex flex-wrap justify-center gap-2">
              {selectedTab?.length !== 0 &&
                selectedTab?.map((el) => {
                  return (
                    <div
                      key={el?._key}
                      className="flex-none flex flex-col gap-2 mt-2 justify-center items-center border border-gray-400 bg-black h-32 w-32 p-3  cursor-pointer hover:border-firstColor rounded-lg"
                      data-aos="fade-up"
                      data-aos-duration="200"
                    >
                      <div className="h-20 w-20 flex justify-center items-center">
                        <Image src={urlForImage(el?.tab_icon?.asset?._ref).url()} width={35} height={35} alt="icon" />
                      </div>
                      <p className="font-poppins font-medium text-xl text-white whitespace-nowrap">{el?.text}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
