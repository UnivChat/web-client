import { useEffect, useState } from "react";
import { Header } from "~/components/Common/UI/Header/Header";
import InfiniteScroll from "react-infinite-scroller";
import { useClassSearch } from "@server-state/class/hooks/classSearch.queries";
import { useClassList } from "@server-state/class/hooks/classList.queries";
import { ClassBox } from "./ClassBox";
import { Search } from "./Search";
import * as Styled from "./classSearch.styles";
import type { ClassBoxProps, ClassListItem } from "./classbox.types";

export default function ClassSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, fetchNextPage, hasNextPage } = useClassSearch(searchTerm);
  const { data: classList = [], refetch } = useClassList() || { data: [] };
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);

  const handleSuccess = () => {
    refetch();
  };

  return (
    <>
      <Header.Back title="클래스 찾기" />
      <Styled.Container>
        <Search value={searchTerm} onSearch={setSearchTerm} />
        <Styled.TitleContainer className="add-class">
          <Styled.Title>추가한 클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        {classList?.map((classItem: ClassListItem) => {
          return (
            <ClassBox
              key={classItem?.classRoom?.classNumber}
              title={classItem?.classRoom?.className}
              classNumber={classItem?.classRoom?.classNumber}
              classTime={classItem?.classRoom?.classTime}
              svgName="chatMinus"
              onSuccess={handleSuccess}
            />
          );
        })}

        <Styled.TitleContainer className="class">
          <Styled.Title>클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        <InfiniteScroll
          pageStart={0}
          loadMore={page => fetchNextPage({ pageParam: page })}
          hasMore={hasNextPage}
          initialLoad={false}
        >
          {data?.pages.length ? (
            data.pages.map(page => {
              return page.map((classItem: ClassBoxProps) => {
                return (
                  <ClassBox
                    key={classItem.classNumber}
                    title={classItem.className}
                    classNumber={classItem.classNumber}
                    classTime={classItem.classTime}
                    svgName="plus"
                    onSuccess={handleSuccess}
                  />
                );
              });
            })
          ) : (
            <div>{}</div>
          )}
        </InfiniteScroll>
      </Styled.Container>
    </>
  );
}

ClassSearch.layoutConfig = {
  case: "tab"
};
