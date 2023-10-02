import { queryKey } from "@server-state/queryKey";

export const ClassKey = {
  getClassSearch: [queryKey.classSearch, "getClassSearch"] as const
} as const;
