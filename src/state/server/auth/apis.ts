import { createAxiosInstance } from "@server-state/axios";
import type { SignInRequestDTO, SignInResponseDTO } from "./apis.types";

const api = createAxiosInstance();
const authApi = createAxiosInstance({ needAuth: true });

export const signIn = async (payload: SignInRequestDTO) => {
  const { data } = await api.post<SignInResponseDTO>("/login", payload);

  return data.result;
};

export const getUserInfo = async () => {
  const data = await authApi.get("/member/info");

  // console.log(data);

  return { data };
};
