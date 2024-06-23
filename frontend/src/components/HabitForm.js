// src/components/HabitForm.js
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './HabitForm.css'; // Assuming you have a CSS file for styling

const HabitForm = () => {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/habits.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setHabits(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching habits:', error);
      });
  }, []);

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
      .then(data => {
        console.log(data);
        setHabits([...habits, data]);
      })
      .catch(error => {
        console.error('Error submitting habit:', error);
      });
  };

  const handleHabitClick = (id) => {
    navigate(`/habits/${id}`);
  };

  return (
    <div className="habit-form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="habit-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" className="form-field" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field id="description" name="description" as="textarea" className="form-field" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </Form>
      </Formik>
      <div className="habit-list">
        <h2>Your Habits</h2>
        <ul>
          {habits.length > 0 ? (
            habits.map(habit => (
              <li key={habit.id} className="habit-item" onClick={() => handleHabitClick(habit.id)}>
                {habit.name}
              </li>
            ))
          ) : (
            <p>No habits found. Please add some habits.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HabitForm;
