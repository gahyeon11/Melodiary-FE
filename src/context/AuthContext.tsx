// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userId: number) => void;
  logout: () => void;
  userId: number | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');

    if (token && userId) {
      setIsAuthenticated(true);
      setUserId(Number(userId));
    }
  }, []);

  const login = (token: string, userId: number) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', userId.toString());
    setIsAuthenticated(true);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// 추가: loader 함수 정의 및 내보내기
export const tokenLoader = async () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user_id');

  if (token && userId) {
    return {
      isAuthenticated: true,
      userId: Number(userId),
    };
  } else {
    return {
      isAuthenticated: false,
      userId: null,
    };
  }
};
