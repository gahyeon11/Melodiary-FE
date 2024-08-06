const BASE_URL = 'https://melo-diary.vercel.app/auth';

const generateOAuthSignupUrl = (
  service: 'kakao' | 'google' | 'naver',
  clientId: string,
  state?: string
) => {
  const redirectUri = `${BASE_URL}?type=${service}&action=signup`;
  const authUrlBase = {
    kakao: `https://kauth.kakao.com/oauth/authorize`,
    google: `https://accounts.google.com/o/oauth2/v2/auth`,
    naver: `https://nid.naver.com/oauth2.0/authorize`,
  }[service];

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    ...(service === 'naver' && { state }),
    ...(service === 'google' && { scope: 'email' })
  });

  return `${authUrlBase}?${params.toString()}`;
};

const generateOAuthLoginUrl = (
  service: 'kakao' | 'google' | 'naver',
  clientId: string,
  state?: string
) => {
  const redirectUri = `${BASE_URL}?type=${service}&action=login`;
  const authUrlBase = {
    kakao: `https://kauth.kakao.com/oauth/authorize`,
    google: `https://accounts.google.com/o/oauth2/v2/auth`,
    naver: `https://nid.naver.com/oauth2.0/authorize`,
  }[service];

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    ...(service === 'naver' && { state }),
    ...(service === 'google' && { scope: 'email' })
  });

  return `${authUrlBase}?${params.toString()}`;
};

export const KAKAO_SIGNUP_URL = generateOAuthSignupUrl('kakao', process.env.REACT_APP_KAKAO_REST_API_KEY!);
export const GOOGLE_SIGNUP_URL = generateOAuthSignupUrl('google', process.env.REACT_APP_GOOGLE_CLIENT_ID!);
export const NAVER_SIGNUP_URL = generateOAuthSignupUrl('naver', process.env.REACT_APP_NAVER_CLIENT_ID!, Math.random().toString(36).substr(2, 11));

export const KAKAO_LOGIN_URL = generateOAuthLoginUrl('kakao', process.env.REACT_APP_KAKAO_REST_API_KEY!);
export const GOOGLE_LOGIN_URL = generateOAuthLoginUrl('google', process.env.REACT_APP_GOOGLE_CLIENT_ID!);
export const NAVER_LOGIN_URL = generateOAuthLoginUrl('naver', process.env.REACT_APP_NAVER_CLIENT_ID!, Math.random().toString(36).substr(2, 11));
