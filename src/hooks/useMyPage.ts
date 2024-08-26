import { useEffect, useState } from "react";
import { fetchAllDiaries, fetchUserProfile, fetchCheckNickname, fetchChangeNickname, fetchDeleteAccount } from "../api/mypage.api";
import { IDiary } from "../models/diary.model";
import { IUserProfile } from "../models/mypage.model";
import { useNavigate } from "react-router-dom";

export const useMyPage = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile>();
  const [userDiaries, setUserDiaries] = useState<IDiary[]>([]);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<boolean | null>(null);
  const [hasCheckedNickname, setHasCheckedNickname] = useState<boolean>(false); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();
  const storedUserId = localStorage.getItem('user_id');
  const userId = storedUserId ? Number(storedUserId) : null;

  // 사용자 정보 조회
  const fetchUserProfileData = async (userId: number) => {
    try {
      const userProfileData = await fetchUserProfile(userId);
      setUserProfile(userProfileData);
    } catch (err: any) {
      console.log(err);
      setError(new Error("Failed to fetch user profile: " + err.message));

    }
  };

  // 사용자가 작성한 전체 일기 조회
  const fetchAllDiariesData = async () => {
    try {
      const userDiaryData = await fetchAllDiaries();
      setUserDiaries(userDiaryData);
    } catch (err: any) {
      console.log(err);
      setError(new Error("Failed to fetch user profile: " + err.message));
    }
  };

  // 닉네임 중복 확인
  const fetchCheckNicknameAvailability = async (nickname: string) => {
    try {
      await fetchCheckNickname(nickname);
      setIsNicknameAvailable(true);  // 200 응답의 경우 사용 가능
    } catch (err: any) {
      if (err.response?.status === 409) {
        setIsNicknameAvailable(false); // 409 응답의 경우 사용 불가
      } else {
        console.log(err);
        setIsNicknameAvailable(null); 
      }
    }
  };
  
  // 닉네임 변경
  const fetchChangeNicknameData = async (userId: number, nickname: string) => {
    if (userId === null) return;

    try {
      await fetchChangeNickname(userId, nickname);
    } catch (err) {
      console.log(err);
    }
  };

  // 회원 탈퇴
  const fetchDeleteUserAccount = async (userId: number) => {
    try {
      setIsDeleting(true);
      await fetchDeleteAccount(userId);
      setDeleteSuccess(true);
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_id');
      navigate("/");
    } catch (err) {
      setDeleteSuccess(false);
      console.log(err);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (userId !== null) {
      fetchAllDiariesData();
      fetchUserProfileData(userId);
    }
  }, [userId]);

  return { 
    userProfile, 
    userDiaries, 
    isNicknameAvailable, 
    hasCheckedNickname,
    setHasCheckedNickname,
    fetchCheckNicknameAvailability,
    fetchChangeNicknameData,
    fetchDeleteUserAccount,
    isDeleting,
    deleteSuccess,
    error 
  };
};
