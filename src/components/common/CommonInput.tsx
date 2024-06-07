// import React from 'react';

// const CommonInput = ({
//   id,
//   label,
//   name,
//   type,
//   labelClassName,
//   inputClassName,
//   placeholder,
//   //  value, onChange
// }) => {
//   return (
//     <div className="">
//       <label
//       data-aos="fade-up"
//       data-aos-duration="1200"
//         htmlFor={id}
//         className={`block mb-2 font-regular text-sm text-white ${labelClassName ? labelClassName : ''}`}
//       >
//         {label}
//       </label>
//       <input
//       data-aos="fade-up"
//       data-aos-duration="1200"
//         name={name ? name : ''}
//         type={type ? type : 'text'}
//         id={id}
//         // value={value ? value : ''}
//         // onChange={onChange}
//         placeholder={placeholder}
//         className={`border border-gray-400 py-2 px-4 w-full rounded-2xl bg-transparent focus-within:outline-none focus:outline-none focus:primary-gradient-border-color ${
//           inputClassName ? inputClassName : ''
//         }`}
//       />
//     </div>
//   );
// };

// export default CommonInput;

import React from 'react';

const CommonInput = ({
  id,
  label,
  type,
  labelClassName,
  inputClassName,
  placeholder,
  name,
  register, // Add the register prop
  errors, // Add the errors prop
}) => {
  return (
    <div className="">
      <label
        data-aos="fade-up"
        data-aos-duration="1200"
        htmlFor={id}
        className={`font-poppins block mb-2 font-regular text-sm text-white ${labelClassName ? labelClassName : ''}`}
      >
        {label}
      </label>
      <input
        data-aos="fade-up"
        data-aos-duration="1200"
        name={name ? name : ''}
        type={type ? type : 'text'}
        id={id}
        placeholder={placeholder}
        className={`font-poppins border border-gray-400 py-2 px-4 w-full rounded-2xl bg-transparent focus-within:outline-none focus:outline-none focus:primary-gradient-form-border-color ${
          inputClassName ? inputClassName : ''
        }`}
        {...register(name)} // Register input with react-hook-form
      />
      {errors && errors[name] && (
        <p className="text-red-500 font-poppins font-regular text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default CommonInput;
