import { Metadata } from 'next';
import React from 'react';
import ReadyToTalk from '~/components/common/ReadyToTalk';
import BlogSection from '~/components/widgets/BlogSection/BlogSection';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'This is Our Blog Page',
};

export default function BlogSectionPage() {
  return (
    <>
      <BlogSection />

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
