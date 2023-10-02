import React from "react";
import { useAppDispatch } from "@client-state/hooks";
import { setIsInquiryModal } from "@client-state/config/inquiry/inquirySlice";
import { useRouter } from "next/router";
import * as Styled from "./Inquiry.styles";

const InquiryModal = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(setIsInquiryModal(false));
    router.push("/config");
  };
  return (
    <Styled.Bg>
      <Styled.DetailBox>
        <Styled.DetailBoxWrap>
          <Styled.DetailBoxTxt>문의가 접수되었습니다.</Styled.DetailBoxTxt>
          <Styled.DetailBoxTxt>확인 후 입력하신</Styled.DetailBoxTxt>
          <Styled.DetailBoxTxt>이메일로 답변드리겠습니다.</Styled.DetailBoxTxt>
          <Styled.Divider />
          <button type="button" onClick={handleClick}>
            <Styled.DetailBoxTxtBlue>확인</Styled.DetailBoxTxtBlue>
          </button>
        </Styled.DetailBoxWrap>
      </Styled.DetailBox>
    </Styled.Bg>
  );
};

export default InquiryModal;
