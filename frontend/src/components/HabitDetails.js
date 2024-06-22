import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './HabitDetails.css'; // Import the updated CSS file

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);

  useEffect(() => {
    fetch('/habits.json')
      .then(response => response.json())
      .then(data => {
        const habitData = data.habits.find(h => h.id === parseInt(id));
        setHabit(habitData);
      });
  }, [id]);

  if (!habit) return <div className="details-loading">Loading...</div>;

  return (
    <div className="details-container">
      <div className="details-header" style={{ backgroundColor: getRandomColor() }}>
        <h1>{habit.name}</h1>
        <p>{habit.description}</p>
      </div>
      <div className="details-section">
        <h2>Progress</h2>
        <ul className="details-list">
          {habit.progress.map(prog => (
            <li key={prog.id} className="details-item">{prog.date}: {prog.status}</li>
          ))}
        </ul>
      </div>
      <div className="details-section">
        <h2>Reminders</h2>
        <ul className="details-list">
          {habit.reminders.map(rem => (
            <li key={rem.id} className="details-item">{rem.time}: {rem.frequency}</li>
          ))}
        </ul>
      </div>
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

export default HabitDetails;
