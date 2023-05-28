import axios from "axios";

const createAxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const API = () => {
  const axiosInstance = createAxiosInstance(`/api`);

  return axiosInstance;
};
