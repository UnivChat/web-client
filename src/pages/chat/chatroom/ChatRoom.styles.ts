import styled from "@emotion/styled";
import { colors } from "~/constants/colors";
import { Svg } from "~/components/Common";
import { flex } from "~/styles";
import { pxToRem } from "~/utils";
import type { ChatRoomStyledProps } from "./ChatRoom.types";

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
  border-top: ${pxToRem(0.8)} solid #707070;
`;

export const ChatBox = styled.div<ChatRoomStyledProps>`
  ${flex({ alignItems: "center" })};
  justify-content: ${props =>
    props.sender == "other"
      ? "flex-start"
      : props.sender == "me"
      ? "flex-end"
      : "flex-start"};
`;

export const ChatProfile = styled.div<ChatRoomStyledProps>`
  width: ${pxToRem(37)};
  height: ${pxToRem(37)};
  margin-right: ${pxToRem(4)};

  background-color: ${props =>
    props.gender == "male"
      ? "#C0D6EB"
      : props.gender == "female"
      ? "#EBC0D0"
      : props.gender == "private"
      ? "#C6C6C6"
      : "#C6C6C6"};

  border: ${pxToRem(0.5)} solid #707070;
  border-radius: 50%;
`;

export const ChatName = styled.div<ChatRoomStyledProps>`
  height: ${pxToRem(9)};
  font-weight: 600;
  font-size: ${pxToRem(8)};
  color: #707070;
`;

export const ChatText = styled.div<ChatRoomStyledProps>`
  margin-top: ${pxToRem(24)};
  padding: ${pxToRem(7)} ${pxToRem(15)};
  min-height: ${pxToRem(30)};
  min-width: ${pxToRem(30)};
  max-width: 60%;

  border: ${pxToRem(0.5)} solid #707070;
  border-radius: ${pxToRem(22)};

  font-weight: 300;
  font-size: ${pxToRem(13)};
  color: ${colors.black};
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

  background-color: #f0f1f4;

  border-radius: ${pxToRem(30)};
`;

export const InputButton = styled(Svg)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;
