// api/instance.js
import axios from "axios";
import Cookies from "js-cookie";
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token"); // 요청을 보낼 때마다 쿠키에서 액세스 토큰을 가져옵니다.
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`; // 액세스 토큰이 있으면 헤더에 추가합니다.
      config.withCredentials = true;
    } else {
      delete config.headers["Authorization"]; // 토큰이 없으면 헤더를 삭제
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
