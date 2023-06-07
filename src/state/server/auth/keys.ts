import { queryKey } from "../queryKey";

export const AuthKey = {
  getUserInfo: [queryKey.auth, "getUserInfo"] as const
} as const;
