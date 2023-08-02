import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import Notice from "~/components/Home/Notice/Notice";
import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./Home.styles";
import type { SelectionProps } from "./Home.types";
import { BottomTab } from "../../components/Common/layout";

const Selection = (ContainerProps: SelectionProps) => {
  const content = (
    <Styled.SelectBox>
      <Styled.SelectButton>
        <Styled.SelectIcon svgName={ContainerProps.svgName} />
      </Styled.SelectButton>
      <Styled.SelectText>{ContainerProps.name}</Styled.SelectText>
    </Styled.SelectBox>
  );
  return content;
};

export const Home = () => {
  return (
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
        <Styled.DocBox>달력</Styled.DocBox>
      </Styled.DocContainer>
      <Styled.DocContainer>
        <Styled.DocTitle>공지사항</Styled.DocTitle>
        <Notice />
      </Styled.DocContainer>
      <BottomTab />
    </Styled.Container>
  );
};

const HomePage: NextPageWithLayout = () => {
  const { data } = useFetchUserInfo();

  return (
    <div>
      <div>
        HomePage
        {JSON.stringify(data)}
      </div>
      <Home />
    </div>
  );
};

export default HomePage;
