import configuration from '~/config/schema.config';

// schema.js
export const articleSchema = {
  name: configuration.HOME_PAGE.ARTICLE,
  title: 'Article Section',
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
      type: 'text',
      validation: (Rule) => Rule.required().min(1).error('Paragraph cannot be empty'),
    },

    {
      name: 'cardsData',
      title: 'Cards Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Title cannot be empty'),
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              validation: (Rule) => Rule.required().min(1).error('Text cannot be empty'),
            },
            {
              name: 'person',
              title: 'Person',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Person Details cannot be empty'),
            },
            {
              name: 'image',
              title: 'Background Card Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'avatar_image',
              title: 'Avatar Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Date cannot be empty'),
            },
          ],
        },
      ],
    },
  ],
};
