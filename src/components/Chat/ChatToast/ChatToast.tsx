import React from "react";
import { pxToRem } from "~/utils";
import * as Styled from "./ChatToast.style";

const ChatToast = () => {
  return (
    <Styled.Container>
      <Styled.IconWrap>
        <Styled.Icon svgName="toasttalk" />
      </Styled.IconWrap>
      <Styled.Box>
        <Styled.BoxContent>
          <Styled.Text>
            <span>
              익명 1님과
              <Styled.TextHilight> 1:1 채팅 </Styled.TextHilight>
              하시겠습니까?
            </span>
          </Styled.Text>
          <Styled.Button marginbottom={pxToRem(7)}>네, 할래요!</Styled.Button>
          <Styled.Button backgroundColor="#DDD" color="#727272">
            아니요 안할래요.
          </Styled.Button>
        </Styled.BoxContent>
      </Styled.Box>
    </Styled.Container>
  );
};

export default ChatToast;
