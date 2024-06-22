import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './HabitForm.css'; // Import the updated CSS file

const HabitForm = () => {
  const initialValues = {
    name: '',
    description: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().max(200, 'Must be 200 characters or less')
  });

  const onSubmit = (values) => {
    console.log(values); // You can perform API call or other actions here
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="form-container">
        <h2 className="form-title">Create a New Habit</h2>
        <div>
          <label htmlFor="name">Habit Name</label>
          <Field id="name" name="name" type="text" className="form-input" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="description">Habit Description</label>
          <Field id="description" name="description" as="textarea" className="form-textarea" />
          <ErrorMessage name="description" component="div" className="error-message" />
        </div>
        <button type="submit" className="form-submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default HabitForm;
