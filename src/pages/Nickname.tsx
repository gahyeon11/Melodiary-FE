import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHeadphone } from "react-icons/bi";
import { KAKAO_REST_API_KEY, CLIENT_SECRET } from '../config';

const NickName = () => {
  
  return (
    <PageWrapper>
      <ContentWrapper>
        <Logo>
          <BiHeadphone size={24} />
          <h3>MeloDiary&nbsp;</h3> 에 오신 것을 환영합니다!
        </Logo>
        <WelcomeMessage>
          여러분만의 닉네임을 입력하고 시작해보세요.
        </WelcomeMessage>
        <InputWrapper>
          <NicknameInput placeholder="닉네임을 입력하세요" />
          <InputInfo>2 ~ 14자로 입력해주세요.</InputInfo>
        </InputWrapper>
        <EnterButton>입장하기</EnterButton>
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({theme}) => theme.fontFamily.kor};
  margin-bottom: 5px;
  svg {
    color: ${({ theme }) => theme.color.gray999};
  }
  h3 {
    margin-left: 10px;
    background: linear-gradient(90deg, #9ad9ea, #202879);
    background-clip: text;
    color: transparent;
    font-family: ${({theme}) => theme.fontFamily.eng};
    font-size: ${({ theme }) => theme.title.title3};
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const WelcomeMessage = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family: ${({theme}) => theme.fontFamily.kor};
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 5px;
  font-family: ${({theme}) => theme.fontFamily.kor};
  text-align: center;
`;

const InputInfo = styled.p`
  font-size: 0.8rem;
  color: #888;
  text-align: center;
  font-family: ${({theme}) => theme.fontFamily.kor};
`;

const EnterButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  cursor: pointer;
  font-family: ${({theme}) => theme.fontFamily.kor};
  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

export default NickName;
