import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import the updated CSS file

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch('/habits.json')
      .then(response => response.json())
      .then(data => setHabits(data.habits));
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">A List Of Your Current Habits</h1>
      <ul className="dashboard-list">
        {habits.map(habit => (
          <li key={habit.id} className="dashboard-item" style={{ backgroundColor: getRandomColor() }}>
            <strong>{habit.name}</strong>: {habit.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Function to generate random bright colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default Dashboard;
