import {
  useInfiniteQuery,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { useEffect } from "react";
import { getClassList, getClassRoomChatList, getClassRooms } from "../api";
import { ClassKey } from "../keys";

export const useClassSearch = (searchTerm: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.removeQueries(ClassKey.getClassSearch);
  }, [searchTerm, queryClient]);

  return useInfiniteQuery(
    [ClassKey.getClassSearch, searchTerm],
    ({ pageParam = 0 }) => getClassList(pageParam, searchTerm),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return undefined;

        const currentPage = pages.length;
        return currentPage < 26 ? currentPage : undefined;
      },
      keepPreviousData: false
    }
  );
};

export const useClassList = () => {
  return useQuery(["classList"], getClassRooms);
};

export const useClassChat = (
  param: Omit<Parameters<typeof getClassRoomChatList>[0], "pageParam">
) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getClassRoomChatList({ pageParam, ...param }),
    queryKey: ClassKey.getClassChatRoom(param.classNumber),
    enabled: param.classNumber !== "",
    getNextPageParam: ({ nowPage, maxPage }) => {
      if (nowPage !== maxPage && nowPage < maxPage) {
        return nowPage + 1;
      }

      return undefined;
    }
  });
};
