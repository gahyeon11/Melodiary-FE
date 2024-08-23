export interface IComment {
  comment_id: number;
  writer_user_profile: {
    user_id: number;
    nickname: string;
    profile_img_url: string|null;
  };
  diary_id: number;
  mentioned_user_profile: {
    user_id: number|null;
    nickname: string;
    profile_img_url: string|null;
  };
  content: string;
  created_at: string;
}
