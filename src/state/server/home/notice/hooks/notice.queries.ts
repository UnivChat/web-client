import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "../../api";

export interface Post {
  title: string;
  link: string;
}

export const usePosts = (keyword: string) => {
  // 현재 페이지 데이터 가져오기
  const queryResult = useQuery(["posts", keyword], () => fetchPosts(keyword));

  return queryResult;
};
