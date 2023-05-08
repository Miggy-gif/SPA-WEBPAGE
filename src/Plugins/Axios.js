import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'), // if you have a JWT token stored in localStorage
  },
});

export default instance;
