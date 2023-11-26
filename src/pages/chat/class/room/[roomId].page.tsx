/* eslint-disable react/no-array-index-key */
import { setClassNum } from "@client-state/Chat/classNumberSlice";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ChatToast from "~/components/Chat/ChatToast/ChatToast";
import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "./Room.styles";
import { WebSocketProvider } from "./class.provider";
import { Room } from "./room";

const ChatRoomPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const { otoModalState } = useAppSelector(state => state.otoModal);

  const title = query.title as string;
  const { numberOfParticipant } = query;

  useEffect(() => {
    if (query.roomId) {
      dispatch(setClassNum(String(query.roomId)));
    }
  }, [dispatch, query]);

  // 멤버 조회

  return (
    <Styled.Container>
      {otoModalState ? <ChatToast /> : null}
      <Header.Back
        title={title}
        subTitle={numberOfParticipant?.toString()}
        bgColor="#FFF"
      />
      <Styled.Alert svgName="alert" />

      <WebSocketProvider>
        <Room />
      </WebSocketProvider>
    </Styled.Container>
  );
};

export default ChatRoomPage;

ChatRoomPage.layoutConfig = {
  case: "default"
};
