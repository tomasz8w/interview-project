import request from "services/apiService";

export type LoginPayload = {
  username: string;
  password: string;
};

export const login = async <TResponse,>(payload: LoginPayload) => {
  const queryString = `/users/login`;
  try {
    const res = await request<TResponse, LoginPayload>(
      queryString,
      "POST",
      payload
    );
    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else throw new Error("Unexpected error");
  }
};
