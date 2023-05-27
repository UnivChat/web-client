import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { Svg } from "~/components/Common";
import { flex } from "~/styles/utils/flex";

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
  height: ${pxToRem(33)};
  margin-top: ${pxToRem(80)};
  padding-left: ${pxToRem(12)};
  border-radius: ${pxToRem(25)};
  background-color: #ffffff;
  box-shadow: 0px 5px 13px #0000001c;
`;

export const searchIcon = styled(Svg)`
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
  font-size: ${pxToRem(9)};
`;

export const ContactContainer = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })};
`;

export const ContactTitle = styled.div`
  margin-top: ${pxToRem(39)};
  margin-bottom: ${pxToRem(28)};
`;

export const Title = styled.span`
  display: inline-block;
  width: ${pxToRem(318)};
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(15)};
  padding: ${pxToRem(15)};
  border-bottom: ${pxToRem(2)} solid #707070;
`;

export const ContactBox = styled.div`
  width: ${pxToRem(318)};
  ${flex({ flexDirection: "column" })};
`;

export const ContactList = styled.details`
  border-bottom: ${pxToRem(0.6)} solid #707070;
`;

export const ContactName = styled.summary`
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(13)};
  color: #313131;
  list-style: none;
  border-bottom: ${pxToRem(0.6)} solid #707070;
  padding: ${pxToRem(11)} 0 ${pxToRem(11)} ${pxToRem(16)};
`;

export const ContactSub = styled.p`
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(12)};
  color: #313131;
  background-color: #ffffff;
  padding: ${pxToRem(7)} 0 ${pxToRem(5)} ${pxToRem(16)};
`;

export const ContactSub2 = styled.p`
  font-family: "NanumSquare";
  font-weight: 100;
  font-size: ${pxToRem(12)};
  color: #313131;
  background-color: #ffffff;
  padding: 0 0 ${pxToRem(7)} ${pxToRem(16)};
`;
