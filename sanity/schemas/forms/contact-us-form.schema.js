// schema.js
import configuration from '../../../src/config/schema.config';

export const contactUsFormDataSchema = {
  name: configuration.FORM_DATA.CONTACT_US,
  title: 'Form Data',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'mobile',
      title: 'Mobile',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
    },
  ],
};
