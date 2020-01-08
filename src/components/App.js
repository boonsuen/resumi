import React, { useState } from 'react';
import styled from 'styled-components';

import SEO from './seo';
import Header from './Header';
import EmptyResume from './EmptyResume';

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

const App = () => {
  return (
    <React.Fragment>
      <SEO title="Dashboard" />
      <MainContainer>
        <Header />
        <ResumesSection>
          <EmptyResume />
        </ResumesSection>
      </MainContainer>
    </React.Fragment>
  );
};

export default App;