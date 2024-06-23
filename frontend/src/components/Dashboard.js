// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

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

  return (
    <div className="dashboard-container">
      <h1>Your Habits</h1>
      <ul className="habit-list">
        {habits.map(habit => (
          <li key={habit.id} className="habit-item">
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
