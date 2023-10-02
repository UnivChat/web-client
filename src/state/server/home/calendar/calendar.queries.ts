import { useQuery } from "@tanstack/react-query";
import { CalendarKey } from "../keys";
import { fetchCalendar } from "../api";
import type { CalendarType } from "../api";

export const useCalendar = () => {
  return useQuery<CalendarType[]>(CalendarKey.getCalendar, fetchCalendar);
};
