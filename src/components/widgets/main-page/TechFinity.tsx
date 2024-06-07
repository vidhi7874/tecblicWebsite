'use client';
import React from 'react';
import TabMenu from '../../atoms/TabMenu';
// import { fetchTechfinityData } from 'apis';
import CommonLoader from '~/components/common/CommonLoader';

export default function TechFinity({ techfinityData }: any) {
  // const [techfinityData, setTechfinityData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data: any = await fetchTechfinityData();
  //     setTechfinityData(data);
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      {/* <h1 className="font-poppins font-bold text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-7 mt-4">
      {techfinityData?.headingText}
    </h1> */}

      <div>
        {techfinityData != null ? (
          <TabMenu tabOption={techfinityData?.tab_options} tabsContent={techfinityData?.tabData} show={'tech'} />
        ) : (
          <CommonLoader bgColor={'bg-zinc-950'} />
        )}
      </div>
    </>
  );
}
