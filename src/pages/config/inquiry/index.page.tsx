import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "./Inquiry.styles";

const Inquiry: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <Header.Back title="문의하기" />
      <Styled.Title>문의 내용 작성</Styled.Title>
      <Styled.SubContainer>
        <Styled.SubTitle>내용</Styled.SubTitle>
        <Styled.Input height="175" />
      </Styled.SubContainer>
      <Styled.SubContainer>
        <Styled.SubTitle>회답 받을 이메일</Styled.SubTitle>
        <Styled.Input height="30" />
      </Styled.SubContainer>
      <Styled.Title2>개인정보 수집 및 이용</Styled.Title2>
      <Styled.SubContainer>
        <Styled.CheckButton type="checkbox" />
        <Styled.CheckText>개인정보 수집 및 이용 동의(필수)</Styled.CheckText>
        <Styled.TextBox>
          <Styled.Text>
            문의처리를 위해 이메일, 회원정보, 기기정보, 문의내용에 포함된
            개인정보를 수집하며, 개인정보처리방침에 따라 3년 후 파기됩니다.
          </Styled.Text>
        </Styled.TextBox>
      </Styled.SubContainer>
      <Styled.Submit>문의 접수하기</Styled.Submit>
    </Styled.Container>
  );
};

export default Inquiry;

Inquiry.layoutConfig = {
  case: "default"
};
