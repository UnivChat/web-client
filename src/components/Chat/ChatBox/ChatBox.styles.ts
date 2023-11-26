import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { flex } from "~/styles";
import { pxToRem } from "~/utils";
import type { ChatRoomStyledProps } from "./ChatBox.types";

export const Container = styled.div`
  ${flex({ gap: 4.3 })}
`;

export const ChatBubble = styled.div`
  padding: ${pxToRem(8)};

  border: 0.5px solid #707070;
  border-radius: ${pxToRem(11)};

  line-height: 150%;
`;

export const ChatName = styled.div<ChatRoomStyledProps>`
  height: ${pxToRem(9)};
  font-weight: 600;
  font-size: ${pxToRem(8)};
  color: #707070;
`;

const profileColors = {
  default: "#C6C6C6",
  female: "#EBC0D0",
  male: "#C0D6EB"
};

export const Profile = styled(Svg)<{ visibility: "visible" | "hidden" }>`
  visibility: ${props => props.visibility};
  width: ${pxToRem(36.8)};
  min-width: ${pxToRem(36.8)};
  height: ${pxToRem(36.8)};
  .cls-2 {
    fill: #f00;
  }
`;

export const ContainerRight = styled.div`
  ${flex({ gap: 4.3 })};
  justify-content: flex-end;
`;
