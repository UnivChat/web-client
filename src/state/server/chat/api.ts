import { createAxiosInstance } from "@server-state/axios";

const api = createAxiosInstance();

export const getClassList = async (page: number, className?: string) => {
  const { data } = await api.get(`/chatting/class/${page}`, {
    params: { className }
  });

  return data.result;
};

export const classEnter = async (classNumber: string) => {
  const classApi = createAxiosInstance({ needAuth: true });
  const response = await classApi.post(`/chatting/class/enter/${classNumber}`);
  return response.data;
};

export const classExit = async (classNumber: string) => {
  const classApi = createAxiosInstance({ needAuth: true });
  const response = await classApi.delete(`/chatting/class/exit/${classNumber}`);
  return response.data;
};

export const getClassRooms = async () => {
  const classApi = createAxiosInstance({ needAuth: true });
  const response = await classApi.get("/chatting/class/rooms");
  return response.data.result || [];
};

export const getClassRoomChatList = async ({
  pageParam = 0,
  classNumber
}: {
  pageParam: number;
  classNumber: string;
}) => {
  const classApi = createAxiosInstance({ needAuth: true });

  const { data } = await classApi.get<
    API.DefaultResponse<{
      maxPage: number;
      nowPage: number;
      classChatList: Chat.DTO[];
    }>
  >(`/chatting/class/${classNumber}/${pageParam}`);

  return data.result;
};
