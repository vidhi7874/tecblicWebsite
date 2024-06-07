// schema.js

import configuration from '~/config/schema.config';

export const caseStudySchema = {
  name: configuration.SERVICE.CASE_STUDY,
  title: 'Case Study Schema',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
    },
    {
      name: 'paraText',
      title: 'Paragraph Text',
      type: 'string',
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
              name: 'main_title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Card Text',
              type: 'string',
            },
            {
              name: 'image',
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
