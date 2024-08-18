import { useState } from "react";
import { fetchWriteDiary } from "../api/diary.api";
import { IDiaryBody } from "../models/diary.model";

export const useDiaries = () => {
  const [diary, setDiary] = useState<IDiaryBody | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [wirteDiaryErr, setWriteDiaryErr] = useState<string | null>(null);

  // 작성한 일기 저장
  const saveDiary = async (data: IDiaryBody) => {
    setLoading(true);
    try {
      await fetchWriteDiary(data);
      setDiary(data);
      console.log(data);
    } catch (err) {
      setWriteDiaryErr("일기 저장에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };
  
  return {
    diary,
    saveDiary,
    loading,
    wirteDiaryErr,
  };
};
