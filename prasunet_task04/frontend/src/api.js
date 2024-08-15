// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = (user) => axios.post(`${API_URL}/auth/register`, user);
export const loginUser = (user) => axios.post(`${API_URL}/auth/login`, user);
export const getTasks = () => axios.get(`${API_URL}/tasks`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
export const addTask = (task) => axios.post(`${API_URL}/tasks`, task, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
export const updateTask = (id, task) => axios.put(`${API_URL}/tasks/${id}`, task, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
