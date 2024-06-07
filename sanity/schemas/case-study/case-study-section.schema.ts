// caseStudySectionSchema.js

import configuration from '~/config/schema.config';

export const caseStudySection = {
  name: configuration.CASE_STUDY,
  title: 'MAIN CASE-STUDY SECTION SCHEMA',
  type: 'document',
  fields: [
    {
      name: 'headingText',
      title: 'MAIN HEADING',
      type: 'string',
    },
    {
      name: 'paraText',
      title: 'MAIN PARAGRAPH',
      type: 'string',
    },
    {
      name: 'case_study',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          name: 'caseStudyItem',
          title: 'CASE STUDY CARD',
          type: 'object',
          fields: [
            {
              name: 'main_heading',
              title: 'CASE STUDY CARD Heading',
              type: 'string',
            },
            {
              name: 'text',
              title: 'CASE STUDY CARD Text',
              type: 'string',
            },
            {
              name: 'case_study_img',
              title: 'Case Study Card Image',
              type: 'image',
            },
            // 1
            {
              name: 'section_1',
              title: 'Section 1',
              type: 'object',
              fields: [
                {
                  name: 'section1_heading',
                  title: 'Section 1 Heading',
                  type: 'string',
                },
                {
                  name: 'section1_para',
                  title: 'Section 1 Paragraph',
                  type: 'string',
                },
                {
                  name: 'section1_data',
                  title: 'Section 1 Data',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'section1_card_icon',
                          title: 'Section 1 Card Icon',
                          type: 'image',
                        },
                        {
                          name: 'section1_title',
                          title: 'Section 1 Card  Title',
                          type: 'string',
                        },
                        {
                          name: 'section1_text',
                          title: 'Section 1 Card  Text',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            // 2
            {
              name: 'section_2',
              title: 'Section 2',
              type: 'object',
              fields: [
                {
                  name: 'section2_heading',
                  title: 'Section 2 Heading',
                  type: 'string',
                },
                {
                  name: 'section2_para',
                  title: 'Section 2 ParaGraph',
                  type: 'string',
                },
                {
                  name: 'section2_data',
                  title: 'Section 2 Data',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'section2_text',
                          title: 'Section 2 Card  Text',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            // 3
            {
              name: 'section_3',
              title: 'Section 3',
              type: 'object',
              fields: [
                {
                  name: 'section3_heading',
                  title: 'Section 3 Heading',
                  type: 'string',
                },

                {
                  name: 'section3_data',
                  title: 'Section 3 Data',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'section3_title',
                          title: 'Section 3 Card  Title',
                          type: 'string',
                        },
                        {
                          name: 'section3_text',
                          title: 'Section 3 Card  Text',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            // 4
            {
              name: 'section_4',
              title: 'Section 4',
              type: 'object',
              fields: [
                {
                  name: 'section4_heading',
                  title: 'Section 4 Heading',
                  type: 'string',
                },

                {
                  name: 'section4_data',
                  title: 'Section 4 Data',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'section4_title',
                          title: 'Section 4 Card  Title',
                          type: 'string',
                        },
                        {
                          name: 'section4_text',
                          title: 'Section 4 Card  Text',
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
      ],
    },
  ],
};
