import { IDiary, IExplore } from "../models/diary.model";
import { httpClient } from "./http";

export const fetchExploreDiaries = async (): Promise<IExplore[]> => {
    const response = await httpClient.get<IExplore[]>('/api/diaries/explore');
      console.log(response.data);
      return response.data;
    };
    