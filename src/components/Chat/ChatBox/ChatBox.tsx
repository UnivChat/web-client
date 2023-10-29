import { Flex } from "~/styles";
import * as Styled from "./ChatBox.styles";

export const ChatBox = ({
  memberEmail,
  memberNickname,
  messageContent,
  currentUserEmail
}: Chat.DTO & { currentUserEmail: string }) => {
  const isCurrentUser = memberEmail === currentUserEmail;

  return (
    <div>
      {isCurrentUser ? (
        <Styled.ContainerRight>
          <Flex gap={5.27} direction="column">
            <Styled.ChatBubble>{messageContent}</Styled.ChatBubble>
          </Flex>
        </Styled.ContainerRight>
      ) : (
        <Styled.Container>
          <Styled.Profile svgName="chatProfile" />
          <Flex gap={5.27} direction="column">
            {memberNickname}
            <Styled.ChatBubble>{messageContent}</Styled.ChatBubble>
          </Flex>
        </Styled.Container>
      )}
    </div>
  );
};
