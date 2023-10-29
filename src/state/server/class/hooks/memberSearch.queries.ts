import { useQuery } from "@tanstack/react-query";
import { memberSearch } from "../api";

export const useMemberSearch = () => {
  return useQuery(["memberInfo"], memberSearch);
};
