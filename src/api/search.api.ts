import { UserSearchResult } from "../hooks/useSearchResult";
import { httpClient } from "./http";

export const fetchSearch = async (
  nickname?: string,
  email?: string
): Promise<UserSearchResult> => {
  const params = {} as { nickname?: string; email?: string };
  if (nickname) params.nickname = nickname;
  if (email) params.email = email;

  const response = await httpClient.get<UserSearchResult>("/api/users", {
    params,
  });

  return response.data;
};
