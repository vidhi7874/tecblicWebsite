import React from 'react';
import arrow from '~/assets/images/BlogSection/arrow.svg';
import Image from 'next/image';
import { urlForImage } from '../../../../sanity/lib/image';
import CommonLoader from '~/components/common/CommonLoader';

export default function DesignUserInterfaces({ selectedTabOfBottomContent }) {
  return (
    <div className="w-full h-full">
      <div className="bg-[#111111] w-full h-full p-6">
        {selectedTabOfBottomContent ? (
          selectedTabOfBottomContent?.map((bottomContent, index) => (
            <a
              href="#footersection"
              className="flex flex-col justify-center h-96 sm:h-60 items-center md:flex-row  "
              key={index}
            >
              <Image
                className="object-cover w-full rounded-t-lg  md:h-60 sm:w-60 md:w-62 lg:w-96 md:rounded-none md:rounded-s-lg"
                src={urlForImage(bottomContent?.card_img?.asset?._ref).url()}
                width={600}
                height={600}
                alt="FooterImg"
              />

              <div className="flex flex-col w-full md:w-1/2  justify-between p-4 leading-normal">
                <p className="font-poppins font-regular text-xs sm:text-sm md:text-base text-secondColor mb-2">
                  {bottomContent?.date}
                </p>

                <div className="flex justify-between">
                  <h5 className="mb-2 font-poppins font-semibold text-white text-sm sm:text-base  md:text-lg lg:text-1xl xl:text-2xl ">
                    {bottomContent?.title}
                  </h5>
                  <Image src={arrow} alt="arrow" className="w-4" />
                </div>

                <p className="mb-3 font-poppins font-regular text-secondColor  text-xs sm:text-sm md:text-base">
                  {bottomContent?.text}
                </p>

                <div className="flex">
                  <button
                    type="button"
                    className="text-white bg-[#292929] focus:outline-none font-poppins font-medium rounded-full sm:text-xs lg:text-sm sm:px-3 lg:px-5 py-2 text-center me-2 mb-2 "
                  >
                    Design
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#292929] focus:outline-none font-poppins font-medium rounded-full sm:text-xs lg:text-sm sm:px-3 lg:px-5 py-2 text-center me-2 mb-2 "
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
  );
}
