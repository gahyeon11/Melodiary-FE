import React from "react";
import styled from "styled-components";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosAlert } from "react-icons/io";
interface CustomAlertProps {
  message: string;
  subMessage: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  onClose,
  subMessage,
}) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <IconWrapper>
          <IoIosAlert size={45} />
        </IconWrapper>
        <ModalMessage>{message}</ModalMessage>
        <ModalSubMessage>{subMessage}</ModalSubMessage>
        <ModalButton onClick={onClose}>확인</ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CustomAlert;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  min-width: 300px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};;
  margin-bottom: 10px;
`;

const ModalMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalSubMessage = styled.p`
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryHover};
  }
`;
