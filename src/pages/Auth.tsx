import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../assets/images/background.png';
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISignup } from '../models/user.model';
import { signUp, login } from '../api/auth.api';
import axios from 'axios';
import Modal from '../components/modal/signupModal';

const Auth = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const stateParam = urlParams.get('state');
  const code = urlParams.get('code');
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [action, setAction] = useState<string | null>(null);

  useEffect(() => {
    const handleOAuth = async () => {
      if (stateParam && code) {
        const { type, action } = JSON.parse(stateParam);
        setAction(action);
        const authData: ISignup = {
          service_provider: type,
          authorization_code: code,
        };

        try {
          let response;
          if (action === 'signup') {
            response = await axios.post('https://api.melodiary.site/api/users', authData, {
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
            const { accessToken, userId } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('userId', userId);
            //navigate('/nickname'); // 리다이렉트
          }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            setModalMessage("이미 가입된 정보가 있습니다. \n로그인 화면으로 이동할까요?");
          } else {
            console.error('OAuth 실패:', error);
            //navigate('/home'); 
          }
        }
      } else {
        console.error('Missing required parameters: code or state');
        //navigate('/login'); 
      }
    };

    handleOAuth();
  }, [navigate, stateParam, code]);
  
    
  const closeModal = () => {
    setModalMessage(null);
    navigate('/join');
  };

  const confirmModal = () => {
    setModalMessage(null);
    navigate('/login');
  };
  return (
    <JoinWrapper>
      <ContentWrapper>
        <ButtonContainer>
        <JoinTitle>{action === 'login' ? 'LOGIN' : 'JOIN'}</JoinTitle>
            <Button className="google">
              <IconWrapper><FcGoogle /></IconWrapper>
              Google로 시작하기
            </Button>
            <Button className="kakao">
              <IconWrapper><RiKakaoTalkFill /></IconWrapper>
              Kakao로 시작하기
            </Button>
            <Button className="naver">
              <IconWrapper><SiNaver/></IconWrapper>
              Naver로 시작하기
            </Button>
          <LoginLink >이미 계정이 있으신가요? <Link to='/login' className='loginBtn'>로그인</Link></LoginLink>
        </ButtonContainer>
      </ContentWrapper>
      {modalMessage && (
        <Modal 
          message={modalMessage}
          onConfirm={confirmModal}
          onCancel={closeModal}
        />
      )}
    </JoinWrapper>
  )
};

const JoinWrapper = styled.div`
  height: 100vh;
  background-image: url(${ background});
  background-size: 100% auto;
  background-repeat: no-repeat; 
  background-position: center;
  background-attachment: fixed;   
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  justify-content: center;
  height:92vh;
  padding-left: 5%;
`;
const JoinTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  padding-left:15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-weight: 600;
  transition: background-color 0.3s;

  &.google {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.grayDF};;
  }

  &.google:hover {
    background-color: #f1f1f1;
  }

  &.kakao {
    background-color: #ffe812;
    color: #3c1e1e;
  }

  &.kakao:hover {
    background-color: #ffd700;
  }

  &.naver {
    background-color: #03c75a;
    color: #fff;
  }

  &.naver:hover {
    background-color: #02b04a;
  }
`;

const IconWrapper = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginLink = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  .loginBtn{
    color: #555;
    text-decoration: underline;
  }
`;


export default Auth ;