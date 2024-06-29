// src/components/Search.js

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import UpdateForm from './UpdateForm';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [habits, setHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetch(`https://backend1-1-m0ph.onrender.com/habits?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => setHabits(data))
        .catch(error => console.error('Error fetching habits:', error));
    }
  }, [searchQuery]);

  const updateHabit = (id, updatedFields) => {
    fetch(`https://backend1-1-m0ph.onrender.com/habits/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields),
    })
      .then(response => response.json())
      .then(updatedHabit => {
        setHabits(habits.map(habit => (habit.id === id ? updatedHabit : habit)));
        setSelectedHabit(null);  // Close the update form
      })
      .catch(error => console.error('Error updating habit:', error));
  };

  const deleteHabit = (id) => {
    fetch(`https://backend1-1-m0ph.onrender.com/habits/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setHabits(habits.filter(habit => habit.id !== id));
      })
      .catch(error => console.error('Error deleting habit:', error));
  };

  return (
    <div className="search-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="habits-list">
        {habits.map(habit => (
          <div key={habit.id} className="habit-card">
            <div className="habit-info">
              <h3 className="habit-name">Habit name: {habit.name}</h3>
              <p className="habit-description">Description: {habit.description}</p>
              <p className="habit-date">Date: {Date(habit.date)}</p>
            </div>
            <div className="habit-actions">
              <button 
                className="update-button" 
                onClick={() => setSelectedHabit(habit)}
              >
                Update
              </button>
              <button className="delete-button" onClick={() => deleteHabit(habit.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {selectedHabit && (
        <UpdateForm
          habit={selectedHabit}
          onUpdate={updateHabit}
          onClose={() => setSelectedHabit(null)}
        />
      )}
    </div>
  );
};

export default Search;
