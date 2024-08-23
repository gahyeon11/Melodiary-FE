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
        let data = await fetchComments(diaryId); 
        // 오래된 순서로 정렬
        data = data.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        setComments(data);
      } catch (error) {
        setError("Failed to load comments.");
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [diaryId]);

  const addComment = async (
    content: string,
    mentioned_user_id?: number | null
  ) => {
    try {
      const newComment = await postComment(diaryId, content, mentioned_user_id);
      setComments((prevComments) => {
        const updatedComments = [...prevComments, newComment];
        return updatedComments.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      });
    } catch (error) {
      setError("Failed to add comment.");
    }
  };

  const editComment = async (comment_id: number, content: string) => {
    try {
      const updatedComment = await updateComment(diaryId, comment_id, content);
      setComments((prevComments) =>
        prevComments
          .map((comment) =>
            comment.comment_id === comment_id ? updatedComment : comment
          )
          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      );
    } catch (error) {
      setError("Failed to edit comment.");
    }
  };

  const removeComment = async (comment_id: number) => {
    try {
      await deleteComment(diaryId, comment_id);
      setComments((prevComments) =>
        prevComments
          .filter((comment) => comment.comment_id !== comment_id)
          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
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
