import { useState, useEffect } from "react";
import { IComment } from "../models/comment.model";
import {
  fetchComments,
  postComment,
  updateComment,
  deleteComment,
} from "../api/comment.api";

export const useComments = (diaryId: number) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        const data = await fetchComments(diaryId); // 댓글 가져오기
        setComments(data);
      } catch (error) {
        setError("Failed to load comments.");
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [diaryId]);

  const addComment = async (content: string, mentioned_user_id?: number) => {
    try {
      const newComment = await postComment(
        diaryId,
        content,
        mentioned_user_id || null
      );
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      setError("Failed to add comment.");
    }
  };

  const editComment = async (id: number, content: string) => {
    try {
      const updatedComment = await updateComment(diaryId, id, content);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.writer_user_profile.user_id === id ? updatedComment : comment
        )
      );
    } catch (error) {
      setError("Failed to edit comment.");
    }
  };

  const removeComment = async (id: number) => {
    try {
      await deleteComment(diaryId, id);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.writer_user_profile.user_id !== id)
      );
    } catch (error) {
      setError("Failed to delete comment.");
    }
  };

  return {
    comments,
    setComments,
    loading,
    error,
    addComment,
    editComment,
    removeComment,
  };
};
