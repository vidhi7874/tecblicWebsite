import Image from 'next/image';
import React from 'react';
import diamond from '../../../assets/images/testimonial/diamond.svg';
import rightArrow from '../../../assets/images/testimonial/rightArrow.svg';

export default function MenuHeadingComponent() {
  return (
    <>
      {/* These Is For What We Do */}
      <div className="flex ">
        {/* First Column */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-bold mb-4">SERVICES</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            {/* Add more services as needed */}
          </ul>
        </div>

        {/* Second Column */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-bold mb-4">TECHNOLOGIES</h2>
          <ul>
            <li>Technology 1</li>
            <li>Technology 2</li>
            {/* Add more technologies as needed */}
          </ul>
        </div>

        {/* Third Column */}
        {/* <div className="flex-1 p-4">
          <h2 className="text-lg font-bold mb-4">INDUSTRIES</h2>
          <ul>
            <li>Industry 1</li>
            <li>Industry 2</li>
            Add more industries as needed
          </ul>
        </div> */}
      </div>

      {/* These Is For What We Think */}
      <div className="bg-zinc-950 p-2">
        <div className="flex gap-4">
          <div className="flex bg-black p-2 rounded-xl gap-4">
            <div>
              <Image src={diamond} width={50} height={50} alt="Picture of the author" />
            </div>
            <div className="font-bold">
              <p>Use cases</p>
              <div className="flex gap-1">
                <p>Browse all</p>
                <Image src={rightArrow} width={10} height={10} alt="Picture of the author" />
              </div>
            </div>
          </div>
          <div className="flex bg-black p-2 rounded-xl gap-4">
            <div>
              <Image src={diamond} width={50} height={50} alt="Picture of the author" />
            </div>
            <div className="font-bold">
              <p>Resources</p>
              <div className="flex gap-1">
                <p>More resources</p>
                <Image src={rightArrow} width={10} height={10} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* These Is For Who We Are */}
      <div className="bg-zinc-950 p-2">
        <div className="flex flex-wrap gap-4">
          <div className="flex  p-2 rounded-xl gap-4">
            <div>
              <Image src={diamond} width={50} height={50} alt="Picture of the author" />
            </div>
            <div className="font-bold">
              <div className="flex gap-1 font-bold">
                <p>About us</p>
                <Image src={rightArrow} width={10} height={10} alt="Picture of the author" />
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
          <div className="flex p-2 rounded-xl gap-4">
            <div>
              <Image src={diamond} width={50} height={50} alt="Picture of the author" />
            </div>
            <div className="font-bold">
              <div className="flex gap-1 font-bold">
                <p>Our team</p>
                <Image src={rightArrow} width={10} height={10} alt="Picture of the author" />
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>{' '}
          <div className="flex  p-2 rounded-xl gap-4">
            <div>
              <Image src={diamond} width={50} height={50} alt="Picture of the author" />
            </div>
            <div className="font-bold">
              <div className="flex gap-1 font-bold">
                <p>Vision, Mission</p>
                <Image src={rightArrow} width={10} height={10} alt="Picture of the author" />
              </div>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
