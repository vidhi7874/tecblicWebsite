'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import laptopImg from '~/assets/images/laptopMainPage.svg';
import Header from '../Header';

export default function FigmaLink() {
  const router = useRouter();
  const [figmaLink, setFigmaLink] = useState('');
  const [isValidLink, setIsValidLink] = useState(true);

  const handleInputChange = (event) => {
    const link = event.target.value;
    setFigmaLink(link);
    // Validate the link (you can customize this validation according to your needs)
    setIsValidLink(isValidFigmaLink(link));
  };

  const isValidFigmaLink = (link) => {
    // Simple link validation, you can customize this function based on your requirements
    return link.startsWith('https://www.figma.com/');
  };

  const handleGenerateCode = () => {
    // Validate the link again before navigating
    if (isValidFigmaLink(figmaLink)) {
      // Navigate to another page (you may want to replace '/another-page' with your actual route)
      router.push('/animation-success');
    } else {
      // If the link is not valid, set isValidLink to false to show the red border
      setIsValidLink(false);
    }
  };

  return (
    <div className="mx-0 my-0 md:mx-12 lg:mx-16 md:my-6 lg:my-10 h-vh">
      <Header />

      <div className="flex justify-between lg:flex-row flex-col">
        <div className="lg:w-[50%]">
          <h4 className="text-5xl mt-10 text-black-100 font-poppins font-semibold">
            Design with us to unlock your creativity
          </h4>
          <p className="mt-5 text-xl text-gray-100 font-poppins font-normal">
            Access thousands of design resources to generate into HTML Code
          </p>

          <div className={`flex flex-col lg:w-80 mt-6 ${!isValidLink ? 'border-red-500' : ''}`}>
            <label className="text-gray-100 font-poppins font-normal">Paste Figma Link Here</label>
            <input
              type="url"
              value={figmaLink}
              onChange={handleInputChange}
              className={`border mt-2 rounded-lg py-2 text-gray-100 px-3 ${
                !isValidLink ? 'border-red-500' : 'border-primary-600'
              }`}
            />
          </div>

          <button
            onClick={handleGenerateCode}
            className="mt-4 border font-poppins border-primary-600 w-full lg:w-80 rounded-lg py-2 text-white bg-primary font-semibold"
          >
            Generate Code
          </button>
        </div>

        <div className="hidden lg:block flex justify-center lg:w-[50%]">
          <Image src={laptopImg} alt="laptopImg" width={520} className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
