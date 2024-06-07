import React from 'react';

export default function CommonLoader({ bgColor }: any) {
  return (
    <>
      <div className="relative w-full h-[60vh]">
        <div className=" absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
          <div className="p-1.5 bg-gradient-to-tr animate-spin from-[#8c66fb] to-[#01c2de] rounded-full">
            <div className={`bg-black rounded-full ${bgColor ? bgColor : ''}`}>
              <div className="w-10 h-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
