import styled from "@emotion/styled";
import { colors } from "~/constants";
import { flex } from "~/styles/utils/flex";
import { pxToRem } from "~/utils";

export const Header = styled.header<{ bgColor?: string }>`
  position: fixed;
  z-index: 10;

  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  width: 100%;
  height: ${pxToRem(50)};
  padding: 0 ${pxToRem(18)};

  background: ${({ bgColor = colors.grayf8 }) => bgColor};
`;

export const Title = styled.span`
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(18)};
  color: #003091;
`;

export const SubTitle = styled.span`
  margin-left: ${pxToRem(8)};

  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(16)};
  color: #acb8d0;
`;

export const MarginContainer = styled.div`
  height: ${pxToRem(50)};
`;
