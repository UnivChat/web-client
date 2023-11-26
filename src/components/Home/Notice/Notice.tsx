import { useAllPosts } from "@server-state/home/notice/hooks/notice.queries";
import { useState } from "react";
import { Spinner } from "~/pages/home/facilities/Facilities.style";
import * as Styled from "./Notice.style";
import NoticeContent from "./NoticeContent/NoticeContent";

const categories = ["일반", "학사", "장학", "취·창업"];

const Notice = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const allPostsData = useAllPosts();

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index);
  };

  const currentPosts = allPostsData[activeCategoryIndex]?.data;
  const isLoading = allPostsData.some(query => query.isLoading);

  return (
    <Styled.NoticeBox>
      <Styled.NoticeTitleWrap>
        {categories.map((category, index) => (
          <Styled.NoticeTitle
            key={category}
            onClick={() => handleCategoryClick(index)}
            isActive={activeCategoryIndex === index}
          >
            {category}
          </Styled.NoticeTitle>
        ))}
      </Styled.NoticeTitleWrap>

      <Styled.NoticeContent>
        {currentPosts ? (
          <NoticeContent posts={currentPosts} />
        ) : (
          <Styled.NoticeError>
            {isLoading ? <Spinner /> : "공지사항을 가져오는 데 실패했어요"}
          </Styled.NoticeError>
        )}
      </Styled.NoticeContent>
    </Styled.NoticeBox>
  );
};

export default Notice;
