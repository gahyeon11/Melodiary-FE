import React from "react";
import styled from "styled-components";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { FaGlobe, FaLock, FaUserCircle, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DiaryItemProps } from "./DiaryItem";

const DiaryHeader: React.FC<DiaryItemProps> = ({
  diary,
  user,
  isSummary = false,
  toggleExpand,
  isExpanded,
}) => {
  const renderPrivacyIcon = () => {
    switch (diary.body.privacy) {
      case "mate":
        return <FaUserFriends />;
      case "public":
        return <FaGlobe />;
      case "private":
        return <FaLock />;
      default:
        return null;
    }
  };

  return (
    <HeaderContainer isSummary={isSummary}>
      <Title>
        {isSummary ? (
          <DiaryProfile isSummary={isSummary}>
            <Link to={`/home/${user.user_id}`}>
              {user.profileImgURL ? (
                <ProfileImage
                  isSummary={isSummary}
                  src={user.profileImgURL}
                  alt={user.nickname}
                />
              ) : (
                <ProfileIconContainer isSummary={isSummary}>
                  <DefaultProfileIcon isSummary={isSummary} />
                </ProfileIconContainer>
              )}
            </Link>
            <ProfileText>
              <p>{user.nickname}</p>
              <DiaryDate isSummary={isSummary}>{diary.created_at}</DiaryDate>
            </ProfileText>
          </DiaryProfile>
        ) : (
          <>
            <PrivacyContainer>
              {renderPrivacyIcon()}{" "}
              <PrivacyText>
                {diary.body.privacy === "mate"
                  ? "친구공개"
                  : diary.body.privacy === "public"
                  ? "전체공개"
                  : "나만보기"}
              </PrivacyText>
            </PrivacyContainer>
            <DiaryDate isSummary={isSummary}>{diary.created_at}</DiaryDate>
          </>
        )}

        {!isSummary && (
          <Right>
            <DiaryTitle isSummary={isSummary}>{diary.body.title}</DiaryTitle>
          </Right>
        )}
      </Title>
      {!isSummary && (
        <Right>
          <DiaryButton>
            <Link to="/writeDiary">
              <button type="button">수정하기</button>
            </Link>
            <Link to="/writeDiary">
              <button type="button">삭제하기</button>
            </Link>
          </DiaryButton>
          <DiaryProfile isSummary={isSummary}>
            <Link to={`/home/${user.user_id}`}>
              {user.profileImgURL ? (
                <ProfileImage
                  isSummary={isSummary}
                  src={user.profileImgURL}
                  alt={user.nickname}
                />
              ) : (
                <ProfileIconContainer isSummary={isSummary}>
                  <DefaultProfileIcon isSummary={isSummary} />
                </ProfileIconContainer>
              )}
            </Link>
            <p>{user.nickname}</p>
          </DiaryProfile>
        </Right>
      )}
      {!isSummary && toggleExpand && (
        <ToggleButton onClick={toggleExpand}>
          {isExpanded ? <BiChevronsRight /> : <BiChevronsLeft />}
        </ToggleButton>
      )}
    </HeaderContainer>
  );
};

export default DiaryHeader;

interface DiaryTextProps {
  isSummary: boolean;
}

const ProfileIconContainer = styled.div<DiaryTextProps>`
  width: ${({ isSummary }) => (isSummary ? "55px" : "30px")};
  height: ${({ isSummary }) => (isSummary ? "55px" : "30px")};
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultProfileIcon = styled(FaUserCircle)<DiaryTextProps>`
  width: ${({ isSummary }) => (isSummary ? "55px" : "30px")};
  height: ${({ isSummary }) => (isSummary ? "55px" : "30px")};
  color: ${({ theme }) => theme.color.gray999};
`;

const HeaderContainer = styled.div<DiaryTextProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  padding: ${({ isSummary }) => (isSummary ? "5% 0 0 5%" : "80px 10% 0 10%")};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.text.text3};
  color: ${({ theme }) => theme.color.gray999};
`;

const PrivacyText = styled.p`
  margin: 0;
`;

const DiaryTitle = styled.h2<DiaryTextProps>`
  margin: 0;
  font-size: ${({ theme }) => theme.title.title3};
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  justify-content: start;
  margin: ${({ isSummary }) => (isSummary ? "0 0 15px 0" : "10px 0")};
`;

const DiaryDate = styled.div<DiaryTextProps>`
  font-size: ${({ isSummary, theme }) =>
    isSummary ? ` ${theme.text.text2}` : `${theme.text.text1}`};

  color: ${({ isSummary, theme }) =>
    isSummary ? ` ${theme.color.gray999}` : `${theme.color.black}`};
  margin: ${({ isSummary }) => (isSummary ? "0" : "0 0 10px 0")};
`;

const Right = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
  justify-content: start;
`;

const DiaryButton = styled.div`
  button {
    padding: 5px 10px;
    border: none;
    border-right: 1px solid ${({ theme }) => theme.color.grayDF};
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.color.gray777};
  }
`;

const DiaryProfile = styled.div<DiaryTextProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ isSummary }) => (isSummary ? "10px" : "5px")};
  p {
    padding-bottom: ${({ isSummary }) => (isSummary ? "0" : "2px")};
    font-weight: ${({ isSummary }) => (isSummary ? "600" : "0")};
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img<DiaryTextProps>`
  width: ${({ isSummary }) => (isSummary ? "55px" : "30px")};
  height: ${({ isSummary }) => (isSummary ? "55px" : "30px")};
  border-radius: 50%;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 30px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray777};
`;
