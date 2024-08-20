import axios, { AxiosResponse } from 'axios';
import { INicknameRequest, ISignup } from '../models/user.model';
import { httpClient } from './http';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//회원가입
export const signUp = async (data: ISignup): Promise<AxiosResponse<{ access_token: string; refresh_token: string; user_id: any }>> => {
  const response = await httpClient.post(`${API_BASE_URL}/users`, data, {
    withCredentials: true,
  });
  return response;
  
};

//로그인
export const login = async (data: ISignup): Promise<AxiosResponse<{ access_token: string; refresh_token: string; user_id: any }>>  => {
  const response = await httpClient.post(`${API_BASE_URL}/users/login`, data, {
    withCredentials: true,
  });
  return response;
};

//로그아웃
export const logout = async (userId : string): Promise<AxiosResponse<any>>  => {
  const response = await httpClient.post(`${API_BASE_URL}/users/${userId}/logout`, null, {
    withCredentials: true,
  });
  return response;
};


//최초 닉네임 등록
export const registerNickname = async (id: string, nickname: string): Promise<AxiosResponse<any>> => {
  const data: INicknameRequest = { nickname };
  const response = await httpClient.post(`${API_BASE_URL}/users/${id}/nickname`, data, {
    withCredentials: true,
  });

  return response;
};


export const getProfile = async (id: string): Promise<AxiosResponse<{nickname: string}>> => {
  const response = await httpClient.get(`${API_BASE_URL}/users/${id}`, {
    withCredentials: true,
  });

  return response;
};