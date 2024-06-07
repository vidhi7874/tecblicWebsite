import { fetchCurrentOpeningData, fetchJoinData, fetchLifeAtTecblicData, fetchPerkData } from 'apis';
import { Metadata } from 'next';
import React from 'react';
import CommonLoader from '~/components/common/CommonLoader';
import CareerInquires from '~/components/widgets/join-team/CareerInquires';
import CurrentOpening from '~/components/widgets/join-team/CurrentOpening';
import GrowingTeam from '~/components/widgets/join-team/GrowingTeam';
import LifeAtTecblic from '~/components/widgets/join-team/LifeAtTecblic';
import PerkAndBenefits from '~/components/widgets/join-team/PerkAndBenefits';

export const metadata: Metadata = {
  title: 'Join Our Team',
  description: 'This is Join Our Team Page',
};

async function fetchJoinDataApi() {
  const data: any = await fetchJoinData();
  return data;
}

async function LifeAtTecblicDataApi() {
  const data: any = await fetchLifeAtTecblicData();
  return data;
}

async function fetchPerkDataApi() {
  const data: any = await fetchPerkData();
  return data;
}

async function CurrentOpeningDataApi() {
  const data: any = await fetchCurrentOpeningData();
  return data;
}

export default async function JoinTeamMainPage() {
  const joinPromise = fetchJoinDataApi();
  const lifeAtTecPromise = LifeAtTecblicDataApi();
  const perkPromise = fetchPerkDataApi();
  const currentPromise = CurrentOpeningDataApi();
  const [joinTeam, lifeAtTec, perkBenefitData, currentData] = await Promise.all([
    joinPromise,
    lifeAtTecPromise,
    perkPromise,
    currentPromise,
  ]);
  return (
    <>
      {joinTeam ? <GrowingTeam joinTeam={joinTeam} /> : <CommonLoader />}

      {lifeAtTec ? <LifeAtTecblic lifeAtTec={lifeAtTec} /> : <CommonLoader />}

      {perkBenefitData ? <PerkAndBenefits perkBenefitData={perkBenefitData} /> : <CommonLoader />}

      {currentData ? <CurrentOpening currentData={currentData} /> : <CommonLoader />}

      <CareerInquires />
    </>
  );
}
