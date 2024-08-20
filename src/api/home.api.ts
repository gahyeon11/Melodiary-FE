import axios, { AxiosResponse } from 'axios';
import { httpClient } from './http';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCalender = async (userId : string , month : string): Promise<AxiosResponse< any >>  => {
    const response = await httpClient.get(`/api/diaries/calendar`, {
        params: {
          userId: userId,
          month: month,
        },
        withCredentials: true,
      });
    return response;
  };

  export const getPlayList = async (userId : string, page: number, limit: number) => {
    const response = await httpClient.get(`/api/users/${userId}/music`, {
      params: {
        page: page,
        limit: limit,
      },
        withCredentials: true,
      });
    return response.data;
  };