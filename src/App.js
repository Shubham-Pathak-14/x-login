import "./App.css";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "user" && password.trim() === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}

          <div>
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              placeholder="username"
              id="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="password"
              id="password"
              required
            />
          </div>
          <div>
            <button type="submit" name="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}