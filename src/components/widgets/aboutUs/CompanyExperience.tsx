'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { urlForImage } from '../../../../sanity/lib/image';

export default function CompanyExperience({ companyExp }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="relative z-20-e items-center overflow-hidden ">
        {companyExp && (
          <>
            <div
              className="absolute top-0 left-0 w-full h-full bg-[url('../../assets/images/AboutUs/bgImage.svg')] bg-cover bg-center dark:bg-gray-800 "
              style={{ backgroundImage: `${urlForImage(companyExp?.image?.asset?._ref).url()}` }}
            ></div>

            <div className="container mx-auto px-6 flex-e relative py-10">
              <div className="e-sm:w-full space-y-3 e-lg:w-2/3 mx-auto p-2 flex flex-col relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {companyExp?.card &&
                    companyExp?.card?.map((el) => {
                      return (
                        <div className="flex flex-col items-center" key={el?._key}>
                          <Image
                            src={urlForImage(el?.card_image?.asset?._ref).url()}
                            width={80}
                            height={80}
                            alt={el?.title}
                          />
                          <h1 className="font-poppins text-white font-bold text-base md:text-lg  lg:text-1xl">
                            {el.title}
                          </h1>
                          <p className="font-poppins font-medium text-secondColor">{el.text}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
