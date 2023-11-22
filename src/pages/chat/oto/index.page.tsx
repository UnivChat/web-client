import React from "react";
import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "~/pages/app.types";
import OtoChatBox from "./OtoChatBox";
import { Container } from "../class/class.styles";

const OtoChatPage: NextPageWithLayout = () => {
  return (
    <>
      <Header.Back title="개인 채팅" />

      <Container>
        <OtoChatBox />
      </Container>
    </>
  );
};

export default OtoChatPage;
