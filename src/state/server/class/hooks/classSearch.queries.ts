import { useInfiniteQuery } from "@tanstack/react-query";
import { classSearch } from "../api";

export const useClassSearch = () => {
  return useInfiniteQuery(
    ["classSearch"],
    ({ pageParam = 0 }) => classSearch(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        const currentPage = pages.length;
        return currentPage < 26 ? currentPage : undefined;
      }
    }
  );
};
