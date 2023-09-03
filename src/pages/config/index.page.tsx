import { useSignOut } from "@server-state/auth";
import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import Link from "next/link";
import type { NextPageWithLayout } from "../app.types";
import { configItems } from "./config.constants";
import * as Styled from "./config.styles";

const MyPage: NextPageWithLayout = () => {
  const { mutate: callSignOutAPI } = useSignOut();
  const fetchUserInfoData = useFetchUserInfo();
  const result = fetchUserInfoData?.data?.data?.data.result || null;

  const handleLogout = () => {
    callSignOutAPI();
  };

  return (
    <Styled.Container>
      <Styled.Header>마이페이지</Styled.Header>
      <Styled.Body>
        <Styled.BodyTop marginTop={48}>
          <Styled.Profile svgName="profile" />
          <Styled.BodyTopText>{result?.nickname}</Styled.BodyTopText>
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
