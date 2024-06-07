import { IconDownload, IconMail } from '@tabler/icons-react';
import {
  ArticleSectionProps,
  BusinessProps,
  CallToActionProps,
  HeroProps,
  goalSectionProps,
  mainPageProps,
  techFinityProps,
} from '../../types';
// import heroImg from '~/assets/images/hero.jpg';

// Hero data on Home page ********************
export const heroHome: HeroProps = {
  title: (
    <>
      Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
      <span className="sm:whitespace-nowrap">Tailwind CSS</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          canvas
        </span>{' '}
        is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
      </span>{' '}
      It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
      optimization.
    </>
  ),
  tagline: '',
  callToAction: {
    text: 'Get template',
    href: '',
    icon: IconDownload,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: '',
    alt: 'Hero canvas',
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: '',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: '',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// main section data ...
export const mainPage: mainPageProps = {
  h1Text: {
    line1: 'Your New Age',
    line2: 'Digital Transformation Partner',
    line3: '',
  },
  paraText: {
    text1:
      'We empower businesses to seize their present and future with cutting-edge digital transformation solutions, conquering challenges and leading to success.',
    text2: '',
  },
};

// goal section  data
export const goalSection: goalSectionProps = {
  section1: {
    title: 'SEAMLESS SOCIETIES',
  },
  section2: {
    title: 'BUILDING A NEW FUTURE',
  },
  section3: {
    title: 'REVOLUTIONARY COGNITIVE TECHNOLOGY',
  },
  paraText: 'GOALS & OBJECTIVE',
};

//business data
export const businessData: BusinessProps = {
  part1: {
    heading: 'Unlock Revenue Growth for',
  },
  part2: {
    heading: 'Your',
  },
  part3: {
    heading: 'Business',
  },
  section1: {
    title: 'Our Mission',
    text: 'High-end digital experiences. Created the heart Manhattan, We are a should human team driving force.',
  },
  section2: {
    title: 'Our Vision',
    text: 'High-end digital experiences. Created the heart Manhattan, We are a should human team driving force.',
  },
  section3: {
    title: 'Our Values',
    text: 'High-end digital experiences. Created the heart Manhattan, We are a should human team driving force.',
  },
};

//ArticleSection
export const articleSection: ArticleSectionProps = {
  section1: {
    title: 'Recent Articles',
    description:
      'Erika finds MindInventory a unique and reliable team of creativedesigners to continue work with that has helped bring her dream app into reality, which is playing a pivotal role in helping users showcase gratitude',
  },
  card1: {
    heading1: 'Future of Work',
    text1: 'Majority of people will work in jobs that don’t exist today.',
    person1: 'Lina Hicks',
    date1: '08 May',
  },
  card2: {
    heading2: 'Future of Data',
    text2: 'Thanks to never-ending piles of data & the amount of insight',
    person2: 'Tyler Murray',
    date2: '02 May',
  },
  card3: {
    heading3: 'Future of Learning',
    text3: 'A constant ability to learn will be on the most crucial skills',
    person3: 'Warren Casey',
    date3: '02 May',
  },
  card4: {
    heading4: 'Future of Learning',
    text4: 'A constant ability to learn will be on the most crucial skills',
    person4: 'Warren Casey',
    date4: '02 May',
  },
};

// TechFinity Data
export const techFinity: techFinityProps = {
  section1: {
    title: 'New Product',
    text1: 'Start from scratch.',
    text2:
      'Shape the journey of your idea from your mind to the user’s mind.Best suited for startups and firms working on new ideas.',
  },
  section2: {
    title: 'Product Redesign',
    text1: 'Start from scratch.',
    text2:
      'Shape the journey of your idea from your mind to the user’s mind.Best suited for startups and firms working on new ideas.',
  },
  section3: {
    title: 'Dedicated Team',
    text1: 'Start from scratch.',
    text2:
      'Shape the journey of your idea from your mind to the user’s mind.Best suited for startups and firms working on new ideas.',
  },
};
