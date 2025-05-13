import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type ErrorResponse = {
  message: string;
  status?: number;
  data?: unknown;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errorData = error.response?.data as ErrorResponse;
    return Promise.reject({
      message: errorData?.message || 'Error de conexión',
      status: error.response?.status,
      data: errorData
    });
  }
);

export const apiClient = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const response = await axiosInstance.request<T>(config);
  return response.data;
};