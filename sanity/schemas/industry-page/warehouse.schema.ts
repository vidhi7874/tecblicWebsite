import configuration from '~/config/schema.config';

export const industrySchema = {
  name: configuration.INDUSTRY.LANDING_PAGE,
  title: 'Industry Landing Page Schema',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'Heading Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).error('Heading Text cannot be empty'),
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
        hotspot: true, // If you want to enable hotspot for the image
      },
    },
  ],
};
