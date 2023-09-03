import {
  AcceptMessage,
  BodyForm,
  BodyTopText,
  CheckAuthButton,
  Container
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { Header } from "~/components/Common/UI/Header/Header";
import { useState } from "react";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import { pxToRem } from "~/utils";
import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import { useChangePasswordMutation } from "@server-state/config/hooks/password.mutation";
import * as Auth from "~/components/Auth/Auth";
import * as CommonStyled from "../config.styles";

const Password: NextPageWithLayout = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageInfo, setMessageInfo] = useState<{
    message: string;
    type: "success" | "warning" | null;
  }>({ message: "", type: null });

  const fetchUserInfoData = useFetchUserInfo();
  const result = fetchUserInfoData?.data?.data?.data.result || null;
  const mutation = useChangePasswordMutation();

  const handleClick = () => {
    if (password !== confirmPassword) {
      setMessageInfo({
        message: "비밀번호가 일치하지 않습니다",
        type: "warning"
      });
    } else if (password === "" || confirmPassword === "") {
      setMessageInfo({
        message: "비밀번호를 입력해주세요",
        type: "warning"
      });
    } else {
      mutation.mutate(
        {
          emailValue: result.email,
          passwordValue: confirmPassword
        },
        {
          onSuccess: () => {
            setPassword("");
            setConfirmPassword("");
            setMessageInfo({
              message: "비밀번호가 변경되었습니다",
              type: "success"
            });
          },
          onError: () => {
            setPassword("");
            setConfirmPassword("");
            setMessageInfo({
              message: "비밀번호 변경에 실패했습니다",
              type: "warning"
            });
          }
        }
      );
    }
  };

  // 성공 실패 메세지
  let displayedMessage;
  if (messageInfo.type === "success") {
    displayedMessage = <AcceptMessage>{messageInfo.message}</AcceptMessage>;
  } else if (messageInfo.type === "warning") {
    displayedMessage = (
      <Auth.WarningMessage>{messageInfo.message}</Auth.WarningMessage>
    );
  } else {
    displayedMessage = null;
  }

  return (
    <Container>
      <Header.Back title="비밀번호 변경" bgColor="white" />
      <CommonStyled.ConfigBody>
        <BodyForm paddingTop={38} paddingBottom={8}>
          <BodyTopText>비밀번호를 변경해주세요</BodyTopText>
          <BodyTopText marginBottom={40} fontSize={pxToRem(13)}>
            영문,숫자,특문이 2종류 이상 조합된8~20자
          </BodyTopText>
          {/* <CustomText>현재 비밀번호</CustomText>
          <CustomInput type="password" name="currentPassword" required />
          <Blank>
            <BodyTopsDots />
          </Blank> */}
          <CustomText>새 비밀번호 입력</CustomText>
          <CustomInput
            type="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <CustomText>새 비밀번호 확인</CustomText>
          <CustomInput
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {displayedMessage}
        </BodyForm>
        <CheckAuthButton onClick={handleClick} marginTop={45}>
          확인
        </CheckAuthButton>
      </CommonStyled.ConfigBody>
    </Container>
  );
};

export default Password;

Password.layoutConfig = {
  case: "tab"
};
