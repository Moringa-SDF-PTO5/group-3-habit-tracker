// src/components/HabitDetails.js

import React, { useState, useEffect } from 'react';
import './HabitDetails.css';

const HabitDetails = ({ habitId }) => {
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch habit details from the local file
  const fetchHabitDetails = async () => {
    try {
      const response = await fetch('/habits.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
      }
      const habitDetail = data.find(h => h.id === habitId);
      if (!habitDetail) {
        throw new Error('Habit not found');
      }
      setHabit(habitDetail);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // useEffect to fetch habit details on component mount
  useEffect(() => {
    fetchHabitDetails();
  }, [habitId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="habit-details">
      <h3>{habit.name}</h3>
      <p>{habit.description}</p>
      <p>Start Date: {habit.startDate}</p>
    </div>
  );
};

export default HabitDetails;
