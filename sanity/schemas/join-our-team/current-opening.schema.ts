import configuration from '~/config/schema.config';

export const currentOpeningSchema = {
  name: configuration.JOIN_TEAM.CURRENT_OPENING,
  title: 'CURRENT_OPENING Schema',
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
      name: 'cardArray',
      title: 'Card Array',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'jobCard',
          title: 'Job Opening Card',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'roles',
              title: 'Roles',
              type: 'object',
              fields: [
                {
                  name: 'role_heading',
                  title: 'Role Heading',
                  type: 'string',
                },
                {
                  name: 'roles_data',
                  title: 'Roles Data',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'requirement',
              title: 'Requirement',
              type: 'object',
              fields: [
                {
                  name: 'req_heading',
                  title: 'Requirement Heading',
                  type: 'string',
                },
                {
                  name: 'req_data',
                  title: 'Requirement Data',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'qualification',
              title: 'Qualification',
              type: 'object',
              fields: [
                {
                  name: 'qua_heading',
                  title: 'Qualification Heading',
                  type: 'string',
                },
                {
                  name: 'qua_data',
                  title: 'Qualification Data',
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
  ],
};

// We love what we do and we do it with passion. We value the experimentation of the message and smart incentives. We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
// AI/ML Lead ( 5+ yrs )
