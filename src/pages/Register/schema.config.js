import * as yup from 'yup';
/**
 * Schema contains validation functions for each input.
 */
const schema = yup.object().shape({
  username: yup.string().email().required('Username is a required field.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long.')
    .required('Password is a required field.'), // we should define some password rules here
});

export default schema;
