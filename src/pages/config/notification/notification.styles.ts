import styled from "@emotion/styled";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.grayf8};
`;

export const Wrapper = styled.div<{ marginTop?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(37)};
  margin-top: ${({ marginTop }) => (marginTop ? pxToRem(marginTop) : "0")};
`;

export const Text = styled.span`
  font-size: ${pxToRem(14)};
  font-weight: 800;
  color: ${colors.background};
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: ${pxToRem(48)};
  height: ${pxToRem(29)};
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #003091;
  }

  &:checked + span:before {
    transform: translateX(${pxToRem(19)});
  }

  &:focus + span {
    box-shadow: 0 0 1px #003091;
  }

  & + span {
    transition: background-color 0.4s;
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #a2aab9;
  transition: 0.4s;
  border-radius: ${pxToRem(34)};

  &:before {
    position: absolute;
    content: "";
    height: ${pxToRem(23)};
    width: ${pxToRem(23)};
    left: ${pxToRem(3)};
    bottom: ${pxToRem(3)};
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
