import { fetchCaseStudyPageData, fetchGraphicIndData, fetchWareHouseIndData, fetchWeWorkIndData } from 'apis';
import { Metadata } from 'next';
import React from 'react';
import CommonLoader from '~/components/common/CommonLoader';
import ReadyToTalk from '~/components/common/ReadyToTalk';
import BestGraphicComponent from '~/components/widgets/industries-section/BestGraphicComponent';
import CaseStudyInIndustryComponent from '~/components/widgets/industries-section/CaseStudyInIndustryComponent';
import WareHouseIndustry from '~/components/widgets/industries-section/WareHouseIndustry';
import WeWorkComponent from '~/components/widgets/industries-section/WeWorkComponent';

export const metadata: Metadata = {
  title: 'Industry',
  description: 'This is Industry Page',
};

async function fetchWarehouseApi() {
  const data: any = await fetchWareHouseIndData();
  return data;
}

async function fetchWeWorkApi() {
  const data: any = await fetchWeWorkIndData();
  return data;
}

async function fetchGraphicApi() {
  const data: any = await fetchGraphicIndData();
  return data;
}

async function fetchCaseStudyIndApi() {
  const data: any = await fetchCaseStudyPageData();
  return data;
}

export default async function IndustryPage() {
  const warehousePromise = fetchWarehouseApi();
  const weWorkPromise = fetchWeWorkApi();
  const graphicPromise = fetchGraphicApi();
  const caseIndPromise = fetchCaseStudyIndApi();

  const [warehouseIndData, weWorkIndData, graphicIndData, caseStudyIndData] = await Promise.all([
    warehousePromise,
    weWorkPromise,
    graphicPromise,
    caseIndPromise,
  ]);
  return (
    <>
      {warehouseIndData ? <WareHouseIndustry warehouseIndData={warehouseIndData} /> : <CommonLoader />}

      {weWorkIndData ? <WeWorkComponent weWorkIndData={weWorkIndData} /> : <CommonLoader />}

      {graphicIndData ? <BestGraphicComponent graphicIndData={graphicIndData} /> : <CommonLoader />}

      {caseStudyIndData ? <CaseStudyInIndustryComponent caseStudyIndData={caseStudyIndData} /> : <CommonLoader />}

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
