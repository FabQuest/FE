import axios from "axios";
import Cookies from "js-cookie";
const accessToken = Cookies.get("access_token");

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${Cookies.get("access_token")}`,
  },
  timeout: 10000, // 10초 타임아웃 설정
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token"); // 요청을 보낼 때마다 쿠키에서 액세스 토큰을 가져옵니다.
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`; // 액세스 토큰이 있으면 헤더에 추가합니다.
      config.withCredentials = true;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
