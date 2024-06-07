import configuration from '~/config/schema.config';

// schema.js
export const goalSection = {
  name: configuration.HOME_PAGE.GOALS,
  title: 'Goals Section',
  type: 'document',
  fields: [
    {
      name: 'card',
      title: 'CARD SECTION',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image_url',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Line cannot be empty'),
            },
          ],
        },
      ],
    },
    {
      name: 'paraText',
      title: 'Paragraph Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Line cannot be empty'),
    },
  ],
};
