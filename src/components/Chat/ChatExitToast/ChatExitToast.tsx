import { Bg } from "~/pages/home/facilities/Facilities.style";
import { pxToRem } from "~/utils";
import * as CommonStyle from "../ChatToastCommon.style";
import * as Styled from "./ChatExitToast.style";

export const ChatExitToast = () => {
  return (
    <Bg>
      <CommonStyle.ExitContainer>
        <CommonStyle.IconWrap>
          <CommonStyle.Icon svgName="toastexit" />
        </CommonStyle.IconWrap>
        <CommonStyle.ExitBox>
          <CommonStyle.BoxContent>
            <CommonStyle.Text marginBottom={pxToRem(8)}>
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
            <CommonStyle.Spacer width={pxToRem(20)} />
            <CommonStyle.ExitButton>나가기</CommonStyle.ExitButton>
          </Styled.ButtonWrap>
        </CommonStyle.ExitBox>
      </CommonStyle.ExitContainer>
    </Bg>
  );
};

export default ChatExitToast;
