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
