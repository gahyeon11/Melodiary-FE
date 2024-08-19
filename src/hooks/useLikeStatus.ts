import { useState, useEffect } from "react";
import { getLikes, postLike, deleteLike } from "../api/like.api";

export const useLikeStatus = (diaryId: number, userId: number, initialLiked: boolean, initialLikeCount: number) => {
  const [userHasLiked, setUserHasLiked] = useState<boolean>(initialLiked);
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);

  const handleLikeClick = async () => {
    try {
      if (userHasLiked) {
        await deleteLike(diaryId, userId);
        setLikeCount(prevCount => prevCount - 1);
      } else {
        await postLike(diaryId, userId);
        setLikeCount(prevCount => prevCount + 1);
      }
      setUserHasLiked(!userHasLiked);
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return {
    handleLikeClick, likeCount, userHasLiked
  };
};
