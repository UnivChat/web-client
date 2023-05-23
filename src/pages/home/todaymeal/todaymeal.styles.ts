import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/Flex";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fb;
`;

export const Day = styled.div`
  padding-top: ${pxToRem(73)};
  margin-left: ${pxToRem(27)};
  font-family: "NanumSquare";
  font-weight: 600;
  color: #767676;
  font-size: ${pxToRem(22)};
`;

export const MenuContainer = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuTitle = styled.div`
  margin-top: ${pxToRem(31)};
  margin-left: ${pxToRem(53)};
  display: flex;
  align-self: flex-start;
`;

export const Title = styled.span`
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(18)};
`;

export const TitlePlace = styled.span`
  font-weight: 600;
  font-size: ${pxToRem(9)};
  color: #767676;
  margin-left: ${pxToRem(9)};
  align-self: flex-end;
`;

export const MenuBox = styled.div`
  width: ${pxToRem(305)};
  height: ${pxToRem(241)};
  margin-top: ${pxToRem(8)};
  border-radius: ${pxToRem(16)};
  background-color: #ffffff;
  box-shadow: 0px 5px 13px #00000029;
`;

export const MenuTime = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${pxToRem(305)};
  height: ${pxToRem(48)};
  background-color: ${props => props.color};
  border-radius: ${pxToRem(16)} ${pxToRem(16)} 0 0;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimeTitle = styled.span`
  display: flex;
  justify-content: space-around;
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: #435479;
`;

export const TimeSub = styled.span`
  margin-top: ${pxToRem(4)};
  font-family: "NanumSquare";
  font-weight: 300;
  font-size: ${pxToRem(9)};
  color: #767676;
`;

export const MenuListBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: ${pxToRem(13)};
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(102)};
  height: ${pxToRem(167)};
  &:not(:last-child) {
    border-right: ${pxToRem(1)} solid #e3e8f4;
  }
`;

export const MenuEach = styled.div`
  margin-top: ${pxToRem(6)};
  font-family: "NanumSquare";
  font-weight: 300;
  font-size: ${pxToRem(10)};
  text-align: center;
  color: #393939;
`;
