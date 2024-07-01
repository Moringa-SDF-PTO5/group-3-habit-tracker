import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Add authentication logic here
        onLogin(values.username);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="login-form">
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" className="error-message" />
          
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" className="error-message" />
          
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <Link to = 'register' >No account ? Register Here</Link>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
