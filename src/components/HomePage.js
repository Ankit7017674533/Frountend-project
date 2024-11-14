import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/login', {
        username,
        password,
      });
      console.log(response.data);

      // On success, redirect to the booking page
      navigate('/booking');
    } catch (error) {
      console.error('Login failed!', error.response ? error.response.data : error);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="my-4 text-center">
        <h2>Welcome to Car Detailing Services</h2>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 rounded">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
              </li>
            </ul>

            {/* Centered Brand Name */}
            <div className="d-flex justify-content-center w-100">
              <Link className="navbar-brand mx-auto" to="/">JAI DURGA CAR DETAILING</Link>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="card p-4" style={{ width: '22rem' }}>
          <h2 className="text-center mb-4">Login</h2>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>

          <p className="text-center">
            Don’t have an account? <Link to="/register" className="text-decoration-none">Click here to register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
