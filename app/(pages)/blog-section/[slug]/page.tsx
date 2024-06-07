import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import SubPartOfBlogPage from '~/components/widgets/BlogSection/SubPartOfBlogPage';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.slug;
  // for the images
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Blog Section - ${id} `,
    description: `This is dynamic Blog Page for the  ${id} blog  ID. `,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <SubPartOfBlogPage params_id={params?.slug} />
    </>
  );
}
