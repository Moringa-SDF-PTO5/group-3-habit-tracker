import React, { useState } from 'react';
import './HabitForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HabitForm = ({ addHabit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      startDate: '',
      reminderDate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      startDate: Yup.string().required('Required'),
      reminderDate: Yup.string().nullable(),
    }),
    onSubmit: async (values, { resetForm }) => {
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
        resetForm();
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <form className="habit-form" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Habit Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      />
      {formik.touched.name && formik.errors.name ? <div className="error-message">{formik.errors.name}</div> : null}
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      />
      {formik.touched.description && formik.errors.description ? <div className="error-message">{formik.errors.description}</div> : null}
      <input
        type="date"
        name="startDate"
        value={formik.values.startDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      />
      {formik.touched.startDate && formik.errors.startDate ? <div className="error-message">{formik.errors.startDate}</div> : null}
      <input
        type="datetime-local"
        name="reminderDate"
        value={formik.values.reminderDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.reminderDate && formik.errors.reminderDate ? <div className="error-message">{formik.errors.reminderDate}</div> : null}
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
