import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISignup } from '../models/user.model';
import { SignUp } from '../api/auth.api';
import axios from 'axios';
const Auth = () => {
  const navigate = useNavigate();
  const params = new URL(document.URL).searchParams;
  const code = params.get('code');
  const type = params.get('type');
  useEffect(() => {
    const handleOAuth = async () => {
      if (code && type) {
        try {
          const signupData: ISignup = {
            service_provider: "google",
            authorization_code: code,
          };
          axios
          .post('https://api.melodiary.site/api/users', signupData, {
            withCredentials: true
          })
          .then((response: { data: any }) => {
            console.log('Successfully received jwt:', response.data);
          })
          .catch((error: any) => {
            console.error('Error:', error);
          });
          // const response = await SignUp(signupData);
          // console.log(response);
          // //localStorage.setItem('token', access_token);
          // navigate('/'); // 홈으로 리다이렉트
        } catch (error) {
          console.error('OAuth 실패:', error);
          navigate('/login'); 
        }
      }
    };
    handleOAuth();
  }, [navigate]);
    
  return (
    <AuthWrapper
    >
      <h1>code</h1>
      {type}
      <br/>
      {code}
    </AuthWrapper>
  )
};

const AuthWrapper = styled.div`
margin:100px;
`;

export default Auth ;