import { queryKey } from "../queryKey";

export const ContactKey = {
  getContacts: [queryKey.contact, "getContacts"] as const
} as const;
