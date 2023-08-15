import { createAxiosInstance } from "@server-state/axios";

const api = createAxiosInstance();

export const classSearch = async (page: number) => {
  const { data } = await api.get(`chatting/class/${page}`);

  return data.result;
};
