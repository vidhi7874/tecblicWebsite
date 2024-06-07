import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

interface Widget {
  id?: string;
  isDark?: boolean;
}

interface WrapperTagProps extends Widget {
  children: React.ReactNode;
  containerClass?: string;
}

interface BackgroundProps {
  children?: React.ReactNode;
  isDark?: boolean;
}

interface Header {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
}

interface HeadlineProps {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

interface CallToAction {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
}

interface LinkOrButton {
  callToAction?: CallToAction;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
}

interface Button {
  title: string;
  type: 'button' | 'submit' | 'reset';
}

interface Input {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
}

interface Textarea {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
}

interface Checkbox {
  label: string;
  value: string;
}

interface Radio {
  label: string;
}

interface RadioBtn {
  label?: string;
  radios: Array<Radio>;
}

interface SmallForm {
  icon?: Icon;
  input: Input;
  btn: Button;
}

interface FormProps {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
}

interface Image {
  link?: string;
  src: string | StaticImageData;
  alt: string;
}

interface Item {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToAction;
}

interface ItemGrid {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
}

interface Timeline {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}

interface Team {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
  containerClass?: string;
  imageClass?: string;
  panelClass?: string;
  nameClass?: string;
  occupationClass?: string;
  itemsClass?: string;
}

interface Testimonial {
  testimonial?: string;
  startSlice?: number;
  endSlice?: number;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  name?: string;
  job?: string;
  image?: Image;
  href?: string;
  containerClass?: string;
  panelClass?: string;
  imageClass?: string;
  dataClass?: string;
  nameJobClass?: string;
  nameClass?: string;
  jobClass?: string;
  testimonialClass?: string;
}

interface Link {
  label?: string;
  elementId?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
}

interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

interface Column {
  title: string;
  items: Array<Item>;
  callToAction?: CallToAction;
}

interface MenuLink extends Link {
  links?: Array<Link>;
  popperData: any;
}

interface Links {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
}

interface Tab {
  link?: Link;
  items: Array<Item>;
}

interface Dropdown {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

interface WindowSize {
  width: number;
  height: number;
}

// WIDGETS
interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
}

interface FAQsProps extends Widget {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  tabs?: Array<Tab>;
  callToAction?: CallToAction;
}

interface CollapseProps {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}

interface CallToActionProps extends Widget {
  title: string;
  subtitle: string;
  callToAction?: CallToAction;
  items?: Array<Item>;
}

interface FeaturesProps extends Widget {
  header?: Header;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

interface ContentProps extends Widget {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
}

interface StepsProps extends Widget {
  header?: Header;
  items: Array<Item>;
  image?: Image;
  isReversed?: boolean;
}

interface TeamProps extends Widget {
  header?: Header;
  teams: Array<Team>;
}

interface AnnouncementProps {
  title: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
}

interface TestimonialsProps extends Widget {
  header?: Header;
  testimonials: Array<Testimonial>;
  isTestimonialUp?: boolean;
  hasDividerLine?: boolean;
  startSlice?: number;
  endSlice?: number;
  callToAction?: CallToAction;
}

interface PricingProps extends Widget {
  header?: Header;
  prices: Array<Price>;
}

interface ComparisonProps extends Widget {
  header?: Header;
  columns: Array<Column>;
}

interface StatsProps extends Widget {
  items: Array<Item>;
}

interface SocialProofProps extends Widget {
  images: Array<Image>;
}

interface ContactProps extends Widget {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  form: FormProps;
}

interface FooterProps {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
}

interface HeaderProps {
  links?: Array<MenuLink>;
  actions?: Array<CallToAction>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}

interface mainPageProps {
  h1Text: {
    line1: string;
    line2: string;
    line3: string;
  };
  paraText: {
    text1: string;
    text2: string;
  };
}

interface goalSectionProps {
  section1: {
    title: string;
  };
  section2: {
    title: string;
  };
  section3: {
    title: string;
  };
  paraText: string;
}

interface BusinessProps {
  part1: {
    heading: string;
  };
  part2: {
    heading: string;
  };
  part3: {
    heading: string;
  };
  section1: {
    title: string;
    text: string;
  };
  section2: {
    title: string;
    text: string;
  };
  section3: {
    title: string;
    text: string;
  };
}

// article section
// ArticleSection
interface ArticleSectionProps {
  section1: {
    title: string;
    description: string;
  };
  card1: {
    heading1: string;
    text1: string;
    person1: string;
    date1: string;
  };
  card4: {
    heading4: string;
    text4: string;
    person4: string;
    date4: string;
  };
  card2: {
    heading2: string;
    text2: string;
    person2: string;
    date2: string;
  };
  card3: {
    heading3: string;
    text3: string;
    person3: string;
    date3: string;
  };
}

//techFinity
interface techFinityProps {
  section1: {
    title: string;
    text1: string;
    text2: string;
  };
  section2: {
    title: string;
    text1: string;
    text2: string;
  };
  section3: {
    title: string;
    text1: string;
    text2: string;
  };
}

// growing team section .................................................
interface growingTeamPageProps {
  headingText: {
    line1: string;
  };
  paraText: {
    text1: string;
  };
}
interface lifeAtTecblicPageProps {
  headingText: {
    line1: string;
    line2: string;
  };
  paraText: {
    text1: string;
  };
}

// perks  and benefits
interface perkAndBenefitPageProps {
  headingText: {
    line1: string;
  };
  paraText: {
    text1: string;
  };
  cards: {
    card_text1: string;
    card_text2: string;
    card_text3: string;
    card_text4: string;
  };
}

// current Opening
interface curOpeningPageProps {
  headingText: {
    line1: string;
    line2: string;
  };
  card1: {
    title: string;
    text: string;
  };
  card2: {
    title: string;
    text: string;
  };
  card3: {
    title: string;
    text: string;
  };
  card4: {
    title: string;
    text: string;
  };
}

// career inquiries ..
interface careerInquiriesPageProps {
  headingText: {
    line1: string;
    line2: string;
  };
  paraText: {
    labelText: string;
    text1: string;
  };
  buttonText: string;
}

// role Section..
interface roleSectionPageProps {
  title: string;
  buttonText: string;
  paraText: {
    text1: string;
  };
  list: {
    line1: string;
    line2: string;
    line3: string;
  };
}

interface responsibilityPageProp {
  card1: {
    title: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
  };
  card2: {
    title: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
  };
  card3: {
    title: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
  };
}

// our -service section ....
//  for the market section
interface marketSectionProps {
  h1Text: {
    line1: string;
    line2: string;
    line3: string;
  };
  paraText: {
    text1: string;
  };
}

// for the case study in the our-service page
interface OurServicePageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: {
    p1Text: string;
  };
  cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
    card4: {
      title: string;
      text: string;
    };
    card5: {
      title: string;
      text: string;
    };
    card6: {
      title: string;
      text: string;
    };
  };
}

