type ConfigItem<T = string> = {
  label: string;
  href?: T;
};

export const configItems: ConfigItem[] = [
  {
    label: "닉네임 변경",
    href: "/mypage/nickname"
  },
  {
    label: "비밀번호 변경",
    href: "/mypage/password"
  },
  {
    label: "알림 설정",
    href: "/mypage/notification"
  },
  {
    label: "캣챗 공지",
    href: "/mypage/announcement"
  },
  {
    label: "로그아웃"
  },
  {
    label: "회원탈퇴",
    href: "/mypage/deleteacc"
  }
];
