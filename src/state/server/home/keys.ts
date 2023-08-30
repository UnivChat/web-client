import { queryKey } from "../queryKey";

export const ContactKey = {
  getContacts: [queryKey.home, "getContacts"] as const
} as const;
