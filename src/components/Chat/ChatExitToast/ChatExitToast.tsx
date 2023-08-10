import React from "react";
import { pxToRem } from "~/utils";
import * as Styled from "../ChatToast/ChatToast.style";
import { SubText, ExitButton, ButtonWrap, Spacer } from "./ChatExitToast.style";

const ChatExitToast = () => {
  return (
    <Styled.Container>
      <Styled.IconWrap>
        <Styled.Icon svgName="toastexit" />
      </Styled.IconWrap>
      <Styled.Box>
        <Styled.BoxContent>
          <Styled.Text marginbottom={pxToRem(4)}>
            <span>
              채팅을
              <Styled.TextHilight> 삭제</Styled.TextHilight>
              하고 나가시겠습니까?
            </span>
          </Styled.Text>
          <SubText>삭제한 채팅방의 채팅 내역은 사라집니다.</SubText>
        </Styled.BoxContent>

        <ButtonWrap>
          <ExitButton backgroundColor="#DDD" color="#727272">
            취소
          </ExitButton>
          <Spacer />
          <ExitButton>나가기</ExitButton>
        </ButtonWrap>
      </Styled.Box>
    </Styled.Container>
  );
};

export default ChatExitToast;
