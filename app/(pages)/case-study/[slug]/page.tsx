import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import SubCategoryMainCaseStudySection from '~/components/widgets/case-study/SubCategoryMainCaseStudySection';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.slug;

  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Case Study - ${id} `,
    description: `This is dynamic case study page for the  ${id} ID. `,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const metadata: Metadata = {
    title: 'AboutUs',
    description: 'This is about Us Page',
  };
  return <>{params && <SubCategoryMainCaseStudySection params_id={params?.slug} />}</>;
}
