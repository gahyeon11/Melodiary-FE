import { httpClient } from "./http";
import { IDiary } from "../models/mypage.model";

export const fetchMyDiaries = async () => {
  const response = await httpClient.get<IDiary[]>("/api/diaries/myposts");
  console.log(response.data);

  return response.data;
};