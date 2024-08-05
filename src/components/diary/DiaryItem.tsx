import React, { useState } from "react";
import styled from "styled-components";
import CommentSection from "../comment/Comment";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCommentDots,
  FaUserCircle,
  FaUserFriends,
  FaGlobe,
  FaLock,
  FaRegHeart,
} from "react-icons/fa";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IDiary } from "../../models/diary.model";
import { dummyDiaryData } from "../../dummyData";

interface LikedUser {
  id: number;
  nickname: string;
  profileImgURL: string | null;
}

interface DiaryItemProps {
  diary: IDiary;
  user: {
    userID: number;
    profileImgURL: string | null;
    nickname: string;
  };
  likedUsers: LikedUser[];
  isSummary?: boolean;
  isExpanded?: boolean;
  toggleExpand?: () => void;
  likeCount?: number;
  userHasLiked?: boolean;
  setLikeCount?: React.Dispatch<React.SetStateAction<number>>;
  setUserHasLiked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryItem: React.FC<DiaryItemProps> = ({
  diary,
  user,
  likedUsers,
  isSummary = false,
  isExpanded,
  toggleExpand,
  likeCount,
  userHasLiked,
  setLikeCount,
  setUserHasLiked,
}) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLikeClick = () => {
    if (userHasLiked && setLikeCount && setUserHasLiked && likeCount !== undefined) {
      // 좋아요 취소 처리
      setLikeCount(likeCount - 1);
      setUserHasLiked(false);
    } else if (setLikeCount && setUserHasLiked && likeCount !== undefined) {
      // 좋아요 등록 처리
      setLikeCount(likeCount + 1);
      setUserHasLiked(true);
    }
  };

