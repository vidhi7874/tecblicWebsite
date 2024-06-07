import { fetchCaseStudyPageData } from 'apis';
import { Metadata } from 'next';
import React from 'react';
import CommonLoader from '~/components/common/CommonLoader';
import CaseStudyMainPage from '~/components/widgets/case-study/CaseStudyMainPage';

export const metadata: Metadata = {
  title: 'Case Study',
  description: 'This is Case Study Page',
};

async function CaseStudyPageDataApi() {
  const data: any = await fetchCaseStudyPageData();
  return data;
}

export default async function Page() {
  const caseStudyMainPromise = CaseStudyPageDataApi();
  const [caseStudyData] = await Promise.all([caseStudyMainPromise]);
  return <>{caseStudyData ? <CaseStudyMainPage caseStudyData={caseStudyData} /> : <CommonLoader />}</>;
}
