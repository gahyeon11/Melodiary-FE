import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DiaryItem from "../components/diary/DiaryItem";
import MusicBar from "../components/musicbar/MusicBar";
import Calendar from "../components/diary/Calender";
import PlayList from "../components/diary/PlayList";
import { useDiary } from "../hooks/useDiary";
import { useUserData } from "../hooks/useUserData";
import { motion } from "framer-motion";

interface LocationState {
  nickname?: string;
  profileImgUrl?: string;
  isExpanded?: boolean;
}

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const location = useLocation();
  
  //검색시 기타 부분에서 state를 받아오기 위해 설정해놓았던 부분입니다! 
  // Calander api 연결 후 수정하겠습니다.
  const state = location.state as LocationState | undefined;

  const parsedUserId = userId ? Number(userId) : 1;

  const [diaryId, setDiaryId] = useState<number>(69);
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useUserData(parsedUserId);
  
  const { diary, loading: diaryLoading } = useDiary(diaryId);

  const [isExpanded, setIsExpanded] = useState(state?.isExpanded ?? false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (parsedUserId) {
      setDiaryId(69);
    }
  }, [parsedUserId]);

  useEffect(() => {
    if (state?.isExpanded !== undefined) {
      setIsExpanded(state.isExpanded);
    }
  }, [state?.isExpanded]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  //검색시 기타 부분에서 state를 받아오기 위해 설정해놓았던 부분입니다! 
  // Calander api 연결 후 수정하겠습니다.
  const displayNickname = state?.nickname || user?.nickname || parsedUserId;
  const profileImageUrl = state?.profileImgUrl || user?.profile_img_url;

  if (userLoading || diaryLoading) {
    return <Message>Loading...</Message>;
  }

  return (
    <HomeWrapper>
      <LeftSection>
        <CalendarSection>
          <CalendarHeader>📅 {displayNickname} 님의 달력</CalendarHeader>
          <Calendar />
        </CalendarSection>
        <PlaylistSection>
          <PlaylistHeader>
            🎵 {displayNickname} 님의 플레이리스트
          </PlaylistHeader>
          <PlayList />
        </PlaylistSection>
      </LeftSection>
      <Right>
      <RightSection
          isExpanded={isExpanded}
          background_color={diary?.body.background_color ?? undefined}
          initial={{ width: "50%" }} 
          animate={{ width: isExpanded ? "100%" : "auto" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
        >
          {diary && user ? (
            <>
              <DiaryItem
                diary={diary}
                user={user}
                likedUsers={[]}
                isExpanded={isExpanded}
                toggleExpand={handleExpand}
              />
              {diary.body.music && (
                <MusicBar
                  youtubeUrl={diary.body.music.music_url}
                  title={diary.body.music.title}
                  artist={diary.body.music.artist}
                  isExpanded={isExpanded}
                />
              )}
            </>
          ) : (
            <Message>날짜를 선택하여 일기를 확인해보세요!</Message>
          )}
        </RightSection>
      </Right>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-left: 100px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
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
  z-index: 0;
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

interface RightSectionProps {
  isExpanded: boolean;
  background_color?: string | null; 
}

const Right = styled.div`
`;

const RightSection = styled(motion.div)<RightSectionProps>`
  display: flex;
  flex-direction: column;
  position: ${({ isExpanded }) =>
    isExpanded ? "absolute" : "relative"}; 
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${({ theme, background_color }) =>
    theme.diaryColor[background_color ?? "default"]?.background ||
    theme.diaryColor.default.background};
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.gray777};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  text-align: center;
`;
