import React from 'react';
import { Metadata } from 'next';
import ReadyToTalk from '~/components/common/ReadyToTalk';
import BusinessPlanComponent from '~/components/widgets/aboutUs/BusinessPlanComponent';
import CompanyExperience from '~/components/widgets/aboutUs/CompanyExperience';
import CompanyYearsOfExperience from '~/components/widgets/aboutUs/CompanyYearsOfExperience';
import HowWeWorkInAboutUs from '~/components/widgets/aboutUs/HowWeWorkInAboutUs';
import YourBusinessComponent from '~/components/widgets/aboutUs/YourBusinessComponent';
import {
  fetchAboutUsData,
  fetchBusinessPlanData,
  fetchCompanyExperienceData,
  fetchCompanyYearExpData,
  fetchHowWeWorkData,
} from 'apis';
import CommonLoader from '~/components/common/CommonLoader';

export const metadata: Metadata = {
  title: 'AboutUs',
  description: 'This is about Us Page',
};

async function AboutUsDataAPI() {
  const data: any = await fetchAboutUsData();
  return data;
}

async function BusinessPlanDataApi() {
  const data: any = await fetchBusinessPlanData();
  return data;
}

async function HowWeWorkDataApi() {
  const data: any = await fetchHowWeWorkData();
  return data;
}

async function CompanyExperienceDataApi() {
  const data: any = await fetchCompanyExperienceData();
  return data;
}

async function CompanyYearExpDataApi() {
  const data: any = await fetchCompanyYearExpData();
  return data;
}

export default async function AboutUsPage() {
  const aboutPromise = AboutUsDataAPI();
  const businessPlanPromise = BusinessPlanDataApi();
  const howWeWorkPromise = HowWeWorkDataApi();
  const companyExpPromise = CompanyExperienceDataApi();
  const companyYearExpDataExpPromise = CompanyYearExpDataApi();

  const [aboutUsData, businessPlanData, howWeWorkData, companyExp, companyYearsExp] = await Promise.all([
    aboutPromise,
    businessPlanPromise,
    howWeWorkPromise,
    companyExpPromise,
    companyYearExpDataExpPromise,
  ]);

  return (
    <>
      {aboutUsData ? <YourBusinessComponent aboutUsData={aboutUsData} /> : <CommonLoader />}
      {businessPlanData ? <BusinessPlanComponent businessPlanData={businessPlanData} /> : <CommonLoader />}
      {howWeWorkData ? <HowWeWorkInAboutUs howWeWorkData={howWeWorkData} /> : <CommonLoader />}
      {companyExp ? <CompanyExperience companyExp={companyExp} /> : <CommonLoader />}
      {companyYearsExp ? <CompanyYearsOfExperience companyYearsExp={companyYearsExp} /> : <CommonLoader />}
      <ReadyToTalk
        buttonName="Send Message"
        headingText="Ready To Talk?"
        paraText={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi perspiciatis, alias maiores eligendi ut, eaque, quae doloremque perferendis et architecto quibusdam rerum minus illum. Laborum at modi explicabo maiores quo nesciunt, sapiente '
        }
      />
    </>
  );
}
