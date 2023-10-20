import { createAxiosInstance } from "@server-state/axios";

const api = createAxiosInstance();

export const classSearch = async (page: number, className?: string) => {
  const { data } = await api.get(`chatting/class/${page}`, {
    params: { className }
  });

  return data.result;
};

export const classEnter = async (classNumber: string) => {
  const classApi = createAxiosInstance({ needAuth: true });
  const response = await classApi.post(`chatting/class/enter/${classNumber}`);
  return response.data;
};

export const classExit = async (classNumber: string) => {
  const classApi = createAxiosInstance({ needAuth: true });
  const response = await classApi.delete(`chatting/class/exit/${classNumber}`);
  return response.data;
};

export const classList = async () => {
  const classApi = createAxiosInstance({ needAuth: true });
  const response = await classApi.get("chatting/class/rooms");
  return response.data.result || [];
};
