import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

export const DocBox = styled.div`
  height: ${pxToRem(228)};
  margin-top: ${pxToRem(16)};
  box-shadow: 0 ${pxToRem(5)} ${pxToRem(13)} #00000029;
  border-radius: ${pxToRem(14)};
`;

export const DocTop = styled.div`
  padding: ${pxToRem(16)} ${pxToRem(10)} 0px ${pxToRem(10)};
  ${flex({ justifyContent: "space-around" })}
`;

export const DocTitleContainer = styled.span`
  ${flex({ flexDirection: "column" })}
  cursor: pointer;
`;

export const DocSubject = styled.span`
  letter-spacing: 0px;
  color: ${props => (props["aria-selected"] ? "#003091" : "#919191")};
  font-family: "NanumGodic", sans-serif;
  font-size: ${pxToRem(14)};
  font-weight: 500;
  opacity: 1;
`;

export const Subline = styled.span`
  border: 1px solid #003091;
  opacity: 1;
  margin-top: ${pxToRem(4)};
`;

export const NoticeContainer = styled.div`
  padding: ${pxToRem(3)} 0px ${pxToRem(1)} ${pxToRem(23)};
`;

export const NoticeText = styled.div`
  letter-spacing: 0px;
  margin: ${pxToRem(16)} 0px;
  color: #1f1f1f;
  font-family: "NanumGodic", sans-serif;
  font-size: ${pxToRem(12)};
  opacity: 1;
`;

export const TruncatedText = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 95%;
`;

export const NoticeError = styled.div`
  ${flex({ alignItems: "center", justifyContent: "center" })}
  margin-top: ${pxToRem(83)};
  margin-right: ${pxToRem(22)};
  font-size: ${pxToRem(12)};
`;
