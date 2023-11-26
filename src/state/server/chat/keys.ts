import { queryKey } from "@server-state/queryKey";

export const ClassKey = {
  getClassSearch: [queryKey.classSearch, "getClassSearch"] as const,
  getClassChatRoom: (classNumber: string) => [
    queryKey.classSearch,
    "클래스 챗 상세 조회",
    classNumber
  ]
} as const;
