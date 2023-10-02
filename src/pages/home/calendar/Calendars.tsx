import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { startOfDay, endOfDay } from "date-fns";
import ko from "date-fns/locale/ko";
import enUS from "date-fns/locale/en-US";
import { useCalendar } from "@server-state/home/calendar/calendar.queries";
import type { CalendarType } from "@server-state/home/api";
import CustomToolbar from "./CustomToolbar";
import { EventModal } from "./EventModal";
import * as Styled from "./Calendars.style";

if (ko && ko.localize) {
  ko.localize.day = n => ["일", "월", "화", "수", "목", "금", "토"][n];
}

const localizer = dateFnsLocalizer({
  format,
  startOfWeek,
  getDay,
  locales: {
    ko,
    "en-US": enUS
  }
});

export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: string;
}

let currentColorIndex = 0;

const getNextColor = () => {
  const colors = [
    "#EFDFE9",
    "#2196F3",
    "#4CAF50",
    "#99AACC",
    "#7e75d0",
    "#ed97b1",
    "#5edc62",
    "#C9C3FF"
  ];
  const nextColor = colors[currentColorIndex % colors.length];

  currentColorIndex = (currentColorIndex + 1) % colors.length;

  return nextColor;
};

// 서버 데이터를 Event 형식에 맞게 변환
const convertServerDataToEvents = (serverData: CalendarType[]) => {
  const events: CalendarEvent[] = serverData.map(data => {
    let start: Date;
    let end: Date;

    // Handle different date formats
    if (data.date.includes("~")) {
      const [startStr, endStr] = data.date
        .split("~")
        .map((s: string) => s.trim());
      start = new Date(
        new Date().getFullYear(),
        parseInt(data.month, 10) - 1,
        parseInt(startStr.split(".")[0], 10)
      );
      end = new Date(
        new Date().getFullYear(),
        parseInt(data.month, 10) - 1,
        parseInt(endStr.split(".")[0], 10)
      );
    } else if (data.date.includes("-")) {
      const [startStr, endStr] = data.date
        .split("-")
        .map((s: string) => s.trim());
      start = new Date(
        new Date().getFullYear(),
        parseInt(startStr.split(".")[0], 10) - 1,
        parseInt(startStr.split(".")[1], 10)
      );
      end = new Date(
        new Date().getFullYear(),
        parseInt(endStr.split(".")[0], 10) - 1,
        parseInt(endStr.split(".")[1], 10)
      );
    } else {
      start = new Date(
        new Date().getFullYear(),
        parseInt(data.month, 10) - 1,
        parseInt(data.date.split(".")[0], 10)
      );
      end = start;
    }

    return {
      title: data.event,
      start: startOfDay(start),
      end: endOfDay(end),
      allDay: true,
      color: getNextColor()
    };
  });

  return events;
};

const Calendars = () => {
  const { data } = useCalendar();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[]>([]);
  const [showMultipleEvents, setShowMultipleEvents] = useState(false);

  useEffect(() => {
    if (data) {
      const convertedEvents = convertServerDataToEvents(data);
      setEvents(convertedEvents);
    }
  }, [data]);

  const eventStyleGetter = (event: CalendarEvent) => {
    const backgroundColor = event.color || "#2196F3";
    const style = {
      backgroundColor
    };
    return { style };
  };

  return (
    <div className="body">
      <Styled.CalendarContainer>
        <Calendar
          onShowMore={events => {
            setSelectedEvents(events);
            setShowMultipleEvents(true);
            setShowModal(true);
          }}
          onSelectEvent={event => {
            const isOneDayEvent =
              event.start.getTime() === startOfDay(event.end).getTime();

            if (isOneDayEvent) {
              setSelectedEvent(event);
              setShowMultipleEvents(false);
              setShowModal(true);
            }
          }}
          localizer={localizer}
          culture="ko"
          events={events}
          views={["month", "agenda"]}
          defaultView="month"
          components={{
            toolbar: CustomToolbar
          }}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
        />
      </Styled.CalendarContainer>
      {showModal && (
        <EventModal
          singleEvent={showMultipleEvents ? null : selectedEvent}
          multipleEvents={showMultipleEvents ? selectedEvents : null}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Calendars;
