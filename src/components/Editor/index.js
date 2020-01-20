import React from 'react';
import styled from 'styled-components';

import EditSection from './EditSection';
import ResumePreviewSection from './ResumePreviewSection';
import SEO from '../seo';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Editor = () => {
  return (
    <React.Fragment>
      <SEO title="Editor" />
      <MainContainer>
        <EditSection />
        <ResumePreviewSection />
      </MainContainer>
    </React.Fragment>
  );
};

export default Editor;