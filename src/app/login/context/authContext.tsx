import { useState, createContext, useContext, FC, useEffect } from "react";
import { useJwt } from "react-jwt";

import { login, LoginPayload, LoginResponse, User } from "api/loginApi";

type Auth = LoginResponse;

type AuthContext = {
  auth: Auth | undefined;
  setAuth: React.Dispatch<React.SetStateAction<LoginResponse | undefined>>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

const getSavedAuth = <TState,>(key: string, initialValue: TState) => {
  const localStorageContent = localStorage.getItem(key);

  if (localStorageContent)
    return {
      ...initialValue,
      ...JSON.parse(localStorageContent),
    };
  return initialValue;
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth | undefined>();

  const value = { auth, setAuth };

  useEffect(() => {
    setAuth(getSavedAuth<Auth | undefined>("auth", undefined));
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a AuthContext");
  }
  const { auth, setAuth } = context;

  const loginUser = async (data: LoginPayload) => {
    const res = await login(data);
    setAuth(res);
    localStorage.setItem("auth", JSON.stringify(res));
  };

  const isAuthenticated = () => {
    if (auth && auth.access_token) {
      const { decodedToken, isExpired } = useJwt(auth.access_token);
      if (!isExpired) return true;
    }
    return false;
  };

  const getUser = () => {
    return auth?.user;
  };

  return { loginUser, getUser, isAuthenticated };
};
