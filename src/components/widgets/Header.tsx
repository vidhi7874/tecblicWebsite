'use client';

import { IconRss } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { headerData } from '~/shared/data/global.data';
import { CallToAction } from '~/shared/types';
import ToggleDarkMode from '../atoms/ToggleDarkMode';
import ToggleMenu from '../atoms/ToggleMenu';
import CTA from '../common/CTA';
import PopperMenu from '../atoms/PopperMenu';
import Logo4 from '../atoms/Logo4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isPopperOpen, setPopperOpen] = useState(false);
  const [popperData, setPopperData] = useState({});
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [activeLink, setActiveLink] = useState('home');
  const { links, actions, showToggleTheme, position } = headerData;

  const updatedIsDropdownOpen = links?.map(() => false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setIsSticky((prevState) => isScrollingUp && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToSection = (id: any) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end',
      });
      setActiveLink(id);
    }
  };

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handlePopperOptionClick = (popperData) => {
    setPopperData(popperData);
    setPopperOpen((prevState) => !prevState);
    handleToggleMenuOnClick();
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <header
        className={`top-0 z-40 mx-auto w-full flex-none bg-transparent h-0 transition-all duration-100 ease-in  ${
          isSticky ? 'fixed shadow-md' : 'relative'
        }`}
        id="header"
      >
        <div className="relative">
          <div className="absolute z-30  mt-6 h-14 top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  lg:w-full  lg:w-4/5">
            <div className="mx-auto h-full w-full header-bg-container rounded-2xl  py-3.5 px-4 lg:flex lg:justify-between">
              <div className="flex justify-between">
                <Link className="flex items-center" href="/">
                  <Logo4 />
                </Link>
                <div className="flex items-center lg:hidden">
                  <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
                </div>
              </div>
              <nav
                className={`${isToggleMenuOpen ? 'block' : 'hidden'} h-screen lg:w-full ${
                  position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
                } w-auto overflow-y-auto dark:text-black-200 lg:mx-5 lg:flex lg:h-auto lg:items-center lg:overflow-visible`}
                aria-label="Main navigation"
              >
                <ul className="flex w-full bg-zinc-950 opacity-2 lg:bg-black flex-col pt-8 text-sm lg:w-auto lg:flex-row lg:self-center lg:pt-0 lg:text-base lg:whitespace-nowrap">
                  {links &&
                    links.map(({ label, href, elementId, icon: Icon, links, popperData }, index) => (
                      <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                        {links && links.length ? (
                          <>
                            <button
                              className="flex items-center px-2 lg:px-4 py-3 font-poppins font-regular text-base transition text-secondColor duration-150 ease-in-out hover:text-white"
                              onClick={() => handlePopperOptionClick(popperData)}
                            >
                              {label} {Icon && <Icon className="ml-0.5 hidden h-5 w-5 lg:inline" />}
                            </button>
                          </>
                        ) : (
                          <Link
                            className={`font-poppins font-regular text-base ${
                              activeLink === elementId ? ' text-white font-semibold' : ''
                            } flex cursor-pointer items-center px-2 lg:px-4 py-3  font-medium transition duration-150 text-secondColor ease-in-out hover:text-white`}
                            href={`${elementId}`}
                            onClick={handleToggleMenuOnClick}
                          >
                            {label}
                            {}
                          </Link>
                        )}
                      </li>
                    ))}

                  <div
                    className={`${
                      isToggleMenuOpen ? 'block' : 'hidden'
                    } w-full justify-end p-3 lg:static lg:mb-0 lg:flex lg:w-auto lg:self-center lg:p-0 lg:hidden`}
                  >
                    <div className="flex w-full items-center justify-between lg:w-auto">
                      {actions && actions.length > 0 && (
                        <div className="ml-4 flex w-max flex-wrap justify-end">
                          {actions.map((callToAction, index) => (
                            <CTA
                              key={`item-action-${index}`}
                              callToAction={callToAction as CallToAction}
                              linkClass=" text-xl font-poppins font-strong text-white text-sm"
                              containerClass="primary-gradient-border-color rounded-lg py-2 px-5"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ul>
              </nav>
              <div
                className={`${
                  !isToggleMenuOpen ? 'block' : 'hidden'
                } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 hidden lg:block`}
              >
                <div className="flex w-full items-center justify-between md:w-auto">
                  {actions && actions.length > 0 && (
                    <div className="ml-4 flex w-max flex-wrap justify-end">
                      {actions.map((callToAction, index) => (
                        <CTA
                          key={`item-action-${index}`}
                          callToAction={callToAction as CallToAction}
                          linkClass=" text-xl font-poppins font-strong text-white text-sm"
                          containerClass="primary-gradient-border-color rounded-lg py-2 px-5"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PopperMenu isOpen={isPopperOpen} dataToShow={popperData} onClose={() => setPopperData((prev) => !prev)} />
      </header>
    </>
  );
};

export default Header;
