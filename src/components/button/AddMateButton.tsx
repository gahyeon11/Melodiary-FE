import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as AddMateIcon } from '../../assets/icons/addMate.svg';
import { ReactComponent as MateIcon } from '../../assets/icons/Mate.svg';
import { ReactComponent as RequestMateIcon } from '../../assets/icons/requestMate.svg';
import { useParams } from 'react-router-dom';
import { requestMate, requestMateList, mateList } from '../../api/requestMate.api';
import axios from 'axios';

interface AddMateButtonProps {
  state: 'NM' | 'RM' | 'M'; // 버튼 상태 ('NM', 'RM', 'M')
}

const AddMateButton = ({ state }: AddMateButtonProps) => {
  const { userId } = useParams();
  const homeId = userId;
  const user_id = localStorage.getItem('user_id');
  const [buttonState, setButtonState] = useState<'NM' | 'RM' | 'M'>(state);

  const onClickRequestMate = async () => {
    try {
      if (user_id && homeId) {
        const response = await requestMate(user_id, homeId);
        console.log('친구 신청 성공:', response);
        setButtonState('RM');
      }
    } catch (error) {
      console.error('친구 신청 실패:', error);
    }
  };

  useEffect(() => {
    const fetchRequsetMateList = async () => {
      try {
        if (user_id) {
          const response = await requestMateList(user_id);
          console.log(response.data);
          if (response.data && Array.isArray(response.data)) {
            console.log(response.data);
            response.data.forEach((entry: { user_id: number }) => {
              console.log(entry.user_id);
              if (entry.user_id === Number(homeId)) {
                setButtonState('RM');
              }
            });
          }
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
  
    fetchRequsetMateList();
  }, [user_id, homeId]);

  useEffect(() => {
    const fetchMateList = async () => {
      try {
        if (user_id) {
          const response = await mateList(user_id);
          console.log(response.data);
          if (response.data && Array.isArray(response.data)) {
            response.data.forEach((entry: { user_id: number }) => {
              console.log(entry.user_id);
              if (entry.user_id === Number(homeId)) {
                setButtonState('M');
              }
            });
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          //setButtonState('NM');
          console.log("친구 목록에 없음");
      }
      }
    };
  
    fetchMateList();
  }, [user_id]);



  const renderButtonContent = () => {
    switch(buttonState) {
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
    <BaseButton buttonState={buttonState} onClick={buttonState === 'NM' ? onClickRequestMate : undefined}>
      {renderButtonContent()}
    </BaseButton>
  );
};

export default AddMateButton;

const BaseButton = styled.button<{ buttonState: 'NM' | 'RM' | 'M' }>`
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; /* 아이콘과 텍스트 사이의 간격 조정 */

  background-color: ${({ buttonState , theme }) => 
    buttonState === 'NM' ? theme.color.primary : theme.color.white};
  color: ${({ buttonState, theme }) => 
    buttonState === 'NM' ? theme.color.white : theme.color.primary};
  border: ${({ buttonState, theme }) => 
    buttonState !== 'NM' ? `1px solid ${theme.color.primary}` : 'none'};

  ${({ buttonState, theme }) => 
    buttonState === 'NM' && `
    cursor: pointer;
    &:hover {
      background-color: ${theme.color.primaryHover};
    }
  `}
`;
