// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import HabitDetails from './components/HabitDetails';
import HabitForm from './components/HabitForm';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <CreateAccount setUser={setUser} />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/habits/new" element={user ? <HabitForm /> : <Navigate to="/login" />} />
        <Route path="/habits/:id" element={user ? <HabitDetails /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
