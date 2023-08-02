import type { Post } from "@server-state/home/notice/hooks/notice.queries";
import * as Styled from "../Notice.style";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const truncateTitle = (title: string) => {
    return title.length > 30 ? `${title.slice(0, 30)}...` : title;
  };

  return (
    <div>
      <ul>
        {posts.map(post => (
          <Styled.NoticeText key={post.link}>
            <a href={post.link} target="_blank" rel="noreferrer">
              {truncateTitle(post.title)}
            </a>
          </Styled.NoticeText>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
