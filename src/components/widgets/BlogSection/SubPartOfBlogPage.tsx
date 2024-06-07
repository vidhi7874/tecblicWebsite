'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchFilteredBlogData } from 'apis';
import ContainerWidth from '~/components/common/ContainerWidth';
import { urlForImage } from '../../../../sanity/lib/image';
import CommonLoader from '~/components/common/CommonLoader';

export default function SubPartOfBlogPage({ params_id }) {
  const [filteredBlogData, setFilteredBlogData] = useState(null);

  useEffect(() => {
    async function filterData(id) {
      const data: any = await fetchFilteredBlogData(id);
      setFilteredBlogData(data);
    }
    filterData(params_id);
  }, [params_id]);

  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="mt-28 md:mt-36 lg:mt-20 mx-8 md:mx-16 lg:mx-20">
          {filteredBlogData ? (
            <div className="">
              {filteredBlogData?.left_section && (
                <Image
                  className="rounded-t-lg  w-full relative opacity-50"
                  src={urlForImage(filteredBlogData?.left_section?.card_img?.asset?._ref).url()}
                  alt="card img"
                  width={1000}
                  height={550}
                />
              )}

              <div className="hidden sm:block absolute top-32 md:top-44 lg:top-36 w-1/2 sm:p-6 lg:p-8">
                <h4 className=" font-poppins font-semibold text-white text-md sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl  mx-2 mb-5">
                  {filteredBlogData?.left_section?.title}
                </h4>
                <p className="font-poppins text-[#C0C5D0] text-xs sm:text-sm md:text-base lg:text-lg">
                  {filteredBlogData?.left_section?.text}
                </p>
              </div>

              <div>
                <h5 className="font-poppins font-semibold my-8 text-lg sm:text-1xl md:text-2xl lg:text-3xl font-semibold text-white">
                  {filteredBlogData?.left_section?.section1?.section1_heading}
                </h5>
                {filteredBlogData?.left_section?.section1?.section1_data &&
                  filteredBlogData?.left_section?.section1?.section1_data?.map((el) => {
                    return (
                      <p
                        className="font-poppins font-regular  mb-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-1xl text-secondColor"
                        key={el?._key}
                      >
                        {el}
                      </p>
                    );
                  })}

                <h5 className="font-poppins font-semibold my-8  text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                  {filteredBlogData?.left_section?.section2?.section2_heading}
                </h5>
                {filteredBlogData?.left_section?.section2?.section2_data &&
                  filteredBlogData?.left_section?.section2?.section2_data?.map((el) => {
                    return (
                      <p
                        className="font-poppins font-regular  mb-4 text-xs sm:text-sm md:text-base lg:text-lg  text-secondColor"
                        key={el?._key}
                      >
                        {el}
                      </p>
                    );
                  })}
              </div>
            </div>
          ) : (
            <CommonLoader />
          )}
        </div>
      </ContainerWidth>
    </>
  );
}
