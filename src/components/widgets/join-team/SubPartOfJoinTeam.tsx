'use client';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { fetchFilteredJobCardData } from 'apis';
import RolesComponent from './RolesComponent';
import Responsibility from './Responsibility';
import CommonLoader from '~/components/common/CommonLoader';

export default function SubPartOfJoinTeam({ params_id }) {
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    async function fetchFilteredData(id) {
      const data: any = await fetchFilteredJobCardData(id);
      setFilteredData(data?.cardArray[0]);
    }
    fetchFilteredData(params_id);
  }, [params_id]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {filteredData ? (
        <RolesComponent text={filteredData?.text} title={filteredData?.title} location={filteredData?.location} />
      ) : (
        <CommonLoader bgColor={'black'} />
      )}

      {filteredData ? (
        <Responsibility
          roles={filteredData?.roles}
          qualification={filteredData?.qualification}
          requirement={filteredData?.requirement}
        />
      ) : (
        <CommonLoader bgColor={'black'} />
      )}
    </>
  );
}
