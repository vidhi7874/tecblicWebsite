import React from 'react';

function CommonButton({ type, customClassName = '', children, disabled = false, ...restProps }) {
  return (
    <button
      data-aos="fade-up"
      data-aos-duration="1200"
      type={type ? type : 'button'}
      className={`text-white font-poppins font-bold text-sm rounded-lg px-5 py-2.5 uppercase  focus:ring-1  focus:outline-none lg:mb-2 ${customClassName}`}
      // onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default CommonButton;
