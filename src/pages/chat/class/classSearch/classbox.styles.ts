import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 600;
`;

export const ClassBox = styled.div`
  height: ${pxToRem(85)};
  width: 100%;
  ${flex({ justifyContent: "space-between", alignItems: "center" })}
  border-bottom: ${pxToRem(0.6)} solid #707070;
  padding: 0 ${pxToRem(12)};
  border-bottom: 1px solid #707070;
  &:last-child {
    border: none;
  }
  div {
    ${flex({ flexDirection: "column" })};
  }
`;

export const Title = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(15)};
`;

export const SubTitle = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(12)};
  color: #a7a7a7;
  padding-top: 8px;
`;
