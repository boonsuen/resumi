import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import img_logo from '../assets/img/logo.svg';

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3f2ff;
  padding-top: 68px;
  margin-bottom: 1.45rem;

  img {
    width: 142px;
  }
`;

const ButtonsWrapper = styled.div`

`;

const LoginButton = styled(Link)``;

const SignupButton = styled(Link)``;


const NavWrapper = ({ siteTitle }) => (
  <StyledNavWrapper className="container">
    <Link to="/">
      <img src={img_logo} alt={siteTitle} />
    </Link>
    <ButtonsWrapper>
      <LoginButton to="/login">Login</LoginButton>
      <SignupButton to="/signup">Signup</SignupButton>
    </ButtonsWrapper>
  </StyledNavWrapper>
);

NavWrapper.propTypes = {
  siteTitle: PropTypes.string,
}

NavWrapper.defaultProps = {
  siteTitle: ``,
}

export default NavWrapper;
