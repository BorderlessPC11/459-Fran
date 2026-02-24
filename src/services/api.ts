import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Altere pela sua URL de API

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token (se necessário)
client.interceptors.request.use(
  (config) => {
    // Aqui você pode adicionar o token de autenticação
    // const token = await getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros
client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const apiService = {
  get: (url: string, config?: any) => client.get(url, config),
  post: (url: string, data?: any, config?: any) => client.post(url, data, config),
  put: (url: string, data?: any, config?: any) => client.put(url, data, config),
  delete: (url: string, config?: any) => client.delete(url, config),
  patch: (url: string, data?: any, config?: any) => client.patch(url, data, config),
};
