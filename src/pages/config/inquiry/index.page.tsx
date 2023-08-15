import { useForm } from "react-hook-form";
import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "~/pages/app.types";
import { colors } from "~/constants";
import * as Styled from "./Inquiry.styles";
import type { InquiryProps } from "./Inquiry.types";

const Inquiry: NextPageWithLayout = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      contents: "",
      email: "",
      privateCheck: false
    }
  });

  const contents = watch("contents", "");
  const email = watch("email", "");
  const privateCheck = watch("privateCheck", false);

  const isFormValid = () => {
    const emailPattern = /^\S+@\S+$/i;
    const isEmailValid = email && emailPattern.test(email);
    const isContentsValid = contents.trim().length > 0;
    const isPrivateCheckValid = privateCheck;

    return isEmailValid && isContentsValid && isPrivateCheckValid;
  };

  // TODO: 문의 접수 API 연동
  const onSubmit = (data: InquiryProps) => {
    console.log(data, "data");
  };

  return (
    <Styled.Container onSubmit={handleSubmit(onSubmit)}>
      <Header.Back bgColor={colors.white} title="문의하기" />
      <Styled.Title>문의 내용 작성</Styled.Title>
      <Styled.SubContainer>
        <Styled.SubTitle>내용</Styled.SubTitle>
        <Styled.ContentsInput {...register("contents", { required: true })} />
      </Styled.SubContainer>
      <Styled.SubContainer>
        <Styled.SubTitle>회답 받을 이메일</Styled.SubTitle>
        <Styled.EmailInput
          type="text"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
        />
      </Styled.SubContainer>
      <Styled.Title2>개인정보 수집 및 이용</Styled.Title2>
      <Styled.SubContainer>
        <Styled.CheckContainer>
          <Styled.CheckButton
            id="checkbox"
            type="checkbox"
            placeholder="privateCheck"
            {...register("privateCheck", { required: true })}
          />
          <Styled.CheckText htmlFor="checkbox">
            개인정보 수집 및 이용 동의(필수)
          </Styled.CheckText>
        </Styled.CheckContainer>

        <Styled.TextBox>
          문의처리를 위해 이메일, 회원정보, 기기정보, 문의내용에 포함된
          개인정보를 수집하며, 개인정보처리방침에 따라 3년 후 파기됩니다.
        </Styled.TextBox>
      </Styled.SubContainer>
      <Styled.Submit type="submit" disabled={!isFormValid()}>
        문의 접수하기
      </Styled.Submit>
    </Styled.Container>
  );
};

export default Inquiry;

Inquiry.layoutConfig = {
  case: "default"
};
