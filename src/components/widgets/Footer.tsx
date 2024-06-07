import { footerData } from '~/shared/data/global.data';
import ContainerWidth from '../common/ContainerWidth';
import Image from 'next/image';
import footerPic from '../../assets/images/tec.png';

const Footer = () => {
  const { title, links, columns, socials, footNote } = footerData;

  return (
    <>
      <footer className="">
        <div className="container mx-auto px-3 py-2 bg-black/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 pb-3 ">
          <div className="flex flex-col  justify-start items-start">
            <div className="flex justify-start items-center  ">
              <Image src={footerPic} alt="footer pic" width={230} height={80} />
            </div>
            <p className="font-roboto font-regular text-secondColor lg:text-sm   mt-2 w-4/5 mr-4">
              Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.
            </p>
          </div>
          {columns.map(({ title, links }, index) => (
            <div key={`item-column-${index}`} className="">
              <div className="mb-4 font-roboto font-bold text-xl text-white dark:text-black-300">{title}</div>
              <ul className="text-sm">
                {links &&
                  links.map(({ label, href }, index2) => (
                    <li key={`item-column-link-${index2}`} className="mb-3">
                      <a
                        className=" text-secondColor font-normal transition duration-150 ease-in-out "
                        aria-label={label}
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="">
          <div className="container mx-auto  px-3 justify-around flex flex-col md:flex-row items-center md:justify-between py-2 main-footer-border-color">
            <div className="">
              <p className=" text-base font-roboto text-secondColor">{footNote}</p>
            </div>
            <ul className="flex flex-wrap gap-2 divide-x divide-[#54575b]">
              {socials.map(({ label, icon: Icon, href }, index) => (
                <li key={`item-social-${index}`}>
                  <a
                    className="pl-2 md:pl-4  font-roboto font-semibold text-xs md:text-sm text-secondColor"
                    aria-label={label}
                    href={href}
                  >
                    {(Icon && <Icon className="h-5 w-5" />) || label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
