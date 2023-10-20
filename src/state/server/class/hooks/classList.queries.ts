import { useQuery } from "@tanstack/react-query";
import { classList } from "../api";

export const useClassList = () => {
  return useQuery(["classList"], classList);
};
