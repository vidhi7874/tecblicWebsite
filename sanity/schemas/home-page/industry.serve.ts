import configuration from '~/config/schema.config';

// schema.js

// schema.js

export const industryServeSchema = {
  name: configuration.HOME_PAGE.INDUSTRY,
  title: 'Industry We Serve',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Heading cannot be empty'),
    },
    {
      name: 'tab_options',
      title: 'Tab Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Tab ID',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Tab Label',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'tabData',
      title: 'Tab Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Tab Type',
              type: 'string',
            },
            {
              name: 'tab_icon',
              title: 'Tab Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'text',
              title: 'Tab Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
