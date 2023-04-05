import styled from "@emotion/styled";

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px; // TODO: 값 바꿔야 함

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  box-shadow: 0px -17px 18px #00000014;

  background-color: #fff;
  z-index: 9;
`;
