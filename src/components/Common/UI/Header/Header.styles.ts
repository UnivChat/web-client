import styled from "@emotion/styled";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

export const Title = styled.span`
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(18)};
  color: #003091;
`;

export const SubTitle = styled.span`
  align-self: flex-end;
  margin-left: ${pxToRem(8)};
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(16)};
  color: #acb8d0;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  padding: ${pxToRem(24)} ${pxToRem(18)};
  height: ${pxToRem(50)};
  background: ${colors.grayf8};
  div {
    ${flex()};
  }
`;

export const MarginContainer = styled.div`
  height: ${pxToRem(50)};
`;
