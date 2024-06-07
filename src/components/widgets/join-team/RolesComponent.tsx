import React from 'react';
import CommonButton from '~/components/common/CommonButton';
import ContainerWidth from '~/components/common/ContainerWidth';

export default function RolesComponent({ text, title, location }) {
  return (
    <>
      <div className="flex flex-col p-4 md:p-0 w-full h-full bg-zinc-950">
        <ContainerWidth customClassName="container ">
          <div className="flex flex-col p-2 md:flex-row md:p-4  w-full justify-between items-center mt-20 ">
            <h1
              className="font-poppins font-medium  white text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {title}
            </h1>
            <CommonButton
              type="button"
              customClassName="font-poppins font-semibold text-white  text-base  primary-gradient-border-color"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Apply Now
            </CommonButton>
          </div>
          <p
            className="font-poppins font-regular text-base md:text-lg xl:text-1xl text-secondColor  p-2 md:p-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {text}
          </p>
          <ul className="list-disc p-4  md:flex w-full justify-around font-poppins font-regular text-secondColor text-base md:text-xl lg:text-2xl lg:w-2/3">
            {location &&
              location?.map((el) => {
                return (
                  <li
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    key={el?._key}
                    className="font-poppins font-regular text-base md:text-lg xl:text-1xl"
                  >
                    {el}
                  </li>
                );
              })}
          </ul>
        </ContainerWidth>
      </div>
    </>
  );
}
