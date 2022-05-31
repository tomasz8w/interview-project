import axios from "axios";

const baseUrl = "https://join-tsh-api-staging.herokuapp.com";

export type LoginPayload = {
  username: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
  avatar: string;
};

export type LoginResponse = {
  user: User;
  expiresIn: string;
  access_token: string;
};

export const login = async ({ username, password }: LoginPayload) => {
  const queryString = `${baseUrl}/users/login`;

  try {
    const res = await axios.post<LoginResponse>(queryString, {
      username,
      password,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
