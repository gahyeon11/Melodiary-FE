import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';
import { FiGithub } from "react-icons/fi";
import { BiHeadphone} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

const LandingHeader = () => {
  const navigate = useNavigate();
  const onClickLoginBtn = ()=> {
    navigate('/login')
  }
  return(
    <HeaderContainer>
      <Link to="/">
      <Logo>
        <BiHeadphone size={24} />
        <h1>MeloDiary</h1>
        </Logo>
      </Link>
          <RightSection>
              <LoginButton onClick={onClickLoginBtn}> Login</LoginButton>
              <a href="https://github.com/MeloDiary" target="_blank" rel="MeloDiary">
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
  display: flex;
  align-items: center;
  svg {
    margin-left: 20px;
    color: ${({ theme }) => theme.color.gray999};
  }
  h1 {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.title.title3};
    font-weight: bold;
    background: linear-gradient(90deg, #9ad9ea, #202879);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-right:20px;
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