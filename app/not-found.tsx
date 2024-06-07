import React from 'react';
import ErrorImg from '~/assets/images/Not-found/404.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center gap-5">
        <Image src={ErrorImg} alt="Error image" height={300} width={400} className=""></Image>
        <p className="text-white md:text-2xl text-lg font-normal">OPPS! PAGE NOT BE FOUND</p>

        <Link
          href="/"
          className="primary-gradient-border-color rounded-lg py-2 px-5 md:text-xl font-poppins font-medium text-white text-base text-nowrap'"
        >
          Go Back To Home
        </Link>
      </div>
    </>
  );
}
