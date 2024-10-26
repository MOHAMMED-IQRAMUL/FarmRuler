import axios from 'axios';
// Create an Axios instance with the base URL of your backend
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true, // This ensures cookies are sent with requests
});
export default axiosInstance;
