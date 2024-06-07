'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';
import teamIcon from '../../../assets/images/join-team/growing_team.svg';

// import { urlForImage } from '../../../../sanity/lib/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';

export default function GrowingTeam({ joinTeam }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  //!!  image code is pending

  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="flex flex-col w-full h-full justify-center items-center p-4 lg:py-4 mt-20">
          <div className="flex justify-center items-center">
            <h1
              className="font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-purpleColor"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {joinTeam?.headingText}
            </h1>
          </div>
          <p
            className="font-poppins font-medium text-sm sm:text-base md:text-lg  lg:text-1xl  text-firstColor text-center my-4 md:w-3/5 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {joinTeam?.paraText}
          </p>
          <Link
            href={'/join-team#current-opening'}
            className="font-poppins font-bold text-white  primary-gradient-border-color mb-4 px-4 py-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            See Current Openings
          </Link>
          {joinTeam && (
            <div className="w-full h-full mx-auto" data-aos="fade-up" data-aos-duration="1200">
              {/* {joinTeam && (
            <Image src={urlForImage(joinTeam.image.asset._ref).url()} alt="group image" width={800} height={600} />
          )} */}
              {joinTeam && <Image src={teamIcon} alt="group image" />}
            </div>
          )}
        </div>
      </ContainerWidth>
    </>
  );
}
