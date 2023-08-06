import type { Post } from "@server-state/home/notice/hooks/notice.queries";
import Link from "next/link";
import * as Styled from "../Notice.style";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div>
      <ul>
        {posts.map(post => (
          <Styled.NoticeText key={post.link}>
            <Link href={post.link} passHref>
              <Styled.TruncatedText>{post.title}</Styled.TruncatedText>
            </Link>
          </Styled.NoticeText>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
