import axios from 'axios';
const request = axios.create({
  timeout: 5000,
  baseURL: 'https://cloud-music-api-lake.vercel.app/'
});
