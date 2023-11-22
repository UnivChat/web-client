import React from "react";
import { pxToRem } from "~/utils";
import * as CommonStyle from "../ChatToastCommon.style";
import { Bg } from "~/pages/home/facilities/Facilities.style";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import { setOtoModalState } from "@client-state/Chat/otoModalSlice";

export const ChatToast = () => {
  const dispatch = useAppDispatch();
  const { otoMemberName } = useAppSelector(state => state.otoModal);
  return (
    <Bg>
      <CommonStyle.Container>
        <CommonStyle.IconWrap>
          <CommonStyle.Icon svgName="toasttalk" />
        </CommonStyle.IconWrap>
        <CommonStyle.Box>
          <CommonStyle.BoxContent>
            <CommonStyle.Text>
              <span>
                {otoMemberName}님과
                <CommonStyle.TextHilight> 1:1 채팅 </CommonStyle.TextHilight>
                하시겠습니까?
              </span>
            </CommonStyle.Text>
            <CommonStyle.Button marginBottom={pxToRem(14)}>
              네, 할래요!
            </CommonStyle.Button>
            <CommonStyle.Button
              backgroundColor="#DDD"
              color="#727272"
              onClick={() => dispatch(setOtoModalState(false))}
            >
              아니요 안할래요.
            </CommonStyle.Button>
          </CommonStyle.BoxContent>
        </CommonStyle.Box>
      </CommonStyle.Container>
    </Bg>
  );
};

export default ChatToast;
