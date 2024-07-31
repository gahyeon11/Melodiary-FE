import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import {
  BiBell,
  BiEdit,
  BiHeadphone,
  BiHelpCircle,
  BiSolidChevronDown,
  BiSearch,
} from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import NotificationDropdown from "../notification/NotificationDropdown";
import profileImage from "../../assets/img/cat.jpg"; //api 연결 전 가상 프로필입니다! 필요하다면 사진 업로드 하겠습니다.

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
    //알림 api 연결 전 더미데이터 입니다.
    {
      id: 1,
      content: "00님이 회원님이 회원님에게 친구 요청했습니다.",
      diaryId: 1,
      category: "friend",
      date: "2024-07-26",
    },

  ];

  return (
    <HeaderWrapper>
      <Link to="/home">
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
          <Link to="/writeDiary">
            <Button size="medium" schema="primary">
              <BiEdit size={20} /> Create Diary
            </Button>
          </Link>
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
          {/* 유저 API 연결 전 상태입니다.  */}
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
                {/* 로그아웃 기능 연결 전 상태입니다.  */}
                <DropdownItem>
                  <CiLogout size={20} />
                  LOGOUT
                </DropdownItem>
              </Dropdown>
            )}
          </Profile>
        </Icons>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
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
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grayDF};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.grayLight};
  }
  span {
    margin-left: 8px;
  }
  svg {
      color: ${({ theme }) => theme.color.grayblack};
    }
`;

export default Header;