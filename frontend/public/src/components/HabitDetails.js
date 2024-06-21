import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);

  useEffect(() => {
    fetch(`/api/habits/${id}`)
      .then(response => response.json())
      .then(data => setHabit(data));
  }, [id]);

  if (!habit) return <div>Loading...</div>;

  return (
    <div>
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
    </div>
  );
};

export default HabitDetails;
