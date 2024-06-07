import React from 'react';
import ContainerWidth from '../../common/ContainerWidth';
import Image from 'next/image';
import compassIcon from '../../../assets/images/case-study/compass.svg';
import projectIcon from '../../../assets/images/case-study/project.svg';
import pencilIcon from '../../../assets/images/case-study/pencil.svg';
import filterIcon from '../../../assets/images/case-study/Filter.svg';
import siderIcon from '../../../assets/images/case-study/sider.svg';
import { makingOfDataPage } from '~/shared/data/pages/case-study.data';

export default function MakingOfComponent() {
  const {
    headingText,
    paraText,
    timeline_cards: { card1, card2, card3, card4, card5, card6 },
  } = makingOfDataPage;
  return (
    <>
      <div className="bg-zinc-950 w-full h-full">
        <ContainerWidth>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="font-rubik font-bold text-white text-xl sm:text-3xl md:text-4xl text-5xl">
              {headingText.h1Text}
            </h1>
            <p className="font-rubik font-regular text-xs sm:text-sm md:text-base text-2xl my-4 md:w-4/6 lg:w-3/5 text-center mx-auto">
              {paraText}
            </p>
            {/* for the timeline  */}
            <div>
              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                    {/* for the circle over the line  */}
                    <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-gray-900 shrink-0 border border-firstColor bg-black"></div>
                    {/* line div  */}
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 border border-warning-200"></div>
                  </div>
                  {/* card code  */}
                  <div className="mt-3 p-4 lg:p-6  flex flex-col items-start  space-y-16  border border-neutral-700 rounded-3xl bg-gradient-to-b from-black from-20% to-neutral-700 mx-2">
                    <span className="w-full h-full">
                      <Image src={compassIcon} alt="compass" width={30} height={30} />
                    </span>

                    <p className="font-rubik font-bold text-xs sm:text-base lg:text-lg">{card1.text}</p>
                  </div>
                </li>

                <li className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                    {/* for the circle over the line  */}
                    <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-gray-900 shrink-0 border border-firstColor bg-black"></div>
                    {/* line div  */}
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 border border-warning-200"></div>
                  </div>
                  {/* card code  */}
                  <div className="mt-3 p-4 lg:p-6  flex flex-col items-start  space-y-16  border border-neutral-700 rounded-3xl bg-gradient-to-b from-black from-20% to-neutral-700 mx-2">
                    <span className="w-full h-full">
                      <Image src={compassIcon} alt="compass" width={30} height={30} />
                    </span>

                    <p className="font-rubik font-bold text-xs sm:text-base lg:text-lg">{card2.text}</p>
                  </div>
                </li>

                <li className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                    {/* for the circle over the line  */}
                    <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-gray-900 shrink-0 border border-firstColor bg-black"></div>
                    {/* line div  */}
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 border border-warning-200"></div>
                  </div>
                  {/* card code  */}
                  <div className="mt-3 p-4 lg:p-6  flex flex-col items-start  space-y-16  border border-neutral-700 rounded-3xl bg-gradient-to-b from-black from-20% to-neutral-700 mx-2">
                    <span className="w-full h-full">
                      <Image src={filterIcon} alt="compass" width={30} height={30} />
                    </span>

                    <p className="font-rubik font-bold text-xs sm:text-base lg:text-lg">{card3.text}</p>
                  </div>
                </li>

                <li className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                    {/* for the circle over the line  */}
                    <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-gray-900 shrink-0 border border-firstColor bg-black"></div>
                    {/* line div  */}
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 border border-warning-200"></div>
                  </div>
                  {/* card code  */}
                  <div className="mt-3 p-4 lg:p-6  flex flex-col items-start  space-y-16  border border-neutral-700 rounded-3xl bg-gradient-to-b from-black from-20% to-neutral-700 mx-2">
                    <span className="w-full h-full">
                      <Image src={pencilIcon} alt="compass" width={30} height={30} />
                    </span>

                    <p className="font-rubik font-bold text-xs sm:text-base lg:text-lg">{card4.text}</p>
                  </div>
                </li>

                <li className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                    {/* for the circle over the line  */}
                    <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-gray-900 shrink-0 border border-firstColor bg-black"></div>
                    {/* line div  */}
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 border border-warning-200"></div>
                  </div>
                  {/* card code  */}
                  <div className="mt-3 p-4 lg:p-6  flex flex-col items-start  space-y-16  border border-neutral-700 rounded-3xl bg-gradient-to-b from-black from-20% to-neutral-700 mx-2">
                    <span className="w-full h-full">
                      <Image src={siderIcon} alt="compass" width={30} height={30} />
                    </span>

                    <p className="font-rubik font-bold text-xs sm:text-base lg:text-lg">{card5.text}</p>
                  </div>
                </li>

                <li className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                    {/* for the circle over the line  */}
                    <div className="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0 ring-gray-900 shrink-0 border border-firstColor bg-black"></div>
                    {/* line div  */}
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 border border-warning-200"></div>
                  </div>
                  {/* card code  */}
                  <div className="mt-3 p-4 lg:p-6  flex flex-col items-start  space-y-16  border border-neutral-700 rounded-3xl bg-gradient-to-b from-black from-20% to-neutral-700 mx-2">
                    <span className="w-full h-full">
                      <Image src={compassIcon} alt="compass" width={30} height={30} />
                    </span>

                    <p className="font-rubik font-bold text-xs sm:text-base lg:text-lg">{card6.text}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </ContainerWidth>
      </div>
    </>
  );
}
