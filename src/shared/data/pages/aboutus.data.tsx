// about us section data

import {
  CompanyYearsOfExperiencePageProps,
  businessComponentPageProps,
  businessPlanComponentPageProps,
  experiencePartPageProps,
  howWeWorkPageProps,
  readyToTakInAboutUsProps,
} from '~/shared/types';

// business component ..
export const businessComponentPage: businessComponentPageProps = {
  headingText: {
    h1Text: 'Ready to take',
    h2Text: 'your business',
    h3Text: 'to the next level?',
  },
  paraText:
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra   gravida libero cursus nulla leo pulvinar.',
};

//business plan component ...
export const businessPlanComponentPage: businessPlanComponentPageProps = {
  headingText: {
    h1Text: 'We Care About Your',
    h2Text: 'Business Plan.',
  },
  paraText1:
    'Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.',
  paraText2:
    'Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.',

  business_cards: {
    card1: {
      title: 'Our Vision',
      text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.',
    },
    card2: {
      title: 'Our Vision',
      text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.',
    },
    card3: {
      title: 'Our Vision',
      text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.',
    },
  },
};

// how we work ...
export const howWeWorkPage: howWeWorkPageProps = {
  headingText: {
    h1Text: 'How We',
    h2Text: 'Work',
  },
  work_cards: {
    card1: {
      title: 'Make Appointment',
      text: 'Leverage agile frameworks provide synopsishigh level overviews value proposition.',
      footer: 'Testimonials',
    },
    card2: {
      title: 'Make Appointment',
      text: 'Leverage agile frameworks provide synopsishigh level overviews value proposition.',
      footer: 'Testimonials',
    },
    card3: {
      title: 'Make Appointment',
      text: 'Leverage agile frameworks provide synopsishigh level overviews value proposition.',
      footer: 'Testimonials',
    },
  },
};

// experience section in about us page ...

export const experiencePartPage: experiencePartPageProps = {
  cards: {
    card1: {
      title: '10+',
      text: 'Years of experience',
    },
    card2: {
      title: '5960',
      text: 'Satisfied clients',
    },
    card3: {
      title: '50k',
      text: 'IT problems solved',
    },
    card4: {
      title: '25+',
      text: 'Pro team members',
    },
  },
};
// CompanyYearsOfExperience section in about us page ...

export const CompanyYearsOfExperiencePage: CompanyYearsOfExperiencePageProps = {
  headingText: {
    h1Text: 'Say hello to our team members',
    h2Text: '',
  },
  paraText1:
    'Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo. Vestibu tincidunt, libero sit amet vestibulum euismod, ex nisl imperdiet leo.',
  paraText2: 'More than 25 years of experience',
  paraText3: '3000+ our clients are insured around the World',
  experience_years_cards: {
    card1: {
      title: '',
      text: 'Consistency',
    },
    card2: {
      title: '',
      text: 'Improvement',
    },
    card3: {
      title: '',
      text: 'Branching',
    },
    card4: {
      title: '',
      text: 'Consistency',
    },
    card5: {
      title: '',
      text: 'Branching',
    },
    card6: {
      title: '',
      text: 'Improvement',
    },
  },
};

// ready to talk in the about us section
export const readyToTakInAboutUs: readyToTakInAboutUsProps = {
  headingText: {
    h1Text: 'Ready To Talk?',
    h2Text: '',
  },
  paraText:
    'Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pellentesque habitant morbi tristique.',
};
