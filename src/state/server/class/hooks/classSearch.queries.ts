import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { classSearch } from "../api";
import { ClassKey } from "../keys";

export const useClassSearch = (searchTerm: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.removeQueries(ClassKey.getClassSearch);
  }, [searchTerm, queryClient]);

  return useInfiniteQuery(
    [ClassKey.getClassSearch, searchTerm],
    ({ pageParam = 0 }) => classSearch(pageParam, searchTerm),
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
