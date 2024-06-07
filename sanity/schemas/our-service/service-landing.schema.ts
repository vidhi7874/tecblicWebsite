// schema.js

import configuration from '~/config/schema.config';

export const serviceSchema = {
  name: configuration.SERVICE.SERVICE_LANDING,
  title: 'Service Landing Page',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Heading cannot be empty'),
    },
    {
      name: 'paraText',
      title: 'Paragraph Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Paragraph cannot be empty'),
    },
  ],
};
