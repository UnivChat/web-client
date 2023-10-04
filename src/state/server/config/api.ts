import { createAxiosInstance } from "@server-state/axios";
import type { NickNameChangeDTO, PasswordChangeDTO } from "./api.types";

export const patchUserInfo = ({ nicknameValue }: NickNameChangeDTO) => {
  const authApi = createAxiosInstance({ needAuth: true });

  const formData = new FormData();
  formData.append("nickname", nicknameValue);

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  return authApi.patch("/member/info", formData, config);
};

// 비밀번호 변경 api
export const changePasswordApi = ({
  emailValue,
  passwordValue
}: PasswordChangeDTO) => {
  const authApi = createAxiosInstance({ needAuth: true });
  return authApi.post("/member/change/password", {
    email: emailValue,
    password: passwordValue
  });
};

// 회원탈퇴 api
export const deleteAccApi = () => {
  const authApi = createAxiosInstance({ needAuth: true });
  return authApi.delete("/member");
};

// 닉네임 중복확인 api
export const checkNicknameDuplicate = (nickname: string) => {
  const authApi = createAxiosInstance({ needAuth: true });
  return authApi.post("/member/check/nickname", { nickname });
};

export type InquiryProps = {
  content: string;
  receiverEmail: string;
};

export const postInquiry = async (inquiryData: InquiryProps) => {
  const api = createAxiosInstance({ needAuth: true });
  const res = await api.post("/inquiry/register", inquiryData);
  return res.data;
};
