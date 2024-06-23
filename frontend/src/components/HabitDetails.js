// src/components/HabitDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HabitDetails.css'; // Assuming you have a CSS file for styling

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/habits.json`)
      .then(response => response.json())
      .then(data => {
        const habit = data.find(h => h.id === parseInt(id, 10));
        setHabit(habit);
      });
  }, [id]);

  const handleDelete = () => {
    // Simulate deleting the habit locally
    fetch(`/habits.json`)
      .then(response => response.json())
      .then(data => {
        const updatedHabits = data.filter(h => h.id !== parseInt(id, 10));
        // Update the local state or navigate back to dashboard
        // This should be adapted to your backend API
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('Error deleting habit:', error);
      });
  };

  if (!habit) return <div>Loading...</div>;

  return (
    <div className="habit-details-container">
      <h1>{habit.name}</h1>
      <p>{habit.description}</p>
      <h2>Progress</h2>
      <ul>
        {habit.progress.map(prog => (
          <li key={prog.id}>{prog.date}: {prog.status}</li>
        ))}
      </ul>
      <h2>Reminders</h2>
      <ul>
        {habit.reminders.map(rem => (
          <li key={rem.id}>{rem.time}: {rem.frequency}</li>
        ))}
      </ul>
      <button onClick={handleDelete} className="delete-button">Delete Habit</button>
    </div>
  );
};

export default HabitDetails;
