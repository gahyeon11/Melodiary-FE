import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddMateIcon } from '../../assets/icons/addMate.svg';
import { ReactComponent as MateIcon } from '../../assets/icons/Mate.svg';
import { ReactComponent as RequestMateIcon } from '../../assets/icons/requestMate.svg';

interface AddMateButtonProps {
  state: 'NM' | 'RM' | 'M'; // 버튼 상태 ('NM', 'RM', 'M')
  onClick?: () => void;   // 클릭 핸들러, 선택 사항
}

const AddMateButton = ({ state, onClick }: AddMateButtonProps) => {
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
    <BaseButton state={state} onClick={state === 'NM' ? onClick : undefined}>
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
