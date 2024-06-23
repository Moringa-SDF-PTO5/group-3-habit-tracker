// src/components/HabitDetails.js

import React from 'react';
import './HabitDetails.css';

const HabitDetails = ({ habit }) => {
  return (
    <div className="habit-details">
      <h3>{habit.name}</h3>
      <p>{habit.description}</p>
      <p>Start Date: {habit.startDate}</p>
    </div>
  );
};

export default HabitDetails;
