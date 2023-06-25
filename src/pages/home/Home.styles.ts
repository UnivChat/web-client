import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { flex } from "~/styles/utils/flex";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fb;
`;

export const Title = styled.div`
  padding-top: ${pxToRem(17)};
  margin-left: ${pxToRem(21)};
  font-family: "NanumSquare";
  font-weight: 600;
  color: #003197;
  font-size: ${pxToRem(20)};
`;

export const SelectContainer = styled.div`
  ${flex({
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  })};
  margin-top: ${pxToRem(29)};
  margin-left: ${pxToRem(27)};
  margin-right: ${pxToRem(27)};
  width: auto;
  height: ${pxToRem(78)};
  box-shadow: 0 ${pxToRem(5)} ${pxToRem(13)} #00000029;
  border-radius: ${pxToRem(14)};
`;

export const SelectBox = styled.div`
  ${flex({
    flexDirection: "column",
    alignItems: "center"
  })};
`;

export const SelectButton = styled.div`
  ${flex({
    justifyContent: "center",
    alignItems: "center"
  })};
  width: ${pxToRem(41)};
  height: ${pxToRem(41)};
  background-color: rgba(227, 227, 227, 0.45);
  border-radius: 50%;
`;

export const SelectIcon = styled(Svg)`
  fill: #e3e3e3;
  width: ${pxToRem(27)};
  height: ${pxToRem(27)};
`;

export const SelectText = styled.div`
  padding-top: ${pxToRem(5)};
  font-family: "NanumSquare";
  font-weight: 300;
  color: #767676;
  font-size: ${pxToRem(8)};
`;

export const SelectLine = styled.div`
  width: 0;
  height: ${pxToRem(55)};
  border-right: ${pxToRem(1)} solid #9f9f9f;
`;
