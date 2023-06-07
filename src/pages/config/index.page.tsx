import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import type { NextPageWithLayout } from "../app.types";
import { configItems } from "./config.constants";
import * as Styled from "./config.styles";

const MyPage: NextPageWithLayout = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    deleteCookie(AC_TOKEN_KEY);
    deleteCookie(RE_TOKEN_KEY);
    push("/auth/sign-in");
  };

  return (
    <Styled.Container>
      <Styled.Header>마이페이지</Styled.Header>
      <Styled.Body>
        <Styled.BodyTop marginTop={48}>
          <Styled.Profile svgName="profile" />
          <Styled.BodyTopText>김가대</Styled.BodyTopText>
          <Styled.ButtonText>내 정보</Styled.ButtonText>
        </Styled.BodyTop>
        <Styled.BodyTopDivider />
        <Styled.ConfigWrapper>
          <Styled.Config>설정</Styled.Config>
          {configItems.map(item =>
            item.href ? (
              <Link href={item.href} key={item.label}>
                <Styled.ListItem>{item.label}</Styled.ListItem>
              </Link>
            ) : (
              <Styled.ListItem onClick={handleLogout} key={item.label}>
                {item.label}
              </Styled.ListItem>
            )
          )}
        </Styled.ConfigWrapper>
      </Styled.Body>
    </Styled.Container>
  );
};

export default MyPage;

MyPage.layoutConfig = {
  case: "tab"
};
