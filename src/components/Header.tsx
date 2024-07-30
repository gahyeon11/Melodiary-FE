import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  BiBell,
  BiEdit,
  BiHeadphone,
  BiHelpCircle,
  BiSolidChevronDown,
  BiSearch,
} from "react-icons/bi";
import profileImage from "../assets/img/cat.jpg";
import NotificationDropdown from "./NotificationDropdown";

function Header() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const notificationDropdownRef = useRef<HTMLDivElement>(null);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target as Node)
    ) {
      setIsProfileDropdownOpen(false);
    }
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target as Node)
    ) {
      setIsNotificationDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      message: "00님이 회원님이 회원님에게 친구 요청했습니다.",
      time: "22시간",
    },
    {
      id: 2,
      message: "00님이 회원님의 일기에 댓글을 작성했습니다.",
      time: "4일",
    },
    { id: 3, message: "00님이 새로운 일기를 작성했습니다.", time: "5일" },
    { id: 4, message: "00님님이 회원님을 멘션했습니다.", time: "1주" },
    { id: 5, message: "00님이 친구 요청을 거절했습니다.", time: "1주" },
    { id: 6, message: "00님이 친구 요청을 거절했습니다.", time: "1주" },
    { id: 7, message: "00님이 친구 요청을 거절했습니다.", time: "1주" },
    { id: 8, message: "00님이 친구 요청을 거절했습니다.", time: "1주" },
    { id: 9, message: "00님이 친구 요청을 거절했습니다.", time: "1주" },
  ];

  return (
    <HeaderStyle>
      <Link to="/">
        <Logo>
          <BiHeadphone size={24} />
          <h1>MeloDiary</h1>
        </Logo>
      </Link>
      <Container>
        <SearchContainer>
          <BiSearch size={20} />
          <SearchInput type="text" placeholder="Search mate" />
        </SearchContainer>
        <ButtonContainer>
        <Button size="medium" schema="primary">
          <BiEdit size={20} /> Create Diary
        </Button>
        </ButtonContainer>
        <Icons>
          <IconButton>
            <BiHelpCircle size={24} />
          </IconButton>
          <IconButton onClick={toggleNotificationDropdown}>
            <BiBell size={24} />
            {isNotificationDropdownOpen && (
              <NotificationDropdown
                ref={notificationDropdownRef}
                notifications={notifications}
              />
            )}
          </IconButton>
          <Profile ref={profileDropdownRef}>
            <Link to="/mypage">
              <img src={profileImage} alt="profile" />
            </Link>
            <span>User</span>
            <IconButton onClick={toggleProfileDropdown}>
              <BiSolidChevronDown size={24} />
            </IconButton>
            {isProfileDropdownOpen && (
              <Dropdown>
                <DropdownItem>LOGOUT</DropdownItem>
              </Dropdown>
            )}
          </Profile>
        </Icons>
      </Container>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 20px;
    color: ${({ theme }) => theme.color.gray999};
  }
  h1 {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.title.title3};
    font-weight: bold;
    background: linear-gradient(90deg, #9ad9ea, #202879);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.color.grayDF};
  border-radius: 8px;
  svg {
    color: ${({ theme }) => theme.color.gray999};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

const SearchInput = styled.input`
  width: 400px;
  margin-left: 8px;
  border: none;
  background: none;
  outline: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.color.gray999};
    margin-right: 20px;
  }
`;

const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  span {
    margin: 0 8px;
  }
`;

const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  &:hover {
    svg {
      color: ${({ theme }) => theme.color.grayblack};
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grayDF};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.grayLight};
  }
`;

export default Header;
