import React from 'react';
import styled from 'styled-components';

import img_logo from '../../assets/img/logo.svg';
import AccountButton from './AccountButton';

const StyledHeader = styled.header`
  flex: 0 1 auto;
  padding: 40px 0 0 0;
`;

const Container = styled.div`
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

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Topbar>
          <Logo src={img_logo} alt="Resumi logo" />
          <AccountButton />
        </Topbar>
      <h1>Your resumes</h1>
      </Container>
    </StyledHeader>
  );
};

export default Header;