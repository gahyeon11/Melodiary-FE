import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaRegCheckCircle, FaRegTimesCircle, FaLongArrowAltRight  } from 'react-icons/fa';
import { dummyFriendRequests, dummyMates } from '../../dummyData';
import { Link } from 'react-router-dom';

function MatesSidebar() {
  const handleAccept = (id: number) => {
    // 수락 로직 구현 필요
    console.log(`수락 id: ${id}`);
  };

  const handleReject = (id: number) => {
    // 거절 로직 구현 필요
    console.log(`거절 id: ${id}`);
  };

  return (
    <MatesSidebarWrapper>
      <Section>
        <SectionTitle>Mate Request List</SectionTitle>
        {dummyFriendRequests.map((request) => (
          <FriendItem key={request.id}>
            <ProfileLink to={`/home/${request.id}`}>
              {request.profileImgURL ? (
                <ProfileImage
                  src={request.profileImgURL}
                  alt={`${request.nickname} profile`}
                />
              ) : (
                <DefaultIcon />
              )}
            </ProfileLink>
            <Nickname>{request.nickname}</Nickname>
            <IconButtons>
              <AcceptIcon onClick={() => handleAccept(request.id)} />
              <RejectIcon onClick={() => handleReject(request.id)} />
            </IconButtons>
          </FriendItem>
        ))}
      </Section>
      <Section>
        <SectionTitle>Mates</SectionTitle>
        {dummyMates.map((mate) => (
          <FriendItemLink to={`/home/${mate.id}`} key={mate.id}>
            <FriendItem>
              <ProfileLink to={`/home/${mate.id}`}>
                {mate.profileImgURL ? (
                  <ProfileImage
                    src={mate.profileImgURL}
                    alt={`${mate.nickname} profile`}
                  />
                ) : (
                  <DefaultIcon />
                )}
              </ProfileLink>
              <Nickname>{mate.nickname}</Nickname>
              <Arrow><FaLongArrowAltRight /></Arrow>
            </FriendItem>
          </FriendItemLink>
        ))}
      </Section>
    </MatesSidebarWrapper>
  );
}

const MatesSidebarWrapper = styled.div`
  width: 250px;
  padding: 40px;
  border-right: 1px solid ${({ theme }) => theme.color.grayDF};
  /* border-left: 1px solid ${({ theme }) => theme.color.grayDF}; */
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.greenblue};
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.greenblue};
  padding-bottom: 5px;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

const DefaultIcon = styled(FaUserCircle)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.gray999};
  margin-right: 10px;
`;

const Nickname = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};
`;

const IconButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const AcceptIcon = styled(FaRegCheckCircle)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray777};
  &:hover {
    color: ${({ theme }) => theme.color.grayblack};
  }
`;

const RejectIcon = styled(FaRegTimesCircle)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray777};
  &:hover {
    color: ${({ theme }) => theme.color.grayblack};
  }
`;

const Arrow = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.color.gray777};
  &:hover {
    color: ${({ theme }) => theme.color.grayblack};
  }
`;

const FriendItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default MatesSidebar;
