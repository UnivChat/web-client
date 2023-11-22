import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flex } from "~/styles/utils/flex";
import { pxToRem } from "~/utils";

const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 600;
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
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(15)};
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${pxToRem(8)};
`;
