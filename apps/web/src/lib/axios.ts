import axios, { AxiosInstance } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_HOST;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const apiAuth: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const refreshToken = async (): Promise<string | null> => {
  return api.post("/auth/refresh").then((res) => {
    return res.data.data.accessToken;
  });
};

apiAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !originalRequest.sent) {
      originalRequest.sent = true;
      try {
        const accessToken = await refreshToken();
        if (accessToken) {
          error.config.headers["Authorization"] = `Bearer ${accessToken}`;
          localStorage.setItem("token", accessToken);
          return apiAuth(originalRequest);
        }
      } catch (error) {
        localStorage.removeItem("token");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
