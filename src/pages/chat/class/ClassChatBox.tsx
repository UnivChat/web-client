import React from "react";
import * as Styled from "./class.styles";

interface Props {
  title: string;
  subTitle: string;
  chatCount: number;
  chatTime: string;
}

const ClassChatBox = ({ title, subTitle, chatCount, chatTime }: Props) => {
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

export default ClassChatBox;
