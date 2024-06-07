// schema.js

import configuration from '~/config/schema.config';

export const graphicSchema = {
  name: configuration.INDUSTRY.GRAPHIC_PAGE,
  title: 'Industry Graphic Interface Schema',
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
        hotspot: true,
      },
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
              name: 'title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Card Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
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
