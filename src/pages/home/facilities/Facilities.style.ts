import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { pxToRem } from "~/utils";

interface DetailWrapProps {
  marginBottom?: number;
}

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${pxToRem(25)} ${pxToRem(31)} ${pxToRem(55)};
`;

export const Kimbox = styled.div`
  width: ${pxToRem(322)};
  height: ${pxToRem(360)};
  background: #fff;
  border: ${pxToRem(1)} solid #dfe4e6;
  border-radius: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};
`;

export const BuildingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClosedIcon = styled(Svg)`
  width: ${pxToRem(15)};
  height: ${pxToRem(15)};
  position: absolute;
  top: ${pxToRem(23)};
  right: ${pxToRem(30)};
`;

export const BuildingIcon = styled(Svg)`
  width: ${pxToRem(22)};
  height: ${pxToRem(22)};
  margin-right: ${pxToRem(6)};
`;

export const BuildingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(23)} 0 ${pxToRem(16)} 0;
`;

export const KimTitle = styled.div`
  font-family: "NanumSquare", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(14)};
  color: #313131;
`;

export const Divider = styled.div`
  width: ${pxToRem(279)};
  border: 1px solid #dfe4e6;
  margin-bottom: ${pxToRem(26)};
`;

export const Line = styled.div`
  display: flex;
  width: ${pxToRem(322)};
  margin-bottom: ${pxToRem(16)};
  justify-content: space-evenly;
`;
export const IconBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: ${pxToRem(52)};
  height: ${pxToRem(52)};
  background: #f5f6f7;
  border-radius: ${pxToRem(12)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CafeIcon = styled(Svg)`
  fill: #ffffff;
  width: ${pxToRem(29)};
  height: ${pxToRem(29)};
  ${({ svgName }) => svgName === "gym" && `margin-top: ${pxToRem(9)};`}
  ${({ svgName }) => svgName === "rest" && `margin-top: ${pxToRem(7)};`}
`;

export const IconTitle = styled.div`
  font-family: "NanumSquare", sans-serif;
  font-size: ${pxToRem(10)};
  color: #000000;
  margin-top: ${pxToRem(6)};
`;

export const Nbox = styled.div`
  width: ${pxToRem(322)};
  height: ${pxToRem(278)};
  background: #fff;
  border: ${pxToRem(1)} solid #dfe4e6;
  border-radius: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};
`;

export const Mbox = styled.div`
  display: flex;
  width: ${pxToRem(156)};
  height: ${pxToRem(186)};
  background: #fff;
  border: ${pxToRem(1)} solid #dfe4e6;
  border-radius: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};
`;

export const Mdivider = styled.div`
  width: ${pxToRem(120)};
  border: 1px solid #dfe4e6;
  margin-bottom: ${pxToRem(26)};
`;
export const MLine = styled.div`
  display: flex;
  width: ${pxToRem(156)};
  margin-bottom: ${pxToRem(16)};
  justify-content: space-evenly;
`;

export const MapIcon = styled(Svg)`
  fill: #ffffff;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: ${pxToRem(45)};
  box-shadow: 0px 0px ${pxToRem(6)} #0f30643e;
  position: fixed;
  top: ${pxToRem(5)};
  right: ${pxToRem(24)};
  z-index: 10;
`;

export const TopWrapper = styled.div`
  width: ${pxToRem(322)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

export const DetailTitle = styled.div`
  padding: ${pxToRem(23)} 0 ${pxToRem(16)} 0;
  font-family: "NanumSquare", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(18)};
  color: #5a5a5a;
`;

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

export const DetailBox = styled.div`
  width: ${pxToRem(322)};
  background: #fff;
  z-index: 10;
  border: ${pxToRem(1)} solid #dfe4e6;
  border-radius: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};
  position: relative;
`;

export const DetailContainer = styled.div`
  width: ${pxToRem(322)};
  padding-left: ${pxToRem(31)};
`;

export const DetailWrap = styled.div<DetailWrapProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => pxToRem(props.marginBottom || 14)};
`;

export const DetailText = styled.div`
  width: ${pxToRem(70)};
  height: ${pxToRem(25)};
  background: #003091;
  border-radius: ${pxToRem(5)};
  color: #fff;
  font-size: ${pxToRem(13)};
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: ${pxToRem(1)};
  margin-right: ${pxToRem(20)};
`;

interface DetailInfoProps {
  name?: string;
  svgName?: string;
}

export const DetailInfo = styled.div<DetailInfoProps>`
  height: ${pxToRem(20)};
  color: #434343;
  font-size: ${pxToRem(15)};
  ${({ name }) => name === "커뮤니티라운지" && `font-size: ${pxToRem(14)};`}
  display: flex;
  align-items: center;
`;
export const MapBox = styled.div`
  width: ${pxToRem(350)};
  height: ${pxToRem(434)};
  background: #fff;
  z-index: 10;
  border: ${pxToRem(1)} solid #dfe4e6;
  border-radius: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LoaderText = styled.p`
  font-size: ${pxToRem(16)};
`;

export const MapClosed = styled(Svg)`
  width: ${pxToRem(15)};
  height: ${pxToRem(15)};
  position: absolute;
  top: ${pxToRem(20)};
  right: ${pxToRem(23)};
  z-index: 25;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${pxToRem(335)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BgSvg = styled(Svg)<DetailInfoProps>`
  width: ${pxToRem(110)};
  height: ${pxToRem(110)};
  opacity: 0.05;
  position: absolute;
  right: ${pxToRem(15)};
  bottom: ${pxToRem(16)};
  ${({ svgName }) => svgName === "cafe" && `bottom: ${pxToRem(24)};`}
  ${({ svgName }) => svgName === "laundry" && `bottom: ${pxToRem(30)};`}
  ${({ svgName }) => svgName === "gym" && `bottom: ${pxToRem(-12)};`}
  ${({ svgName }) => svgName === "lounge" && `bottom: ${pxToRem(8)};`}
  ${({ svgName }) => svgName === "rest" && `bottom: ${pxToRem(-1)};`}
  ${({ svgName }) => svgName === "bank" && `bottom: ${pxToRem(22)};`}
  ${({ svgName }) => svgName === "certification" && `bottom: ${pxToRem(35)};`}
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${pxToRem(322)};
`;
