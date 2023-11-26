import { useQuery } from "@tanstack/react-query";
import { getClassChatList } from "./apis";

export const useFetchClassChatList = () => {
  return useQuery({
    queryFn: () => getClassChatList(0),
    queryKey: ["클래스 채팅", 0]
  });
};
