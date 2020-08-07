import { postData, getData } from "./api";

export const login = async (payload) => {
    const response = await postData("login/do", "POST", payload);
    return response;
  };