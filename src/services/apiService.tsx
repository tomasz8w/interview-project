import axios, { Method } from "axios";

const api = axios.create({
  baseURL: "https://join-tsh-api-staging.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const request = async <TResponse, TPayload>(
  queryString: string,
  method: Method,
  payload?: TPayload
) => {
  try {
    const res = await api.request<TResponse>({
      url: queryString,
      method,
      data: payload,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      let errorMessage;
      if (error.response && error.response.statusText !== "") {
        errorMessage = error.response.statusText;
      } else errorMessage = error.message;
      throw new Error(errorMessage);
    } else throw new Error("Unexpected error");
  }
};

export default request;
