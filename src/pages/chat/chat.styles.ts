import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Svg } from "~/components/Common";

// Font
export const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 300;
`;

export const Container = styled.div`
  padding: 35px 35px 74px;
  border-top-right-radius: 40px;
`;

export const BoxContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Box = styled.div`
  overflow: hidden;
  width: 100%;
  height: 188px;
  background: "#FFFFFF";
  box-shadow: 0px 5px 13px #00000029;
  border-radius: 40px;
  margin-right: 7px;
  .span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const LiveChatBox = styled(Box)`
  height: 140px;
  box-shadow: 0px 5px 13px #00000029;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  .span {
    align-items: flex-start;
    padding: 30px 0px 63px 26px;
    div:nth-child(1) {
      padding-bottom: 6px;
    }
  }
  .icon {
    padding: 47px 16px 17px 0px;
  }
`;

export const ClassChatBox = styled(Box)`
  .span {
    padding: 24px 17px 0 0px;
    div:nth-child(1) {
      padding-bottom: 6px;
    }
  }
  .icon {
    padding-top: 14px;
  }
`;

export const LoveChatBox = styled(Box)`
  .span {
    align-items: flex-start;
    padding: 24px 0 0 17px;
    div:nth-child(1) {
      padding-bottom: 6px;
    }
  }
  .icon {
    display: flex;
    justify-content: flex-end;
  }
`;

export const DormitoryChatBox = styled(Box)`
  .span {
    align-items: flex-start;
    padding: 24px 0 0 17px;
    div {
      padding-bottom: 6px;
    }
  }
  .icon {
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
    opacity: 0.5;
  }
`;

export const PrivateChatBox = styled(Box)`
  .span {
    align-items: flex-start;
    padding-left: 17px;
    div {
      padding-top: 6px;
    }
  }
  .icon {
    display: flex;
    justify-content: flex-end;
  }
`;

/* 글씨 */

export const Text = styled.span`
  ${sharedTextStyles};
  font-size: 12px;
`;

export const BlueText = styled(Text)`
  color: #003091;
`;

export const LittleText = styled(Text)`
  font-size: 9px;
`;

export const LittleBlueText = styled(LittleText)`
  color: #003091;
`;

export const Title = styled.span`
  ${sharedTextStyles};
  font-weight: 800;
  font-size: 26px;
`;

export const BlueTitle = styled(Title)`
  color: #003091;
  padding-bottom: 9px;
`;

export const RedTitle = styled(Title)`
  color: #c90000;
`;

/* Icon */
export const LiveChatIcon = styled(Svg)`
  width: 117px;
  height: 75px;
  opacity: 0.5;
`;

export const ClassChatIcon = styled(Svg)`
  width: 118px;
  height: 85px;
  opacity: 0.5;
`;

export const LoveChatIcon = styled(Svg)`
  width: 72px;
  height: 72px;
  opacity: 0.5;
`;

export const PrivateChatIcon = styled(Svg)`
  width: 96px;
  height: 96px;
  opacity: 0.5;
`;
