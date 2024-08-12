import axios, { AxiosResponse } from 'axios';
import { ISignup } from '../models/user.model';
const port = process.env.REACT_APP_PORT || '3000';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const handleGoogleOAuthURL = async (code: string): Promise<{ access_token: string, user_id: any }> => {
  const response = await axios.post(`${API_BASE_URL}/auth/oauth/google`, { code });
  return response.data;
};

export const signUp = async (data: ISignup): Promise<AxiosResponse<{ access_token: string; user_id: any }>> => {
  let response;
  response = await axios.post(`${API_BASE_URL}/users`, data, {
    withCredentials: true,
  });
  return response;
  
};

export const login = async (data: ISignup): Promise<AxiosResponse<{ access_token: string; user_id: any }>>  => {
  let response;
  response = await axios.post(`${API_BASE_URL}/users/login`, data, {
    withCredentials: true,
  });
  return response;
};