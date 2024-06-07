import configuration from '~/config/schema.config';

// schema.js
export const addressSchema = {
  name: configuration.HOME_PAGE.ADDRESS,
  title: 'Address Section',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Heading cannot be empty'),
    },

    {
      name: 'addressData',
      title: 'Address Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Flag Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'country',
              title: 'Country',
              type: 'string',
            },
            {
              name: 'address',
              title: 'Address',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label_name',
              title: 'Label Name',
              type: 'string',
            },
            {
              name: 'label_value',
              title: 'Label Value',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'icons',
      title: 'Social Media Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Social Icons',
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
