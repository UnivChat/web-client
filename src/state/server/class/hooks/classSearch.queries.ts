import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { classSearch } from "../api";
import { ClassKey } from "../keys";

export const useClassSearch = (searchTerm: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (searchTerm === "") {
      queryClient.invalidateQueries(ClassKey.getClassSearch);
    }
  }, [searchTerm, queryClient]);

  return useInfiniteQuery(
    [ClassKey.getClassSearch, searchTerm],
    ({ pageParam = 0 }) => classSearch(pageParam, searchTerm),
    {
      getNextPageParam: (lastPage, pages) => {
        if (searchTerm === "") return 0;
        const currentPage = pages.length;
        return currentPage < 26 ? currentPage : undefined;
      },
      keepPreviousData: false
    }
  );
};
