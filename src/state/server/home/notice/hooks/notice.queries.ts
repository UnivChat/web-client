import { useQueries, useQuery } from "@tanstack/react-query";

import { fetchPosts } from "../../api";

export interface Post {
  title: string;
  link: string;
}

export const usePost = (keyword: string) => {
  return useQuery({
    queryKey: ["post", keyword],
    queryFn: () => fetchPosts(keyword)
  });
};

export const useAllPosts = () => {
  return useQueries({
    queries: [
      { queryKey: ["post", "1"], queryFn: () => fetchPosts("1") },
      { queryKey: ["post", "2"], queryFn: () => fetchPosts("2") },
      { queryKey: ["post", "3"], queryFn: () => fetchPosts("3") },
      { queryKey: ["post", "4"], queryFn: () => fetchPosts("4") }
    ]
  });
};
