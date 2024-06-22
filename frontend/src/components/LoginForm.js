import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button className="login-button">Log In</button>
      {/* Add login functionality here */}
    </div>
  );
};

export default LoginForm;
