import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with your backend API URL

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const createUser = (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};
