import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

export const SubText = styled.div`
  font-size: ${pxToRem(8)};
  color: #727272;
`;

export const ButtonWrap = styled.div`
  margin-top: ${pxToRem(17)};
  ${flex({ justifyContent: "center" })}
`;
