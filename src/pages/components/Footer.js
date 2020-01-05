import React from 'react';
import styled from 'styled-components';

import img_GitHub from '../../assets/img/icons/github.svg';
import img_Twitter from '../../assets/img/icons/twitter.svg';

const StyledFooter = styled.footer`
  height: 160px;
  background: #498cff;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SocialLink = styled.a`
  &:first-child {
    margin-right: 40px;
  }

  img {
    width: 20px;
    transition: all 0.3s;
  }

  &:hover img {
    margin-left: calc(50% - 10px);
  }
`;

const SocialText = styled.span`
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

const Separator = styled.div`
  width: 1px;
  height: 62px;
  background: #fff;
  margin: 0 40px;
`;

const FooterText = styled.div`
  a {
    border-bottom: 1px solid;
    padding-bottom: 3px;
    color: #E4EAFF;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container className="container">
      <SocialLink href="https://twitter.com/boon_suen" target="_blank" rel="noopener noreferrer">
        <img src={img_Twitter} alt="Twitter" />
        <SocialText>Twitter</SocialText>
      </SocialLink>
      <SocialLink href="https://github.com/boonsuen/resumi" target="_blank" rel="noopener noreferrer">
        <img src={img_GitHub} alt="GitHub" />
        <SocialText>GitHub</SocialText>
      </SocialLink>
      <Separator />
      <FooterText>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://boonsuen.com" target="_blank" rel="noopener noreferrer">Boonsuen</a>
      </FooterText>
    </Container>
  </StyledFooter>
);

export default Footer;