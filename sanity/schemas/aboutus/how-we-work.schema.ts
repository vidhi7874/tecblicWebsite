// schema.js

import configuration from '~/config/schema.config';

export const howWeWorkSchema = {
  name: configuration.ABOUT_US.HOW_WE_WORK,
  title: 'HOW WE WORK Schema',
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
              name: 'text',
              title: 'Card Text',
              type: 'string',
            },
            {
              name: 'footer_text',
              title: 'Footer Text',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // If you want to enable hotspot for the image
              },
            },
          ],
        },
      ],
    },
  ],
};
