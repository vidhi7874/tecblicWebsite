import { client } from './sanity/lib/client';
import configuration from '~/config/schema.config';

// homepage apis ....................................................................
export async function getHeroData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.HERO}'][0]{headingText, paraText}`;
  const response = await client.fetch(query);
  return response;
}

export async function GoalAndObjectiveData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.GOALS}'][0]{card, paraText}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchArticleData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.ARTICLE}'][0]{
    headingText,paraText,image,cardsData
  }`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchIndustryData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.INDUSTRY}'][0]{
    headingText, tab_options,tabData
  }`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchBusinessData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.BUSINESS}'][0]{
    headingText,cardData
  }`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchTechfinityData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.TECHFINITY}'][0]{
    headingText,tab_options,tabData
  }`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchAddressData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.ADDRESS}'][0]{
    headingText,addressData,info,icons
  }`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchPartnerShipData() {
  const query = `*[ _type == '${configuration.HOME_PAGE.PARTNERSHIP}'][0]{
    headingText,paraText,images
  }`;
  const response = await client.fetch(query);
  return response;
}

// apis for the service page ............................................................
export async function fetchServiceLandingData() {
  const query = `*[ _type == '${configuration.SERVICE.SERVICE_LANDING}'][0]{headingText, paraText, image}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchOurServiceData() {
  const query = `*[ _type == '${configuration.SERVICE.OUR_SERVICE}'][0]{headingText, paraText, cardData}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchConsultingAgencyData() {
  const query = `*[ _type == '${configuration.SERVICE.AGENCY}'][0]{headingText, paraText, image, specialCard,cards}`;
  const response = await client.fetch(query);
  return response;
}

// export async function fetchCaseStudyOurServiceData() {
//   const query = `*[ _type == '${configuration.SERVICE.CASE_STUDY}'][0]{headingText, paraText, case_card}`;
//   const response = await client.fetch(query);
//   return response;
// }

// join our team section ......................................................

export async function fetchJoinData() {
  const query = `*[ _type == '${configuration.JOIN_TEAM.JOIN}'][0]{headingText, paraText, image}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchLifeAtTecblicData() {
  const query = `*[ _type == '${configuration.JOIN_TEAM.LIFE_AT_TECBLIC}'][0]{headingText, paraText, cards}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchPerkData() {
  const query = `*[ _type == '${configuration.JOIN_TEAM.PERKS}'][0]{headingText, paraText, image,cards}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchCurrentOpeningData() {
  const query = `*[ _type == '${configuration.JOIN_TEAM.CURRENT_OPENING}'][0]{headingText, paraText,  cardArray[]{
    title,_key,text
  }}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchFilteredJobCardData(id) {
  console.log('id:at ', id);
  const query = `*[ _type == '${configuration.JOIN_TEAM.CURRENT_OPENING}'][0] {
    cardArray[_key == '${id}']
  }`;
  const response = await client.fetch(query);
  return response;
}

// about us apis ....................................................................
export async function fetchAboutUsData() {
  const query = `*[ _type == '${configuration.ABOUT_US.ABOUT}'][0]{headingText, paraText, image}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchBusinessPlanData() {
  const query = `*[ _type == '${configuration.ABOUT_US.BUSINESS_PLAN}'][0]{headingText, paraText, image,business_card}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchHowWeWorkData() {
  const query = `*[ _type == '${configuration.ABOUT_US.HOW_WE_WORK}'][0]{headingText, paraText, cards}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchCompanyExperienceData() {
  const query = `*[ _type == '${configuration.ABOUT_US.COMPANY_EXPERIENCE}'][0]{headingText, paraText,card, image}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchCompanyYearExpData() {
  const query = `*[ _type == '${configuration.ABOUT_US.COMPANY_YEAR_EXPERIENCE}'][0]{main_headingText, main_paraText, image,sub_heading,sub_text,card}`;
  const response = await client.fetch(query);
  return response;
}

// industry page .........

export async function fetchWareHouseIndData() {
  const query = `*[ _type == '${configuration.INDUSTRY.LANDING_PAGE}'][0]{headingText, paraText, image}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchWeWorkIndData() {
  const query = `*[ _type == '${configuration.INDUSTRY.WE_WORK_IND}'][0]{headingText, paraText, image,cards}`;
  const response = await client.fetch(query);
  return response;
}

export async function fetchGraphicIndData() {
  const query = `*[ _type == '${configuration.INDUSTRY.GRAPHIC_PAGE}'][0]{headingText, paraText, cards,image}`;
  const response = await client.fetch(query);
  return response;
}

// export async function fetchCaseStudyIndData() {
//   const query = `*[ _type == '${configuration.INDUSTRY.CASE_STUDY_IND}'][0]{headingText, paraText,case_card}`;
//   const response = await client.fetch(query);
//   return response;
// }

// case- study -section .................................................................

// fetching the case card data ....
export async function fetchCaseStudyPageData() {
  const query = `*[ _type == '${configuration.CASE_STUDY}'][0] {
    headingText,
    paraText,
    case_study[]{
      main_heading,_key,text,case_study_img
    }
  }`;
  const response = await client.fetch(query);
  return response;
}

// for the static path all pages api
export async function fetchALLCaseStudyPageData() {
  const query = `*[ _type == '${configuration.CASE_STUDY}'][0] {
    case_study[]{
      _key
    }
  }`;
  const response = await client.fetch(query);
  return response;
}

// fetch the case study data base on the id filter ...
export async function fetchFilteredCaseStudyPageData(id) {
  const query = `*[ _type == '${configuration.CASE_STUDY}'][0] {
    case_study[_key == '${id}']
  }`;
  const response = await client.fetch(query);
  return response;
}

// blog-page section .....................................................................

export async function fetchBlogPageData() {
  const query = `*[ _type == '${configuration.BLOG_PAGE.BLOG}'][0]{headingText, paraText,tabOptions,left_section,right_section,bottom_section}`;
  const response = await client.fetch(query);
  return response;
}
// fetch the data on the click of the blog..
export async function fetchFilteredBlogData(id) {
  const query = `*[ _type == '${configuration.BLOG_PAGE.BLOG}'][0]{   left_section[_key == '${id}'][0] {
    section2,date,card_img,text,section1,title,type
  } }`;
  const response = await client.fetch(query);
  return response;
}

// file upload .....

export async function uploadFileToSanity(file) {
  const fileAsset = await client.assets.upload('file', file);
  return {
    _type: 'file',
    asset: {
      _type: 'reference',
      _ref: fileAsset._id,
    },
  };
}

export const sendFormDataToSanity = async (formData, schemaName) => {
  console.log('formData: in the api >> ', formData);
  try {
    const file = formData.my_file;
    const fileAssetReference = await uploadFileToSanity(file);
    const result = await client.create({
      _type: schemaName,
      name: formData.full_name,
      email: formData.user_email,
      mobile: formData.mobile_number,
      description: formData.description,
      file: fileAssetReference,
    });
    return result;
  } catch (error) {
    console.error('Error sending form data to Sanity:', error);
    throw error;
  }
};
