import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/habits/new">Add Habit</Link></li>
        <li><Link to="/habits/1">Habit Details</Link></li> {/* Example habit ID */}
      </ul>
    </nav>
  );
};

export default Navbar;
