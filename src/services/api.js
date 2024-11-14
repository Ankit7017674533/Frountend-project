import axios from 'axios';

const API_URL = 'http://localhost:8081/api'; // Spring Boot server base URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
