import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import img_logo from '../../assets/img/logo.svg';
import AccountDropdown from './AccountDropdown';

const StyledHeader = styled.header`
  flex: 0 1 auto;
  padding: 40px 0 0 0;

  h1 {
    margin: 60px 0 28px 0;
    color: #00174A;
    font-size: 28px;
  }
`;

export const Container = styled.div`
  width: 1130px;
  max-width: 90%;
  margin: auto;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 33px;
`;

const Header = ({ pathname }) => {
  const getTitleByPathname = pathname => {
    if (pathname === '/app' || pathname === '/app/') {
      return "Your resumes";
    } else {
      return "Account Settings";
    }
  };
  return (
    <StyledHeader>
      <Container>
        <Topbar>
          <Link to="/app">
            <Logo src={img_logo} alt="Resumi logo" />
          </Link>
          <AccountDropdown />
        </Topbar>
      <h1>{getTitleByPathname(pathname)}</h1>
      </Container>
    </StyledHeader>
  );
};

export default Header;