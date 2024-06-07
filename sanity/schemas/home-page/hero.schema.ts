import configuration from 'src/config/schema.config';
// schema.js
export const heroSchema = {
  name: configuration.HOME_PAGE.HERO,
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Line cannot be empty'),
    },
    {
      name: 'paraText',
      title: 'Paragraph Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Line cannot be empty'),
    },
  ],
};
