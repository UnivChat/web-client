import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";
import { colors } from "~/constants";
import { blueSearch } from "@svgs";

export const SearchIcon = styled(blueSearch)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const SearchContainer = styled.div`
  ${flex({ alignItems: "center" })}
  padding: 0 ${pxToRem(12)} 0 ${pxToRem(12)};
  background: ${colors.white};
  box-shadow: 0px ${pxToRem(5)} ${pxToRem(13)} #0000001c;
  border-radius: ${pxToRem(25)};
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: ${pxToRem(30)};
  flex: 1;
  margin-left: ${pxToRem(8)};
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(11)};
  color: #5979bb;
  &::placeholder {
    color: #5979bb;
  }
`;
