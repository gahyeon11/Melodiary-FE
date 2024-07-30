import styled from 'styled-components';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainLayout>
        <Sidebar />
        <MainContent>
          {children}
        </MainContent>
      </MainLayout>
    </LayoutWrapper>
  )
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

const MainContent = styled.main`
  flex: 1;
  padding: 16px;
`;