  const renderPrivacyIcon = () => {
    switch (diary.body.privacy) {
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

  const stripImagesFromContent = (htmlContent: string) => {
    return htmlContent.replace(/<img[^>]*>/g, "");
  };

  return (
    <DiaryContainer
      backgroundColor={diary.body.background_color}
      isExpanded={!isSummary}
      isSummary={isSummary}
      initial={{ left: isSummary ? "18vw" : "50vw", width: "50vw" }}
      animate={{
        left: isSummary ? "15vw" : isExpanded ? "74px" : "50vw",
        width: isSummary ? "60vw" : isExpanded ? "calc(100vw - 74px)" : "50vw",
      }}
      transition={{ duration: 0.5 }}
    >
      {!isSummary && (
        <ToggleButton onClick={toggleExpand}>
          {isExpanded ? <BiChevronsRight /> : <BiChevronsLeft />}
        </ToggleButton>
      )}
      <DiaryContent isSummary={isSummary}>
        <DiaryHeader isSummary={isSummary}>
          <Title>
            {isSummary ? (
              <DiaryProfile isSummary={isSummary}>
                <Link to="/mypage">
                  {user.profileImgURL ? (
                    <ProfileImage
                      isSummary={isSummary}
                      src={user.profileImgURL}
                      alt={user.nickname}
                    />
                  ) : (
                    <DefaultProfileIcon isSummary={isSummary} />
                  )}
                </Link>
                <ProfileText>
                  <p>{user.nickname}</p>
                  <DiaryDate isSummary={isSummary}>
                    {diary.created_at}
                  </DiaryDate>
                </ProfileText>
              </DiaryProfile>
            ) : (
              <>
                <PrivacyContainer>
                  {renderPrivacyIcon()}{" "}
                  <PrivacyText>
                    {diary.body.privacy === "mate"
                      ? "친구공개"
                      : diary.body.privacy === "public"
                      ? "전체공개"
                      : "나만보기"}
                  </PrivacyText>
                </PrivacyContainer>
                <DiaryDate isSummary={isSummary}>{diary.created_at}</DiaryDate>
              </>
            )}

            {/* <DiaryDate isSummary={isSummary}>{diary.created_at}</DiaryDate> */}
            {!isSummary && (
              <Right>
                <DiaryTitle isSummary={isSummary}>
                  {diary.body.title}
                </DiaryTitle>
              </Right>
            )}
          </Title>
          {!isSummary && (
            <Right>
              <DiaryButton>
                <Link to="/writeDiary">
                  <button type="button">수정하기</button>
                </Link>
                <Link to="/writeDiary">
                  <button type="button">삭제하기</button>
                </Link>
              </DiaryButton>
              <DiaryProfile isSummary={isSummary}>
                <Link to="/mypage">
                  {user.profileImgURL ? (
                    <ProfileImage
                      isSummary={isSummary}
                      src={user.profileImgURL}
                      alt={user.nickname}
                    />
                  ) : (
                    <DefaultProfileIcon isSummary={isSummary} />
                  )}
                </Link>
                <p>{user.nickname}</p>
              </DiaryProfile>
            </Right>
          )}
        </DiaryHeader>
        {isSummary && diary.body.img_urls.length > 0 && (
          <SummaryImage src={diary.body.img_urls[0]} alt={diary.body.title} />
        )}
        <Title>
          {isSummary && (
            <Right>
              <DiaryTitle isSummary={isSummary}>{diary.body.title}</DiaryTitle>
            </Right>
          )}
        </Title>
        <DiaryTag tagColor={diary.body.background_color} isSummary={isSummary}>
          <DiaryTagItem
            tagColor={diary.body.background_color}
            isSummary={isSummary}
          >
            오늘의 이모지 | {diary.body.emoji}
          </DiaryTagItem>
          <DiaryTagItem
            tagColor={diary.body.background_color}
            isSummary={isSummary}
          >
            기분 | {diary.body.mood}
          </DiaryTagItem>
          <DiaryTagItem
            tagColor={diary.body.background_color}
            isSummary={isSummary}
          >
            위치 | {diary.body.weather.location}
          </DiaryTagItem>
          <DiaryTagItem
            tagColor={diary.body.background_color}
            isSummary={isSummary}
          >
            날씨 | {diary.body.weather.icon}{" "}
            {diary.body.weather.avg_temperature}°C
          </DiaryTagItem>
          <DiaryTagItem
            tagColor={diary.body.background_color}
            isSummary={isSummary}
          >
            오늘의 선곡 | {diary.body.music.title} - {diary.body.music.artist}
          </DiaryTagItem>
        </DiaryTag>

        <DiaryText isSummary={isSummary}>
          <div
            dangerouslySetInnerHTML={{
              __html: isSummary
                ? stripImagesFromContent(diary.body.content)
                    .split("\n")
                    .slice(0, 2)
                    .join("\n") + (" ...")
                : diary.body.content,
            }}
          />
        </DiaryText>
        <SummaryFooter isSummary={isSummary}>
          <DiarySpan>
            <span
              className="heart"
              onMouseEnter={() => setIsModalOpen(true)}
              onMouseLeave={() => setIsModalOpen(false)}
            >
              {userHasLiked ? <FaHeart /> : <FaRegHeart />} {likeCount}
            </span>
            <span className="comment">
              <FaCommentDots /> 4
            </span>
          </DiarySpan>
        </SummaryFooter>
        {!isSummary && isExpanded && (
          <DiaryComment>
            <DiarySpan>
              <span
                className="heart"
                onMouseEnter={() => setIsModalOpen(true)}
                onMouseLeave={() => setIsModalOpen(false)}
                onClick={handleLikeClick}
              >
               {userHasLiked ? <FaHeart /> : <FaRegHeart />} {likeCount}
              </span>
              <span className="comment">
                <FaCommentDots /> 4
              </span>
            </DiarySpan>
            {isModalOpen && (
              <LikesModal>
                <LikedSpan>
                  <span className="heart" onClick={handleLikeClick}>
                  <FaHeart color={userHasLiked ? "#ff5c5c" : "#ccc"} /> {likeCount}
                  </span>
                  <h4>Liked</h4>
                </LikedSpan>
                <ul>
                  {likedUsers.map((user) => (
                    <LikeItem key={user.id}>
                      {user.profileImgURL ? (
                        <ProfileImage
                          isSummary={isSummary}
                          src={user.profileImgURL}
                          alt={user.nickname}
                        />
                      ) : (
                        <DefaultProfileIcon isSummary={isSummary} />
                      )}
                      <span>{user.nickname}</span>
                    </LikeItem>
                  ))}
                </ul>
              </LikesModal>
            )}
            <CommentSection />
          </DiaryComment>
        )}
      </DiaryContent>
    </DiaryContainer>
  );
};

interface DiaryContainerProps {
  backgroundColor: string;
  isExpanded: boolean;
  isSummary: boolean;
}

interface DiaryTagItemProps {
  tagColor: string;
  isSummary: boolean;
}

interface DiaryTextProps {
  isSummary: boolean;
}

const DiaryContainer = styled(motion.div)<DiaryContainerProps>`
  position: ${({ isSummary }) => (isSummary ? "relative" : "fixed")};
  top: 63px;
  height: ${({ isSummary }) => (isSummary ? "auto" : "100vh")};
  overflow-y: auto;
  background-color: ${({ theme, backgroundColor }) =>
    theme.diaryColor[backgroundColor]?.background ||
    theme.diaryColor.default.background};
  margin-bottom: ${({ isSummary }) => (isSummary ? "50px" : "0")};
  border-radius: ${({ isSummary }) => (isSummary ? "20px" : "0")};
  border: 1px solid ${({theme }) => theme.color.grayDF};

`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray777};
`;

const DiaryContent = styled.div<DiaryTextProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: ${({ isSummary }) => (isSummary ? "50px 10%" : "80px 10%;")};
`;

const DiaryHeader = styled.div<DiaryTextProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: ${({ isSummary, theme }) =>
    isSummary ? "none" : `1px solid ${theme.color.grayDF}`};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.text.text3};
  color: ${({ theme }) => theme.color.gray999};
