import React, { useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    // Add your signup logic here
    // For simplicity, let's assume a basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Successful signup
      console.log("Signup successful!");
      setError("");
    }
  };
  return (
    <div className="signup">
      <div className="signup-container">
        {/* Apply a class for styling */}
        <h2>Signup</h2>
        <div className="user">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="em">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="pw">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSignup}>Signup</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
