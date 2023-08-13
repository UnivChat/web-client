import React, { useState, useEffect } from "react";
import { useContact } from "@server-state/home/notice/hooks/contact.queires";
import * as Styled from "./Contact.styles";
import type { ContactDTO } from "./Contact.types";

export const Contact = () => {
  const { data: contacts } = useContact();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<ContactDTO[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (contacts) {
      setFilteredContacts(
        contacts.filter(contact =>
          contact.major.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [contacts, searchTerm]);

  return (
    <Styled.Container>
      <Styled.SearchContainer>
        <Styled.SearchBox>
          <Styled.SearchIcon svgName="search" />
          <Styled.SearchInput
            placeholder="필요한 연락망을 검색하세요"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Styled.SearchBox>
      </Styled.SearchContainer>
      <Styled.ContactContainer>
        <Styled.ContactTitle>
          <Styled.Title>전체연락망</Styled.Title>
          <Styled.ContactBox>
            {filteredContacts.map((contact: ContactDTO, index: number) => (
              <Styled.ContactList
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <Styled.ContactName>
                  {contact.major}
                  {activeIndex === index ? ( // 조건부 렌더링
                    <Styled.ArrowIcon svgName="belowarrow" />
                  ) : (
                    <Styled.ArrowIcon svgName="rightarrow" />
                  )}
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
  );
};

export default Contact;
