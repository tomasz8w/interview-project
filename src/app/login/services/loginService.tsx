import request from "services/apiService";

export type LoginPayload = {
  username: string;
  password: string;
};

export const login = async (payload: LoginPayload) => {
  const queryString = `/users/login`;

  return await request(queryString, "POST", payload);
};
