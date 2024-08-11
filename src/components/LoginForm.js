// src/components/LoginForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css'; // Import the CSS file for styling
import logo from './walmart-logo.png'; // Import your logo

const LoginForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log('Login Form Values:', values);
  };

  const validationSchemaLogin = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div className="form-container">
      <img src={logo} alt="Walmart Logo" className="logo" /> {/* Add the logo */}
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchemaLogin}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
          <div className="link">
            Don't have an account? <a href="/signup" >Sign Up</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
