import styled from "@emotion/styled";
import { flex } from "~/styles/utils/flex";
import { colors } from "~/constants/colors";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  min-height: 100vh;

  background-color: ${colors.grayf8};
`;

export const ChatText = styled.div`
  ${flex({ alignItems: "center" })};
  padding: ${pxToRem(7)} ${pxToRem(15)};
  min-height: ${pxToRem(30)};
  min-width: ${pxToRem(30)};
  max-width: 60%;

  border: ${pxToRem(0.5)} solid #707070;
  border-radius: ${pxToRem(31)};

  font-family: "NanumSquare";
  font-weight: 300;
  font-size: ${pxToRem(12)};
  color: ${colors.black};
`;
