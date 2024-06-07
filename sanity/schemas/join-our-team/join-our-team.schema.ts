// schema.js

import configuration from '~/config/schema.config';

export const joinSchema = {
  name: configuration?.JOIN_TEAM.JOIN,
  title: 'Join Our Team Schema',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Paragraph cannot be empty'),
    },
    {
      name: 'paraText',
      title: 'Paragraph Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Paragraph cannot be empty'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      //   validation: (Rule) => Rule.required('Image is mandatory'),
    },
  ],
};
