import axios from 'axios';

const configuredApiUrl = import.meta.env.VITE_API_URL;
const configuredTimeout = Number(import.meta.env.VITE_API_TIMEOUT_MS);
const requestTimeout = Number.isFinite(configuredTimeout) && configuredTimeout > 0
  ? configuredTimeout
  : 45000;
const isBrowser = typeof window !== 'undefined';
const isProductionHost = isBrowser && !['localhost', '127.0.0.1'].includes(window.location.hostname);
const pointsToLocalhost = configuredApiUrl && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/api\/?$/i.test(configuredApiUrl);

const apiBaseURL = isProductionHost && pointsToLocalhost
  ? '/api'
  : configuredApiUrl || '/api';

export const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  timeout: requestTimeout
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const original = error.config;
    const isAuthEndpoint = original?.url?.includes('/auth/');
    const hasAccessToken = Boolean(localStorage.getItem('accessToken'));

    if (error.response?.status === 401 && hasAccessToken && !isAuthEndpoint && !original?._retry) {
      original._retry = true;
      try {
        const data = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {}, { withCredentials: true });
        localStorage.setItem('accessToken', data.data.accessToken);
        original.headers = original.headers || {};
        original.headers.Authorization = `Bearer ${data.data.accessToken}`;
        return api(original);
      } catch {
        localStorage.removeItem('accessToken');
      }
    }
    return Promise.reject(error.response?.data || error);
  }
);

export const portfolioApi = {
  projects: (params) => api.get('/projects', { params }),
  blogs: (params) => api.get('/blogs', { params }),
  blog: (slug) => api.get(`/blogs/${slug}`),
  skills: () => api.get('/skills'),
  testimonials: () => api.get('/testimonials'),
  services: () => api.get('/services'),
  contact: (payload) => api.post('/contacts', payload),
  analytics: () => api.get('/analytics')
};

export const authApi = {
  login: (payload) => api.post('/auth/login', payload),
  me: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
  forgot: (payload) => api.post('/auth/forgot-password', payload),
  reset: (token, payload) => api.post(`/auth/reset-password/${token}`, payload)
};
