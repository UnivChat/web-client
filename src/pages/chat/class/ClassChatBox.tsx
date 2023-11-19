import { useRouter } from "next/router";
import * as Styled from "./class.styles";
import type { ClassChatBoxProps } from "./classChatBox.types";

export const ClassChatBox = ({
  title,
  classTime,
  chatCount,
  chatTime,
  classNumber
}: ClassChatBoxProps) => {
  const { push } = useRouter();

  // TODO: 크롬에서만 시간이 보임 사파리에서 안보임
  const safeDate = dateString => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
  };

  const chatDate = safeDate(chatTime);
  const currentDate = new Date();

  const formatDate = date => {
    if (!date) return "";

    const isToday =
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear();
    const isYesterdayOrBefore =
      currentDate.getTime() - date.getTime() > 24 * 60 * 60 * 1000;

    if (isToday) {
      // 시간만 반환
      return new Intl.DateTimeFormat("ko-KR", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    } else if (isYesterdayOrBefore) {
      // 어제 이후 이전 날짜들은 날짜만 반환
      return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(date);
    }
  };

  return (
    <Styled.ChatBox
      onClick={() =>
        push({
          pathname: `/chat/room/${classNumber}`,
          query: { title }
        })
      }
    >
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ChatTime>{formatDate(chatDate)}</Styled.ChatTime>
      </div>
      <div>
        <Styled.SubTitle>{classTime}</Styled.SubTitle>
        {chatCount !== 0 ? (
          <Styled.ChatCountContainer>
            <Styled.ChatCount>{chatCount}</Styled.ChatCount>
          </Styled.ChatCountContainer>
        ) : null}
      </div>
    </Styled.ChatBox>
  );
};
