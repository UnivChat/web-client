import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../apis";
import { AuthKey } from "../keys";

export const useFetchUserInfo = () => {
  return useQuery(AuthKey.getUserInfo, getUserInfo);
};
