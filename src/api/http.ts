import axios, { AxiosRequestConfig } from "axios";

const DEFAULT_PORT = process.env.REACT_APP_PORT;
const BASE_URL = `http://localhost:${DEFAULT_PORT}`;
const DEFAULT_TIMEOUT = 10000 * 60;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "content-type": "application/json",
      'Authorization': `Bearer ${accessToken}`,
      'Cache-Control': 'no-cache'  // 304 응답을 방지하기 위해 추가했습니다!
    },
    withCredentials: true,
    ...config
  });

  return axiosInstance;
};

export const httpClient = createClient();
