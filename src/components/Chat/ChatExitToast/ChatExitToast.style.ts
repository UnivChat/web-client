import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";
import type { ButtonProps } from "../ChatToastCommon.style";

export const SubText = styled.div`
  font-size: ${pxToRem(8)};
  color: #727272;
`;

export const ButtonWrap = styled.div`
  margin-top: ${pxToRem(17)};
  ${flex({ justifyContent: "center" })}
`;

export const ExitButton = styled.button<ButtonProps>`
  width: ${pxToRem(75)};
  height: ${pxToRem(25)};

  color: ${({ color }) => color || "#fff"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#002f92"};
  border-radius: ${pxToRem(13)};
  border: 0;
`;
