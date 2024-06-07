import React from 'react';
import SubPartOfJoinTeam from '~/components/widgets/join-team/SubPartOfJoinTeam';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.slug;

  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Join Our Team - ${id} `,
    description: `This is Join Our Team page for the  ${id} ID. `,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <SubPartOfJoinTeam params_id={params?.slug} />
    </>
  );
}
