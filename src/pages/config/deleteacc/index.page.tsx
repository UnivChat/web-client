import { useState } from "react";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  AcceptMessage,
  BodyForm,
  CheckAuthButton,
  Container
} from "~/components/Auth/Auth.styles";
import { Header } from "~/components/Common/UI/Header/Header";
import { useDeleteAcc } from "@server-state/config/hooks/deleteacc.mutation";
import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import { deleteCookie } from "cookies-next";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import { useRouter } from "next/router";
import * as Auth from "~/components/Auth/Auth";
import type { NextPageWithLayout } from "../../app.types";
import * as CommonStyled from "../config.styles";

const DeleteAcc: NextPageWithLayout = () => {
  const DeleteMutation = useDeleteAcc();
  const [password, setPassword] = useState("");
  const [Message, setMessage] = useState<boolean | null>(null);
  const { data } = useFetchUserInfo();

  const { push } = useRouter();

  const handleSubmit = () => {
    DeleteMutation.mutate(
      {
        email: data?.result.email,
        password
      },
      {
        onSuccess: () => {
          setMessage(true);
          setTimeout(() => {
            deleteCookie(AC_TOKEN_KEY);
            deleteCookie(RE_TOKEN_KEY);
            push("/auth/sign-in");
          }, 1000);
        },
        onError: () => {
          setMessage(false);
        }
      }
    );
  };

  // 성공 실패 메세지
  let displayedMessage;
  if (Message === true) {
    displayedMessage = <AcceptMessage>회원탈되가 완료되었습니다</AcceptMessage>;
  } else if (Message === false) {
    displayedMessage = (
      <Auth.WarningMessage>
        비밀번호를 올바르게 입력해주세요
      </Auth.WarningMessage>
    );
  } else {
    displayedMessage = null;
  }

  return (
    <Container>
      <Header.Back title="회원탈퇴" bgColor="white" />
      <CommonStyled.ConfigBody>
        <BodyForm paddingTop={70} paddingBottom={8}>
          <CustomText>계정 비밀번호</CustomText>
          <CustomInput
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </BodyForm>
        <CheckAuthButton onClick={handleSubmit}>확인</CheckAuthButton>
        {displayedMessage}
      </CommonStyled.ConfigBody>
    </Container>
  );
};

export default DeleteAcc;

DeleteAcc.layoutConfig = {
  case: "tab"
};
