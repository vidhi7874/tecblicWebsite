'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import arrow from '~/assets/images/BlogSection/arrow.svg';
import DesignUserInterfaces from './DesignUserInterfaces';
import ContainerWidth from '~/components/common/ContainerWidth';
import { fetchBlogPageData } from 'apis';
import { urlForImage } from '../../../../sanity/lib/image';
import Link from 'next/link';
import CommonLoader from '~/components/common/CommonLoader';

export default function BlogTechnologyTab({ fetchHeadingSectionData }) {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data: any = await fetchBlogPageData();
      setBlogData(data);
      fetchHeadingSectionData(data);
      setActiveTab(data?.tabOptions[0]?.id);
      setSelectTabOfLeftContent(data?.left_section?.filter((el) => el.type === data?.tabOptions[0]?.id));
      setSelectTabOfRightContent(data?.right_section?.filter((el) => el.type === data?.tabOptions[0]?.id));
      setSelectTabOfBottomContent(data?.bottom_section?.filter((el) => el.type === data?.tabOptions[0]?.id));
    }

    fetchData();
    //eslint-disable-next-line
  }, []);

  const [activeTab, setActiveTab] = useState('');

  //onclick handle tab data

  const [selectedTabOfLeftContent, setSelectTabOfLeftContent] = useState([]);
  const [selectedTabOfRightContent, setSelectTabOfRightContent] = useState([]);
  const [selectedTabOfBottomContent, setSelectTabOfBottomContent] = useState([]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const leftContentdata = blogData?.left_section?.filter((el) => el.type === tabId);
    setSelectTabOfLeftContent(leftContentdata);
    const rightContentdata = blogData?.right_section?.filter((el) => el.type === tabId);
    setSelectTabOfRightContent(rightContentdata);
    const bottomContentdata = blogData?.bottom_section?.filter((el) => el.type === tabId);
    setSelectTabOfBottomContent(bottomContentdata);
  };
  //return
  return (
    <>
      <ContainerWidth customClassName="container md:pt-0 lg:pt-0">
        <div className="md:mx-4   px-2">
          {/* tab buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer  w-4/5 items-center  ">
            {blogData?.tabOptions &&
              blogData?.tabOptions?.map((tab) => (
                <div
                  key={tab?.id}
                  className={`tab text-center flex justify-center items-center ${
                    tab?.id === activeTab
                      ? 'active common-gradient-background text-white font-poppins font-bold whitespace-nowrap'
                      : 'text-[#B8B8B8] border border-[#414141] font-poppins font-regular text-base whitespace-nowrap'
                  } rounded-md px-1 md:px-5 py-3 text-xs lg:px-5 lg:py-2 lg:text-sm w-full h-12
           `}
                  onClick={() => handleTabClick(tab?.id)}
                >
                  {tab?.label}
                </div>
              ))}
          </div>

          {/* tab contents  */}
          <div className="flex flex-col lg:flex-row mt-6 w-full ">
            {/* left side content */}
            {selectedTabOfLeftContent ? (
              selectedTabOfLeftContent.map((leftContent, index) => (
                <Link
                  href={`/blog-section/${leftContent?._key}`}
                  className="lg:w-2/5 xl:w-1/2 "
                  key={leftContent?._key}
                >
                  <div className="rounded-lg w-full h-full">
                    <a href="#Datascience">
                      <Image
                        className="rounded-t-lg mb-6"
                        src={urlForImage(leftContent?.card_img?.asset?._ref).url()}
                        alt="card img"
                        width={700}
                        height={600}
                      />
                    </a>
                    <a href="#Datascience">
                      <div className="flex flex-col justify-between leading-normal">
                        <p className="font-poppins text-xs sm:text-sm lg:text-base text-secondColor mb-2">
                          {blogData?.left_section[0]?.date}
                        </p>

                        <div className="flex justify-between items-center">
                          <h5 className="font-poppins mb-2 font-semibold text-base sm:text-lg md:text-1xl lg:text-2xl tracking-tight text-white">
                            {leftContent?.title}
                          </h5>
                          <Image src={arrow} alt="arrow" className="w-4" width={40} height={40} />
                        </div>

                        <p className="font-poppins mb-3 font-regular text-secondColor text-xs sm:text-sm md:text-base lg:text-lg">
                          {leftContent?.text}
                        </p>
                      </div>
                    </a>
                  </div>
                </Link>
              ))
            ) : (
              <CommonLoader />
            )}

            {/* right side content */}
            <div className="lg:w-3/5 xl:w-1/2 flex flex-col gap-4 py-1 ">
              {selectedTabOfRightContent ? (
                selectedTabOfRightContent?.map((rightContent, index) => (
                  <a
                    href="#Datascience"
                    className="flex flex-col items-center rounded-lg  md:flex-row"
                    key={rightContent?._key}
                  >
                    <Image
                      className="object-cover w-full rounded-t-lg md:w-60 md:rounded-none md:rounded-s-lg mx-5"
                      src={urlForImage(rightContent?.card_img?.asset?._ref).url()}
                      width={600}
                      height={600}
                      alt="subCard"
                    />

                    <div className="flex flex-col w-full md:w-1/2  justify-center leading-normal">
                      <p className="font-poppins font-regular text-xs sm:text-sm md:text-base  text-secondColor mb-2">
                        {rightContent?.date}
                      </p>

                      <div className="flex justify-between">
                        <h5 className="mb-1 font-poppins font-bold text-base md:text-lg lg:text-1xl ">
                          {rightContent?.title}
                        </h5>
                        <Image src={arrow} alt="arrow" className="w-4" />
                      </div>

                      <p className="font-rubik mb-2 font-normal text-secondColor text-xs md:text-sm">
                        {rightContent?.text}
                      </p>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="text-white bg-[#292929] focus:outline-none font-poppins font-medium rounded-full text-center lg:text-xs xl:text-sm text-base mb-2 px-5 lg:px-2 xl:px-6 py-1 "
                        >
                          Design
                        </button>
                        <button
                          type="button"
                          className="text-white bg-[#292929] focus:outline-none  font-poppins font-medium rounded-full  text-center lg:text-xs xl:text-sm text-base mb-2 px-5 lg:px-2 xl:px-6 py-1 "
                        >
                          Research
                        </button>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <CommonLoader />
              )}
            </div>
          </div>
        </div>
      </ContainerWidth>
      {/* bottom content data  */}
      <DesignUserInterfaces selectedTabOfBottomContent={selectedTabOfBottomContent} />
    </>
  );
}
