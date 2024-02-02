import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's assume a simple username/password check
    if (username === "example" && password === "password") {
      // Successful login
      console.log("Login successful!");
      setError("");
    } else {
      // Failed login
      setError("Invalid username or password");
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        {/* Apply a class for styling */}
        <h2>Login</h2>
        <div className="user">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pw">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
