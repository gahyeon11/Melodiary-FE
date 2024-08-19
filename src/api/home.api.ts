import axios, { AxiosResponse } from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCalender = async (userId : string , month : string): Promise<AxiosResponse< any >>  => {
    const accessToken = localStorage.getItem('access_token');
    const response = await axios.get(`${API_BASE_URL}/diaries/calendar`, {
        headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        params: {
          userId: userId,
          month: month,
        },
        withCredentials: true,
      });
    return response;
  };