import { useQuery } from "@tanstack/react-query";
import type { ContactDTO } from "~/pages/home/contact/Contact.types";
import { ContactKey } from "@server-state/home/keys";
import { fetchContact } from "../../api";

export const useContact = () => {
  return useQuery<ContactDTO[]>(ContactKey.getContacts, fetchContact);
};
