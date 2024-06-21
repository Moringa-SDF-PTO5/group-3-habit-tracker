import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    fetch('/api/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field id="description" name="description" as="textarea" />
          <ErrorMessage name="description" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default HabitForm;
