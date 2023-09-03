import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  AcceptMessage,
  BodyForm,
  CheckAuthButton,
  Container
} from "~/components/Auth/Auth.styles";
import { useState } from "react";
import type { NextPageWithLayout } from "~/pages/app.types";
import { Header } from "~/components/Common/UI/Header/Header";
import { useNickNameChangeMutation } from "@server-state/config/hooks/nickcname.mutation";
import * as Auth from "~/components/Auth/Auth";
import * as CommonStyled from "../config.styles";

const NickName: NextPageWithLayout = () => {
  const [nickName, setNickName] = useState("");
  const [Message, setMessage] = useState<boolean | null>(null);

  const mutation = useNickNameChangeMutation();

  const handleSubmit = () => {
    if (nickName === "") {
      setMessage(false);
    } else {
      mutation.mutate(
        {
          nicknameValue: nickName
        },
        {
          onSuccess: () => {
            setNickName("");
            setMessage(true);
          },
          onError: () => {
            setNickName("");
            setMessage(false);
          }
        }
      );
    }
  };

  // 성공 실패 메세지
  let displayedMessage;
  if (Message === true) {
    displayedMessage = <AcceptMessage>닉네임이 변경 되었습니다.</AcceptMessage>;
  } else if (Message === false) {
    displayedMessage = (
      <Auth.WarningMessage>닉네임 변경에 실패하였습니다.</Auth.WarningMessage>
    );
  } else {
    displayedMessage = null;
  }

  return (
    <Container>
      <Header.Back title="닉네임 변경" bgColor="white" />
      <CommonStyled.ConfigBody>
        <BodyForm paddingTop={70} paddingBottom={8}>
          <CustomText>닉네임 변경하기</CustomText>
          <CustomInput
            name="nickname"
            required
            value={nickName}
            onChange={e => setNickName(e.target.value)}
          />
        </BodyForm>
        <CheckAuthButton onClick={handleSubmit}>확인</CheckAuthButton>
        {displayedMessage}
      </CommonStyled.ConfigBody>
    </Container>
  );
};

export default NickName;

NickName.layoutConfig = {
  case: "default"
};
