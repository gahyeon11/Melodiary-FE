import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bg from '../assets/images/bg.png';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const openJoinPage = () => {
    setIsJoinOpen(true);
    setTimeout(() => navigate('/join'), 500);
  };
  return(
    <LandingWrapper
    initial={{ y: 0 }}
    animate={isJoinOpen ? { y: '-100%' } : { y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <LandingContainer>
        <TextContainer>
          <h1>
            <Highlight><span>Record</span></Highlight> your day<br />
            with music.
          </h1>
          <p>
            매일 일기를 작성하며 그날의 기분을 음악과 이미지로 표현하고,<br />
            친구와 일기 및 음악 목록을 공유할 수 있습니다.
          </p>
          <button onClick={openJoinPage} >Write your own diary</button>
        </TextContainer>
      </LandingContainer>
    </LandingWrapper> 
  )
};

export default Landing;
const LandingWrapper = styled(motion.div)`
  height: 100vh;
  background-image: url(${bg});
  background-size: 100% 100%; 
  background-repeat: no-repeat; 
  background-attachment: fixed; 
`;
const LandingContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  justify-content: flex-start; 
  height:92vh;
  padding-left: 5%; 
  color: #000;
  h1 {
    font-size: 64px;
    font-weight:650;
    font-family: ${({theme}) => theme.fontFamily.en}
    margin-bottom: 20px;
  }

  p {
    font-size: ${({theme}) => theme.text.text1}
    font-family: ${({theme}) => theme.fontFamily.kor}
    text-align: left;
    margin-bottom: 1em;
    line-height: 170%;
    color: ${({theme}) => theme.color.gray777};
  }

  button {
    padding: 10px 20px;
    font-size: ${({theme}) => theme.text.text1}
    cursor: pointer;
    border: none;
    background-color: ${({theme}) => theme.color.coolblue};
    color: ${({theme}) => theme.color.white};
    border-radius: 5px;
    cursor: pointer;
  }
    
`
const TextContainer = styled.div`
  text-align: left; 
  

`;
const Highlight = styled.span`
  display: inline-block;
  position: relative;
  span {
    padding-left: 0.5rem;
    position: relative;
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 90%;
    height: 2.5rem; 
    background-color: ${({theme}) => theme.color.lightcoolblue};
    margin-top:1.2rem;
    z-index: 0;
  }
`;