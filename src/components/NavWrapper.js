import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import img_logo from '../assets/img/logo.svg';

const StyledNavWrapper = styled.div`
  background: #f3f2ff;
  padding-top: 68px;
  margin-bottom: 1.45rem;

  img {
    width: 142px;
  }
`;

const NavWrapper = ({ siteTitle }) => (
  <StyledNavWrapper className="container">
    <Link to="/">
      <img src={img_logo} alt={siteTitle} />
    </Link>
  </StyledNavWrapper>
);

NavWrapper.propTypes = {
  siteTitle: PropTypes.string,
}

NavWrapper.defaultProps = {
  siteTitle: ``,
}

export default NavWrapper;
