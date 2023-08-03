import { useQuery, useQueryClient } from "@tanstack/react-query";
import cheerio from "cheerio";
import { fetchPosts } from "../api";

export interface Post {
  title: string;
  link: string;
}

export const usePosts = (keyword: string) => {
  const queryClient = useQueryClient();

  // 현재 페이지 데이터 가져오기
  const queryResult = useQuery(
    ["posts", keyword],
    () => parsePosts(fetchPosts(keyword)),
    {
      onSuccess: () => {
        // 처음 데이터를 가져올 때만 나머지 탭도 데이터도 미리 가져옴
        if (keyword === "1") {
          prefetchNextPages(keyword, 3);
        }
      }
    }
  );

  function getNextKeywords(keyword: string, count: number): string[] {
    return Array.from({ length: count }, (_, idx) =>
      (parseInt(keyword, 10) + idx + 1).toString()
    );
  }

  function prefetchNextPages(keyword: string, count: number) {
    const nextKeywords = getNextKeywords(keyword, count);
    nextKeywords.forEach(nextKeyword => {
      if (!queryClient.getQueryData(["posts", nextKeyword])) {
        queryClient.prefetchQuery(["posts", nextKeyword], () =>
          parsePosts(fetchPosts(nextKeyword))
        );
      }
    });
  }

  return queryResult;

  async function parsePosts(htmlPromise: Promise<string>) {
    const html = await htmlPromise;
    const $ = cheerio.load(html);
    const $titleList = $(".rbbs_list_normal_sec > ul > li > a");

    const titlesSet: Set<Post> = new Set();

    $titleList.each((idx, node) => {
      const title = $(node)
        .find(".text")
        .text()
        .replace(/[\n\t새글]/g, "");
      const link = `https://www.catholic.ac.kr${$(node).attr("href")}`;
      titlesSet.add({ title, link });
    });

    return Array.from(titlesSet).slice(0, 6);
  }
};
