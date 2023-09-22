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
import * as Auth from "~/components/Auth/Auth";
import * as CommonStyled from "../config.styles";
import { useMutation } from "@tanstack/react-query";
import { checkNicknameDuplicate, patchUserInfo } from "@server-state/config/api";

const NickName: NextPageWithLayout = () => {
  const [nickName, setNickName] = useState("");
  const [Message, setMessage] = useState<boolean | null>(null);

  const checkMutation = useMutation(checkNicknameDuplicate);
  const updateMutation = useMutation(patchUserInfo);

  const handleSubmit = async () => {
    if (nickName === "") {
      setMessage(false);
      return;
    }

    // 닉네임 중복 확인
    try {
      await checkMutation.mutateAsync(nickName);
    } catch (error) {
      setMessage(false);
      return; 
    }

    // 닉네임 변경
    updateMutation.mutate(
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
  };

  // 성공 실패 메세지
  let displayedMessage;
  if (Message === true) {
    displayedMessage = <AcceptMessage>닉네임이 변경 되었습니다.</AcceptMessage>;
  } else if (Message === false) {
    displayedMessage = (
      <Auth.WarningMessage>중복된 닉네임입니다. 다른 닉네임을 사용해주세요.</Auth.WarningMessage>
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
