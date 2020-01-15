import React from 'react';
import { Router, Location } from '@reach/router';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';

import SEO from './seo';
import Header from './Header';
import EmptyResume from './EmptyResume';
import Account from './Account';
import Editor from './Editor';

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

// const App = () => {
//   return (
//     <React.Fragment>
//       <SEO title="Dashboard" />
//       <MainContainer>
//         <Location>
//           {({ location }) => {
//             return (
//               <React.Fragment>
//                 <Header pathname={location.pathname} />
//                 <Section>
//                   <StyledRouter>
//                     <EmptyResume path={withPrefix("app")} />
//                     <Account path={withPrefix("app/account")} />
//                   </StyledRouter>
//                 </Section>
//               </React.Fragment>
//             );
//           }}
//         </Location>
//       </MainContainer>
//     </React.Fragment>
//   );
// };

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

const App = () => (
  <StyledRouter>
    <Dashboard path={withPrefix("/app/*")} />
    <Editor path={withPrefix("/app/editor")} />
  </StyledRouter>
);

export default App;