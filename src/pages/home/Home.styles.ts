import styled from "@emotion/styled";
import { Svg } from "~/components/Common";
import { flex } from "~/styles/utils/flex";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: ${pxToRem(90)};
  background-color: #f8f9fb;
`;

export const Title = styled.div`
  padding-top: ${pxToRem(17)};
  margin-left: ${pxToRem(21)};

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(20)};
  color: #003197;
`;

export const SelectContainer = styled.div`
  height: ${pxToRem(78)};
  ${flex({
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  })};

  margin: ${pxToRem(29)} ${pxToRem(27)} 0 ${pxToRem(27)};

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
  width: ${pxToRem(41)};
  height: ${pxToRem(41)};
  ${flex({
    justifyContent: "center",
    alignItems: "center"
  })};

  background-color: rgba(227, 227, 227, 0.45);

  border-radius: 50%;
`;

export const SelectIcon = styled(Svg)`
  width: ${pxToRem(27)};
  height: ${pxToRem(27)};

  fill: #e3e3e3;
`;

export const SelectText = styled.div`
  padding-top: ${pxToRem(5)};

  font-family: "NanumSquare";
  font-weight: 300;
  font-size: ${pxToRem(8)};
  color: #767676;
`;

export const SelectLine = styled.div`
  height: ${pxToRem(55)};

  border-right: ${pxToRem(1)} solid #9f9f9f;
`;

export const HomeWrapper = styled.div`
  ${flex({
    flexDirection: "column"
  })};

  margin: ${pxToRem(29)} ${pxToRem(27)} 0 ${pxToRem(27)};
`;

export const HomeTitle = styled.div`
  margin-left: ${pxToRem(8)};

  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(20)};
  color: #313131;
`;

export const CalendarBox = styled.div`
  min-height: ${pxToRem(50)};

  margin-top: ${pxToRem(16)};

  box-shadow: 0 ${pxToRem(5)} ${pxToRem(13)} #00000029;

  border-radius: ${pxToRem(14)};
`;
