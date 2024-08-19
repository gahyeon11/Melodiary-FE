import { IDiary } from "../models/diary.model";
import { httpClient } from "./http";

export const fetchExploreDiaries = async (): Promise<IDiary[]> => {
    const response = await httpClient.get<IDiary[]>('/api/diaries/explore');
      console.log(response.data);
      return response.data;
    };
    