import styled from 'styled-components';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';
import BeforeLoginHeader from '../header/BeforeLoginHeader';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <LayoutWrapper>
      {isLoggedIn ? ( 
        <>
          <Header />
          <MainLayout>
            <Sidebar />
            <MainContent>
              {children}
            </MainContent>
          </MainLayout>
        </>
      ) : (
        <>
        <BeforeLoginHeader />
        <MainLayout>
          {children}
        </MainLayout>
        </>
      )}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* align-items: flex-start; */
  width: 100%;
  height: calc(100vh - 64px);

  main {
    width: 100%;
  }
`;

const MainContent = styled.div`
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.color.grayDF};
`;