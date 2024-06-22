import React, { useState } from 'react';
import './Home.css';  // Import the CSS file
import Calendar from './Calendar';
import SearchBar from './SearchBar';
import LoginForm from './LoginForm';

const Home = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(true);
    setShowSearch(false);
    setShowLogin(false);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
    setShowCalendar(false);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowCalendar(false);
    setShowSearch(false);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-buttons">
          <button className="button" onClick={handleCalendarClick}>Calendar</button>
          <button className="button" onClick={handleSearchClick}>Search</button>
          <button className="button" onClick={handleLoginClick}>Log In</button>
        </div>
        {showCalendar && <Calendar />}
        {showSearch && <SearchBar />}
        {showLogin && <LoginForm />}
        <h1>Welcome to the Habit Tracker</h1>
        <p>Track your daily habits, stay motivated, and achieve your goals with our intuitive habit tracker. Stay consistent and transform your routines into lasting habits. Join us today and start your journey towards a better you!</p>
      </div>
    </div>
  );
};

export default Home;
