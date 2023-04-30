import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./contact.styles";

const Contact = () => {
  return (
    <Styled.Container>
      <Styled.SearchContainer>
        <Styled.SearchBox>
          <Styled.searchIcon svgName="search" />
          <Styled.SearchInput placeholder="필요한 연락망을 검색하세요" />
        </Styled.SearchBox>
      </Styled.SearchContainer>
      <Styled.ContactContainer>
        <Styled.ContactTitle>
          <Styled.Title>즐겨찾기</Styled.Title>
          <Styled.ContactBox>
            <Styled.ContactList>
              <Styled.ContactName>000교수님</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
            <Styled.ContactList>
              <Styled.ContactName>학습지원센터</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
            <Styled.ContactList>
              <Styled.ContactName>도서관열람자료실</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
          </Styled.ContactBox>
        </Styled.ContactTitle>
      </Styled.ContactContainer>
      <Styled.ContactContainer>
        <Styled.ContactTitle>
          <Styled.Title>전체 연락망</Styled.Title>
          <Styled.ContactBox>
            <Styled.ContactList>
              <Styled.ContactName>000교수님</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
            <Styled.ContactList>
              <Styled.ContactName>학습지원센터</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
            <Styled.ContactList>
              <Styled.ContactName>도서관열람자료실</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
            <Styled.ContactList>
              <Styled.ContactName>0000학과사무실</Styled.ContactName>
              <Styled.ContactSub>123-123-12321 (M212)</Styled.ContactSub>
              <Styled.ContactSub2>computer@catholic.ac.kr</Styled.ContactSub2>
            </Styled.ContactList>
          </Styled.ContactBox>
        </Styled.ContactTitle>
      </Styled.ContactContainer>
    </Styled.Container>
  );
};

export default Contact;
