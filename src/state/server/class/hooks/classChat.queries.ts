import { useQuery } from "@tanstack/react-query";
import { classChat } from "../api";

export const useClassChat = (classNumber: string, page: number) => {
  return useQuery(["classChat", classNumber, page], ({ queryKey }) => {
    const [_key, classNum, pageNum] = queryKey;
    return classChat(classNum as string, pageNum as number);
  });
};
