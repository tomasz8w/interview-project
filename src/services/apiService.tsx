import axios, { Method } from "axios";

const api = axios.create({
  baseURL: "https://join-tsh-api-staging.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const request = async <T,>(
  queryString: string,
  method: Method,
  payload?: T
) => {
  try {
    const req = await api.request({
      url: queryString,
      method,
      params: payload,
    });
    return req.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.message);
    } else return Promise.reject("Unknown error");
  }
};

export default request;
