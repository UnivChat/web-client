import React from "react";
import type { CalendarEvent } from "./Calendars";
import * as Styled from "./Calendars.style";

interface EventModalProps {
  singleEvent: CalendarEvent | null;
  multipleEvents: CalendarEvent[] | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  singleEvent,
  multipleEvents,
  onClose
}) => {
  let content;

  if (multipleEvents) {
    content = multipleEvents.map(event => (
      <Styled.List key={event.title}>{event.title}</Styled.List>
    ));
  } else if (singleEvent) {
    content = <Styled.List>{singleEvent.title}</Styled.List>;
  } else {
    content = "No events";
  }

  return (
    <Styled.Bg>
      <Styled.Container>
        <Styled.TopWrapper>
          <Styled.DetailTitle>학사일정</Styled.DetailTitle>
          <Styled.Closed onClick={onClose}>X</Styled.Closed>
        </Styled.TopWrapper>
        <Styled.Divider />
        <ul>{content}</ul>
      </Styled.Container>
    </Styled.Bg>
  );
};
