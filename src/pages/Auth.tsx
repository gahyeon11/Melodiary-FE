import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISignup } from '../models/user.model';
import { signUp, login } from '../api/auth.api';
import axios from 'axios';

const Auth = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const stateParam = urlParams.get('state');
  const code = urlParams.get('code');
  const type = urlParams.get('type');

  useEffect(() => {
    const handleOAuth = async () => {
      if(code && type){
        const authData: ISignup = {
          service_provider: type,
          authorization_code: code,
        };
        const signUpResponse = await signUp(authData);
        console.log('SignUp Response:', signUpResponse);
      }
      if (stateParam && code) {
        const { type, action } = JSON.parse(stateParam);
        const authData: ISignup = {
          service_provider: type,
          authorization_code: code,
        };

        try {
          let response;
          if (action === 'signup') {
            response = await axios.post('https://api.melodiary.site/api/users/', authData, {
              withCredentials: true,
            });
          } else if (action === 'login') {
            response = await axios.post('https://api.melodiary.site/api/users/login', authData, {
              withCredentials: true,
            });
          }else{
            const signUpResponse = await signUp(authData);
            console.log('SignUp Response:', signUpResponse);
          }

          if (response) {
            console.log('Successfully received jwt:', response.data);
            const { access_token, user_id } = response.data;
            localStorage.setItem('token', access_token);
            localStorage.setItem('user_id', user_id);
            //navigate('/nickname'); // 리다이렉트
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data);
          } else {
            console.error('Unexpected error:', error);
          }
          //navigate('/login'); 
        }
      } else {
        console.error('Missing required parameters: code or state');
        //navigate('/login'); 
      }
    };

    handleOAuth();
  }, [navigate, stateParam, code]);
  // useEffect(() => {
  //   const handleOAuth = async () => {
  //     if (code && type && action) {
  //       try {
  //         const authData: ISignup = {
  //           service_provider: type,
  //           authorization_code: code,
  //         };

  //         console.log('Sending auth data to server:', authData);

  //         const response = await axios.post('https://api.melodiary.site/api/users', authData, {
  //           withCredentials: true
  //         });

  //         console.log('Successfully received jwt:', response.data);

  //         if (action === 'signup') {
  //           const signUpResponse = await signUp(authData);
  //           console.log('SignUp Response:', signUpResponse);
  //         } else if (action === 'login') {
  //           const loginResponse = await login(authData);
  //           console.log('Login Response:', loginResponse);
  //         }

  //         //navigate('/nickname'); // 홈으로 리다이렉트
  //       } catch (error) {
  //         if (axios.isAxiosError(error)) {
  //           console.error('Axios error:', error.response?.data);
  //         } else {
  //           console.error('Unexpected error:', error);
  //         }
  //         //navigate('/login'); 
  //       }
  //     } else {
  //       console.error('Missing required parameters: code, type, or action');
  //       //navigate('/login'); 
  //     }
  //   };
  //   handleOAuth();
  // }, [code, type, action, navigate]);
    
  return (
    <AuthWrapper
    >
      <h1>OAuth 인증</h1>
      <p>Code: {code}</p>
    </AuthWrapper>
  )
};

const AuthWrapper = styled.div`
margin:100px;
`;

export default Auth ;