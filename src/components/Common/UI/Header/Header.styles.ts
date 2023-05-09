import styled from "@emotion/styled";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";

export const Title = styled.span`
  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(15)};
  color: #003091;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 18px;
  height: 50px;
  background: ${colors.white};
  div {
    display: flex;
  }
`;

export const MarginContainer = styled.div`
  height: 50px;
`;
