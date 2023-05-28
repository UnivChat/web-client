import * as Styled from "./Auth.styles";

// ... 부분
export const BodyTopsDots = () => {
  return (
    <Styled.BodyTopDots>
      <Styled.Dot>•</Styled.Dot>
      <Styled.Dot>•</Styled.Dot>
      <Styled.Dot>•</Styled.Dot>
    </Styled.BodyTopDots>
  );
};

// form 윗부분
export const BodyTop = ({ currentStep }: { currentStep: number }) => (
  <Styled.BodyTop>
    <Styled.BodyTopWrapper>
      <Styled.BodyTopNumber opacity={currentStep === 1 ? 1 : 0.6}>
        1
      </Styled.BodyTopNumber>
      <BodyTopsDots />
      <Styled.BodyTopNumber opacity={currentStep === 2 ? 1 : 0.6}>
        2
      </Styled.BodyTopNumber>
    </Styled.BodyTopWrapper>
    <Styled.BodyTopText>
      {currentStep === 1
        ? "기본 정보를 입력해주세요"
        : "학교 이메일을 인증해주세요"}
    </Styled.BodyTopText>
  </Styled.BodyTop>
);
