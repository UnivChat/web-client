import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "../../api";

export interface Post {
  title: string;
  link: string;
}

export const useAllPosts = () => {
  const allCategories = ["1", "2", "3", "4"];
  const queryResults = allCategories.map(keyword =>
    useQuery(["posts", keyword], () => fetchPosts(keyword))
  );

  return queryResults;
};
