import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { flex } from "~/styles/utils/flex";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fb;
`;

export const SearchContainer = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })};
`;

export const SearchBox = styled.div`
  ${flex({ alignItems: "center" })};
  width: ${pxToRem(318)};
  height: ${pxToRem(45)};
  margin-top: ${pxToRem(20)};
  padding-left: ${pxToRem(12)};
  border-radius: ${pxToRem(15)};
  background-color: #ffffff;
  box-shadow: 0px 5px 13px #0000001c;
`;

export const SearchIcon = styled(Svg)`
  fill: #ffffff;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const SearchInput = styled.input`
  width: ${pxToRem(250)};
  margin-left: ${pxToRem(8)};
  font-family: "NanumSquare";
  font-weight: 600;
  color: #5979bb;
  font-size: ${pxToRem(12)};
`;

export const ContactContainer = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })};
`;

export const ContactTitle = styled.div`
  margin-top: ${pxToRem(29)};
  margin-bottom: ${pxToRem(28)};
`;

export const Title = styled.span`
  display: inline-block;
  width: ${pxToRem(318)};
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(18)};
  padding: ${pxToRem(15)};
  border-bottom: ${pxToRem(2)} solid #707070;
`;

export const ContactBox = styled.div`
  width: ${pxToRem(318)};
  ${flex({ flexDirection: "column" })};
  padding-bottom: ${pxToRem(50)};
`;

export const ErrorHandling = styled.div`
  ${flex({ justifyContent: "center" })};
  margin-top: ${pxToRem(240)};
  font-size: ${pxToRem(18)};
`;

export const ContactList = styled.details`
  border-bottom: ${pxToRem(0.6)} solid #707070;

  /* 사파리에서 기본 화살표 스타일 제거 */
  & > summary::-webkit-details-marker {
    display: none;
  }
`;

export const ContactName = styled.summary`
  ${flex({ justifyContent: "space-between" })}
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(15)};
  color: #313131;
  list-style: none;
  border-bottom: ${pxToRem(0.6)} solid #707070;
  padding: ${pxToRem(13)} ${pxToRem(16)};
`;
export const ArrowIcon = styled(Svg)`
  width: ${pxToRem(10)};
  height: ${pxToRem(10)};
`;

export const ContactSub = styled.p`
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: #313131;
  background-color: #ffffff;
  padding: ${pxToRem(7)} 0 ${pxToRem(5)} ${pxToRem(16)};
`;

export const ContactSub2 = styled.p`
  font-family: "NanumSquare";
  font-weight: 100;
  font-size: ${pxToRem(14)};
  color: #313131;
  background-color: #ffffff;
  padding: 0 0 ${pxToRem(7)} ${pxToRem(16)};
`;
