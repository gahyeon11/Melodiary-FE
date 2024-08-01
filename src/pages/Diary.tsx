import React from "react";
import styled from "styled-components";
import CommentSection from "../components/comment/Comment";
import {
  FaHeart,
  FaCommentDots,
  FaUserCircle,
  FaUserFriends,
  FaGlobe,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Diary() {
  const diary = {
    id: 58,
    date: "2024년 7월 31일",
    title: "Supernatural",
    content: `
  <h1 style="text-align: center; color: #8e44ad; text-shadow: 2px 2px #bdc3c7;">Supernatural - NewJeans</h1>

  <p style="font-size: 20px; color: #2980b9; margin-bottom: 20px;">
    <span style="color: #e74c3c; font-weight: bold;">I don't know what we've done</span><br />
    <span style="color: #2ecc71; background-color: #f1c40f; padding: 2px 4px; border-radius: 4px;">되돌아가긴 싫어, もう知っている</span><br />
    <span style="color: #9b59b6;">Don't know what we've been sold</span><br />
    <span style="text-decoration: underline; color: #34495e;">見つけられるよ, so it's sure</span> <span style="color: #e67e22;">(come on)</span>
  </p>
<p><img src="https://i.pinimg.com/236x/4d/44/82/4d44823306b8de27a24a200f8c2730a4.jpg" alt="Diary Image 1" /></p>

  <p style="font-size: 18px; margin-bottom: 20px;">
    <span style="color: #f39c12; font-weight: bold;">Golden moon, diamond stars</span><br />
    <span style="color: #3498db;">In a moment, you and I</span><br />
    <span style="font-style: italic; color: #c0392b;">Second chance, しょうがない</span><br />
    <span style="background-color: #2ecc71; color: white; padding: 2px 6px; border-radius: 4px;">もう少し待って, 너와 내게 향하게</span> <span style="color: #16a085;">(ayy)</span>
  </p>

  <p style="font-size: 20px; font-weight: bold; color: #e74c3c; margin-bottom: 20px;">
    <span style="text-decoration: underline; color: #8e44ad;">My feeling's getting deeper</span> <span style="color: #3498db;">(deeper)</span><br />
    <span style="color: #27ae60;">내 심박수를 믿어</span> <span style="color: #e67e22;">(믿어)</span><br />
    <span style="background-color: #f39c12; color: white; padding: 2px 4px; border-radius: 4px;">우리 인연은 깊어</span> <span style="font-style: italic; color: #9b59b6;">(you know)</span><br />
    <span style="color: #e74c3c; font-weight: bold;">I gotta see the meaning of it</span>
  </p>

  <p style="font-size: 20px; color: #2980b9; margin-bottom: 20px;">
    <span style="color: #e74c3c; font-weight: bold;">I don't know what we've done</span><br />
    <span style="color: #2ecc71; background-color: #f1c40f; padding: 2px 4px; border-radius: 4px;">되돌아가긴 싫어, もう知っている</span><br />
    <span style="color: #9b59b6;">Don't know what we've been sold</span><br />
    <span style="text-decoration: underline; color: #34495e;">見つけられるよ, so it's sure</span>
  </p>

  <p style="font-size: 22px; font-weight: bold; text-align: center; color: #8e44ad;">
    <span style="background-color: #f39c12; color: white; padding: 5px 10px; border-radius: 6px;">It's supernatural</span><br />
    <span style="font-style: italic; color: #3498db;">It's supernatural</span>
  </p>


<p><img src="https://i.pinimg.com/236x/81/d4/ab/81d4abdff4eb42ec8dc22ce7bd93d01b.jpg" alt="Diary Image 2" /></p>
    `,
    user_id: "1",
    mood: "😊",
    emoji: "💡",
    privacy: "private",
    like_count: 99,
    created_at: "2024-07-31",
    background_color: "pink",
  };

  const weather = {
    weather: "Sunny",
    location: "Seoul",
    avg_temperature: "29.5",
  };

  const music = {
    music_url: "https://www.youtube.com/watch?v=m6pTbEz4w3o",
    title: "Supernatural",
    artist: "NewJeans",
  };

  const user = {
    userID: 1,
    profileImgURL: null,
    profileBackgroundImgURL: null,
    nickname: "musseuk",
    emailAddress: "musseuk@example.com",
    mateCount: 15,
    diaryCount: 27,
  };

  const comment = {
    heart: diary.like_count,
    comment: 4,
  };

  const renderPrivacyIcon = () => {
    switch (diary.privacy) {
      case "mate":
        return <FaUserFriends />;
      case "public":
        return <FaGlobe />;
      case "private":
        return <FaLock />;
      default:
        return null;
    }
  };

  return (
    <DiaryContainer backgroundColor={diary.background_color}>
      <DiaryContent>
        <DiaryHeader>
          <Title>
            <PrivacyContainer>
              {renderPrivacyIcon()}{" "}
              <PrivacyText>
                {diary.privacy === "mate"
                  ? "친구공개"
                  : diary.privacy === "public"
                  ? "전체공개"
                  : "나만보기"}
              </PrivacyText>
            </PrivacyContainer>
            <DiaryDate>{diary.date}</DiaryDate>
            <DiaryTitle>{diary.title}</DiaryTitle>
          </Title>
          <Right>
            <DiaryButton backgroundColor={diary.background_color}>
              <Link to="/writeDiary">
                <button type="button">수정하기</button>
              </Link>
              <Link to="/writeDiary">
                <button type="button">삭제하기</button>
              </Link>
            </DiaryButton>
            <DiaryProfile>
              <Link to="/mypage">
                {user.profileImgURL ? (
                  <ProfileImage src={user.profileImgURL} alt={user.nickname} />
                ) : (
                  <DefaultProfileIcon />
                )}
              </Link>
              <p>{user.nickname}</p>
            </DiaryProfile>
          </Right>
        </DiaryHeader>
        <DiaryTag tagColor={diary.background_color}>
          <DiaryTagItem tagColor={diary.background_color}>
            오늘의 이모지 | {diary.emoji}
          </DiaryTagItem>
          <DiaryTagItem tagColor={diary.background_color}>
            기분 | {diary.mood}
          </DiaryTagItem>
          <DiaryTagItem tagColor={diary.background_color}>
            위치 | {weather.location}
          </DiaryTagItem>
          <DiaryTagItem tagColor={diary.background_color}>
            날씨 | {weather.weather} {weather.avg_temperature}°C
          </DiaryTagItem>
          <DiaryTagItem tagColor={diary.background_color}>
            오늘의 선곡 | {music.title} - {music.artist}
          </DiaryTagItem>
        </DiaryTag>
        <DiaryText>
          <div dangerouslySetInnerHTML={{ __html: diary.content }} />
        </DiaryText>
        <DiaryComment>
          <DiarySpan>
            <span className="heart">
              <FaHeart /> {comment.heart}
            </span>
            <span className="comment">
              <FaCommentDots /> {comment.comment}
            </span>
          </DiarySpan>
          <CommentSection />
        </DiaryComment>
      </DiaryContent>
    </DiaryContainer>
  );
}

interface DiaryContainerProps {
  backgroundColor: string;
}

interface DiaryTagItemProps {
  tagColor: string;
}

const DiaryContainer = styled.div<DiaryContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 96vw;
  padding: 70px 150px;
  background-color: ${({ theme, backgroundColor }) =>
    theme.diaryColor[backgroundColor]?.background ||
    theme.diaryColor.default.background};
`;

const DiaryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  overflow-x: hidden;
`;

const DiaryHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.text.text3};
  color: ${({ theme }) => theme.color.gray999};
  margin-bottom: 10px;
`;

const PrivacyText = styled.p`
  margin: 0;
`;

const DiaryTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.title.title3};
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

const DiaryDate = styled.div`
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 10px;
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DiaryButton = styled.div<DiaryContainerProps>`
  button {
    padding: 5px 10px;
    border: none;
    border-right: 1px solid ${({ theme }) => theme.color.grayDF};
    background-color: transparent;
    color: ${({ theme }) => theme.color.gray777};
    cursor: pointer;
  }
`;

const DiaryProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  p {
    padding-bottom: 5px;
  }
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const DefaultProfileIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.gray999};
`;

const DiaryTag = styled.div<DiaryTagItemProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const DiaryTagItem = styled.div<DiaryTagItemProps>`
  background-color: ${({ theme, tagColor }) =>
    theme.diaryColor[tagColor]?.tag || theme.diaryColor.default.tag};
  padding: 5px 15px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.text.text3};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const DiaryText = styled.div`
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.grayblack};
  padding: 0 30px;
  white-space: pre-line;
  width: 100%;
  max-width: 100%;
`;

const DiarySpan = styled.div`
  display: flex;
  gap: 15px;
  .heart {
    color: #ff5c5c;
  }
  .comment {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const DiaryComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100%;
`;

export default Diary;
