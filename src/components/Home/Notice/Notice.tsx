import { usePosts } from "@server-state/home/notice/hooks/notice.queries";
import { useState } from "react";
import * as Styled from "./Notice.style";
import PostList from "./NoticeComponents/PostList";

const Notice = () => {
  const categoryMapping: Record<string, string> = {
    일반: "1",
    학사: "2",
    장학: "3",
    "취·창업": "4"
  };

  const [activeCategory, setActiveCategory] = useState("1");
  const {
    data: posts,
    isError,
    isLoading,
    isSuccess
  } = usePosts(activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(categoryMapping[category]);
  };

  return (
    <Styled.DocBox>
      <Styled.DocTop>
        {Object.keys(categoryMapping).map(category => (
          <Styled.DocTitleContainer
            key={category}
            onClick={() => handleCategoryClick(category)}
            isActive={activeCategory === categoryMapping[category]}
          >
            {category}
          </Styled.DocTitleContainer>
        ))}
      </Styled.DocTop>

      <Styled.NoticeContainer>
        {isSuccess ? (
          <PostList posts={posts} />
        ) : (
          <Styled.NoticeError>
            {isLoading
              ? "공지사항을 가지고 오고 있어요"
              : "공지사항을 가져오는 데 실패했어요"}
          </Styled.NoticeError>
        )}
      </Styled.NoticeContainer>
    </Styled.DocBox>
  );
};

export default Notice;
