import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Header</h1>
    </HeaderWrapper>
  )
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayDF};
`;

export default Header;