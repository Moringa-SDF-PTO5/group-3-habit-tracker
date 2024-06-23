// src/components/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'; // Create and import the CSS file

const Login = ({ setUser }) => {
  const initialValues = {
    name: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit = (values) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === values.name && storedUser.password === values.password) {
      setUser(storedUser);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="form-container">
        <h2 className="form-title">Log In</h2>
        <div>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" className="form-input" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" className="form-input" />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>
        <button type="submit" className="form-submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default Login;