`;

const PrivacyText = styled.p`
  margin: 0;
`;

const DiaryTitle = styled.h2<DiaryTextProps>`
  margin: 0;
  font-size: ${({ theme }) => theme.title.title3};
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  justify-content: start;
  margin: ${({ isSummary }) => (isSummary ? "0 0 15px 0" : "10px 0")};
`;

const DiaryDate = styled.div<DiaryTextProps>`
  font-size: ${({ isSummary, theme }) =>
    isSummary ? ` ${theme.text.text2}`: `${theme.text.text1}`};
  /* font-weight: ${({ isSummary }) => (isSummary ? "600" : "0")}; */

  color:${({ isSummary, theme }) =>
    isSummary ? ` ${theme.color.gray999}`: `${theme.color.black}`};
  margin: ${({ isSummary }) => (isSummary ? "0" : "0 0 10px 0")};

`;

const Right = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
  justify-content: start;
`;

const DiaryButton = styled.div`
  button {
    padding: 5px 10px;
    border: none;
    border-right: 1px solid ${({ theme }) => theme.color.grayDF};
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.color.gray777};
  }
`;

const DiaryProfile = styled.div<DiaryTextProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ isSummary }) => (isSummary ? "10px" : "5px")};
  p {
    padding-bottom:  ${({ isSummary }) => (isSummary ? "0" : "2px")};
    font-weight: ${({ isSummary }) => (isSummary ? "600" : "0")};
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img<DiaryTextProps>`
  width: ${({ isSummary }) => (isSummary ? "40px" : "20px")};
  height: ${({ isSummary }) => (isSummary ? "40px" : "20px")};
  border-radius: 50%;
`;

const DefaultProfileIcon = styled(FaUserCircle)<DiaryTextProps>`
  width: ${({ isSummary }) => (isSummary ? "40px" : "20px")};
  height: ${({ isSummary }) => (isSummary ? "40px" : "20px")};
  margin-top: 5px;
  color: ${({ theme }) => theme.color.gray999};
`;

const DiaryTag = styled.div<DiaryTagItemProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: ${({ isSummary, theme }) =>
    isSummary ? "none" : `1px solid ${theme.color.grayDF}`};
`;

const DiaryTagItem = styled.div<DiaryTagItemProps>`
  padding: 5px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  background-color: ${({ theme, tagColor }) =>
    theme.diaryColor[tagColor]?.tag || theme.diaryColor.default.tag};
  font-size: ${({ theme }) => theme.text.text3};
`;

const DiaryText = styled.div<DiaryTextProps>`
  padding: 5% 0;
  margin-bottom: ${({ isSummary }) => (isSummary ? "0" : "50px")};
  width: 100%;
  max-width: 100%;
  font-size: ${({ theme }) => theme.text.text1};
  color: ${({ theme }) => theme.color.grayblack};
  white-space: pre-line;
`;

const DiarySpan = styled.div`
  display: flex;
  gap: 15px;

  .heart {
    color: #ff5c5c;
    display: flex;
    align-items: center;

    svg {
      /* margin-top: 3px; */
      margin: 0 4px 2px 0;
    }
  }

  .comment {
    color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;

    svg {
      margin: 0 4px 2px 0;
    }
  }
`;

const DiaryComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100%;
`;

const LikesModal = styled.div`
  position: absolute;
  z-index: 1000;
  text-align: left;
  margin: 24px 0;
  padding: 15px 25px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grayDF};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: ${({ theme }) => theme.text.text2};
    padding: 7px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
  }
`;

const LikedSpan = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};

  .heart {
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px; /* 텍스트와 아이콘 사이의 간격을 설정 */
    }
  }

  h4 {
    padding: 0 0 10px 0;
    margin: 3px 0 0 0;
    font-size: ${({ theme }) => theme.text.text2};
    font-weight: bold;
    text-align: start;
  }
