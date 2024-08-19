import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DiaryItem from "../components/diary/DiaryItem";
import MusicBar from "../components/musicbar/MusicBar";
import Calendar from "../components/diary/Calender";
import PlayList from "../components/diary/PlayList";
import { dummyDiaries, dummyLikedUsers, dummyUsers } from "../dummyData";
import { getProfile } from "../api/auth.api";
import AddMateButton from "../components/button/AddMateButton";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { userId } = useParams();
  const { state } = useLocation();
  const user_id = localStorage.getItem('user_id');
  const [nickname, setNickname] = useState<string | null>(null);
  const [isOwnProfile, setIsOwnProfile] = useState(true);
  const [calendarData, setCalendarData] = useState<any>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (userId && user_id) {
      setIsOwnProfile(userId === user_id); // userId와 user_id가 같은지 비교
    }
  }, [userId, user_id]);

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

  const onFetchData = (data: any) => {
    setCalendarData(data); // Calender에서 받은 데이터를 Home의 상태로 설정
    setNickname(data.user_profile.nickname);
  };

  const onEmojiClick = (diary_id: number) => {
    //이모지 클릭시 이 함수에서 다이어리 아이디를 받아옴
    console.log('diary_id:', diary_id);
  };

  return (
    <HomeWrapper>
      <LeftSection>
        <CalendarSection>
          <CalendarHeader>
            📅 {nickname} 님의 달력
            {!isOwnProfile && (
              <AddMateButton/>
            )}
          </CalendarHeader>
          <Calendar onFetchData={onFetchData} onEmojiClick={onEmojiClick}  />
        </CalendarSection>
        <PlaylistSection>
          <PlaylistHeader>🎵 {nickname} 님의 플레이리스트</PlaylistHeader>
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
  width: calc(100vw - 145px);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FriendRequestButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.kor};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 5px; /* 아이콘과 텍스트 사이의 간격 조정 */
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
