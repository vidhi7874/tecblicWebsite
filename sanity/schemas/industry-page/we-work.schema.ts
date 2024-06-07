// schema.js

import configuration from '~/config/schema.config';

export const weWorkSchema = {
  name: configuration.INDUSTRY.WE_WORK_IND,
  title: 'We Work Industry Page Schema',
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
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'svg_icon',
              title: 'SVG Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
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
