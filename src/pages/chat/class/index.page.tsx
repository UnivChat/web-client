import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "../../app.types";
import { ClassChatBox } from "./ClassChatBox";
import * as Styled from "./class.styles";

const dummyData = [
  {
    title: "일반수학1및연습 [분반]",
    subTitle: "화 2~3(N301)",
    chatCount: 5,
    chatTime: "10:22"
  },
  {
    title: "일반수학1및연습 [분반]",
    subTitle: "화 2~3(N301)",
    chatCount: 5,
    chatTime: "10:22"
  },
  {
    title: "일반수학1및연습 [분반]",
    subTitle: "화 2~3(N301)",
    chatCount: 5,
    chatTime: "10:22"
  }
];

const ClassChatPage: NextPageWithLayout = () => {
  return (
    <>
      <Header.Back title="클래스 채팅" />

      <Styled.Container>
        {dummyData.map(data => (
          <ClassChatBox
            key={data.title}
            title={data.title}
            subTitle={data.subTitle}
            chatCount={data.chatCount}
            chatTime={data.chatTime}
          />
        ))}
      </Styled.Container>
    </>
  );
};

export default ClassChatPage;

ClassChatPage.layoutConfig = {
  case: "tab"
};
