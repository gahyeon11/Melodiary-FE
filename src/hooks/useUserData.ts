import { useState, useEffect } from 'react';
import { fetchUserInfo } from '../api/user.api';
import { IUser } from '../models/user.model';

export const useUserData = (userId: number) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserInfo(userId);
        setUser(userData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [userId]);

  return { user, loading, error };
};
