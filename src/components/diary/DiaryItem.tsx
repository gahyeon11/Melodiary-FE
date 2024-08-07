import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DiaryHeader from "./DiaryHeader";
import DiaryContent from "./DiaryContent";
import DiaryFooter from "./DiaryFooter";
import { IDiary } from "../../models/diary.model";
import { motion } from "framer-motion";
import { dummyLikedUsers } from "../../dummyData";
import { useLocation, useNavigate } from "react-router-dom";

export interface LikedUser {
  id: number;
  nickname: string;
  profileImgURL: string | null;
}

export interface DiaryItemProps {
  diary: IDiary;
  user: {
    user_id: number;
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
  isExpanded = false,
  toggleExpand,
  likeCount,
  setLikeCount,
}) => {
  const [userHasLiked, setUserHasLiked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 좋아요 초기 상태 설정 추가 필요
    setUserHasLiked(false);
  }, []);

  const isMatesPage = location.pathname.includes("mates");

  const handleDiaryClick = () => {
    if (isSummary) {
      navigate(`/diary/${diary.id}`);
    }
  };

  return (
    <DiaryContainer
      backgroundColor={diary.body.background_color}
      isExpanded={isExpanded}
      isSummary={isSummary}
      isMatesPage={isMatesPage}
      initial={{ left: isSummary ? "18vw" : "50vw", width: "50vw" }}
      animate={{
        left:
          isSummary && isMatesPage
            ? "14vw"
            : isSummary
            ? "18vw"
            : isExpanded
            ? "73px"
            : "50vw",
        width:
          isSummary && isMatesPage
            ? "55vw"
            : isSummary
            ? "60vw"
            : isExpanded
            ? "calc(100vw - 74px)"
            : "50vw",
      }}
      transition={{ duration: 0.5 }}
      onClick={handleDiaryClick}
    >
      <Diary isSummary={isSummary}>
        <DiaryHeader
          diary={diary}
          user={user}
          likedUsers={dummyLikedUsers}
          isSummary={isSummary}
          toggleExpand={toggleExpand}
          isExpanded={isExpanded}
        />
        <DiaryContent
          diary={diary}
          isSummary={isSummary}
          user={user}
          likedUsers={likedUsers}
          isExpanded={isExpanded}
        />
        <DiaryFooter
          diary={diary}
          user={user}
          likedUsers={dummyLikedUsers}
          isSummary={isSummary}
          isExpanded={isExpanded}
          likeCount={likeCount}
          userHasLiked={userHasLiked}
          setLikeCount={setLikeCount}
          setUserHasLiked={setUserHasLiked}
        />
      </Diary>
    </DiaryContainer>
  );
};

export default DiaryItem;

export interface DiaryAllProps {
  backgroundColor: string;
  isExpanded: boolean;
  isSummary: boolean;
  isMatesPage: boolean;
}

export interface DiaryExpandSummaryProps {
  isExpanded: boolean;
  isSummary: boolean;
}

export interface DiarySummaryProps {
  isSummary: boolean;
}

export interface DiaryTagProps {
  tagColor: string;
  isSummary: boolean;
}

const DiaryContainer = styled(motion.div)<DiaryAllProps>`
  position: ${({ isSummary }) => (isSummary ? "relative" : "fixed")};
  top: ${({ isSummary }) => (isSummary ? "0" : "63px")};
  height: ${({ isSummary }) => (isSummary ? "auto" : "100vh")};
  overflow-y: ${({ isSummary }) => (isSummary ? "visible" : "auto")};
  background-color: ${({ theme, backgroundColor }) =>
    theme.diaryColor[backgroundColor]?.background ||
    theme.diaryColor.default.background};
  margin-bottom: ${({ isSummary }) => (isSummary ? "50px" : "0")};
  border-radius: ${({ isSummary }) => (isSummary ? "20px" : "0")};
  border: ${({ isSummary, theme }) =>
    isSummary ? `1px solid ${theme.color.grayDF}` : "none"};
  width: ${({ isExpanded }) => (isExpanded ? "calc(100vw - 74px)" : "50vw")};
`;

const Diary = styled.div<DiarySummaryProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: ${({ isSummary }) => (isSummary ? "pointer" : "default")};
`;
