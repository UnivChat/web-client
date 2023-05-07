type ConfigItem<T = string> = {
  label: string;
  href?: T;
};

export const configItems: ConfigItem[] = [
  {
    label: "닉네임 변경",
    href: "/config/nickname"
  },
  {
    label: "비밀번호 변경",
    href: "/config/password"
  },
  {
    label: "알림 설정",
    href: "/config/notification"
  },
  {
    label: "캣챗 공지",
    href: "/config/announcement"
  },
  {
    label: "로그아웃"
  },
  {
    label: "회원탈퇴",
    href: "/config/deleteacc"
  }
];
