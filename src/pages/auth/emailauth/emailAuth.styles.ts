import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import styled from "@emotion/styled";


export const BodyForm = styled.form`
  padding-top: ${pxToRem(38)};
  padding-bottom: ${pxToRem(8)};
`;

export const CheckAuthButton = styled.button`
  width: ${pxToRem(231)};
  height: ${pxToRem(33)};
  font-size: ${pxToRem(11)};
  font-weight: 600;
  background-color: ${colors.background};
  color: ${colors.white};
  border: 1px solid;
  border-radius: ${pxToRem(50)};
  letter-spacing: ${pxToRem(0.7)};
  cursor: pointer;
  outline: none;
  margin-top: ${pxToRem(20)};
`;

export const Span = styled.span`
    margin-top: ${pxToRem(61)};
    margin-bottom: ${pxToRem(20)};
`

export const Message = styled.div`
  margin-left: ${pxToRem(10)};
  margin-top: ${pxToRem(14)};
  color: ${colors.background};
  font-size: ${pxToRem(10)};
  font-weight: 600;
`
