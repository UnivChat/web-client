import { createAxiosInstance } from "@server-state/axios";
import type { SignInRequestDTO, SignInResponseDTO } from "./apis.types";

const api = createAxiosInstance();

export const signIn = async (payload: SignInRequestDTO) => {
  const { data } = await api.post<SignInResponseDTO>("/login", payload);

  return data.result;
};

export const getUserInfo = async () => {
  const authApi = createAxiosInstance({ needAuth: true });

  const data = await authApi.get("/member/info");

  // console.log(data);

  return { data };
};

export const signOut = async () => {
  const authApi = createAxiosInstance({ needAuth: true });

  await authApi.get("/member/logout");
};

// 이메일 인증 api
export const verifyEmail = async (email: string) => {
  const authApi = createAxiosInstance({ needAuth: true });
  const response = await authApi.post("/member/email/verified", { email });
  return response.data;
};
