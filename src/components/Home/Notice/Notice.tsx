import React, { useState } from "react";
import { usePosts } from "@server-state/home/notice/hooks/notice.queries";
import * as Styled from "./Notice.style";
import PostList from "./NoticeComponents/PostList";

const Notice = () => {
  const categoryMapping: { [key: string]: string } = {
    일반: "1",
    학사: "2",
    장학: "3",
    "취·창업": "4"
  };

  const [activeCategory, setActiveCategory] = useState("1");
  const { data: posts, isError, isLoading } = usePosts(activeCategory);

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
            aria-selected={activeCategory === categoryMapping[category]}
          >
            <Styled.DocSubject
              aria-selected={activeCategory === categoryMapping[category]}
            >
              {category}
            </Styled.DocSubject>
            {activeCategory === categoryMapping[category] && <Styled.Subline />}
          </Styled.DocTitleContainer>
        ))}
      </Styled.DocTop>

      <Styled.NoticeContainer>
        {isLoading && (
          <Styled.NoticeError>공지사항을 가지고 오고 있어요</Styled.NoticeError>
        )}
        {isError && (
          <Styled.NoticeError>
            공지사항을 가져오는 데 실패했어요
          </Styled.NoticeError>
        )}
        {activeCategory && <PostList posts={posts || []} />}
      </Styled.NoticeContainer>
    </Styled.DocBox>
  );
};

export default Notice;
