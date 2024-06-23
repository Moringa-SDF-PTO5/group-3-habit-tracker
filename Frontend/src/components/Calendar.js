// src/components/Calendar.js

import React from 'react';
import './Calendar.css';

const Calendar = ({ habits }) => {
  // Placeholder for calendar logic, for simplicity we'll just list habits with dates
  return (
    <div className="calendar">
      <h2>Habit Calendar</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <span>{habit.name}</span> - <span>{habit.startDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
