import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

export const Container = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  min-height: 100vh;
  background-color: ${colors.background};
`;

export const Header = styled.span`
  padding-top: ${pxToRem(18)};

  color: ${colors.white};
  font-family: "NanumSquare", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(18)};
`;

export const Body = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}

  width: 100vw;
  height: 100vh;
  margin-top: ${pxToRem(18)};
  border-top-right-radius: ${pxToRem(40)};

  background-color: ${colors.grayf8};
  box-shadow: inset 0 ${pxToRem(4)} ${pxToRem(24)} #00000019;
`;

export const BodyTop = styled.div<{ marginTop?: number }>`
  ${flex({ alignItems: "center" })}

  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? pxToRem(marginTop) : "0")};
  padding: 0 ${pxToRem(30)};
`;

export const Profile = styled(Svg)`
  width: ${pxToRem(62)};
  height: ${pxToRem(62)};
  margin-right: ${pxToRem(14)};
`;

export const BodyTopText = styled.div`
  color: #313131;
  font-size: ${pxToRem(20)};
  font-weight: 800;
`;

export const ButtonText = styled.span`
  ${flex({ justifyContent: "center", alignItems: "center" })}

  width: ${pxToRem(62)};
  height: ${pxToRem(23)};
  margin-left: auto;

  color: #5c5d5f;
  font-weight: 600;
  font-size: ${pxToRem(10)};
  background-color: #dfe3e8;
  border-radius: ${pxToRem(16)};
  opacity: 0.8;
`;

export const BodyTopDivider = styled.div`
  width: ${pxToRem(317)};
  height: 1px;
  margin-top: ${pxToRem(15)};

  background-color: #707070;
`;

export const ConfigWrapper = styled.div`
  ${flex({ flexDirection: "column" })}
  width: 100%;
`;

export const Config = styled.div`
  margin: ${pxToRem(36)} 0 ${pxToRem(7)} ${pxToRem(51)};

  color: #a7a7a7;
  font-size: ${pxToRem(13)};
  font-weight: 600;
`;

export const ListItem = styled.div`
  margin-left: ${pxToRem(51)};
  padding: ${pxToRem(21)} 0;

  color: #313131;
  font-size: ${pxToRem(17)};
  font-weight: 600;
`;
