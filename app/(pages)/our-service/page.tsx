import React from 'react';
import ConsultingAgency from '~/components/widgets/our-service/ConsultingAgency';
import Marketing from '~/components/widgets/our-service/Marketing';
import OurServiceInService from '~/components/widgets/our-service/OurServiceInService';
import OurCaseStudyInService2 from '~/components/widgets/our-service/OurCaseStudyInService2';
import ReadyToTalk from '~/components/common/ReadyToTalk';
import { Metadata } from 'next';
import { fetchCaseStudyPageData, fetchConsultingAgencyData, fetchOurServiceData, fetchServiceLandingData } from 'apis';
import CommonLoader from '~/components/common/CommonLoader';

export const metadata: Metadata = {
  title: 'Our Service',
  description: 'This is Our Service Page',
};

async function ServiceLandingDataApi() {
  const data: any = await fetchServiceLandingData();
  return data;
}

async function serviceApi() {
  const data: any = await fetchOurServiceData();
  return data;
}

async function ConsultingAgencyDataApi() {
  const data: any = await fetchConsultingAgencyData();
  return data;
}

async function CaseStudyPageDataApi() {
  const data: any = await fetchCaseStudyPageData();
  return data;
}

export default async function OurServiceMainPage() {
  const servicePromise = ServiceLandingDataApi();
  const serviceDataPromise = ServiceLandingDataApi();
  const consultPromise = ServiceLandingDataApi();
  const caseStudyPromise = ServiceLandingDataApi();

  const [serviceData, ourServiceData, consultAgency, caseStudy] = await Promise.all([
    servicePromise,
    serviceDataPromise,
    consultPromise,
    caseStudyPromise,
  ]);
  return (
    <>
      {serviceData ? <Marketing serviceData={serviceData} /> : <CommonLoader />}
      {ourServiceData ? <OurServiceInService ourServiceData={ourServiceData} /> : <CommonLoader />}
      {consultAgency ? <ConsultingAgency consultAgency={consultAgency} /> : <CommonLoader />}
      {caseStudy ? <OurCaseStudyInService2 caseStudy={caseStudy} /> : <CommonLoader />}

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
