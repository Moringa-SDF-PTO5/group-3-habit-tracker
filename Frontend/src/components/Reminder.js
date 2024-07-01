// src/components/Reminder.js

import React, { useState } from 'react';
import './Reminder.css';

const Reminder = ({ habitId, addReminder }) => {
  const [reminderDate, setReminderDate] = useState('');
  const [reminderMessage, setReminderMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder(habitId, { reminderDate, reminderMessage });
    setReminderDate('');
    setReminderMessage('');
  };

  return (
    <div className="reminderform-container">
    <form className="reminder-form" onSubmit={handleSubmit}>
      <h2>Set a Reminder</h2>
      <div className="form-group">
        <label htmlFor="reminderDate">Date:</label>
        <input
          type="date"
          id="reminderDate"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="reminderMessage">Reminder Message:</label>
        <input
          type="text"
          id="reminderMessage"
          value={reminderMessage}
          onChange={(e) => setReminderMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="reminder-submit-button">Set Reminder</button>
    </form>
    </div>
  );
};

export default Reminder;
