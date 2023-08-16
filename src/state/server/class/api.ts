import { createAxiosInstance } from "@server-state/axios";

const api = createAxiosInstance();

export const classSearch = async (page: number, className?: string) => {
  const { data } = await api.get(`chatting/class/${page}`, {
    params: { className }
  });

  return data.result;
};
