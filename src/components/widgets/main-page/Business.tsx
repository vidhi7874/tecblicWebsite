'use client';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ContainerWidth from '~/components/common/ContainerWidth';
import AnimationCard from '~/components/common/AnimationCard';
import AnimationClassNameFN from '../../../utils/animation.util';
import { useEffect, useState } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';

const Business = ({ business }: any) => {
  const [cardHoverStates, setCardHoverStates] = useState([]);

  useEffect(() => {
    setCardHoverStates(new Array(business?.cardData?.length).fill(false));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
    // eslint-disable-next-line
  }, []);

  const handleCardHover = (index, isHovered) => {
    const newHoverStates = [...cardHoverStates];
    newHoverStates[index] = isHovered;
    setCardHoverStates(newHoverStates);
  };

  return (
    <ContainerWidth customClassName="container">
      <h1 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl  sm:w-full h-full text-center mx-auto">
        {business?.headingText}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 md:mt-7 lg:mt-10 w-4/5 mx-auto">
        {business?.cardData &&
          business?.cardData?.map((el, idx) => {
            return (
              <div className="overflow-hidden relative" key={el?._key} id={el?._key}>
                <h2 className="font-poppins font-strong text-lg sm:text-xl md:text-2xl lg:text-3xl  text-white mb-4">
                  {el?.title}
                </h2>
                <div className=" overflow-hidden">
                  <AnimationCard
                    className={AnimationClassNameFN(4)}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.0}
                    gyroscope={true}
                  >
                    <Image
                      src={urlForImage(el?.image?.asset?._ref).url()}
                      alt="image"
                      data-aos="fade-up"
                      data-aos-duration={idx === 0 ? 500 : idx * 500}
                      width={600}
                      height={600}
                      className=" opacity-50"
                      onMouseEnter={() => handleCardHover(el?._key, true)}
                      onMouseLeave={() => handleCardHover(el?._key, false)}
                      style={{
                        filter: `blur(${cardHoverStates[el?._key] ? '8px' : '0'})`,
                        transition: 'transform 1s ease',
                        transform: `scale(${cardHoverStates[el?._key] ? '2' : '1'})`,
                      }}
                    />
                  </AnimationCard>
                </div>

                {cardHoverStates[el?._key] === true ? (
                  <>
                    <p
                      className={`absolute bottom-44 sm:bottom-96 md:bottom-24 lg:bottom-36 xl:bottom-44 px-5 text-black font-poppins font-regular text-base md:text-xs lg:text-sm xl:text-lg pt-4 `}
                      data-aos="fade-left"
                      data-aos-duration={idx === 0 ? 900 : idx * 900}
                      style={{ pointerEvents: 'none' }}
                    >
                      {el?.text}
                    </p>
                  </>
                ) : null}
              </div>
            );
          })}
      </div>
    </ContainerWidth>
  );
};
export default Business;
