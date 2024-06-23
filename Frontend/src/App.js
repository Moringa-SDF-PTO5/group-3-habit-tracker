// src/App.js

import React, { useState } from 'react';
import HabitDetails from './components/HabitDetails';
import HabitForm from './components/HabitForm';
import LoginForm from './components/LoginForm';
import Calendar from './components/Calendar';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  const filteredHabits = habits.filter((habit) =>
    habit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Habit Tracker</h1>
      </header>
      <main>
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <>
            <h2>Welcome, {user}!</h2>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <HabitForm addHabit={addHabit} />
            <div className="habit-list">
              {filteredHabits.map((habit, index) => (
                <HabitDetails key={index} habit={habit} />
              ))}
            </div>
            <Calendar habits={habits} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
