// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
  const accessToken = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');

  if (accessToken && userId) {
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
