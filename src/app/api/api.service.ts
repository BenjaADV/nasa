import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { QueryClient, UseQueryOptions, useQuery, useMutation } from '@tanstack/react-query';

// Configuración de axios
const axiosInstance = axios.create({
  baseURL: 'https://tu-api.com/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

type ErrorResponse = {
  message: string;
  status?: number;
  data?: unknown;
};

type ApiConfig = AxiosRequestConfig & { enabled?: boolean };
type ApiResponse<T> = { data: T };

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errorData = error.response?.data as ErrorResponse;
    return Promise.reject({
      message: errorData?.message || 'Error de conexión',
      status: error.response?.status,
      data: errorData,
    });
  }
);

export const apiService = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const response = await axiosInstance.request<T>(config);
  return response.data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        const err = error as ErrorResponse;
        if (err?.status && err.status >= 400 && err.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

export const useApi = <T>(
  queryKey: string[],
  config: ApiConfig,
  options?: UseQueryOptions<T, ErrorResponse>
) => {
  const { enabled = true, ...axiosConfig } = config;

  return useQuery<T, ErrorResponse>({
    queryKey,
    queryFn: async () => {
      try {
        return await apiService<T>(axiosConfig);
      } catch (error) {
        const err = error as ErrorResponse;
        throw {
          message: err.message,
          status: err.status,
          data: err.data,
        };
      }
    },
    enabled,
    ...options,
  });
};

export const useApiMutation = <T, V = unknown>(config?: AxiosRequestConfig) => {
  return useMutation<T, ErrorResponse, V>({
    mutationFn: async (data: V) => {
      try {
        return await apiService<T>({
          ...config,
          data,
        });
      } catch (error) {
        const err = error as ErrorResponse;
        throw {
          message: err.message,
          status: err.status,
          data: err.data,
        };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
