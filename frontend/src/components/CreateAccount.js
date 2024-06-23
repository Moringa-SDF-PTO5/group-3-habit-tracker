// src/components/CreateAccount.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CreateAccount.css'; // Create and import the CSS file

const CreateAccount = ({ setUser }) => {
  const initialValues = {
    name: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
  });

  const onSubmit = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    setUser(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="form-container">
        <h2 className="form-title">Create Account</h2>
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
        <button type="submit" className="form-submit">Create Account</button>
      </Form>
    </Formik>
  );
};

export default CreateAccount;
