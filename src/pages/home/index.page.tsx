import Notice from "~/components/Home/Notice/Notice";
import Link from "next/link";
import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./Home.styles";
import type { SelectionProps } from "./Home.types";

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
        <Link href="/home/contact" passHref>
          <Selection name="연락망" svgName="contact" />
        </Link>
        <Styled.SelectLine />
        <Selection name="편의시설" svgName="facility" />
      </Styled.SelectContainer>
      <Styled.HomeWrapper>
        <Styled.HomeTitle>학사일정</Styled.HomeTitle>
        <Styled.CalendarBox>달력</Styled.CalendarBox>
      </Styled.HomeWrapper>
      <Styled.HomeWrapper>
        <Styled.HomeTitle>공지사항</Styled.HomeTitle>
        <Notice />
      </Styled.HomeWrapper>
    </Styled.Container>
  );
};

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
