// src/components/Login.js
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("shakti@gmail.com"); // Default email
  const [password, setPassword] = useState("123"); // Default password
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password); // Call the function from App.js
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
