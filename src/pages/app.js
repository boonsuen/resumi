import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import img_logo from '../assets/img/logo.svg';
import img_account from '../assets/img/app/icons/account.svg';
import img_folder from '../assets/img/app/folder.svg';

const Logo = styled.img`
  height: 33px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  flex: 0 1 auto;
`;

const ResumesSection = styled.section`
  background: #F5F9FA;
  flex: 1 1 auto;

  img {
    width: 139px;
  }
`;

const App = () => (
  <React.Fragment>
    <SEO title="Dashboard" />
    <MainContainer>
      <Header>
        <Logo src={img_logo} alt="Resumi logo" />
        <img src={img_account} alt="Account" />
        <h1>Your resumes</h1>
      </Header>
      <ResumesSection>
        <img src={img_folder} alt="Folder illustration" />
      </ResumesSection>
    </MainContainer>
  </React.Fragment>
);

export default App;