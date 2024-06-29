// src/components/UpdateForm.js

import React, { useState } from 'react';
import './UpdateForm.css';

const UpdateForm = ({ habit, onUpdate, onClose }) => {
  const [name, setName] = useState(habit.name);
  const [description, setDescription] = useState(habit.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(habit.id, { name, description });
  };

  return (
    <div className="update-form-container">
      <div className="update-form-overlay" onClick={onClose}></div>
      <form className="update-form" onSubmit={handleSubmit}>
        <h2>Update Habit</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="update-submit-button">Update</button>
        <button type="button" className="update-cancel-button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateForm;
