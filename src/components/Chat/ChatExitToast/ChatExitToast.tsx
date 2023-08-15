import React from "react";
import { pxToRem } from "~/utils";
import * as Styled from "./ChatExitToast.style";
import * as CommonStyle from "../ChatToastCommon.style";

export const ChatExitToast = () => {
  return (
    <CommonStyle.Container>
      <CommonStyle.IconWrap>
        <CommonStyle.Icon svgName="toastexit" />
      </CommonStyle.IconWrap>
      <CommonStyle.Box>
        <CommonStyle.BoxContent>
          <CommonStyle.Text marginBottom={pxToRem(4)}>
            <span>
              채팅을
              <CommonStyle.TextHilight> 삭제</CommonStyle.TextHilight>
              하고 나가시겠습니까?
            </span>
          </CommonStyle.Text>

          <Styled.SubText>
            삭제한 채팅방의 채팅 내역은 사라집니다.
          </Styled.SubText>
        </CommonStyle.BoxContent>

        <Styled.ButtonWrap>
          <CommonStyle.ExitButton backgroundColor="#DDD" color="#727272">
            취소
          </CommonStyle.ExitButton>
          <CommonStyle.Spacer width={pxToRem(18)} />
          <CommonStyle.ExitButton>나가기</CommonStyle.ExitButton>
        </Styled.ButtonWrap>
      </CommonStyle.Box>
    </CommonStyle.Container>
  );
};

export default ChatExitToast;
