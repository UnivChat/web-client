import styled from "@emotion/styled";
import { colors } from "~/constants/colors";
import { Svg } from "~/components/Common";
import { flex } from "~/styles";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  min-height: 100vh;

  background-color: ${colors.grayf8};
`;

export const ChatContainer = styled.div`
  ${flex({ direction: "column" })};
  padding: ${pxToRem(24)} ${pxToRem(22)};
  gap: ${pxToRem(20)};
`;

export const ChatHr = styled.hr`
  width: 90%;
  border: 0;
  border-bottom: ${pxToRem(0.8)} solid #707070;
`;

export const Date = styled.div`
  position: absolute;
  padding: 0 ${pxToRem(14)};
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${colors.grayf8};

  font-weight: 600;
  font-size: ${pxToRem(11)};
  color: #707070;
`;

export const InputContainer = styled.div`
  ${flex({ gap: 8, alignItems: "center" })};
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${pxToRem(51)};

  padding: ${pxToRem(8)};

  background-color: ${colors.white};
  box-shadow: 0 ${pxToRem(-17)} ${pxToRem(18)} #00000014;
`;

export const InputBox = styled.input`
  width: 100%;
  height: ${pxToRem(28)};
  padding: 0 ${pxToRem(14)};

  background-color: #f0f1f4;

  border-radius: ${pxToRem(30)};
`;

export const InputButton = styled(Svg)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const PlusButton = styled(Svg)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  margin-top: ${pxToRem(4)};
`;

export const Alert = styled(Svg)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  position: fixed;
  top: ${pxToRem(14)};
  right: ${pxToRem(24)};
  z-index: 10;
`;
