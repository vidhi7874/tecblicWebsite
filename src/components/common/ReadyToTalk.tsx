'use client';
import React, { useEffect } from 'react';
import ContainerWidth from './ContainerWidth';
import hand from '~/assets/images/testimonial/groupHand.svg';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ReadyToTalk = ({ buttonName, paraText, headingText }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-zinc-950 w-full h-full">
        <ContainerWidth customClassName="container">
          <div className="md:px-0  group " data-aos="fade-up" data-aos-duration="1200">
            <div className="flex  flex-col bg-[#181818]   my-14 lg:flex-row  border-1 shadow-2xl rounded-3xl xl:gap-24 ">
              <div className="flex flex-col justify-start  lg:w-1/2   box-shadow  p-6">
                <h1 className="text-4xl  font-bold mb-6 " data-aos="fade-up" data-aos-duration="1200 ">
                  {headingText}
                </h1>
                <p className="mb-4  text-secondColor" data-aos="fade-up" data-aos-duration="1200">
                  {paraText}
                </p>

                <button
                  className="common-gradient-background mb-4 rounded-2xl text-white px-4 py-2 text-sm h-12 w-34 lg:w-36  whitespace-nowrap mx-auto lg:mx-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  //   onClick={buttonMethod}
                >
                  {buttonName || 'send Message'}
                </button>
              </div>

              <div className="lg:w-1/2  hidden lg:block " data-aos="fade-up" data-aos-duration="2000">
                <Image src={hand} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </ContainerWidth>
      </div>
    </>
  );
};

export default ReadyToTalk;
