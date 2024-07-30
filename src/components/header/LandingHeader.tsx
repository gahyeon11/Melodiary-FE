import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';
import { FiGithub } from "react-icons/fi";


const LandingHeader = () => {
  return(
    <HeaderContainer>
          <Logo><img src={logo} alt="logo"/></Logo>
          <RightSection>
              <LoginButton > Login</LoginButton>
              <a href="https://github.com/MeloDiary" target="_blank" rel="noopener noreferrer">
                  <FiGithub className='github' />
              </a>
          </RightSection>
      </HeaderContainer>
  );
};

export default LandingHeader;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: transparent;
  z-index: 1000;
`;

const Logo = styled.div`
  cursor: pointer;
  img{
    width:8%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* 로그인 버튼과 아이콘 사이에 간격 추가 */
  .github{
    width:24px;
    height:24px;
    color: ${({theme}) => theme.color.gray777}
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
  color: ${({theme}) => theme.color.gray777}
`;