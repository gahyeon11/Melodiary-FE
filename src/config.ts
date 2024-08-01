const port = process.env.REACT_APP_PORT || '3000';

export const KAKAO_REDIRECT_URI = `http://localhost:${port}/auth?type=kakao`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export const GOOGLE_REDIRECT_URI = `http://localhost:${port}/auth?type=google`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email`;

export const STATE = Math.random().toString(36).substr(2, 11);
export const NAVER_REDIRECT_URI = `http://localhost:${port}/auth?type=naver`;
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
