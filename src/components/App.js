import React, { useState, useEffect } from 'react';
import { Router, Location } from '@reach/router';
import { withPrefix } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import SEO from './seo';
import Header from './Header';
import EmptyResume from './EmptyResume';
import Account from './Account';
import Editor from './Editor';

const initialLoaderAnimation = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    opacity: 0.75;
  }
`;

const LoaderWrapper = styled.div`
  height: 100%;

  #init-loading-svg {
    width: 44px;
    animation: ${initialLoaderAnimation} 0.8s cubic-bezier(0.53, 0.22, 0.85, 0.58) 0s infinite alternate;
  }
`;

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

const InitialLoading = () => {
  useEffect(() => {
    
  }, []);

  return (
    <React.Fragment>
      <SEO title="Loading..." />
      <LoaderWrapper className="flex-center">
        <svg id="init-loading-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 134">
          <title>Asset 4</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="PictorialMark">
                <path d="M110.33,0H4.66C2.09,0,0,1.73,0,3.85V35L39.9,70.44,113.7,6.51C116.53,4.06,114.43,0,110.33,0Z" style={{fill: "#4bc4ff"}} />
                <path d="M0,35v95a4.13,4.13,0,0,0,4.25,4h96.5a4,4,0,0,0,2.91-6.91Z" style={{fill: "#026dfe"}}/>
                <polygon points="0 105 39.9 70.44 0 35 0 105" style={{fill: "#1194fe"}} />
              </g>
            </g>
          </g>
        </svg>
      </LoaderWrapper>
    </React.Fragment>
  );
};

const Dashboard = () => {
  return (
    <React.Fragment>
      <SEO title="Dashboard" />
      <MainContainer>
        <Location>
          {({ location }) => {
            return (
              <React.Fragment>
                <Header pathname={location.pathname} />
                <Section>
                  <StyledRouter>
                    <EmptyResume path={"/"} />
                    <Account path={"account"} />
                  </StyledRouter>
                </Section>
              </React.Fragment>
            );
          }}
        </Location>
      </MainContainer>
    </React.Fragment>
  );
};

const App = () => {
  const [ loaded, setLoaded ] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);
  return loaded 
  ? <StyledRouter>
      <Dashboard path={withPrefix("/app/*")} />
      <Editor path={withPrefix("/app/editor")} />
    </StyledRouter>  
  : <InitialLoading />
};

export default App;