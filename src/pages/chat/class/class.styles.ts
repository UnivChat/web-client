import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";
import { colors } from "~/constants";

const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 600;
`;

export const Container = styled.div`
  ${flex({ flexDirection: "column" })};
  padding: 0 ${pxToRem(22)} 0 ${pxToRem(22)};
  background-color: #f8f9fb;
  min-height: 100vh;
`;

export const ChatBox = styled.div`
  cursor: pointer;
  height: ${pxToRem(85)};
  width: 100%;

  ${flex({ flexDirection: "column", justifyContent: "center" })}
  border-bottom: ${pxToRem(0.6)} solid #707070;
  &:first-of-type {
    border-top: 1px solid #707070;
  }
  div {
    ${flex({ justifyContent: "space-between" })}
    padding: 0 ${pxToRem(12)} 0 ${pxToRem(12)};
  }
  div:first-of-type {
    padding-bottom: ${pxToRem(8)};
  }
`;

export const ChatCountContainer = styled.div`
  position: relative;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: 45%;
  background: #e3595e;
`;

export const ChatCount = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(12)};
  color: ${colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(15)};
`;

export const SubTitle = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(12)};
  color: #a7a7a7;
`;

export const ChatTime = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(10)};
  color: #a7a7a7;
`;
