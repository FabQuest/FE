// api/instance.js
import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
