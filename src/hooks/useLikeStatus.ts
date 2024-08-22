import { useState, useEffect } from "react";
import { getLikes, postLike, deleteLike } from "../api/like.api";
import { ILikedUser } from "../models/user.model";

export const useLikeStatus = (diaryId: number, userId: number, initialLiked: boolean, initialLikeCount: number) => {
  const [userHasLiked, setUserHasLiked] = useState<boolean>(initialLiked);
  const [likeCount, setLikeCount] = useState<number>(initialLikeCount);
  const [likedUsers, setLikedUsers] = useState<ILikedUser[]>([]); 

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const users = await getLikes(diaryId);
        setLikedUsers(users);
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();
  }, [diaryId]);

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

      const users = await getLikes(diaryId);
      setLikedUsers(users);

    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return {
    handleLikeClick, 
    likeCount, 
    userHasLiked,
    likedUsers 
  };
};
