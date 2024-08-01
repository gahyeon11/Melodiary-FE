import React from "react";
import styled from "styled-components";
import { INotification } from "../../models/notification.model";

interface NotificationDropdownProps {
  notifications: INotification[];
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
              <p>{notification.content}</p>
            </NotificationContent>
            <Time>{notification.date}</Time>
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
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
  background: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fontFamily.kor};
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.grayDF};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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
  align-items: flex-start;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
  &:last-child {
    border-bottom: none;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  p {
    margin: 0;
    text-align: left;
  }
`;

const Time = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.gray999};
  font-size: 12px;
  white-space: nowrap;
`;

export default NotificationDropdown;
