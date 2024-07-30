import React from "react";
import styled from "styled-components";

interface Notification {
  id: number;
  message: string;
  time: string;
}

interface NotificationDropdownProps {
  notifications: Notification[];
}

const NotificationDropdown = React.forwardRef<
  HTMLDivElement,
  NotificationDropdownProps
>(({ notifications }, ref) => {
  return (
    <Dropdown ref={ref}>
      <NotificationHeader>업데이트</NotificationHeader>
      <NotificationBody>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id}>
            <NotificationContent>
              <p>{notification.message}</p>
            </NotificationContent>
            <Time>{notification.time}</Time>
          </NotificationItem>
        ))}
      </NotificationBody>
    </Dropdown>
  );
});

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grayDF};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
`;

const NotificationHeader = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const NotificationBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
  &:last-child {
    border-bottom: none;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const Time = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.gray999};
  font-size: 12px;
  white-space: nowrap;
`;

export default NotificationDropdown;
