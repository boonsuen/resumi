import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import img_logo from '../../assets/img/logo.svg';

const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  margin-top: 68px;

  a {
    display: flex;
    width: 142px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 227px;
  height: 44px;

  a {
    display: inline-block;
    width: 104px;
    padding: 8px 0;
    text-align: center;
    border-radius: 5px;
    transition: all 0.3s;
  }
`;

const LoginButton = styled(Link)`
  border: 1px solid;
  color: #1e226d;

  &:hover {
    color: #0d1131;
    box-shadow: 0 2px 5px #e5ecff;
  }
`;

const SignupButton = styled(Link)`
  background: #0555ff;
  color: #fff;

  &:hover {
    background: #004fed;
    box-shadow: 0 2px 5px #e5ecff;
  }
`;


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
