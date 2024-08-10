// src/components/validationSchemaSignup.js
import * as Yup from 'yup';

const validationSchemaSignup = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

export default validationSchemaSignup;
