import { useQuery } from "@tanstack/react-query";
import type { ContactDTO } from "~/pages/home/contact/Contact.types";
import { fetchContact } from "../api";

export const useContact = (): { data: ContactDTO[] | undefined } => {
  const res = useQuery(["contact"], fetchContact);
  return res;
};
