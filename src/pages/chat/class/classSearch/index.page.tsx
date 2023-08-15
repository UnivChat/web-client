import { Header } from "~/components/Common/UI/Header/Header";
import InfiniteScroll from "react-infinite-scroller";
import { useClassSearch } from "@server-state/class/hooks/classSearch.queries";
import { ClassBox } from "./ClassBox";
import { Search } from "./Search";
import * as Styled from "./classSearch.styles";
import type { ClassBoxProps } from "./classbox.types";

export default function ClassSearch() {
  const { data, fetchNextPage, hasNextPage } = useClassSearch();

  return (
    <>
      <Header.Back title="클래스 찾기" />
      <Styled.Container>
        <Search />
        <Styled.TitleContainer className="add-class">
          <Styled.Title>추가한 클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />

        <Styled.TitleContainer className="class">
          <Styled.Title>클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        <InfiniteScroll
          pageStart={0}
          loadMore={page => {
            fetchNextPage({ pageParam: page });
          }}
          hasMore={hasNextPage}
        >
          {data?.pages.map(page => {
            return page.map((classItem: ClassBoxProps) => {
              return (
                <ClassBox
                  key={classItem.classNumber}
                  title={classItem.className}
                  classNumber={classItem.classNumber}
                  classTime={classItem.classTime}
                  svgName="plus"
                />
              );
            });
          })}
        </InfiniteScroll>
      </Styled.Container>
    </>
  );
}

ClassSearch.layoutConfig = {
  case: "tab"
};
