// schema.js

import configuration from '~/config/schema.config';

export const businessPlanSchema = {
  name: configuration.ABOUT_US.BUSINESS_PLAN,
  title: 'Business Plan Schema',
  type: 'document',
  fields: [
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
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // If you want to enable hotspot for the image
      },
    },
    {
      name: 'business_card',
      title: 'Business Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Card Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
