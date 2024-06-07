import configuration from '../../../src/config/schema.config';

export const careerFormDataSchema = {
  name: configuration.FORM_DATA.CAREERS,
  title: 'CAREER INQUERIES DATA',
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
