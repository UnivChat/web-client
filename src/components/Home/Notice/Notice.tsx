import { usePosts } from "@server-state/home/notice/hooks/notice.queries";
import { useState } from "react";
import * as Styled from "./Notice.style";
import NoticeContent from "./NoticeContent/NoticeContent";

const categories = ["일반", "학사", "장학", "취·창업"];

const Notice = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const {
    data: posts,
    isLoading,
    isSuccess
  } = usePosts(String(activeCategoryIndex + 1));

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index);
  };

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
        {isSuccess ? (
          <NoticeContent posts={posts} />
        ) : (
          <Styled.NoticeError>
            {isLoading
              ? "공지사항을 가지고 오고 있어요"
              : "공지사항을 가져오는 데 실패했어요"}
          </Styled.NoticeError>
        )}
      </Styled.NoticeContent>
    </Styled.NoticeBox>
  );
};

export default Notice;
