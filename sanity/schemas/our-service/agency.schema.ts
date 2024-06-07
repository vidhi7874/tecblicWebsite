import configuration from '~/config/schema.config';

export const agencySchema = {
  name: configuration.SERVICE.AGENCY,
  title: 'Consulting Agency Schema',
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
      name: 'specialCard',
      title: 'Special Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Card Title cannot be empty'),
            },
            {
              name: 'text',
              title: 'Card Text',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Card Text cannot be empty'),
            },
          ],
        },
      ],
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
              validation: (Rule) => Rule.required().min(1).error('Card Title cannot be empty'),
            },
            {
              name: 'text',
              title: 'Card Text',
              type: 'string',
              validation: (Rule) => Rule.required().min(1).error('Card Text cannot be empty'),
            },
            {
              name: 'card_image',
              title: 'Card Icon Image',
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
