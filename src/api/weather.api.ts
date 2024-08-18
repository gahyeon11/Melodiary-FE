import { httpClient } from "./http";
import { IWeather } from "../models/diary.model";

export const fetchWeather = async () => {
  const response = await httpClient.get<IWeather[]>("/api/diaries/myposts");
  console.log(response.data);

  return response.data;
};