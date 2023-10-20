import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "../../app.types";
import { ClassChatBox } from "./ClassChatBox";
import * as Styled from "./class.styles";
import { useClassList } from "@server-state/class/hooks/classList.queries";
import { useRouter } from "next/router";

const ClassChatPage: NextPageWithLayout = () => {
  const { data: classList = [], refetch } = useClassList() || { data: [] };
  const router = useRouter();

  return (
    <>
      <Header.Back title="클래스 채팅" />
      <span onClick={() => router.push("/chat/class/classSearch")}>
        <Styled.ClassPlusIcon svgName="classPlus" />
      </span>

      <Styled.Container>
        {classList?.map((classItem: any) => {
          return (
            <ClassChatBox
              key={classItem?.classRoom?.classNumber}
              classNumber={classItem?.classRoom?.classNumber}
              title={classItem?.classRoom?.className}
              classTime={classItem.classRoom?.classTime}
              chatCount={classItem.classRoom?.credit}
              chatTime="10:22"
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
