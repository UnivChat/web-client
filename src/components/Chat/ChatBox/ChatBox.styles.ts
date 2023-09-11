import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { flex } from "~/styles";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  ${flex({ gap: 4.3 })}
`;

export const ChatBubble = styled.div`
  padding: ${pxToRem(8)};

  border: 0.5px solid #707070;
  border-radius: ${pxToRem(31)};

  line-height: 150%;
`;

const profileColors = {
  default: "#C6C6C6",
  female: "#EBC0D0",
  male: "#C0D6EB"
};

export const Profile = styled(Svg)`
  width: ${pxToRem(36.8)};
  min-width: ${pxToRem(36.8)};
  height: ${pxToRem(36.8)};
  path {
    fill: #f00;
  }
`;
