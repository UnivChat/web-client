import Image from "next/image";
import React from "react";
import { DormitoryChat } from "@images/index";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./chat.styles";
import { Title } from "../home/Home.styles";

const ChatPage: NextPageWithLayout = () => {
  const { push } = useRouter();

  return (
    <>
      <Styled.CatChatTitle>CAT CHAT</Styled.CatChatTitle>
      <Styled.Container>
        {/* 라이브 채팅 박스 */}
        <Styled.LiveChatBox>
          <div className="span">
            <div>
              <Styled.Text>다 함께</Styled.Text>
              <Styled.BlueText> 실시간</Styled.BlueText>
              <Styled.Text>으로</Styled.Text>
            </div>
            <div>
              <Styled.RedTitle>라이브</Styled.RedTitle>
              <Styled.Title> 채팅</Styled.Title>
            </div>
          </div>
          <div className="icon">
            <Styled.LiveChatIcon svgName="liveChat" />
          </div>
        </Styled.LiveChatBox>
        {/* 클래스 채팅 박스 */}
        <Styled.BoxContainer>
          <Styled.ClassChatBox onClick={() => push("/chat/class")}>
            <div className="span">
              <div>
                <Styled.LittleBlueText>같은 수업 </Styled.LittleBlueText>
                <Styled.LittleText>듣는 사람 모여라</Styled.LittleText>
              </div>
              <Styled.BlueTitle>클래스</Styled.BlueTitle>
              <Styled.Title>채팅</Styled.Title>
            </div>
            <div className="icon">
              <Styled.ClassChatIcon svgName="classChat" />
            </div>
          </Styled.ClassChatBox>
          {/* 기숙사 채팅 박스 */}
          <Styled.DormitoryChatBox>
            <div className="span">
              <div>
                <Styled.LittleBlueText>기숙사생</Styled.LittleBlueText>
                <Styled.LittleText>들을 위한</Styled.LittleText>
              </div>
              <Styled.BlueTitle>기숙사</Styled.BlueTitle>
              <Styled.Title>채팅</Styled.Title>
            </div>
            <div className="icon">
              {/* <Styled.DomitoryChatIcon svgName="dormitoryChat" /> */}
              <Image
                src={DormitoryChat}
                alt="dormitory"
                width={85}
                height={95}
              />
            </div>
          </Styled.DormitoryChatBox>
        </Styled.BoxContainer>
        {/* 연애 채팅 박스 */}
        <Styled.BoxContainer>
          <Styled.LoveChatBox>
            <div className="span">
              <div>
                <Styled.LittleText>말 못할 </Styled.LittleText>
                <Styled.LittleBlueText>연애 고민</Styled.LittleBlueText>
                <Styled.LittleText>이 있다면?</Styled.LittleText>
              </div>
              <Styled.BlueTitle>연애상담</Styled.BlueTitle>
              <Styled.Title>채팅</Styled.Title>
            </div>
            <div className="icon">
              <Styled.LoveChatIcon svgName="loveChat" />
            </div>
          </Styled.LoveChatBox>
          {/* 1대1 채팅 박스 */}
          <Styled.PrivateChatBox>
            <div className="icon">
              <Styled.PrivateChatIcon svgName="privateChat" />
            </div>
            <div className="span">
              <Styled.BlueTitle>개인</Styled.BlueTitle>
              <Styled.Title>채팅</Styled.Title>
              <div>
                <Styled.LittleBlueText>1:1</Styled.LittleBlueText>
                <Styled.LittleText>로 대화하자!</Styled.LittleText>
              </div>
            </div>
          </Styled.PrivateChatBox>
        </Styled.BoxContainer>
      </Styled.Container>
    </>
  );
};

export default ChatPage;

ChatPage.layoutConfig = {
  case: "tab"
};
