// src/components/UpdateForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './UpdateForm.css';

const UpdateForm = ({ habit, onUpdate, onClose }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required')
  });

  const handleSubmit = (values) => {
    onUpdate(habit.id, values);
  };

  return (
    <div className="update-form-container">
      <div className="update-form-overlay" onClick={onClose}></div>
      <Formik
        initialValues={{ name: habit.name, description: habit.description }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="update-form">
            <h2>Update Habit</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            {/* <div className="form-group">
              <label htmlFor="description">Description:</label>
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div> */}
            <div className="form-actions">
              <button type="submit" className="update-submit-button" disabled={isSubmitting}>
                Update
              </button>
              <button type="button" className="update-cancel-button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateForm;
