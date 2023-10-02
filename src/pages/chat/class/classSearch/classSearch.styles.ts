import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 600;
`;

export const Divider = styled.div`
  height: ${pxToRem(1)};
  width: 100%;
  color: #707070;
`;

export const Container = styled.div`
  min-height: 100vh;
  ${flex({ flexDirection: "column" })}
  padding: 0 ${pxToRem(22)} ${pxToRem(60)} ${pxToRem(22)};
  background-color: #f8f9fb;
  .add-class {
    margin-top: ${pxToRem(32)};
  }
  .class {
    margin-top: ${pxToRem(56)};
  }
`;

export const TitleContainer = styled.div`
  padding: 0 ${pxToRem(22)} 0 ${pxToRem(22)};
  background-color: #f8f9fb;
`;

export const Title = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(15)};
`;

export const TitleDivider = styled.div`
  margin-top: ${pxToRem(7)};
  width: 100%;
  height: ${pxToRem(2)};
  background: #707070;
`;

export const SubTitle = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(12)};
  color: #a7a7a7;
  padding-top: ${pxToRem(8)};
`;
