import { useState } from "react";
import { fetchSearch } from "../api/search.api";

export interface UserSearchResult {
  user_id: number;
  nickname: string;
  profile_img_url: string | null;
}

export const useSearchUser = () => {
  const [searchResult, setSearchResult] = useState<UserSearchResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (nickname?: string, email?: string): Promise<UserSearchResult | null> => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchSearch(nickname, email);
      setSearchResult(result);
      return result;
    } catch (err: any) {
      setError(err.message);
      return null; // 에러 발생 시 null 반환
    } finally {
      setLoading(false);
    }
  };

  return { searchResult, loading, error, handleSearch };
};
