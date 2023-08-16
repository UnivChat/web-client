import React, { useState, useEffect } from "react";
import { Header } from "~/components/Common/UI/Header/Header";
import { useContact } from "@server-state/home/contact/hooks/contact.queires";
import * as Styled from "./Contact.styles";
import type { ContactDTO } from "./Contact.types";

export const Contact = () => {
  const { data: contacts, isLoading, isError } = useContact();
  const [searchContact, setSearchContact] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<ContactDTO[]>([]);
  const [activeIndices, setActiveIndices] = useState<Record<number, boolean>>(
    {}
  );

  useEffect(() => {
    if (contacts) {
      setFilteredContacts(
        contacts.filter(contact =>
          contact.major.toLowerCase().includes(searchContact.toLowerCase())
        )
      );
    }
  }, [contacts, searchContact]);

  const toggleContact = (index: number) => {
    setActiveIndices({
      ...activeIndices,
      [index]: !activeIndices[index]
    });
  };

  return (
    <>
      <Header.Back title="홈" />
      <Styled.Container>
        <Styled.SearchContainer>
          <Styled.SearchBox>
            <Styled.SearchIcon svgName="search" />
            <Styled.SearchInput
              placeholder="필요한 연락망을 검색하세요"
              value={searchContact}
              onChange={e => setSearchContact(e.target.value)}
            />
          </Styled.SearchBox>
        </Styled.SearchContainer>
        <Styled.ContactContainer>
          <Styled.ContactTitle>
            <Styled.Title>전체연락망</Styled.Title>
            <Styled.ContactBox>
              {isLoading && (
                <Styled.ErrorHandling>
                  연락망을 가지고 오고 있어요
                </Styled.ErrorHandling>
              )}
              {isError && (
                <Styled.ErrorHandling>
                  연락망을 가지고 오는데 실패했어요
                </Styled.ErrorHandling>
              )}
              {filteredContacts.map((contact, index) => (
                <Styled.ContactList
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onClick={() => toggleContact(index)}
                >
                  <Styled.ContactName>
                    {contact.major}
                    <Styled.ArrowIcon
                      svgName={
                        activeIndices[index] ? "belowarrow" : "rightarrow"
                      }
                    />
                  </Styled.ContactName>
                  <Styled.ContactSub>
                    {contact.phoneNumber
                      ? `${contact.phoneNumber} (${contact.location})`
                      : "정보가 없습니다"}
                  </Styled.ContactSub>
                  <Styled.ContactSub2>{contact.email}</Styled.ContactSub2>
                </Styled.ContactList>
              ))}
            </Styled.ContactBox>
          </Styled.ContactTitle>
        </Styled.ContactContainer>
      </Styled.Container>
    </>
  );
};

export default Contact;
