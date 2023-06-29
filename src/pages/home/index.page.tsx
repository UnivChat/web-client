import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./Home.styles";
import { Selection } from "./Home";
import { BottomTab } from "../../components/Common/layout";

const HomePage: NextPageWithLayout = () => {
  const { data } = useFetchUserInfo();

  return (
    <div>
      <div>
        HomePage
        {JSON.stringify(data)}
      </div>
      <Styled.Container>
        <Styled.Title>CAT CHAT</Styled.Title>
        <Styled.SelectContainer>
          <Selection name="오늘의 식단" svgName="food" />
          <Styled.SelectLine />
          <Selection name="도서관 자리" svgName="library" />
          <Styled.SelectLine />
          <Selection name="연락망" svgName="contact" />
          <Styled.SelectLine />
          <Selection name="편의시설" svgName="facility" />
        </Styled.SelectContainer>
        <Styled.DocContainer>
          <Styled.DocTitle>학사일정</Styled.DocTitle>
          <Styled.DocBox></Styled.DocBox>
        </Styled.DocContainer>
        <Styled.DocContainer>
          <Styled.DocTitle>공지사항</Styled.DocTitle>
          <Styled.DocBox></Styled.DocBox>
        </Styled.DocContainer>
        <BottomTab />
      </Styled.Container>
    </div>
  );
};

export default HomePage;
