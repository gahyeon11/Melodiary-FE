import styled from 'styled-components';
import Calendar from '../components/diary/Calender';
import PlayList from '../components/diary/PlayList';

const Home = () => {
  return (
    <HomeWrapper>
      <LeftSection>
        <CalendarSection>
          <CalendarHeader>📅 따봉고양이 님의 달력</CalendarHeader>
          <Calendar />
        </CalendarSection>
        <PlaylistSection>
          <PlaylistHeader>🎵 따봉고양이 님의 플레이리스트</PlaylistHeader>
          <PlayList />
        </PlaylistSection>
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
  width: calc(100vw - 100px); 
  margin-left: 100px; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center; 
  box-sizing: border-box;
  min-width: 0;
  padding-top: 10px;
  border-right: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  width: 100%;
  max-width: 700px;
  padding: 20px;
`;

const CalendarHeader = styled.div`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.title.title4};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  text-align: left;
`;

const PlaylistSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  width: 100%;
  max-width: 700px;
  padding: 20px;
`;

const PlaylistHeader = styled.div`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.title.title4};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  text-align: left;
`;

const RightSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: 0;
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.gray777};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  text-align: center;
`;
