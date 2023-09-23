type FacilityItem = {
  building: string;
  name: string;
  svgName: svgType; // svgType을 사용
};

export const kimFirstboxData: FacilityItem[] = [
  {
    building: "K",
    name: "카페멘사",
    svgName: "cafe"
  },
  {
    building: "K",
    name: "공차",
    svgName: "cafe"
  },
  {
    building: "K",
    name: "폴바셋",
    svgName: "cafe"
  },
  {
    building: "K",
    name: "이마트24",
    svgName: "mart"
  }
];

export const kimSecondboxData: FacilityItem[] = [
  {
    building: "K",
    name: "세탁소",
    svgName: "laundry"
  },
  {
    building: "K",
    name: "우리은행",
    svgName: "bank"
  },
  {
    building: "K",
    name: "맘스터치",
    svgName: "burger"
  },
  {
    building: "K",
    name: "트러스트짐",
    svgName: "gym"
  }
];

export const kimThirdboxData: FacilityItem[] = [
  {
    building: "K",
    name: "복사실",
    svgName: "copy"
  },
  {
    building: "K",
    name: "미디어실",
    svgName: "media"
  },
  {
    building: "K",
    name: "글로벌라운지",
    svgName: "lounge"
  },
  {
    building: "K",
    name: "커뮤니티라운지",
    svgName: "lounge"
  }
];

export const NiFirstboxData: FacilityItem[] = [
  {
    building: "N",
    name: "카페하랑",
    svgName: "cafe"
  },
  {
    building: "N",
    name: "우리은행ATM",
    svgName: "bank"
  },
  {
    building: "N",
    name: "남자휴게실",
    svgName: "rest"
  },
  {
    building: "N",
    name: "무인택배함",
    svgName: "delivery"
  }
];

export const NiSecondboxData: FacilityItem[] = [
  {
    building: "N",
    name: "증명무인발급",
    svgName: "certification"
  },
  {
    building: "N",
    name: "증명창구발급",
    svgName: "certification"
  },
  {
    building: "N",
    name: "학생지원팀",
    svgName: "team"
  },
  {
    building: "N",
    name: "취업지원팀",
    svgName: "team"
  }
];

export const BFiristboxData: FacilityItem[] = [
  {
    building: "B",
    name: "부온프란조",
    svgName: "restaurant"
  },
  {
    building: "B",
    name: "카페보나",
    svgName: "restaurant"
  },
  {
    building: "B",
    name: "폴바셋",
    svgName: "cafe"
  },
  {
    building: "B",
    name: "CU편의점",
    svgName: "mart"
  }
];

export const BSecondboxData: FacilityItem[] = [
  {
    building: "B",
    name: "스타트업라운지",
    svgName: "lounge"
  },
  {
    building: "B",
    name: "CUK드림라운지",
    svgName: "lounge"
  }
];

export const TboxData: FacilityItem[] = [
  {
    building: "T",
    name: "우리은행ATM",
    svgName: "bank"
  },
  {
    building: "T",
    name: "학사지원팀",
    svgName: "team"
  }
];

export const LboxData: FacilityItem[] = [
  {
    building: "L",
    name: "카페드림",
    svgName: "cafe"
  },
  {
    building: "L",
    name: "미디어룸",
    svgName: "media"
  }
];

export type svgType =
  | "cafe"
  | "mart"
  | "laundry"
  | "bank"
  | "burger"
  | "gym"
  | "copy"
  | "media"
  | "lounge"
  | "rest"
  | "delivery"
  | "certification"
  | "team"
  | "restaurant"
  | "hospital";
