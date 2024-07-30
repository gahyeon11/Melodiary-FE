import styled from 'styled-components';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <LayoutWrapper>
      <Header />
      {isLoggedIn ? (
        <MainLayout>
          <Sidebar />
          <main>
            {children}
          </main>
        </MainLayout>
      ) : (
        <main>
          {children}
        </main>
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
  align-items: flex-start;
  width: 100%;
`;
