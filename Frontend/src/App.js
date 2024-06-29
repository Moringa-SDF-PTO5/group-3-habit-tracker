// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HabitDetails from './components/HabitDetails';
import HabitForm from './components/HabitForm';
import LoginForm from './components/LoginForm';
// import Calendar from './components/Calendar';
import Search from './components/Search';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch('/api/habits');
        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      habits.forEach(habit => {
        if (habit.reminderTime) {
          const [hours, minutes] = habit.reminderTime.split(':').map(Number);
          if (now.getHours() === hours && now.getMinutes() === minutes) {
            alert(`Reminder: It's time to work on your habit "${habit.name}"`);
          }
        }
      });
    };

    const reminderInterval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(reminderInterval);
  }, [habits]);

  const addHabit = async (habit) => {
    try {
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(habit)
      });
      const newHabit = await response.json();
      setHabits([...habits, newHabit]);
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  const filteredHabits = habits.filter((habit) =>
    habit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      
      <div className="App">
        <header className="App-header">
          <h1>Habit Tracker</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginForm onLogin={handleLogin} />} />
            <Route path="/dashboard" element={
              !isLoggedIn ? <Navigate to="/" /> : (
                <>
                  <h2>Welcome, {user}!</h2>
                  <Search />
                  <HabitForm addHabit={addHabit} />
                  <div className="habit-list">
                    {filteredHabits.map((habit, index) => (
                      <HabitDetails key={index} habit={habit} />
                    
                    ))}
                  </div>
                  {/* <Calendar habits={habits} /> */}
                </>
              )
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
