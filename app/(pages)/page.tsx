import {
  GoalAndObjectiveData,
  fetchArticleData,
  fetchBusinessData,
  fetchIndustryData,
  fetchPartnerShipData,
  fetchTechfinityData,
  getHeroData,
} from 'apis';
import React from 'react';
import CommonLoader from '~/components/common/CommonLoader';
import ProjectDetails from '~/components/widgets/contactUs/ProjectDetails';
import ArticleSection from '~/components/widgets/main-page/ArticleSection';
import Business from '~/components/widgets/main-page/Business';
import GoalAndObjective from '~/components/widgets/main-page/GoalAndObjective';
import Hero from '~/components/widgets/main-page/Hero';
import SliderComponent from '~/components/widgets/main-page/SliderComponent';

async function fetchHeroApi() {
  const data: any = await getHeroData();
  return data;
}

async function fetchGoalApi() {
  const data: any = await GoalAndObjectiveData();
  return data;
}

async function fetchArticleApi() {
  const data: any = await fetchArticleData();
  return data;
}

async function TechfinityApi() {
  const data: any = await fetchTechfinityData();
  return data;
}

async function fetchIndustryAPI() {
  const data: any = await fetchIndustryData();
  return data;
}

async function fetchBusinessApi() {
  const data: any = await fetchBusinessData();
  return data;
}

async function fetchPartnerShipApi() {
  const data: any = await fetchPartnerShipData();
  return data;
}

export default async function Page() {
  const heroPromise = fetchHeroApi();
  const goalPromise = fetchGoalApi();
  const articlePromise = fetchArticleApi();
  const techPromise = TechfinityApi();
  const industryPromise = fetchIndustryAPI();
  const businessPromise = fetchBusinessApi();
  const partnershipPromise = fetchPartnerShipApi();

  const [heroData, goalData, articleData, techfinityData, industryData, business, partnerShip] = await Promise.all([
    heroPromise,
    goalPromise,
    articlePromise,
    techPromise,
    industryPromise,
    businessPromise,
    partnershipPromise,
  ]);
  return (
    <>
      {heroData ? <Hero heroData={heroData} /> : <CommonLoader />}
      {goalData ? <GoalAndObjective goalData={goalData} /> : <CommonLoader />}
      {articleData ? <ArticleSection articleData={articleData} /> : <CommonLoader />}
      <SliderComponent techfinityData={techfinityData} industryData={industryData} />
      {business ? <Business business={business} /> : <CommonLoader />}
      {partnerShip ? <ProjectDetails partnerShip={partnerShip} /> : <CommonLoader />}
    </>
  );
}
