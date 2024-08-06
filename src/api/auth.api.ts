import axios from 'axios';
import { ISignup } from '../models/user.model';

const port = process.env.REACT_APP_PORT || '3000';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//export const getGoogleOAuthURL = (): string => {
  //const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  //const GOOGLE_REDIRECT_URI = `http://localhost:${port}/auth?type=google`;
  //return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email`;
//};


export const handleGoogleOAuthURL = async (code: string): Promise<{ token: string, user: any }> => {
  const response = await axios.post(`${API_BASE_URL}/auth/oauth/google`, { code });
  return response.data;
};

export const signUp = async (data: ISignup) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, data);
    return response.data;
  } catch (error) {
    console.error("회원가입에 실패했습니다.", error);
  }
};

export const login = async (data: ISignup) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, data);
    return response.data;
  } catch (error) {
    console.error("로그인에 실패했습니다.", error);
  }
};