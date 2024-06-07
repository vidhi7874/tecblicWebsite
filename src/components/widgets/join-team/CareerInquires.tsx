'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import CommonButton from '~/components/common/CommonButton';
import CommonInput from '~/components/common/CommonInput';
import ContainerWidth from '~/components/common/ContainerWidth';
import UploadIcon from '~/components/common/UploadIcon';
import { career_inquiries } from '~/validation/schema';
import { careerInquiriesData } from '~/shared/data/pages/join-team.data';
import CommonTextArea from '~/components/common/CommonTextArea';
import { sendFormDataToSanity } from 'apis';
import configuration from '~/config/schema.config';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CareerInquires() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(career_inquiries),
  });
  const [fileNames, setFileNames] = useState('');
  const form = useRef();

  function fileNameFN(data) {
    setFileNames(data);
  }

  const onSubmit = async (data) => {
    const schemaName: string = configuration.FORM_DATA.CAREERS;
    await sendFormDataToSanity(data, schemaName);
    // send email code
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID,
      )
      .then(
        (result) => {
          console.log('mail send', result);
        },
        (error) => {
          console.log('error in sending >>', error.text);
        },
      );
    setValue('my_file', null);
    setFileNames(null);
    reset();
  };
  const handleFileChange = (e) => {
    setValue('my_file', e.target.files[0]);
  };

  const {
    headingText: { line1, line2 },
  } = careerInquiriesData;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ContainerWidth customParentClassName="bg-zinc-950" customClassName="container">
        <div className="p-4 primary-gradient-border-color w-full">
          <h1
            className="font-bold text-white mb-2 text-xl md:text-2xl lg:mb-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {line1}
            <span className=" text-secondColor" data-aos="fade-up" data-aos-duration="1200">
              {line2}
            </span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} ref={form} data-aos="fade-up" data-aos-duration="1200">
            <div className="my-2">
              <CommonInput
                type="text"
                label="Enter name"
                name="full_name"
                id="full_name"
                placeholder="Enter full name"
                labelClassName=""
                inputClassName=""
                register={register}
                errors={errors}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
              <CommonInput
                labelClassName=""
                inputClassName=""
                type="email"
                label="Enter email"
                name="user_email"
                id="email"
                placeholder="Enter email"
                register={register}
                errors={errors}
              />

              <CommonInput
                type="text"
                label="Enter mobile number"
                name="mobile_number"
                id="mobile_number"
                placeholder="8200312547"
                labelClassName=""
                inputClassName=""
                register={register}
                errors={errors}
              />
            </div>

            <div className="my-2">
              <CommonTextArea
                id="description2"
                label="Enter description"
                placeholder="Enter description"
                name="description"
                labelClassName=""
                inputClassName=""
                register={register}
                errors={errors}
              />
            </div>

            <div className="cols-span-1 md:col-span-2 flex space-x-2 my-2">
              <div className="flex justify-center items-center">
                <UploadIcon
                  fileNameFN={fileNameFN}
                  labelClassName=""
                  inputClassName=""
                  divClassName=""
                  id="attachment1"
                  name="my_file"
                  label={'Attach a File'}
                  register={register}
                  errors={errors}
                  onChange={handleFileChange}
                />
                <p className="font-roboto font-regular text-white text-sm ml-2 md:text-base mt-1">
                  {fileNames ? fileNames : 'File Format we accept: Pdf, Document'}
                </p>
              </div>
            </div>
            <div className="cols-span-1 md:col-span-2">
              <CommonButton
                type="submit"
                customClassName="font-poppins font-bold text-white  primary-gradient-border-color w-full py-3"
              >
                Enquire Now
              </CommonButton>
            </div>
          </form>
        </div>
      </ContainerWidth>
    </>
  );
}
