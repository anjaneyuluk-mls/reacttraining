import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3600',
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  req.headers['Authorization'] = token;
  return req;
});

axiosInstance.interceptors.response.use((res) => {
  console.log(res);
  return res;
});
