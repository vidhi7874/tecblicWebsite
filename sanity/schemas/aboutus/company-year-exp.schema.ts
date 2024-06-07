// schema.js

import configuration from '~/config/schema.config';

export const companyYearExperienceSchema = {
  name: configuration.ABOUT_US.COMPANY_YEAR_EXPERIENCE,
  title: 'COMPANY YEAR EXPERIENCE Schema',
  type: 'document',
  fields: [
    {
      name: 'main_headingText',
      title: 'Main Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Heading cannot be empty'),
    },
    {
      name: 'main_paraText',
      title: 'Main Paragraph Text',
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
      name: 'sub_heading',
      title: 'Sub Heading',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Sub Heading cannot be empty'),
    },
    {
      name: 'sub_text',
      title: 'Sub Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Sub Paragraph cannot be empty'),
    },
    {
      name: 'card',
      title: 'Card',
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
