import React, {
  useState,
  createContext,
  useContext,
  FC,
  useEffect,
} from "react";
import { isExpired } from "react-jwt";

import { login, LoginPayload } from "app/login/services/loginService";
import axios from "axios";

type User = {
  id: number;
  username: string;
  avatar: string;
};

type Auth = {
  user: User;
  expiresIn: string;
  access_token: string;
};

type AuthContext = {
  auth: Auth | undefined;
  setAuth: React.Dispatch<React.SetStateAction<Auth | undefined>>;
  error: string | undefined;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

const getSavedAuth = <TState,>(key: string) => {
  const localStorageContent = localStorage.getItem(key);

  if (localStorageContent)
    return {
      ...JSON.parse(localStorageContent),
    };
  return undefined;
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth | undefined>();
  const [error, setError] = useState<string | undefined>();

  const value = { auth, setAuth, error, setError };

  useEffect(() => {
    setAuth(getSavedAuth<Auth | undefined>("auth"));
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a AuthContext");
  }
  const { auth, setAuth, error, setError } = context;

  const loginUser = async (data: LoginPayload) => {
    try {
      const res = await login<Auth>(data);
      setAuth(res);
      localStorage.setItem("auth", JSON.stringify(res));
      setError(undefined);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else setError("Unexpected error");
    }
  };

  const isAuthenticated = () => {
    if (auth && auth.access_token) {
      const isTokenExpired = isExpired(auth.access_token);
      if (!isTokenExpired) return true;
    }
    setAuth(undefined);
    return false;
  };

  const getAuthError = () => {
    return error;
  };

  const getUser = () => {
    return auth?.user;
  };

  return { loginUser, getUser, isAuthenticated, getAuthError };
};
