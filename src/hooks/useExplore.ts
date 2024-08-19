import { useState, useEffect } from 'react';
import { IDiary } from '../models/diary.model';
import { fetchExploreDiaries } from '../api/explore.api';

export const useExploreData = () => {
  const [diaries, setDiaries] = useState<IDiary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const diaries = await fetchExploreDiaries();
        setDiaries(diaries);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { diaries, loading, error, setDiaries };
};
