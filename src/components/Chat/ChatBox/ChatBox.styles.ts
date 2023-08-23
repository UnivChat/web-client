import styled from "@emotion/styled";
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

export const Profile = styled.div`
  width: ${pxToRem(36.8)};
  min-width: ${pxToRem(36.8)};
  height: ${pxToRem(36.8)};
  border-radius: 50%;
  border: 0.5px solid #707070;
`;
