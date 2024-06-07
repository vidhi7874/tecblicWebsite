// schema.js

import configuration from '~/config/schema.config';

export const blogSchema = {
  name: configuration.BLOG_PAGE.BLOG,
  title: 'BLOG PAGE SCHEMA',
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
      name: 'tabOptions',
      title: 'Tab Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'Tab ID', type: 'string' },
            { name: 'label', title: 'Tab Label', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'left_section',
      title: 'Left Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'card_img', title: 'Card Image', type: 'image' },
            //
            {
              name: 'section1',
              title: 'Left Card Section 1',
              type: 'object',
              fields: [
                {
                  name: 'section1_heading',
                  title: 'Left Card Section 1 Heading',
                  type: 'string',
                },
                {
                  name: 'section1_data',
                  title: 'Left Card Section 1 Data',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            //
            {
              name: 'section2',
              title: 'Left Card Section 2',
              type: 'object',
              fields: [
                {
                  name: 'section2_heading',
                  title: 'Left Card Section 2 Heading',
                  type: 'string',
                },
                {
                  name: 'section2_data',
                  title: 'Left Card Section 2 Data',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'right_section',
      title: 'Right Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'card_img', title: 'Card Image', type: 'image' },
          ],
        },
      ],
    },
    {
      name: 'bottom_section',
      title: 'Bottom Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'card_img', title: 'Card Image', type: 'image' },
          ],
        },
      ],
    },
  ],
};
