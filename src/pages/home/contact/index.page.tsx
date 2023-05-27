import * as Styled from "./Contact.styles";
import { ContactList } from 

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
            <ContactList name='000교수님' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
            <ContactList name='학습지원센터' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
            <ContactList name='도서관열람자료실' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
          </Styled.ContactBox>
        </Styled.ContactTitle>
      </Styled.ContactContainer>
      <Styled.ContactContainer>
        <Styled.ContactTitle>
          <Styled.Title>전체 연락망</Styled.Title>
          <Styled.ContactBox>
            <ContactList name='000교수님' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
            <ContactList name='학습지원센터' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
            <ContactList name='도서관열람자료실' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
            <ContactList name='0000학과사무실' contact="123-123-12321" lab="M212" email="computer@catholic.ac.kr" />
          </Styled.ContactBox>
        </Styled.ContactTitle>
      </Styled.ContactContainer>
    </Styled.Container>
  );
};

export default Contact;
