import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";

const flex = (
  displayType = "",
  flexDirection = "",
  justifyContent = "",
  alignItems = ""
) => `
    display: ${displayType};
    ${flexDirection ? `flex-direction: ${flexDirection};` : ""}
    ${justifyContent ? `justify-content: ${justifyContent};` : ""}
    ${alignItems ? `align-items: ${alignItems};` : ""}
  `;

export const Container = styled.div`
  ${flex("flex", "column", "", "center")};
  position: fixed;
  min-height: 100vh;
  background-color: ${colors.background};
`;

export const Header = styled.span`
  padding-top: ${pxToRem(18)};
  color: ${colors.white};
  font-family: "NanumSquare", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(18)};
`;

export const Body = styled.div`
  ${flex("flex", "column", "", "center")};
  background-color: ${colors.grayf8};
  margin-top: ${pxToRem(18)};
  border-top-right-radius: ${pxToRem(40)};
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 ${pxToRem(4)} ${pxToRem(24)} #00000019;
`;

export const BodyTop = styled.div<{ marginTop?: number }>`
  ${flex("flex", "row", "", "center")};
  margin-top: ${({ marginTop }) => (marginTop ? pxToRem(marginTop) : "0")};
  width: 100%;
  padding: 0 ${pxToRem(30)};
`;

export const Profile = styled(Svg)`
  margin-right: ${pxToRem(14)};
  width: ${pxToRem(62)};
  height: ${pxToRem(62)};
`;

export const BodyTopText = styled.div`
  font-size: ${pxToRem(20)};
  font-weight: 800;
  color: #313131;
`;

export const ButtonText = styled.span`
  width: ${pxToRem(62)};
  height: ${pxToRem(23)};
  ${flex("flex", "", "center", "center")};
  background-color: #dfe3e8;
  border-radius: ${pxToRem(16)};
  opacity: 0.8;
  color: #5c5d5f;
  font-weight: 600;
  font-size: ${pxToRem(10)};
  margin-left: auto;
`;

export const BodyTopDivider = styled.div`
  height: 1px;
  background-color: #707070;
  width: ${pxToRem(317)};
  margin-top: ${pxToRem(15)};
`;

export const ConfigWrapper = styled.div`
  ${flex("flex", "column", "", "")};
  width: 100%;
`;

export const Config = styled.div`
  margin-top: ${pxToRem(36)};
  margin-bottom: ${pxToRem(7)};
  margin-left: ${pxToRem(51)};
  font-size: ${pxToRem(13)};
  font-weight: 600;
  color: #a7a7a7;
`;

export const ListItem = styled.div`
  padding: ${pxToRem(21)} 0;
  margin-left: ${pxToRem(51)};
  font-size: ${pxToRem(17)};
  font-weight: 600;
  color: #313131;
`;
