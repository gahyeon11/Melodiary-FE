import axios, { AxiosResponse } from 'axios';
import { INicknameRequest, ISignup } from '../models/user.model';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//회원가입
export const signUp = async (data: ISignup): Promise<AxiosResponse<{ access_token: string; user_id: any }>> => {
  let response;
  response = await axios.post(`${API_BASE_URL}/users`, data, {
    withCredentials: true,
  });
  return response;
  
};

//로그인
export const login = async (data: ISignup): Promise<AxiosResponse<{ access_token: string; user_id: any }>>  => {
  let response;
  response = await axios.post(`${API_BASE_URL}/users/login`, data, {
    withCredentials: true,
  });
  return response;
};

//로그아웃
export const logout = async (userId : string): Promise<AxiosResponse<{ access_token: string; user_id: any }>>  => {
  const accessToken = localStorage.getItem('access_token');
  const response = await axios.post(`${API_BASE_URL}/users/${userId}/logout`, {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 포함
    },
    withCredentials: true,
  });
  return response;
};


//최초 닉네임 등록
export const registerNickname = async (id: string, nickname: string): Promise<AxiosResponse<any>> => {
  const accessToken = localStorage.getItem('access_token');
  const userId = parseInt(id, 10);
  const data: INicknameRequest = {
    nickname,
  };

  const response = await axios.post(`${API_BASE_URL}/users/${userId}/nickname`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 포함
    },
    withCredentials: true,
  });

  return response;
};


export const getProfile = async (id: string): Promise<AxiosResponse<{nickname: string}>> => {
  const accessToken = localStorage.getItem('access_token');
  const userId = parseInt(id, 10);
  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`, 
    },
    withCredentials: true,
  });

  return response;
};