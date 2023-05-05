import Link from "next/link";
import * as Styled from "./myPage.styles";
import { configItems } from "./configItem";

const MyPage = () => {
  const handleLogout = () => {
    // 로그아웃
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
