'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CommonInput from '~/components/common/CommonInput';
import UploadIcon from '~/components/common/UploadIcon';
import emailjs from '@emailjs/browser';
import CommonButton from '~/components/common/CommonButton';
import ContainerWidth from '~/components/common/ContainerWidth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectSchema } from '~/validation/schema';
import { fetchAddressData, sendFormDataToSanity } from 'apis';
import { urlForImage } from '../../../../sanity/lib/image';
import CommonTextArea from '~/components/common/CommonTextArea';
import configuration from '~/config/schema.config';

export default function ContactUs() {
  const [addressData, setAddressData] = useState(null);
  const [fileNames, setFileNames] = useState('');
  const form = useRef();
  function fileNameFN(data) {
    setFileNames(data);
  }

  const handleFileChange = (e) => {
    setValue('my_file', e.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const onSubmit = async (data) => {
    let schemaName: string = configuration.FORM_DATA.CONTACT_US;
    await sendFormDataToSanity(data, schemaName);

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

  useEffect(() => {
    async function fetchData() {
      const data: any = await fetchAddressData();
      setAddressData(data);
    }
    fetchData();
  }, []);

  return (
    <ContainerWidth customParentClassName="bg-zinc-950" customClassName="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 " id="contact_us">
        <div className="p-6 primary-gradient-form-border-color w-full overflow-hidden">
          <h1
            className="font-roboto font-strong text-white mb-2 text-lg sm:text-xl md:text-2xl lg:mb-2"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Share Your Project Details
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} ref={form} data-aos="fade-up" data-aos-duration="1200">
            <div className="my-2">
              <CommonInput
                type="text"
                label="Enter full name"
                name="full_name"
                id="full_name"
                placeholder="Enter first name"
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
                id="description"
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
              <div className="flex justify-center items-center ">
                <UploadIcon
                  fileNameFN={fileNameFN}
                  labelClassName=""
                  inputClassName=""
                  divClassName="primary-gradient-button-border-color p-3 px-6 rounded-3xl "
                  id="attachment1"
                  name="my_file"
                  label={'Attach a File'}
                  register={register}
                  errors={errors}
                  onChange={handleFileChange}
                />
                <p className="font-roboto font-regular text-white ml-2 md:ml-3 text-sm md:text-base mt-1">
                  {fileNames ? fileNames : 'File Format we accept: Pdf, Document'}
                </p>
              </div>
            </div>
            <div className="cols-span-1 md:col-span-2">
              <CommonButton
                type="submit"
                customClassName="font-poppins font-bold text-white  primary-gradient-form-border-color  w-full py-3"
              >
                Enquire Now
              </CommonButton>
            </div>
          </form>
        </div>

        <div className="">
          <h1 className="font-roboto font-bold text-white text-xl uppercase">{addressData?.headingText}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 border-b border-b-gray-700 pb-4">
            {addressData?.addressData &&
              addressData?.addressData?.map((el) => {
                return (
                  <div className="flex gap-2" key={el?._key}>
                    <div className="flex-none">
                      <Image
                        src={urlForImage(el?.image?.asset?._ref).url()}
                        alt="Indian Flag"
                        width={20}
                        height={20}
                        className="w-6 h-4"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-roboto font-semibold text-white text-xl leading-5">{el?.country}</h2>
                      <p className="font-roboto font-regular text-secondColor text-sm mt-3">{el?.address}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="grid grid-cols-2 gap-5 py-5">
            {addressData?.info &&
              addressData?.info?.map((item) => {
                return (
                  <div key={item?._key}>
                    <h2 className="font-roboto font-regular text-secondColor text-sm uppercase">{item?.label_name}</h2>
                    <p className="font-roboto font-semibold text-white text-base">{item?.label_value}</p>
                  </div>
                );
              })}
          </div>

          <div className="mt-5">
            <h2 className="font-roboto font-regular text-secondColor text-sm uppercase mb-2">Social media</h2>
            <div className="flex gap-5 flex-wrap">
              {addressData?.icons &&
                addressData?.icons?.map((el) => {
                  return (
                    <Image
                      key={el?._key}
                      src={urlForImage(el?.image?.asset?._ref).url()}
                      alt="social_icons"
                      width={15}
                      height={15}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </ContainerWidth>
  );
}