// for the about consulting agency
interface consultAgencyPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: {
    p1Text: string;
  };
  agency_cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
  };
}

// interface for the marketing  card

interface ourCaseStudyInServicePageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: {
    p1Text: string;
  };
  marketing_cards: {
    card1: {
      main_title: string;
      text: string;
    };
    card2: {
      main_title: string;
      text: string;
    };
    card3: {
      main_title: string;
      text: string;
    };
  };
}

interface readyToTakInOurServiceProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
}

// case -study page section

interface CaseStudiesMainPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
  case_study_cards: {
    card1: {
      main_title: string;
      text: string;
    };
    card2: {
      main_title: string;
      text: string;
    };
    card3: {
      main_title: string;
      text: string;
    };
    card4: {
      main_title: string;
      text: string;
    };
  };
}

// case study section for the warehouse section
interface goGreenWarehousePageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
}

// makingof props
interface makingOfDataPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;

  timeline_cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
    card4: {
      title: string;
      text: string;
    };
    card5: {
      title: string;
      text: string;
    };
    card6: {
      title: string;
      text: string;
    };
  };
}

// what are the challenges props ..
interface whatChallengePageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;

  challenge_list: {
    list1: {
      title: string;
      text: string;
    };
    list2: {
      title: string;
      text: string;
    };
    list3: {
      title: string;
      text: string;
    };
  };

  challenge_cards: {
    card1: {
      card_title: string;
      card_subTitle: string;
      card_text: string;
    };
    card2: {
      card_title: string;
      card_subTitle: string;
      card_text: string;
    };
  };
}
// for the project highlights section ..
interface projectHighlightsPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;

  project_list: {
    list1: {
      title: string;
      text: string;
    };
    list2: {
      title: string;
      text: string;
    };
    list3: {
      title: string;
      text: string;
    };
  };

  project_cards: {
    card1: {
      card_title: string;
      card_text: string;
    };
    card2: {
      card_title: string;
      card_text: string;
    };
    card3: {
      card_title: string;
      card_text: string;
    };
    card4: {
      card_title: string;
      card_text: string;
    };
  };
}

