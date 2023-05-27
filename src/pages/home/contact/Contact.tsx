import * as Styled from "./Contact.styles";
import type { ContactProps } from "./Contact.types";

export const ContactList = (containerProps: ContactProps) => {
  return (
    <Styled.ContactList>
      <Styled.ContactName>${containerProps.name}</Styled.ContactName>
      <Styled.ContactSub>
        ${containerProps.contact} (${containerProps.lab})
      </Styled.ContactSub>
      <Styled.ContactSub2>${containerProps.email}</Styled.ContactSub2>
    </Styled.ContactList>
  );
};
