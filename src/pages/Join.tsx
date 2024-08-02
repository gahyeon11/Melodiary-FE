import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../assets/images/background.png';
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '../config';

const Join = () => {

  return (
    <JoinWrapper>
      <ContentWrapper>
        <ButtonContainer>
          <JoinTitle>JOIN</JoinTitle>
          <a href={GOOGLE_AUTH_URL}>
            <Button className="google">
              <IconWrapper><FcGoogle /></IconWrapper>
              Google로 시작하기
            </Button>
          </a>
          <a href={KAKAO_AUTH_URL}>
            <Button className="kakao">
              <IconWrapper><RiKakaoTalkFill /></IconWrapper>
              Kakao로 시작하기
            </Button>
          </a>
          <a href={NAVER_AUTH_URL}>
            <Button className="naver">
              <IconWrapper><SiNaver/></IconWrapper>
              Naver로 시작하기
            </Button>
          </a>
          <LoginLink >이미 계정이 있으신가요? <Link to='/login' className='loginBtn'>로그인</Link></LoginLink>
        </ButtonContainer>
      </ContentWrapper>
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

export default Join;