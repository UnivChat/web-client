import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "../../app.types";
import { ClassChatBox } from "./ClassChatBox";
import * as Styled from "./class.styles";
import { useFetchClassChatList } from "./hooks/queries";

const ClassChatPage: NextPageWithLayout = () => {
  const { data } = useFetchClassChatList();

  return (
    <>
      <Header.Back title="클래스 채팅" />

      <Styled.Container>
        {data?.result.map(data => (
          <ClassChatBox
            key={data.classNumber}
            classNumber={data.classNumber}
            title={data.className}
            classTime={data.classTime}
            chatCount={data.credit}
            chatTime="10:22"
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
