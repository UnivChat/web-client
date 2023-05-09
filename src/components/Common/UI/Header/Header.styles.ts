import styled from "@emotion/styled";
import { pxToRem } from "~/utils";

export const Title = styled.span`
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(15)};
  color: #003091;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 18px;
  div {
    display: flex;
  }
`;
