import axios, { AxiosRequestConfig } from "axios";

const DEFAULT_PORT = process.env.REACT_APP_PORT;
const BASE_URL = `http://localhost:${DEFAULT_PORT}`;
const DEFAULT_TIMEOUT = 10000 * 60;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "content-type": "application/json"
    },
    withCredentials: true,
    ...config
  });

  return axiosInstance;
};

export const httpClient = createClient();