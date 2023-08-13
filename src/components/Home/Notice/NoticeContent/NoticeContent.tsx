import type { Post } from "@server-state/home/notice/hooks/notice.queries";
import Link from "next/link";
import * as Styled from "../Notice.style";

interface PostListProps {
  posts: Post[];
}

const NoticeContent = ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map((post, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Styled.NoticeText key={index}>
          <Link href={post.link} passHref>
            <Styled.TruncatedText>{post.title}</Styled.TruncatedText>
          </Link>
        </Styled.NoticeText>
      ))}
    </ul>
  );
};

export default NoticeContent;
