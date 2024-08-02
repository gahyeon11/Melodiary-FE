import styled from 'styled-components';
import Calendar from '../components/diary/Calender';

const Home = () => {
  return (
    <HomeWrapper>
      <LeftSection>
        <CalendarSection>
          <CalendarHeader>📅 따봉고양이 님의 달력</CalendarHeader>
          <Calendar />
        </CalendarSection>
        <Playlist>
        </Playlist>
      </LeftSection>
      <RightSection>
        <Message>날짜를 선택하여 일기를 확인해보세요!</Message>
      </RightSection>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  box-sizing: border-box;
  min-width: 0;
  border-right: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const CalendarSection = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const CalendarHeader = styled.div`
  font-size: ${({ theme }) => theme.text.text1};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  margin-bottom: 10px;
  text-align: left;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: 0;
`;

const Playlist = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.gray777};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  text-align: center;
`;
