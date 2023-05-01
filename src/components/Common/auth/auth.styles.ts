import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import styled from "@emotion/styled";

function flex(
  displayType = "",
  flexDirection = "",
  justifyContent = "",
  alignItems = ""
) {
  return `
    display: ${displayType};
    ${flexDirection ? `flex-direction: ${flexDirection};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
  `;
}

export const Container = styled.div`
  ${flex("flex", "column", "", "center")};
  position: fixed;
  min-height: 100vh;
  background-color: ${colors.white};
`;

export const Body = styled.div`
  ${flex("flex", "column", "", "center")};
  background-color: ${colors.grayf8};
  margin-top: ${pxToRem(18)};
  border-top-right-radius: ${pxToRem(40)};
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 ${pxToRem(4)} ${pxToRem(24)} #00000019;
`;

export const Header = styled.span`
  padding-top: ${pxToRem(18)};
  color: ${colors.background};
  font-family: "NanumSquare", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(18)};
`;

export const BodyTop = styled.div`
  width: ${pxToRem(284)};
  margin-top: ${pxToRem(30)};
`;
export const BodyTopWrapper = styled.div`
  ${flex("flex", "", "", "center")};
`;

export const BodyTopNumber = styled.span<{ opacity?: number }>`
  ${flex("inline-flex", "", "center", "center")};
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: ${pxToRem(40)};
  border: 3px solid #003091;
  color: ${colors.background};
  opacity: ${({ opacity }) => opacity || 1};
  font-weight: 800;
`;

export const BodyTopDots = styled.span`
  ${flex("inline-flex", "", "center", "center")};
  margin: 0 2px;
`;

export const Dot = styled.span`
  display: inline-block;
  font-size: ${pxToRem(25)};
  line-height: 1;
  vertical-align: middle;
  position: relative;
  top: -1px;
  opacity: 0.6;
  color: #003091;
  margin: 0 -5px;
`;

export const BodyTopText = styled.div<{ marginBottom?: number }>`
  margin-top: ${pxToRem(15)};
  font-size: ${pxToRem(15)};
  font-weight: 800;
  color: ${colors.background};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? pxToRem(marginBottom) : "0"};
`;

export const Text = styled.div<{ marginTop?: string }>`
  margin-top: ${({ marginTop }) => marginTop || pxToRem(11)};
  margin-left: ${pxToRem(10)};
  margin-bottom: ${pxToRem(8)};
  font-weight: 600;
  font-size: ${pxToRem(13)};
  color: ${colors.background};
`;

export const Input = styled.input<{ width?: string }>`
  padding-left: ${pxToRem(20)};
  width: ${({ width }) => width || pxToRem(284)};
  height: ${pxToRem(35)};
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.8px solid #d3d7e0;
  border-radius: 50px;
  opacity: 1;
`;

export const WarningMessage = styled.div`
  margin-left: ${pxToRem(10)};
  margin-top: ${pxToRem(8)};
  color: ${colors.warning};
  font-size: ${pxToRem(10)};
  font-weight: 600;
`;
export const SubmitButton = styled.button`
  width: 100vw;
  height: ${pxToRem(56)};
  background-color: ${colors.background};
  font-size: ${pxToRem(16)};
  color: ${colors.white};
  font-weight: 800;
  letter-spacing: ${pxToRem(2)};
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const BodyForm = styled.form<{
  paddingTop?: number;
  paddingBottom?: number;
}>`
  padding-top: ${({ paddingTop }) => pxToRem(paddingTop || 0)};
  padding-bottom: ${({ paddingBottom }) => pxToRem(paddingBottom || 0)};
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
`;

export const Message = styled.div`
  margin-left: ${pxToRem(10)};
  margin-top: ${pxToRem(14)};
  color: ${colors.background};
  font-size: ${pxToRem(10)};
  font-weight: 600;
`;
