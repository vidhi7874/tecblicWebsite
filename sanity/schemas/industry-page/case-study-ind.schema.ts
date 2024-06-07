// schema.js

import configuration from '~/config/schema.config';

export const caseStudyIndustrySchema = {
  name: configuration.INDUSTRY.CASE_STUDY_IND,
  title: 'CaseStudy Industry Schema',
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
      name: 'case_card',
      title: 'Case Cards',
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
            {
              name: 'card_img',
              title: 'Card Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
