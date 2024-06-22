import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Import the CSS file
import './HabitForm.css';  // Import the CSS file
import './Home.css';  // Ensure this import is at the top of Home.js
import './HabitDetails.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
