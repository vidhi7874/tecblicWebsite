'use client';
import React from 'react';
import TabMenu from '../../atoms/TabMenu';
import CommonLoader from '~/components/common/CommonLoader';

const Industry = ({ industryData }: any) => {
  return (
    <>
      <div className="w-full h-full ">
        {industryData != null ? (
          <TabMenu tabOption={industryData?.tab_options || []} tabsContent={industryData?.tabData} show="" />
        ) : (
          <CommonLoader bgColor={'bg-zinc-950'} />
        )}
      </div>
    </>
  );
};

export default Industry;
