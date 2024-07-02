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
      onSubmit={(values, { setSubmitting, setErrors }) => {
        const requestData = {
          username: values.username,
          password_hash: values.password, // Using 'password_hash' as the key
        };

        fetch('https://backend1-1-m0ph.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => {
            if (!response.ok) {
              return response.json().then((data) => {
                throw new Error(data.message || 'Login failed');
              });
            }
            return response.json();
          })
          .then((data) => {
            onLogin(data.username);
            setSubmitting(false);
          })
          .catch((error) => {
            setErrors({ server: error.message });
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className="login-form">
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" className="error-message" />
          
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" className="error-message" />

          {errors.server && <div className="error-message">{errors.server}</div>}
          
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <Link to='register'>No account? Register Here</Link>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
