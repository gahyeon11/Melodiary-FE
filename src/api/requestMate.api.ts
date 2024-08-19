import axios, { AxiosResponse } from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const requestMate = async (userId : string, mateId: string): Promise<AxiosResponse<any>>  => {
    const requsetData = {
        mate_id: mateId
    }
    const accessToken = localStorage.getItem('access_token');
    const response = await axios.post(`${API_BASE_URL}/users/${userId}/mates`, requsetData, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 포함
      },
      withCredentials: true,
    });
    return response;
  };
  

  export const requestMateList = async (userId : string): Promise<AxiosResponse<any>>  => {
    const accessToken = localStorage.getItem('access_token');
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/mates/requests/sent`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 포함
      },
      withCredentials: true,
    });
    return response;
  };

  export const mateList = async (userId : string): Promise<AxiosResponse<any>>  => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await axios.get(`${API_BASE_URL}/users/${userId}/mates`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 포함
        },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching mate list:', error.response?.status, error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  };