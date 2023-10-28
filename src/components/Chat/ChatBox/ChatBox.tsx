import { Flex } from "~/styles";
import * as Styled from "./ChatBox.styles";

export const ChatBox = ({ memberNickname, messageContent }: Chat.DTO) => {
  return (
    <Styled.Container>
      <Styled.Profile svgName="chatProfile" />
      <Flex gap={5.27} direction="column">
        {memberNickname}
        <Styled.ChatBubble>{messageContent}</Styled.ChatBubble>
      </Flex>
    </Styled.Container>
  );
};
