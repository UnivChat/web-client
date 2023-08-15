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

  ${flex({ flexDirection: "column" })}
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
  width: 100%;
  height: ${pxToRem(175)};
  resize: none;

  background-color: #fcfdff;

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(9)};

  &::placeholder {
    color: #cb7a7a;
  }

  margin-top: ${pxToRem(6)};
  padding: ${pxToRem(10)} ${pxToRem(12)};

  border: ${pxToRem(1)} solid #d0d3d5;
  border-radius: ${pxToRem(9)};
`;

export const EmailInput = styled.input`
  width: 100%;
  height: ${pxToRem(30)};

  background-color: #fcfdff;

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(9)};

  &::placeholder {
    color: #cb7a7a;
  }

  margin-top: ${pxToRem(5)};
  padding: 0 ${pxToRem(12)};

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

  margin-top: ${pxToRem(18)};
  padding-left: ${pxToRem(15)};
  gap: ${pxToRem(11)};
`;

export const CheckButton = styled.input`
  width: ${pxToRem(17)};
  height: ${pxToRem(17)};

  border-radius: ${pxToRem(4)};
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

export const ErrorLabel = styled.label`
  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(9)};

  color: #cb7a7a;

  margin-top: ${pxToRem(5)};
  padding: 0 ${pxToRem(12)};
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
