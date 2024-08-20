import axios, { AxiosResponse } from 'axios';
import { httpClient } from './http';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCalender = async (userId : string , month : string): Promise<AxiosResponse< any >>  => {
    const response = await httpClient.get(`${API_BASE_URL}/diaries/calendar`, {
        params: {
          userId: userId,
          month: month,
        },
        withCredentials: true,
      });
    return response;
  };