import { createAxiosInstance } from "@server-state/axios";
import axios from "axios";
import cheerio from "cheerio";
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

export type FacilitiesParam = {
  building: string;
  name: string;
};

export type FacilitiesType = {
  building: string;
  name: string;
  location: string;
  time: string;
  phone: string;
};

// 연락망 api
export const fetchContact = async (): Promise<Contact[]> => {
  const res = await api.get<API.DefaultResponse<Contact[]>>("/school/phone");
  return res.data.result;
};

export type CalendarType = {
  month: string;
  date: string;
  event: string;
};

// 학사일정 api
export const fetchCalendar = async (): Promise<CalendarType[]> => {
  const res = await api.get<API.DefaultResponse<CalendarType[]>>(
    "/school/schedule"
  );

  return res.data.result;
};

// 편의시설 디테일 api
export const featchFacilitiesDetail = async ({
  building,
  name
}: FacilitiesParam): Promise<FacilitiesType[]> => {
  const res = await api.get<API.DefaultResponse<FacilitiesType[]>>(
    `/school/facility/${building}/${name}`
  );
  return res.data.result;
};
