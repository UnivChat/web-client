import { useRouter } from "next/router";
import * as Styled from "./class.styles";
import type { ClassChatBoxProps } from "./classChatBox.types";

export const ClassChatBox = ({
  title,
  classTime,
  chatCount,
  chatTime,
  classNumber
}: ClassChatBoxProps) => {
  const { push } = useRouter();

  return (
    <Styled.ChatBox
      onClick={() =>
        push({
          pathname: `/chat/room/${classNumber}`,
          query: { title: title }
        })
      }
    >
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ChatTime>{chatTime}</Styled.ChatTime>
      </div>
      <div>
        <Styled.SubTitle>{classTime}</Styled.SubTitle>
        <Styled.ChatCountContainer>
          <Styled.ChatCount>{chatCount}</Styled.ChatCount>
        </Styled.ChatCountContainer>
      </div>
    </Styled.ChatBox>
  );
};
