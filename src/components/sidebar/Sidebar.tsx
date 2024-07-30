import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiUser } from "react-icons/fi";
import { LuLayoutGrid } from "react-icons/lu";
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { to: "/home", icon: <FiHome /> },
    { to: "/explore", icon: <LuLayoutGrid /> },
    { to: "/mates", icon: <FiUsers /> },
    { to: "/mypage", icon: <FiUser /> },
  ];

  return (
    <SidebarWrapper>
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        return (
          <SidebarLink 
            to={link.to} 
            key={link.to}
            active={isActive}
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
  height: calc(100vh - 64px);
  padding: 24px 0;
  border-right: 1px solid ${({ theme }) => theme.color.grayDF};
`;

const SidebarLink = styled(Link)<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  color: ${({ theme, active }) => (active ? theme.color.primary : theme.color.gray777)};
  font-size: 28px;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
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
