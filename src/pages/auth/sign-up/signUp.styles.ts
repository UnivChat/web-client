import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import styled from "@emotion/styled";

export const BodyText = styled.div`
  font-weight: 800;
  margin-top: ${pxToRem(15)};
  color: ${colors.background};
  font-size: ${pxToRem(15)};
`;

export const CheckIdButton = styled.button`
  width: ${pxToRem(68)};
  height: ${pxToRem(40)};
  font-size: ${pxToRem(13)};
  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.background};
  border: 1px solid;
  border-radius: ${pxToRem(15)};
  letter-spacing: ${pxToRem(1)};
  cursor: pointer;
  outline: none;
  margin-left: ${pxToRem(8)};
`;

export const GenderButton = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  font-size: ${pxToRem(13)};
  font-weight: 600;
  width: ${pxToRem(68)};
  height: ${pxToRem(40)};
  background-color: ${({ isSelected }) =>
    isSelected ? colors.background : "#fff"};
  color: ${({ isSelected }) => (isSelected ? "#fff" : colors.background)};
  border: 1px solid #d3d7e0;
  border-radius: ${pxToRem(15)};
  cursor: pointer;
  outline: none;

  &:not(:last-child) {
    margin-right: ${pxToRem(12)};
  }
`;
