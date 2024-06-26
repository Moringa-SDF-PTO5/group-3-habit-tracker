// src/components/HabitForm.js

import React, { useState } from 'react';
import './HabitForm.css';

const HabitForm = ({ addHabit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const habit = { name, description, startDate };

    try {
      const response = await fetch('https://backend1-1-m0ph.onrender.com/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(habit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      addHabit(data);

      // Clear the form
      setName('');
      setDescription('');
      setStartDate('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
