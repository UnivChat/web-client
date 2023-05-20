import styled from "@emotion/styled";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  background-color: ${colors.grayf8};
`;

export const Wrapper = styled.div<{ marginTop?: number }>`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}

  margin-top: ${({ marginTop }) => (marginTop ? pxToRem(marginTop) : "0")};
  padding: 0 ${pxToRem(37)};
`;

export const Text = styled.span`
  color: ${colors.background};
  font-size: ${pxToRem(14)};
  font-weight: 800;
`;

export const Switch = styled.button`
  display: inline-block;
  position: relative;

  width: ${pxToRem(48)};
  height: ${pxToRem(29)};
`;

export const SwitchInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #a2aab9;
  border-radius: ${pxToRem(34)};
  transition: 0.4s;

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
