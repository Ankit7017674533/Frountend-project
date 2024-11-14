import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/login', {
        username, 
        password
      });
      console.log(response.data);
      
      // On success, redirect to the booking page
      navigate('/booking');
    } catch (error) {
      console.error("Login failed!", error.response ? error.response.data : error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
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
  );
}

export default LoginPage;
