'use client';
import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import { IoCloseOutline } from 'react-icons/io5';

export default function Banner() {
  const posthog = usePostHog();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!(posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing())) {
      setShowBanner(true);
    }
    // eslint-disable-next-line
  }, []);

  if (!showBanner) {
    return null;
  }

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  return (
    <>
      {/* <div>
        <p className="font-poppins">
          We use tracking cookies to understand how you use the product and help us improve it. Please accept cookies to
          help us improve.
        </p>
        <button className="font-poppins" type="button" onClick={acceptCookies}>
          Accept cookies
        </button>
        <span> </span>
        <button className="font-poppins" type="button" onClick={declineCookies}>
          Decline cookies
        </button>
      </div> */}

      <div className="font-poppins text-black text-base md:text-xs lg:text-base  bg-secondColor">
        <div className="flex justify-end -mb-3" onClick={() => setShowBanner(false)}>
          <IoCloseOutline type="button" className="text-black hover:text-black pt-2 cursor-pointer text-3xl" />
        </div>
        <div className="flex justify-between flex-col md:flex-row px-6 py-4 sticky">
          <div className="flex">
            <p className="font-poppins font-regular text-xs sm:text-sm lg:text-base 2xl:text-lg">
              Our site uses cookies.By browsing,you are agreeing to our use of cookies.
            </p>
            {/* <a
              //   onClick={() => SetOpenModal(true)}
              className="underline cursor-pointer text-base md:text-sm lg:text-base"
            >
              See Privacy Policy
            </a> */}
            {/* 
            <Modal show={openModal} onClose={() => SetOpenModal(false)} className="bg-black-100">
              <Modal.Header className="bg-black-90">Our Privacy Policy</Modal.Header>
              <Modal.Body className="bg-white">
                <div className="space-y-6 bg-white text-base leading-relaxed text-gray-500">
                  <p>
                    Start from scratch.Shape the journey of your idea from your mind to the user’s mind.Best suited for
                    startups and firms working on new ideas.
                  </p>

                  <div className="flex justify-end">
                    <button onClick={() => SetOpenModal(false)} className="bg-black text-white px-8 py-1.5">
                      {' '}
                      Save
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal> */}
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-2 md:items-center">
            {/* <a
              //   onClick={() => SetOpenModal2(true)}
              className="underline cursor-pointer text-base sm:text-sm lg:text-base"
            >
              Cookie Settings
            </a> */}
            {/* <Modal show={openModal2} onClose={() => SetOpenModal2(false)} className="bg-black-100">
              <Modal.Header className="bg-black-90">Cookies Settings</Modal.Header>
              <Modal.Body className="bg-white">
                <div className="space-y-6 bg-white text-base leading-relaxed text-gray-500 ">
                  <p>
                    Start from scratch.Shape the journey of your idea from your mind to the user’s mind.Best suited for
                    startups and firms working on new ideas.
                  </p>
                  <div className="flex justify-end">
                    <button onClick={() => SetOpenModal2(false)} className="bg-black-90 text-white px-8 py-1.5">
                      Save
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal> */}

            <div>
              <button
                type="button"
                onClick={declineCookies}
                className="font-poppins font-semibold text-sm md:text-base lg:text-lg border-2 px-3.5 py-1 border-black text-black hover:bg-black hover:text-white "
              >
                Decline All
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={acceptCookies}
                className="font-poppins font-semibold text-sm md:text-base lg:text-lg px-3 py-1 border-2 border-black text-black hover:bg-black hover:text-white "
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
