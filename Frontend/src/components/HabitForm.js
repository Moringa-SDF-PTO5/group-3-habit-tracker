import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './HabitForm.css';

const HabitForm = ({ addHabit }) => {
  return (
    <div className="habitform-container">
    <Formik
      initialValues={{ name: '', description: '', startDate: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.description) {
          errors.description = 'Required';
        }
        if (!values.startDate) {
          errors.startDate = 'Required';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch('https://backend1-1-m0ph.onrender.com/habits', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          addHabit(data);

          // Reset the form
          resetForm();
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="habit-form">
          <Field
            type="text"
            name="name"
            placeholder="Habit Name"
          />
          <ErrorMessage name="name" component="div" className="error-message" />
          
          <Field
            type="text"
            name="description"
            placeholder="Description"
          />
          <ErrorMessage name="description" component="div" className="error-message" />
          
          <Field
            type="date"
            name="startDate"
          />
          <ErrorMessage name="startDate" component="div" className="error-message" />
          
          <button type="submit" disabled={isSubmitting}>
            Add Habit
          </button>
        </Form>
      )}
    </Formik>
      </div>
  );
};

export default HabitForm;
