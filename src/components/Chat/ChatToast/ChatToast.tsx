import React from "react";
import { pxToRem } from "~/utils";
import * as CommonStyle from "../ChatToastCommon.style";

export const ChatToast = () => {
  return (
    <CommonStyle.Container>
      <CommonStyle.IconWrap>
        <CommonStyle.Icon svgName="toasttalk" />
      </CommonStyle.IconWrap>
      <CommonStyle.Box>
        <CommonStyle.BoxContent>
          <CommonStyle.Text>
            <span>
              익명 1님과
              <CommonStyle.TextHilight> 1:1 채팅 </CommonStyle.TextHilight>
              하시겠습니까?
            </span>
          </CommonStyle.Text>
          <CommonStyle.Button marginBottom={pxToRem(7)}>
            네, 할래요!
          </CommonStyle.Button>
          <CommonStyle.Button backgroundColor="#DDD" color="#727272">
            아니요 안할래요.
          </CommonStyle.Button>
        </CommonStyle.BoxContent>
      </CommonStyle.Box>
    </CommonStyle.Container>
  );
};

export default ChatToast;
