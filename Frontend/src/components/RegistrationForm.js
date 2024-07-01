// src/components/RegisterForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate()

  const initialValues = {
    username: '',
    password_hash: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password_hash: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    fetch('https://backend1-1-m0ph.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to register');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        setStatus({ success: true });
        setSubmitting(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus({ success: false });
        setSubmitting(false);
      });
  };

  return (
    <div className="register-form-container">
      <h1>Register</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ status, isSubmitting }) => (
          <Form>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-control">
              <label htmlFor="password_hash">Password</label>
              <Field type="password" id="password_hash" name="password_hash" />
              <ErrorMessage name="password_hash" component="div" className="error" />
            </div>
            <button type="submit" className="register-button" disabled={isSubmitting}>
              Register
            </button>
            {status && status.success === false && (
              <div className="error">Registration failed. Please try again.</div>
            )}
            {status && status.success === true && (
              <div className="success">Registration successful!</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
