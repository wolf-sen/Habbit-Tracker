import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.50.1.44:3000', 
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default api;
