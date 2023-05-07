import { useState } from "react";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "./notification.styles";
import ToggleSwitch from "./toggleSwitch";

const settings = [
  { label: "라이브 채팅 알림" },
  { label: "클래스 채팅 알림" },
  { label: "기숙사 채팅 알림" },
  { label: "연애 상담 채팅 알림" },
  { label: "1:1 채팅 알림" }
];

const Notification: NextPageWithLayout = () => {
  const [notificationStatus, setNotificationStatus] = useState(
    settings.map(() => false)
  );

  const handleToggle = (index: number, checked: boolean) => {
    setNotificationStatus(prevStatus => {
      const newStatus = [...prevStatus];
      newStatus[index] = checked;
      return newStatus;
    });
  };

  return (
    <Styled.Container>
      {settings.map((setting, index) => (
        <Styled.Wrapper key={setting.label} marginTop={index === 0 ? 58 : 51}>
          <Styled.Text>{setting.label}</Styled.Text>
          <ToggleSwitch
            onChange={(checked: boolean) => handleToggle(index, checked)}
          />
        </Styled.Wrapper>
      ))}
    </Styled.Container>
  );
};

export default Notification;

Notification.layoutConfig = {
  case: "tab"
};
