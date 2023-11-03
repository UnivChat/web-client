import { Flex } from "~/styles";
import * as Styled from "./ChatBox.styles";

export const ChatBox = ({
  memberEmail,
  memberNickname,
  messageContent,
  currentUserEmail,
  showProfile = true
}: Chat.DTO & { currentUserEmail: string; showProfile?: boolean }) => {
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
          <Styled.Profile
            svgName="chatProfile"
            visibility={showProfile ? "visible" : "hidden"}
          />
          <Flex gap={5.27} direction="column">
            {showProfile && memberNickname}
            <Styled.ChatBubble>{messageContent}</Styled.ChatBubble>
          </Flex>
        </Styled.Container>
      )}
    </div>
  );
};
