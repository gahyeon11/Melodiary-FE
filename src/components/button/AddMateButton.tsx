import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as AddMateIcon } from '../../assets/icons/addMate.svg';
import { ReactComponent as MateIcon } from '../../assets/icons/Mate.svg';
import { ReactComponent as RequestMateIcon } from '../../assets/icons/requestMate.svg';
import { useParams } from 'react-router-dom';
import { requestMate } from '../../api/requestMate.api';

interface AddMateButtonProps {
  state: 'NM' | 'RM' | 'M'; // 버튼 상태 ('NM', 'RM', 'M')
}

const AddMateButton = ({ state }: AddMateButtonProps) => {
  const { userId } = useParams();
  const homeId = userId;
  const user_id = localStorage.getItem('user_id');
  const onClickRequestMate = async () => {
    try {
      if (user_id && homeId) {
        const response = await requestMate(user_id, homeId);
        console.log('친구 신청 성공:', response);
        // 필요하다면 여기에 추가적인 상태 업데이트 로직을 추가할 수 있습니다.
      }
    } catch (error) {
      console.error('친구 신청 실패:', error);
    }
  };

  
  const renderButtonContent = () => {
    switch(state) {
      case 'NM':
        return (
          <>
            <AddMateIcon width="20" height="20" />
            친구 신청
          </>
        );
      case 'RM':
        return (
          <>
            <RequestMateIcon width="20" height="20" />
            친구 요청
          </>
        );
      case 'M':
        return (
          <>
            <MateIcon width="20" height="20" />
            친구
          </>
        );
      default:
        return null;
    }
  };

  if (!renderButtonContent()) return null;

  return (
    <BaseButton state={state} onClick={state === 'NM' ? onClickRequestMate : undefined}>
      {renderButtonContent()}
    </BaseButton>
  );
};

export default AddMateButton;

const BaseButton = styled.button<{ state: 'NM' | 'RM' | 'M' }>`
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; /* 아이콘과 텍스트 사이의 간격 조정 */

  background-color: ${({ state, theme }) => 
    state === 'NM' ? theme.color.primary : theme.color.white};
  color: ${({ state, theme }) => 
    state === 'NM' ? theme.color.white : theme.color.primary};
  border: ${({ state, theme }) => 
    state !== 'NM' ? `1px solid ${theme.color.primary}` : 'none'};

  ${({ state, theme }) => 
    state === 'NM' && `
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.primaryHover};
    }
  `}
`;