`;

const LikeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const SummaryImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const SummaryFooter = styled.div<DiaryTextProps>`
  display: ${({ isSummary }) => (isSummary ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export default DiaryItem;



// import React from 'react';
// import styled from 'styled-components';
// import DiaryHeader from './DiaryHeader';
// import DiaryContent from './DiaryContent';
// import DiaryFooter from './DiaryFooter';
// import { IDiary } from '../../models/diary.model';
// import { motion } from 'framer-motion';
// import { dummyLikedUsers, dummyUser } from '../../dummyData';


// export interface LikedUser {
//   id: number;
//   nickname: string;
//   profileImgURL: string | null;
// }

// export interface DiaryItemProps {
//   diary: IDiary;
//   user: {
//     userID: number;
//     profileImgURL: string | null;
//     nickname: string;
//   };
//   likedUsers: LikedUser[];
//   isSummary?: boolean;
//   isExpanded?: boolean;
//   toggleExpand?: () => void;
//   likeCount?: number;
//   userHasLiked?: boolean;
//   setLikeCount?: React.Dispatch<React.SetStateAction<number>>;
//   setUserHasLiked?: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const DiaryItem: React.FC<DiaryItemProps> = ({
//   diary,
//   user,
//   likedUsers,
//   isSummary = false,
//   isExpanded,
//   toggleExpand,
//   likeCount,
//   userHasLiked,
//   setLikeCount,
//   setUserHasLiked,
// }) => {

//   return (
//     <DiaryContainer
//       backgroundColor={diary.body.background_color}
//       isExpanded={!isSummary}
//       isSummary={isSummary}
//       initial={{ left: isSummary ? "18vw" : "50vw", width: "50vw" }}
//       animate={{
//         left: isSummary ? "15vw" : isExpanded ? "74px" : "50vw",
//         width: isSummary ? "60vw" : isExpanded ? "calc(100vw - 74px)" : "50vw",
//       }}
//       transition={{ duration: 0.5 }}
//     >
//       <DiaryHeader
//         diary={diary}
//         user={dummyUser}
//         likedUsers={dummyLikedUsers} 
//         isSummary={isSummary}
//         toggleExpand={toggleExpand}
//         isExpanded={isExpanded}
//       />
//       <DiaryContent
//         diary={diary}
//         isSummary={isSummary}
//         user={dummyUser}
//         likedUsers={dummyLikedUsers} 
//       />
//       <DiaryFooter
//         diary={diary}
//         user={dummyUser}
//         likedUsers={likedUsers}
//         isSummary={isSummary}
//         isExpanded={isExpanded}
//         likeCount={likeCount}
//         userHasLiked={userHasLiked}
//         setLikeCount={setLikeCount}
//         setUserHasLiked={setUserHasLiked}
//       />
//     </DiaryContainer>
//   );
// };

// export default DiaryItem;
// interface DiaryContainerProps {
//   backgroundColor: string;
//   isExpanded: boolean;
//   isSummary: boolean;
// }
// const DiaryContainer = styled(motion.div)<DiaryContainerProps>`
//   position: ${({ isSummary }) => (isSummary ? "relative" : "fixed")};
//   top: 63px;
//   height: ${({ isSummary }) => (isSummary ? "auto" : "100vh")};
//   overflow-y: auto;
//   background-color: ${({ theme, backgroundColor }) =>
//     theme.diaryColor[backgroundColor]?.background ||
//     theme.diaryColor.default.background};
//   margin-bottom: ${({ isSummary }) => (isSummary ? "50px" : "0")};
//   border-radius: ${({ isSummary }) => (isSummary ? "20px" : "0")};
//   border: 1px solid ${({theme }) => theme.color.grayDF};
// `;
