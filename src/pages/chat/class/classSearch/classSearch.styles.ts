import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { pxToRem } from "~/utils";

const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 600;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  color: #707070;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToRem(22)} 0 ${pxToRem(22)};
  background-color: #f8f9fb;
  .add-class {
    margin-top: 32px;
  }
  .class {
    margin-top: 56px;
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
  height: 2px;
  background: #707070;
`;

export const SubTitle = styled.span`
  ${sharedTextStyles}
  font-size: ${pxToRem(12)};
  color: #a7a7a7;
  padding-top: 8px;
`;
