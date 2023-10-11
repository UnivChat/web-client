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
  font-size: ${pxToRem(16)};

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
  height: ${pxToRem(40)};

  background-color: #fcfdff;

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(14)};

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
  padding: ${pxToRem(12)} ${pxToRem(16)};

  background-color: #f4f4f4;
  color: #5c5c5c;

  font-family: "NanumSquare";
  font-weight: 600;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(15)};
  word-break: keep-all;

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
  height: ${pxToRem(180)};
  background: #fff;
  z-index: 10;
  border: ${pxToRem(1)} solid #dfe4e6;
  border-radius: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};
`;

export const DetailBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${pxToRem(24)};
`;

export const DetailBoxTxt = styled.div`
  font-size: ${pxToRem(18)};
  font-family: "NanumSquare";
  font-weight: 600;
  line-height: ${pxToRem(25)};
`;

export const Divider = styled.div`
  margin-top: ${pxToRem(25)};
  width: ${pxToRem(322)};
  border: 1px solid #dfe4e6;
  margin-top: ${pxToRem(26)};
`;

export const DetailBoxTxtBlue = styled.div`
  margin-top: ${pxToRem(15)};
  font-size: ${pxToRem(18)};
  font-family: "NanumSquare";
  font-weight: 600;
  color: #003091;
`;

export const LoadingBg = styled.div`
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
