import axios from 'axios';
import Cookies from 'js-cookie';
const api = axios.create({
  withCredentials: true, // Important for CSRF protection
});

// Interceptor to handle CSRF token
api.interceptors.request.use((config) => {
  // Only intercept POST, PUT, and DELETE requests
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    // Check if the URL is relative
    if (!(/^http:.*/.test(config.url!) || /^https:.*/.test(config.url!))) {
      // Fetch CSRF token from cookies
      const csrfToken = Cookies.get('XSRF-TOKEN');
      if (csrfToken) {
        // Add CSRF token to the request headers
        config.headers['X-XSRF-TOKEN'] = csrfToken;
      }
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;