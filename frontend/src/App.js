import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import HabitDetails from './components/HabitDetails';
import HabitForm from './components/HabitForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habits/new" element={<HabitForm />} />
        <Route path="/habits/:id" element={<HabitDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