// about us section

interface businessComponentPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
    h3Text: string;
  };
  paraText: string;
}

interface businessPlanComponentPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText1: string;
  paraText2: string;
  business_cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
  };
}

// for the how we work section in about us section ...
interface howWeWorkPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  work_cards: {
    card1: {
      title: string;
      text: string;
      footer: string;
    };
    card2: {
      title: string;
      text: string;
      footer: string;
    };
    card3: {
      title: string;
      text: string;
      footer: string;
    };
  };
}

//experience in about us page ..
interface experiencePartPageProps {
  cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
    card4: {
      title: string;
      text: string;
    };
  };
}

// experience in years component in the aboutus page
interface CompanyYearsOfExperiencePageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText1: string;
  paraText2: string;
  paraText3: string;
  experience_years_cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
    card4: {
      title: string;
      text: string;
    };
    card5: {
      title: string;
      text: string;
    };
    card6: {
      title: string;
      text: string;
    };
  };
}

// ready to talk in about us page
interface readyToTakInAboutUsProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
}

// industry section page ...................................................

// warehouseIndustry page
interface IndustryWarehousePageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
}

// how we work in the industry section
interface howWeWorkIndustryPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
  cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
    card4: {
      title: string;
      text: string;
    };
  };
}

// inrerface for the best graphic section
interface BestGraphicComponentPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText1: string;
  paraText2: string;
  cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
  };
}

//case study section in the industry page .............................
interface CaseStudyInIndustryComponentPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
  case_cards: {
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
  };
}

// ready to talk in industry page
interface readyToTakInIndustryProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
}

//blog page section ....................................................
interface blogMainPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
}

// BlogTechnologyTabPage section ...
interface BlogTechnologyTabPageProps {
  tabMenu: {
    tabItem1: {
      title: string;
      leftSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
      rightSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
        card2: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
    };
    tabItem2: {
      title: string;
      leftSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
      rightSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
        card2: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
    };
    tabItem3: {
      title: string;
      leftSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
      rightSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
        card2: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
    };
    tabItem4: {
      title: string;
      leftSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
      rightSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
        card2: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
    };
    tabItem5: {
      title: string;
      leftSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
      rightSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
        card2: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
    };
    tabItem6: {
      title: string;
      leftSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
      rightSection: {
        card1: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
        card2: {
          headingText: string;
          paraText: string;
          dateText: string;
        };
      };
    };
  };
}

//
interface DesignUserInterfacesPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  dateText: string;
  paraText: string;
}

// blog section on click ..........
interface reviewPresentationBlogPageProps {
  headingText: {
    h1Text: string;
    h2Text: string;
  };
  paraText: string;
  main_content: {
    title: string;
    subtitle: string;
    paraText1: string;
    paraText2: string;
    paraText3: string;
  };
}

// popper menu data ...
interface any {
  popperData: any;
  // button1: {
  //   id: number;
  //   headingText: string;
  //   card1: {
  //     main_title: string;
  //     links: [
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //     ];
  //   };
  //   card2: {
  //     main_title: string;
  //     links: [
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //     ];
  //   };
  // };
  // button2: {
  //   id: number;
  //   headingText: string;
  //   card1: {
  //     main_title: string;
  //     links: [
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //     ];
  //   };
  //   card2: {
  //     main_title: string;
  //     links: [
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //       {
  //         link_id: number;
  //         text: string;
  //         href: string;
  //       },
  //     ];
  //   };
  // };
}
