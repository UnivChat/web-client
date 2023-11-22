import { Flex } from "~/styles";
import * as Styled from "./ChatBox.styles";
import { useAppDispatch } from "@client-state/hooks";
import {
  setOtoMemberName,
  setOtoModalState
} from "@client-state/Chat/otoModalSlice";

export const ChatBox = ({
  memberEmail,
  memberNickname,
  messageContent,
  currentUserEmail,
  showProfile = true
}: Chat.DTO & { currentUserEmail: string; showProfile?: boolean }) => {
  const isCurrentUser = memberEmail === currentUserEmail;

  const dispatch = useAppDispatch();

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
          <span
            onClick={() => {
              if (showProfile) {
                dispatch(setOtoModalState(true));
                dispatch(setOtoMemberName(memberNickname));
              }
            }}
          >
            <Styled.Profile
              svgName="chatProfile"
              visibility={showProfile ? "visible" : "hidden"}
            />
          </span>
          <Flex gap={5.27} direction="column">
            {showProfile && memberNickname}
            <Styled.ChatBubble>{messageContent}</Styled.ChatBubble>
          </Flex>
        </Styled.Container>
      )}
    </div>
  );
};
