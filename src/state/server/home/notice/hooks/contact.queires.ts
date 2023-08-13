import { useQuery } from "@tanstack/react-query";
import type { ContactDTO } from "~/pages/home/contact/Contact.types";
import { fetchContact } from "../api";

export const useContact = () => {
  return useQuery<ContactDTO[]>(["contact"], fetchContact);
};
