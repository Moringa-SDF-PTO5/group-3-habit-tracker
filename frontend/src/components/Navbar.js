// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import CSS for Navbar styles

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Habit Tracker</div>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link to="/habits/new">Add Habit</Link></li>
        <li className="nav-item">
          {user ? (
            <button onClick={handleLogout} className="nav-button">Log Out</button>
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
