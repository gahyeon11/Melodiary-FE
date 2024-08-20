type AuthType = 'google' | 'naver' | 'kakao';
type ActionType = 'signup' | 'login';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

const createOAuthUrl = (type: AuthType, action: ActionType): string => {
  const client_ids = {
    google: GOOGLE_CLIENT_ID,
    naver: NAVER_CLIENT_ID,
    kakao: 'YOUR_KAKAO_CLIENT_ID'
  };

  const redirect_uri = 'https://melodiary.site/auth';
  const state = JSON.stringify({ type, action });
  
  let auth_url = '';
  if (type === 'google') {
    auth_url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_ids[type]}&redirect_uri=${redirect_uri}&response_type=code&scope=email&state=${encodeURIComponent(state)}`;
  } else if (type === 'naver') {
    auth_url =`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_ids[type]}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${encodeURIComponent(state)}`;
  } else if (type === 'kakao') {
    auth_url = `https://kauth.kakao.com/oauth/authorize?client_id=${client_ids[type]}&redirect_uri=${redirect_uri}&response_type=code&state=${encodeURIComponent(state)}`;
  }

  return auth_url;
};
export const KAKAO_SIGNUP_URL = createOAuthUrl('kakao', 'signup');
export const GOOGLE_SIGNUP_URL = createOAuthUrl('google', 'signup');
export const NAVER_SIGNUP_URL = createOAuthUrl('naver', 'signup');
export const KAKAO_LOGIN_URL = createOAuthUrl('kakao', 'login');
export const GOOGLE_LOGIN_URL = createOAuthUrl('google', 'login');
//네이버 state 추후 수정 Math.random().toString(36).substr(2, 11)
export const NAVER_LOGIN_URL = createOAuthUrl('naver', 'login');
