// CommonInput.js

import React from 'react';

const CommonTextArea = ({ label, id, placeholder, register, errors, name, labelClassName, inputClassName }) => {
  return (
    <div>
      <label
        className={`block font-poppins  mb-2 font-regular text-sm text-white ${labelClassName ? labelClassName : ''}`}
        data-aos="fade-up"
        data-aos-duration="1200"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        data-aos="fade-up"
        data-aos-duration="1200"
        className={`font-poppins border border-gray-400 py-2 px-4 w-full rounded-2xl bg-transparent focus-within:outline-none focus:outline-none focus:primary-gradient-form-border-color ${
          inputClassName ? inputClassName : ''
        }`}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors && errors[name] && (
        <p className="text-red-500 font-poppins font-regular text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default CommonTextArea;
