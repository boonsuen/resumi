import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import img_logo from '../assets/img/logo.svg';

const StyledNavWrapper = styled.div`
  background: #e4e0ff;
  margin-bottom: 1.45rem;
`;

const NavWrapper = ({ siteTitle }) => (
  <StyledNavWrapper className="container">
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img src={img_logo} alt={siteTitle}/>
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
