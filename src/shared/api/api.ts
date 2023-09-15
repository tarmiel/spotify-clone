import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { LOCAL_STORAGE_TOKEN_KEY } from '../const/localstorage';
import storage from '../lib/storage/storage';

export const api = axios.create({
  withCredentials: true,
  baseURL: __API__,
});

const onRequest = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    config.headers.Accept = 'application/json';
  }

  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (!error.config) return Promise.reject(error);

  const originalRequest = error.config;

  if (error.response && error.response.status == 401) {
    try {
      const response = await axios.get(`${__API__}/api/auth/refresh`, { withCredentials: true });
      storage.setToken(response.data.token);
      return api.request(originalRequest);
    } catch (e) {
      console.log('Unauthorized');
    }
  }

  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

setupInterceptorsTo(api);
