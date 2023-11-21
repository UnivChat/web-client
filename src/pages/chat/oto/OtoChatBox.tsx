import React from "react";
import {
  ChatBox,
  ChatCount,
  ChatCountContainer,
  ChatTime,
  SubTitle,
  Title
} from "../class/class.styles";

const OtoChatBox = () => {
  return (
    <ChatBox>
      <div>
        <Title>이가대</Title>
        <ChatTime>오후 11:30</ChatTime>
      </div>
      <div>
        <SubTitle></SubTitle>
        <ChatCountContainer>
          <ChatCount>6</ChatCount>
        </ChatCountContainer>
      </div>
    </ChatBox>
  );
};

export default OtoChatBox;
