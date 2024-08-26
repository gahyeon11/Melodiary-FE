import React from "react";
import styled from "styled-components";
import { IoIosAlert } from "react-icons/io";

interface CustomAlertProps {
  message: string;
  subMessage: string;
  onConfirm: () => void;
  onCancel?: () => void; 
  showCancelButton?: boolean;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  subMessage,
  onConfirm,
  onCancel,
  showCancelButton = false,
}) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <IconWrapper>
          <IoIosAlert size={45} />
        </IconWrapper>
        <ModalMessage>{message}</ModalMessage>
        <ModalSubMessage>{subMessage}</ModalSubMessage>
        <ButtonContainer>
          <ModalButton onClick={onConfirm}>확인</ModalButton>
          {showCancelButton && onCancel && (
            <ModalButton onClick={onCancel} cancel>취소</ModalButton>
          )}
        </ButtonContainer>
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
  color: ${({ theme }) => theme.color.primary};
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ModalButton = styled.button<{ cancel?: boolean }>`
  width: 70px;
  height: 35px;
  background-color: ${({ theme, cancel }) => (cancel ? theme.color.primary : theme.color.primary)};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme, cancel }) => (cancel ? theme.color.primaryHover : theme.color.primaryHover)};
  }
`;
