import { useState, useEffect } from 'react';
import { IDiary } from '../models/diary.model';
import { fetchDiaryById } from '../api/diary.api';

export const useDiary = (diaryId: number) => {
  const [diary, setDiary] = useState<IDiary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null); 

  useEffect(() => {
    const getDiary = async () => {
      try {
        const diaryData = await fetchDiaryById(diaryId);
        setDiary(diaryData);
      } catch (error) {
        console.error('Failed to fetch diary', error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    getDiary();
  }, [diaryId]);

  return { diary, loading, error }; 
};
