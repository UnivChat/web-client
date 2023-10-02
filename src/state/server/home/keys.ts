import { queryKey } from "../queryKey";

export const ContactKey = {
  getContacts: [queryKey.home, "getContacts"] as const
} as const;

export const FacilitiesKey = {
  getFacilities: [queryKey.home, "getFacilities"] as const
} as const;
