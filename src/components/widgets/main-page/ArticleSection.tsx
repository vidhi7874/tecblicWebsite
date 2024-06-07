'use client';
import React, { useEffect } from 'react';
import ContainerWidth from '../../common/ContainerWidth';
import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ArticleSection({ articleData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <section id="home">
      <ContainerWidth customClassName="container px-14">
        <div className="flex px-14 flex-col gap-5 md:gap-10 md:flex-row items-start md:items-center">
          <div
            className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {articleData?.headingText}
          </div>
          <div
            className="font-poppins font-regular w-full md:w-3/5 lg:w-2/5 text-base text-secondColor"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {articleData?.paraText}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 md:mt-8 lg:mt-14">
          {articleData?.cardsData &&
            articleData?.cardsData?.map((el, idx) => {
              return (
                <div
                  key={el?.el?._key}
                  className="flex flex-col justify-end px-7 py-8 rounded-xl bg-cover h-[500px] bg-no-repeat bg-center   hover:-translate-y-2 hover:scale-100 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration={`${idx === 0 ? 500 : 500 * idx}`}
                  style={{
                    backgroundImage: `url(${urlForImage(el?.image?.asset?._ref).url()})`,
                  }}
                >
                  <h1
                    className="font-poppins font-bold text-xl text-white whitespace-nowrap"
                    data-aos="fade-up"
                    data-aos-duration={`${idx === 0 ? 500 : 500 * idx}`}
                  >
                    {el?.title}
                  </h1>
                  <div className="mt-2" data-aos="fade-up" data-aos-duration={`${idx === 0 ? 500 : 500 * idx}`}>
                    <p className="font-poppins font-regular text-xs md:text-sm text-white">{el?.text}</p>
                  </div>
                  <div className="flex flex-row justify-between items-center pt-4">
                    <div className="flex gap-3 items-center">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-no-repeat bg-center"
                        data-aos="fade-up"
                        data-aos-duration={`${idx === 0 ? 500 : 500 * idx}`}
                        style={{
                          backgroundImage: `url(${urlForImage(el?.avatar_image?.asset?._ref).url()})`,
                        }}
                      ></div>
                      <div data-aos="fade-up" data-aos-duration={`${idx === 0 ? 500 : 500 * idx}`}>
                        <p className="font-poppins font-semibold text-xs md:text-base text-white whitespace-nowrap mr-2">
                          {el?.person}
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={`${idx === 0 ? 500 : 500 * idx}`}>
                      <p className="font-poppins font-medium text-xs md:text-base text-white whitespace-nowrap">
                        {el?.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ContainerWidth>
    </section>
  );
}
