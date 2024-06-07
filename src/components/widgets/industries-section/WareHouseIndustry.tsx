'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '../../../../sanity/lib/image';
import notePad from '~/assets/images/testimonial/notPad.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function WareHouseIndustry({ warehouseIndData }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="relative z-20-e items-center overflow-hidden h-screen">
        {warehouseIndData?.image ? (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-white  opacity-20 mt-20 md:mt-32 lg:mt-20"
            style={{
              backgroundImage: `url(${urlForImage(warehouseIndData?.image?.asset?._ref).url()})`,
            }}
          ></div>
        ) : null}

        <div className="container mx-auto px-6 flex-e relative py-10">
          <div className="e-sm:w-full md:left-12 space-y-3 e-lg:w-2/3 mx-auto p-2 flex flex-col relative z-20">
            <div
              className="bg-zinc-950 mt-20   md:mt-36  lg:mt-22      w-[100%] md:w-4/6 lg:w-3/6 rounded-xl p-8"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h2 className="text-white font-poppins font-bold text-4xl">{warehouseIndData?.headingText}</h2>

              <p className="text-secondColor my-2">{warehouseIndData?.paraText}</p>
              <div className="flex my-2  md:gap-2 gap-4">
                <div className="flex  bg-zinc-950 rounded-3xl p-2  gap-2 items-center border border-white">
                  <Image src={notePad} width={30} height={30} alt="Note Pad" />
                  <Link
                    className="font-poppins font-semibold text-xs sm:text-sm md:text-base lg:text-lg pr-2"
                    href={'/#contact_us'}
                  >
                    Book a Meeting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
