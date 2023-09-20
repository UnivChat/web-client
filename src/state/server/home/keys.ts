import { queryKey } from "../queryKey";

export const ContactKey = {
  getContacts: [queryKey.home, "getContacts"] as const
} as const;

export const CalendarKey = {
  getCalendar: [queryKey.home, "getCalendar"] as const
} as const;
