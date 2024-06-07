import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconChevronDown } from '@tabler/icons-react';
// import Logo2 from '~/components/atoms/Logo2';
import { FooterProps, HeaderProps } from '../types';

// Announcement data
// export const announcementData: AnnouncementProps = {
//   title: 'NEW',
//   callToAction: {
//     text: 'canvas web app',
//     href: 'https://nextjs.org/blog/next-14',
//   },
//   callToAction2: {
//     text: 'testing 2',
//     href: 'https://twitter.com/intent/user?screen_name=onwidget',
//   },
// };

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      elementId: '/',
      href: '/',
      popperData: {
        headingText: 'Careers Home',
        cardsArray: [
          {
            main_title: 'Explore jobs',
            links: [
              {
                link_id: 1,
                text: 'Search jobs by areas of expertise ',
                href: '#expertise',
              },
              {
                link_id: 2,
                text: 'Consulting jobs',
                href: '#consulting',
              },
              {
                link_id: 3,
                text: 'Corporate jobs',
                href: '#corporate',
              },
              {
                link_id: 4,
                text: 'Digital jobs',
                href: '#digital',
              },
              {
                link_id: 5,
                text: 'Operations jobs',
                href: '#operations',
              },
              {
                link_id: 6,
                text: 'Strategy jobs',
                href: '#strategy',
              },
              {
                link_id: 7,
                text: 'Technology jobs',
                href: '#technology',
              },
            ],
          },
        ],
      },
      links: [],
      icon: null,
    },
    {
      label: 'What We Do',
      icon: IconChevronDown,
      elementId: null,
      href: null,
      links: [
        {
          label: 'Terms & Conditions',
          href: '/',
        },
        {
          label: 'Privacy Policy',
          href: '/',
        },
      ],
      popperData: {
        headingText: 'What we do is pending',
        cardsArray: [],
      },
    },
    {
      label: 'What We Think',
      elementId: 'about',
      href: '/',
      links: [],
      icon: null,
      popperData: {
        headingText: 'What we do is pending',
        cardsArray: [],
      },
    },
    {
      label: 'What We Are',
      icon: IconChevronDown,
      links: [
        {
          label: 'Terms & Conditions',
          href: '/',
        },
        {
          label: 'Privacy Policy',
          href: '/',
        },
      ],
      elementId: null,
      popperData: {
        headingText: 'Who Are We',
        cardsArray: [
          {
            main_title: 'Our organization',
            links: [
              {
                link_id: 1,
                text: 'Leaders',
                href: '#leaders',
              },
              {
                link_id: 2,
                text: 'Locations',
                href: '#location',
              },
              {
                link_id: 3,
                text: '360° Value Reporting',
                href: '#reports',
              },
            ],
          },
          {
            main_title: 'Media & Investors',
            links: [
              {
                link_id: 1,
                text: 'Media Relations',
                href: '#media',
              },
              {
                link_id: 2,
                text: 'Investor Relations',
                href: '#investor',
              },
            ],
          },
        ],
      },
      href: null,
    },
    {
      label: 'Join Us',
      elementId: 'join-us',
      href: '/',
      links: [
        {
          label: 'Terms & Conditions',
          href: '/',
        },
        {
          label: 'Privacy Policy',
          href: '/',
        },
      ],
      popperData: {
        // join us option
        headingText: 'Careers Home',
        cardsArray: [
          {
            main_title: 'All the pages Link',
            links: [
              {
                link_id: 1,
                text: 'Case Study ',
                href: '/case-study',
              },
              {
                link_id: 2,
                text: 'Case Study Section',
                href: '/case-study/section',
              },
              {
                link_id: 3,
                text: 'Join Team',
                href: '/join-team',
              },
              {
                link_id: 4,
                text: 'Join Team roles',
                href: '/join-team/roles',
              },
              {
                link_id: 5,
                text: 'Industry',
                href: '/industry',
              },
              {
                link_id: 6,
                text: 'About Us',
                href: '/about',
              },
              {
                link_id: 5,
                text: 'Blog',
                href: '/blog-section',
              },
              {
                link_id: 5,
                text: 'Our Service',
                href: '/our-service',
              },
              {
                link_id: 5,
                text: 'Blog Section',
                href: '/blog-section/section',
              },
            ],
          },
          {
            main_title: 'Explore jobs',
            links: [
              {
                link_id: 1,
                text: 'Search jobs by areas of expertise ',
                href: '#expertise',
              },
              {
                link_id: 2,
                text: 'Consulting jobs',
                href: '#consulting',
              },
              {
                link_id: 3,
                text: 'Corporate jobs',
                href: '#corporate',
              },
              {
                link_id: 4,
                text: 'Digital jobs',
                href: '#digital',
              },
              {
                link_id: 5,
                text: 'Operations jobs',
                href: '#operations',
              },
              {
                link_id: 6,
                text: 'Strategy jobs',
                href: '#strategy',
              },
              {
                link_id: 7,
                text: 'Technology jobs',
                href: '#technology',
              },
            ],
          },
        ],
      },
      icon: IconChevronDown,
    },
  ],
  actions: [
    {
      text: 'Contact us',
      href: '/#contact_us',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Footer data
export const footerData: FooterProps = {
  columns: [
    {
      title: 'Digital',
      links: [
        {
          label: 'Full-cycle Product Development',
          href: '/',
        },
        {
          label: 'Customer Experience and Design',
          href: '/',
        },
        {
          label: 'Application Development',
          href: '/',
        },
        {
          label: 'Digital Marketing',
          href: '/',
        },
        {
          label: 'Quality Engineering',
          href: '/',
        },
        {
          label: 'Dedicated Team Augmentation',
          href: '/',
        },
      ],
    },
    {
      title: 'Data & AI',
      links: [
        {
          label: 'Data Science',
          href: '/',
        },
        {
          label: 'Machine Learning',
          href: '/',
        },
        {
          label: 'Artificial Intelligence (AI)',
          href: '/',
        },
        {
          label: 'Robotic Process Automation',
          href: '/',
        },
      ],
    },
    {
      title: 'Solutions',
      links: [
        {
          label: 'DevOps Solutions',
          href: '/',
        },
        {
          label: 'Cloud Solutions',
          href: '/',
        },
        {
          label: 'Software Solutions for Startups',
          href: '/',
        },
        {
          label: 'Product Prototype Solutions',
          href: '/',
        },
        {
          label: 'Enterprise Mobility Solutions',
          href: '/',
        },
        {
          label: 'On-demand Business Solutions',
          href: '/',
        },
      ],
    },
  ],

  socials: [
    { label: 'About Us', href: '/about' },
    { label: 'Insights', href: '#' },
    { label: 'Careers', href: '/join-team' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Sitemap', href: '#' },
  ],
  footNote: ' © 2023 all rights reserved',
};
