import React from "react";
import * as Styled from "./class.styles";
import type { ClassChatBoxProps } from "./classChatBox.types";

export const ClassChatBox = ({
  title,
  subTitle,
  chatCount,
  chatTime
}: ClassChatBoxProps) => {
  return (
    <Styled.ChatBox>
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ChatTime>{chatTime}</Styled.ChatTime>
      </div>
      <div>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
        <Styled.ChatCountContainer>
          <Styled.ChatCount>{chatCount}</Styled.ChatCount>
        </Styled.ChatCountContainer>
      </div>
    </Styled.ChatBox>
  );
};
