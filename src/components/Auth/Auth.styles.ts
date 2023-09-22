import styled from "@emotion/styled";
import { colors } from "~/constants";
import { flex } from "~/styles/utils/flex";
import { pxToRem } from "~/utils";
import type { StyleProps } from "./Auth.type";

export const Container = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}

  min-height: 100vh;

  background-color: ${colors.white};
`;

export const Body = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}

  width: 100vw;
  height: 100vh;
  margin-top: ${pxToRem(18)};

  border-top-right-radius: ${pxToRem(40)};
  background-color: ${colors.grayf8};
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
  ${flex({ alignItems: "center" })}
`;

export const BodyTopNumber = styled.span<StyleProps>`
  display: inline-flex;
  ${flex({ justifyContent: "center", alignItems: "center" })}

  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  color: ${colors.background};
  font-weight: 800;
  border: 3px solid #003091;
  border-radius: ${pxToRem(40)};

  opacity: ${({ opacity }) => opacity || 1};
`;

export const BodyTopDots = styled.span`
  display: inline-flex;
  ${flex({ justifyContent: "center", alignItems: "center" })}

  margin: 0 2px;
`;

export const Dot = styled.span`
  position: relative;
  vertical-align: middle;

  top: -1px;
  margin: 0 -5px;

  font-size: ${pxToRem(25)};
  color: #003091;
  opacity: 0.6;
`;

export const BodyTopText = styled.div<StyleProps>`
  margin-top: ${pxToRem(15)};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? pxToRem(marginBottom) : "0"};

  color: ${colors.background};
  font-size: ${({ fontSize = pxToRem(15) }) => fontSize};
  font-weight: 800;
`;

export const Text = styled.div<StyleProps>`
  margin-top: ${({ marginTop }) =>
    marginTop ? pxToRem(marginTop) : pxToRem(11)};
  margin-left: ${pxToRem(10)};
  margin-bottom: ${pxToRem(8)};

  color: ${colors.background};
  font-weight: 600;
  font-size: ${pxToRem(13)};
`;

export const Input = styled.input<StyleProps>`
  width: ${({ width }) => width || pxToRem(284)};
  height: ${pxToRem(35)};
  padding-left: ${pxToRem(20)};

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
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100vw;
  height: ${pxToRem(56)};

  color: ${colors.white};
  font-size: ${pxToRem(16)};
  font-weight: 800;
  letter-spacing: ${pxToRem(2)};
  background-color: ${colors.background};
`;

export const BodyForm = styled.form<StyleProps>`
  padding-top: ${({ paddingTop }) => pxToRem(paddingTop || 0)};
  padding-bottom: ${({ paddingBottom }) => pxToRem(paddingBottom || 0)};
`;

export const CheckAuthButton = styled.button<StyleProps>`
  width: ${pxToRem(231)};
  height: ${pxToRem(33)};
  margin-top: ${({ marginTop }) => pxToRem(marginTop || 20)};

  color: ${colors.white};
  font-size: ${pxToRem(11)};
  font-weight: 600;
  letter-spacing: ${pxToRem(0.7)};
  background-color: ${props => props.bgColor || colors.background};
  border: 1px solid;
  border-radius: ${pxToRem(50)};
`;

export const Span = styled.span`
  margin: ${pxToRem(61)} 0 ${pxToRem(20)};
`;

export const Message = styled.div`
  margin-left: ${pxToRem(10)};
  margin-top: ${pxToRem(14)};

  color: ${colors.background};
  font-size: ${pxToRem(10)};
  font-weight: 600;
`;

export const AcceptMessage = styled.div`
  margin-left: ${pxToRem(10)};
  margin-top: ${pxToRem(8)};

  color: ${colors.background};
  font-size: ${pxToRem(10)};
  font-weight: 600;
`;
