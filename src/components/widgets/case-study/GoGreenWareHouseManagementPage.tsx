import React from 'react';
import ContainerWidth from '../../common/ContainerWidth';
import Image from 'next/image';
// import cardPic from '../../../assets/images/case-study/card-image.png';

export default function GoGreenWareHouseManagementPage({ title, text, image_url }) {
  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="flex flex-col justify-center items-center pt-20">
          <h1 className="font-rubik font-bold text-white text-xl sm:text-3xl md:text-4xl text-5xl">{title}</h1>
          <p className="font-rubik font-regular text-xs sm:text-sm md:text-base text-2xl my-4 md:w-4/6 lg:w-3/5 text-center mx-auto">
            {text}
          </p>

          <div className="w-full h-full md:w-3/5 md:h-1/2 lg:w-2/5 md:h-2/5">
            <Image src={image_url} alt="card pic" width={800} height={400} />
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
