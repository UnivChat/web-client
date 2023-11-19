import { Header } from "~/components/Common/UI/Header/Header";
import { useClassList } from "@server-state/class/hooks/classList.queries";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "../../app.types";
import { ClassChatBox } from "./ClassChatBox";
import * as Styled from "./class.styles";
import type { ClassList } from "./classSearch/classbox.types";

const ClassChatPage: NextPageWithLayout = () => {
  const { data: classList = [] }: { data?: ClassList } = useClassList() || {
    data: []
  };
  const router = useRouter();

  return (
    <>
      <Header.Back title="클래스 채팅" />
      <Styled.Button onClick={() => router.push("/chat/class/classSearch")}>
        <Styled.ClassPlusIcon svgName="classPlus" />
      </Styled.Button>

      <Styled.Container>
        {classList?.map(classItem => {
          return (
            <ClassChatBox
              key={classItem.classRoom.classNumber}
              classNumber={classItem.classRoom.classNumber}
              title={classItem.classRoom.className}
              classTime={classItem.classRoom.classTime}
              chatCount={classItem.numberOfUnreadMessage}
              chatTime={classItem.lastMessageSendingTime}
            />
          );
        })}
      </Styled.Container>
    </>
  );
};

export default ClassChatPage;

ClassChatPage.layoutConfig = {
  case: "tab"
};
