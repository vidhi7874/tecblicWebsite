import React from 'react';
import ContainerWidth from '~/components/common/ContainerWidth';

export default function Responsibility({ roles, qualification, requirement }) {
  console.log('roles: ', roles);
  return (
    <>
      <ContainerWidth customClassName="container">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="p-6 overflow-hidden">
            <h2
              className="font-poppins font-medium  white mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {roles?.role_heading}
            </h2>
            <ul className="list-disc  w-full font-poppins font-regular text-base md:text-lg xl:text-1xl text-secondColor">
              {roles?.roles_data &&
                roles?.roles_data?.map((el) => {
                  return (
                    <li data-aos="fade-up" data-aos-duration="700" key={el?._key}>
                      {el}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="p-6 overflow-hidden">
            <h2
              className="font-poppins font-medium  white mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {qualification?.qua_heading}
            </h2>
            <ul className="list-disc  w-full ">
              {qualification?.qua_data &&
                qualification?.qua_data?.map((el) => {
                  return (
                    <li
                      data-aos="fade-up"
                      data-aos-duration="700"
                      key={el?._key}
                      className="font-poppins font-regular text-base md:text-lg xl:text-1xl text-secondColor"
                    >
                      {el}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="p-6 overflow-hidden">
            <h2
              className="font-poppins font-medium  white mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {requirement?.req_heading}
            </h2>
            <ul className="list-disc  w-full  font-poppins font-regular text-base md:text-lg xl:text-1xl text-secondColor">
              {requirement?.req_data &&
                requirement?.req_data?.map((el) => {
                  return (
                    <li data-aos="fade-up" data-aos-duration="700" key={el?._key}>
                      {el}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </ContainerWidth>
    </>
  );
}
