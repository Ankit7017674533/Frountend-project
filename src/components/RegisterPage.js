import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterPage() {
  const [user, setUser] = useState({
    username: '', password: '', mobileNo: '', email: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // For redirecting to Home page

  const handleRegister = async () => {
    // Reset messages
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8081/api/register', user);
      setSuccessMessage("User registered successfully!");
      console.log("User registered!", response.data);

      // Clear form fields
      setUser({
        username: '', password: '', mobileNo: '', email: ''
      });
    } catch (error) {
      setErrorMessage("Registration failed! Please try again.");
      console.error("Registration failed!", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Register</h1>
        <p className="lead text-muted">Create an account to enjoy our car detailing services.</p>
      </div>

      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}

      <form className="card p-4 shadow-lg" style={{ maxWidth: '500px', margin: 'auto' }}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="mobileNo"
            placeholder="Mobile No"
            value={user.mobileNo}
            onChange={(e) => setUser({ ...user, mobileNo: e.target.value })}
            required
          />
          <label htmlFor="mobileNo">Mobile Number</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <button
          type="button"
          onClick={handleRegister}
          className="btn btn-primary w-100 mt-4 py-2"
          style={{ fontSize: '1.2em' }}
        >
          Register
        </button>
      </form>

      {/* Home Button */}
      <div className="mt-4 text-center">
        <button
          onClick={() => navigate('/')}
          className="btn btn-secondary py-2 px-4"
          style={{ fontSize: '1.1em' }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
