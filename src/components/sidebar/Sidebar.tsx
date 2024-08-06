import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiUsers, FiUser } from "react-icons/fi";
import { LuLayoutGrid } from "react-icons/lu";
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Home으로 이동 시 Link로 이동 하게 되면 확장 상태 조정을 명시적으로 하기가 어려워서 navigation 함수를 이용해서 상태를 명시적으로 설정하도록 하였습니다. 
  const links = [
    { to: "/home", icon: <FiHome />, state: { isExpanded: false } },
    { to: "/explore", icon: <LuLayoutGrid /> },
    { to: "/mates", icon: <FiUsers /> },
    { to: "/mypage", icon: <FiUser /> },
  ];

  const handleLinkClick = (to: string, state: any) => {
    navigate(to, { state });
  };

  return (
    <SidebarWrapper>
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        // const isActive = location.pathname.startsWith(link.to);
        return (
          <SidebarLink 
            as="div"
            // to={link.to} 
            key={link.to}
            active={isActive}
            onClick={() => handleLinkClick(link.to, link.state)}
          > {isActive && (
              <Background
                layoutId="activeBackground"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
            {link.icon}
          </SidebarLink>
        )
    })}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 74px;
  height: 100%;
  padding: 24px 0;
  border-right: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const SidebarLink = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  color: ${({ theme, active }) => (active ? theme.color.primary : theme.color.gray777)};
  font-size: 28px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    transition: all 0.15s ease-in-out;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #006AD71A;
  border-radius: 14px;
  z-index: -1;
`;

export default Sidebar;
