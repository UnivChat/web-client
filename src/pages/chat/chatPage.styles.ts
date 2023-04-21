import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Svg } from "~/components/Common";

export const colors = {
  blue: "#003091",
  red: "#C90000",
  white: "#FFFFFF"
};

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
  margin-top: 3vh;
`;

export const Box = styled.div`
  overflow: hidden;
  width: 100%;
  height: 23.75vh;
  background: ${colors.white};
  box-shadow: 0px 5px 13px #00000029;
  border-radius: 40px;
  margin-right: 0.875vh;
  .span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const LiveChatBox = styled(Box)`
  height: 17.5vh;
  box-shadow: 0px 5px 13px #00000029;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  .span {
    align-items: flex-start;
    padding: 30px 0px 63px 26px;
    div:nth-child(1) {
      padding-bottom: 0.75vh;
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
      padding-bottom: 0.75vh;
    }
  }
  .icon {
    padding-top: 1.75vh;
  }
`;

export const LoveChatBox = styled(Box)`
  .span {
    align-items: flex-start;
    padding: 24px 0 0 17px;
    div:nth-child(1) {
      padding-bottom: 0.75vh;
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
      padding-bottom: 0.75vh;
    }
  }
  .icon {
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
  }
`;

export const PrivateChatBox = styled(Box)`
  .span {
    align-items: flex-start;
    padding-left: 17px;
    div {
      padding-top: 0.75vh;
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
  font-size: 1.5vh;
`;

export const BlueText = styled(Text)`
  color: ${colors.blue};
`;

export const LittleText = styled(Text)`
  font-size: 1.125vh;
`;

export const LittleBlueText = styled(LittleText)`
  color: ${colors.blue};
`;

export const Title = styled.span`
  ${sharedTextStyles};
  font-weight: 800;
  font-size: 3.25vh;
`;

export const BlueTitle = styled(Title)`
  color: ${colors.blue};
  padding-bottom: 1.2vh;
`;

export const RedTitle = styled(Title)`
  color: ${colors.red};
`;

/* Icon */
export const LiveChatIcon = styled(Svg)`
  width: 14.625vh;
  height: 9.375vh;
  opacity: 0.5;
`;

export const ClassChatIcon = styled(Svg)`
  width: 14.75vh;
  height: 10.625vh;
  opacity: 0.5;
`;

export const DomitoryChatIcon = styled(Svg)`
  width: 9vh;
  height: 9vh;
  opacity: 0.5;
`;

export const LoveChatIcon = styled(Svg)`
  width: 9vh;
  height: 9vh;
  opacity: 0.5;
`;

export const PrivateChatIcon = styled(Svg)`
  width: 12vh;
  height: 12vh;
  opacity: 0.5;
`;
