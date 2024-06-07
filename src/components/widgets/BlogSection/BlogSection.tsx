'use client';

import ContainerWidth from '../../common/ContainerWidth';
import BlogTechnologyTab from './BlogTechnologyTab';
import { useState } from 'react';
import CommonLoader from '~/components/common/CommonLoader';
function BlogSection() {
  const [headingData, setHeadingData] = useState(null);

  const fetchHeadingSectionData = (data) => {
    setHeadingData(data);
  };

  return (
    <>
      <ContainerWidth customClassName="container">
        {headingData ? (
          <div className="flex flex-col sm:flex-row justify-center  gap-6 md:gap-10 mt-28 sm:mt-24 md:mt-40 lg:mt-20 xl:mt-24 md:mx-4">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl text-white">
              {headingData?.headingText}
            </h1>
            <p className="font-poppins font-regular text-xs sm:text-sm md:text-base lg:text-lg lg:text-6xl text-white">
              {headingData?.paraText}
            </p>
          </div>
        ) : (
          <CommonLoader />
        )}
      </ContainerWidth>

      <BlogTechnologyTab fetchHeadingSectionData={fetchHeadingSectionData} />
    </>
  );
}

export default BlogSection;
