import { API } from "@server-state/axios";
import type { SignInRequestDTO, SignInResponseDTO } from "./apis.types";

const api = API();

export const signIn = async (payload: SignInRequestDTO) => {
  const { data } = await api.post<SignInResponseDTO>("/login", payload);

  return data.result;
};
