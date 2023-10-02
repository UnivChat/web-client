import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { pxToRem } from "~/utils";

export const Bg = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: ${pxToRem(10)};
  z-index: 10;
  width: ${pxToRem(322)};
  display: flex;
  flex-direction: column;
  padding-bottom: ${pxToRem(20)};
`;

export const TopWrapper = styled.div`
  width: ${pxToRem(322)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const DetailTitle = styled.div`
  padding: ${pxToRem(23)} 0 ${pxToRem(16)} 0;
  font-family: "NanumSquare", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(18)};
  color: #5a5a5a;
`;

export const Closed = styled.button`
  position: absolute;
  top: ${pxToRem(16)};
  right: ${pxToRem(25)};
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  font-size: ${pxToRem(19)};
  font-family: "NanumSquare", sans-serif;
  font-weight: 500;
`;

export const Divider = styled.div`
  width: ${pxToRem(279)};
  border: 1px solid #dfe4e6;
  margin-bottom: ${pxToRem(26)};
  margin-left: ${pxToRem(22)};
`;

export const List = styled.li`
  font-size: ${pxToRem(15)};
  margin-bottom: ${pxToRem(14)};
  position: relative;
  padding-left: ${pxToRem(32)};
`;

export const CalendarContainer = styled.div`
  height: ${pxToRem(394)};
`;

export const ClosedIcon = styled(Svg)`
  width: ${pxToRem(15)};
  height: ${pxToRem(15)};
  position: absolute;
  top: ${pxToRem(23)};
  right: ${pxToRem(30)};
`;
