import styled from "@emotion/styled";
import { colors } from "~/constants/colors";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  min-height: 100vh;

  background-color: ${colors.grayf8};
`;

export const Title = styled.div`
  margin-top: ${pxToRem(32)};
  margin-left: ${pxToRem(35)};

  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(18)};
`;

export const SubContainer = styled.div`
  padding: 0 ${pxToRem(30)};
`;

export const SubTitle = styled.div`
  margin-top: ${pxToRem(20)};
  margin-left: ${pxToRem(8)};

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(13)};
`;

export const Input = styled.input`
  margin-top: ${pxToRem(6)};
  width: 100%;
  height: ${props => pxToRem(Number(props.height))};

  background-color: #fcfdff;

  border: ${pxToRem(1)} solid #d0d3d5;
  border-radius: ${pxToRem(9)};
`;

export const Title2 = styled.div`
  margin-top: ${pxToRem(42)};
  margin-left: ${pxToRem(36)};

  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(16)};
`;

export const CheckButton = styled.input`
  margin-top: ${pxToRem(18)};
  margin-left: ${pxToRem(15)};
  width: ${pxToRem(17)};
  height: ${pxToRem(17)};
`;

export const CheckText = styled.span`
  margin-left: ${pxToRem(11)};

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(13)};

  color: #5c5c5c;
`;

export const TextBox = styled.div`
  margin-top: ${pxToRem(16)};
  width: 100%;
  height: ${pxToRem(30)};

  background-color: #f4f4f4;

  border: ${pxToRem(1)} solid #d0d3d5;
  border-radius: ${pxToRem(9)};
`;

export const Text = styled.div`
  margin: ${pxToRem(7)} ${pxToRem(26)};

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(8)};

  color: #5c5c5c;
`;

export const Submit = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${pxToRem(55)}; // TODO: 값 바꿔야 함

  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(17)};

  color: #fafffd;
  background-color: #003091;
`;
