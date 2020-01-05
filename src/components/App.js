import React from 'react';
import styled from 'styled-components';

import SEO from './seo';
import Header from './Header';
import img_folder from '../assets/img/app/folder.svg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
      <Header />
      <ResumesSection>
        <img src={img_folder} alt="Folder illustration" />
        <p>Oops... It's empty here.<br />Let's create your resume</p>
        <button>New resume</button>
      </ResumesSection>
    </MainContainer>
  </React.Fragment>
);

export default App;