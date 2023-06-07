import axios from "axios";
import { getCookie } from "cookies-next";
import { AC_TOKEN_KEY } from "~/constants";

export const createAxiosInstance = ({ needAuth } = { needAuth: false }) => {
  const baseURL = "/api";
  const AC_TOKEN = getCookie(AC_TOKEN_KEY);

  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...(needAuth && { Authorization: `Bearer ${AC_TOKEN}` })
    }
  });
};
