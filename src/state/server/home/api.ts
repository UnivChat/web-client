import axios from "axios";
import cheerio from "cheerio";
import { createAxiosInstance } from "@server-state/axios";
import type { Post } from "./notice/hooks/notice.queries";

const api = createAxiosInstance();

// 공지사항 크롤링
const allOriginsURL = "https://api.allorigins.win/get?url=";
const targetURLBase =
  "https://www.catholic.ac.kr/front/boardlist.do?cmsDirPkid=2053&cmsLocalPkid=";

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

export const fetchPosts = async (keyword: string) => {
  const targetURL = encodeURIComponent(
    targetURLBase + encodeURIComponent(keyword)
  );
  const response = await axios.get(`${allOriginsURL}${targetURL}`);

  return parsePosts(response.data.contents);
};

type Contact = {
  major: string;
  phoneNumber: string;
  email: string;
  location: string;
};

type ApiResponse = {
  code: string;
  message: string;
  result: Contact[];
};

// 연락망 api
export const fetchContact = async (): Promise<Contact[]> => {
  const res = await api.get<ApiResponse>("/school/phone");
  return res.data.result;
};
