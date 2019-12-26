import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 160px;
  background: #498cff;
  color: #fff;
`;

const Footer = () => (
  <StyledFooter>
    <div className="container">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://boonsuen.com" target="_blank" rel="noopener noreferrer">Boonsuen</a>
    </div>
  </StyledFooter>
);

export default Footer;