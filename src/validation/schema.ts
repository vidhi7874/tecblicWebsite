import * as yup from 'yup';

const projectSchema = yup.object().shape({
  full_name: yup.string().trim().required('Name Is Required'),
  user_email: yup.string().trim().required('Email Is Required'),
  mobile_number: yup.string().trim(),
  description: yup.string().trim(),
  my_file: yup.mixed(),
});

const career_inquiries = yup.object().shape({
  full_name: yup.string().trim().required('First Name Is Required'),
  user_email: yup.string().trim().required('Email Is Required'),
  mobile_number: yup.string().trim(),
  description: yup.string().trim(),
  my_file: yup.mixed(),
});

export { projectSchema, career_inquiries };
