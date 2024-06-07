import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function PopperMenu({ isOpen, onClose, dataToShow }) {
  const popperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popperRef.current && !popperRef.current.contains(event.target)) {
      popperRef.current.className = 'hidden';
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={popperRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="w-full h-[calc(h-screen - 74px)] pt-20 absolute top-[14%] left-0 zIndex-9999"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 items-start justify-center w-full h-[calc(h-screen - 120px)] bg-zinc-950 gap-4 p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-32 flex justify-start items-center my-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-poppins font-semibold text-lg sm:text-1xl md:text-2xl lg:text-4xl text-center"
              >
                {dataToShow.headingText}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-4 justify-start items-center gap-4 w-full h-full"
            >
              {dataToShow?.cardsArray?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-start w-full h-full p-4 "
                >
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="font-poppins font-regular text-secondColor text-sm sm:text-base md:text-lg mb-2"
                  >
                    {item.main_title}
                  </motion.h2>
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="font-poppins font-medium text-white text-sm md:text-lg lg:text-xl"
                  >
                    {item.links?.map((el) => (
                      <motion.li
                        key={el.link_id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={el.href}
                          onClick={() => {
                            popperRef.current.className = 'hidden';
                            onClose();
                          }}
                        >
                          {el.text}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
