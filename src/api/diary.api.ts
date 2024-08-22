import { httpClient } from "./http";
import { IDiary } from "../models/diary.model";

export const fetchWriteDiary = async (data: IDiary["body"]) => {
  try {
    const response = await httpClient.post<IDiary["body"]>("/api/diaries", data);
    return response.data;
  } catch (err) {
    console.log("일기 저장에 실패했습니다.", err);
  }
};

export const fetchDiaryById = async (diaryId: number): Promise<IDiary> => {
  const response = await httpClient.get<IDiary>(`/api/diaries/${diaryId}`);
  return response.data;
};