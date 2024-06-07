import React from 'react';
import ContainerWidth from '../../common/ContainerWidth';
import Image from 'next/image';
import timeIcon from '../../../assets/images/case-study/time.svg';
import improveIcon from '../../../assets/images/case-study/improvement.svg';
import chartIcon from '../../../assets/images/case-study/chart.svg';
import worldIcon from '../../../assets/images/case-study/world.svg';
import tickIcon from '../../../assets/images/case-study/tick.svg';
import oneIcon from '../../../assets/images/case-study/one.svg';
import twoIcon from '../../../assets/images/case-study/two.svg';
import threeIcon from '../../../assets/images/case-study/three.svg';
import percentageIcon from '../../../assets/images/case-study/percentage.svg';
import { projectHighlightsPage, whatChallengePage } from '~/shared/data/pages/case-study.data';

export default function ChallengeComponent() {
  const {
    headingText,
    paraText,
    challenge_list: { list1, list2, list3 },
    challenge_cards: { card1, card2 },
  } = whatChallengePage;

  const {
    headingText: projectHeadingText,

    project_list,
    project_cards,
  } = projectHighlightsPage;
  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="w-full h-full grid grid-col-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h1 className="font-rubik font-bold text-xl text-white sm:text-3xl md:text-4xl text-5xl">
                {headingText.h1Text} <span className="text-secondColor">{headingText.h2Text}</span>
              </h1>

              <p className="font-rubik font-regular text-xs sm:text-sm md:text-base text-2xl my-4 mb-8  text-left">
                {paraText}
              </p>

              {/* code for 3 box  */}
              <div className="w-full  grid grid-cols-1 gap-2 py-4 px-2">
                <div className="w-full flex justify-start p-2">
                  <div className="w-1/6 ">
                    <span>
                      <Image src={tickIcon} alt="tick icon" width={30} height={30} />
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg text-xl">
                      {list1.title}
                    </h2>
                    <p className="font-rubik font-regular text-firstColor text-sm sm:text-base md:text-lg text-xl my-2">
                      {list1.text}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-start p-2">
                  <div className="w-1/6 ">
                    <span>
                      <Image src={tickIcon} alt="tick icon" width={30} height={30} />
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg text-xl">
                      {list2.title}
                    </h2>
                    <p className="font-rubik font-regular text-firstColor text-sm sm:text-base md:text-lg text-xl my-2">
                      {list2.text}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-start p-2">
                  <div className="w-1/6 ">
                    <span>
                      <Image src={tickIcon} alt="tick icon" width={30} height={30} />
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg text-xl">
                      {list3.title}
                    </h2>
                    <p className="font-rubik font-regular text-firstColor text-sm sm:text-base md:text-lg text-xl my-2">
                      {list3.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 p-8 justify-center items-center">
              <div className="flex justify-start items-center bg-zinc-950 p-8 rounded-2xl">
                {/* for spinner  */}
                <div className="mr-4">
                  <span>
                    <Image src={percentageIcon} alt="percentage icon" width={80} height={80} />
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <h4 className="font-rubik font-regular text-white text-xs sm:text-sm md:text-base lg:text-lg">
                    {card1.card_title}
                  </h4>
                  <h2 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    {card1.card_subTitle}
                  </h2>
                  <p className="font-rubik font-regular text-secondColor text-xs sm:text-sm md:text-base lg:text-lg">
                    {card1.card_text}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center bg-zinc-950 p-8 rounded-2xl">
                {/* for spinner  */}
                <div className="mr-4">
                  <span>
                    <Image src={percentageIcon} alt="percentage icon" width={80} height={80} />
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <h4 className="font-rubik font-regular text-white text-xs sm:text-sm md:text-base lg:text-lg">
                    {card2.card_title}
                  </h4>
                  <h2 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    {card2.card_subTitle}
                  </h2>
                  <p className="font-rubik font-regular text-secondColor text-xs sm:text-sm md:text-base lg:text-lg">
                    {card2.card_text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* second part  */}
          <div>
            <h1 className="font-rubik font-semibold text-white text-lg sm:text-2xl md:text-3xl text-4xl my-4 md:my-6">
              {projectHeadingText?.h1Text} <span className="text-secondColor">{projectHeadingText?.h2Text}</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-950 flex flex-col justify-evenly items-start p-4 rounded-2xl">
                  <span>
                    <Image src={timeIcon} alt="time icon" width={50} height={50} />
                  </span>
                  <h3 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl my-4">
                    {project_cards?.card1.card_title}
                  </h3>
                  <p className="font-rubik font-regular text-secondColor text-xs sm:text-sm md:text-base">
                    {project_cards?.card1.card_text}
                  </p>
                </div>
                <div className="bg-zinc-950 flex flex-col justify-evenly items-start p-4 rounded-2xl">
                  <span>
                    <Image src={improveIcon} alt="time icon" width={50} height={50} />
                  </span>
                  <h3 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl my-4">
                    {project_cards?.card1.card_title}
                  </h3>
                  <p className="font-rubik font-regular text-secondColor text-xs sm:text-sm md:text-base">
                    {project_cards?.card2.card_text}
                  </p>
                </div>
                <div className="bg-zinc-950 flex flex-col justify-evenly items-start p-4 rounded-2xl">
                  <span>
                    <Image src={worldIcon} alt="time icon" width={50} height={50} />
                  </span>
                  <h3 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl my-4">
                    {project_cards?.card3.card_title}
                  </h3>
                  <p className="font-rubik font-regular text-secondColor text-xs sm:text-sm md:text-base">
                    {project_cards?.card3.card_text}
                  </p>
                </div>
                <div className="bg-zinc-950 flex flex-col justify-evenly items-start p-4 rounded-2xl">
                  <span>
                    <Image src={chartIcon} alt="time icon" width={50} height={50} />
                  </span>
                  <h3 className="font-rubik font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl my-4">
                    {project_cards?.card4.card_title}
                  </h3>
                  <p className="font-rubik font-regular text-secondColor text-xs sm:text-sm md:text-base">
                    {project_cards?.card1.card_text}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-start items-start py-2 border-b border-white not-last:border-b-0">
                  <span className="mr-4">
                    <Image src={oneIcon} alt="tick icon" width={45} height={45} />
                  </span>
                  <div className="flex flex-col items-start justify-between">
                    <h1 className="font-rubik font-semibold text-white  text-base sm:text-lg md:text-xl lg:text-2xl ">
                      {project_list.list1.title}
                    </h1>
                    <p className="font-rubik font-regular text-secondColor text-sm md:text-base lg:text-lg w-4/5">
                      {project_list.list1.text}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start py-2 border-b border-white not-last:border-b-0">
                  <span className="mr-4">
                    <Image src={twoIcon} alt="tick icon" width={45} height={45} />
                  </span>
                  <div className="flex flex-col items-start justify-between">
                    <h1 className="font-rubik font-semibold text-white  text-base sm:text-lg md:text-xl lg:text-2xl ">
                      {project_list.list2.title}
                    </h1>
                    <p className="font-rubik font-regular text-secondColor text-sm md:text-base lg:text-lg w-4/5">
                      {project_list.list2.text}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start py-2  not-last:border-b-0">
                  <span className="mr-4">
                    <Image src={threeIcon} alt="tick icon" width={45} height={45} />
                  </span>
                  <div className="flex flex-col items-start justify-between">
                    <h1 className="font-rubik font-semibold text-white  text-base sm:text-lg md:text-xl lg:text-2xl ">
                      {project_list.list3.title}
                    </h1>
                    <p className="font-rubik font-regular text-secondColor text-sm md:text-base lg:text-lg w-4/5">
                      {project_list.list3.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
