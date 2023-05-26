import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Svg } from "~/components/Common";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

// Font
export const sharedTextStyles = css`
  font-family: "NanumSquare";
  font-weight: 300;
`;

export const Container = styled.div`
  padding: ${pxToRem(35)} ${pxToRem(35)} ${pxToRem(74)};
  border-top-right-radius: ${pxToRem(40)};
`;

export const BoxContainer = styled.div`
  ${flex()}
  margin-top: ${pxToRem(24)};
`;

export const Box = styled.div`
  overflow: hidden;
  width: 100%;
  height: ${pxToRem(188)};
  background: "#FFFFFF";
  box-shadow: 0px ${pxToRem(5)} ${pxToRem(13)} #00000029;
  border-radius: ${pxToRem(40)};
  margin-right: ${pxToRem(7)};
  .span {
    ${flex({ flexDirection: "column", alignItems: "flex-end" })}
  }
`;

export const LiveChatBox = styled(Box)`
  ${flex({ justifyContent: "space-between" })}
  height: ${pxToRem(140)};
  box-shadow: 0px ${pxToRem(5)} ${pxToRem(13)} #00000029;
  border-radius: ${pxToRem(40)};
  .span {
    ${flex({ alignItems: "flex-start" })}
    padding: ${pxToRem(30)} 0px ${pxToRem(63)} ${pxToRem(26)};
    div:nth-child(1) {
      padding-bottom: ${pxToRem(6)};
    }
  }
  .icon {
    padding: ${pxToRem(47)} ${pxToRem(16)} ${pxToRem(17)} 0px;
  }
`;

export const ClassChatBox = styled(Box)`
  .span {
    padding: ${pxToRem(24)} ${pxToRem(17)} 0px 0px;
    div:nth-child(1) {
      padding-bottom: ${pxToRem(6)};
    }
  }
  .icon {
    padding-top: ${pxToRem(14)};
  }
`;

export const LoveChatBox = styled(Box)`
  .span {
    ${flex({ alignItems: "flex-start" })}
    padding: ${pxToRem(24)} 0px 0px ${pxToRem(17)};
    div:nth-child(1) {
      padding-bottom: ${pxToRem(6)};
    }
  }
  .icon {
    ${flex({ justifyContent: "flex-end" })}
  }
`;

export const DormitoryChatBox = styled(Box)`
  .span {
    ${flex({ alignItems: "flex-start" })}
    padding: ${pxToRem(24)} 0 0 ${pxToRem(17)};
    div {
      padding-bottom: ${pxToRem(6)};
    }
  }
  .icon {
    ${flex({ justifyContent: "flex-end" })}
    padding-top: ${pxToRem(15)};
    opacity: 0.5;
  }
`;

export const PrivateChatBox = styled(Box)`
  .span {
    ${flex({ alignItems: "flex-start" })}
    padding-left: ${pxToRem(17)};
    div {
      padding-top: ${pxToRem(6)};
    }
  }
  .icon {
    ${flex({ justifyContent: "flex-end" })}
  }
`;

/* 글씨 */

export const Text = styled.span`
  ${sharedTextStyles};
  font-size: ${pxToRem(12)};
`;

export const BlueText = styled(Text)`
  color: #003091;
`;

export const LittleText = styled(Text)`
  font-size: ${pxToRem(9)};
`;

export const LittleBlueText = styled(LittleText)`
  color: #003091;
`;

export const Title = styled.span`
  ${sharedTextStyles};
  font-weight: 800;
  font-size: ${pxToRem(26)};
`;

export const BlueTitle = styled(Title)`
  color: #003091;
  padding-bottom: ${pxToRem(9)};
`;

export const RedTitle = styled(Title)`
  color: #c90000;
`;

/* Icon */
export const LiveChatIcon = styled(Svg)`
  width: ${pxToRem(117)};
  height: ${pxToRem(75)};
  opacity: 0.5;
`;

export const ClassChatIcon = styled(Svg)`
  width: ${pxToRem(118)};
  height: ${pxToRem(85)};
  opacity: 0.5;
`;

export const LoveChatIcon = styled(Svg)`
  width: ${pxToRem(72)};
  height: ${pxToRem(72)};
  opacity: 0.5;
`;

export const PrivateChatIcon = styled(Svg)`
  width: ${pxToRem(96)};
  height: ${pxToRem(96)};
  opacity: 0.5;
`;
