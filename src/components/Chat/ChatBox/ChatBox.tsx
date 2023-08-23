import { Flex } from "~/styles";
import * as Styled from "./ChatBox.styles";

export const ChatBox = ({
  memberNickname,
  messageContent,
  messageSendingTime
}: Chat.DTO) => {
  return (
    <Styled.Container>
      <Styled.Profile />

      <Flex gap={5.27} direction="column">
        {memberNickname}
        <Styled.ChatBubble>{messageContent}</Styled.ChatBubble>
      </Flex>
    </Styled.Container>
  );
};
