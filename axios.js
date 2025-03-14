import axios from 'axios';
import Cookies from 'js-cookie';

let instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,

  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

instance.interceptors.request.use(
  async config => {
    const token = Cookies.get('accessToken'); // Retrieve the token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config; // Return the modified config,
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  (response) => {
    return response; // Return the response if it's successful
  },
  (error) => {
    const originalRequest = error.config;

    // Check if the error is a 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Redirect to the login page
      window.location.href = '/login'; // Change to your login page route
    }

    return Promise.reject(error); // Reject the promise with the error
  }
)

export default instance;
