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
  const queryResult = useQuery(["posts", keyword], () =>
    parsePosts(fetchPosts(keyword))
  );

  // keyword를 기반으로 다음 키워드를 반환하는 함수
  function getNextKeyword(keyword: string): string | null {
    const nextKeyword = parseInt(keyword, 10) + 1;
    return nextKeyword.toString();
  }

  // 다음 페이지 데이터 미리 가져오기
  const nextKeyword = getNextKeyword(keyword);
  if (nextKeyword) {
    queryClient.prefetchQuery(["posts", nextKeyword], () =>
      parsePosts(fetchPosts(nextKeyword))
    );
  }

  return queryResult;

  async function parsePosts(htmlPromise: Promise<string>) {
    const html = await htmlPromise;
    const $ = cheerio.load(html);
    const $titleList = $(".rbbs_list_normal_sec > ul > li > a");

    const titles: Post[] = [];
    $titleList.each((idx, node) => {
      const title = $(node).find(".text").text();
      titles.push({
        title: title.replace(/[\n\t새글]/g, ""),
        link: `https://www.catholic.ac.kr${$(node).attr("href")}`
      });
    });

    const filteredArr = titles.reduce((acc: Post[], current: Post) => {
      const x = acc.find(item => item.title === current.title);
      if (!x) {
        return acc.concat([current]);
      }
      return acc;
    }, []);

    return filteredArr.slice(0, 6);
  }
};
