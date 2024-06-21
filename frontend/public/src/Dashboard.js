import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch('/api/habits')
      .then(response => response.json())
      .then(data => setHabits(data));
  }, []);

  return (
    <div>
      <h1>Your Habits</h1>
      <ul>
        {habits.map(habit => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
