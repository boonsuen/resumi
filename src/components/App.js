import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import SEO from './seo';
import Header from './Header';
import EmptyResume from './EmptyResume';
import Account from './Account';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Section = styled.section`
  background: #F5F9FA;
  flex: 1 1 auto;
`;

const StyledRouter = styled(Router)`
  height: 100%;
`;

const App = () => {
  return (
    <React.Fragment>
      <SEO title="Dashboard" />
      <MainContainer>
        <Header />
        <Section>
          <StyledRouter>
            <EmptyResume path="/app" />           
            <Account path="/app/account" />
          </StyledRouter>
        </Section>
      </MainContainer>
    </React.Fragment>
  );
};

export default App;