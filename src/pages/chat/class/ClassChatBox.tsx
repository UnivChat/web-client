import { useRouter } from "next/router";
import * as Styled from "./class.styles";
import type { ClassChatBoxProps } from "./classChatBox.types";

const formatDate = (dateString: string) => {
  if (!dateString || !dateString.includes(" ")) {
    return "";
  }
  // 날짜와 시간 분리
  const [datePart, timePart] = dateString.split(" ");
  const [year, month, day] = datePart.split("-").map(num => parseInt(num, 10));
  const [hours, minutes] = timePart.split(":").map(num => parseInt(num, 10));

  // 로컬 시간대의 날짜 객체 생성
  const date = new Date(year, month - 1, day, hours, minutes);

  const today = new Date();

  // 날짜가 오늘인지 확인
  if (date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
    // 오늘 날짜인 경우 시간 포맷 (오전/오후 HH:MM)
    const ampm = hours >= 12 ? "오후" : "오전";
    const hoursFormatted = hours % 12 || 12;
    const minutesFormatted = minutes.toString().padStart(2, "0");
    return `${ampm} ${hoursFormatted}:${minutesFormatted}`;
  }
  // 오늘이 아닌 경우 날짜 포맷 (YYYY. MM. DD.)
  return `${year}. ${month}. ${day}.`;
};

export const ClassChatBox = ({
  title,
  classTime,
  chatCount,
  chatTime,
  classNumber,
  numberOfParticipant
}: ClassChatBoxProps) => {
  const { push } = useRouter();

  return (
    <Styled.ChatBox
      onClick={() =>
        push({
          pathname: `/chat/class/room/${classNumber}`,
          query: { title, numberOfParticipant }
        })
      }
    >
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ChatTime>{formatDate(chatTime)}</Styled.ChatTime>
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
