import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch('https://backend1-1-m0ph.onrender.com'); // Corrected URL
        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  const addHabit = async (habit) => {
    try {
      const response = await fetch('https://backend1-1-m0ph.onrender.com', { // Corrected URL
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
