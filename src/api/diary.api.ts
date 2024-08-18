import axios from "axios";
import { httpClient } from "./http";
import { IDiaryBody, IWeather } from "../models/diary.model";

export const fetchWriteDiary = async (data: IDiaryBody) => {
  try {
    const response = await httpClient.post<IDiaryBody>("/api/diaries", data);
    return response.data;
  } catch (err) {
    console.log("일기 저장에 실패했습니다.", err);
  }
};

export const fetchWeather = async () => {
  try {
    const response = await httpClient.get<IWeather>("/api/weather");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("날씨를 가져오는 데에 실패했습니다.");
  }
};