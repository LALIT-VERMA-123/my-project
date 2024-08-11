// src/components/SignUpForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import validationSchemaSignup from './validationSchemaSignup';
import './SignUpForm.css';
import logo from './walmart-logo.png'; // Import your logo

const SignUpForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log('SignUp Form Values:', values);
  };

  return (
    <div className="form-container">
      <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchemaSignup}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
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
          <button type="submit">Sign Up</button>
          <div className="link">
            Already have an account? <a href="/login">Login</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
