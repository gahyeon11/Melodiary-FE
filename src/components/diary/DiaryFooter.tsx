import React, { useState } from "react";
import styled from "styled-components";
import CommentSection from "../comment/Comment";
import {
  FaHeart,
  FaCommentDots,
  FaRegHeart,
  FaUserCircle,
} from "react-icons/fa";
import { DiaryItemProps } from "./DiaryItem";

const DiaryFooter: React.FC<DiaryItemProps> = ({
  diary,
  likedUsers,
  isSummary = false,
  isExpanded,
  likeCount,
  userHasLiked,
  setLikeCount,
  setUserHasLiked,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLikeClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    if (
      userHasLiked &&
      setLikeCount &&
      setUserHasLiked &&
      likeCount !== undefined
    ) {
      setLikeCount(likeCount - 1);
      setUserHasLiked(false);
    } else if (setLikeCount && setUserHasLiked && likeCount !== undefined) {
      setLikeCount(likeCount + 1);
      setUserHasLiked(true);
    }
  };

  return (
    <>
      <SummaryFooter isSummary={isSummary}>
        <DiarySpan>
          <span
            className="heart"
            onMouseEnter={() => setIsModalOpen(true)}
            onMouseLeave={() => setIsModalOpen(false)}
            onClick={(event) => {
              event.stopPropagation(); // 이벤트 버블링 막기
              handleLikeClick(event);
            }}
          >
            {userHasLiked ? <FaHeart size={22}/> : <FaRegHeart size={22}/>} {likeCount}
          </span>
          <span className="comment">
            <FaCommentDots size={22}/> 4
          </span>
        </DiarySpan>
      </SummaryFooter>

      {!isSummary && isExpanded && (
        <DiaryComment>
          <DiarySpan>
            <span
              className="heart"
              onClick={handleLikeClick}
              onMouseEnter={() => setIsModalOpen(true)}
              onMouseLeave={() => setIsModalOpen(false)}
            >
              {userHasLiked ? <FaHeart size={22}/> : <FaRegHeart size={22}/>} {likeCount}
            </span>
            <span className="comment">
              <FaCommentDots size={22}/> 4
            </span>
          </DiarySpan>
          {isModalOpen && (
            <LikesModal>
              <LikedSpan>
                <span className="heart" onClick={handleLikeClick}>
                  <FaHeart size={22} color={userHasLiked ? "#ff5c5c" : "#ccc"} />{" "}
                </span>
                <h4>Liked</h4>
              </LikedSpan>
              <ul>
                {likedUsers.map((user) => (
                  <LikeItem key={user.id}>
                    {user.profileImgURL ? (
                      <ProfileImage
                        src={user.profileImgURL}
                        alt={user.nickname}
                      />
                    ) : (
                      <ProfileIconContainer>
                        <DefaultProfileIcon />
                      </ProfileIconContainer>
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
    </>
  );
};

export default DiaryFooter;


interface DiaryTextProps {
  isSummary: boolean;
}

const ProfileIconContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultProfileIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.gray999};
`;

const SummaryFooter = styled.div<DiaryTextProps>`
  display: ${({ isSummary }) => (isSummary ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 5% 5% 5%;
`;

const DiarySpan = styled.div`
  display: flex;
  gap: 15px;

  .heart {
    color: #ff5c5c;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin: 0 4px 2px 0;
    }
    :hover{
      color: #ff1d1d;
    }
  }

  .comment {
    color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;

    svg {
      margin: 0 4px 2px 0;
    }
    :hover{
      color: #0055AC;
    }
  }
`;

const DiaryComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  padding: 0 10%;
  margin-bottom: 100px;
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
  align-items: center;
  gap: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};

  .heart {
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }

  h4 {
    /* padding: 0 0 10px 0; */
    margin: 2px 2px 0 0;
    font-size: ${({ theme }) => theme.text.text2};
    font-weight: bold;
    text-align: center;
  }
`;

const LikeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
