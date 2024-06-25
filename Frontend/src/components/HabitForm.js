import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (habitName.trim()) {
      const newHabit = {
        name: habitName,
        // Add any other habit properties here, like `date`, `frequency`, etc.
      };
      addHabit(newHabit);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter habit name"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
