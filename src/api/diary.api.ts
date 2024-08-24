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

export const fetchPutDiary = async (diaryId: number, data: IDiary["body"]): Promise<IDiary> => {
  try {
    const response = await httpClient.put<IDiary>(`/api/diaries/${diaryId}`, data);
    return response.data;
  } catch (err) {
    console.error("Failed to update diary", err);
    throw err;
  }
};

export const fetchDeleteDiary = async (diaryId: number) => {
  try {
    const response = await httpClient.delete(`/api/diaries/${diaryId}`);
    return response.data;
  } catch (err) {
    console.log("일기 삭제에 실패했습니다.", err);
    throw err;
  }
};


