import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import styled from "@emotion/styled";

export const BodyForm = styled.form<{
  paddingTop?: number;
}>`
  padding-top: ${({ paddingTop }) => pxToRem(paddingTop || 38)};
  padding-bottom: ${pxToRem(8)};
`;

export const CheckAuthButton = styled.button<{
  marginTop?: number;
}>`
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
  margin-top: ${({ marginTop }) => pxToRem(marginTop || 20)};
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

export const TitleText = styled.span`
    font-weight: 800;
    font-size: ${pxToRem(15)};
    color: ${colors.background};
    align-self: flex-start;
    margin-left: ${pxToRem(38)};
    padding-bottom: ${pxToRem(13)};
`