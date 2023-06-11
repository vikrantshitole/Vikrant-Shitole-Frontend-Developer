// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/', // Replace with your API base URL
});


export default api;
