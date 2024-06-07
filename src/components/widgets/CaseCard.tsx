import Image from 'next/image';

import rightIcon from '../../assets/images/ArrowRight.svg';
import Link from 'next/link';
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function CaseCard({ main_title, text, route_id, image_url, index }) {
  return (
    <>
      <Link href={`/case-study/${route_id}`}>
        <div
          className={`w-full h-full rounded-2xl bg-[#111111]  flex flex-col lg:flex-row  lg:justify-center items-center  ${
            index % 2 === 0 ? '' : 'lg:flex-row-reverse'
          }`}
        >
          <Image src={image_url} alt="card_img" width={800} height={400} />

          <div className="w-full h-full px-3 flex flex-col  justify-start items-start mx-6 py-6">
            <h1 className="font-poppins font-bold text-2xl text-white mt-4 ">{main_title || ''}</h1>
            <p
              className="font-poppins font-regular text-base lg:text-lg text-secondColor my-4  "
              data-aos-duration="1200"
              data-aos="fade-up"
            >
              {text || ''}
            </p>

            <button className="font-poppins font-bold text-base text-white  primary-gradient-button-border-color w-56 h-10 px-4 mb-4 flex justify-center items-center group relative">
              View Case Study{' '}
              {/* <span className="ml-3">
                <Image src={rightIcon} alt="icon" width={20} height={20} />
              </span> */}
              {/* <IconArrowNarrowRight className="ml-3" size={20} strokeWidth={2} color={'#eeebd9'} /> */}
              <IconArrowNarrowRight
                className="ml-3 transition-all duration-300 group-hover:translate-x-2"
                size={20}
                strokeWidth={2}
                color={'#eeebd9'}
              />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
