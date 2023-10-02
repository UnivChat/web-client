import { useState } from "react";
import type { NextPageWithLayout } from "~/pages/app.types";
import { Header } from "~/components/Common/UI/Header/Header";
import * as Styled from "./notification.styles";
import ToggleSwitch from "./toggleSwitch";
import { settings } from "./notification.constants";

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
      <Header.Back title="알림 설정" bgColor="white" />
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
