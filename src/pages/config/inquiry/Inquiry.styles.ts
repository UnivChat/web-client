import styled from "@emotion/styled";
import { colors } from "~/constants/colors";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";

export const Container = styled.form`
  min-height: 100vh;

  background-color: ${colors.grayf8};
`;

export const Title = styled.div`
  margin-top: ${pxToRem(32)};
  padding: 0 ${pxToRem(35)};

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
  color: #5c5c5c;
`;

export const ContentsInput = styled.textarea`
  margin-top: ${pxToRem(6)};
  width: 100%;
  height: ${pxToRem(175)};
  resize: none;

  background-color: #fcfdff;

  border: ${pxToRem(1)} solid #d0d3d5;
  border-radius: ${pxToRem(9)};
`;

export const EmailInput = styled.input`
  margin-top: ${pxToRem(6)};
  width: 100%;
  height: ${pxToRem(30)};

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
  color: #5c5c5c;
`;

export const CheckContainer = styled.div`
  ${flex({ alignItems: "center" })}

  padding-left: ${pxToRem(15)};
  column-gap: ${pxToRem(11)};
  margin-top: ${pxToRem(18)};
`;

export const CheckButton = styled.input`
  width: ${pxToRem(17)};
  height: ${pxToRem(17)};

  border-radius: ${pxToRem(4)};
  /* border: 1px solid #d0d3d5; */
  border: 1px solid red;
`;

export const CheckText = styled.label`
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(13)};

  color: #5c5c5c;
`;

export const TextBox = styled.div`
  margin-top: ${pxToRem(16)};
  padding: ${pxToRem(7)} ${pxToRem(26)} ${pxToRem(5)};

  background-color: #f4f4f4;
  color: #5c5c5c;

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(8)};

  border: ${pxToRem(1)} solid #d0d3d5;
  border-radius: ${pxToRem(9)};
`;

export const Submit = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: ${pxToRem(20)} ${pxToRem(132)};

  font-family: "NanumSquare";
  font-weight: 800;
  font-size: ${pxToRem(17)};

  color: ${({ disabled }) => (disabled ? "#fafffd" : "#fafffd")};
  background-color: ${({ disabled }) => (disabled ? "#5c5c5c" : "#003091")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
