import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import attachIcon from '../../assets/images/ProjectDetails/attachment_icon.svg';

export default function UploadIcon({
  id,
  label,
  name,
  labelClassName,
  inputClassName,
  onChange,
  register,
  errors,
  fileNameFN,
  divClassName,
}) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    fileNameFN(selectedFile?.name);
    onChange(e);
  };

  return (
    <div className="file-input-container-common flex flex-col">
      <input
        name={name ? name : ''}
        type="file"
        id={id}
        {...register(name)}
        onChange={handleFileChange}
        className={`hidden font-poppins ${inputClassName}`}
      />
      <div className={`flex items-center primary-gradient-form-border-color-2  p-3 px-6 rounded-3xl ${divClassName}`}>
        <span>
          <Image src={attachIcon} alt="attachment" width={20} height={20} />
        </span>
        <label
          htmlFor={id}
          className={`file-label font-poppins font-semibold text-white text-base ${labelClassName} whitespace-nowrap`}
        >
          {label}
        </label>
      </div>
      {errors && errors.attachment && (
        <p className="text-red-500 font-poppins font-regular text-sm mt-1">{errors.attachment.message}</p>
      )}
    </div>
  );
}
