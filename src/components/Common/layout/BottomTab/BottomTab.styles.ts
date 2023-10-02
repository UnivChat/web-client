import styled from "@emotion/styled";
import { pxToRem } from "~/utils";

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px; // TODO: 값 바꿔야 함

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(75)};

  box-shadow: 0px -17px 18px #00000014;

  background-color: #fff;
  z-index: 9; // TODO: zindex 정리해야함
`;
