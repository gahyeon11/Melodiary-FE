import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DiaryItem from "../components/diary/DiaryItem";
import MusicBar from "../components/musicbar/MusicBar";
import Calendar from "../components/diary/Calender";
import PlayList from "../components/diary/PlayList";
import { dummyDiaries, dummyLikedUsers, dummyUsers } from "../dummyData";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { userId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // 유저 데이터를 받아오기
  const selectedUserId = userId || "1"; // 기본 userId 설정
  const selectedUser = dummyUsers.find(user => user.user_id.toString() === selectedUserId);

  // 다이어리를 해당 userId로 필터링하여 가져옴
  const selectedDiary = dummyDiaries.find(diary => diary.user_id === selectedUserId);

  const [isExpanded, setIsExpanded] = useState(state?.isExpanded ?? false);
  const [likeCount, setLikeCount] = useState(selectedDiary?.like_count || 0);
  const [userHasLiked, setUserHasLiked] = useState(false);

  useEffect(() => {
    if (state?.isExpanded !== undefined) {
      setIsExpanded(state.isExpanded);
    }
  }, [state?.isExpanded]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
        {selectedDiary && selectedUser ? (
          <>
            <DiaryItem
              diary={selectedDiary}
              user={selectedUser}
              likedUsers={dummyLikedUsers}
              isExpanded={isExpanded}
              toggleExpand={handleExpand}
              likeCount={likeCount}
              userHasLiked={userHasLiked}
              setLikeCount={setLikeCount}
              setUserHasLiked={setUserHasLiked}
            />
            <MusicBar
              youtubeUrl={selectedDiary.body.music.url}
              title={selectedDiary.body.music.title}
              artist={selectedDiary.body.music.artist}
              isExpanded={isExpanded}
            />
          </>
        ) : (
          <Message>날짜를 선택하여 일기를 확인해보세요!</Message>
        )}
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
  flex-direction: column;
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
