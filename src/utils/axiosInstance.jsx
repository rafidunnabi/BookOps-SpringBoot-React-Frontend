import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3000,
});

export const axiosProducts = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  timeout: 3000,
});

export const axiosInstanceLogin = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const axiosInstanceProductService = axios.create({
  baseURL: "https://usman-fake-api.herokuapp.com/api/products",
  timeout: 3000,
});

export default axiosInstance;
