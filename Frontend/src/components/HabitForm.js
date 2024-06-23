// src/components/HabitForm.js

import React, { useState } from 'react';
import './HabitForm.css';

const HabitForm = ({ addHabit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ name, description, startDate });
    setName('');
    setDescription('');
    setStartDate('');
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
