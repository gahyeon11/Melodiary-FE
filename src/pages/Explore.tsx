import React, { useState } from "react";
import styled from "styled-components";
import DiaryItem from "../components/diary/DiaryItem";
import { dummyDiaries, dummyUsers, dummyLikedUsers } from "../dummyData";
import { useNavigate } from "react-router-dom";

function Explore() {

  const [likes, setLikes] = useState(
    dummyDiaries.map((diary) => ({
      id: diary.id,
      likeCount: diary.like_count,
    }))
  );

  const handleLikeChange = (diaryId: number, newLikeCount: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like) =>
        like.id === diaryId ? { ...like, likeCount: newLikeCount } : like
      )
    );
  };

  return (
    <ExploreWrapper>
      {dummyDiaries.map((diary) => {
        const diaryLikes = likes.find((like) => like.id === diary.id);
        const user = dummyUsers.find((user) => user.user_id === parseInt(diary.user_id, 10)); // user_id를 number로 변환하여 비교
        if (!user) {
          return null; // user가 없는 경우 DiaryItem을 렌더링하지 않음
        }
        return (
          <DiaryItemWrapper
            key={diary.id}
          
          >
            <DiaryItem
              diary={diary}
              user={{
                user_id: user.user_id,
                profileImgURL: user.profileImgURL,
                nickname: user.nickname,
              }}
              likedUsers={dummyLikedUsers}
              isSummary={true}
              likeCount={diaryLikes?.likeCount || 0}
              setLikeCount={(value: React.SetStateAction<number>) =>
                handleLikeChange(
                  diary.id,
                  typeof value === "number"
                    ? value
                    : value(diaryLikes?.likeCount || 0)
                )
              }
            />
          </DiaryItemWrapper>
        );
      })}
    </ExploreWrapper>
  );
}

const ExploreWrapper = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  /* border-left: 1px solid ${({ theme }) => theme.color.grayDF}; */
`;

const DiaryItemWrapper = styled.div`
`;

export default Explore;
