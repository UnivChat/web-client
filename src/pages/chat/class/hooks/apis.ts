import { createAxiosInstance } from "@server-state/axios";
import type { ClassChatDTO } from "./types";

const api = createAxiosInstance();

export const getClassChatList = async (page: number) => {
  const { data } = await api.get<API.DefaultResponse<ClassChatDTO[]>>(
    `/chatting/class/rooms`
  );

  return data;
};
