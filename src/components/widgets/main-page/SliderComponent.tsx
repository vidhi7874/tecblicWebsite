'use client';
import React, { useState } from 'react';
import SwitchToggler from '~/components/common/CommonSwitchToggler';
import ContainerWidth from '~/components/common/ContainerWidth';
import Industry from './Industry';
import TechFinity from './TechFinity';

export default function SliderComponent({ techfinityData, industryData }: any) {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <ContainerWidth customParentClassName="bg-zinc-950" customClassName="container">
        <div className="flex flex-col justify-start items-center content-center">
          <h1 className="font-poppins font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-7">
            TechFinity
          </h1>
          <SwitchToggler
            id="industry_toggler"
            dataOff="Technology"
            dataOn="Services"
            isChecked={isChecked}
            onChange={handleToggle}
          />
          <div className="flex flex-col justify-start items-center w-full h-full">
            {isChecked ? <TechFinity techfinityData={techfinityData} /> : <Industry industryData={industryData} />}
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
