// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isSignupComplete: boolean;
  login: (access_token: string, user_id: number) => void;
  logout: () => void;
  completeSignup: () => void;
  setIsSignupComplete: (value: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [isSignupComplete, setIsSignupComplete] = useState<boolean>(false);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    const user_id = localStorage.getItem('user_id');

    if (access_token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (access_token: string, user_id: number) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user_id', user_id.toString());
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    setIsAuthenticated(false);
  };

  const completeSignup = () => {
    setIsSignupComplete(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isSignupComplete, login, completeSignup, logout, setIsSignupComplete}}>
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

export const tokenLoader = async () => {
  const access_token = localStorage.getItem('access_token');
  const user_id = localStorage.getItem('user_id');

  if (access_token) {
    return {
      isAuthenticated: true,
      userId: Number(user_id),
    };
  } else {
    return {
      isAuthenticated: false,
      userId: null,
    };
  }
};
